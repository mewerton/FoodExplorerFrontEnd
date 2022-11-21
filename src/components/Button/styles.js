import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.RED_500};
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 32px;
    gap: 8px;

    border-radius: 5px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
        
    &:disabled{
        opacity: 0.5;
        cursor: auto;
    }

`