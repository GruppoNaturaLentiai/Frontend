import { useLocation, navigate } from "@reach/router"
import React, { useEffect, useState } from "react"
import DefaultLayout from "../components/default-layout"
import Post from "../components/post"
import { remoteGraphqlURL } from "../constants"

// type for fetching remote data: dynamic fallback
type RemotePost = {
  title: string
  publishedAt: string
  bodyRaw: any
  author?: string
  image?: {
    asset?: {
      url?: string
      description?: string
      altText?: string
      title?: string
    }
  }
  slug: {
    current: string
  }
}

const PostClientTemplate: React.FC = () => {
  const { pathname } = useLocation()
  const slug = pathname // Use the full path as the slug

  const [post, setPost] = useState<RemotePost | null>(null);
  const [loading, setLoading] = useState(true); // Start with loading true
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);
  
  const fetchPostData = async (slug: string): Promise<RemotePost | null> => {
    try {
      const query = `query {
        allPost {
          title
          slug {
            current
          }
          publishedAt
          bodyRaw
          author
          image {
            asset {
              description
              title
              altText
              url
            }
          }
        }
      }`

      const response = await fetch(remoteGraphqlURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      })

      const result = await response.json()
      if (result.errors) {
        throw new Error(result.errors[0].message)
      }

      const thePost = (result.data?.allPost || [])
        .find((post: RemotePost) => 
          post.slug?.current === slug || 
          post.slug?.current === slug.replace(/\/$/, '')
        )
      
      if (!thePost) {
        setNotFound(true)
        return null
      }
      
      return thePost
    } catch (err) {
      console.error("Error fetching post:", err)
      setError("Failed to fetch post data.")
      return null
    }
  }

  useEffect(() => {
    let isMounted = true;

    const loadPost = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const fetchedPost = await fetchPostData(slug);
        
        if (!isMounted) return;
        
        if (fetchedPost) {
          setPost(fetchedPost);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      } catch (err) {
        if (!isMounted) return;
        console.error('Error in loadPost:', err);
        setError('An error occurred while loading the post');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadPost();
    
    return () => {
      isMounted = false;
    };
  }, [slug]);
  
  // Handle navigation when notFound changes
  useEffect(() => {
    if (notFound && typeof window !== 'undefined') {
      navigate('/404', { replace: true }).catch((err: Error) => {
        console.error('Navigation error:', err);
      });
    }
  }, [notFound, navigate]);

  // Show loading state
  if (loading) {
    return (
      <DefaultLayout>
        <p>Caricamento...</p>
      </DefaultLayout>
    );
  }

  // If there was an error, show error message
  if (error) {
    return (
      <DefaultLayout>
        <p>Errore: {error}</p>
      </DefaultLayout>
    );
  }

  // If post is not found, we'll show a 404 page
  // The navigation is handled by the useEffect above
  if (notFound || !post) {
    return null;
  }

  // At this point, we know post is defined
  const renderTitle = post.title
  const renderPublishedAt = post.publishedAt
  const renderBody = post.bodyRaw
  const author = post.author || null

  // main image code
  const mainImgAlt = post.image?.asset?.altText || ""
  const renderImageUrl = post.image?.asset?.url || null

  // Handle loading and error states
  if (loading) return <p>Caricamento...</p>
  if (error || !post) {
    // This will set the status code to 404 on the server side
    if (typeof window !== 'undefined') {
      navigate('/404', { replace: true })
    }
    return null
  }

  return (
    <DefaultLayout>
      <Post
        renderTitle={renderTitle}
        renderPublishedAt={renderPublishedAt ?? ""}
        gatsbyImage={undefined}
        renderImageUrl={renderImageUrl ?? ""}
        renderBody={renderBody}
        author={author ?? ""}
        coverImageAlt={mainImgAlt}
      />
    </DefaultLayout>
  )
}

export default PostClientTemplate
