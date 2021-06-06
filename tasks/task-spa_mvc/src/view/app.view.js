// eslint-disable-next-line import/prefer-default-export
export function renderApp() {
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
}
