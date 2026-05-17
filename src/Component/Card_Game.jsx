import React, { useState } from "react";
import img1 from "../images/raphael-ai (1).jpeg";
import img2 from "../images/raphael-ai (2).jpeg";
import img3 from "../images/raphael-ai (3).jpeg";
import img4 from "../images/raphael-ai-1773032472590.jpg";
import img5 from "../images/raphael-ai-1773032951478.jpg";
import card from "../images/image.png";
import Grid from "@mui/material/Grid";

const Card_Game = () => {
  const images = [img1, img2, img3, img4, img5];
  const cardImages = [...images, ...images];

  const [firstcards, setFirstCards] = useState(null);
  const [secondcards, setSecondCards] = useState(null);
  const [matchCards, setMatchCards] = useState([]);

  const handleClick = (index) => {
    if (
      index === firstcards ||
      index === secondcards ||
      matchCards.includes(index)
    )
      return;

    if (firstcards === null) {
      setFirstCards(index);
      return;
    }

    const firstIndex = firstcards;
    const secondIndex = index;

    setSecondCards(index);

    if (cardImages[firstIndex] === cardImages[secondIndex]) {
      setMatchCards((prev) => [...prev, firstIndex, secondIndex]);
    }

    setTimeout(() => {
      setFirstCards(null);
      setSecondCards(null);
    }, 1000);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        maxWidth: "1400px",
        margin: "40px auto",
        justifyContent: "center",
      }}
    >
      {cardImages.map((item, index) =>
        index === firstcards ||
        index === secondcards ||
        matchCards.includes(index) ? (
          <Grid item xs={3} key={index}>
            <div
              onClick={() => handleClick(index)}
              style={{
                width: "100%",
                overflow: "hidden",
                cursor: "pointer",
                transform: "scale(1)",
                transition: "0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={item}
                alt="card"
                style={{
                  width: "250px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </div>
          </Grid>
        ) : (
          <Grid item xs={12} key={index}>
            <div
              onClick={() => handleClick(index)}
              style={{
                width: "250px",
                height: "400px",
                borderRadius: "12px",
                background: "#e1561b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "#fff",
                fontSize: "32px",
                fontWeight: "bold",
                boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
                transition: "1s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "rotate(180deg) scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={card}
                alt="card"
                style={{
                  width: "250px",
                  height: "400px",
                  objectFit: "cover",
                }}
              />
            </div>
          </Grid>
        ),
      )}
    </Grid>
  );
};

export default Card_Game;
