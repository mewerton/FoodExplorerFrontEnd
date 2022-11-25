import styled from "styled-components";

export const Container = styled.div`


display: flex;
align-items: center;

background-color: transparent;

border: 1px solid #FFFFFF;
border-radius: 5px;

>svg{
        margin-left: 16px;
    }
    
>input{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
    background-color: transparent;
    border: 0;
    width: 100%;
    color: ${({theme}) => theme.COLORS.GREY_400};

   
    /* display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 14px;
    gap: 14px;
    border: 1px solid #FFFFFF;
    border-radius: 5px;

    width: 410px;
    height: 48px;
    

    background: transparent;
    color: ${({theme})=> theme.COLORS.GREY_400};

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%; */
}

` 