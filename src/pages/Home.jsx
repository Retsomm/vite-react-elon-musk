import { Link } from "react-router-dom";
import { Rocket, BookMarked, Users, Newspaper } from "lucide-react";
import Quotes from "../component/Quotes";
const sections = [
  {
    name: "公司介紹",
    icon: <Rocket className="w-12 h-12 text-blue-600" />,
    description:
      "深入了解馬斯克旗下的六大科技公司，探索每一間公司的創新理念與未來願景。",
    link: "/company",
  },
  {
    name: "生平故事",
    icon: <BookMarked className="w-12 h-12 text-green-600" />,
    description: "馬斯克人生中的重要時刻與成就，從南非到矽谷的旅程。",
    link: "/life",
  },
  {
    name: "最新新聞",
    icon: <Newspaper className="w-12 h-12 text-purple-600" />,
    description: "與馬斯克有關的最新新聞、報導與分析，讓你隨時掌握最新動態。",
    link: "/news",
  },
  {
    name: "更多消息",
    icon: <Users className="w-12 h-12 text-red-600" />,
    description: "與馬斯克有關的討談、podcast，以及自轉",
    link: "/info",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="relative flex items-center justify-center text-center">
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-6xl font-bold mt-10 text-gray-800 drop-shadow-lg">
            Elon Musk：改變世界的實踐家
          </h1>
          <p className="text-xl text-gray-700 mt-10 leading-relaxed">
            馬斯克不只是一位企業家，更是一位推動人類科技進步的夢想家。他用創新和勇氣，挑戰看似不可能的夢想，從電動車到太空探索，不斷顛覆我們對未來的想像。
          </p>
        </div>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-xl 
                shadow-lg 
                p-6 
                text-center 
                transform 
                transition 
                duration-300 
                hover:scale-105 
                hover:shadow-xl
                hover:bg-blue-50
              "
            >
              <div className="flex justify-center mb-4">{section.icon}</div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                {section.name}
              </h2>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <Link
                to={section.link}
                className="
                  inline-block 
                  bg-blue-500 
                  text-white 
                  px-4 
                  py-2 
                  rounded-md 
                  hover:bg-blue-600 
                  transition 
                  duration-300
                "
              >
                探索更多
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">馬斯克語錄</h2>
          <Quotes />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
