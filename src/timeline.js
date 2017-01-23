const {React, moment} = Serverboards

function TimelineLine({expiration, service, onClick, hasDivider}){
  const date = moment(expiration.date)
  const expired = date.isBefore(moment())
  let style = {paddingLeft: 5, paddingBottom: "1rem"}
  if (hasDivider){
    style.borderTop="1px solid #eee"
    style.paddingTop="1rem"
  }
  return (
    <div className="row"
      key={`${expiration.service}/${expiration.name}/${expiration.date}/${expiration.id}`}
      data-tooltip={`${expiration.name}\n${expiration.description || ""}`}
      style={style}
      >
        <div>
          <a onClick={onClick}><b>{service.name}</b></a> - {date.fromNow()}
        </div><div className={expired ? "ui text red" : ""}>
          {expired ? "Expired" : "Expires" } on {date.format("MMM Do, YY")}
        </div>
    </div>
  )
}

function Timeline({expirations, onShowService, getServiceByUUID}){
  return (
    <div className="ui vertically divided">
      {expirations.map( (e, n) => (
        <TimelineLine
          expiration={e}
          service={getServiceByUUID(e.service)}
          onClick={() => onShowService(e.service)}
          hasDivider={n!=0}
          />
      ))}
    </div>
  )
}

export default Timeline
