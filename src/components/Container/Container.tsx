import React from "react";
import "./Container.css";

interface ContainerProps {
  items: Array<Item>;
}

export interface Item {
  img: string;
  alt: string;
  description: string;
}

const Container: React.FC<ContainerProps> = ({ items }) => {
  return (
    <div className="content">
      {items.map((item, idx) => (
        <div className="item" key={idx}>
          <div className="image">
            <img src={item.img} alt={item.alt} className="img" />
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
