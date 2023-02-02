import styled from 'styled-components'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

export const Container = styled.div`
  background-color: ${(props) => props.theme.COLORS.WHITE};
  border-bottom: 1px solid ${(props) => props.theme.COLORS.GRAY_100};
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 30px;

  width: 100%;
  padding: 2rem 0;

  position: fixed;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1440px;
  margin: 0 auto;
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;

  .separator {
    background: ${(props) => props.theme.COLORS.GRAY_100};
    width: 0.1rem;
    height: 6rem;
    line-height: 0;
  }

  h1 {
    letter-spacing: 0.3rem;
    color: ${(props) => props.theme.COLORS.GRAY_400};
    font-weight: normal;
  }
`

export const Perfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
  }

  gap: 1rem;

  .content_perfil {
    display: flex;
    flex-direction: center;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .name_perfil {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    h1 {
      font-size: 1.6rem;
      font-weight: bold;
      color: ${(props) => props.theme.COLORS.GRAY_700};
    }
    p {
      font-size: 1.4rem;
      color: ${(props) => props.theme.COLORS.GRAY_500};
    }
  }

  .notification {
    display: flex;

    svg {
      left: 0.8rem;
      position: relative;
      left: 0.8rem;
      color: ${(props) => props.theme.COLORS.GRAY_500};
    }

    div {
      display: flex;
      position: relative;
      right: 0.4rem;
      bottom: 0.8rem;
      align-items: center;
      justify-content: center;

      background: ${(props) => props.theme.COLORS.WHITE};
      box-shadow: 0 0 1em ${(props) => props.theme.COLORS.BLUE_300};
      height: 1.5rem;
      width: 1.5rem;
      border-radius: 50%;
      line-height: 0;
      color: ${(props) => props.theme.COLORS.BLUE_300};
    }
  }

  .btm_Sair {
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme.COLORS.GRAY_100};
    height: 4.4rem;
    width: 4.4rem;
    border-radius: 0.6rem;

    cursor: pointer;

    color: ${(props) => props.theme.COLORS.GRAY_600};

    &:hover {
      background: #d4e4ff;
    }
  }
`

export const Avatar = styled(AvatarPrimitive.Root)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 100%;
  background-color: ${(props) => props.theme.COLORS.GRAY_100};
  box-shadow: rgba(17, 17, 26, 0.1) 1px 1px 5px;
`

export const AvatarImage = styled(AvatarPrimitive.Image)`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`

export const AvatarFallback = styled(AvatarPrimitive.Fallback)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
  background: ${(props) => props.theme.COLORS.GRAY_100};
  color: ${(props) => props.theme.COLORS.GRAY_600};
`
