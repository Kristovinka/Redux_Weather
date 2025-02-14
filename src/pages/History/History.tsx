import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  HistorysPageWrapper,
  HistoryCard,
  Paragraph,
  TextCard,
  ResultContainer,
  Textdelete,
} from "./styles"
import {
  historyActions,
  historySelectors,
} from "store/redux/history/historySlice"
import Button from "components/Button/Button"
import Spinner from "components/Spinner/Spinner"

function History() {
  const dispatch = useAppDispatch()

  const { data, status } = useAppSelector(historySelectors.weatherData)

  const historys = data.map(result => {
    return (
      <ResultContainer>
        <HistoryCard key={result.id}>
          <Textdelete>
            <TextCard>
              {result.temp}°<Paragraph>{result.cityName}</Paragraph>
            </TextCard>
            <img width={150} src={result.iconUrl} alt="weather icon" />
            <Button name="Delete" onClick={() => handleDelete(result.id)} />
          </Textdelete>
        </HistoryCard>
      </ResultContainer>
    )
  })

  const deleteAll = () => {
    dispatch(historyActions.deleteInfo())
  }

  const handleDelete = (id: string) => {
    dispatch(historyActions.deleteItem({ id }))
  }

  return (
    <HistorysPageWrapper>
      {status === "loading" && <Spinner />}
      {historys}
      {historys.length !== 0 && (
        <Button
          name="Delete all cards"
          type="submit"
          onClick={deleteAll}
        ></Button>
      )}
    </HistorysPageWrapper>
  )
}

export default History
