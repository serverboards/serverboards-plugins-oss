const {React, moment} = Serverboards
const {Calendar} = Serverboards.Components

const TimelineLine = React.createClass({
  componentDidMount(){
    $(this.refs.el).popup()
  },
  render(){
    const {expiration, onClick, hasDivider, showCalendar, height} = this.props
    const service = expiration.service
    const date = moment(expiration.date)
    const expired = date.isBefore(moment())
    let style = {paddingLeft: 5, paddingBottom: "1rem", cursor: "pointer", maxHeight: height}
    if (hasDivider){
      style.borderTop="1px solid #eee"
      style.paddingTop="1rem"
    }
    let tooltip={}
    if (expiration.description){
      tooltip["data-content"]=expiration.description
      tooltip["data-position"]="bottom center"
    }
    return (
      <div className="row" ref="el"
        key={`${service.uuid}/${expiration.name}/${expiration.date}/${expiration.id}`}
        data-date={date.format("YYYY-MM-DD")}
        style={style}
        onClick={() => showCalendar(date.year(), date.month())}
        {...tooltip}
        >
          <div>
            <a onClick={(ev) => onClick() && ev.stopPropagation()}><b>{service.name}</b></a> - {date.fromNow()}
          </div>
          <div>{expiration.name}</div>
          <div className={expired ? "ui text red" : ""}>
            {expired ? "Expired" : "Expires" } on {date.format("MMM Do, YY")}
          </div>
      </div>
    )
  }
})

const Timeline = React.createClass({
  getInitialState(){
    let marks = {}
    const now = moment()
    marks[now.format("YYYY-MM-DD")]="bold text teal"

    for (let exp of this.props.expirations){
      marks[moment(exp.date).format("YYYY-MM-DD")]="background light yellow"
    }

    return {
      marks,
    }
  },
  gotoDate(date){
    date=date.format("YYYY-MM-DD")
    const vel = $(this.refs.list).find(`[data-date="${date}"]:first`)
    if (!vel)
      return
    const parent=vel.parent()
    const offset=vel.offset().top - parent.offset().top + parent.scrollTop()
    parent.scrollTop( offset )
  },
  showCalendar(year, month){
    this.setState({year, month})
  },
  render(){
    const {expirations, onShowService, height} = this.props
    const state = this.state
    return (
      <div style={{maxHeight: height}}>
        <Calendar
          marks={state.marks}
          navigation={true}
          onClick={this.gotoDate}
          month={this.state.month}
          year={this.state.year}
          />
        <div ref="list" className="ui vertically divided list" style={{overflow:"auto", maxHeight: height, height: "100%"}}>
          <React.Fragment>
            {expirations.map( (e, n) => (
              <TimelineLine
                key={`${e.service.uuid}/${e.check}`}
                expiration={e}
                onClick={() => onShowService(e.service.uuid)}
                hasDivider={n!=0}
                showCalendar={this.showCalendar}
                />
            ))}
            <div className="ui expand bottom right">
              <button className="ui button yellow with icon" onClick={this.handleReload}>
                <i className="ui refresh icon"/>
              </button>
            </div>
          </React.Fragment>
        </div>
      </div>
    )
  }
})

export default Timeline
