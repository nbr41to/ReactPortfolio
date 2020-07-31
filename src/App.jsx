import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  Auth,
} from 'react-router-dom';
// import Layout from './components/Layout'
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter> 
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

// 課題1
// react-router-tabs
// react-tabs
// リンク先に切り替えたときに,
// 再レンダリングが起こり,
// タッチエフェクトが表示されない

// 課題2
// Layoutは各ページか,App.jsxか,

