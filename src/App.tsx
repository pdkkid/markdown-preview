import React from "react";
import {
  CustomCover,
  CustomSplit,
  SourceLink,
  StyledBar,
  Title,
} from "./App.styles";
import AppBoundry from "@bedrock-layout/appboundary";
import { Markdown } from "./components/markdown";
import { Editor } from "./components/editor";

export const App = (): JSX.Element => {
  return (
    <CustomCover bottom={<BottomBar />}>
      <AppBoundry>
        <CustomSplit gutter="md" fraction="1/2">
          <Editor />
          <Markdown />
        </CustomSplit>
      </AppBoundry>
    </CustomCover>
  );
};

const BottomBar = (): JSX.Element => {
  return (
    <StyledBar>
      <Title>Markdown Preview</Title>
      <SourceLink
        href="https://github.com/pdkkid/markdown-preview"
        target="_blank"
        rel="noreferrer noopener"
      >
        Source
      </SourceLink>
    </StyledBar>
  );
};
