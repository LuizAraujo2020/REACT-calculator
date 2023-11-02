import styled from 'styled-components';

export const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 3rem;
    height: 3rem;
    padding: 1.25rem;

    color: #FFF;
    font-size: 1.5rem;
    font-weight: 700;

    background-color: #0AF;
    border: 1px solid #CDCDCD;
    border-radius: 15%;

    &:hover {
        opacity: .6;
    }
`