import styled from "styled-components";
import Colors from "../../Colors";

const PageContainer = styled.div`
  background-color: ${Colors.Background};
  flex: 1;
  padding-bottom: 10vh;
  overflow: auto;
  overflow-x: hidden;
  min-height: min-content;
  padding-top: 1rem;
  scrollbar-width: 0;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default PageContainer;
