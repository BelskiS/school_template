// eslint-disable-next-line import/prefer-default-export
export function renderWeatherInfo(data) {
  const wrapper = document.querySelector('.wrapper')

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
