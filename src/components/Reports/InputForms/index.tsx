import React, { ComponentProps } from "react";
import { Path, UseFormRegister } from "react-hook-form";


export interface TextInputPops extends ComponentProps<typeof Input> {
  label?: string;
  name: Path<any>;
  register: UseFormRegister<any>;
  required: boolean;
  error?: string;
}


import {
  Container,
  Label,
  TextInputContainer,
  Input,
  TypeError,
} from "./styles";

export function InputForms({
  label,
  name,
  register,
  required,
  error,
  ...props
}: TextInputPops) {
  return (
    <Container>
      <TextInputContainer>
        {!!label && (
          <Label>
            {label}
            <TypeError>{error}</TypeError>
          </Label>
        )}
        <Input {...register(name, { required })} {...props} />
      </TextInputContainer>
    </Container>
  );
}
