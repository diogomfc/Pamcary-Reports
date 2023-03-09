import React, { ComponentProps } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

import { Container,TextInputContainer, SelectContent, Option, Label, Prefix, TypeError } from "./styles";

interface SelectInputProps extends ComponentProps<typeof SelectContent>{
  options: Array<{
    value: string | number;
    label: string | number;
  }>;
  label?: string;
  prefix?: string | JSX.Element;
  name: Path<any>;
  register: UseFormRegister<any>;
  error?: string;
}

export function SelectInput({options,label, prefix, name,register, error, ...props}: SelectInputProps){
  return(
    <Container>
      {!!label && <Label>{label}</Label>}
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <SelectContent className="custom-select" {...register(name)} {...props}>
        <option value="" selected disabled hidden>----</option>
          {options.map(option => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </SelectContent>
      </TextInputContainer>
      <TypeError>{error}</TypeError>
    </Container>
  )
}