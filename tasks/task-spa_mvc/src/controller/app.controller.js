// eslint-disable-next-line import/prefer-default-export
import { getWeatherInfo } from '../model/app.model'
// eslint-disable-next-line import/prefer-default-export
export function initController() {
  const submit = document.querySelector('.input_submit')
  submit.addEventListener('click', (e) => {
    e.preventDefault()

    getWeatherInfo()
  })
}
