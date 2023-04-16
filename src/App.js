import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Name from "./components/Name";
import Group from "./components/Group";
import Album from "./components/Album";
import Counter from "./components/Counter";
import Header from "./interface/Header/Header";
import Footer from "./interface/Footer/Footer";
import MainMenu from "./interface/Menu/MainMenu";
import Sidebar from "./interface/Sidebar/Sidebar";
import React, { useState, useEffect, createContext } from "react";
import ReactSwitch from "react-switch";
import Dashboard from "./pages/Dashboard";

export const ThemeContext = createContext(null);

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      // component = <App/>
      break;
    case "/Dashboard":
      component = <Dashboard/>
      break;
  }

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr == "light" ? "dark" : "light"));
  };

  const [fontSize, setFontSize] = useState(16);

  return (
    <div style={{ fontSize: `${fontSize}px` }} className="App">
      <button onClick={() => setFontSize(fontSize + 1)}>Text size up!</button>
      <button onClick={() => setFontSize(fontSize - 1)}>Text size down!</button>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div
          className="container"
          id={theme}
          style={{ fontSize: `${fontSize}px` }}
        >
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />

          <div className="section">
            <Sidebar />
            {component} 

            <MainMenu />
            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>

      <HelloWorld />
      <ul>
        <li>
          <Name name="Agata Jakimiec" />
        </li>
        <li>
          <Group group="INMN4_PA1.1" />
        </li>
        <li>
          <Album album="69056" />
        </li>
      </ul>
      <Counter />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edytuj <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
