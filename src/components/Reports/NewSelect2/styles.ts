import styled from "styled-components";

export const Container = styled.div``;

export const TextInputContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.GRAY_50};
  padding: 1.2rem .5rem .5rem 1.2rem;
  border-radius: 0.6rem;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

  display: flex;
  //gap: .5rem;
  flex-direction: column;

  //overflow: hidden;
 
  /* height: 4.7rem;
  margin: .3rem 0;
  line-height: 3; */

  &:has(select:focus) {
    border: 1px solid ${({ theme }) => theme.COLORS.BLUE_400};
  }
  &:has(select:disabled) {
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  }
`

export const SelectContent = styled.select`
  background-color: transparent;
  border: none;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  transition: all 0.2s ease-in-out;
  width: 100%;
  height: 100%;
  padding: .3rem 0;
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
export const Option = styled.option`
  background-color: ${({ theme }) => theme.COLORS.GRAY_50};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 1rem;
 
`

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  pointer-events: none;
  display: flex;
  align-items: center;
`
export const TypeError = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.COLORS.RED};
  padding: 0 0.5rem;
  background-color: transparent;
  height: 1rem;
  display: flex;
  align-items: center;
`