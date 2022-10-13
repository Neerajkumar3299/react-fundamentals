
import './App.css';
import { BrowserRouter as Router,Routes,Route,Switch } from 'react-router-dom';
import Navbar from './component/react-router-dom/pages/Navbar';
import Home from "./component/react-router-dom/pages/Home"
import About from "./component/react-router-dom/pages/About"
import Error from "./component/react-router-dom/pages/Error"
import Develop from './component/react-router-dom/pages/Develop';
import User from './component/react-router-dom/pages/User';
import Admin from './component/react-router-dom/admin/Admin';
function App() {
  return (
      
      // <Home/>
      <Router>
        <Navbar/>
        <Routes>

          {/* Admin Pages */}
        <Route path="/admin" element={<Admin/>}/>

        {/* User Pages */}
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/develop" element={<Develop/>}/>
        <Route path="/user/:id" element={<User/>}/>

        <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
  );
}

export default App;
