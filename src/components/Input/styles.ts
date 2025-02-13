import styled from "@emotion/styled";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`

export const Label = styled.label`
  font-size: 16px;
  color: #6f6f6f;
`

export const InputElement = styled.input`
  width: 550px;
  height: 50px;
  padding: 12px;
  outline: none;
  border: 1px solid white;
  border-radius: 40px;
  font-size: 16px;
  background-color: #a19f9f36;

  &::placeholder {
  color: #ffffff;
}
`

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px;
  gap: 50px;
  /* background-color: #10265561; */
  border-radius: 20px;
  height: 18px;
  color: #a02e2e;
  font-size: 24px;
`
