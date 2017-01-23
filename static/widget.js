(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var _Serverboards$1=Serverboards;
var React$1=_Serverboards$1.React;
var moment=_Serverboards$1.moment;
var {Calendar:Calendar}=Serverboards.Components;
function TimelineLine(_ref){var a=_ref.expiration,b=_ref.service,c=_ref.onClick,d=_ref.hasDivider,f=moment(a.date),g=f.isBefore(moment()),h={paddingLeft:5,paddingBottom:"1rem"};return d&&(h.borderTop="1px solid #eee",h.paddingTop="1rem"),React$1.createElement("div",{className:"row",key:a.service+"/"+a.name+"/"+a.date+"/"+a.id,"data-tooltip":a.name+"\n"+(a.description||""),style:h},React$1.createElement("div",null,React$1.createElement("a",{onClick:c},React$1.createElement("b",null,b.name))," - ",f.fromNow()),React$1.createElement("div",{className:g?"ui text red":""},g?"Expired":"Expires"," on ",f.format("MMM Do, YY")))}var Timeline=React$1.createClass({displayName:"Timeline",getInitialState:function getInitialState(){var a={},b=moment();a[b.format("YYYY-MM-DD")]="bold text teal";var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=this.props.expirations[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var c=_step.value;a[moment(c.date).format("YYYY-MM-DD")]="background light grey"}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return{marks:a}},render:function render(){var _props=this.props,a=_props.expirations,b=_props.onShowService,c=_props.getServiceByUUID,d=this.state;return React$1.createElement("div",null,React$1.createElement(Calendar,{marks:d.marks,navigation:!0}),React$1.createElement("div",{className:"ui vertically divided",style:{overflow:"auto"}},a.map(function(f,g){return React$1.createElement(TimelineLine,{expiration:f,service:c(f.service),onClick:function onClick(){return b(f.service)},hasDivider:0!=g})})))}});

var _Serverboards=Serverboards;
var plugin=_Serverboards.plugin;
var React=_Serverboards.React;
var store=_Serverboards.store;
var cache=_Serverboards.cache;
var Flash=_Serverboards.Flash;
var plugin_id="serverboards.expiration";
var Loading=Serverboards.Components.Loading;
var Model=React.createClass({displayName:"Model",getInitialState:function getInitialState(){var a=store.getState();return console.log(a),{expirations:void 0,serverboard:a.serverboard.serverboard,service_by_uuid:void 0}},componentDidMount:function componentDidMount(){var _this=this;plugin.start_call_stop("serverboards.expiration/command","list_expirations",[]).then(function(a){return _this.setState({expirations:a})}),cache.services().then(function(a){var b={};a.map(function(c){return b[c.uuid]=c}),_this.setState({service_by_uuid:b})})},handleShowService:function handleShowService(a){store.goto("/serverboard/"+this.state.serverboard.shortname+"/services/"+a)},handleReload:function handleReload(){var _this2=this;Flash.info("This will take long time"),plugin.start_call_stop("serverboards.expiration/command","update_expirations",[]).then(function(){Flash.info("Expiration updated"),_this2.componentDidMount()}).catch(function(a){return Flash.error(a)})},getServiceByUUID:function getServiceByUUID(a){return this.state.service_by_uuid[a]},render:function render(){return this.state.expirations&&this.state.service_by_uuid?React.createElement("div",null,React.createElement(Timeline,{expirations:this.state.expirations,onShowService:this.handleShowService,getServiceByUUID:this.getServiceByUUID}),React.createElement("button",{className:"ui button yellow with icon",onClick:this.handleReload},React.createElement("i",{className:"ui refresh icon"}))):React.createElement(Loading,null,"Expirations")}});
function main(a,b){return Serverboards.ReactDOM.render(React.createElement(Model,b),a),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_widget(plugin_id+"/widget",main);

})));
//# sourceMappingURL=widget.js.map
