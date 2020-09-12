import React from 'react';
import './App.css';
import 'normalize.css';
import MandalartContainer from './containers/MandalartContainer';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div id="App">
      {/* <Header /> */}
      <MandalartContainer />
      {/* <Footer /> */}
    </div>
  );
};

export default App;
