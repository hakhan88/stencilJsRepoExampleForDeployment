System.register(["./p-da6c113e.system.js"],(function(t){"use strict";var e,o;return{setters:[function(t){e=t.r;o=t.h}],execute:function(){var i=function(){function t(t,e,o){this.idFrom=t;this.idTo=e;this.text=o}t.prototype.getModel=function(){return{type:"standard.Link",source:{id:this.idFrom},target:{id:this.idTo},connector:{name:"jumpover",args:{size:10}},router:{name:"orthogonal"},labels:[{attrs:{text:{text:""+this.text}}}]}};return t}();var n=function(){function t(t,e,o,i,n){this.id=t;this.text=e;this.text2=o;this.text3=i;this.text4=n;this.fullDescriptionText=""+(this.text?this.text+"\n":"")+(this.text2?"("+this.text2+")\n":"")+(this.text3?"("+this.text3+")\n":"")+(this.text4?"("+this.text4+")\n":"")}t.prototype.getModel=function(){return{type:"standard.Rectangle",size:{width:150,height:80},angle:0,id:this.id,attrs:{body:{fill:"white",cursor:"pointer",stoke:"black"},label:{fill:"black",text:""+this.fullDescriptionText,cursor:"pointer"}}}};return t}();var r=":host{display:block}";var s=t("jointjs_graph_component",function(){function t(t){e(this,t)}t.prototype.getGraphdata=function(){return JSON.parse(this.graphdata)};t.prototype.componentDidLoad=function(){var t=this;setTimeout((function(){console.log("componentDidLoad");var e=[];t.getGraphdata().entities.map((function(t){var o=new n(t.id,t.desc,t.desc2,t.desc3,t.desc4);e.push(o.getModel())}));t.getGraphdata().links.map((function(t){var o=new i(t.from,t.to,t.desc);e.push(o.getModel())}));var o=new joint.dia.Graph;new joint.dia.Paper({el:document.querySelector("jointjs-graph-component").shadowRoot.getElementById("myholder"),model:o,width:1200,height:1200,gridSize:1,background:{color:"white"},interactive:true});o.fromJSON({cells:e});joint.layout.DirectedGraph.layout(o,{setLinkVertices:false});console.log("componentDidLoad",o);console.log("that.getGraphdata()",t.getGraphdata())}),2e3)};t.prototype.render=function(){return o("div",null,o("div",{id:"myholder"}))};return t}());s.style=r}}}));