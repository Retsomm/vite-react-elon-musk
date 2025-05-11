import { useState, useEffect } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("/api/newsApi");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Invalid content type, expected JSON");
        }

        const data = await response.json();
        setNews(Array.isArray(data) ? data : []);
        setIsLoading(false);
      } catch (err) {
        console.error("抓取新聞失敗:", err);
        setNews([]);
        setError("伺服器錯誤，請稍後再試");
        setIsLoading(false);
      }
    }

    fetchNews();
  }, []);

  if (isLoading) return <div>載入中...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      {news.length === 0 ? (
        <p>目前沒有新聞</p>
      ) : (
        <div className="newsContainer flex flex-wrap justify-center ">
          {news.map((article, index) => (
            <div className="newsCard flex flex-col p-3 m-3 w-100 rounded-xl justify-between" key={index}>
              <h3>標題：{article.title}</h3>
              <h3>來源：{article.source}</h3>
              <p>發布日期：{new Date(article.pubDate).toLocaleString()}</p>
              <a
                className="readmore border-b-black p-1 px-5 w-fit mt-3 rounded-md hover:bg-orange-900 bg-amber-800 text-amber-50"
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                閱讀更多
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}