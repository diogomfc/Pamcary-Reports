import React, { ComponentProps } from "react";
import { Path, UseFormRegister } from "react-hook-form";

import {
  Container,
  TextInputContainer,
  SelectContent,
  Option,
  Label,
  TypeError,
} from "./styles";

interface SelectInputProps extends ComponentProps<typeof SelectContent> {
  options: Array<{
    value: string | number;
    label: string | number;
  }>;
  label?: string;
  name: Path<any>;
  register: UseFormRegister<any>;
  error?: string;
}

export function SelectInputForms({
  options,
  label,
  name,
  register,
  error,
  ...props
}: SelectInputProps) {
  return (
    <Container>
      <TextInputContainer>
        {!!label && (
          <Label>
            {label}
            <TypeError>{error}</TypeError>
          </Label>
        )}
        <SelectContent className="custom-select" {...register(name)} {...props}>
          <option value="" selected disabled hidden>
            ----
          </option>
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </SelectContent>
      </TextInputContainer>
    </Container>
  );
}
