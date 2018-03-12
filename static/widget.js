(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var _Serverboards=Serverboards;
var rpc=_Serverboards.rpc;
var React=_Serverboards.React;
var store=_Serverboards.store;
var i18n=_Serverboards.i18n;
var plugin_id="serverboards.plugin.serviceheatmap";
var Model=React.createClass({displayName:"Model",getInitialState:function getInitialState(){return{services:store.getState().project.project.services,size:20}},updateServices:function updateServices(){this.setState({services:store.getState().project.project.services})},componentWillReceiveProps:function componentWillReceiveProps(a){Serverboards.utils.object_is_equal(a,this.props)||this.componentDidMount(a)},componentDidMount:function componentDidMount(a){var _this=this;a||(a=this.props),this.unsubscribe=store.subscribe(function(){return _this.updateServices()});// This is the initial size, but it will make last row unfilled, butcutted, same last column
for(var b=a.layout,c=Math.floor(Math.sqrt((b.width-10)*(b.height-50)/this.state.services.length)),d=!1,e=void 0,f=void 0,g=void 0;!d&&(e=Math.floor(b.width/c),g=Math.floor(b.height/c),f=Math.ceil(this.state.services.length/e),d=f<=g,d||(c-=1),!(20>c));)if(c!=c){console.error("Error calculating size! NaN"),c=30;// A default size
break}this.setState({size:c-2})},componentWillUnmount:function componentWillUnmount(){this.unsubscribe()},render:function render(){var a=this.state.size;return React.createElement(View,{services:this.state.services,size:a})}});
function logo(a){var b=a.split(" ");return 2<=b.length?b.map(function(c){return c[0]}).join("").slice(0,2).toUpperCase():a.slice(0,2).toUpperCase()}var Cell=React.createClass({displayName:"Cell",componentDidMount:function componentDidMount(){$(this.refs.el).popup({position:"bottom center"})},gotoService:function gotoService(){$(this.refs.el).popup("destroy"),Serverboards.store.goto("/services/"+this.props.service.uuid)},render:function render(){var _props=this.props,a=_props.service,b=_props.cell_style,c=a.name+": "+(a.tags.join(", ")||i18n("Status not set"));return React.createElement("div",{ref:"el",className:"cell "+Serverboards.utils.colorize(a.tags[0]||"grey"),title:c,"data-content":c,onClick:this.gotoService,style:b},logo(a.name))}});function View(a){var b={width:a.size,minWidth:a.size,height:a.size,cursor:"pointer",display:"flex",justifyContent:"flex-start",alignItems:"flex-start",color:"white",padding:"5px 10px",fontSize:Math.max(a.size/5,12)};return React.createElement("div",{className:"ui heatmap",style:{justifyContent:"center"}},a.services.map(function(c){return React.createElement(Cell,{key:c.uuid,service:c,cell_style:b})}))}Serverboards.add_widget(plugin_id+"/widget",Model,{react:!0});

})));
//# sourceMappingURL=widget.js.map
