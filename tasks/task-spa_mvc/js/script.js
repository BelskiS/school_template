const wrapper = document.querySelector('.wrapper')
const error = document.createElement('p')

function renderForm() {
  const form = document.createElement('form')
  const inputCity = document.createElement('input')
  const inputCountry = document.createElement('input')
  const inputSubmit = document.createElement('input')

  inputCity.setAttribute('type', 'text')
  inputCity.setAttribute('placeholder', 'city')
  inputCity.setAttribute('required', 'required')
  inputCity.classList.add('input_city')

  inputCountry.setAttribute('type', 'text')
  inputCountry.setAttribute('placeholder', 'country')
  inputCountry.setAttribute('required', 'required')
  inputCountry.classList.add('input_country')

  inputSubmit.setAttribute('type', 'submit')
  inputSubmit.setAttribute('value', 'Submit')
  inputSubmit.classList.add('input_submit')

  error.classList.add('error_form', 'hidden')
  error.innerHTML = 'Field city is required'

  wrapper.append(form)
  form.append(inputCity, inputCountry, inputSubmit, error)
}

renderForm()

const submit = document.querySelector('.input_submit')

const renderWeatherInfo = (data) => {
  const divWeatherBlock = document.createElement('div')

  const divWeatherInfo = document.createElement('div')
  const divWeatherIco = document.createElement('div')
  const divWeatherTemperature = document.createElement('div')
  const divWeatherLocation = document.createElement('div')

  const divWeatherParameters = document.createElement('div')
  const divWeatherTime = document.createElement('div')
  const divWeatherFeelLike = document.createElement('div')
  const divWeatherTodayIs = document.createElement('div')
  const divWeatherWind = document.createElement('div')
  const divWeatherSpeed = document.createElement('div')
  const divWeatherPressure = document.createElement('div')

  divWeatherBlock.classList.add('weather_wrapper')

  divWeatherInfo.classList.add('weather_info')
  divWeatherIco.classList.add('weather_ico')
  divWeatherTemperature.classList.add('weather_temperature')
  divWeatherLocation.classList.add('weather_location')

  divWeatherParameters.classList.add('weather_parameters')

  divWeatherIco.style.backgroundImage = `url(${data.current.weather_icons})`
  divWeatherTemperature.innerHTML = `${data.current.temperature}°C`
  divWeatherLocation.innerHTML = `${data.location.name}, ${data.location.country}`

  divWeatherTime.innerHTML = `Time: ${data.current.observation_time}`
  divWeatherFeelLike.innerHTML = `Feels like: ${data.current.feelslike}°C`
  divWeatherTodayIs.innerHTML = `Today is ${data.current.weather_descriptions}`
  divWeatherWind.innerHTML = `Wind: ${data.current.wind_dir}`
  divWeatherSpeed.innerHTML = `Speed: ${data.current.wind_speed} km/h`
  divWeatherPressure.innerHTML = `Pressure: ${data.current.wind_degree} MB`

  wrapper.append(divWeatherBlock)
  divWeatherBlock.append(divWeatherInfo, divWeatherParameters)

  divWeatherInfo.append(divWeatherIco, divWeatherTemperature, divWeatherLocation)

  divWeatherParameters.append(divWeatherTime, divWeatherFeelLike)
  divWeatherParameters.append(divWeatherTodayIs, divWeatherWind)
  divWeatherParameters.append(divWeatherSpeed, divWeatherPressure)
}

const getWeatherInfo = () => {
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

submit.addEventListener('click', (e) => {
  e.preventDefault()

  getWeatherInfo()
})
