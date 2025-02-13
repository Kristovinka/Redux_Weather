import { useAppSelector } from "store/hooks"
import { HistorysPageWrapper, HistoryCard, Paragraph } from "./styles"
import { historySelectors} from "store/redux/history/historySlice"
import { v4 } from "uuid"

function History() {
 const historyData = useAppSelector(historySelectors.weatherData)

  const historys = historyData.map((history) => {
    return (
      <HistoryCard key={v4()}>
        <Paragraph>historyData: {history}</Paragraph>
      </HistoryCard>
  )
  })

  return (
    <HistorysPageWrapper>
      {historys}
    </HistorysPageWrapper>
  )
}

export default History
