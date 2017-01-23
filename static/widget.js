(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var _Serverboards$1=Serverboards;
var React$1=_Serverboards$1.React;
var moment=_Serverboards$1.moment;
function TimelineLine(_ref){var a=_ref.expiration,b=_ref.service,c=_ref.onClick,d=_ref.hasDivider,f=moment(a.date),g=f.isBefore(moment()),h={paddingLeft:5,paddingBottom:"1rem"};return d&&(h.borderTop="1px solid #eee",h.paddingTop="1rem"),React$1.createElement("div",{className:"row",key:a.service+"/"+a.name+"/"+a.date+"/"+a.id,"data-tooltip":a.name+"\n"+(a.description||""),style:h},React$1.createElement("div",null,React$1.createElement("a",{onClick:c},React$1.createElement("b",null,b.name))," - ",f.fromNow()),React$1.createElement("div",{className:g?"ui text red":""},g?"Expired":"Expires"," on ",f.format("MMM Do, YY")))}function Timeline(_ref2){var a=_ref2.expirations,b=_ref2.onShowService,c=_ref2.getServiceByUUID;return React$1.createElement("div",{className:"ui vertically divided"},a.map(function(d,f){return React$1.createElement(TimelineLine,{expiration:d,service:c(d.service),onClick:function onClick(){return b(d.service)},hasDivider:0!=f})}))}

var _Serverboards=Serverboards;
var plugin=_Serverboards.plugin;
var React=_Serverboards.React;
var store=_Serverboards.store;
var cache=_Serverboards.cache;
var Flash=_Serverboards.Flash;
var plugin_id="serverboards.expiration";
var Loading=Serverboards.Components.Loading;
var Model=React.createClass({displayName:"Model",getInitialState:function getInitialState(){var a=store.getState();return console.log(a),{expirations:void 0,serverboard:a.serverboard.serverboard,service_by_uuid:void 0}},componentDidMount:function componentDidMount(){var _this=this;plugin.start_call_stop("serverboards.expiration/command","list_expirations",[]).then(function(a){return _this.setState({expirations:a})}),cache.services().then(function(a){var b={};a.map(function(c){return b[c.uuid]=c}),_this.setState({service_by_uuid:b})})},handleShowService:function handleShowService(a){store.goto("/serverboard/"+this.state.serverboard.shortname+"/services/"+a)},handleReload:function handleReload(){var _this2=this;Flash.info("This will take long time"),plugin.start_call_stop("serverboards.expiration/command","update_expirations",[]).then(function(){Flash.info("Expiration updated"),_this2.componentDidMount()}).catch(function(a){return Flash.error(a)})},getServiceByUUID:function getServiceByUUID(a){return this.state.service_by_uuid[a]},render:function render(){return this.state.expirations&&this.state.service_by_uuid?React.createElement("div",null,React.createElement(Timeline,{expirations:this.state.expirations,onShowService:this.handleShowService,getServiceByUUID:this.getServiceByUUID}),React.createElement("button",{className:"ui button yellow with icon",onClick:this.handleReload},React.createElement("i",{className:"ui refresh icon"}))):React.createElement(Loading,null,"Expirations")}});
function main(a,b){return Serverboards.ReactDOM.render(React.createElement(Model,b),a),$(a).css({overflow:"auto"}),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_widget(plugin_id+"/widget",main);

})));
//# sourceMappingURL=widget.js.map
