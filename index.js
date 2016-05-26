import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

// Material-UI
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const store = configureStore()

render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
