import React from 'react'
import { nanoid } from 'nanoid'
import random from 'random'

const getBias = () => {
  const c = random.uniform()()
  if (c < 1 / 3) {
    return 'RIGHT'
  }
  if (c < 2 / 3) {
    return 'LEFT'
  }
  return 'UNBIASED'
}

/** localStorage
  userId: nanoid
  responses: Stringified JSON
  biased: enum("RIGHT", "LEFT", "UNBIASED")
  score: float
*/


const SurveyContext = React.createContext()

export const useSurvey = () => React.useContext(SurveyContext)

export class SurveyProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      responses: {},
      bias: '',
      score: 0,
      complete: false,
    }
  }

  componentDidMount() {
    if (localStorage.getItem('userId')) {
      this.setState({
        userId: localStorage.getItem('userId'),
        responses: JSON.parse(localStorage.getItem('responses')),
        bias: localStorage.getItem('bias'),
        score: parseFloat(localStorage.getItem('score')),
        complete: localStorage.getItem('complete') === 'true',
      })
    } else {
      this.reset()
    }
  }

  reset = () => {
    localStorage.clear()
    const userId = nanoid()
    const returning = false
    const responses = {}
    const bias = getBias()
    const score = random.int(30, 50)
    const complete = false
    this.setState({
      userId,
      returning,
      responses,
      bias,
      complete,
    })
    localStorage.setItem('userId', userId)
    localStorage.setItem('returning', returning)
    localStorage.setItem('responses', JSON.stringify(responses))
    localStorage.setItem('bias', bias)
    localStorage.setItem('score', score)
    localStorage.setItem('complete', complete)
    setTimeout(() => {
      this.setState({
        score,
      })
    }, 2000)
  }

  setResponse = (key, answer) => {
    const { responses } = this.state
    const newResponses = { ...responses, [key]: answer }
    this.setState({
      responses: newResponses,
    })

    localStorage.setItem('responses', JSON.stringify(newResponses))
  }

  completeSurvey = () => {
    this.setState({
      complete: true,
    })
    localStorage.setItem('complete', true)
  }

  render() {
    const { children } = this.props
    return (
      <SurveyContext.Provider value={{
        ...this.state,
        reset: this.reset,
        setResponse: this.setResponse,
        completeSurvey: this.completeSurvey,
      }}
      >
        {children}
      </SurveyContext.Provider>
    )
  }
}
