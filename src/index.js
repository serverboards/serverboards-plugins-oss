const React = Serverboards.React
import LogMap from './logmap'

function main(el, config){
  console.log(el, config)
  Serverboards.ReactDOM.render(<LogMap/>, el)

  return function(){
    Serverboards.ReactDOM.unmountComponentAtNode(el)
  }
}

Serverboards.add_widget("serverboards.logmap/widget", main)
