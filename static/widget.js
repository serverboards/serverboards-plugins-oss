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
var TimelineLine=React$1.createClass({displayName:"TimelineLine",componentDidMount:function componentDidMount(){$(this.refs.el).popup()},render:function render(){var _props=this.props,a=_props.expiration,b=_props.onClick,c=_props.hasDivider,d=_props.showCalendar,f=_props.height,g=a.service,h=moment(a.date),i=h.isBefore(moment()),j={paddingLeft:5,paddingBottom:"1rem",cursor:"pointer",maxHeight:f};c&&(j.borderTop="1px solid #eee",j.paddingTop="1rem");var k={};return a.description&&(k["data-content"]=a.description,k["data-position"]="bottom center"),React$1.createElement("div",_extends({className:"row",ref:"el",key:g.uuid+"/"+a.name+"/"+a.date+"/"+a.id,"data-date":h.format("YYYY-MM-DD"),style:j,onClick:function onClick(){return d(h.year(),h.month())}},k),React$1.createElement("div",null,React$1.createElement("a",{onClick:function onClick(l){return b()&&l.stopPropagation()}},React$1.createElement("b",null,g.name))," - ",h.fromNow()),React$1.createElement("div",null,a.name),React$1.createElement("div",{className:i?"ui text red":""},i?"Expired":"Expires"," on ",h.format("MMM Do, YY")))}});
var Timeline=React$1.createClass({displayName:"Timeline",getInitialState:function getInitialState(){var a={},b=moment();a[b.format("YYYY-MM-DD")]="bold text teal";var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0;try{for(var _step,_iterator=this.props.expirations[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){var c=_step.value;a[moment(c.date).format("YYYY-MM-DD")]="background light grey"}}catch(err){_didIteratorError=!0,_iteratorError=err}finally{try{!_iteratorNormalCompletion&&_iterator.return&&_iterator.return()}finally{if(_didIteratorError)throw _iteratorError}}return{marks:a}},gotoDate:function gotoDate(a){a=a.format("YYYY-MM-DD");var b=$(this.refs.list).find("[data-date=\""+a+"\"]:first"),c=b.parent(),d=b.offset().top-c.offset().top+c.scrollTop();c.scrollTop(d)},showCalendar:function showCalendar(a,b){this.setState({year:a,month:b})},render:function render(){var _this=this,_props2=this.props,a=_props2.expirations,b=_props2.onShowService,c=_props2.height,d=this.state;return React$1.createElement("div",{style:{maxHeight:c}},React$1.createElement("div",{style:{minHeight:200,display:"flex",margin:"auto"}},React$1.createElement(Calendar,{marks:d.marks,navigation:!0,onClick:this.gotoDate,month:this.state.month,year:this.state.year})),React$1.createElement("div",{ref:"list",className:"ui vertically divided list",style:{overflow:"auto",maxHeight:c}},a.map(function(f,g){return React$1.createElement(TimelineLine,{key:f.service.uuid+"/"+f.check,expiration:f,onClick:function onClick(){return b(f.service.uuid)},hasDivider:0!=g,showCalendar:_this.showCalendar})})))}});

var _Serverboards=Serverboards;
var event=_Serverboards.event;
var plugin=_Serverboards.plugin;
var React=_Serverboards.React;
var store=_Serverboards.store;
var cache=_Serverboards.cache;
var Flash=_Serverboards.Flash;
var rpc=_Serverboards.rpc;
var i18n=_Serverboards.i18n;
var plugin_id="serverboards.expiration";
var Loading=Serverboards.Components.Loading;
var {merge:merge}=Serverboards.utils;
var Model=React.createClass({displayName:"Model",getInitialState:function getInitialState(){var a=store.getState();return{updating:!1,expirations:void 0,project:a.project.project}},componentDidMount:function componentDidMount(){var _this=this;plugin.start_call_stop("serverboards.expiration/command","list_expirations",{project:this.state.project.shortname}).then(function(a){if(a.updating){var b=event.on("action.updated",_this.progressUpdate),c=event.on("action.stopped",_this.progressStop);_this.setState({updating:{id:a.updating,update_id:b,stop_id:c}})}else _this.setState({expirations:a})}).catch(function(a){Flash.error(a)})},progressUpdate:function progressUpdate(a){var b=this.state.updating.id;b==a.uuid&&this.setState({updating:merge(this.state.updating,{progress:a.progress,label:a.label})})},progressStop:function progressStop(a){var b=this.state.updating.id;b==a.uuid&&(this.componentWillUnmount(),this.setState({updating:!1}),this.componentDidMount())},componentWillUnmount:function componentWillUnmount(){this.state.updating&&(event.off("action.updated",this.state.update_id),event.off("action.stopped",this.state.stop_id))},handleShowService:function handleShowService(a){store.goto("/project/"+this.state.project.shortname+"/services/"+a)},handleReload:function handleReload(){var _this2=this;Flash.info(i18n("This will take long time")),rpc.call("action.trigger_wait",["serverboards.expiration/update",{}]).then(function(){Flash.success("Expirations list updated"),_this2.componentDidMount()}).catch(function(a){return Flash.error(a)})},render:function render(){var a=this.props.layout,b=void 0;return b=1==a.w&&2==a.h?"small":a.w>a.h?"horizontal":"vertical",this.state.updating?React.createElement(Loading,null,i18n("Updating expirations. This will take long time."),React.createElement("div",{className:"ui text grey"},this.state.updating.label," (",(this.state.updating.progress||0).toFixed(2),"%)")):this.state.expirations?React.createElement("div",{className:"ui expirations "+b,style:{maxHeight:a.height}},React.createElement(Timeline,{expirations:this.state.expirations,onShowService:this.handleShowService,height:a.height}),React.createElement("button",{className:"ui button yellow with icon",onClick:this.handleReload},React.createElement("i",{className:"ui refresh icon"}))):React.createElement(Loading,null,i18n("Expirations"))}});
Serverboards.add_widget(plugin_id+"/widget",Model,{react:!0});

})));
//# sourceMappingURL=widget.js.map
