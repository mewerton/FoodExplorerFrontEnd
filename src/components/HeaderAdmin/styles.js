import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`

    grid-area: header;

    height: 104px;
    width: 100%;

    display: flex;
    
    align-items: center;
    justify-content: center;
    gap: 32px;
    
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    .page{
        display: flex;
        width: 1120px;
        justify-content: space-between;
        align-items: center; 
    }

    a{
    color: ${({ theme }) => theme.COLORS.WHITE};
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
  
     @media(max-width: 1140px){

        gap: 12px;

        .logo{
            padding-right: 5px;
            gap: 5px;
        }

    }

    .header{
        display: flex;
        gap: 10px;
        
    }

`

export const ButtonReq = styled(Link)`
    max-width: 216px;

    @media(max-width: 1140px){
       
        max-width: 160px;
    }

`

