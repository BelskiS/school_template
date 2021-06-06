// eslint-disable-next-line import/prefer-default-export
import { renderWeatherInfo } from '../view/info.view'

// eslint-disable-next-line import/prefer-default-export
export const getWeatherInfo = () => {
  const inputCityValue = document.querySelector('.input_city').value
  const inputCountryValue = document.querySelector('.input_country').value
  const errorForm = document.querySelector('.error_form')

  if (!inputCityValue) {
    errorForm.classList.remove('hidden')
  } else {
    errorForm.classList.add('hidden')

    fetch(`http://api.weatherstack.com/current?access_key=ad957082b892c13a0f73847cfc4c4826&query=${inputCityValue},${inputCountryValue}`)
      .then((response) => response.json())
      .then((data) => renderWeatherInfo(data))
      .catch(() => {
        console.log('Error opps')
      })
  }
}
