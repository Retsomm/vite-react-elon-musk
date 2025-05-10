// src/Layout.jsx
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 nav p-2 px-10 flex align-middle justify-between shadow-2xl z-1000">
        <div className="logo">
          <Link to="/" className="navLink flex text-center">
            <img src="logo.png" alt="" />
          </Link>
        </div>
        <div className="link justify-evenly ">
          <Link to="/life" className="navLink">
            生平
          </Link>
          <Link to="/company" className="navLink">
            公司
          </Link>
          <Link to="/news" className="navLink">
            新聞
          </Link>
          <Link to="/info" className="navLink">
            更多資源
          </Link>
          <Link to="/login" className="navLink">
            登入
          </Link>
        </div>
      </nav>
      <div className="banner">
        <img src="banner.png" alt="" />
      </div>
      <main className="">
        <Outlet />
      </main>
      <footer>
        <div className="mars overflow-hidden">
          <img className="mars" src="mars.png" alt="" />
        </div>
      </footer>
      <div className="contact h-15 flex justify-center items-center">
        如有侵權，請寄信到112182ssss@gmail.com
      </div>
    </div>
  );
}
