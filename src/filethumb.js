const React = Serverboards.React
import PreviewFile from './previewfile'

function file_size(size){
  if (size<1024)
    return `${size} Bytes`
  if (size<1024*1024)
    return `${(size/1024).toFixed(2)} KB`
  if (size<1024*1024*1024)
    return `${(size/(1024*1024)).toFixed(2)} MB`
}

function FileThumb(props){
  return (
    <div>
      <PreviewFile {...props}/>
      <div style={{display: "inline-block"}}>
        <div>{props.name}</div>
        <div className="ui meta">{file_size(props.size) || `~ ${file_size(props.data.length*3/4)}`}</div>
      </div>
    </div>
  )
}

export default FileThumb
