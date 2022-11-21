import styled from "styled-components";

export const Container = styled.header`

    grid-area: header;

    height: 104px;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 24px 123px;
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

    }


    > .logout {
        background: transparent;
        border: none;
        padding-top: 36px;
        padding-bottom: 36px;
        display: flex;
        align-items: center;
        width: 32px;
        height: 32px;

    }

    .ButtonText{
      
    }
  


   
   
   
`