import * as ScrollArea from "@radix-ui/react-scroll-area";
import { violet, mauve, blackA } from '@radix-ui/colors';

import styled from 'styled-components'


import {
  Container,
  HeaderTitle,
  Title,
  StepsReport,
  LineMultiSteps,
} from "./styles";
import React from "react";

interface SidebarProps {
  children?: React.ReactNode;
}

export function SidebarSteps({ children }: SidebarProps) {
  return (
    <Container>
      <HeaderTitle>
        <Title>CONFIRA OS PRÓXIMOS PASSOS</Title>
      </HeaderTitle>
      <StepsReport>
{/* 
        <ScrollAreaRoot>
            <ScrollAreaViewport> */}

              <LineMultiSteps>{children}</LineMultiSteps>
            
            {/* </ScrollAreaViewport>
            <ScrollAreaScrollbar orientation="vertical">
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
            <ScrollAreaCorner />
        </ScrollAreaRoot> */}

      </StepsReport>
    </Container>
  );
}

const SCROLLBAR_SIZE = 3;

const ScrollAreaRoot = styled(ScrollArea.Root)`
  width: 100%; 
  height: 800px;
  overflow: hidden;
`

const ScrollAreaViewport = styled(ScrollArea.Viewport)`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`
 

const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar)`
  display: flex;
  user-select: none;
  touch-action: none;
  padding: 2px;
  background: ${blackA.blackA6};
  transition: background 160ms ease-out;
  &:hover {
    background: ${blackA.blackA8};
  }
  &:active {
    background: ${blackA.blackA9};
  }
  &[data-orientation="vertical"] {
    width: ${SCROLLBAR_SIZE}px;
    height: 100%;
    padding: 2px 0;
  }
`

const ScrollAreaThumb = styled(ScrollArea.Thumb)`
  display: block;
  width: 100%;
  height: 100%;
  background: ${mauve.mauve11};
  border-radius: 4px;
  transition: background 160ms ease-out;
  ${ScrollAreaScrollbar}:hover & {
    background: ${mauve.mauve12};
  }
  ${ScrollAreaScrollbar}:active & {
    background: ${mauve.mauve10};
  }
`

const ScrollAreaCorner = styled(ScrollArea.Corner)`
  background: ${blackA.blackA6};
`
