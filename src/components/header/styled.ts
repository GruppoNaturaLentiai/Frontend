import styled from "styled-components"

export const Header = styled.header`
  height: 50px;
  background-color: rgba(0, 255, 0, 0.51);
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  justify-content: space-between;
`

export const LeftWrapper = styled.div`
  min-width: 100px;
`

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding-right: 32px;
`