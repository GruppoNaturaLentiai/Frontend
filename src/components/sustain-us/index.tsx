import Icon from "../icons"
import sustainUs from "./../../data/sustain-us.json"
import React from "react"
import * as S from "./styled"
import * as T from "./../typography"

const bankDetails = {
  IBAN: sustainUs["IBAN"].account,
  bank: sustainUs["IBAN"].bank,
  icon: <Icon type="bank" />,
}

const SustainUs = () => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <T.H2>Ti piace quello che facciamo e condividi i nostri ideali?</T.H2>
        <T.H1 $font="Caveat">Sostienici!</T.H1>
      </S.HeaderWrapper>
      <S.ContentWrapper>
        <S.IconWrapper>{bankDetails.icon}</S.IconWrapper>
        <S.IBANWrapper>
          <T.H2>{bankDetails.IBAN}</T.H2>
          <T.P3>{bankDetails.bank}</T.P3>
        </S.IBANWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}

export default SustainUs
