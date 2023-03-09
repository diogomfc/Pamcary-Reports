import React, { ComponentProps } from "react";
import {
  Container,
  Label,
  TextInputContainer,
  Prefix,
  Input,
  TypeError,
} from "./styles";

export interface TextInputPops extends ComponentProps<typeof Input> {
  label?: string;
  prefix?: string | JSX.Element;
}

export function SearchInput({ label, prefix, ...props }: TextInputPops) {
  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input {...props} />
      </TextInputContainer>
    </Container>
  );
}
