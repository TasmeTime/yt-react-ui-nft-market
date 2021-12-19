import styled from "styled-components";
import Colors from "../../Colors";

const Button = styled.button`
  background-color: ${(p) =>
    p.bgColor ? p.bgColor : p.np ? Colors.CardBackground : Colors.Primary};
  color: ${(p) => (p.color ? p.color : p.np ? "" : Colors.CardBackground)};
  border-radius: 12px;
  cursor: pointer;
  border: none;
  ${(p) => (p.np ? "" : "box-shadow: 0px 15px 23px rgba(255,22,78,.12);")}
  ${(p) => (p.np ? `border:1px solid ${Colors.GrayBorder};` : "")}
  padding:0.5rem ${(p) => (p.np ? "1rem" : "3rem")};
  font-size: 1.1rem;
  ${(p) => (p.fw ? "width:100%;" : "")}
  ${(p) => (p.disabled ? `opacity:.5;cursor:default;` : "")}
  ${(p) =>
    p.flex
      ? `display:flex;justify-content:center;align-content:center;column-gap:.4rem;`
      : ""}
`;

export default Button;
