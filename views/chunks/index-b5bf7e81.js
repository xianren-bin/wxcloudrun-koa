import{u as x}from"./index-e37b0f9a.js";import"../index-eb0c0c80.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./index-7154c37a.js";import"./lodash-3ef7b69b.js";const P=Vue.defineComponent({__name:"index",props:{lyrow:{},lyrows:{},webformId:{},pageId:{}},setup(V,{expose:c}){const i=V,{insidevalue:o,eventFun:m,RequestData:d,layer:l}=x(i),a=Vue.computed({get(){return o.value?o.value.split(","):[]},set(e){o.value=e.join(",")}});let n=Vue.ref([]);return c({initial:async()=>{const e=await d();n.value=e.data},setVal:async e=>{o.value=e}}),(e,u)=>{const f=Vue.resolveComponent("el-checkbox"),v=Vue.resolveComponent("el-checkbox-group"),_=Vue.resolveComponent("el-form-item");return Vue.openBlock(),Vue.createBlock(_,{label:e.lyrow.name},{default:Vue.withCtx(()=>[Vue.createVNode(v,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=t=>a.value=t),onChange:u[1]||(u[1]=t=>Vue.unref(m)("change"))},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(Vue.unref(n),t=>{var r,s;return Vue.openBlock(),Vue.createBlock(f,{label:t[(r=Vue.unref(l).data)==null?void 0:r.defaultProps.value],value:t[(s=Vue.unref(l).data)==null?void 0:s.defaultProps.value]},{default:Vue.withCtx(()=>{var p;return[Vue.createTextVNode(Vue.toDisplayString(t[(p=Vue.unref(l).data)==null?void 0:p.defaultProps.label]),1)]}),_:2},1032,["label","value"])}),256))]),_:1},8,["modelValue"])]),_:1},8,["label"])}}});export{P as default};