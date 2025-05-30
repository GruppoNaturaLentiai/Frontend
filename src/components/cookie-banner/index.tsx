import React, { useEffect, useState } from "react"
import CookiePreferences from "../cookie-preferences"
import * as S from "./styled"

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    const preferences = localStorage.getItem("cookie-preferences")
    const { analytics, lastUpdated } = JSON.parse(preferences || "{}")

    const shouldShowBanner = () => {
      // If keys are not present, show banner
      if (analytics === undefined || lastUpdated === undefined) return true
      // If keys are present, check if preferences are expired
      const lastConsentDate = new Date(lastUpdated)
      const now = new Date()
      const daysSinceConsent =
        (now.getTime() - lastConsentDate.getTime()) / (1000 * 60 * 60 * 24)
      // If preferences are expired, remove them and show banner
      const expiredPreferences = daysSinceConsent > 30
      if (expiredPreferences) {
        localStorage.removeItem("cookie-preferences")
      }
      return expiredPreferences
    }

    if (shouldShowBanner()) {
      setVisible(true)
    }
  }, [])

  const saveConsent = (consentType: "all" | "necessary") => {
    const preferences = {
      analytics: consentType === "all",
      lastUpdated: new Date().toISOString(),
    }

    localStorage.setItem("cookie-preferences", JSON.stringify(preferences))
    setVisible(false)

    if (consentType === "necessary") {
      clearAnalyticsCookies()
    }
  }

  const clearAnalyticsCookies = () => {
    const cookies = document.cookie.split(";")
    cookies.forEach(cookie => {
      const name = cookie.split("=")[0].trim()
      // Clear Google Analytics and Gatsby cookies
      if (
        name.startsWith("_") ||
        name.startsWith("ga") ||
        name.startsWith("_ga") ||
        name.startsWith("_gid") ||
        name.startsWith("_gat") ||
        name.startsWith("gatsby")
      ) {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname};`
      }
    })
  }

  return (
    <>
      {visible && (
        <S.BannerContainer>
          <S.BannerText>
            Utilizziamo cookie tecnici necessari per il funzionamento del sito e
            cookie analitici per migliorare la tua esperienza. I cookie tecnici
            sono sempre attivi, mentre quelli analitici richiedono il tuo
            consenso.
          </S.BannerText>
          <S.ButtonRow>
            <S.BannerButton
              onClick={() => saveConsent("all")}
              color="#3182ce"
              aria-label="Accetta tutti i cookie"
            >
              <S.ButtonText>Accetta tutti</S.ButtonText>
            </S.BannerButton>
            <S.BannerButton
              onClick={() => saveConsent("necessary")}
              color="#e53e3e"
              aria-label="Rifiuta tutti i cookie tranne quelli tecnici"
            >
              <S.ButtonText>Accetta solo necessari</S.ButtonText>
            </S.BannerButton>
            <S.BannerButton
              onClick={() => setShowPreferences(true)}
              color="#4a5568"
              aria-label="Gestisci le preferenze dei cookie"
            >
              <S.ButtonText>Personalizza</S.ButtonText>
            </S.BannerButton>
          </S.ButtonRow>
        </S.BannerContainer>
      )}
      {showPreferences && (
        <CookiePreferences
          onClose={() => {
            setShowPreferences(false)
            // Also hide the banner when preferences are saved
            const prefs = localStorage.getItem("cookie-preferences")
            if (prefs) {
              setVisible(false)
            }
          }}
        />
      )}
    </>
  )
}

export default CookieBanner
