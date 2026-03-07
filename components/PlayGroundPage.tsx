import { useEffect, useState } from "react";
import WelcomeComponent from "./WelcomeComponent";
export default function PlayGroundPage() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState(""); //""
  const [fieldValue, setFieldValue] = useState(""); //Adr

  function increment() {
    setCount((c) => c + 1);
  }

  function changeName() {
    setUserName(fieldValue);
  }

  useEffect(() => {
    setCount((c) => c + 1);
    return;
  }, []);

  return (
    <>
      <div className="card">
        <div className="card-header">
          <div>
            <div className="card-label">lets Practice</div>
          </div>
        </div>

        {/* Basic Counter */}
        <div className="card-body">
          <div className="demo-area">
            <div className="big-num">{count}</div>
            <button className="btn primary" onClick={() => increment()}>
              Increment
            </button>
          </div>
          <div className="divider"></div>

          {/* Using Reusable Component and passing props */}
          <WelcomeComponent name={userName} />
          <div className="divider"></div>
          <WelcomeComponent name="Romario" />
          <div className="divider"></div>

          <WelcomeComponent name="Clink" />
          <div className="divider"></div>

          <input
            type="text"
            onChange={(event) => setFieldValue(event.target.value)}
            placeholder="Enter Name"
          />
          <button className="btn" onClick={() => changeName()}>
            Change Name
          </button>
        </div>
      </div>
    </>
  );
}
