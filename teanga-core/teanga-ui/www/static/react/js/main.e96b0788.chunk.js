(this["webpackJsonpreact-flow-101"]=this["webpackJsonpreact-flow-101"]||[]).push([[0],{53:function(e,t,a){},55:function(e,t,a){},58:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(14),c=a.n(n),s=(a(53),a(15)),o=a.n(s),d=a(29),i=a(25),l=a(47),p=a(22),u=a(5),j=a(13),b=(a(55),a(3)),h=function(e){var t=e.data;return Object(b.jsxs)("div",{className:t.selected?"flowchart-operator-new selected-node":"flowchart-operator-new",children:[Object(b.jsx)(j.c,{className:"handle-left",type:"target",position:"left"}),Object(b.jsx)("div",{className:"handle-title",children:t.label}),Object(b.jsx)(j.c,{className:"handle-right",type:"source",position:"right",style:{borderRadius:0}})]})},m=function(e){var t=e.id,a=e.sourceX,r=e.sourceY,n=e.targetX,c=e.targetY,s=e.sourcePosition,o=e.targetPosition,d=e.style,i=void 0===d?{strokeWidth:10,stroke:"rgb(92, 184, 92)"}:d,l=e.data,p=e.arrowHeadType,u=e.markerEndId,h=Object(j.f)({sourceX:a,sourceY:r,sourcePosition:s,targetX:n,targetY:c,targetPosition:o}),m=Object(j.g)(p,u);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("path",{id:t,style:i,className:"react-flow__edge-path",d:h,markerEnd:m}),Object(b.jsx)("text",{children:Object(b.jsx)("textPath",{href:"#".concat(t),style:{fontSize:"12px"},startOffset:"50%",textAnchor:"middle",children:l.text})})]})},O=a(90),f=a(91);a(57);var y=function(e){var t=e.name,a=(e.key,e.selected),r=e.dispatch;return Object(b.jsx)(O.a,{border:a?"danger":"primary",style:{marginLeft:"0.5vw",marginRight:"0.5vw",width:"15vw",borderRadius:"10px"},children:Object(b.jsxs)(O.a.Body,{children:[Object(b.jsx)(O.a.Title,{style:{maxWidth:"90%",fontSize:"10px"},children:t}),Object(b.jsx)(f.a,{variant:"primary",size:"sm",style:{maxWidth:"90%",fontSize:"10px"},onClick:function(){r({type:U.ADD_NODE,payload:{name:t}})},children:"Add to Workflow"})]})})},x=a(41),g=a.n(x),E=a(88),v=a(42),_=a(87);a(58);var w=function(e){var t=e.services,a=e.input,n=e.dispatch,c=Object(r.useState)(t[0].name),s=Object(i.a)(c,2),o=s[0],d=s[1],l=function(e){var t=e.text,a=e.selected;return Object(b.jsx)(y,{name:t,className:"menu-item",selected:a,dispatch:n},t)},p=function(e){var t=e.text,a=e.className;return Object(b.jsx)("div",{style:{border:"2px solid black"},className:a,children:t})},u=p({text:"<",className:"arrow-prev"}),j=p({text:">",className:"arrow-next"}),h=function(e,t){return e.filter((function(e){return e.name.includes(a)})).map((function(e){var a=e.name;return Object(b.jsx)(l,{text:a,selected:t},a)}))}(t,o);return Object(b.jsxs)(_.a,{children:[Object(b.jsxs)(E.a,{size:"sm",className:"mb-3",children:[Object(b.jsx)(E.a.Prepend,{children:Object(b.jsx)(E.a.Text,{id:"inputGroup-sizing-sm",children:"Search : "})}),Object(b.jsx)(v.a,{className:"searchbar-input","aria-label":"Small","aria-describedby":"inputGroup-sizing-sm",type:"text",value:a,onChange:function(e){return n({type:U.UPDATE_INPUT,payload:{input:e.target.value}})}})]}),Object(b.jsx)(g.a,{style:{width:"100%"},data:h,arrowLeft:u,arrowRight:j,selected:o,onSelect:function(e){d(e)}})]})},k=a(89),C=a(20);var N=function(e){var t=e.node,a=(e.selectedPath,e.paths),r=e.methods,n=e.parameters,c=e.requestBody,s=e.dispatch;if(c)var o=Object.keys(c.content).map((function(e){return Object(b.jsx)("option",{children:e})}));else o=[];return Object(b.jsxs)("div",{style:{position:"fixed",top:"50px",left:"0",height:"100%",width:"30%",zIndex:999,border:"2px solid black",background:"white",overflowY:"auto"},children:[Object(b.jsxs)("h3",{children:[" ",t.data.label," "]}),Object(b.jsx)(f.a,{variant:"primary",type:"submit",style:{marginTop:"-70px",marginLeft:"100%"},onClick:function(){return s({type:U.UNSELECT_NODE,payload:{id:t.id}})},children:Object(b.jsx)(C.a,{})}),Object(b.jsxs)(k.a,{children:[Object(b.jsxs)(k.a.Group,{className:"service-leftbar-group",controlId:"exampleForm.ControlSelect1",children:[Object(b.jsx)(k.a.Label,{children:"Select an Endpoint"}),Object(b.jsx)(k.a.Control,{as:"select",defaultValue:t.workflow.selectedPath,onChange:function(e){return s({type:U.SELECT_FORM_VALUE,payload:{field:"selectedPath",value:e.target.value}})},children:a.map((function(e){return Object(b.jsx)("option",{children:e})}))})]}),Object(b.jsxs)(k.a.Group,{className:"service-leftbar-group",controlId:"exampleForm.ControlSelect2",children:[Object(b.jsx)(k.a.Label,{children:"Select an Request method"}),Object(b.jsx)(k.a.Control,{as:"select",defaultValue:t.workflow.selectedMethod,onChange:function(e){return s({type:U.SELECT_FORM_VALUE,payload:{field:"requestBody",value:e.target.value}})},children:r.map((function(e){return Object(b.jsx)("option",{children:e})}))})]}),c?Object(b.jsxs)(k.a.Group,{className:"service-leftbar-group",controlId:"exampleForm.ControlSelect2",children:[Object(b.jsx)(k.a.Label,{children:"Select a Request Body "}),Object(b.jsx)(k.a.Control,{as:"select",onChange:function(e){return s({type:U.SELECT_FORM_VALUE,payload:{field:"selectedMethod",value:e.target.value}})},children:o})]}):"",Object(b.jsx)("h3",{children:" Parameters "}),Object(b.jsx)(k.a.Group,{className:"service-leftbar-group",children:n.map((function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(k.a.Label,{children:[e.name," (",e.required?"required":"optional",") "]}),Object(b.jsx)(k.a.Control,{type:"text",defaultValue:t.workflow[e.name]?t.workflow[e.name]:"Enter parameter value",placeholder:"Enter parameter value",onChange:function(t){return s({type:U.SELECT_FORM_VALUE,payload:{field:e.name,value:t.target.value}})}})]})}))})]}),Object(b.jsx)(f.a,{className:"service-leftbar-button",variant:"primary",type:"submit",style:{marginBottom:"100px"},onClick:function(e){return s({type:U.UNSELECT_NODE,payload:{id:t.id}})},children:"Save Inputs"})]})};var S=function(e){var t=e.edge,a=e.operators,r=e.dispatch;return Object(b.jsxs)("div",{style:{position:"fixed",top:"70px",left:"0",height:"100%",width:"30%",zIndex:999,border:"2px solid black",background:"white",overflowY:"auto"},children:[Object(b.jsxs)("h3",{children:[" ",t.data.text," "]}),Object(b.jsx)(k.a,{children:Object(b.jsxs)(k.a.Group,{className:"service-leftbar-group",controlId:"exampleForm.ControlSelect1",children:[Object(b.jsx)(k.a.Label,{children:"Select an Endpoint"}),Object(b.jsx)(k.a.Control,{as:"select",children:a.map((function(e){return Object(b.jsx)("option",{children:e})}))})]})}),Object(b.jsx)(f.a,{className:"service-leftbar-button",variant:"primary",type:"submit",style:{marginBottom:"100px"},onClick:function(e){return r({type:U.UNSELECT_EDGE,payload:{id:t.id}})},children:"Save Inputs"})]})},L=a(30);var T=function(){return Object(b.jsx)(L.a,{bg:"dark",variant:"dark",fixed:"top",expand:"lg",style:{height:"50px"},children:Object(b.jsx)(L.a.Brand,{href:"#home",children:Object(b.jsxs)("a",{class:"navbar-brand",style:{position:"fixed",left:"5%",marginTop:"-25px"},href:"../platform",children:[Object(b.jsx)("img",{class:"pull-left",src:"/static/images/teanga-logo-white.svg",height:"40"})," \xa0",Object(b.jsx)("span",{class:"name",children:Object(b.jsx)("span",{class:"beta",children:"MVP"})})]})})})},D=a(45),P=a(46),I=a.n(P),M={teangaNode:h},A={teangaEdge:m},R={node_count:0,input:"",selected_nodeId:"",selected_edgeId:"",selectedPath:"",selectedMethod:"",methods:[],paths:[],requestBody:{},services:[{name:"dummy teanga",url:"https://raw.githubusercontent.com/berstearns/personal/main/dummy.yaml",repo:"berstearns",image_id:"dummy_teanga_service",image_tag:"042021",host_port:8001,container_port:8080},{name:"dkpro",url:"https://raw.githubusercontent.com/berstearns/personal/main/dkpro.yaml",repo:"berstearns",image_id:"teanga-dkpro-wrapper",image_tag:"latest",host_port:8001,container_port:8080},{name:"naisc",url:"https://raw.githubusercontent.com/berstearns/personal/main/naisc.yaml",repo:"berstearns",image_id:"naisc",image_tag:"latest",host_port:8001,container_port:8080}],operators:["wait","pass","forEach"],elements:[]},U={SET_OPENAPI:"set-openapi",CREATE_WORKFLOW:"create-workflow",UPDATE_INPUT:"update-input",ADD_NODE:"add-node",ADD_EDGE:"add-edge",SELECT_NODE:"select-node",UNSELECT_NODE:"unselect-node",SELECT_EDGE:"select-edge",REMOVE_SELECTED_NODE:"remove-selected-node",SELECT_FORM_VALUE:"select-form-value"};function F(e,t){switch(t.type){case U.SET_OPENAPI:return Object(u.a)(Object(u.a)({},e),{},{services:e.services.map((function(e,a){return Object(u.a)(Object(u.a)({},e),{},{openapi:t.payload.openapi_yamls[a]})}))});case U.CREATE_WORKFLOW:console.log("state services",e.services);var a,r={},n=Object(p.a)(e.elements);try{for(n.s();!(a=n.n()).done;){var c=a.value;if("teangaNode"===c.type){r.hasOwnProperty(c.id)||(r[c.id]=Object(u.a)({},c.workflow));var s,o=Object(p.a)(e.elements);try{for(o.s();!(s=o.n()).done;){var d=s.value;"teangaEdge"===d.type&&d.target===c.id&&(r[c.id].dependencies=[].concat(Object(l.a)(r[c.id].dependencies),[d]))}}catch(S){o.e(S)}finally{o.f()}}}}catch(S){n.e(S)}finally{n.f()}return console.log(r),I.a.post("/admin/ping",r).then((function(e){window.resp=e})).catch((function(e){alert("creation failed :(")})),Object(u.a)({},e);case U.UPDATE_INPUT:return Object(u.a)(Object(u.a)({},e),{},{input:t.payload.input});case U.ADD_NODE:var b=e.services.filter((function(e){return e.name===t.payload.name}))[0],h=b.openapi;console.log(b);var m=(k=Object.keys(h.paths).map((function(e){return e})))[0],O=(C=Object.keys(h.paths[m]))[0],f=h.paths[m][O].parameters,y=h.paths[m][O].requestBody,x=h.paths[m][O].operationId,g={id:(e.node_count+1).toString(),type:"teangaNode",data:{label:t.payload.name,selected:!1,openapi:h},workflow:{selectedPath:m,selectedMethod:O,operationId:x,repo:b.repo,image_id:b.image_id,image_tag:b.image_tag,host_port:b.host_port,container_port:b.container_port,input:{}},position:{x:50,y:50}};return Object(u.a)(Object(u.a)({},e),{},{node_count:e.node_count+1,elements:e.elements.concat(g)});case U.ADD_EDGE:var E=Object(j.d)(t.payload.params,e.elements),v=Object(i.a)(E,3),_=(v[0],v[1],v[2]);return Object(u.a)(Object(u.a)({},e),{},{elements:e.elements.concat(_)});case U.SELECT_EDGE:return Object(u.a)(Object(u.a)({},e),{},{selected_edgeId:t.payload.id,elements:e.elements.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)(Object(u.a)({},e.data),{},{selected:!e.data.selected})}):Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)(Object(u.a)({},e.data),{},{selected:!1})})}))});case U.UNSELECT_EDGE:return Object(u.a)(Object(u.a)({},e),{},{selected_edgeId:"",elements:e.elements.map((function(e){return e.id,t.payload.id,Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)(Object(u.a)({},e.data),{},{selected:!1})})}))});case U.SELECT_NODE:if(""!==(N=e.selected_nodeId==t.payload.id?"":t.payload.id)){var w=e.elements.filter((function(e){return e.id===N}))[0],k=Object.keys(w.data.openapi.paths).map((function(e){return e})),C=(m=w.workflow.selectedPath,Object.keys(w.data.openapi.paths[m]));O=w.workflow.selectedMethod,f=w.data.openapi.paths[m][O].parameters,y=w.data.openapi.paths[m][O].requestBody?w.data.openapi.paths[m][O].requestBody:""}else k=[],m="",C=[],O="",f=[],y={};return Object(u.a)(Object(u.a)({},e),{},{selected_nodeId:N,selectedPath:m,methods:C,selectedMethod:O,paths:k,parameters:f,requestBody:y,elements:e.elements.map((function(e){return e.id===t.payload.id?Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)(Object(u.a)({},e.data),{},{selected:!e.data.selected})}):Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)(Object(u.a)({},e.data),{},{selected:!1})})}))});case U.UNSELECT_NODE:return Object(u.a)(Object(u.a)({},e),{},{selected_nodeId:"",selectedPath:"",selectedMethod:"",methods:[],paths:[],elements:e.elements.map((function(e){return e.id,t.payload.id,Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)(Object(u.a)({},e.data),{},{selected:!1})})}))});case U.REMOVE_SELECTED_NODE:return Object(u.a)(Object(u.a)({},e),{},{selected_nodeId:"",elements:e.elements.filter((function(e){return e.id!==t.payload.id&&(e.source!==t.payload.id&&e.target!==t.payload.id)}))});case U.SELECT_FORM_VALUE:var N=e.selected_nodeId;g=e.elements.filter((function(e){return e.id===N}))[0],k=Object.keys(g.data.openapi.paths).map((function(e){return e})),m="selectedPath"==t.payload.field?t.payload.value:e.selectedPath,C=Object.keys(g.data.openapi.paths[m]);if("selectedMethod"==t.payload.field)O=t.payload.value;else if(-1!==C.indexOf(e.selectedMethod))O=e.selectedMethod;else O=C[0];f=g.data.openapi.paths[m][O].parameters;if(-1===["selectedPath","selectedMethod"].indexOf(t.payload.field))g.workflow.input[t.payload.field]=t.payload.value;else{x=h.paths[m][O].operationId;g.workflow=Object(u.a)(Object(u.a)({},g.workflow),{},{selectedPath:m,selectedMethod:O,operationId:x})}return console.log(g),Object(u.a)(Object(u.a)({},e),{},{elements:e.elements.map((function(e){return e.id===N?g:e})),selectedPath:m,methods:C,selectedMethod:O,parameters:f});default:return e}}var B=function(){var e=Object(r.useReducer)(F,R),t=Object(i.a)(e,2),a=t[0],n=t[1];return Object(r.useEffect)(Object(d.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.services.map(function(){var e=Object(d.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t.url).then((function(e){return e.text()}));case 2:return a=e.sent,r=Object(D.parse)(a),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(t);case 3:r=e.sent,n({type:U.SET_OPENAPI,payload:{openapi_yamls:r}});case 5:case"end":return e.stop()}}),e)}))),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T,{}),Object(b.jsxs)("div",{style:{width:"100%"},children:[Object(b.jsx)("h3",{style:{display:"inline-block","margin-left":"5%","margin-top":"5%"},children:" Build a workflow from the Flow Diagram "}),Object(b.jsx)(f.a,{variant:"primary",size:"lg",style:{maxWidth:"90%",fontSize:"10px",marginLeft:"30%"},onClick:function(){n({type:U.CREATE_WORKFLOW,payload:{}})},children:"Create Workflow"})]}),a.selected_nodeId?Object(b.jsx)(N,{node:a.elements.filter((function(e){return e.id===a.selected_nodeId}))[0],dispatch:n,selectedPath:a.selectedPath,paths:a.paths,methods:a.methods,selectedMethod:a.selectedMethod,parameters:a.parameters,requestBody:a.requestBody}):"",a.selected_edgeId?Object(b.jsx)(S,{edge:a.elements.filter((function(e){return e.id===a.selected_edgeId}))[0],operators:a.operators,dispatch:n}):"",Object(b.jsxs)("div",{style:{background:"white",border:"2px solid black",padding:"5% 5% 5% 5%",width:"90%",marginLeft:"auto",marginRight:"auto",marginTop:"3%"},children:[Object(b.jsx)(w,{services:a.services,dispatch:n,input:a.input}),Object(b.jsx)("div",{id:"chart_area",children:Object(b.jsx)(j.e,{elements:a.elements,onConnect:function(e){return n({type:U.ADD_EDGE,payload:{params:Object(u.a)(Object(u.a)({},e),{},{type:"teangaEdge",data:{text:"wait"}})}})},onElementClick:function(e,t){t.source?n({type:U.SELECT_EDGE,payload:{id:t.id}}):t.id&&n({type:U.SELECT_NODE,payload:{id:t.id}})},nodeTypes:M,edgeTypes:A,children:Object(b.jsx)(j.b,{style:{marginLeft:"95%"},children:Object(b.jsx)(j.a,{onClick:function(){return n({type:U.REMOVE_SELECTED_NODE,payload:{id:a.selected_nodeId}})},children:Object(b.jsx)(C.a,{})})})})})]})]})};c.a.render(Object(b.jsx)(B,{}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.e96b0788.chunk.js.map