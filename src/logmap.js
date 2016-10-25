const {React, rpc, moment, store} = Serverboards
import Heatmap from './heatmap'

const LogMap=React.createClass({
  getInitialState(){
    //var month_ago=d.setMonth(d.getMonth() - 1)
    var month_ago=moment().subtract(1,"months")
    const daterange=store.getState().serverboard.daterange
    return {
      data: {},
      maxv: 0,
      start: daterange.start,
      end: daterange.end
    }
  },
  load_more({start}){
    let self=this
    rpc.call("logs.history",{start, count: 10000}).then( self.update_heatmap )
  },
  update_heatmap({lines}){
    let eof
    if (lines.length > 0 ){
      const last=lines[lines.length-1]
      if (moment(last.timestamp)>this.state.start){
        this.load_more({start: last.id})
        eof=false
      }
      else{
        // Get only < dates
        lines=lines.filter( (l) => (moment(last.timestamp))<this.state.start )
        // set end
        eof=true
      }
    } else {
      eof=true
    }

    let {maxv, data} = this.state
    for(let l of lines){
      const ts=[l.timestamp.slice(0,10), l.timestamp.slice(11,13)+":00"]
      const v=(data[ts] || 0)+1
      data[ts]=v
      if (v>ts)
        maxv=v
    }
    this.setState({maxv,data})
    if (eof)
      console.log(data)
  },
  reload_heatmap(){
    console.log("Reload heatmap: %o - %o", this.state.start, this.state.end)
    let self=this
    this.setState({data: {}, maxv: 0})
    rpc.call("logs.history", {count: 10000}).then( self.update_heatmap )
  },
  componentDidMount(){
    let self=this
    store.on("serverboard.daterange", function({start, end}){
      if (!start.isSame(self.state.start) || !start.isSame(self.state.end)){
        self.setState({start, end})
        self.reload_heatmap()
      }
    })
    this.reload_heatmap()
  },
  xaxis: function(){
    let i
    let ret=[]

    moment.range(this.state.start, this.state.end).by('days', function(m){
      ret.push(m.format("YYYY-MM-DD"))
    })

    return ret
  },
  yaxis: function(){
    let i
    let ret=[]
    for(i=8;i<21;i++)
      ret.push( ("0"+i).slice(-2)+":00" )
    return ret
  },
  render(){
    return (
      <div>
        <Heatmap
          xaxis={this.xaxis()}
          xshow={(d, i) => (i%7)==0 ? d : ""}
          yaxis={this.yaxis()}
          yshow={(d, i) => (i%3)==0 ? d : ""}
          data={this.state.data}/>
      </div>
    )
  }
})

export default LogMap
