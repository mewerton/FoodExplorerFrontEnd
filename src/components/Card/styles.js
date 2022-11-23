import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin-right: 27px;
    margin-top: 39.5px;

    width: 300px;
    height: 512px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_300};

    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    

    .item{
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .fav{
        display: flex;
        justify-content: flex-end;
        margin-top: 21px;
        margin-right: 19px;
        margin-bottom: 17px;
        cursor: pointer;
    }

    .image{
            cursor: pointer;
            transition: 0.2s; 
        }

    .image:hover{
        transform: scale(1.1); 
    }
    .request{
        display: flex;
        flex-direction: row;
        align-items: center;
       
        gap: 16px;

        width: 208px;
        height: 48px;

        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
        

        width: 208px;
        height: 48px;

        >svg{
            cursor: pointer;
            font-size: 18px;
        }
            
    
    }

    .name{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        margin-top: 16px;
        cursor: pointer;
    }
    .info{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;

        margin-top: 16px;
    }

    .price{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 160%;

        margin-bottom: 17px;
        margin-top: 16px;

        color: ${({theme}) => theme.COLORS.BLUE_100};

        >span:first-child{
            margin-right: 10px;
        }

      
    }
`
export const ButtonAdd = styled.div`
    width: 92px;
`