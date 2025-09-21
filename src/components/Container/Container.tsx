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
}


const Container: React.FC<ContainerProps> = ({ items }) => {
  return (
    <div className="content">
      {items.map((item, idx) => (
        <div className="item" key={idx}>
          <div className="image">
            {item.fileType === "image" ? (
              <img src={item.img} alt={item.alt} className="img" />
            ) : item.fileType === "video" ? (
              <video src={item.img} className="img" controls />
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
