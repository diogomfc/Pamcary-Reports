import styled from 'styled-components'

export const Container = styled.div`
 
`

export const Label = styled.label`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  pointer-events: none;
  padding: 0 0.5rem;
`

export const TypeError = styled.div`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.RED};
  padding: 0 0.5rem;
  background-color: transparent;
  height: 1rem;
  display: flex;
  align-items: center;
`

export const TextInputContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.GRAY_50};
  padding: 1.2rem 1.2rem 1.2rem 2rem;
  margin: .3rem 0;
  border-radius: 0.8rem;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  display: flex;
  align-items: center;

  &:has(input:focus) {
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_400};
  }
  &:has(input:disabled) {
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  }
`

export const Prefix = styled.div`
  display: flex;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  margin-right: 1rem;
`

export const Input = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  font-weight: normal;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  &:focus {
    outline: none;
  }
  &::disabled {
    cursor: not-allowed;
  }
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-weight: normal;
  }
`
