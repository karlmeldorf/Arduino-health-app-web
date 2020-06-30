(function(t){function e(e){for(var s,a,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],s=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(s=!1)}s&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var s={},n={app:0},o=[];function a(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=s,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(r,s,function(e){return t[e]}.bind(null,s));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("85ec"),n=r.n(s);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],a={name:"App"},i=a,c=(r("034f"),r("2877")),l=Object(c["a"])(i,n,o,!1,null,null,null),u=l.exports,d=r("8c4f"),p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h2",[t._v("Simple health data table")]),r("div",{staticClass:"border border-light rounded p-4"},[r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.pickedSensor,expression:"pickedSensor"}],attrs:{type:"radio",id:"one",value:"spo2",checked:""},domProps:{checked:t._q(t.pickedSensor,"spo2")},on:{change:function(e){t.pickedSensor="spo2"}}}),r("label",{attrs:{for:"one"}},[t._v("SPO2")])]),r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.pickedSensor,expression:"pickedSensor"}],attrs:{type:"radio",id:"two",value:"bp"},domProps:{checked:t._q(t.pickedSensor,"bp")},on:{change:function(e){t.pickedSensor="bp"}}}),r("label",{attrs:{for:"two"}},[t._v("Bloodpressure")])])]),r("div",{staticClass:"row"},[t._m(1),r("div",{staticClass:"col"},[r("datetime",{attrs:{id:"startTime",format:"MM/DD/YYYY H:i"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}})],1),r("div",{staticClass:"col"},[r("datetime",{attrs:{id:"endTime",format:"MM/DD/YYYY H:i"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1)]),r("br"),r("b-button",{staticClass:"btn btn-primary mx-auto col-md-4",attrs:{type:"button",variant:"primary"},on:{click:t.doFilter}},[t._v("Filter")])],1),r("br"),r("label",{staticStyle:{float:"left"}},[t._v("Total measurements: "),r("b",[t._v(t._s(t.NumberOfResults))])]),r("br"),t.showSpo2?r("div",[r("table",{staticClass:"table"},[t._m(2),r("tbody",t._l(t.results,(function(e,s){return r("tr",{key:s},[r("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),r("td",[t._v(t._s(e.spo2))]),r("td",[t._v(t._s(e.pulse))]),r("td",[t._v(t._s(t.formatTime(e.createdAt)))])])})),0)])]):t._e(),t.showBp?r("div",[r("table",{staticClass:"table"},[t._m(3),r("tbody",t._l(t.results,(function(e,s){return r("tr",{key:s},[r("th",{attrs:{scope:"row"}},[t._v(t._s(s+1))]),r("td",[t._v(t._s(e.systolic))]),r("td",[t._v(t._s(e.diastolic))]),r("td",[t._v(t._s(e.pulse))]),r("td",[t._v(t._s(t.formatTime(e.createdAt)))])])})),0)])]):t._e()])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("label",[t._v("Sensor: ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col"},[r("label",[t._v("Time: ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("SPO2")]),r("th",{attrs:{scope:"col"}},[t._v("Pulse")]),r("th",{attrs:{scope:"col"}},[t._v("Time")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{attrs:{scope:"col"}},[t._v("#")]),r("th",{attrs:{scope:"col"}},[t._v("Systolic")]),r("th",{attrs:{scope:"col"}},[t._v("Diastolic")]),r("th",{attrs:{scope:"col"}},[t._v("Pulse")]),r("th",{attrs:{scope:"col"}},[t._v("Time")])])])}],h=(r("96cf"),r("1da1")),v=r("bc3a"),m=r.n(v);m.a.defaults.baseURL="/";var _={getFilteredResult:function(t){return m.a.get("api/get-filtered-results",{params:t})},getSpo2Data:function(){return m.a.get("api/spo2/get-sensor-results")},getBloodpressureData:function(){return m.a.get("api/bp/get-sensor-results")}},b=r("7891"),g={components:{datetime:b["a"]},data:function(){return{results:[],NumberOfResults:0,pickedSensor:"spo2",showSpo2:!0,showBp:!1,startTime:null,endTime:null,start:0,error:null}},methods:{formatTime:function(t){var e=new Date(t);return e.toLocaleDateString()+" "+e.toLocaleTimeString()},doFilter:function(){var t=this,e={start:this.start};null==this.startTime&&(this.startTime=new Date("1980-01-01T00:00:00")),null==this.endTime&&(this.endTime=new Date),e["from"]=this.startTime,e["to"]=this.endTime,e["sensor"]=this.pickedSensor,this.$router.push({query:e}).catch((function(e){t.error=e,console.log(t.results)})),location.reload()}},created:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:_.getFilteredResult(t.$route.query).then((function(e){console.log(e),t.results=e.data.results,t.NumberOfResults=t.results.length,"bp"==e.data.sensor?(t.showBp=!0,t.showSpo2=!1):"spo2"==e.data.sensor&&(t.showBp=!1,t.showSpo2=!0),console.log(t.results)})).catch((function(t){return console.log(t)}));case 1:case"end":return e.stop()}}),e)})))()}},w=g,y=(r("a667"),Object(c["a"])(w,p,f,!1,null,"5c83edc3",null)),S=y.exports,T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"centerDiv"},[r("h1",[t._v("BMI Calculator")]),r("br"),r("h3",[t._v("First we need your height: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],domProps:{value:t.height},on:{change:function(e){return t.calculateBMI()},input:function(e){e.target.composing||(t.height=e.target.value)}}}),r("br"),r("h3",[t._v("Now step on the scale")]),r("br"),r("p",[t._v("weight: "+t._s(t.weight))]),r("p",[t._v("BMI: "+t._s(t.BMI))])])},k=[],O={data:function(){return{height:0,weight:80,BMI:0}},methods:{calculateBMI:function(){this.BMI=Math.floor(this.weight/Math.pow(this.height/100,2))}}},M=O,x=(r("db08"),Object(c["a"])(M,T,k,!1,null,"3950de7c",null)),C=x.exports;s["default"].use(d["a"]);var P=new d["a"]({mode:"history",routes:[{path:"/",name:"Home",component:S},{path:"/scale",name:"Scale",component:C}]}),j=P,B=r("5f5b");s["default"].use(B["a"]),s["default"].config.productionTip=!1,new s["default"]({el:"#app",router:j,render:function(t){return t(u)}})},"7bd9":function(t,e,r){},"85ec":function(t,e,r){},"96c7":function(t,e,r){},a667:function(t,e,r){"use strict";var s=r("96c7"),n=r.n(s);n.a},db08:function(t,e,r){"use strict";var s=r("7bd9"),n=r.n(s);n.a}});
//# sourceMappingURL=app.5cb3693c.js.map