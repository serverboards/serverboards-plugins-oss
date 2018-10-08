(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

var React$2=Serverboards.React;
var ActionDescription=React$2.createClass({displayName:"ActionDescription",render:function render(){var _props=this.props,b=_props.action,c=_props.action_catalog,d=c.find(function(g){return g.id==b.action})||{name:b.action,params:[]},e=b.params||{},f=(d.extra.call.params||[]).filter(function(g){return g.card});return console.log(e,f),React$2.createElement("div",null,React$2.createElement("label",{className:"ui header tiny"},d.name),f.map(function(g){return React$2.createElement("div",{key:g.name},g.label,": ",React$2.createElement("span",{className:"meta"},e[g.name]))}))}});

var React$1=Serverboards.React;
var {goto:goto$1}=Serverboards.location;
var CronLine=React$1.createClass({displayName:"CronLine",render:function render(){var a=this.props;return React$1.createElement("div",{className:"ui card"},React$1.createElement("div",{className:"content"},React$1.createElement("div",{className:"header"},a.name&&a.name!=a.spec?React$1.createElement("span",null,a.name," / "):null,a.spec),React$1.createElement(ActionDescription,{action:a.action,action_catalog:a.action_catalog}),React$1.createElement("a",{onClick:function onClick(){return goto$1("/serverboard/"+a.serverboard+"/rules/"+a.id)}},"Edit")))}});

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

var React=Serverboards.React;
var plugin_id='serverboards.cron';
var rpc=Serverboards.rpc;
var {is_empty:is_empty}=Serverboards.utils;
var {goto:goto}=Serverboards.location;
var Manager=React.createClass({displayName:'Manager',getInitialState:function getInitialState(){return{cronlines:void 0,action_catalog:void 0}},componentDidMount:function componentDidMount(){var _this=this;rpc.call('rules.list',{serverboard:this.props.serverboard.shortname}).then(function(d){return d.filter(function(f){return f.trigger.trigger==plugin_id+'/trigger'}).map(function(f){return{id:f.uuid,spec:f.trigger.params.timespec,name:f.name,action:f.actions.tick,is_active:f.is_active}})}).then(function(d){return _this.setState({cronlines:d})}).catch(function(d){console.error(d),Serverboards.Flash.error(JSON.stringify(d))});var c=Serverboards.store.getState().action.catalog;is_empty(c)?rpc.call('action.filter',{}).then(function(d){_this.setState({action_catalog:d})}):this.setState({action_catalog:c})},handleAddRule:function handleAddRule(){goto('/serverboard/'+this.props.serverboard.shortname+'/rules/add',{trigger:plugin_id+'/trigger'})},render:function render(){var _this2=this,_state=this.state,c=_state.cronlines,d=_state.action_catalog;if(!c||!d){var f=Serverboards.Components;return React.createElement(Loading,null,'Cron info')}return React.createElement('div',{className:'ui container'},React.createElement('h1',{className:'ui header'},'Cron manager'),React.createElement('div',{className:'ui cards'},c.sort(function(f,g){return f.spec.localeCompare(g.spec)}).map(function(f){return React.createElement(CronLine,_extends({key:f.id,serverboard:_this2.props.serverboard.shortname,action_catalog:d},f))})),React.createElement('a',{className:'ui massive button _add icon floating pink',onClick:this.handleAddRule},React.createElement('i',{className:'add icon'})))}});function main(c,d){return Serverboards.ReactDOM.render(React.createElement(Manager,{serverboard:d.serverboard}),c),function(){Serverboards.ReactDOM.unmountComponentAtNode(c)}}Serverboards.add_screen(plugin_id+'/screen',main);

})));