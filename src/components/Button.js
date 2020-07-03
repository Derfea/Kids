import styled from 'styled-components'

export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.4rem;
    background:transparent;
    border:0.2rem solid var(--lightBlue);
    border-color:${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
    border-radius:0.5rem;
    padding:0.2rem 0.5rem;
    cursor:pointer;
    margin0.2rem 0.5rem 0.2rem 0;
    transition:all -.5s ease-in-out;
    transform:translate(0,0);
    transition:all 1s linear;
    &:hover{
        background:${props => props.cart? "var(--mainYellow)":"var(--lightBlue)"};
        color: var(--mainBlue);
        cursor:pointer;
    }
    &focus{
        outline:none;
    }
`