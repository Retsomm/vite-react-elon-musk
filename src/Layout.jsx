import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Hamburger, Rocket, BookMarked, Users, Newspaper } from "lucide-react";

export default function Layout() {
  const [isPicVisible, setIsPicVisible] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false); // 狀態管理：是否顯示聊天視窗
  const toggleChat = () => {
    setIsChatOpen((prev) => !prev); // 切換顯示/隱藏狀態
  };
  const togglePic = () => {
    setIsPicVisible((prev) => !prev); // 切換顯示/隱藏狀態
  };
  const toggleNav = () => {
    setIsNavOpen((prev) => !prev); // 切換顯示/隱藏狀態
  };

  return (
    <div>
      <div
        className={`hamLists z-999 mt-15 fixed top-0 left-0 right-0 p-2 px-1 flex align-middle justify-between shadow-2xl
      ${isNavOpen ? "max-h-fit" : "hidden"}
      `}
      >
        <ul className={`hamList ${isNavOpen ? true : false}`}>
          <li>
            <Link to="/company" className="navLink" onClick={toggleNav}>
              <Rocket className="w-12 h-12 mr-3 hover:scale-105 text-blue-600" />
              公司
            </Link>
          </li>
          <li>
            <Link to="/life" className="navLink" onClick={toggleNav}>
              <BookMarked className="w-12 h-12 mr-3 hover:scale-105 text-green-600" />
              生平
            </Link>
          </li>
          <li>
            <Link to="/news" className="navLink" onClick={toggleNav}>
              <Newspaper className="w-12 h-12 mr-3 hover:scale-105 text-purple-600" />
              新聞
            </Link>
          </li>
          <li>
            <Link to="/info" className="navLink" onClick={toggleNav}>
              <Users className="w-12 h-12 mr-3 hover:scale-105 text-red-600" />
              更多消息
            </Link>
          </li>
        </ul>
      </div>
      <nav className="fixed top-0 left-0 right-0 nav p-2 px-10 flex align-middle justify-between shadow-2xl z-1000">
        <div className="ham sm:hidden left-5 absolute hover:bg-gray-700 rounded-full p-2 transform transition duration-300">
          <Hamburger
            className="text-white cursor-pointer"
            onClick={toggleNav}
          />
        </div>
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
      <div className="accordion mt-16 flex flex-col items-center justify-center h-fit">
        <div
          className="cursor-pointer text-white p-3 text-center font-bold"
          onClick={togglePic}
        >
          {isPicVisible ? "⬆" : "⬇"}
        </div>

        <div
          className={`overflow-hidden transition-all duration-700 flex flex-col items-center justify-center ${
            isPicVisible ? "max-h-screen" : "max-h-0"
          }`}
        >
          <img
            src="/vite-react-elon-musk/banner.png"
            alt=""
            className="w-full h-auto"
            onClick={toggleChat}
          />
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 my-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-fit"
          >
            OCCUPY MARS
          </button>
          <div className="rocket hidden">
            <Rocket />
          </div>
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
