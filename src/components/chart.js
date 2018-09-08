import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
  const chartSize = {
    width:  '220px',
    height: '160px'
  }

  function average(data) {
    return _.round(_.sum(data)/data.length);
  }

  return (
    <div>
      <Sparklines style={chartSize} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  )
}
