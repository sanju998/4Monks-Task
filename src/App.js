import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import SignIn from './pages/SignIn/SignIn';
import NotFound from './pages/NotFound/NotFound';
import ShortsVideo from './pages/ShortsVideo/ShortsVideo';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/SecondTask" element={<ShortsVideo />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;