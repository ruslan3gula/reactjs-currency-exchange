import styled from "styled-components";

export const CurrencyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const CurrencyDisplay = styled.div`
  padding: 20px 0px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const CurrencyInput = styled.div`
  display: flex;
`;

export const Currency1 = styled.input`
  color: #70757a;
  border: 1px solid #dadce0;
  border-radius: 6px;
  height: 36px;
`;

export const CurrencyPlainText = styled.p`
  color: #70757a;
  font-family: "Montserrat", sans-serif;
  font-size: 30px;
  font-weight: 400;
`;

export const CurrencyValue = styled(CurrencyPlainText)`
  color: #202124;
  font-size: 100px;
  font-weight: 800;
`;
