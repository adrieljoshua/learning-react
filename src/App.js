import { useState } from 'react';
import UseStatePage from "./components/useStatePage"
import UseEffectPage from "./components/useEffectPage"
import CheatSheetPage from './components/CheetSheetPage';
import './App.css';

function App() {
  const [tab, setTab] = useState("usestate");

  return (
    <>
      {/* <style>{styles}</style> */}
      <div className="grain" />
      <div className="app">
        <div className="header">
          <div className="eyebrow">React Hooks Explorer</div>
          <div className="title">Learn <span>Hooks</span><br />Interactively</div>
          <div className="subtitle">
            Hands-on playgrounds for <code>useState</code> and <code>useEffect</code> — React's most essential hooks. Click, type, and watch effects happen in real time.
          </div>
        </div>

        <div className="tabs">
          {[
            { id: "usestate", label: "useState" },
            { id: "useeffect", label: "useEffect" },
            { id: "cheatsheet", label: "Cheatsheet" },
          ].map((t) => (
            <button key={t.id} className={`tab${tab === t.id ? " active" : ""}`} onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "usestate" && <UseStatePage />}  
        {tab === "useeffect" && <UseEffectPage />}
        {tab === "cheatsheet" && <CheatSheetPage />}
      </div>
    </>
  );
}



const styles = `
  
`;

export default App;
