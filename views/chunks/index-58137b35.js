import{u as i,l as m}from"./index-e37b0f9a.js";import{_ as c}from"../index-eb0c0c80.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./index-7154c37a.js";import"./lodash-3ef7b69b.js";const _=Vue.defineComponent({__name:"index",props:{lyrow:{},lyrows:{},webformId:{},pageId:{}},setup(t,{expose:l}){const r=t,{insidevalue:o,lyrow:a,webformId:u,pageId:s}=i(r);return o.value="index1",l({initial:async()=>{}}),(f,n)=>{const p=Vue.resolveComponent("el-tab-pane"),d=Vue.resolveComponent("el-tabs");return Vue.openBlock(),Vue.createBlock(d,{class:"tabs-component",modelValue:Vue.unref(o),"onUpdate:modelValue":n[0]||(n[0]=e=>Vue.isRef(o)?o.value=e:null),style:{margin:"8px"}},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(a).lyrows,e=>(Vue.openBlock(),Vue.createBlock(p,{key:e.id,name:e.id,label:e.name},{default:Vue.withCtx(()=>[Vue.createVNode(m,{class:"designer-row",lyrow:e,lyrows:e.lyrows,style:{"min-height":"200px",overflow:"auto","padding-top":"8px"},webformId:Vue.unref(u),pageId:Vue.unref(s)},null,8,["lyrow","lyrows","webformId","pageId"])]),_:2},1032,["name","label"]))),128))]),_:1},8,["modelValue"])}}});const I=c(_,[["__scopeId","data-v-0bdb73c8"]]);export{I as default};
