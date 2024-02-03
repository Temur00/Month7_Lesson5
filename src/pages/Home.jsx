import React from "react";
import { mainLeft, mainRight } from "../assets/images";
import { Button } from "@mui/material";
import "./main.scss";

const Home = () => {
  return (
    <main
      className="container aligin-items-center"
      style={{ marginTop: "80px" }}
    >
      <div className="hero">
        <img src={mainLeft} alt="img" />
        <div className="mid-items">
          <p className="maroon">MAROON</p>
          <p className="natural">
            Натуральная косметика для бережного ухода за кожей
          </p>
          <div className="btn-pod">
            <Button className="mt-4" variant="outlined">
              Подробнее
            </Button>
          </div>
        </div>
        <img src={mainRight} alt="img" />
      </div>
    </main>
  );
};

export default Home;
