import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import Survey from './Survey'
import NavBar from './NavBar'
import theme from './theme'
import { useSurvey } from './SurveyContext'

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const getTheme = bias => {
  switch (bias) {
    case 'UNBIASED':
      return theme.unbiased
    case 'LEFT':
      return theme.left
    default:
      return theme.right
  }
}

const App = () => {
  const { bias } = useSurvey()

  return (
    <Router>
      <ThemeProvider theme={getTheme(bias)}>
        <CssBaseline />
        <Switch>
          <Wrapper>
            <NavBar />
            <Route path="/">
              <Survey />
            </Route>
          </Wrapper>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}
export default App
