import Split from "@bedrock-layout/split";
import InlineCluster from "@bedrock-layout/inline-cluster";
import styled from "styled-components";
import Cover from "@bedrock-layout/cover";

export const CustomSplit = styled(Split)`
  height: 100%;
`;

export const CustomCover = styled(Cover)`
  background: #95a5a6;

  [data-bedrock-layout-cover-child] {
    align-self: auto;
  }
`;

export const StyledBar = styled(InlineCluster)`
  background: #2c3e50;
  align-items: center;
  padding: .5em;
  justify-content: space-between;
`;

export const Title = styled.span`
  color: #ecf0f1;
  font-size: 1.25em;
  font-weight: 400;
`;

export const SourceLink = styled.a`
  user-select: none;
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
  font-weight: 200;
  justify-self: left;
  color: #ecf0f1;
  text-decoration: none;
  &:hover {
    color: #ddffbc;
  }
`;