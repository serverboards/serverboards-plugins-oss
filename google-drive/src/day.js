const {React, utils, moment} = Serverboards
import Line from './line'

function DriveDay(props){
  return (
    <div>
      <div className="date">{utils.pretty_ago(props.date, moment(), "day")}</div>
      {props.entries.map( l => (
        <Line key={l.file} {...l}/>
      ))}
    </div>
  )
}

export default DriveDay
