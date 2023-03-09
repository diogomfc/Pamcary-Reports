import React, { ComponentProps } from 'react'
import { Path, UseFormRegister } from 'react-hook-form'

import {Container, TextInputContainer,TextArea, TypeError} from './styles'

export interface TextInputPops extends ComponentProps<typeof TextArea> {
  name: Path<any>
  register: UseFormRegister<any>
  required: boolean
  error?: string
}

export function TextAreaEditor({ name, register, required, error, ...props }: TextInputPops) {
  return(
    <Container>
      <TextInputContainer>
        <TextArea 
          {...register(name, { required })} 
          {...props}
        />
      </TextInputContainer>
      <TypeError>{error}</TypeError>
    </Container>
  )
}