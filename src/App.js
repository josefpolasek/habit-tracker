// import Container
import { Container } from "./components/styles/Container.styled.js";
import Header from "./components/Header.js";
import DataTable from "./components/Table"

import styled from "styled-components";

const Main = styled.div`
  /* background-color: yellow; */

  display: flex;
  justify-content: center;

  @media only screen and (max-width: 700px) {
    justify-content: left;
  }
`

function App() {
  return (
    <Main>
      {/* <Header />
      <Container>
        <h1> Hello World! </h1>
      </Container> */}
      <DataTable/>
    </Main>
  );
}

export default App;
