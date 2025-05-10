// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="homeContainer flex flex-col justify-center px-10">
        <div className="intro sm:px-10 sm:py-10 flex w-full justify-center items-center">
          這裡是沉浸式了解elon musk這個人的網站，你可以在這裡重新認識他。
          他是一位有膽識、敢行動的實踐家，他不甘於現況並努力改善人類的生活。
          他打算實現星際旅行，並前往火星，成為火星殖民者。
        </div>
        <div className="cards flex flex-wrap justify-center">
          <div className="homeCard m-3 md:w-130 sm:w-100">
            <Link to="/company" className="flex justify-center items-center">
              <img src="/vite-react-elon-musk/company.png" alt="" />
            </Link>
          </div>
          <div className="homeCard m-3 md:w-130 sm:w-100">
            <Link to="/news">
              <img src="/vite-react-elon-musk/news.png" alt=""/>
            </Link>
          </div>
          <div className="homeCard m-3 md:w-130 sm:w-100">
            <Link to="/info">
              <img src="/vite-react-elon-musk/info.png" alt="" />
            </Link>
          </div>
          <div className="homeCard m-3 md:w-130 sm:w-100">
            <Link to="/life">
              <img src="/vite-react-elon-musk/life.png" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
