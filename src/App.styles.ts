import InlineCluster from "@bedrock-layout/inline-cluster";
import styled from "styled-components";
import Cover from "@bedrock-layout/cover";

export const CustomCover = styled(Cover)`
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
  user-select: none;
  font-size: 1.25em;
  font-weight: 400;
`;

export const SourceLink = styled.a`
  user-select: none;
  font-size: 1em;
  font-weight: 400;
  justify-self: left;
  color: #ecf0f1;
  text-decoration: none;
  &:hover {
    color: #ddffbc;
  }
`;