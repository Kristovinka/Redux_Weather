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
  font-size: 24px;
  font-weight: bold;
  color: #0e2936;
`
export const ResultContainer= styled.div`
  font-size: 24px;
  font-weight: bold;
  color: rgb(15, 15, 75);
`

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 280px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
`
export const Paragraph = styled.p`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 16px;
`

