# 🌿 Gruppo Natura Lentiai - Sito Ufficiale

Benvenuto nel repository frontend del sito ufficiale dell'associazione **Gruppo Natura Lentiai**.
Il sito è progettato per essere super-veloce, accessibile e facilmente aggiornabile grazie a un'architettura **Jamstack** basata su Gatsby e Sanity CMS.

🌐 **Sito Live:** [grupponaturalentiai.it](https://grupponaturalentiai.it)

---

## 🛠 Tech Stack

- **Framework:** [Gatsby](https://www.gatsbyjs.com/) (React) - Generazione di siti statici (SSG) per performance ottimali.
- **Linguaggio:** [TypeScript](https://www.typescriptlang.org/) - Per codice tipizzato e sicuro.
- **Styling:** [Styled Components](https://styled-components.com/) - CSS-in-JS.
- **CMS (Headless):** [Sanity.io](https://www.sanity.io/) - Gestione dei contenuti del Blog tramite query GraphQL.
- **Mappe:** [React Leaflet](https://react-leaflet.js.org/) - Mappe interattive per i percorsi dell'associazione.
- **Automazione:** [GitHub Actions](https://github.com/features/actions) - Build e deploy automatici e gratuiti.

---

## 🚀 Sviluppo Locale

Se vuoi contribuire al codice sorgente o testare modifiche in locale, segui questi passaggi.

### 1. Prerequisiti

Assicurati di avere installato sul tuo computer:

- **Node.js** (Versione 20 o superiore consigliata)
- **npm** (incluso in Node.js)

### 2. Installazione

Clona il repository e installa le dipendenze:

```bash
git clone [https://github.com/GruppoNaturaLentiai/Frontend.git](https://github.com/GruppoNaturaLentiai/Frontend.git)
cd Frontend
npm ci
```

### 3. Avvio del server di sviluppo

Per avviare l'ambiente di sviluppo locale con hot-reloading:

```bash
npm run develop
```

Il sito sarà visibile all'indirizzo: `http://localhost:8000`
L'interfaccia di esplorazione GraphQL sarà disponibile su: `http://localhost:8000/___graphql`

---

## 🏗 Architettura e Deploy

Il sito è ospitato gratuitamente su **GitHub Pages** (sul branch `gh-pages`).
Non è necessario eseguire script di build o deploy manuali dal proprio computer. Il processo è interamente automatizzato tramite **GitHub Actions** (`.github/workflows/deploy.yml`).

Il deploy automatico viene attivato in due scenari:

1. **Modifiche al codice:** Quando una Pull Request viene unita (merged) al branch `main`.
2. **Pubblicazione Articoli:** Quando un redattore pubblica, modifica o elimina un articolo dall'interfaccia di Sanity CMS (tramite Webhook che invia l'evento `sanity-publish`).

Il processo di build utilizza un sistema di **Cache** per le immagini processate da Gatsby e per i pacchetti `npm`, riducendo i tempi di compilazione da 20 minuti a pochi minuti.

---

## 📁 Struttura principale del Progetto

- `/src/components` - Componenti React riutilizzabili (Header, Footer, UI, ecc.).
- `/src/pages` - Pagine statiche principali del sito (es. index, blog, chi-siamo, contatti).
- `/src/templates` - Template dinamici generati a tempo di build (es. `post.tsx` per i singoli articoli del blog).
- `/src/data` - Dati statici JSON, coordinate dei tracciati GPS e percorsi mappa.
- `/src/styles` - Variabili globali CSS, breakpoints, palette colori (i "verdi" di GNL).
- `/gatsby-node.ts` - Logica di back-end di Gatsby per la creazione programmatica delle pagine recuperando i dati da Sanity.
- `/.github/workflows` - File di configurazione delle pipeline CI/CD.

---

## 🤝 Crediti e Copyright

Sviluppato e mantenuto per **Gruppo Natura Lentiai**.
© Copyright Andrea Nicolai - Tutti i diritti riservati.
