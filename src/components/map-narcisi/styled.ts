import styled from "styled-components"
import { breakpointNum, colors } from "../../styles"
import { Popup } from "react-leaflet"

export const Wrapper = styled.div`
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const LeafletPopupStyled = styled(Popup)`
  .leaflet-popup-tip-container {
    margin: 0;
  }
`

export const Legend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 24px;
  background-color: ${colors.green.green200};
  border-radius: 8px;
  column-gap: 1em;
  justify-content: center;
  @media (max-width: ${breakpointNum.tablet}px) {
    justify-content: space-between;
    padding: 16px;
    flex-wrap: wrap;
    row-gap: 1em;
  }
`

export const LegendElement = styled.div<{ $isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  ${({ $isSelected }) => ($isSelected ? "opacity: 1;" : "opacity: 0.4;")}
  transition: all 0.5s;
  > h3 {
    margin-top: 0px;
  }
  @media (max-width: ${breakpointNum.mobile}px) {
    gap: 4px;
  }
`

export const Dot = styled.div<{ $color: string }>`
  width: 12px;
  height: 12px;
  ${({ $color }) => `background-color: ${$color};`}
  border-radius: 50%;
`

export const PathInfo = styled.div`
  background-color: ${colors.green.green100};
  padding: 1em;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PathInfoUpper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  width: 100%;
  justify-content: space-around;
`

export const PathInfoElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`

export const PathInfoIcon = styled.div`
  width: 24px;
  height: 24px;
`
  