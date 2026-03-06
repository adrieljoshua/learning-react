import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export default function UseStatePage() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn useState", done: true },
    { id: 2, text: "Learn useEffect", done: false },
    { id: 3, text: "Build something cool", done: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const changeCount = (n: number) => {
    setCount((c) => c + n);
  };

  const addTodo = () => {
    if (!newTodo.trim()) return;
    setTodos((t) => [
      ...t,
      { id: Date.now(), text: newTodo.trim(), done: false },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) =>
    setTodos((t) => t.map((x) => (x.id === id ? { ...x, done: !x.done } : x)));

  const removeTodo = (id: number) =>
    setTodos((t) => t.filter((x) => x.id !== id));

  const done = todos.filter((t) => t.done).length;

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-label">Hook #1</div>
            <div className="card-title">useState — Reactive State</div>
          </div>
          <span className="tag green">useState</span>
        </div>
        <div className="card-body">
          <div className="split">
            <div>
              <div className="demo-area">
                <div className="big-num">{count}</div>
                <div className="btn-row">
                  <button className="btn danger" onClick={() => changeCount(-1)}>
                    − Dec
                  </button>
                  <button className="btn primary" onClick={() => changeCount(1)}>
                    + Inc
                  </button>
                  <button className="btn" onClick={() => setCount(0)}>
                    Reset
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="code-block">
                <pre>
                  <span className="cm">{"// Declare state variable"}</span>
                  {"\n"}
                  <span className="kw">const</span> [
                  <span className="var">count</span>,{" "}
                  <span className="fn">setCount</span>]{" "}
                  <span className="kw">=</span>{" "}
                  <span className="fn">useState</span>(
                  <span className="num">0</span>){"\n\n"}
                  <span className="cm">{"// Update with new value"}</span>
                  {"\n"}
                  <span className="fn">setCount</span>(
                  <span className="var">count</span> +{" "}
                  <span className="num">1</span>){"\n\n"}
                  <span className="cm">
                    {"// Update with function (safer)"}
                  </span>
                  {"\n"}
                  <span className="fn">setCount</span>(c {"\u21d2"} c +{" "}
                  <span className="num">1</span>)
                </pre>
              </div>
              <div className="divider" />
              <div className="concept-pill">
                <span className="icon">💡</span>
                <div className="concept-text">
                  <strong>How it works</strong>
                  Calling <code>setCount()</code> triggers a re-render with the
                  new value. React batches multiple state updates for
                  performance.
                </div>
              </div>
            </div>
          </div>

          <div className="divider" />

          <div className="split">
            <div>
              <p className="effect-log-label">String State — live binding</p>
              <input
                type="text"
                placeholder="Type your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {name && (
                <div
                  style={{
                    marginTop: 16,
                    padding: "16px",
                    background: "var(--panel)",
                    borderRadius: 10,
                    border: "1px solid var(--border)",
                    fontSize: 14,
                  }}
                >
                  Hello,{" "}
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>
                    {name}
                  </span>
                  ! 👋
                </div>
              )}
            </div>
            <div>
              <p className="effect-log-label">Array State — todo list</p>
              <div className="input-row" style={{ marginBottom: 12 }}>
                <input
                  type="text"
                  placeholder="New task..."
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTodo()}
                />
                <button className="btn primary" onClick={addTodo}>
                  Add
                </button>
              </div>
              <div className="todo-list">
                {todos.map((t) => (
                  <div
                    key={t.id}
                    className={`todo-item${t.done ? " done" : ""}`}
                  >
                    <div
                      className={`checkbox${t.done ? " checked" : ""}`}
                      onClick={() => toggleTodo(t.id)}
                    >
                      {t.done && "✓"}
                    </div>
                    <span className="todo-text">{t.text}</span>
                    <button
                      className="btn danger"
                      style={{ padding: "4px 10px", fontSize: 11 }}
                      onClick={() => removeTodo(t.id)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 12 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: 11,
                    color: "var(--muted)",
                    marginBottom: 4,
                  }}
                >
                  <span>Progress</span>
                  <span className="score-display" style={{ fontSize: 14 }}>
                    <span>{done}</span>/{todos.length}
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${todos.length ? (done / todos.length) * 100 : 0}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
