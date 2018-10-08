const {React} = Serverboards

function RequestPassword(props){
  function setPassword(){
    const password=$('#secrets input#password').val()
    props.onPasswordSet(password)
  }

  return (
    <div className="ui container with padding">
      <div className="ui form">
        <div className="field">
          <label>Password</label>
          <input type="password" id="password" placeholder="Secret password"/>
        </div>
        <div className="field">
          <button className="ui button yellow" onClick={setPassword}>
            Decrypt <i className="ui icon right arrow"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RequestPassword
