import styled,{keyframes} from 'styled-components';

const animate = keyframes`
    0% {
        transform: translateX(-50px);
        opacity: 0;
    }
    50%{
        opacity: .3;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
`;

export const Container = styled.div`
  
`;

export const Heading = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    h1{
        color: ${props => props.theme.COLORS.GRAY_700};
        font-size: 2.1rem;
        font-weight: bold;

        &::after {
            content: '';
            display: block;
            border-bottom: 0.3rem solid ${props => props.theme.COLORS.BLUE_300};
            animation: ${animate} 1s;
        }
    }

    div{
        background:${props => props.theme.COLORS.GRAY_700};
        width: 0.8rem;
        height: 0.2rem;
    }
    h3{
        color: ${props => props.theme.COLORS.GRAY_700};
        font-size: 2.1rem;
        font-weight: normal;
    }

`;