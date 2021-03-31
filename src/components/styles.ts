import Stack from "@bedrock-layout/stack";
import styled from "styled-components";

export const StyledLabel = styled.label`
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
  text-align-last: center;
  color: #ecf0f1;
`;

export const CustomStack = styled(Stack)`
    padding: .5em;
    place-items: center;
    grid-template-rows: min-content;
`;