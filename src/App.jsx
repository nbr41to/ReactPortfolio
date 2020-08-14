import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Link,
  Redirect,
  Auth,
} from 'react-router-dom';
import ScrollToTop from './ScrollToTop'
import Layout from './components/Layout'
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Mathematics from './pages/growth-record/Mathematics';
import Programming from './pages/growth-record/Programming';
import Psychology from './pages/growth-record/Psychology';
import Cube from './pages/growth-record/Cube';

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/growth-record/math" component={Mathematics} />
          <Route exact path="/growth-record/prog" component={Programming} />
          <Route exact path="/growth-record/psyc" component={Psychology} />
          <Route exact path="/growth-record/cube" component={Cube} />
        </Switch>
      </Layout>
    </HashRouter>
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

