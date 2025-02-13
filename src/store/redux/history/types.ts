export interface HistorySliceState {
  data: string[],
  error: any | undefined,
  status: 'default'| 'loading' | 'success' | 'error'
}
