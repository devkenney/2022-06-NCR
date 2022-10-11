import './App.css';
import { useState } from 'react';
import Auth from './pages/Auth';
import NewOrder from './pages/NewOrder';
import OrderHistory from './pages/OrderHistory';
import NavBar from './components/NavBar';
import Test from './pages/Test'
import { Routes, Route } from 'react-router-dom'
import { getUser} from './utilities/users-service';

function App() {

  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {
        user ?
          <>
            <NavBar user={user} />
            <Routes>
              <Route path="/orders/new" element={<NewOrder />} />
              <Route path="/orders" element={<OrderHistory />} />
              <Route path="/test/:symbol" element={<Test />} />
            </Routes>
          </>
          :
          <Auth setUser={setUser} />
      }
    </div>
  );
}

export default App;
