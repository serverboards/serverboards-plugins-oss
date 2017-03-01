(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var _Serverboards=Serverboards;
var rpc=_Serverboards.rpc;
var React=_Serverboards.React;
var store=_Serverboards.store;
var plugin_id='serverboards.plugin.serviceheatmap';
var Model=React.createClass({displayName:'Model',getInitialState:function getInitialState(){return{services:store.getState().project.project.services,size:20}},updateServices:function updateServices(){this.setState({services:store.getState().project.project.services})},componentDidMount:function componentDidMount(){var _this=this;this.unsubscribe=store.subscribe(function(){return _this.updateServices()});// This is the initial size, but it will make last row unfilled, butcutted, same last column
for(var a=Math.floor(Math.sqrt(240*(280*(this.props.layout.width*this.props.layout.height))/this.state.services.length)),b=!1,c=void 0,d=void 0,e=void 0;!b&&(c=Math.floor(280*this.props.layout.width/a),e=Math.floor(240*this.props.layout.height/a),d=Math.ceil(this.state.services.length/c),b=d<=e,b||(a-=1),!(20>a)););this.setState({size:a-2})},componentWillUnmount:function componentWillUnmount(){this.unsubscribe()},render:function render(){return React.createElement(View,{services:this.state.services,size:this.state.size})}});
function logo(a){var b=a.split(' ');return 2<=b.length?b.map(function(c){return c[0]}).join('').slice(0,2).toUpperCase():a.slice(0,2).toUpperCase()}var Cell=React.createClass({displayName:'Cell',componentDidMount:function componentDidMount(){$(this.refs.el).popup({position:'bottom center'})},gotoService:function gotoService(){$(this.refs.el).popup('destroy'),Serverboards.store.goto('/services/'+this.props.service.uuid)},render:function render(){var _props=this.props,a=_props.service,b=_props.cell_style,c=a.name+': '+a.tags.join(', ');return React.createElement('div',{ref:'el',className:'cell '+Serverboards.utils.colorize(a.tags[0]||''),title:c,'data-content':c,onClick:this.gotoService,style:b},logo(a.name))}});function View(a){var b={width:a.size,minWidth:a.size,height:a.size,cursor:'pointer',display:'flex',justifyContent:'flex-start',alignItems:'flex-start',color:'white',padding:'5px 10px',fontSize:Math.max(a.size/5,12)};return React.createElement('div',{className:'ui heatmap',style:{justifyContent:'center'}},a.services.map(function(c){return React.createElement(Cell,{key:c.uuid,service:c,cell_style:b})}))}function main(a,b,c){return console.log(c),Serverboards.ReactDOM.render(React.createElement(Model,{layout:c.layout}),a),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_widget(plugin_id+'/widget',main);

})));