import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContentSection from "./components/ContentSection";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
`;

function App() {
  return (
    <Router>
      <Container className="App">
        <Navbar />
        <ContentSection />
      </Container>
    </Router>
  );
}

export default App;
