import './App.css';
import { useState } from 'react';
import Auth from './pages/Auth';
import NewOrder from './pages/NewOrder';
import OrderHistory from './pages/OrderHistory';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [user, setUser] = useState(null)

  return (
    <div className="App">
      {
        user ?
          <>
            <NavBar />
            <Routes>
              <Route path="/orders/new" element={<NewOrder />} />
              <Route path="/orders" element={<OrderHistory />} />
            </Routes>
          </>
          :
          <Auth />
      }
    </div>
  );
}

export default App;
