import styled from 'styled-components';

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    /* Segura a emoção */
    &:hover,
    &:focus {
        opacity: .5;
    }
`;