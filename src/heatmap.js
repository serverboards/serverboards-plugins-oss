let React = Serverboards.React

const Heatmap=React.createClass({
  propTypes:{
    data: React.PropTypes.object.isRequired,
    xaxis: React.PropTypes.array.isRequired,
    yaxis: React.PropTypes.array.isRequired,
    xshow: React.PropTypes.func,
    yshow: React.PropTypes.func,
  },
  render(){
    const props=this.props
    const maxval=Math.max.apply(null, Object.values(props.data))
    let keys=Object.keys(props.data)
    keys.sort()
    let data=props.data
    console.log("Max val is %o", maxval)
    const scale_color=4.0/Math.log(maxval)
    function color(v=0){
      return Math.round(scale_color*Math.log(v))
    }
    const xshow=props.xshow || ((d) => d)
    const yshow=props.yshow || ((d) => d)

    return (
      <div className="ui heatmap">
        <table>
          <tbody>
            <tr>
              <td/>
              {props.xaxis.map( (x, i) => (
                <td className="column header" key={x}>{xshow(x, i)}</td>
              ))}
            </tr>
            {props.yaxis.map( (y, i) => (
              <tr key={y}>
                <td className="row header">{yshow(y, i)}</td>
                {props.xaxis.map( (x) => [x,y] ).map( (k) =>
                  <td key={k} className={`cell color${color(data[k])}`} title={`${k[0]} ${k[1]}:\n ${data[k] || 0}`}/>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
})


export default Heatmap
