import{u as p}from"./index-e37b0f9a.js";import"../index-eb0c0c80.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./index-7154c37a.js";import"./lodash-3ef7b69b.js";const s={style:{margin:"8px"}},x=Vue.defineComponent({__name:"index",props:{lyrow:{},lyrows:{},webformId:{},pageId:{}},setup(n,{expose:o}){const r=n,{eventFun:i,lyrow:e}=p(r);return o({initial:async()=>{}}),(l,t)=>{const u=Vue.resolveComponent("el-button");return Vue.openBlock(),Vue.createElementBlock("div",s,[Vue.createVNode(u,{onClick:t[0]||(t[0]=a=>Vue.unref(i)("click")),type:Vue.unref(e).btnType,icon:Vue.unref(e).icon,size:Vue.unref(e).size},{default:Vue.withCtx(()=>[Vue.createTextVNode(Vue.toDisplayString(Vue.unref(e).name),1)]),_:1},8,["type","icon","size"])])}}});export{x as default};