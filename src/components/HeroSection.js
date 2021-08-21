import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

const Container = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  border-bottom: 1px solid grey;
`;

const TopToggle = styled.div`
  background-color: #ebf9f5;
  border-radius: 5px;
  width: 200px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  height: 10px;
  width: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const RowWrapper = styled.div`
  display: flex;
  height: 25px;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 35px;
`;

const HeroSection = () => {
  const [allData, setAllData] = useState([
    "Web Campaign",
    "Live Campaign",
    "Any Campaign",
  ]);
  const [currentPosition, setCurrentPosition] = useState(0);
  const handleMoveTop = () => {
    if (currentPosition > 0) {
      setCurrentPosition(currentPosition - 1);
    }
  };

  const handleMoveBottom = () => {
    if (currentPosition < 2) {
      setCurrentPosition(currentPosition + 1);
    }
  };

  return (
    <Container>
      <MenuIcon />
      <h2>
        <span style={{ color: "grey" }}>How are you doing today</span> John?
      </h2>
      <TopToggle>
        {allData[currentPosition]}
        <RowWrapper>
          <Button onClick={handleMoveTop}>
            <ExpandLessIcon />
          </Button>
          <Button onClick={handleMoveBottom}>
            <ExpandMoreIcon />
          </Button>
        </RowWrapper>
      </TopToggle>
      <h4>
        <span style={{ color: "grey" }}>Credits:</span> 200
      </h4>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderLeft: "1px solid grey",
        }}
      >
        <ContactSupportIcon
          style={{ cursor: "pointer" }}
          onClick={() => alert("Welcome to the support page")}
        />
        <AccountCircleIcon
          style={{ width: "50px", height: "40px", cursor: "pointer" }}
          onClick={() => alert("profile page opened")}
        />
      </div>
    </Container>
  );
};

export default HeroSection;
