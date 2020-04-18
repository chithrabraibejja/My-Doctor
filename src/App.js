import React from 'react';

import docapp from '../src/components/docapp';
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Header /><body>
        <Route path="/" component={docapp} />
      </body>
      <Footer />
    </div>
  );
}

export default App;


