export interface WeatherDataType {
  cityName: string,
  temp: number,
  iconUrl: string,
  id: string
}

export interface HistorySliceState {
  data: WeatherDataType[],
  error: any | undefined,
  status: 'default'| 'loading' | 'success' | 'error'
}
