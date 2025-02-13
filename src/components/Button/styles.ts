import styled from '@emotion/styled';

interface MainButtonStyledProps {
  disabled: boolean;
  $isRed: boolean;
}

export const MainButton = styled.button<MainButtonStyledProps>`
  width: 150px;
  height: 48px;
  outline: none;
  border: none;
  background:${({ disabled, $isRed }) => disabled ? '#bebec7' : $isRed ? '#f02e0c' : '#3678B4'};
  border-radius: 50px;
  color: white;
  font-family: Lato, Geneva, Tahoma, sans - serif;
  font-size: 16px;
  cursor: pointer;
`


