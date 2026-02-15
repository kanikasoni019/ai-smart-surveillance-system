import { useState } from "react";

export default function App() {
  const [threat, setThreat] = useState(false);
  const [logs, setLogs] = useState([]);

  const simulateDetection = () => {
    const newLog = {
      time: new Date().toLocaleTimeString(),
      camera: "Camera 01",
      type: "Possible Violence Detected"
    };

    setThreat(true);
    setLogs([newLog, ...logs]);

    setTimeout(() => {
      setThreat(false);
    }, 5000);
  };

  return (
    <div className="dashboard">
      <div className="header">
        AI-Enabled Smart Surveillance System Dashboard
      </div>

      <div className="container">

        {/* Left Panel */}
        <div className="left-panel">
          <h3>Live Surveillance Feed</h3>

          <div className="video-box">
            {threat && (
              <div style={{
                position: "absolute",
                top: 10,
                left: 10,
                background: "red",
                padding: "5px 10px",
                borderRadius: "5px"
              }}>
                ⚠ Threat Detected
              </div>
            )}
            <span>Camera Feed Simulation</span>
          </div>

          <button className="button" onClick={simulateDetection}>
            Simulate Threat Detection
          </button>

          <div className={`alert-box ${threat ? "danger" : ""}`}>
            {threat
              ? "🚨 Alert Sent Automatically to Security"
              : "System Status: Monitoring Normally"}
          </div>
        </div>

        {/* Right Panel */}
        <div className="right-panel">
          <h3>Incident Log (Secure Buffer Storage)</h3>

          {logs.length === 0 && <p>No incidents recorded.</p>}

          {logs.map((log, index) => (
            <div key={index} className="log-item">
              ⏱ {log.time} <br />
              📷 {log.camera} <br />
              ⚠ {log.type}
              <hr />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
