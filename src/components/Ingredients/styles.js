import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  
  > img {
    max-width: 60px;
    max-height: 60px;

    width: auto;
    height: auto;
  }

  .ingredient-name {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`