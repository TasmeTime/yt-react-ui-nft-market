import { useState } from "react";
import styled from "styled-components";
import Colors from "../../Colors";

const TabsEl = styled.div`
  width: 100%;
`;

const TitlesContainer = styled.span`
  display: flex;
  justify-content: space-around;
  margin: 0 1.5rem;
  padding: 0 1rem;
`;

const Title = styled.span`
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  ${(p) => (p.active ? "" : `color:${Colors.Gray};`)}
  ${(p) => (p.active ? `font-weight:500;` : "")}

 ::after {
    ${(p) => (!p.active ? "display:none;" : "")}
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0.3rem;
    border-radius: 50%;
    margin-left: 50%;
    transform: translateX(-50%);
    height: 0.3rem;
    background-color: ${Colors.Primary};
  }
`;

const Content = styled.div`
  margin: 0 0.5rem;
  margin-top: 1rem;
`;

export default function Tabs({ tabs }) {
  const [CurrentTab, SetCurrentTab] = useState(tabs[0]);
  return (
    <TabsEl>
      <TitlesContainer>
        {tabs.map((tab) => {
          return (
            <Title
              onClick={() => {
                if (CurrentTab.id !== tab.id) {
                  SetCurrentTab(tab);
                }
              }}
              active={CurrentTab.id === tab.id}
            >
              {tab.title}
            </Title>
          );
        })}
      </TitlesContainer>
      <Content>{CurrentTab.content}</Content>
    </TabsEl>
  );
}
