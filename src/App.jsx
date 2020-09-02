import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Link,
  Redirect,
  Auth,
} from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import markdown from './pages/about.md'
import ScrollToTop from './ScrollToTop'
import ContextProvider from "./Context"
import Layout from './components/templates/Layout'
import Home from './pages/Home';
import About from './pages/About';
import Business from './pages/Business';
import Contact from './pages/Contact';
import Documents from './pages/Documents';
import Mathematics from './pages/growth-record/Mathematics';
import Programming from './pages/growth-record/Programming';
import Psychology from './pages/growth-record/Psychology';
import Cube from './pages/growth-record/Cube';
import { GlobalStyle } from "./styles/GlobalStyle"


export default function App() {
  const [markdownText, setMarkdownText] = useState()
  // console.log(markdownText);
  useEffect(() => {
    fetch(markdown).then((response) => response.text()).then((text) => {
      setMarkdownText(text);
    })
  }, [])
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ScrollToTop />
      <ContextProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" render={() => <About markdownText={markdownText} />} />
            <Route exact path="/Business" component={Business} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/documents" component={Documents} />
            {/* <Route exact path="/growth-record/math" component={Mathematics} />
          <Route exact path="/growth-record/prog" component={Programming} />
          <Route exact path="/growth-record/psyc" component={Psychology} />
        <Route exact path="/growth-record/cube" component={Cube} /> */}
          </Switch>
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  );
}
