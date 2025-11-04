import React from "react";
import "./Container.css";

interface ContainerProps {
  items: Array<Item>;
}

export interface Item {
  img: string;
  alt: string;
  description: string;
  fileType: "image" | "video";
  size: "landscape" | "portrait";
}


const Container: React.FC<ContainerProps> = ({ items }) => {
  return (
    <div className="content">
      {items.map((item, idx) => (
        <div className={`item ${item.size}`} key={idx}>
          <div className={`image ${item.size}`}>
            {item.fileType === "image" ? (
              <img src={item.img} alt={item.alt} className={`img ${item.size}`} />
            ) : item.fileType === "video" ? (
              <video src={item.img} className={`img ${item.size}`} controls />
            ) : (
              <iframe src={item.img} className="img"></iframe>
            )}
          </div>
          <div className="description">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Container;
