"use client";

import { useState } from "react";
import UseStatePage from "../components/useStatePage";
import UseEffectPage from "../components/useEffectPage";
import CheatSheetPage from "../components/CheetSheetPage";
import PlayGroundPage from "../components/PlayGroundPage";

type Tab = "usestate" | "useeffect" | "cheatsheet" | "playground";

const tabs: { id: Tab; label: string }[] = [
  { id: "usestate", label: "useState" },
  { id: "useeffect", label: "useEffect" },
  { id: "cheatsheet", label: "Cheatsheet" },
  { id: "playground", label: "Playground" },
];

export default function Home() {
  const [tab, setTab] = useState<Tab>("usestate");

  return (
    <>
      <div className="grain" />
      <div className="app">
        <div className="header">
          <div className="eyebrow">React Hooks Explorer</div>
          <div className="title">
            Learn <span>React Fundamentals</span>
            <br />
          </div>
          <div className="subtitle">
            Hands-on practice for <code>useState</code> and{" "}
            <code>useEffect</code> — React&apos;s most essential concepts.
          </div>
        </div>

        <div className="tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab${tab === t.id ? " active" : ""}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "usestate" && <UseStatePage />}
        {tab === "useeffect" && <UseEffectPage />}
        {tab === "cheatsheet" && <CheatSheetPage />}
        {tab === "playground" && <PlayGroundPage />}
      </div>
    </>
  );
}
