import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import styled from "styled-components";
import BlankPage from "./BlankPage";
import DisplayContent from "./DisplayContent";
import HeroSection from "./HeroSection";

const Container = styled.div`
  width: 100%;
  height: auto;
  /* padding-left: 20px; */
`;

const ContentSection = () => {
  return (
    <Container>
      <HeroSection />
      <Switch>
        <Route path="/campaign" component={DisplayContent} />
        <Route path="/blank" component={BlankPage} />
      </Switch>
    </Container>
  );
};

export default ContentSection;
