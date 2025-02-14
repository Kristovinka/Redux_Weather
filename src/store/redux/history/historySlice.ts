import axios from "axios"

import { createAppSlice } from "store/createAppSlice"
import { HistorySliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"

const historyInitialState: HistorySliceState = {
  data: [],
  error: undefined,
  status: "default",
}

const APP_ID = "908ee9af992fd896607b19158720a1d8&units=metric"

export const historySlice = createAppSlice({
  name: "WHEATHER",
  initialState: historyInitialState,

  reducers: create => ({
    getWeather: create.asyncThunk(
      async (cityName: string, thunkApi) => {
        try {
          const result = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APP_ID}`,
          )

          return result.data
        } catch (error: any) {
          return thunkApi.rejectWithValue(error.message)
        }
      },
      {
        pending: (state: HistorySliceState) => {
          state.status = "loading"
          state.error = undefined
        },
        fulfilled: (state: HistorySliceState, action: PayloadAction<any>) => {
          state.data = [
            ...state.data,
            {
              cityName: action.payload.name,
              temp: parseFloat(action.payload.main.temp.toFixed()),
              iconUrl: `http://openweathermap.org/img/w/${action.payload.weather[0].icon}.png`,
              id: v4(),
            },
          ]
          state.status = "success"
        },
        rejected: (state: HistorySliceState, action: any) => {
          state.error = action.payload
          state.status = "error"
        },
      },
    ),

    deleteInfo: create.reducer((state: HistorySliceState) => {
      state.data = []
    }),

    deleteItem: create.reducer((state: HistorySliceState, action: PayloadAction<{ id: string }>) => {
      state.data = state.data.filter(item => item.id !== action.payload.id);
    }),
    
  }),
  selectors: {
    weatherData: (state: HistorySliceState) => state,
  },
})

export const historyActions = historySlice.actions
export const historySelectors = historySlice.selectors
