import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import { FaFolderOpen } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
import { useEffect } from "react";
import ImageOne from "../../images/ImageOne.jpg";
import ImageTwo from "../../images/ImageTwo.jpg";
import ImageThree from "../../images/ImageThree.jpg";
import ImageFour from "../../images/ImageFour.jpg";
import ImageFive from "../../images/ImageFive.jpg";
import ImageSix from "../../images/ImageSix.jpg";
import ImageSeven from "../../images/ImageSeven.jpg";
import ImageEight from "../../images/ImageEight.jpg";
import ImageNine from "../../images/ImageNine.jpg";
import ImageTen from "../../images/ImageTen.jpg";
import ImageEleven from "../../images/ImageEleven.jpg";
import ImageTwelve from "../../images/ImageTwelve.jpg";
import ImageThirteen from "../../images/ImageThirteen.jpg";
import ImageFourteen from "../../images/ImageFourteen.jpg";
import ImageFifteen from "../../images/ImageFifteen.jpg";
import ImageSixteen from "../../images/ImageSixteen.jpg";

const portfolioData = [
  {
    id: 3,
    name: "Guess My Number",
    image: ImageOne,
    link: "https://guess-my-number-project-hitana.surge.sh/",
  },
  {
    id: 3,
    name: "Mapty",
    image: ImageTwo,
    link: "https://mapty-project-hitana.surge.sh/",
  },
  {
    id: 3,
    name: "Pig Game",
    image: ImageThree,
    link: "https://project-pig-game-hitana.surge.sh/",
  },
  {
    id: 3,
    name: `Bankist(js,1111)`,
    image: ImageFour,
    link: "https://bankist-project-hitana.surge.sh/",
  },
  {
    id: 3,
    name: "Bankist Website",
    image: ImageFive,
    link: "http://bankist-website-project-hitana.surge.sh/",
  },
  {
    id: 3,
    name: "Forkify",
    image: ImageSix,
    link: "https://forkify-project-hitana.surge.sh/",
  },
  {
    id: 2,
    name: "Design of House",
    image: ImageSeven,
    link: "https://design-your-house-hitana.surge.sh/",
  },
  {
    id: 2,
    name: "Login Form",
    image: ImageEight,
    link: "https://responsive-login-hitana.surge.sh/",
  },
  {
    id: 2,
    name: "Registration Form",
    image: ImageNine,
    link: "https://responsive-registration-hitana.surge.sh/",
  },
  {
    id: 2,
    name: "Sahara Desert",
    image: ImageTen,
    link: "https://sahara-project-hitana.surge.sh/",
  },
  {
    id: 4,
    name: "React Essentials",
    image: ImageEleven,
    link: "http://react-essentials-project-hitana.surge.sh/",
  },
  {
    id: 4,
    name: "Tic Tac Toe",
    image: ImageTwelve,
    link: "http://tic-tac-toe-project-hitana.surge.sh/",
  },
  {
    id: 4,
    name: "Investment Calculator",
    image: ImageThirteen,
    link: "http://investment-calculator-project-hitana.surge.sh/",
  },
  {
    id: 4,
    name: "Reactart",
    image: ImageFourteen,
    link: "https://reactart-project-hitana.surge.sh/",
  },
  {
    id: 4,
    name: "Timer",
    image: ImageFifteen,
    link: "https://timer-project-hitana.surge.sh/",
  },
  {
    id: 5,
    name: "Graduation Project",
    image: ImageSixteen,
    link: "../../public/diplomayin.pdf",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "HTML & CSS",
  },
  {
    filterId: 3,
    label: "HTML & CSS & JS",
  },
  {
    filterId: 4,
    label: "HTML & CSS & React.js",
  },
  {
    filterId: 5,
    label: "HTML & CSS & React.js & Node.js & MsSQL & Solidity",
  },
];

export default function Portfolio() {
  const [filteredValue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    setAnimateCards(false); // հեռացնում ենք .fade-in class-ը
    const timeout = setTimeout(() => {
      setAnimateCards(true); // նորից ավելացնում ենք .fade-in՝ թարմացնելով DOM-ը
    }, 50); // մի փոքր դադար
    return () => clearTimeout(timeout);
  }, [filteredValue]); // ամեն անգամ filter փոխելուց

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const filteredItems =
    filteredValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredValue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<FaFolderOpen size={30}></FaFolderOpen>}
      ></PageHeaderContent>
      <div className="portfolio_content">
        <ul className="portfolio_content_filter">
          {filterData.map((item) => (
            <li
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
              className={item.filterId === filteredValue ? "active" : ""}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio_content_cards ">
          {filteredItems.map((item, index) => (
            <div
              className={`portfolio_content_cards_item ${
                animateCards ? "fade-in" : ""
              }`}
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
              onClick={() => {
                if (item.name === "Graduation Project") {
                  window.open("/diplomayin.pdf", "_blank");
                } else {
                  window.open(item.link, "_blank", "noopener,noreferrer");
                }
              }}
            >
              <div className="portfolio_content_cards_item_img-wrapper">
                <img
                  alt={item.name}
                  src={item.image}
                  className="portfolio_content_cards_item_img"
                />
              </div>
              <div className="overlay">
                <div>
                  <p>{item.name}</p>
                  <button
                    onClick={() =>
                      window.open(item.link, "_blank", "noopener,noreferrer")
                    }
                  >
                    Visit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
