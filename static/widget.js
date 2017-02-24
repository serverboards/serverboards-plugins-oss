(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var _Serverboards$2=Serverboards;
var React$2=_Serverboards$2.React;
var mimetypes_to_icon={"application/zip":"compress","application/vnd.google-apps.document":"file word outline","application/vnd.google-apps.presentation":"file powerpoint outline","application/vnd.google-apps.folder":"folder",image:"file image outline"};
function get_icon_for(a){console.log(a.type);var b=a.type.split("/")[0];return mimetypes_to_icon[a.type]||mimetypes_to_icon[b]||"file green"}function DriveLine(a){return React$2.createElement("div",{className:"entry"},React$2.createElement("div",{className:"icon"},React$2.createElement("a",{href:a.viewLink,target:"_blank"},React$2.createElement("i",{className:"ui icon "+get_icon_for(a)+" big"}))),React$2.createElement("div",{className:"data"},React$2.createElement("b",null,a.author),"\xA0",a.what,"\xA0",React$2.createElement("b",null,a.file),"\xA0",React$2.createElement("b",null,a.to)),React$2.createElement("div",{className:"time"},a.downloadLink?React$2.createElement("a",{href:a.downloadLink,target:"_blank"},React$2.createElement("i",{className:"ui icon download"})):null),React$2.createElement("div",{className:"time"},a.time))}

var _Serverboards$1=Serverboards;
var React$1=_Serverboards$1.React;
var utils=_Serverboards$1.utils;
var moment=_Serverboards$1.moment;
function DriveDay(a){return React$1.createElement("div",null,React$1.createElement("div",{className:"date"},utils.pretty_ago(a.date,moment(),"day")),a.entries.map(function(b){return React$1.createElement(DriveLine,b)}))}

var _Serverboards=Serverboards;
var rpc=_Serverboards.rpc;
var React=_Serverboards.React;
var plugin=_Serverboards.plugin;
var plugin_id="serverboards.google.drive";
function View(a){return React.createElement("div",{className:"google drive"},a.days.map(function(b){return React.createElement(DriveDay,b)}))}var drive=void 0;
var Model=React.createClass({displayName:"Model",getInitialState:function getInitialState(){return{lines:[],loading:!0}},update:function update(){var _this=this;drive.call("get_changes",[this.props.config.service.uuid]).then(function(a){console.log(a),_this.setState({lines:a})})},componentDidMount:function componentDidMount(){plugin.start("serverboards.google.drive/daemon").then(function(a){drive=a}).then(this.update)},render:function render(){return React.createElement(View,{days:this.state.lines})}});
function main(a,b,c){return c.setTitle("Google Drive activity"),Serverboards.ReactDOM.render(React.createElement(Model,{config:b}),a),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_widget(plugin_id+"/widget",main);

})));
//# sourceMappingURL=widget.js.map
