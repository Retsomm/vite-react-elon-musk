import React from "react";

import { books, podcasts, youtubeVideos } from "../component/data";

const Info = () => {
  return (
    <div className="p-4 space-y-8">
      <BookSection title="Books" items={books} />
      <YoutubeSection title="YouTube" items={youtubeVideos} />
      <PodcastSection title="Podcast" items={podcasts} />
    </div>
  );
};

const BookSection = ({ title, items }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg p-4 flex flex-col items-center"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-32 h-48 object-cover mb-2 rounded"
          />
          <p className="text-lg font-medium">{item.title}</p>
        </div>
      ))}
    </div>
  </div>
);

const YoutubeSection = ({ title, items }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="block border rounded-lg p-2 hover:shadow-md"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-40 object-cover rounded"
          />
          <p className="mt-2 text-lg font-medium">{item.title}</p>
        </a>
      ))}
    </div>
  </div>
);

const PodcastSection = ({ title, items }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">{title}</h2>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
          className="border rounded-lg p-3 flex items-center max-w-80"
        >
          {item.img && (
            <img
              src={item.img}
              alt={item.title}
              className="w-16 h-16 object-cover rounded mr-4"
            />
          )}
          <div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium hover:underline"
            >
              {item.title}
            </a>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Info;
