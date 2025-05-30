import React, { useEffect, useState } from "react";
import CookiePreferences from "../cookie-preferences";
import * as S from "./styled"
import * as T from "../typography"

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    const consentTimestamp = localStorage.getItem("cookie-consent-date");

    const shouldShowBanner = () => {
      if (!consent || !consentTimestamp) return true;
      const lastConsentDate = new Date(consentTimestamp);
      const now = new Date();
      const daysSinceConsent = (now.getTime() - lastConsentDate.getTime()) / (1000 * 60 * 60 * 24);
      
      const expiredPreferences = daysSinceConsent > 30;
      if (expiredPreferences) {
        localStorage.removeItem("cookie-consent");
        localStorage.removeItem("cookie-consent-date");
        localStorage.removeItem("cookie-preferences");
      }
      return expiredPreferences;
    };


    if (shouldShowBanner()) {
      setVisible(true);
    }
  }, []);

  const saveConsent = (value: "accepted" | "rejected") => {
    localStorage.setItem("cookie-consent", value);
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    setVisible(false);

    if (value === "rejected") {
      clearGatsbyCookies();
    }
  };

  const clearGatsbyCookies = () => {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=; Max-Age=0; path=/;`;
    });
  };

  return (
    <>
      {visible && (
        <S.BannerContainer>
          <S.BannerText>
            Questo sito utilizza solo cookie tecnici. Nessun tracciamento viene effettuato senza il tuo consenso.
          </S.BannerText>
          <S.ButtonRow>
            <S.BannerButton onClick={() => saveConsent("accepted")} color="#3182ce">
              <S.ButtonText>Accetta</S.ButtonText>
            </S.BannerButton>
            <S.BannerButton onClick={() => saveConsent("rejected")} color="#e53e3e">
              <S.ButtonText>Rifiuta</S.ButtonText>
            </S.BannerButton>
            <S.BannerButton onClick={() => setShowPreferences(true)} color="#4a5568">
              <S.ButtonText>Gestisci preferenze</S.ButtonText>
            </S.BannerButton>
          </S.ButtonRow>
        </S.BannerContainer>
      )}
      {showPreferences && <CookiePreferences onClose={() => setShowPreferences(false)} />}
    </>
  );
};

export default CookieBanner;