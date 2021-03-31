import React from "react";
import { CustomCover, SourceLink, StyledBar, Title } from "./App.styles";
import AppBoundry from "@bedrock-layout/appboundary";
import { Editor, Markdown } from "./components";
import Split from "@bedrock-layout/split";

export const App = (): JSX.Element => {
  return (
    <CustomCover bottom={<BottomBar />}>
      <AppBoundry>
        <Split gutter="md" fraction="1/2">
          <Editor />
          <Markdown />
        </Split>
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
