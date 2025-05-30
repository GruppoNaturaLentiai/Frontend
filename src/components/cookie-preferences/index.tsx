import React, { useState, useEffect } from "react";
import * as S from "./styled";
import * as T from "../typography"

interface Props {
  onClose: () => void;
}

const CookiePreferences: React.FC<Props> = ({ onClose }) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedPrefs = localStorage.getItem("cookie-preferences");
    if (savedPrefs) {
      try {
        const prefs = JSON.parse(savedPrefs);
        setAnalyticsEnabled(prefs.analytics || false);
      } catch (e) {
        console.error("Error parsing cookie preferences", e);
      }
    }
  }, []);

  const savePreferences = () => {
    setIsSaving(true);

    // Save preferences
    localStorage.setItem("cookie-preferences", JSON.stringify({
      analytics: analyticsEnabled,
      lastUpdated: new Date().toISOString()
    }));

    // If analytics are disabled, clear any existing analytics cookies
    if (!analyticsEnabled) {
      clearAnalyticsCookies();
    }

    // Close the modal after a short delay for better UX
    setTimeout(() => {
      setIsSaving(false);
      onClose();
    }, 500);
  };

  const clearAnalyticsCookies = () => {
    const cookies = document.cookie.split(";");
    cookies.forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      // Clear Google Analytics and Gatsby cookies
      if (name.startsWith("_") ||
        name.startsWith("ga") ||
        name.startsWith("_ga") ||
        name.startsWith("_gid") ||
        name.startsWith("_gat") ||
        name.startsWith("gatsby")) {
        document.cookie = `${name}=; Max-Age=0; path=/; domain=${window.location.hostname};`;
      }
    });
  };

  return (
    <S.ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>
      <S.ModalContainer onClick={(e) => e.stopPropagation()}>
        <S.Title>Gestisci le tue preferenze</S.Title>

        <S.CookieType>
          <S.CookieHeader>
            <S.CookieTitle>
              Cookie Tecnici Necessari
              <S.RequiredBadge>Sempre attivi</S.RequiredBadge>
            </S.CookieTitle>
          </S.CookieHeader>
          <S.CookieDescription>
            Questi cookie sono essenziali per il corretto funzionamento del sito web e non possono essere disattivati.
            Vengono utilizzati per funzionalità di base come la navigazione tra le pagine e l'accesso alle aree protette.
          </S.CookieDescription>
        </S.CookieType>

        <S.CookieType>
          <S.CookieHeader>
            <S.CookieTitle>
              Cookie Analitici
            </S.CookieTitle>
            <S.CheckboxLabel>
              <input
                type="checkbox"
                checked={analyticsEnabled}
                onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                aria-label="Attiva cookie analitici"
              />
              <span><T.P3 className="label">{analyticsEnabled ? 'Attivati' : 'Disattivati'}</T.P3></span>
            </S.CheckboxLabel>
          </S.CookieHeader>
          <S.CookieDescription>
            Questi cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito, raccogliendo informazioni in forma anonima.
            I dati raccolti ci permettono di migliorare l'esperienza utente. Se disattivati, non potremo monitorare le prestazioni del sito.
          </S.CookieDescription>
        </S.CookieType>

        <S.ButtonRow>
          <S.ModalButton
            onClick={savePreferences}
            color="#3182ce"
            disabled={isSaving}
            aria-label="Salva le preferenze"
          >
            <S.ButtonLabel>{isSaving ? 'Salvataggio...' : 'Salva preferenze'}</S.ButtonLabel>
          </S.ModalButton>
          <S.ModalButton
            onClick={onClose}
            color="#4a5568"
            disabled={isSaving}
            style={{ background: '#4a5568' }}
            aria-label="Annulla e torna indietro"
          >
            <S.ButtonLabel>Annulla</S.ButtonLabel>
          </S.ModalButton>
        </S.ButtonRow>
      </S.ModalContainer>
    </S.ModalOverlay>
  );
};

export default CookiePreferences;
