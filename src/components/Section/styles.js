import styled from "styled-components"

export const Container = styled.section`


width: 1120px;

.section{
    padding-bottom: 0px;
    margin-bottom: 0px;

    color: ${({theme}) => theme.COLORS.GREY_100};
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 140%;
   
}

 .carousel{
    overflow-x: auto;
    scroll-behavior: smooth;
    display: flex;
    flex-direction: row;

} 

.carousel::-webkit-scrollbar{
    display: none;
}


.buttons{
    width: 1120px;
    
    display: flex;
    justify-content: space-between;
    
    position: absolute;

    margin-top: 200px;


     
    
}


`