const {React} = Serverboards

const mimetypes_to_icon={
  "application/zip": "compress",
  "application/vnd.google-apps.document": "file word outline",
  "application/vnd.google-apps.presentation" : "file powerpoint outline",
  "application/vnd.google-apps.folder": "folder",
  "image" : "file image outline"
}

function get_icon_for(props){
  console.log(props.type)
  const maintype = props.type.split("/")[0]
  return mimetypes_to_icon[props.type] || mimetypes_to_icon[maintype] || "file green"
}

function DriveLine(props){
  return (
    <div className="entry">
      <div className="icon">
        <a href={props.viewLink} target="_blank">
          <i className={`ui icon ${get_icon_for(props)} big`}/>
        </a>
      </div>
      <div className="data">
        <b>{props.author} </b>
        {props.what}
        <b> {props.file} </b>
        {props.to ? (
          <span>
            {props.what=="removed" ? "from" : "at"}
            <a href={props.to_link} target="_blank"><b> {props.to} </b></a>
          </span>
        ) : null}
      </div>
      <div className="time">
        {props.downloadLink ? (
          <a href={props.downloadLink} target="_blank">
            <i className="ui icon download"/>
          </a>
        ) : null }
      </div>
      <div className="time">
        {props.time}
      </div>
    </div>
  )
}

export default DriveLine
