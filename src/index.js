// Importa la libreria React.
import React from "react";

// Importa la libreria ReactDOM.
// ReactDOM è utilizzata per interagire con il DOM del browser,
// ovvero la struttura ad albero degli elementi HTML.
import ReactDOM from "react-dom/client";

// Importa il file di stile globale.
import "./index.css";

// Importa il componente principale della tua applicazione, chiamato App.
// Questo componente è il cuore della tua applicazione React.
import App from "./App";

// Crea un punto di ingresso per l'applicazione React nel DOM.
// Trova l'elemento con l'id "root" nel file index.html e lo usa come contenitore per l'app React.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Utilizza il metodo render per visualizzare il contenuto dell'applicazione React all'interno del contenitore "root".
root.render(
  // React.StrictMode è un componente che aiuta a individuare potenziali problemi nel codice. Attiva avvisi aggiuntivi durante lo sviluppo, ma non influisce sulla produzione.
  <React.StrictMode>
    {/* Renderizza il componente App. Questo è il punto in cui il componente App viene montato e visualizzato nel DOM. */}
    <App />
  </React.StrictMode>
);
