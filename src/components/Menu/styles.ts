import styled, { keyframes } from 'styled-components'

const animate = keyframes`
    0% {
        transform: translateX(-20px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`
export const Content = styled.div`
  cursor: pointer;

  animation: ${animate} 0.5s ease;
  transition: all 0.3s;

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    span {
      //font-weight: bold;
      color: ${(props) => props.theme.COLORS.GRAY_300};
      font-size: 1.8rem;
    }

    opacity: 0.8;

    transition: opacity 0.2s;
    &:hover,
    &:focus {
      color: ${(props) => props.theme.COLORS.GRAY_700};
      opacity: 1;
    }
  }

  .contentMenu {
    width: 40rem;
    top: 11px !important;
    left: -15rem !important;
    padding: 1.5rem 3.5rem 3.5rem 3.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #f6f9fc;
    border-radius: 1.6rem;
    animation: ${animate} 0.5s ease;
    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 1;
    }

    &::before {
      content: '';
      position: absolute;
      width: 1.6rem;
      height: 1.6rem;
      background: #f6f9fc;
      border-top: 0.1rem solid rgba(89, 107, 100, 0.16);
      border-left: 0.1rem solid rgba(89, 107, 100, 0.16);

      top: -0.8rem;
      left: 19rem;
      border-radius: 0.4rem 0 0 0;

      transform: rotate(45deg);
    }

    li {
      background-color: #f6f9fc;
    }
  }

  .contentMenuPerfil {
    width: 40rem;
    top: 11px !important;
    left: -18.5rem !important;
    padding: 1.5rem 3.5rem 3.5rem 3.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background: #f6f9fc;
    border-radius: 1.6rem;
    animation: ${animate} 0.5s ease;
    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 1;
    }

    &::before {
      content: '';
      position: absolute;
      width: 1.6rem;
      height: 1.6rem;
      background: #f6f9fc;
      border-top: 0.1rem solid rgba(89, 107, 100, 0.16);
      border-left: 0.1rem solid rgba(89, 107, 100, 0.16);

      top: -0.8rem;
      left: 19rem;
      border-radius: 0.4rem 0 0 0;

      transform: rotate(45deg);
    }

    li {
      background-color: #f6f9fc;
    }
  }

  .contentItem {
    display: flex;
    font-size: 1.6rem;
    align-items: center;
    gap: 1rem;
    opacity: 0.8;
    
    transition: opacity 0.2s;
    &:hover,
    &:focus {
      opacity: 1;
    }

    a{
      display: flex;
      align-items: center;
      text-decoration: none;
      margin: 0;
    }
    .content-right {
      display: flex;
    }

    .content-left {
      margin-left: 1rem;
      width: 27rem;
      h3 {
        color: ${(props) => props.theme.COLORS.GRAY_700};
        font-size: 1.6rem;
        font-weight: bold;
        padding-right: 1rem;
      }
      p {
        color: ${(props) => props.theme.COLORS.GRAY_500};
        font-weight: normal;
        text-transform: lowercase;
        font-size: 1.6rem;
        white-space: normal;
        margin-top: 0.5rem;
        width: 100%;
      }
      div {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 0;
      }
    }
  }
  .classMenuItem {
    background-color: #f6f9fc;
    padding: 1.5rem 1.5rem 1.5rem 0;
    width: 33rem;

    white-space: nowrap;
  }

  .new-tag {
    text-transform: uppercase;
    font-size: 0.9rem;
    background: #14aa4b;
    border-radius: 0.6rem;
    padding: 0.2rem 0.3rem;
    color: #fff;
  }

  .pending-tag {
    text-transform: uppercase;
    font-size: 0.9rem;
    background: #f84f6b;
    border-radius: 0.6rem;
    padding: 0.2rem 0.3rem;
    color: #fff;
  }

  .container-feedback {
    display: flex;
    align-items: center;

    width: 100%;
    height: 8rem;

    background-color: #fff;
    box-shadow: 0 0.3rem 0.6rem rgba(0, 0, 0, 0.3);
    border-radius: 0.6rem;

    //margin-bottom: 2.5rem;
    padding: 1.5rem;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 3.5rem;
      height: 3.5rem;
      margin-left: 0.5rem;
    }

    p {
      white-space: normal;
      color: ${(props) => props.theme.COLORS.GRAY_500};
      font-size: 1.2rem;
      font-weight: normal;
      text-transform: lowercase;
      margin-left: 1.4rem;
    }
  }
`