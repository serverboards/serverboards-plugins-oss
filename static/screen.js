(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

var _Serverboards$1=Serverboards;
var React$1=_Serverboards$1.React;
var {HoldButton:HoldButton}=Serverboards.Components;
// mutates the array, does not matter on this use.
function sorted(a){return a.sort(),a}var Header=React$1.createClass({displayName:'Header',componentDidMount:function componentDidMount(){$(this.refs.secret_select).dropdown({})},handleSecretSelect:function handleSecretSelect(a){a.target.value&&this.props.onSecretSelect(a.target.value)},componentWillReceiveProps:function componentWillReceiveProps(a){var _this=this;a.secret!=this.props.secret&&setTimeout(function(){a.secret?$(_this.refs.secret_select).dropdown('set selected',a.secret):$(_this.refs.secret_select).dropdown('clear')},20)},render:function render(){var a=this.props;return React$1.createElement('div',{className:'ui top secondary menu'},React$1.createElement('h3',{className:'ui header'},a.title||'Select Secret'),React$1.createElement('div',{className:'right menu'},a.onDelete?React$1.createElement(HoldButton,{className:'ui outline button red',onHoldClick:a.onDelete},'Hold to remove'):null,React$1.createElement('select',{className:'ui dropdown search small',name:'secret',ref:'secret_select',onChange:this.handleSecretSelect,value:a.secret},React$1.createElement('option',{value:''},'Select a secret'),sorted(Object.keys(a.secrets)).map(function(b){return React$1.createElement('option',{key:b,value:b},a.secrets[b])})),React$1.createElement('a',{className:'item',onClick:a.onSecretAdd},React$1.createElement('i',{className:'ui icon add'}))))}});

var _Serverboards$3=Serverboards;
var React$3=_Serverboards$3.React;
function RequestPassword(a){return React$3.createElement("div",{className:"ui container"},React$3.createElement("div",{className:"ui form"},React$3.createElement("div",{className:"field"},React$3.createElement("label",null,"Password"),React$3.createElement("input",{type:"password",id:"password",placeholder:"Secret password"})),React$3.createElement("div",{className:"field"},React$3.createElement("button",{className:"ui button yellow",onClick:function onClick(){var c=$("#secrets input#password").val();a.onPasswordSet(c)}},"Decrypt ",React$3.createElement("i",{className:"ui icon right arrow"})))))}

var React$6=Serverboards.React;
var preseticons={document:"file text",text:"file text","application/vnd.oasis.opendocument.spreadsheet":"file excel outline",image:"file image"};
var icon_style={verticalAlign:"top"};
function PreviewFile(a){var b=a.data.slice(5,a.data.indexOf(";"));switch(console.log(a.data.slice(0,20),b),b){case"image/gif":case"image/svg":case"image/png":case"image/jpg":case"image/jpeg":return React$6.createElement("img",{src:a.data,className:"ui top aligned avatar image"});}return preseticons[b]?React$6.createElement("i",{style:icon_style,className:"icon big black "+preseticons[b]}):(b=b.slice(b.indexOf("/")),preseticons[b]?React$6.createElement("i",{style:icon_style,className:"icon big black "+preseticons[b]}):React$6.createElement("i",{style:icon_style,className:"icon big black file"}))}

var React$5=Serverboards.React;function file_size(a){return 1024>a?a+" Bytes":1048576>a?(a/1024).toFixed(2)+" KB":1073741824>a?(a/1048576).toFixed(2)+" MB":void 0}function FileThumb(a){return React$5.createElement("div",null,React$5.createElement(PreviewFile,a),React$5.createElement("div",{style:{display:"inline-block"}},React$5.createElement("div",null,a.name),React$5.createElement("div",{className:"ui meta"},file_size(a.size)||"~ "+file_size(3*a.data.length/4))))}

var _Serverboards$5=Serverboards;
var plugin=_Serverboards$5.plugin;
var crypto={};
crypto.uuid4=function(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(a){var b=0|16*Math.random(),d='x'==a?b:8|3&b;return d.toString(16)})},plugin.load('serverboards.secrets/sjcl.js').then(function(){console.log(sjcl),crypto.encrypt=sjcl.encrypt,crypto.decrypt=sjcl.decrypt});

var _Serverboards$4=Serverboards;
var React$4=_Serverboards$4.React;
var Flash$2=_Serverboards$4.Flash;
var EditSecret=React$4.createClass({displayName:'EditSecret',componentDidMount:function componentDidMount(){$(this.refs.el).find('.ui.checkbox').checkbox()},handleEncrypt:function handleEncrypt(){var _this=this,a=$(this.refs.content).val(),b=$(this.refs.password).val(),c=$(this.refs.title).val();if(!b)return void Flash$2.error('Cant use empty password.');if(6>b.length)return void Flash$2.error('Password too short! At least 6 characters.');if(b!=$(this.refs.password_repeat).val())return void Flash$2.error('Passwords do not match!');var d=(this.props.files||[]).filter(function(h){return $(_this.refs.el).find('input[type=checkbox][name="'+h.name+'"]').is(':checked')}),e={text:a,files:d||[]},g=[];// Maybe some promises if there are selected files
if(0<this.refs.upload.files.length){var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{var _loop=function _loop(){var h=_step.value,i=new Promise(function(j,k){var l=new FileReader;l.onload=function(m){e.files.push({name:h.name,data:m.target.result,size:h.size}),j()},l.readAsDataURL(h)});console.log(g),g.push(i)};for(var _step,_iterator=this.refs.upload.files[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0)_loop()}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}}Promise.all(g).then(function(){var h=JSON.stringify(e),i=crypto.encrypt(b,h);_this.props.onSave(c,i)})},render:function render(){var a=this.props;return React$4.createElement('div',{className:'ui text container'},React$4.createElement('div',{ref:'el',className:'ui form'},React$4.createElement('div',{className:'field'},React$4.createElement('label',null,'Secret Name'),React$4.createElement('input',{type:'text',ref:'title',defaultValue:a.title})),React$4.createElement('div',{className:'field'},React$4.createElement('label',null,'Text'),React$4.createElement('textarea',{id:'plain',ref:'content',style:{minHeight:'calc( 100vh - 33em )'},defaultValue:a.content})),React$4.createElement('div',{className:'field'},React$4.createElement('label',null,'Upload new file'),React$4.createElement('input',{type:'file',ref:'upload',multiple:!0}),0<(a.files||[]).length?React$4.createElement('div',null,React$4.createElement('label',null,'Files to keep'),React$4.createElement('div',{className:'ui meta'},'Unmark files to remove them from the secret'),React$4.createElement('div',{className:'ui three column grid'},(a.files||[]).map(function(b){return React$4.createElement('div',{className:'field column'},React$4.createElement('div',{className:'ui checkbox'},React$4.createElement('input',{type:'checkbox',className:'ui checkbox',name:b.name,checked:!0,className:'hidden'}),React$4.createElement('label',null,React$4.createElement(FileThumb,b))))}))):null),React$4.createElement('div',{className:'inline field'},React$4.createElement('label',null,'Password: '),React$4.createElement('input',{type:'password',defaultValue:a.password,ref:'password'}),React$4.createElement('label',null,'\xA0Repeat Password: '),React$4.createElement('input',{type:'password',defaultValue:a.password,ref:'password_repeat'}),'\xA0',React$4.createElement('button',{className:'ui button yellow',onClick:this.handleEncrypt},'Encrypt'))))}});

var _Serverboards$2=Serverboards;
var React$2=_Serverboards$2.React;
var rpc$1=_Serverboards$2.rpc;
var Flash$1=_Serverboards$2.Flash;
var {MarkdownPreview:MarkdownPreview}=Serverboards.Components;
var ViewSecret=React$2.createClass({displayName:'ViewSecret',getInitialState:function getInitialState(){return{text:void 0,password:void 0,files:[],edit:!1}},handleOpenEdit:function handleOpenEdit(){this.setState({edit:!0})},handlePasswordSet:function handlePasswordSet(a){try{var b=JSON.parse(crypto.decrypt(a,this.props.secret));this.setState({text:b.text,password:a,files:b.files||[]}),this.props.onSecretVisible(!0)}catch(b){console.error(b),Flash$1.error('Invalid password. Try again.')}},componentWillReceiveProps:function componentWillReceiveProps(a){a.secret!=this.props.secret&&this.setState(this.getInitialState())},render:function render(){var a=this.state;return a.edit?React$2.createElement(EditSecret,{password:a.password,content:a.text,title:this.props.title,onSave:this.props.onSave,files:this.state.files}):a.password?React$2.createElement('div',{className:'ui text container'},React$2.createElement(MarkdownPreview,{value:a.text}),React$2.createElement('div',{className:'ui divider'}),0<a.files.length?React$2.createElement('div',null,'Attachments:',React$2.createElement('div',{className:'ui three column grid'},a.files.map(function(b){return React$2.createElement('a',{href:b.data,target:'_blank',download:b.name,key:b.name,className:'column'},React$2.createElement(FileThumb,b))})),React$2.createElement('div',{className:'ui divider'})):null,React$2.createElement('button',{style:{float:'right'},className:'ui button yellow',onClick:this.handleOpenEdit},'Edit')):React$2.createElement(RequestPassword,{onPasswordSet:this.handlePasswordSet})}});

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _Serverboards=Serverboards;
var rpc=_Serverboards.rpc;
var React=_Serverboards.React;
var Flash=_Serverboards.Flash;
var utils=_Serverboards.utils;
var plugin_id='serverboards.secrets';
var View=React.createClass({displayName:'View',getInitialState:function getInitialState(){return{secrets:{},title:void 0,secret:void 0,secret_id:void 0,add:!1,visible:!1}},componentDidMount:function componentDidMount(){var _this=this;rpc.call('plugin.data_keys',[plugin_id,this.props.project+'.']).then(function(a){var b={},c=_this.props.project.length+1;a.map(function(d){b[d]=d.slice(c)}),_this.setState({secrets:b}),_this.state.secret_id&&_this.handleSecretSelect(_this.state.secret_id)})},handleSecretSelect:function handleSecretSelect(a){var _this2=this;console.log('secret %o',a),rpc.call('plugin.data_get',[plugin_id,a]).then(function(b){_this2.setState({secret:b,title:_this2.state.secrets[a],secret_id:a,add:!1,visible:!1})})},handleAddSecretDialog:function handleAddSecretDialog(){this.setState({add:!0,title:'Add a new secret',secret_id:void 0})},handleAddSecret:function handleAddSecret(a,b){var _this3=this,c=this,d=this.props.project+'.'+a;rpc.call('plugin.data_set',[plugin_id,d,b]).then(function(f){console.log('Saved encrypted data: %o: %o',a,f);var g=utils.merge(_this3.state.secrets,defineProperty({},d,a));c.setState({add:!1,secret:b,title:a,secrets:g,secret_id:d})}).catch(function(f){console.error(f),Flash.error('Could not save encrypted secret')})},handleDeleteSecret:function handleDeleteSecret(){var _this4=this,a=this.state.secret_id;rpc.call('plugin.data_remove',[plugin_id,a]).then(function(){console.log('Deleted secret %o',a);var b={};Object.keys(_this4.state.secrets).map(function(c){c!=a&&(b[c]=_this4.state.secrets[c])}),_this4.setState({secret_id:void 0,secrets:b,secret:void 0,title:void 0,visible:!1})})},handleTitleChange:function handleTitleChange(a,b,c){var _this5=this,d={};Object.keys(this.state.secrets).map(function(f){f==a?d[b]=c:d[f]=_this5.state.secrets[f]}),this.setState({secret_id:b,secrets:d,title:c})},handleSecretVisible:function handleSecretVisible(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:!0;this.setState({visible:a})},handleSave:function handleSave(a,b){var _this6=this;rpc.call('plugin.data_set',[plugin_id,this.props.project+'.'+a,b]).then(function(){if(a!=_this6.state.title)// remove old one
return rpc.call('plugin.data_remove',[plugin_id,_this6.props.project+'.'+_this6.state.title])}).then(function(){return _this6.reload(_this6.props.project+'.'+a)}).catch(function(c){console.error(c),Flash.error('Error saving secret')})},reload:function reload(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:void 0;this.setState(this.getInitialState()),this.setState({secret_id:a}),this.componentDidMount()},render:function render(){this.props;var a=this.state;return React.createElement('div',{id:'secrets'},React.createElement(Header,{secrets:a.secrets,title:a.title,secret:a.secret_id,onSecretSelect:this.handleSecretSelect,onSecretAdd:this.handleAddSecretDialog,onDelete:a.visible&&this.handleDeleteSecret}),a.add?React.createElement(EditSecret,{onSave:this.handleAddSecret}):a.secret?React.createElement(ViewSecret,{secret:a.secret,title:a.title,onSave:this.handleSave,onSecretChange:a.handleSecretSelect,onSecretVisible:this.handleSecretVisible,reload:this.reload}):React.createElement('div',{className:'ui text container'},'No secret selected. Select a secret from the top menu or add one.'))}});function main(a,b){return console.log('secrets config:',b),Serverboards.ReactDOM.render(React.createElement(View,{project:b.project.shortname}),a),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_screen(plugin_id+'/screen',main);

})));