import React from 'react'
import {
  Typography, Box, Container,
} from '@material-ui/core'
import RadioGroup from './RadioGroup'

const questions = [{
  key: 'otherWays',
  question: `"I respect that there are ways of making important decisions that are different from the way I make decisions.
This question is required."`,
},
{
  key: 'betterIdeas',
  question: '"My ideas are usually better than other people’s ideas."',
},
{
  key: 'soundPoints',
  question: '"Even when I disagree with others, I can recognize that they have sound points."',
},
{
  key: 'revisitBeliefs',
  question: '"I am open to revising my important beliefs in the face of new information."',
},
{
  key: 'personalExpertise',
  question: '"I’d rather rely on my own knowledge about most topics than turn to others for expertise."',
}]

const Section1 = () => (
  <Box>
    <Typography variant="h4">Personality Questions</Typography>
    <Typography variant="body2">Please rate agreement with the following statements on a scale from 1-5.</Typography>
    <Container style={{ paddingTop: 20 }}>
      {questions.map(q => <RadioGroup {...q} k={q.key} />)}
    </Container>
  </Box>
)

export default Section1
