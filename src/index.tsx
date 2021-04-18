import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalStyles } from 'styles'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles'
import { Content, Grid, Title, Card, NewButton, Numbers } from 'components'
import { Provider } from 'react-redux'
import { configureStore } from 'core'

const store = configureStore()
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyles />
      <Content>
        <Title>Sudoku</Title>
        <Card>
          <NewButton />
          <Grid></Grid>
          <Numbers />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
