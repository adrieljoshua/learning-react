export default function CheatSheetPage() {
  const concepts = [
    {
      hook: "useState",
      color: "green",
      icon: "🔄",
      items: [
        { title: "Basic state", code: "const [val, setVal] = useState(0)" },
        {
          title: "Object state",
          code: "const [obj, setObj] = useState({ a: 1 })\nsetObj(o => ({ ...o, a: 2 }))",
        },
        { title: "Lazy init", code: "useState(() => computeExpensive())" },
      ],
    },
    {
      hook: "useEffect",
      color: "blue",
      icon: "⚡",
      items: [
        { title: "On mount", code: "useEffect(() => { ... }, [])" },
        { title: "On change", code: "useEffect(() => { ... }, [dep])" },
        {
          title: "Cleanup",
          code: "useEffect(() => {\n  return () => cleanup()\n}, [])",
        },
      ],
    },
  ];

  return (
    <div>
      {concepts.map((c) => (
        <div className="card" key={c.hook}>
          <div className="card-header">
            <div>
              <div className="card-label">Reference</div>
              <div className="card-title">
                {c.icon} {c.hook} Cheatsheet
              </div>
            </div>
            <span className={`tag ${c.color}`}>{c.hook}</span>
          </div>
          <div className="card-body">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {c.items.map((item) => (
                <div key={item.title}>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--muted)",
                      marginBottom: 8,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {item.title}
                  </p>
                  <div className="code-block">
                    <pre style={{ color: "var(--accent)" }}>{item.code}</pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-label">Golden Rules</div>
            <div className="card-title">✅ Best Practices</div>
          </div>
        </div>
        <div className="card-body">
          {[
            {
              icon: "🏷️",
              title: "Name state clearly",
              desc: "Use descriptive names: isLoading, userList, selectedId — not x, data, val.",
            },
            {
              icon: "🛡️",
              title: "Use functional updates",
              desc: "setCount(c => c + 1) is safer than setCount(count + 1) when updates depend on prev state.",
            },
            {
              icon: "📦",
              title: "List all deps",
              desc: "Every variable used inside useEffect that comes from outside should be in the dependency array.",
            },
            {
              icon: "🧹",
              title: "Always clean up",
              desc: "Return a cleanup function from useEffect for timers, event listeners, and subscriptions.",
            },
            {
              icon: "🚫",
              title: "No infinite loops",
              desc: "Avoid modifying state inside useEffect without proper deps — it will trigger endless re-renders.",
            },
          ].map((b) => (
            <div key={b.title} className="concept-pill">
              <span className="icon">{b.icon}</span>
              <div className="concept-text">
                <strong>{b.title}</strong>
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
