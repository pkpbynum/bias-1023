import React from 'react'
import {
  Container, Button, Fade, Modal, Backdrop, Card, Typography, Link,
} from '@material-ui/core'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import { useSurvey } from '../SurveyContext'

const Survey = () => {
  const {
    responses, complete, completeSurvey, score, reset,
  } = useSurvey()

  const resArray = Object.values(responses)

  return (
    <Container style={{ paddingLeft: 50, paddingBottom: 100 }}>
      <Section1 />
      <Section2 />
      <Container style={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          color="primary"
          disabled={resArray.length !== 9}
          onClick={completeSurvey}
        >
          COMPLETE
        </Button>
      </Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={complete}
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={complete}>
          <Card style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            width: 300,
            height: 400,
          }}
          >
            <Typography variant="h4" style={{ textAlign: 'center', marginBottom: 20 }}>
              {`Your Score: ${score}/100`}
            </Typography>
            <Typography variant="body2" style={{ textAlign: 'center' }}>
              Thanks for taking the survey! We hope you liked it.
              The personality questions came from
              {' '}
              <Link href="https://www.shanesnow.com/take-the-intellectual-humility-assessment">Shane Snow</Link>
              , and the news questions came from
              {' '}
              <Link href="http://factitious-pandemic.augamestudio.com/#/">Factitious.</Link>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={reset}
            >
              Take it again?!
            </Button>
          </Card>
        </Fade>
      </Modal>
    </Container>
  )
}

export default Survey
