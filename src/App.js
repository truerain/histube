import React from 'react'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'

import './_app.scss';

//https://www.youtube.com/watch?v=DyvDXY1aAzA&t=843s

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="app_container">
        <Sidebar />
        <div className="app__main">
          <HomeScreen />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
