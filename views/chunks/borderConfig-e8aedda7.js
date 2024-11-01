import{_ as i}from"../index-eb0c0c80.js";const m={name:"BorderConfig",props:{layer:Object},data(){return{}},created(){},computed:{},watch:{},methods:{}},b={style:{float:"left"}},y={style:{float:"left"}},s={style:{float:"left"}},c={style:{float:"left"}};function N(f,e,t,C,_,h){const r=Vue.resolveComponent("el-input-number"),d=Vue.resolveComponent("el-col"),o=Vue.resolveComponent("el-option"),a=Vue.resolveComponent("el-select"),u=Vue.resolveComponent("el-color-picker"),V=Vue.resolveComponent("el-row"),n=Vue.resolveComponent("el-form-item");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(n,{label:"上边框"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",b,[Vue.createVNode(V,{gutter:2},{default:Vue.withCtx(()=>[Vue.createVNode(d,{span:9},{default:Vue.withCtx(()=>[Vue.createVNode(r,{"controls-position":"right",style:{width:"100%"},"step-strictly":!0,step:1,min:0,modelValue:t.layer.borderStyle.borderTopWidth,"onUpdate:modelValue":e[0]||(e[0]=l=>t.layer.borderStyle.borderTopWidth=l)},null,8,["modelValue"])]),_:1}),Vue.createVNode(d,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:t.layer.borderStyle.borderTopStyle,"onUpdate:modelValue":e[1]||(e[1]=l=>t.layer.borderStyle.borderTopStyle=l)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{value:"",label:"无"}),Vue.createVNode(o,{value:"solid",label:"实线"}),Vue.createVNode(o,{value:"dashed",label:"虚线"}),Vue.createVNode(o,{value:"dotted",label:"点线"})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(d,{span:3},{default:Vue.withCtx(()=>[Vue.createVNode(u,{modelValue:t.layer.borderStyle.borderTopColor,"onUpdate:modelValue":e[2]||(e[2]=l=>t.layer.borderStyle.borderTopColor=l)},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),Vue.createVNode(n,{label:"下边框"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",y,[Vue.createVNode(V,{gutter:2},{default:Vue.withCtx(()=>[Vue.createVNode(d,{span:9},{default:Vue.withCtx(()=>[Vue.createVNode(r,{"controls-position":"right",style:{width:"100%"},"step-strictly":!0,step:1,min:0,modelValue:t.layer.borderStyle.borderBottomWidth,"onUpdate:modelValue":e[3]||(e[3]=l=>t.layer.borderStyle.borderBottomWidth=l)},null,8,["modelValue"])]),_:1}),Vue.createVNode(d,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:t.layer.borderStyle.borderBottomStyle,"onUpdate:modelValue":e[4]||(e[4]=l=>t.layer.borderStyle.borderBottomStyle=l)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{value:"",label:"无"}),Vue.createVNode(o,{value:"solid",label:"实线"}),Vue.createVNode(o,{value:"dashed",label:"虚线"}),Vue.createVNode(o,{value:"dotted",label:"点线"})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(d,{span:3},{default:Vue.withCtx(()=>[Vue.createVNode(u,{modelValue:t.layer.borderStyle.borderBottomColor,"onUpdate:modelValue":e[5]||(e[5]=l=>t.layer.borderStyle.borderBottomColor=l)},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),Vue.createVNode(n,{label:"左边框"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",s,[Vue.createVNode(V,{gutter:2},{default:Vue.withCtx(()=>[Vue.createVNode(d,{span:9},{default:Vue.withCtx(()=>[Vue.createVNode(r,{"controls-position":"right",style:{width:"100%"},"step-strictly":!0,step:1,min:0,modelValue:t.layer.borderStyle.borderLeftWidth,"onUpdate:modelValue":e[6]||(e[6]=l=>t.layer.borderStyle.borderLeftWidth=l)},null,8,["modelValue"])]),_:1}),Vue.createVNode(d,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:t.layer.borderStyle.borderLeftStyle,"onUpdate:modelValue":e[7]||(e[7]=l=>t.layer.borderStyle.borderLeftStyle=l)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{value:"",label:"无"}),Vue.createVNode(o,{value:"solid",label:"实线"}),Vue.createVNode(o,{value:"dashed",label:"虚线"}),Vue.createVNode(o,{value:"dotted",label:"点线"})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(d,{span:3},{default:Vue.withCtx(()=>[Vue.createVNode(u,{modelValue:t.layer.borderStyle.borderLeftColor,"onUpdate:modelValue":e[8]||(e[8]=l=>t.layer.borderStyle.borderLeftColor=l)},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),Vue.createVNode(n,{label:"右边框"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",c,[Vue.createVNode(V,{gutter:2},{default:Vue.withCtx(()=>[Vue.createVNode(d,{span:9},{default:Vue.withCtx(()=>[Vue.createVNode(r,{"controls-position":"right",style:{width:"100%"},"step-strictly":!0,step:1,min:0,modelValue:t.layer.borderStyle.borderRightWidth,"onUpdate:modelValue":e[9]||(e[9]=l=>t.layer.borderStyle.borderRightWidth=l)},null,8,["modelValue"])]),_:1}),Vue.createVNode(d,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(a,{modelValue:t.layer.borderStyle.borderRightStyle,"onUpdate:modelValue":e[10]||(e[10]=l=>t.layer.borderStyle.borderRightStyle=l)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{value:"",label:"无"}),Vue.createVNode(o,{value:"solid",label:"实线"}),Vue.createVNode(o,{value:"dashed",label:"虚线"}),Vue.createVNode(o,{value:"dotted",label:"点线"})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(d,{span:3},{default:Vue.withCtx(()=>[Vue.createVNode(u,{modelValue:t.layer.borderStyle.borderRightColor,"onUpdate:modelValue":e[11]||(e[11]=l=>t.layer.borderStyle.borderRightColor=l)},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1})])}const w=i(m,[["render",N]]);export{w as B};
