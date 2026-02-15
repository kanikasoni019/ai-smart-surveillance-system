import { useState } from "react";

export default function App() {
  const [threat, setThreat] = useState(false);
  const [logs, setLogs] = useState([]);

  const simulateDetection = () => {
    const newIncident = {
      time: new Date().toLocaleTimeString(),
      camera: "Camera 01",
      type: "Possible Violence / Harassment Detected"
    };

    setThreat(true);
    setLogs([newIncident, ...logs]);

    setTimeout(() => {
      setThreat(false);
    }, 5000);
  };

  return (
    <div className="dashboard">
      <div className="header">
        AI-Enabled Smart Surveillance System
      </div>

      <div className="container">

        {/* LEFT PANEL */}
        <div className="left-panel">
          <h3>Live Surveillance Feed</h3>

          <div className="video-box">
            {threat && (
              <div className="alert-tag">
                ⚠ Threat Detected
              </div>
            )}
            <span>Camera Feed Simulation</span>
          </div>

          <button className="button" onClick={simulateDetection}>
            Simulate AI Threat Detection
          </button>

          <div className={`alert-box ${threat ? "danger" : ""}`}>
            {threat
              ? "🚨 Alert Sent Automatically to Security Personnel"
              : "System Status: Monitoring Normally"}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <h3>Incident Log (Secure Buffer Storage)</h3>

          {logs.length === 0 && (
            <p>No incidents recorded.</p>
          )}

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
