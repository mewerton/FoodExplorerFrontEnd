import styled from "styled-components";

export const Container = styled.header`

    grid-area: header;

    height: 104px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
    
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    .logo{
    white-space: nowrap; 
    display: flex;
    align-items: center; 

    gap: 11px;

    font-family: 'Roboto';
    font-weight: 700;
    font-size: 25px;
    line-height: 29px;

    cursor: pointer;

    padding-right: 10px;

    }
  

   
`