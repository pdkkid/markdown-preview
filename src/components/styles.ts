import Stack from "@bedrock-layout/stack";
import styled from "styled-components";

export const StyledLabel = styled.label`
    font-size: 2em;
    text-decoration: underline;
    font-weight: bold;
    font-family: inherit;
    color: #2c3e50;
    padding-bottom: 20px;
    text-align: center;
`;

export const StyledTextArea = styled.textarea`
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  width:100%;
  height:100%;
  outline: none;
  box-shadow: none;
  border: none;
  border-bottom: none;
  border-radius: 0;
  background: transparent;
  overflow-y: hidden;
  resize: none;
  font-size: 1.25em;
  color: #2c3e50;
`;

export const CustomStack = styled(Stack)`
    padding: .5em;
    place-items: center;
    grid-template-rows: min-content;
`;