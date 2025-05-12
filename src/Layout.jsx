import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  const [isPicVisible, setIsPicVisible] = useState(false);

  const togglePic = () => {
    setIsPicVisible((prev) => !prev); // 切換顯示/隱藏狀態
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 nav p-2 px-10 flex align-middle justify-between shadow-2xl z-1000">
        <div className="logo">
          <Link to="/" className="navLink flex text-center">
            <img src="/vite-react-elon-musk/logo.png" alt="" />
          </Link>
        </div>
        <div className="link justify-evenly ">
          <Link to="/company" className="navLink">
            公司
          </Link>
          <Link to="/life" className="navLink">
            生平
          </Link>
          <Link to="/news" className="navLink">
            新聞
          </Link>
          <Link to="/info" className="navLink">
            更多消息
          </Link>
          <Link to="/login" className="navLink">
            登入
          </Link>
        </div>
      </nav>
      <div className="accordion mt-16">
        <div
          className="cursor-pointer text-white p-3 text-center font-bold"
          onClick={togglePic}
        >
          {isPicVisible ? "⬆" : "⬇"}
        </div>
        <div
          className={`overflow-hidden transition-all duration-700 ${
            isPicVisible ? "max-h-screen" : "max-h-0"
          }`}
        >
          <img
            src="/vite-react-elon-musk/banner.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>

      <main className="">
        <Outlet />
      </main>

      <footer>
        <div className="accordion">
          <div
            className="cursor-pointer text-white p-3 text-center font-bold"
            onClick={togglePic}
          >
            {isPicVisible ? "⬆" : "⬇"}
          </div>
          <div
            className={`overflow-hidden transition-all duration-700 ${
              isPicVisible ? "max-h-screen" : "max-h-0"
            }`}
          >
            <img
              src="/vite-react-elon-musk/mars.png"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </footer>
      <div className="contact h-15 flex justify-center items-center">
        如有侵權，請寄信到112182ssss@gmail.com
      </div>
    </div>
  );
}
