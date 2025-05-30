import React, { useState } from "react";
import * as S from "./styled"

interface Props {
  onClose: () => void;
}

const CookiePreferences: React.FC<Props> = ({ onClose }) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  const savePreferences = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify({ analytics: analyticsEnabled }));
    if (!analyticsEnabled) {
      clearAnalyticsCookies();
    }
    onClose();
  };

  const clearAnalyticsCookies = () => {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      if (name.includes("ga") || name.includes("gid")) {
        document.cookie = `${name}=; Max-Age=0; path=/;`;
      }
    });
  };

  return (
    <S.ModalOverlay>
      <S.ModalContainer>
        <S.Title>Preferenze Cookie</S.Title>
        <S.CheckboxLabel>
          <input
            type="checkbox"
            checked={analyticsEnabled}
            onChange={(e) => setAnalyticsEnabled(e.target.checked)}
          />
          &nbsp;Abilita cookie analitici (Google Analytics, ecc.)
        </S.CheckboxLabel>
        <S.ButtonRow>
          <S.ModalButton onClick={savePreferences} color="#3182ce">
            <S.ButtonLabel>Salva</S.ButtonLabel>
          </S.ModalButton>
          <S.ModalButton onClick={onClose} color="#4a5568">
            <S.ButtonLabel>Annulla</S.ButtonLabel>
          </S.ModalButton>
        </S.ButtonRow>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default CookiePreferences;
