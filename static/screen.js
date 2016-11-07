(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

var _Serverboards$1=Serverboards;
var React$1=_Serverboards$1.React;
var Header=React$1.createClass({displayName:"Header",componentDidMount:function componentDidMount(){$(this.refs.secret_select).dropdown({})},handleSecretSelect:function handleSecretSelect(a){this.props.onSecretSelect(a.target.value)},render:function render(){var a=this.props;return React$1.createElement("div",{className:"ui top secondary menu"},React$1.createElement("h3",{className:"ui header"},a.title||"Select Secret"),React$1.createElement("div",{className:"right menu"},React$1.createElement("select",{className:"ui dropdown small",name:"secret",ref:"secret_select",onChange:this.handleSecretSelect},React$1.createElement("option",{value:""},"Select a secret"),Object.keys(a.secrets).map(function(b){return React$1.createElement("option",{key:b,value:b},a.secrets[b])})),React$1.createElement("a",{className:"item",onClick:a.onSecretAdd},React$1.createElement("i",{className:"ui icon add"}))))}});

var _Serverboards$3=Serverboards;
var React$3=_Serverboards$3.React;
function RequestPassword(a){return React$3.createElement("div",{className:"ui container"},React$3.createElement("div",{className:"ui form"},React$3.createElement("div",{className:"field"},React$3.createElement("label",null,"Password"),React$3.createElement("input",{type:"password",id:"password",placeholder:"Secret password"})),React$3.createElement("div",{className:"field"},React$3.createElement("button",{className:"ui button yellow",onClick:function onClick(){var c=$("#secrets input#password").val();a.onPasswordSet(c)}},"Decrypt ",React$3.createElement("i",{className:"ui icon right arrow"})))))}

var _Serverboards$5=Serverboards;
var plugin=_Serverboards$5.plugin;
var crypto={};
crypto.uuid4=function(){return'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(a){var b=0|16*Math.random(),d='x'==a?b:8|3&b;return d.toString(16)})},plugin.load('serverboards.secrets/sjcl.js').then(function(){console.log(sjcl),crypto.encrypt=sjcl.encrypt,crypto.decrypt=sjcl.decrypt});

var _Serverboards$4=Serverboards;
var React$4=_Serverboards$4.React;
var Flash$2=_Serverboards$4.Flash;
var EditSecret=React$4.createClass({displayName:"EditSecret",handleEncrypt:function handleEncrypt(){var a=$(this.refs.content).val(),b=$(this.refs.password).val(),c=$(this.refs.title).val();if(!b)return void Flash$2.error("Cant use empty password.");if(6>b.length)return void Flash$2.error("Password too short! At least 6 characters.");if(b!=$(this.refs.password_repeat).val())return void Flash$2.error("Passwords do not match!");var d=crypto.encrypt(b,a);this.props.onSave(c,d)},render:function render(){var a=this.props;return React$4.createElement("div",{className:"ui text container"},React$4.createElement("div",{ref:"el",className:"ui form"},React$4.createElement("div",{className:"field"},React$4.createElement("label",null,"Secret Name"),React$4.createElement("input",{type:"text",ref:"title",defaultValue:a.title})),React$4.createElement("div",{className:"field"},React$4.createElement("label",null,"Text"),React$4.createElement("textarea",{id:"plain",ref:"content",style:{minHeight:"calc( 100vh - 33em )"},defaultValue:a.content})),React$4.createElement("div",{className:"inline field"},React$4.createElement("label",null,"Password: "),React$4.createElement("input",{type:"password",defaultValue:a.password,ref:"password"}),React$4.createElement("label",null,"\xA0Repeat Password: "),React$4.createElement("input",{type:"password",defaultValue:a.password,ref:"password_repeat"}),"\xA0",React$4.createElement("button",{className:"ui button yellow",onClick:this.handleEncrypt},"Encrypt"))))}});

var _Serverboards$2=Serverboards;
var React$2=_Serverboards$2.React;
var rpc$1=_Serverboards$2.rpc;
var Flash$1=_Serverboards$2.Flash;
var {MarkdownPreview:MarkdownPreview}=Serverboards.Components;
var plugin_id$1='serverboards.secrets';
var ViewSecret=React$2.createClass({displayName:'ViewSecret',getInitialState:function getInitialState(){return{text:void 0,password:void 0,edit:!1}},handleSave:function handleSave(a,b){var _this=this;a!=this.props.title&&Flash$1.info('Changing secret name is not yet supported'),rpc$1.call('plugin.data_set',[plugin_id$1,'text.'+this.props.title,b]).then(function(){return _this.setState({edit:!1,text:void 0,password:void 0})}).catch(function(c){console.error(c),Flash$1.error('Error saving secret')})},handleOpenEdit:function handleOpenEdit(){this.setState({edit:!0})},handlePasswordSet:function handlePasswordSet(a){try{var b=crypto.decrypt(a,this.props.secret);this.setState({text:b,password:a})}catch(b){console.error(b),Flash$1.error('Invalid password. Try again.')}},componentWillReceiveProps:function componentWillReceiveProps(a){a.secret!=this.props.secret&&this.setState(this.getInitialState())},render:function render(){var a=this.state;return a.edit?React$2.createElement(EditSecret,{password:a.password,content:a.text,title:this.props.title,onSave:this.handleSave}):a.password?React$2.createElement('div',{className:'ui text container'},React$2.createElement(MarkdownPreview,{value:a.text}),React$2.createElement('div',{className:'ui divider'}),React$2.createElement('button',{className:'ui button yellow',onClick:this.handleOpenEdit},'Edit')):React$2.createElement(RequestPassword,{onPasswordSet:this.handlePasswordSet})}});

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
var View=React.createClass({displayName:'View',getInitialState:function getInitialState(){return{secrets:{},title:'--',secret:void 0,add:!1}},componentDidMount:function componentDidMount(){var _this=this;rpc.call('plugin.data_keys',[plugin_id,'text.']).then(function(a){var b={};a.map(function(c){b[c]=c.slice(5)}),_this.setState({secrets:b})})},handleSecretSelect:function handleSecretSelect(a){var _this2=this;rpc.call('plugin.data_get',[plugin_id,a]).then(function(b){_this2.setState({secret:b,title:_this2.state.secrets[a]})})},handleAddSecretDialog:function handleAddSecretDialog(){this.setState({add:!0})},handleAddSecret:function handleAddSecret(a,b){var _this3=this,c=this;rpc.call('plugin.data_set',[plugin_id,'text.'+a,b]).then(function(d){console.log('Saved encrypted data: %o: %o',a,d);var f=utils.merge(_this3.state.secrets,defineProperty({},'text.'+a,a));c.setState({add:!1,secret:b,title:a,secrets:f})}).catch(function(d){console.error(d),Flash.error('Could not save encrypted secret')})},render:function render(){this.props;var a=this.state;return React.createElement('div',{id:'secrets'},React.createElement(Header,{secrets:a.secrets,title:a.title,onSecretSelect:this.handleSecretSelect,onSecretAdd:this.handleAddSecretDialog}),a.add?React.createElement(EditSecret,{onSave:this.handleAddSecret}):a.secret?React.createElement(ViewSecret,{secret:a.secret,title:a.title,onSecretChange:a.handleSecretSelect}):React.createElement('div',{className:'ui text container'},'No secret selected. Select a secret from the top menu or add one.'))}});function main(a,b){return Serverboards.ReactDOM.render(React.createElement(View,null),a),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_screen(plugin_id+'/screen',main);

})));