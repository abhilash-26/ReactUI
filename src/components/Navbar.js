import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LaunchIcon from "@material-ui/icons/Launch";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import FilterBAndWIcon from "@material-ui/icons/FilterBAndW";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import SettingsInputComponentIcon from "@material-ui/icons/SettingsInputComponent";
import EventIcon from "@material-ui/icons/Event";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import BusinessRoundedIcon from "@material-ui/icons/BusinessRounded";

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid grey;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 800;
  margin-left: 10px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin-bottom: 30px;
  margin-left: 20px;
  font-weight: 600;
  padding-left: 10px;
  color: grey;

  :hover {
    color: black;
    transform: scale(1.2);
  }
`;

const RowWrapper = styled.div`
  display: flex;
  height: 20px;
  padding-left: 20px;
  margin-bottom: 20px;
  :hover {
    border-left: 5px solid red;
  }
`;
const ContentContainer = styled.div``;
const LogoutButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  font-weight: 700;
  color: grey;
  :hover {
    color: black;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          marginLeft: "20px",
          marginBottom: "30px",
        }}
      >
        <BusinessRoundedIcon style={{ color: "red" }} />
        <Title>
          <span style={{ color: "orange" }}>Nex</span>{" "}
          <span style={{ color: "purple" }}>Weave</span>
        </Title>
      </div>
      <ContentContainer>
        <RowWrapper>
          <LaunchIcon style={{ color: "purple" }} />

          <StyledLink to="/blank">Get Started</StyledLink>
        </RowWrapper>
        <RowWrapper>
          <FilterBAndWIcon style={{ color: "purple" }} />
          <StyledLink to="/blank">Templets</StyledLink>
        </RowWrapper>
        <RowWrapper>
          <VolumeUpIcon style={{ color: "purple" }} />
          <StyledLink to="/campaign">Campaigns</StyledLink>
        </RowWrapper>
        <RowWrapper>
          <SettingsInputComponentIcon style={{ color: "purple" }} />
          <StyledLink to="/blank">Integration</StyledLink>
        </RowWrapper>
        <RowWrapper>
          <EventIcon style={{ color: "purple" }} />
          <StyledLink to="/blank">Manage Websites</StyledLink>
        </RowWrapper>
        <RowWrapper>
          <SettingsIcon style={{ color: "purple" }} />
          <StyledLink to="/blank">Settings</StyledLink>
        </RowWrapper>
      </ContentContainer>
      <ContentContainer
        style={{
          display: "flex",

          marginLeft: "20px",
          position: "absolute",
          bottom: "40px",
        }}
      >
        <ExitToAppIcon style={{ color: "purple" }} />
        <LogoutButton onClick={() => alert("you are logged out")}>
          Logout
        </LogoutButton>
      </ContentContainer>
    </Container>
  );
};

export default Navbar;
