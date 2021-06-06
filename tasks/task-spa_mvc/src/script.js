/* eslint-disable import/prefer-default-export */
import { renderApp } from './view/app.view'
/* eslint-disable import/prefer-default-export */
import { initController } from './controller/app.controller'
import './main.css'

// eslint-disable-next-line no-unused-vars
function initApp() {
  renderApp()
  initController()
}

initApp()
