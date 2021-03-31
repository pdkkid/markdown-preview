import React from "react";
import styled from "styled-components";
import Cover from "@bedrock-layout/cover";
import Center from "@bedrock-layout/center";
import Stack from "@bedrock-layout/stack";
import AppBoundry from "@bedrock-layout/appboundary";
import { Markdown } from "./components/markdown";
import { Editor } from "./components/editor";
import Split from "@bedrock-layout/split";
import InlineCluster from "@bedrock-layout/inline-cluster";

export const App = (): JSX.Element => {

  return (
    <AppBoundry>
      <Cover bottom={<BottomBar />} chil>
        <Split gutter="lg" fraction="1/2">
          <Editor />
          <Markdown />
        </Split>
      </Cover>
    </AppBoundry>
  );
};

const StyledBar = styled(InlineCluster)`
  background: #52734d;
  align-items: center;
  padding: .5em;
  justify-content: space-between;
`;

const Title = styled.span`
  color: #ddffbc;
  font-family: 'Roboto', sans-serif;
  font-size: 1.25em;
  font-weight: 400;
`;

const SourceLink = styled.a`
  user-select: none;
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  font-weight: 200;
  justify-self: left;
  color: #91c788;
  text-decoration: none;
  &:hover {
    color: #ddffbc;
  }
`;

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
