const {React, moment} = Serverboards
const {Calendar} = Serverboards.Components

const TimelineLine = React.createClass({
  componentDidMount(){
    $(this.refs.el).popup()
  },
  render(){
    const {expiration, service, onClick, hasDivider, showCalendar} = this.props
    const date = moment(expiration.date)
    const expired = date.isBefore(moment())
    let style = {paddingLeft: 5, paddingBottom: "1rem", cursor: "pointer"}
    if (hasDivider){
      style.borderTop="1px solid #eee"
      style.paddingTop="1rem"
    }
    return (
      <div className="row" ref="el"
        key={`${expiration.service}/${expiration.name}/${expiration.date}/${expiration.id}`}
        data-content={`${expiration.name}\n${expiration.description || ""}`}
        data-position="bottom center"
        data-date={date.format("YYYY-MM-DD")}
        style={style}
        onClick={() => showCalendar(date.year(), date.month())}
        >
          <div>
            <a onClick={(ev) => onClick() && ev.stopPropagation()}><b>{service.name}</b></a> - {date.fromNow()}
          </div><div className={expired ? "ui text red" : ""}>
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
      marks[moment(exp.date).format("YYYY-MM-DD")]="background light grey"
    }

    return {
      marks,
    }
  },
  gotoDate(date){
    date=date.format("YYYY-MM-DD")
    const vel = $(this.refs.list).find(`[data-date="${date}"]:first`)
    const parent=vel.parent()
    const offset=vel.offset().top - parent.offset().top + parent.scrollTop()
    parent.scrollTop( offset )
  },
  showCalendar(year, month){
    this.setState({year, month})
  },
  render(){
    const {expirations, onShowService, getServiceByUUID, maxHeight} = this.props
    const state = this.state
    return (
      <div>
        <Calendar marks={state.marks} navigation={true} onClick={this.gotoDate} month={this.state.month} year={this.state.year}/>
        <div ref="list" className="ui vertically divided list" style={{overflow:"auto", maxHeight: maxHeight}}>
          {expirations.map( (e, n) => (
            <TimelineLine
              key={`${e.service}/${e.check}`}
              expiration={e}
              service={getServiceByUUID(e.service)}
              onClick={() => onShowService(e.service)}
              hasDivider={n!=0}
              showCalendar={this.showCalendar}
              />
          ))}
        </div>
      </div>
    )
  }
})

export default Timeline
