import React from "react"
import Icon from "../icons"
import * as T from "./../typography"
import * as S from "./styled"


const content = {
  laghetti: {
    icons: ["dog-poo", "litter", "dog-leash"],
    text: {
      header: "LAGHETTI DELLA RIMONTA",
      subheader: "Avvertenze di accesso",
      rules: ["L'area è un biotopo, non un parco giochi. Va percorsa in silenzio per non disturbare l'avifauna",
        "Le biciclette vanno parcheggiate sotto il cavalcavia su una apposita barra di fissaggio. Il sentiero va percorso possibilmente a piedi",
        "Si prega di non lasciare tracce del proprio passaggio (rifiuti, ecc...)",
        "I cani non vanno lasciati liberi",
        "Si prega di raccogliere i bisogni dei vostri animali e di smaltirli nell'apposito bidone situato nella piazza della fontana di Bardies",
      ],
      end: "Grazie per l'attenzione. Buona passeggiata!"
    }
  },
  narcisi: {
    icons: ["crop", "dog-poo", "litter", "dog-leash", "electric-fence"],
    text: {
      header: "AREA FIORITURA NARCISI",
      subheader: "Avvertenze di accesso",
      rules: [
        "I prati sono proprietà private. Si prega di non entrare nei terrenti",
        "I fiori vanno osservati, fotografati, ma non raccolti",
        "Si prega di non uscire dalla strada e di non parcheggiare l'auto sui prati",
        "Si prega di non lasciare tracce del proprio passaggio (rifiuti, ecc...)",
        "I cani non vanno lasciati liberi: attenzione ai recinti elettrificati contro i cinghiali",
        "Si prega di raccogliere i bisogni dei vostri animali",
      ],
      end: "Grazie per l'attenzione. Buona passeggiata!"
    }
  }
}

interface AccessWarningsProps {
  type: "laghetti" | "narcisi"
}

const AccessWarnings = ({ type }: AccessWarningsProps) => {
  const data = content[type]
  if (!data) return <T.H1>Access warnings not found!</T.H1>

  return <S.Wrapper>
    <S.LeftWrapper>
      <S.HeaderWrapper>
        <T.H1>{data.text.header}</T.H1>
        <T.H2 className="subheader">{data.text.subheader}</T.H2>
      </S.HeaderWrapper>
      <S.ContentWrapper>
        {data.text.rules.map((t, idx) => (
          <S.SingleRuleWrapper key={`rule-${idx}`}>
            <T.P1>
              {`${idx + 1})`}
            </T.P1>
            <T.P1>{t}</T.P1>
          </S.SingleRuleWrapper>)
        )}
      </S.ContentWrapper>
    </S.LeftWrapper>

    <S.IconsWrapper>
      {data.icons.map((icon, idx) =>
        <S.IconWrapper key={`icon-${idx}`}>
          <Icon type={icon} />
        </S.IconWrapper>)}
    </S.IconsWrapper>
  </S.Wrapper>
}

export default AccessWarnings