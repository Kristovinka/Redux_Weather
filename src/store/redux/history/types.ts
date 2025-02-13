export interface HistorySliceState {
  data: WeatherDataType[],
  error: any | undefined,
  status: 'default'| 'loading' | 'success' | 'error'
}
export interface WeatherDataType {
  city: string,
  temp: string,
  iconUrl: string
}
