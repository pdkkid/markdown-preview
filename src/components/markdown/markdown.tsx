import React from "react";
import ReactMarkdown from "react-markdown";
import { useRecoilValue } from "recoil";
import { InputAtom } from "../../state";
import { CustomStack, StyledLabel } from "../styles";

export const Markdown = (): JSX.Element => {
    const FormattedInput  = () => {
        const input = useRecoilValue(InputAtom);
        return (<ReactMarkdown>{input}</ReactMarkdown>)
    }
    return (
    <CustomStack>
      <StyledLabel>Preview</StyledLabel>

      <FormattedInput/>
    </CustomStack>
  );
};
