// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Life from "./pages/Life";
import Company from "./pages/Company";
import News from "./pages/News";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Member from "./pages/Member";
import Error from "./pages/Error";
import Layout from "./Layout";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/life" element={<Life />} />
          <Route path="/company" element={<Company />} />
          <Route path="/news" element={<News />} />
          <Route path="/info" element={<Info />} />
          <Route path="/login" element={<Login />} />
          <Route path="/member" element={<Member />} />
          <Route path="*" element={<Error />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
