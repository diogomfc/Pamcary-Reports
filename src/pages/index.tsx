import { Layout } from "../components/Layout/index";
import * as Tabs from "@radix-ui/react-tabs";

import styled from "styled-components";
import { violet, mauve, blackA, green } from '@radix-ui/colors';
import { GuiaForm } from "@components/Reports/GuiaForm/idenx";

export default function App() {
  return (
    <>
      <Layout>
        <TabsRoot defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">
              <h1>CADASTRO</h1>
            </TabsTrigger>

            <TabsTrigger value="tab2">
              <h1>NOTAS</h1>
            </TabsTrigger>
          </TabsList>

          <Tabs.Content value="tab1">
            <h1>Tab 1 Content</h1>
          </Tabs.Content>

          <Tabs.Content value="tab2">
            <h1>Tab 2 Content</h1>
          </Tabs.Content>
        </TabsRoot>
      </Layout>
    </>
  );
}

const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 2px 10px ${({ theme }) => theme.COLORS.GRAY_100};
`
const TabsList = styled(Tabs.List)`
  display: flex;
  flex-shrink: 0;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
`

const TabsTrigger = styled(Tabs.Trigger)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.WHITE};

  all: unset;
  cursor: pointer;
  line-height: 1;

  h1{
    padding: 1.6rem 4rem 1.6rem 4rem;
    font-size: 1.6rem;
    font-weight: 500;

    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  &::first-child{
    border-top-left-radius: 6px;
  }
  &::last-child{
    border-top-right-radius: 6px;
  }
  &:hover{
    background-image: linear-gradient(
      to right,
      rgba(228, 235, 254, 1),
      rgba(211, 243, 240, 1)
      );
  }
  &[data-state="active"]{
    color: ${({ theme }) => theme.COLORS.BLUE_400};
    box-shadow: inset 0 -2px 0 0 currentColor, 0 2px 0 0 currentColor;
  }
  &:focus{
    position: relative;
    //box-shadow: 0 0 0 2px black;
  }

`
