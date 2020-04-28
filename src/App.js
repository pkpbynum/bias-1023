import React from 'react'
import styled from 'styled-components'
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import Survey from './Survey'

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <Router>
      <CssBaseline />
      <Switch>
        <Wrapper>
          <Route path="/">
            <Survey />
          </Route>
        </Wrapper>
      </Switch>
    </Router>
  )
}

export default App
