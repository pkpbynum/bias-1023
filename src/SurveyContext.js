import React from 'react'
import nanoId from 'nanoid'
import random from 'random'


/** localStorage
  userId: nanoId
  responses: Stringified JSON
  biased: boolean
  score: float
*/


const SurveyContext = React.createContext()

export const useSurvey = React.useContext(SurveyContext)

export class SurveyProvider extends React.Component {
  componentDidMount() {
    if (localStorage.getItem('userId')) {
      this.setState({
        userId: localStorage.getItem('userId'),
        responses: localStorage.getItem('responses'),
        biased: localStorage.getItem('biased'),
        score: localStorage.getItem('score'),
      })
    } else {
      this.reset()
    }
  }

  reset = () => {
    localStorage.clear()
    this.setState({
      userId: nanoId(),
      returning: false,
      responses: [],
      biased: random.boolean(),
      score: random.float(30, 50),
    })
  }

  render() {
    const { children } = this.props
    return (
      <SurveyContext.Provider value={{ ...this.state, reset: this.reset }}>
        {children}
      </SurveyContext.Provider>
    )
  }
}
