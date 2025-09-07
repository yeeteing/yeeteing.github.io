import React from "react";
import './Hobbies.css';
import type { PageType } from "../../components/DisplayContainer/DisplayContainer";
import type { Item } from "../../components/Container/Container";
import DisplayContainer from "../../components/DisplayContainer/DisplayContainer";
import Container from "../../components/Container/Container";

interface HobbiesProps {
  onPageChange: (page: PageType) => void;
}

const Hobbies: React.FC<HobbiesProps> = ({ onPageChange }) => {
  const hobbies: Item[] = [
    {
      img: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      alt: "Ballet",
      description: "Ballet for 3 years or something"
    },
    {
      img: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      alt: "Drumming",
      description: "Drumming for a year"
    },
    {
      img: "https://api.builder.io/api/v1/image/assets/TEMP/b28d4adb268cedb819d4f1136696015b046cd4aa?width=772",
      alt: "Weightlifting",
      description: "Weighlifting for 3 years, planning to compete in bodybuilding in one year"
    }
  ];

  return (
     <DisplayContainer onPageChange={onPageChange} page="hobbies">
        <Container items={hobbies}>
        </Container>
      </DisplayContainer>
  );
};

export default Hobbies;
