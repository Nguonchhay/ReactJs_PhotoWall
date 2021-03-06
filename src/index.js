import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './Components/App'
import './styles/stylesheet.css'
import rootReducer from './redux/reducer'

const store = createStore(rootReducer)

ReactDom.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'))