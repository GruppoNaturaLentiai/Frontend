import styled from "styled-components"
import * as T from "./../typography"
import { colors } from "../../styles"

export const Wrapper = styled.div`
  padding: 32px;
`

export const Title = styled(T.H1)`
  text-align: center;
`

export const IconWrapper = styled.div`
  cursor: pointer;
  margin-top: 8px;
  transition: all 0.5s;
  > * {
    transition: all 0.5s;
    fill: ${colors.green.green800};
    &:hover {
      fill: ${colors.green.green900};
    }
    &:focus {
      fill: ${colors.green.green950};
    }
    > * {
      transition: all 0.5s;
      fill: ${colors.green.green800};
      &:hover {
        fill: ${colors.green.green900};
      }
      &:focus {
        fill: ${colors.green.green950};
      }
      > * {
        transition: all 0.5s;
        fill: ${colors.green.green800};
        &:hover {
          fill: ${colors.green.green900};
        }
        &:focus {
          fill: ${colors.green.green950};
        }
      }
    }
  }
`

export const LinkText = styled.div`
  cursor: pointer;

  > a {
    text-decoration: none;
    color: ${colors.green.green800};
    > h2 {
      margin: 0;
    }
  }

  > h2 {
    margin: 0;
  }
`

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  padding: 32px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`
