import{_ as i}from"./animationConfig.vue_vue_type_script_setup_true_lang-30f41459.js";import{d as s}from"./index-7154c37a.js";import{_,k as p}from"../index-eb0c0c80.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";const f={name:"componentBorder12",components:{AnimationConfig:i},props:{layer:Object},data(){return{activeName:["1","2"]}},created(){},computed:{...p(s,["predefineColors"])},methods:{changeAttr(a,o,e){e||(e=this),this.$set(e,a,o)}}},C=Vue.createElementVNode("i",{class:"header-icon el-icon-s-operation"},null,-1),N={style:{float:"left"}},h={style:{float:"left"}},x=Vue.createElementVNode("i",{class:"header-icon el-icon-s-operation"},null,-1);function y(a,o,e,w,r,v){const l=Vue.resolveComponent("el-color-picker"),n=Vue.resolveComponent("el-col"),u=Vue.resolveComponent("el-row"),V=Vue.resolveComponent("el-form-item"),c=Vue.resolveComponent("el-collapse-item"),d=Vue.resolveComponent("AnimationConfig"),m=Vue.resolveComponent("el-collapse");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(m,{modelValue:r.activeName,"onUpdate:modelValue":o[3]||(o[3]=t=>r.activeName=t)},{default:Vue.withCtx(()=>[Vue.createVNode(c,{name:"1"},{title:Vue.withCtx(()=>[C,Vue.createTextVNode("边框外观 ")]),default:Vue.withCtx(()=>[e.layer.color?(Vue.openBlock(),Vue.createBlock(V,{key:0,label:"边框颜色"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",N,[Vue.createVNode(u,{gutter:4,style:{clear:"both"}},{default:Vue.withCtx(()=>[Vue.createVNode(n,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(l,{modelValue:e.layer.color[0],"onUpdate:modelValue":o[0]||(o[0]=t=>e.layer.color[0]=t)},null,8,["modelValue"])]),_:1}),Vue.createVNode(n,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(l,{modelValue:e.layer.color[1],"onUpdate:modelValue":o[1]||(o[1]=t=>e.layer.color[1]=t)},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1})):Vue.createCommentVNode("",!0),Vue.createVNode(V,{label:"背景颜色"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",h,[Vue.createVNode(u,{gutter:4,style:{clear:"both"}},{default:Vue.withCtx(()=>[Vue.createVNode(n,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(l,{modelValue:e.layer.backgroundColor,"onUpdate:modelValue":o[2]||(o[2]=t=>e.layer.backgroundColor=t),"show-alpha":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1})]),_:1}),Vue.createVNode(c,{name:"2"},{title:Vue.withCtx(()=>[x,Vue.createTextVNode("动画设置 ")]),default:Vue.withCtx(()=>[Vue.createVNode(d,{layer:e.layer},null,8,["layer"])]),_:1})]),_:1},8,["modelValue"])])}const U=_(f,[["render",y]]);export{U as default};
