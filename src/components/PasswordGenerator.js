// PasswordGenerator.js
import React, { useState } from "react";
import './PasswordGenerator.css'; // Importa el archivo CSS

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(12);
  const [useSymbols, setUseSymbols] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useLowerCase, setUseLowerCase] = useState(true);
  const [useUpperCase, setUseUpperCase] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");

  const generatePassword = () => {
    let charset = "";
    let newPassword = "";

    if (useSymbols) charset += "!@#$%^&*()";
    if (useNumbers) charset += "0123456789";
    if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    el.value = password;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setSuccessMessage("Password copied to clipboard!");
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  return (
    <div className="container">
      <h3 className="subtitle">Random Password Generator</h3>
      <div className="input-container">
        <label className="label">Password Length:</label>
        <input
          type="number"
          min="8"
          max="32"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
          className="input"
        />
      </div>
      <div className="checkbox-container">
        <label>
          <input
            type="checkbox"
            checked={useSymbols}
            onChange={() => setUseSymbols(!useSymbols)}
          />
          Symbols
        </label>
        <label>
          <input
            type="checkbox"
            checked={useNumbers}
            onChange={() => setUseNumbers(!useNumbers)}
          />
          Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={useLowerCase}
            onChange={() => setUseLowerCase(!useLowerCase)}
          />
          LowerCase
        </label>
        <label>
          <input
            type="checkbox"
            checked={useUpperCase}
            onChange={() => setUseUpperCase(!useUpperCase)}
          />
          UpperCase
        </label>
      </div>
      <button className="button" onClick={generatePassword}>
        Generate Password
      </button>
      {password && (
        <div className="input-container">
          <label className="label">Generated Password:</label>
          <input type="text" value={password} readOnly className="input" />
          <button className="button copy-button" onClick={copyToClipboard}>
            Copy
          </button>
        </div>
      )}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default PasswordGenerator;
