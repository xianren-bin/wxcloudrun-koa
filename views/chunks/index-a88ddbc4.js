import{E as p}from"./EventConfig-73988d71.js";import{u as c}from"./basicshook-54cecde5.js";import{_ as i}from"./labelConfig.vue_vue_type_script_setup_true_lang-ff3b072d.js";import"../index-eb0c0c80.js";import"./index-7154c37a.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";const d=Vue.createElementVNode("i",{class:"header-icon el-icon-s-operation"},null,-1),E=Vue.defineComponent({__name:"index",setup(_){const{layer:o}=c(),a=Vue.ref(["1","2","3"]),n=Vue.ref("basics");return(f,e)=>{const u=Vue.resolveComponent("el-input"),r=Vue.resolveComponent("el-form-item"),V=Vue.resolveComponent("el-collapse-item"),m=Vue.resolveComponent("el-collapse"),l=Vue.resolveComponent("el-tab-pane"),s=Vue.resolveComponent("el-tabs");return Vue.openBlock(),Vue.createBlock(s,{modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=t=>n.value=t),stretch:!0},{default:Vue.withCtx(()=>[Vue.createVNode(l,{label:"基础",name:"basics"},{default:Vue.withCtx(()=>[Vue.createVNode(m,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=t=>a.value=t)},{default:Vue.withCtx(()=>[Vue.createVNode(V,{name:"1"},{title:Vue.withCtx(()=>[d,Vue.createTextVNode("基础配置 ")]),default:Vue.withCtx(()=>[Vue.createVNode(i,{layer:Vue.unref(o)},null,8,["layer"]),Vue.createVNode(r,{label:"内容提示"},{default:Vue.withCtx(()=>[Vue.createVNode(u,{modelValue:Vue.unref(o).placeholder,"onUpdate:modelValue":e[0]||(e[0]=t=>Vue.unref(o).placeholder=t)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(l,{label:"事件",name:"event"},{default:Vue.withCtx(()=>[Vue.createVNode(p,{layer:Vue.unref(o)},null,8,["layer"])]),_:1}),Vue.createVNode(l,{label:"样式",name:"style"}),Vue.createVNode(l,{label:"验证",name:"verification"})]),_:1},8,["modelValue"])}}});export{E as default};