import React, { Fragment } from "react";
import styled from "styled-components";
import Cover from "@bedrock-layout/cover";
import Center from "@bedrock-layout/center";
import Stack from "@bedrock-layout/stack";
import AppBoundry from "@bedrock-layout/appboundary";
import { Formatted } from "./components/formatted";
import { Plain } from "./components/plain";
import Split from "@bedrock-layout/split";
import InlineCluster from "@bedrock-layout/inline-cluster";

export const App = (): JSX.Element => {
  return (
    <AppBoundry>
      <Cover bottom={<BottomBar />}>
        <Split gutter="lg" fraction="1/2">
          <Plain />
          <Formatted />
        </Split>
      </Cover>
    </AppBoundry>
  );
};

const Title = styled.text`
  font-size: 20px;
`;

const SourceLink = styled.a`
  user-select: none;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  color: red;
  text-decoration: none;
  &:hover {
    color: orange;
  }
`;

const BottomBar = (): JSX.Element => {
  return (
    <InlineCluster gutter="lg" justify="start" align="start">
      <Title>Markdown Preview</Title>
      <SourceLink
        href="https://github.com/pdkkid/markdown-preview"
        target="_blank"
        rel="noreferrer noopener"
      >
        Source
      </SourceLink>
    </InlineCluster>
  );
};