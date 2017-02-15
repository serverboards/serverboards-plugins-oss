(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

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

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _Serverboards$1=Serverboards;
var React$1=_Serverboards$1.React;
var moment=_Serverboards$1.moment;
var {Calendar:Calendar}=Serverboards.Components;
var TimelineLine=React$1.createClass({displayName:"TimelineLine",componentDidMount:function componentDidMount(){$(this.refs.el).popup()},render:function render(){var _props=this.props,a=_props.expiration,b=_props.service,c=_props.onClick,d=_props.hasDivider,f=_props.showCalendar,g=moment(a.date),h=g.isBefore(moment()),i={paddingLeft:5,paddingBottom:"1rem",cursor:"pointer"};d&&(i.borderTop="1px solid #eee",i.paddingTop="1rem");var j={};return a.description&&(j["data-content"]=a.description,j["data-position"]="bottom center"),React$1.createElement("div",_extends({className:"row",ref:"el",key:a.service+"/"+a.name+"/"+a.date+"/"+a.id,"data-date":g.format("YYYY-MM-DD"),style:i,onClick:function onClick(){return f(g.year(),g.month())}},j),React$1.createElement("div",null,React$1.createElement("a",{onClick:function onClick(k){return c()&&k.stopPropagation()}},React$1.createElement("b",null,b.name))," - ",g.fromNow()),React$1.createElement("div",null,a.name),React$1.createElement("div",{className:h?"ui text red":""},h?"Expired":"Expires"," on ",g.format("MMM Do, YY")))}});
var Timeline=React$1.createClass({displayName:"Timeline",getInitialState:function getInitialState(){var a={},b=moment();a[b.format("YYYY-MM-DD")]="bold text teal";var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=this.props.expirations[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var c=_step.value;a[moment(c.date).format("YYYY-MM-DD")]="background light grey"}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return{marks:a}},gotoDate:function gotoDate(a){a=a.format("YYYY-MM-DD");var b=$(this.refs.list).find("[data-date=\""+a+"\"]:first"),c=b.parent(),d=b.offset().top-c.offset().top+c.scrollTop();c.scrollTop(d)},showCalendar:function showCalendar(a,b){this.setState({year:a,month:b})},render:function render(){var _this=this,_props2=this.props,a=_props2.expirations,b=_props2.onShowService,c=_props2.getServiceByUUID,d=_props2.maxHeight,f=this.state;return React$1.createElement("div",null,React$1.createElement(Calendar,{marks:f.marks,navigation:!0,onClick:this.gotoDate,month:this.state.month,year:this.state.year}),React$1.createElement("div",{ref:"list",className:"ui vertically divided list",style:{overflow:"auto",maxHeight:d}},a.map(function(g,h){return React$1.createElement(TimelineLine,{key:g.service+"/"+g.check,expiration:g,service:c(g.service),onClick:function onClick(){return b(g.service)},hasDivider:0!=h,showCalendar:_this.showCalendar})})))}});

var _Serverboards=Serverboards;
var plugin=_Serverboards.plugin;
var React=_Serverboards.React;
var store=_Serverboards.store;
var cache=_Serverboards.cache;
var Flash=_Serverboards.Flash;
var plugin_id="serverboards.expiration";
var Loading=Serverboards.Components.Loading;
var Model=React.createClass({displayName:"Model",getInitialState:function getInitialState(){var a=store.getState();return console.log(a),{expirations:void 0,serverboard:a.serverboard.serverboard,service_by_uuid:void 0}},componentDidMount:function componentDidMount(){var _this=this;plugin.start_call_stop("serverboards.expiration/command","list_expirations",[]).then(function(a){return _this.setState({expirations:a})}).catch(function(a){return Flash.error(a)}),cache.services().then(function(a){var b={};a.map(function(c){return b[c.uuid]=c}),_this.setState({service_by_uuid:b})})},handleShowService:function handleShowService(a){store.goto("/serverboard/"+this.state.serverboard.shortname+"/services/"+a)},handleReload:function handleReload(){var _this2=this;Flash.info("This will take long time"),plugin.start_call_stop("serverboards.expiration/command","update_expirations",[]).then(function(){Flash.info("Expiration updated"),_this2.componentDidMount()}).catch(function(a){return Flash.error(a)})},getServiceByUUID:function getServiceByUUID(a){return this.state.service_by_uuid[a]},render:function render(){return this.state.expirations&&this.state.service_by_uuid?React.createElement("div",{className:"ui expirations "+this.props.layout},React.createElement(Timeline,{expirations:this.state.expirations,onShowService:this.handleShowService,getServiceByUUID:this.getServiceByUUID}),React.createElement("button",{className:"ui button yellow with icon",onClick:this.handleReload},React.createElement("i",{className:"ui refresh icon"}))):React.createElement(Loading,null,"Expirations")}});
function main(a,b,c){var d=void 0;return d=1==c.layout.width&&2==c.layout.height?"small":c.layout.width>c.layout.height?"horizontal":"vertical",Serverboards.ReactDOM.render(React.createElement(Model,_extends({},b,{layout:d})),a),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_widget(plugin_id+"/widget",main);

})));
//# sourceMappingURL=widget.js.map
