'use strict';

var React$2=Serverboards.React;
var SQLTextInput=React$2.createClass({displayName:'SQLTextInput',componentDidMount:function componentDidMount(){var _this=this;$(this.refs.textarea).on('keyup',function(a){a.ctrlKey&&13==a.keyCode&&_this.handleExecute($(_this.refs.textarea).val()),27==a.keyCode&&_this.clearTextArea()})},handleExecute:function handleExecute(){this.props.onExecute($(this.refs.textarea).val())},clearTextArea:function clearTextArea(){$(this.refs.textarea).val('')},render:function render(){return React$2.createElement('div',{className:'ui form'},React$2.createElement('textarea',{ref:'textarea',className:'ui input',placeholder:'Write your SQL query and press Crtl+Enter',id:'query_area'}),React$2.createElement('div',{className:'ui buttons',style:{marginTop:10}},React$2.createElement('button',{className:'ui button yellow',onClick:this.handleExecute,style:{paddingTop:10}},'Execute query (Crtl+Enter)'),React$2.createElement('button',{className:'ui button',onClick:this.clearTextArea,style:{paddingTop:10}},'Clear area (ESC)')))}});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var React$3=Serverboards.React;function DataGrid(a){function b(d){return"object"==("undefined"==typeof d?"undefined":_typeof(d))?JSON.stringify(d):d}return React$3.createElement("div",{style:{height:"60vh",overflow:"scroll"}},React$3.createElement("table",{className:"ui celled unstackable table"},React$3.createElement("thead",null,a.headers.map(function(d){return React$3.createElement("th",null,d)})),React$3.createElement("tbody",null,a.data.map(function(d){return React$3.createElement("tr",null,d.map(function(e){return React$3.createElement("td",null,b(e))}))}))))}

var React$1=Serverboards.React;
var rpc=Serverboards.rpc;
var Flash=Serverboards.Flash;
var Console=React$1.createClass({displayName:'Console',getInitialState:function getInitialState(){return{data:[],columns:['','',''],databases:['template1'],tables:[],plugin_id:void 0}},componentDidMount:function componentDidMount(){var _this=this,a=void 0;rpc.call('plugin.start',['serverboards.remotesql/daemon']).then(function(b){return a=b,console.log('plugin id %o',a),_this.setState({plugin_id:a}),_this.openConnection('template1',a)}).then(function(){return console.log('plugin id %o',a),rpc.call(a+'.databases').then(function(b){_this.setState({databases:b})})}).catch(function(b){console.error(b),Flash.error(b+'')}),$(this.refs.el).find('.ui.dropdown').dropdown()},componentWillUnmount:function componentWillUnmount(){console.log('Stop database connection? %o',this.state.plugin_id),this.state.plugin_id&&(console.log('Stop database connection'),rpc.call('plugin.stop',[this.state.plugin_id]))},openConnection:function openConnection(a,b){var _this2=this;b||(b=this.state.plugin_id);var d=this.props.service.config;return console.log(this.props.service),rpc.call(b+'.open',{via:d.via,type:d.type,hostname:d.hostname,port:d.port,username:d.username,password_pw:d.password_pw,database:a}).then(function(){return rpc.call(b+'.tables')}).then(function(f){_this2.setState({tables:f})})},handleExecute:function handleExecute(a,b){var _this3=this;b||(b=this.state.plugin_id),rpc.call(b+'.execute',[a]).then(function(d){console.log('Got response: %o',d),_this3.setState({data:d.data,columns:d.columns})}).catch(function(d){console.error(d),Flash.error(d+'')}),$(this.refs.el).find('#query_area').val(a)},render:function render(){var _this4=this,a=this.props,b=this.state,d=a.service||{};return React$1.createElement('div',{ref:'el',className:'ui container'},React$1.createElement('h2',{className:'ui header'},'SQL Console for ',React$1.createElement('i',null,d.name)),React$1.createElement('select',{name:'database',defaultValue:'template1',className:'ui dropdown',onChange:function onChange(f){return _this4.openConnection(f.target.value)}},b.databases.map(function(f){return React$1.createElement('option',{value:f},f)})),React$1.createElement('select',{name:'tables',className:'ui dropdown',onChange:function onChange(f){return _this4.handleExecute('SELECT * FROM '+f.target.value+' LIMIT 100;')}},b.tables.map(function(f){return React$1.createElement('option',{value:f},f)})),React$1.createElement(DataGrid,{data:b.data,headers:b.columns}),React$1.createElement(SQLTextInput,{onExecute:this.handleExecute}))}});

var React=Serverboards.React;
function main(_ref,b){var _ref2=slicedToArray(_ref,1),a=_ref2[0];return Serverboards.ReactDOM.render(React.createElement(function(c){return React.createElement(Console,{service:b.service})},null),a),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_screen("serverboards.remotesql/console",main);