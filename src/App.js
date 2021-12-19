import styled from "styled-components";
import Colors from "./assets/Colors";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMneu from "./assets/components/NavMneu";
import HomePage from "./assets/components/HomePage";
import StorePage from "./assets/components/StorePage";
import ProductPage from "./assets/components/ProductPage";

const AppEl = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
`;

const Pages = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

function App() {
  return (
    <Router>
      <AppEl>
        <Pages>
          <Routes>
            <Route excat path="/store" element={<StorePage />} />
            <Route excat path="/product" element={<ProductPage />} />
            <Route excat path="/" element={<HomePage />} />
          </Routes>
        </Pages>
        <NavMneu />
      </AppEl>
    </Router>
  );
}

export default App;
