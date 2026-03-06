import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    const handleResize = () => {};
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fmt = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-label">Hook #2</div>
            <div className="card-title">useEffect — Side Effects</div>
          </div>
          <span className="tag blue">useEffect</span>
        </div>
        <div className="card-body">
          <div>
            <div>
              <p className="effect-log-label">
                ⏱ Interval — starts &amp; cleans up
              </p>
              <div className="demo-area">
                <div className="timer-display">{fmt(elapsed)}</div>
                <div className="btn-row">
                  <button
                    className="btn primary"
                    onClick={() => setRunning((r) => !r)}
                  >
                    {running ? "⏸ Pause" : "▶ Start"}
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      setRunning(false);
                      setElapsed(0);
                    }}
                  >
                    Reset
                  </button>
                </div>
              </div>
              <div className="code-block" style={{ marginTop: 12 }}>
                <pre>
                  <span className="fn">useEffect</span>
                  {"(() => {"}
                  {"\n"}
                  {"  "}
                  <span className="kw">if</span> (!
                  <span className="var">running</span>){" "}
                  <span className="kw">return</span>
                  {"\n"}
                  {"  "}
                  <span className="kw">const</span>{" "}
                  <span className="var">id</span> ={" "}
                  <span className="fn">setInterval</span>(...,{" "}
                  <span className="num">1000</span>){"\n"}
                  {"  "}
                  <span className="kw">return</span> () {"=>"}{" "}
                  <span className="fn">clearInterval</span>(
                  <span className="var">id</span>){"\n"}
                  {"}"}, [<span className="var">running</span>])
                </pre>
              </div>
            </div>
          </div>

          <div className="divider" />

          <p className="effect-log-label" style={{ marginBottom: 16 }}>
            Dependency array — controls when the effect runs
          </p>
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 24,
            }}
          >
            {(
              [
                { dep: "no array", color: "pink", desc: "Runs after every render" },
                { dep: "[ ]", color: "green", desc: "Runs once on mount only" },
                { dep: "[value]", color: "blue", desc: "Runs when value changes" },
              ] as { dep: string; color: string; desc: string }[]
            ).map((x) => (
              <div
                key={x.dep}
                style={{
                  flex: "1 1 180px",
                  background: "var(--panel)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "16px",
                }}
              >
                <span
                  className={`tag ${x.color}`}
                  style={{ marginBottom: 8, display: "inline-block" }}
                >
                  {x.dep}
                </span>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    marginTop: 8,
                  }}
                >
                  {x.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
