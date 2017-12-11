(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

var _Serverboards$2=Serverboards;
var React$2=_Serverboards$2.React;
var mimetypes_to_icon={"application/zip":"compress","application/vnd.google-apps.document":"file word outline","application/vnd.google-apps.presentation":"file powerpoint outline","application/vnd.google-apps.folder":"folder",image:"file image outline"};
function get_icon_for(a){var b=a.type.split("/")[0];return mimetypes_to_icon[a.type]||mimetypes_to_icon[b]||"file green"}function DriveLine(a){return React$2.createElement("div",{className:"entry"},React$2.createElement("div",{className:"icon"},React$2.createElement("a",{href:a.viewLink,target:"_blank"},React$2.createElement("i",{className:"ui icon "+get_icon_for(a)+" big"}))),React$2.createElement("div",{className:"data"},React$2.createElement("b",null,a.author," "),a.what,React$2.createElement("b",null," ",React$2.createElement("a",{href:a.viewLink,target:"_blank"},a.file)," "),a.to?React$2.createElement("span",null,"removed"==a.what?"from":"at",React$2.createElement("a",{href:a.to_link,target:"_blank"},React$2.createElement("b",null," ",a.to," "))):null),React$2.createElement("div",{className:"time"},React$2.createElement("div",null,a.time),React$2.createElement("div",{className:"download"},a.downloadLink?React$2.createElement("a",{href:a.downloadLink,target:"_blank"},React$2.createElement("i",{className:"ui icon download"})):null)))}

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
var utils=_Serverboards$1.utils;
var moment=_Serverboards$1.moment;
function DriveDay(a){return React$1.createElement("div",null,React$1.createElement("div",{className:"date"},utils.pretty_ago(a.date,moment(),"day")),a.entries.map(function(b){return React$1.createElement(DriveLine,_extends({key:b.file},b))}))}

var _Serverboards=Serverboards;
var rpc=_Serverboards.rpc;
var React=_Serverboards.React;
var plugin=_Serverboards.plugin;
var Components=_Serverboards.Components;
var Flash=_Serverboards.Flash;
var plugin_id="serverboards.google.drive";
function View(a){return React.createElement("div",{className:"google drive"},a.days.map(function(b){return React.createElement(DriveDay,_extends({key:b.date},b))}))}var drive=void 0;
var Model=React.createClass({displayName:"Model",getInitialState:function getInitialState(){return{lines:[],loading:!0,link:!1}},update:function update(){var _this=this,a=this.props.config.folder_filter.split(",").map(function(b){return b.trim()}).filter(function(b){return""!=b});drive.call("get_changes",[this.props.config.service.uuid,a]).then(function(b){_this.setState({lines:b,loading:!1})}).catch(function(b){"invalid_grant"==b?drive.call("authorize_url",[_this.props.config.service]).then(function(c){_this.props.setError("Google Drive grant has expired and was not automatically refreshed. Click [here]("+c+") to renew.")}):(_this.props.setError(b),Flash.error(b))})},componentDidMount:function componentDidMount(){plugin.start("serverboards.google.drive/daemon").then(function(a){drive=a}).then(this.update)},render:function render(){return this.state.loading?React.createElement(Components.Loading,null,"Google Drive Changes"):React.createElement(View,{days:this.state.lines})}});
function main(a,b,c){return c.setTitle("Google Drive activity"),$(a).css("overflow","auto"),Serverboards.ReactDOM.render(React.createElement(Model,{config:b,setError:c.setError}),a),function(){Serverboards.ReactDOM.unmountComponentAtNode(a)}}Serverboards.add_widget(plugin_id+"/widget",main);

})));
//# sourceMappingURL=widget.js.map
