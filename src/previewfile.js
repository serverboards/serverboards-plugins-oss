const React = Serverboards.React

const preseticons={
  "document": "file text",
  "text": "file text",
  "application/vnd.oasis.opendocument.spreadsheet" : "file excel outline",
  "image": "file image"
}
const icon_style={
  verticalAlign: "top"
}
function PreviewFile(props){
  let type=props.data.slice(5, props.data.indexOf(';'))
  console.log(props.data.slice(0, 20), type)
  switch(type){
    case "image/gif":
    case "image/svg":
    case "image/png":
    case "image/jpg":
    case "image/jpeg":
      return (
        <img src={props.data} className="ui top aligned avatar image"/>
      )
  }
  if (preseticons[type])
    return (
      <i style={icon_style} className={`icon big black ${preseticons[type]}`}/>
    )
  type=type.slice( type.indexOf('/') )
  if (preseticons[type])
    return (
      <i style={icon_style} className={`icon big black ${preseticons[type]}`}/>
    )
  return (
    <i style={icon_style} className={`icon big black file`}/>
  )
}

export default PreviewFile
