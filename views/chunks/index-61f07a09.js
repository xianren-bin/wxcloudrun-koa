import{E as p}from"./EventConfig-73988d71.js";import{u as c}from"./basicshook-54cecde5.js";import{U as i}from"./data-114be191.js";import{_}from"./labelConfig.vue_vue_type_script_setup_true_lang-ff3b072d.js";import"../index-eb0c0c80.js";import"./index-7154c37a.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";import"./method1-ab6822cd.js";import"./ExecuteEditor-c9d8f81b.js";import"./theme-clouds_midnight-115bd544.js";const f={class:"config-box"},v=Vue.defineComponent({__name:"data",props:{data:{}},setup(d){const t=Vue.ref([]);return(o,l)=>{const u=Vue.resolveComponent("el-option"),r=Vue.resolveComponent("el-select"),a=Vue.resolveComponent("el-form-item");return Vue.openBlock(),Vue.createElementBlock("div",f,[Vue.createVNode(a,{label:"label值"},{default:Vue.withCtx(()=>[Vue.createVNode(r,{modelValue:o.data.defaultProps.label,"onUpdate:modelValue":l[0]||(l[0]=e=>o.data.defaultProps.label=e),placeholder:"请选择",style:{width:"100%"}},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.value,e=>(Vue.openBlock(),Vue.createBlock(u,{key:e,value:e,label:e},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(a,{label:"value值"},{default:Vue.withCtx(()=>[Vue.createVNode(r,{modelValue:o.data.defaultProps.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.data.defaultProps.value=e),placeholder:"请选择",style:{width:"100%"}},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(t.value,e=>(Vue.openBlock(),Vue.createBlock(u,{key:e,value:e,label:e},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(i,{modelValue:t.value,"onUpdate:modelValue":l[2]||(l[2]=e=>t.value=e),data:o.data},null,8,["modelValue","data"])])}}}),b=Vue.createElementVNode("i",{class:"header-icon el-icon-s-operation"},null,-1),L=Vue.defineComponent({__name:"index",setup(d){const{layer:t,designerData:o}=c(),l=Vue.ref(["1","2","3"]),u=Vue.ref("basics");return(r,a)=>{const e=Vue.resolveComponent("el-collapse-item"),m=Vue.resolveComponent("el-collapse"),n=Vue.resolveComponent("el-tab-pane"),s=Vue.resolveComponent("el-tabs");return Vue.openBlock(),Vue.createBlock(s,{modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=V=>u.value=V),stretch:!0},{default:Vue.withCtx(()=>[Vue.createVNode(n,{label:"基础",name:"basics"},{default:Vue.withCtx(()=>[Vue.createVNode(m,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=V=>l.value=V)},{default:Vue.withCtx(()=>[Vue.createVNode(e,{name:"1"},{title:Vue.withCtx(()=>[b,Vue.createTextVNode("标题样式 ")]),default:Vue.withCtx(()=>[Vue.createVNode(_,{layer:Vue.unref(t)},null,8,["layer"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(n,{label:"数据",name:"data"},{default:Vue.withCtx(()=>[Vue.createVNode(v,{data:Vue.unref(t).data},null,8,["data"])]),_:1}),Vue.createVNode(n,{label:"事件",name:"event"},{default:Vue.withCtx(()=>[Vue.createVNode(p,{layer:Vue.unref(t)},null,8,["layer"])]),_:1}),Vue.createVNode(n,{label:"样式",name:"style"}),Vue.createVNode(n,{label:"验证",name:"verification"})]),_:1},8,["modelValue"])}}});export{L as default};