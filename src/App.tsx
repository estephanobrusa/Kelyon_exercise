import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";

function App() {

  return (
    <>
      <ToastContainer/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </>
  );
}

export default App
