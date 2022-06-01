import React from 'react';
import Carousel from './components/organisms/Carousel';
import Contrast from './components/organisms/Contrast';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Carousel />
      <Contrast />
      <Footer />
    </React.Fragment>
  );
}

export default App;
