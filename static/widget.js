(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var _Serverboards=Serverboards;
var rpc=_Serverboards.rpc;
var React=_Serverboards.React;
var store=_Serverboards.store;
var plugin_id="serverboards.plugin.serviceheatmap";
var Model=React.createClass({displayName:"Model",getInitialState:function getInitialState(){return{services:store.getState().serverboard.serverboard.services,size:20}},updateServices:function updateServices(){this.setState({services:store.getState().serverboard.serverboard.services})},componentDidMount:function componentDidMount(){var _this=this;this.unsubscribe=store.subscribe(function(){return _this.updateServices()});// This is the initial size, but it will make last row unfilled, butcutted, same last column
for(var a=Math.floor(Math.sqrt(240*(280*(this.props.layout.width*this.props.layout.height))/this.state.services.length)),b=!1,c=void 0,d=void 0,e=void 0;!b&&(c=Math.floor(280*this.props.layout.width/a),e=Math.floor(240*this.props.layout.height/a),d=Math.ceil(this.state.services.length/c),console.log("max w",a,c,d,e),b=d<=e,b||(a-=1),!(20>a)););this.setState({size:a-2})},componentWillUnmount:function componentWillUnmount(){this.unsubscribe()},render:function render(){return React.createElement(View,{services:this.state.services,size:this.state.size})}});
function View(a){var b={width:a.size,minWidth:a.size,height:a.size,cursor:"pointer"};return React.createElement("div",{className:"ui heatmap",style:{justifyContent:"center"}},a.services.map(function(c){return React.createElement("span",{className:"cell "+Serverboards.utils.colorize(c.tags[0]||""),title:c.name+": "+c.tags.join(", "),"data-tooltip":c.name+": "+c.tags.join(", "),onClick:function onClick(){return Serverboards.store.goto("/services/"+c.uuid)},style:b})}))}function main(a,b,c){return console.log(c),Serverboards.ReactDOM.render(React.createElement(Model,{layout:c.layout}),a),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_widget(plugin_id+"/widget",main);

})));
//# sourceMappingURL=widget.js.map
