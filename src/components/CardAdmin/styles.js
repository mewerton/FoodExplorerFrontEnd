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
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_LINEAR4};
    

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
           
            img{
                max-width: 200px;
                                
           }
           button{
            background: transparent;
           }
        }

    .image:hover{
        transform: scale(1.1); 
    }
    .request{
        display: flex;
        flex-direction: row;
        justify-content: center;
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
           
        >button{
            background: transparent;
            border: 0;
        }
        >button:first-child{
            margin-top: -10px;
        }
        >button:active{
                    
        transform: scale(0.90);
        transition: 0.01s;
        }
    
    }

    .name button{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
        margin-top: 16px;
        cursor: pointer;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
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
export const ButtonDelete = styled.div`
    width: 92px;

    display: flex;
`
export const ButtonEdit = styled.div`
    width: 92px;

    display: flex;
`
