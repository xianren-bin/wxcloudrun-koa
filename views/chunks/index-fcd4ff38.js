import{_}from"./animationConfig.vue_vue_type_script_setup_true_lang-30f41459.js";import{_ as p}from"../index-eb0c0c80.js";import"./index-7154c37a.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";const f={name:"componentBorder8",components:{AnimationConfig:_},props:{layer:Object},data(){return{activeName:["1","2"]}},created(){},computed:{},methods:{changeAttr(r,t,e){e||(e=this),this.$set(e,r,t)}}},C=Vue.createElementVNode("i",{class:"header-icon el-icon-s-operation"},null,-1),N={style:{float:"left"}},h={style:{float:"left"}},x={style:{float:"left"}},w=Vue.createElementVNode("div",{class:"form-item-tips"},"大小(px)",-1),y=Vue.createElementVNode("i",{class:"header-icon el-icon-s-operation"},null,-1);function v(r,t,e,g,V,b){const a=Vue.resolveComponent("el-color-picker"),l=Vue.resolveComponent("el-col"),u=Vue.resolveComponent("el-row"),n=Vue.resolveComponent("el-form-item"),c=Vue.resolveComponent("el-switch"),i=Vue.resolveComponent("el-input-number"),d=Vue.resolveComponent("el-collapse-item"),m=Vue.resolveComponent("AnimationConfig"),s=Vue.resolveComponent("el-collapse");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(s,{modelValue:V.activeName,"onUpdate:modelValue":t[5]||(t[5]=o=>V.activeName=o)},{default:Vue.withCtx(()=>[Vue.createVNode(d,{name:"1"},{title:Vue.withCtx(()=>[C,Vue.createTextVNode("边框外观 ")]),default:Vue.withCtx(()=>[e.layer.color?(Vue.openBlock(),Vue.createBlock(n,{key:0,label:"边框颜色"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",N,[Vue.createVNode(u,{gutter:4,style:{clear:"both"}},{default:Vue.withCtx(()=>[Vue.createVNode(l,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:e.layer.color[0],"onUpdate:modelValue":t[0]||(t[0]=o=>e.layer.color[0]=o)},null,8,["modelValue"])]),_:1}),Vue.createVNode(l,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:e.layer.color[1],"onUpdate:modelValue":t[1]||(t[1]=o=>e.layer.color[1]=o)},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1})):Vue.createCommentVNode("",!0),Vue.createVNode(n,{label:"背景颜色"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",h,[Vue.createVNode(u,{gutter:4,style:{clear:"both"}},{default:Vue.withCtx(()=>[Vue.createVNode(l,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:e.layer.backgroundColor,"onUpdate:modelValue":t[2]||(t[2]=o=>e.layer.backgroundColor=o),"show-alpha":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),Vue.createVNode(n,{label:"是否翻转"},{default:Vue.withCtx(()=>[Vue.createVNode(c,{modelValue:e.layer.reverse,"onUpdate:modelValue":t[3]||(t[3]=o=>e.layer.reverse=o),width:28,"inactive-color":"#999999"},null,8,["modelValue"])]),_:1}),Vue.createVNode(n,{label:"动画时长"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",x,[Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(l,{span:24},{default:Vue.withCtx(()=>[Vue.createVNode(i,{"controls-position":"right","step-strictly":!0,step:1,style:{width:"224px"},min:1,modelValue:e.layer.dur,"onUpdate:modelValue":t[4]||(t[4]=o=>e.layer.dur=o)},null,8,["modelValue"]),w]),_:1})]),_:1})])]),_:1})]),_:1}),Vue.createVNode(d,{name:"2"},{title:Vue.withCtx(()=>[y,Vue.createTextVNode("动画设置 ")]),default:Vue.withCtx(()=>[Vue.createVNode(m,{layer:e.layer},null,8,["layer"])]),_:1})]),_:1},8,["modelValue"])])}const O=p(f,[["render",v]]);export{O as default};
