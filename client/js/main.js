import '../css/main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React from 'react'
import { render } from 'react-dom'
import Hello from './components/Hello'
import {store} from "./Redux/rootReduce"
import {Provider} from 'react-redux'

render(
  <Provider store={store} ><Hello /></Provider>, document.getElementById('root')
);
