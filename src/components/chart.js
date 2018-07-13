import React from 'react'
import { 
  Sparklines, 
  SparklinesLine,
  SparklinesReferenceLine } from 'react-sparklines'

export default ({data, color, unit}) => {
  
  const sum = (sum, val) => sum + val 
  const avg = d => d.reduce(sum) / d.length

  return(
    <div>
      <Sparklines
        height={ 120 }
        width={ 180 }
        data={ data }>
        <SparklinesLine color={ color }/>
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <p>{ avg(data).toFixed(1) } { unit }</p>
    </div>
  )
}
