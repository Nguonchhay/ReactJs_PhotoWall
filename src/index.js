import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import Main from './Components/Main'
import './styles/stylesheet.css'

ReactDom.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'))