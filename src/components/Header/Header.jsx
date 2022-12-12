import React from "react";
// import trophy from "../../assets/trophy.png";
import card_img_1 from "../../assets/card_img_1.png";
import card_img_2 from "../../assets/card_img_2.png";
import card_img_4 from "../../assets/card_img_4.png";
import "./Header.css";
import HeaderCards from "./HeaderCards";

function Header() {
  const cardData = [
    {
      id: 0,
      title: "Weekly Contest",
      date: "Sunday, Oct 16",
      time: "2:30 - 4:00 PM UTC",
      img: `${card_img_1}`,
    },
    {
      id: 1,
      title: "Biweekly Contest",
      date: "Saterday, Oct 15",
      time: "2:30 - 4:00 PM UTC",
      img: `${card_img_2}`,
    },
    {
      id: 2,
      title: "Monthly Contest",
      date: "Sunday, Oct 30",
      time: "2:30 - 4:00 PM UTC",
      img: `${card_img_4}`,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-16">
        {/* <HeaderCards title /> */}
        {cardData.map((item) => {
          return (
            <HeaderCards
              key={item.id}
              title={item.title}
              time={item.time}
              date={item.date}
              img={item.img}
              // className="custome__bg__img"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Header;
