
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, useParams, Route, UNSAFE_RouteContext, useNavigate, Navigate, Outlet} from "react-router-dom";
import ChatBody from './ChatBody';
function App() {
  return (
    <Router> 
        <Routes>
        <Route path="/" element={<ChatBody/>}/> 
          
        </Routes>
    </Router> 
  );
}

export default App;
