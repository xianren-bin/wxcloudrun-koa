import{E as V}from"./EventConfig-73988d71.js";import{u as m}from"./basicshook-54cecde5.js";import"../index-eb0c0c80.js";import"./index-7154c37a.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";const c=Vue.createElementVNode("i",{class:"header-icon el-icon-s-operation"},null,-1),h=Vue.defineComponent({__name:"index",setup(p){const{layer:n,designerData:i}=m(),o=Vue.ref(["1","2","3"]),l=Vue.ref("basics");return(d,e)=>{const u=Vue.resolveComponent("el-collapse-item"),r=Vue.resolveComponent("el-collapse"),a=Vue.resolveComponent("el-tab-pane"),s=Vue.resolveComponent("el-tabs");return Vue.openBlock(),Vue.createBlock(s,{modelValue:l.value,"onUpdate:modelValue":e[1]||(e[1]=t=>l.value=t),stretch:!0},{default:Vue.withCtx(()=>[Vue.createVNode(a,{label:"基础",name:"basics"},{default:Vue.withCtx(()=>[Vue.createVNode(r,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value=t)},{default:Vue.withCtx(()=>[Vue.createVNode(u,{name:"1"},{title:Vue.withCtx(()=>[c,Vue.createTextVNode("标题样式 ")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(a,{label:"事件",name:"event"},{default:Vue.withCtx(()=>[Vue.createVNode(V,{layer:Vue.unref(n)},null,8,["layer"])]),_:1})]),_:1},8,["modelValue"])}}});export{h as default};
