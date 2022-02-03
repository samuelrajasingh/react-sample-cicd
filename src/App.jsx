import { Router } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import GHBadge from './components/GHBadge';
import Parent from './components/Parent';
import Toggle from './components/Toggle';
import logo from './logo.svg';
import { Route,BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  
  return (
    <Router basename='/react-sample-cicd'>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>React Quickstart</h1>
        <p>A template project deployed to GitHub Pages</p>

        <GHBadge username="samuelrajasingh" repoName="react-sample-cicd" />
      </header>

      <main>
        <Counter />

        <Toggle text="Make me disappear" />

        <Parent />
      </main>
      </div>
      </Router>
  );
}
