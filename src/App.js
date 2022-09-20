import React from 'react';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from './pages/Profile';
 


function App() {
  return (
    <Router>

      <div className="app">
      <Sidebar /> 
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/Explore' element={<Explore />} />
          <Route path='/Notifications' element={<Notifications />} />
          <Route path='/Messages' element={<Messages />} />
          <Route path='/Bookmarks' element={<Bookmarks />} />
          <Route path='/Lists' element={<Lists />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </div>
    </Router> 

  );
}

export default App;
