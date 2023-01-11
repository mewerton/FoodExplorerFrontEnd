import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 105px auto;
grid-template-areas: 
"header"
"content";

.Cards{
    display: flex;
    justify-content: center;
}
`
export const Links = styled.ul`

list-style: none;

display: flex;
justify-content: center;

>li{
    margin-top: 0px;
}
`

export const Main = styled.main`
   
   background: ${({theme}) => theme.COLORS.BACKGROUND_900};

   .Cards:first-child{
        margin-top: 62px;
    } 
    padding-bottom: 98px;

    @media(max-width:440px){
        .Cards:first-child{
        margin-top: 12px;
        
    } 
    padding-bottom: 28px;
    } 

`