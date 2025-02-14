import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button"

import {
  HomePageWrapper,
  SearchContainer,
  HomeContainer,
  ResultContainer,
  TextCard,
  InfoCard,
  ErrorContainer,
  Paragraph,
} from "./styles"
import { cityFormNames } from "./types"
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

  const result = data[data.length - 1]

  const formik = useFormik({
    initialValues: {
      cityName: "",
      temp: undefined,
      iconUrl: "",
    } as cityFormNames,
    validationSchema: schema,
    validateOnChange: false,

    onSubmit: values => {
      dispatch(historyActions.getWeather(values.cityName))
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
        {status === "loading" && <Spinner />}
        {status === "error" && <ErrorContainer>{error}</ErrorContainer>}
        {status === "success" && (
          <ResultContainer>
            <InfoCard key={result.id}>
              <TextCard>
                {result.temp}°<Paragraph>{result.cityName}</Paragraph>
              </TextCard>
              <img width={150} src={result.iconUrl} alt="weather icon" />
            </InfoCard>
          </ResultContainer>
        )}
      </HomeContainer>
    </HomePageWrapper>
  )
}

export default Home
