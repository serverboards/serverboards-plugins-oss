const {plugin} = Serverboards

let crypto = {}

crypto.uuid4 = function(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
}


plugin.load("serverboards.secrets/sjcl.js").then( () => {
  console.log(sjcl)
  crypto.encrypt=sjcl.encrypt
  crypto.decrypt=sjcl.decrypt
})

export default crypto
