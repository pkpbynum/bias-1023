import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import { Logo, Container } from './styles'
import { useSurvey } from '../SurveyContext'
import fox from '../assets/foxlogo.png'
import msnbc from '../assets/msnbclogo.png'

const NavBar = () => {
  const { bias } = useSurvey()

  return (
    <>
      <AppBar position="fixed">
        <Container>
          {bias === 'UNBIASED'
            ? <Typography style={{ marginTop: 10, marginBottom: 10 }} variant="h4">Survey</Typography> : <Logo src={bias === 'LEFT' ? msnbc : fox} />}
        </Container>
      </AppBar>
      <div style={{ height: 100 }} />
    </>
  )
}

export default NavBar
