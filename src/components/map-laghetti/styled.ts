import styled from "styled-components"

export const Wrapper = styled.div`
  width: 80%;
  padding: 16px;
  border-radius: 8px;
`

export const Legend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 20px;
`

export const LegendElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  > h4 {
    margin-top: 0px;
  }
`

export const Dot = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  ${({ $color }) => `background-color: ${$color};`} 
  border-radius: 50%;
  display: "inline-block";
`
