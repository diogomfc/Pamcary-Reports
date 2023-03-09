import React, { ComponentProps } from 'react'
import {Container, Label, TextInputContainer, Prefix, Input, TypeError } from './styles'
import { Path, UseFormRegister } from 'react-hook-form'


export interface TextInputPops extends ComponentProps<typeof Input> {
  label?: string
  name: Path<any>
  prefix?: string | JSX.Element
  register: UseFormRegister<any>
  required: boolean
  error?: string
}

export function InputText({ label, name, prefix, register, required, error, ...props }: TextInputPops) {
  return (
    <Container>
      {!!label && <Label>{label}</Label>}
      <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input 
      {...register(name, { required })} 
      {...props}
      />
      </TextInputContainer>
      <TypeError>{error}</TypeError>
    </Container>
  )
}
