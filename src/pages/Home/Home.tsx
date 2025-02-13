import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

import {
  HomePageWrapper,
  SearchContainer,
  HomeContainer,
  ResultContainer,
  InfoCard,
  Paragraph,
} from "./styles"
import { cityFormNames } from "./types"
import { v4 } from "uuid"
import { useAppDispatch, useAppSelector } from "store/hooks"
import { useFormik } from "formik"
import * as Yup from "yup"
import {
  historyActions,
  historySelectors,
} from "store/redux/history/historySlice"
import Spinner from "components/Spinner/Spinner"

function Home() {

  const schema = Yup.object().shape({
    cityName: Yup.string()
      .required("Field city Name is required")
      .max(20, "Max 20 symbols")
      .typeError("cityName must be string"),
  })

  const dispatch = useAppDispatch()
  
   const { data, error, status } = useAppSelector(historySelectors.weatherData)

   const results = data.map((result) = {
   return (<InfoCard key={v4()}>{result}</InfoCard>)
 })
  

  const formik = useFormik({
    initialValues: {
      cityName: "",
    } as cityFormNames,
    validationSchema: schema,
    validateOnChange: false,

    onSubmit: (values) => {
      dispatch(historyActions.getWeather(values.cityName as string));
    },
  })

  return (
    <HomePageWrapper>
      <HomeContainer>
        <SearchContainer onSubmit={formik.handleSubmit}>
          <Input
            name="cityName"
            placeholder="Enter city name"
            value={formik.values.cityName}
            onChange={formik.handleChange}
            error={formik.errors.cityName}
          />
          <Button name="Search" type="submit" />
        </SearchContainer>
        {status === 'loading' && <Spinner />} 
        {status === 'error' && <ResultContainer>{error}</ResultContainer>}
        <InfoCard>
          <Paragraph>Temperature: {results}°C</Paragraph>
          <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather icon" />
        </InfoCard> 
        {status === 'success' && <ResultContainer>{results}</ResultContainer> }
      </HomeContainer>
    </HomePageWrapper>
  )
}

export default Home
