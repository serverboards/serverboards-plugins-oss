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
var Model=React.createClass({displayName:"Model",getInitialState:function getInitialState(){return{services:store.getState().serverboard.serverboard.services}},updateServices:function updateServices(){this.setState({services:store.getState().serverboard.serverboard.services})},componentDidMount:function componentDidMount(){var _this=this;this.unsubscribe=store.subscribe(function(){return _this.updateServices()})},componentWillUnmount:function componentWillUnmount(){this.unsubscribe()},render:function render(){return React.createElement(View,{services:this.state.services})}});
function View(a){return React.createElement("div",{className:"ui heatmap"},a.services.map(function(b){return React.createElement("span",{className:"cell "+Serverboards.utils.colorize(b.tags[0]||""),title:b.name+": "+b.tags.join(", "),"data-tooltip":b.name+": "+b.tags.join(", "),onClick:function onClick(){return Serverboards.store.goto("/services/"+b.uuid)},style:{cursor:"pointer"}})}))}function main(a,b){return Serverboards.ReactDOM.render(React.createElement(Model,null),a),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_widget(plugin_id+"/widget",main);

})));
//# sourceMappingURL=widget.js.map
