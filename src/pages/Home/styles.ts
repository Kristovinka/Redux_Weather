import styled from "@emotion/styled"

export const HomePageWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 70px;
`

export const SearchContainer = styled.form`
  display: flex;
  gap: 20px;
  width: 710px;
  height: 50px;
  height: fit-content;
  padding: 5px;
`

export const HomeContainer = styled.p`
  font-weight: bold;
  color: #0e2936;
`
export const ResultContainer = styled.div`
  border-radius: 10px;
  width: 690px;
  height: 180px;
  font-size: 24px;
  font-weight: bold;
  color: rgb(255, 255, 255);
  background-color: #10265561;
`
export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 690px;
  height: 180px;
  font-size: 30px;
  font-weight: bold;
  color: rgb(192, 51, 51);
  background-color: #10265561;
`
export const InfoCard = styled.div`
  font-size: 36px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 280px;
  padding: 20px;
`
export const TextCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Paragraph = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
`
