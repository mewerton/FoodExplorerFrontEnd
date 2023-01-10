import styled from "styled-components";

export const Container = styled.div`

 display: flex;
 justify-content: center;

.text{

    margin-top: 164px;
    width: 1120px;
    height: 260px;
   
    background: ${({ theme }) => theme.COLORS.BACKGROUND_LINEAR};

    border-radius: 8px;

}

h1{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 140%;

    margin-bottom: 15px;

}
span{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;

}

`

export const ImgTextBanner = styled.div`

      
    z-index: 2;
    left: -68.66px;
    margin-top: -147px;
    margin-left: -56px;
    
    display: flex;

    >div{
        margin-top: 225px;
        margin-left: 30px;
    }

    
`