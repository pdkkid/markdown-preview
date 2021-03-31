import { useRecoilState } from "recoil";
import { InputAtom } from "../../state";
import React from "react";
import { StyledTextArea, StyledLabel, CustomStack } from "../styles";

export const Editor = (): JSX.Element => {
  const [input, setInput] = useRecoilState(InputAtom);

  const onChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <CustomStack>
      <StyledLabel>Editor</StyledLabel>
      <StyledTextArea
        id="editor"
        itemType="text"
        onChange={onChange}
        value={input}
        spellCheck={false}
      />
    </CustomStack>
  );
};
