const {React, moment} = Serverboards

function TimelineLine({expiration, service, onClick}){
  return (
    <li key={`${expiration.service}/${expiration.name}/${expiration.date}/${expiration.id}`}
      data-tooltip={`${expiration.description || ""}\n${expiration.date}`}>
      <a onClick={onClick}>
      {service.name}
      </a>
      -- {expiration.name} -- {moment(expiration.date).fromNow()}
    </li>
  )
}

function Timeline({expirations, onShowService, getServiceByUUID}){
  return (
    <ul>
      {expirations.map( (e) => (
        <TimelineLine expiration={e} service={getServiceByUUID(e.service)} onClick={() => onShowService(e.service)}/>
      ))}
    </ul>
  )
}

export default Timeline
