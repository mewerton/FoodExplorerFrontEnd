import styled from "styled-components"

export const Container = styled.section`
margin: 0px 0 0px;

width: 1122px;

background-color: red;

>h2{
    padding-bottom: 0px;
    margin-bottom: 0px;

    color: ${({ theme }) => theme.COLORS.GREY_100};
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;

}
`