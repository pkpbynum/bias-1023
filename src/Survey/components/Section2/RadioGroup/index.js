import React from 'react'
import {
  Container, Radio, Typography, FormControlLabel,
} from '@material-ui/core'
import { useSurvey } from '../../../../SurveyContext'

const RadioGroup = ({ k, title, article }) => {
  const { responses, setResponse } = useSurvey()

  return (
    <Container style={{ marginBottom: 20 }}>
      <Typography variant="h6">{title}</Typography>
      <Container>
        {article.map(p => <Typography variant="body2" key={p.slice(0, 10)} style={{ marginBottom: 5, width: '70%' }}>{p}</Typography>)}
      </Container>
      <Container>
        {!responses[k] ? (
          <>
            <FormControlLabel
              style={{ marginRight: 0 }}
              label="1"
              labelPlacement="start"
              control={<Radio value="1" checked={false} onChange={e => setResponse(k, e.target.value)} />}
            />
            <Radio value="2" checked={false} onChange={e => setResponse(k, e.target.value)} />
            <Radio value="3" checked={false} onChange={e => setResponse(k, e.target.value)} />
            <Radio value="4" checked={false} onChange={e => setResponse(k, e.target.value)} />
            <FormControlLabel
              style={{ marginLeft: 0 }}
              label="5"
              labelPlacement="end"
              control={<Radio value="5" checked={false} onChange={e => setResponse(k, e.target.value)} />}
            />
          </>
        ) : (
          <>
            <FormControlLabel
              style={{ marginRight: 0 }}
              label="1"
              labelPlacement="start"
              control={<Radio value="1" checked={responses[k] === '1'} onChange={e => setResponse(k, e.target.value)} />}
            />
            <Radio value="2" checked={responses[k] === '2'} onChange={e => setResponse(k, e.target.value)} />
            <Radio value="3" checked={responses[k] === '3'} onChange={e => setResponse(k, e.target.value)} />
            <Radio value="4" checked={responses[k] === '4'} onChange={e => setResponse(k, e.target.value)} />
            <FormControlLabel
              style={{ marginLeft: 0 }}
              label="5"
              labelPlacement="end"
              control={<Radio value="5" checked={responses[k] === '5'} onChange={e => setResponse(k, e.target.value)} />}
            />
          </>
        ) }
      </Container>
    </Container>
  )
}

export default RadioGroup
