import styled from "styled-components"
import { colors } from "../../styles"

export const Wrapper = styled.div`
  width: 80%;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Legend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 24px;
  background-color: ${colors.green.green200};
  border-radius: 8px;
`

export const LegendElement = styled.div<{ $isHovered: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  ${({ $isHovered }) => $isHovered ? "opacity: 1;" : "opacity: 0.4;"}
  transition: all 0.5s;
  > h3 {
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
