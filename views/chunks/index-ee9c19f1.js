import{_ as p}from"./animationConfig.vue_vue_type_script_setup_true_lang-30f41459.js";import{E as b}from"./EventConfig-73988d71.js";import{U as g}from"./data-022c5a8b.js";import{_ as f}from"../index-eb0c0c80.js";import{e as S}from"./echartsmixins-af97366d.js";import"./index-7154c37a.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";import"./method1-ab6822cd.js";import"./ExecuteEditor-c9d8f81b.js";import"./theme-clouds_midnight-115bd544.js";const E={name:"configData",components:{UtilData:g},props:{data:Object},data(){return{}},created(){},computed:{},methods:{}},U={class:"config-box"};function k(r,l,t,N,m,y){const V=Vue.resolveComponent("UtilData");return Vue.openBlock(),Vue.createElementBlock("div",U,[Vue.createVNode(V,{data:t.data},null,8,["data"])])}const B=f(E,[["render",k]]),A={name:"componentHyperlink",mixins:[S],components:{AnimationConfig:p,DataConfig:B,EventConfig:b},props:{layer:Object},data(){return{activeName:["1","2","3"],activeName1:"basics",value:!0}},created(){},computed:{},watch:{"layer.mouseoverBackgroundColor":{handler(r){}}},methods:{changeAttr(r,l,t){t||(t=this),this.$set(t,r,l)}}},D=Vue.createElementVNode("i",{class:"header-icon el-icon-s-operation"},null,-1),O={style:{float:"left"}},F=Vue.createElementVNode("div",{class:"form-item-tips"},"左(px)",-1),W=Vue.createElementVNode("div",{class:"form-item-tips"},"右(px)",-1),L={style:{float:"left"}},R=Vue.createElementVNode("div",{class:"form-item-tips"},"边框宽度(px)",-1),T=Vue.createElementVNode("div",{class:"form-item-tips"},"样式",-1),z=Vue.createElementVNode("div",{class:"form-item-tips"},"圆角(px)",-1),H=Vue.createElementVNode("div",{class:"form-item-tips"},"边框颜色",-1),M={style:{float:"left"}},j={style:{float:"left"}},q=Vue.createElementVNode("div",{class:"form-item-tips"},"字体",-1),G=Vue.createElementVNode("div",{class:"form-item-tips"},"字体粗细",-1),I=Vue.createElementVNode("div",{class:"form-item-tips"},"大小(px)",-1),J=Vue.createElementVNode("div",{class:"form-item-tips"},"对齐方式",-1),K=Vue.createElementVNode("div",{class:"form-item-tips"},"文字颜色",-1),P=Vue.createElementVNode("div",{class:"form-item-tips"},"下划线",-1),Q={style:{float:"left"}},X=Vue.createElementVNode("i",{class:"header-icon el-icon-s-operation"},null,-1),Y={style:{float:"left"}},Z={style:{float:"left"}},$={style:{float:"left"}},ee={style:{float:"left"}},te=Vue.createElementVNode("i",{class:"header-icon el-icon-s-operation"},null,-1);function le(r,l,t,N,m,y){const V=Vue.resolveComponent("el-input-number"),a=Vue.resolveComponent("el-col"),u=Vue.resolveComponent("el-row"),d=Vue.resolveComponent("el-form-item"),o=Vue.resolveComponent("el-option"),n=Vue.resolveComponent("el-select"),i=Vue.resolveComponent("el-color-picker"),_=Vue.resolveComponent("el-switch"),s=Vue.resolveComponent("el-collapse-item"),x=Vue.resolveComponent("AnimationConfig"),C=Vue.resolveComponent("el-collapse"),c=Vue.resolveComponent("el-tab-pane"),h=Vue.resolveComponent("DataConfig"),v=Vue.resolveComponent("EventConfig"),w=Vue.resolveComponent("el-tabs");return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createVNode(w,{modelValue:m.activeName1,"onUpdate:modelValue":l[21]||(l[21]=e=>m.activeName1=e),stretch:!0},{default:Vue.withCtx(()=>[Vue.createVNode(c,{label:"文本",name:"basics"},{default:Vue.withCtx(()=>[Vue.createVNode(C,{modelValue:m.activeName,"onUpdate:modelValue":l[20]||(l[20]=e=>m.activeName=e)},{default:Vue.withCtx(()=>[Vue.createVNode(s,{name:"1"},{title:Vue.withCtx(()=>[D,Vue.createTextVNode("文本样式 ")]),default:Vue.withCtx(()=>[Vue.createVNode(d,{label:"内边距"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",O,[Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(V,{"controls-position":"right","step-strictly":!0,step:1,style:{width:"100%"},min:1,modelValue:t.layer.borderStyle.paddingLeft,"onUpdate:modelValue":l[0]||(l[0]=e=>t.layer.borderStyle.paddingLeft=e)},null,8,["modelValue"]),F]),_:1}),Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(V,{"controls-position":"right","step-strictly":!0,step:1,style:{width:"100%"},min:1,modelValue:t.layer.borderStyle.paddingRight,"onUpdate:modelValue":l[1]||(l[1]=e=>t.layer.borderStyle.paddingRight=e)},null,8,["modelValue"]),W]),_:1})]),_:1})])]),_:1}),Vue.createVNode(d,{label:"边框"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",L,[Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(V,{"controls-position":"right",style:{width:"100%"},min:1,modelValue:t.layer.borderStyle.borderWidth,"onUpdate:modelValue":l[2]||(l[2]=e=>t.layer.borderStyle.borderWidth=e)},null,8,["modelValue"]),R]),_:1}),Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:t.layer.borderStyle["border-style"],"onUpdate:modelValue":l[3]||(l[3]=e=>t.layer.borderStyle["border-style"]=e)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{value:"solid",label:"实线"}),Vue.createVNode(o,{value:"dashed",label:"虚线"}),Vue.createVNode(o,{value:"dotted",label:"点线"}),Vue.createVNode(o,{value:"double",label:"双线"}),Vue.createVNode(o,{value:"groove",label:"凹槽边框"}),Vue.createVNode(o,{value:"ridge",label:"垄状边框"}),Vue.createVNode(o,{value:"inset",label:"inset边框"}),Vue.createVNode(o,{value:"outset",label:"outset边框"}),Vue.createVNode(o,{value:"none",label:"无边框"})]),_:1},8,["modelValue"]),T]),_:1})]),_:1}),Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(V,{"controls-position":"right","step-strictly":!0,step:1,style:{width:"100%"},min:1,modelValue:t.layer.borderStyle.borderRadius,"onUpdate:modelValue":l[4]||(l[4]=e=>t.layer.borderStyle.borderRadius=e)},null,8,["modelValue"]),z]),_:1}),Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:t.layer.borderStyle.borderColor,"onUpdate:modelValue":l[5]||(l[5]=e=>t.layer.borderStyle.borderColor=e)},null,8,["modelValue"]),H]),_:1})]),_:1})])]),_:1}),Vue.createVNode(d,{label:"启用背景"},{default:Vue.withCtx(()=>[Vue.createVNode(_,{modelValue:t.layer.textStyle.isSwitchOn,"onUpdate:modelValue":l[6]||(l[6]=e=>t.layer.textStyle.isSwitchOn=e),width:28,"inactive-color":"#999999"},null,8,["modelValue"])]),_:1}),Vue.createVNode(d,{label:"背景颜色"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",M,[Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:t.layer.textStyle.backgroundColor,"onUpdate:modelValue":l[7]||(l[7]=e=>t.layer.textStyle.backgroundColor=e),"show-alpha":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),Vue.createVNode(d,{label:"文字样式"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",j,[Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:t.layer.textStyle.fontFamily,"onUpdate:modelValue":l[8]||(l[8]=e=>t.layer.textStyle.fontFamily=e)},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(r.fontFamily,e=>(Vue.openBlock(),Vue.createBlock(o,{key:e.value,value:e.value,label:e.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),q]),_:1}),Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:t.layer.textStyle.fontWeight,"onUpdate:modelValue":l[9]||(l[9]=e=>t.layer.textStyle.fontWeight=e)},{default:Vue.withCtx(()=>[(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(r.fontWeight,e=>(Vue.openBlock(),Vue.createBlock(o,{key:e.value,value:e.value,label:e.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),G]),_:1})]),_:1}),Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(V,{"controls-position":"right","step-strictly":!0,step:1,style:{width:"100%"},min:1,modelValue:t.layer.textStyle.fontSize,"onUpdate:modelValue":l[10]||(l[10]=e=>t.layer.textStyle.fontSize=e)},null,8,["modelValue"]),I]),_:1}),Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:t.layer.textStyle.textAlign,"onUpdate:modelValue":l[11]||(l[11]=e=>t.layer.textStyle.textAlign=e)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{value:"center",label:"居中对齐"}),Vue.createVNode(o,{value:"left",label:"左对齐"}),Vue.createVNode(o,{value:"right",label:"右对齐"})]),_:1},8,["modelValue"]),J]),_:1})]),_:1}),Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:t.layer.textStyle.color,"onUpdate:modelValue":l[12]||(l[12]=e=>t.layer.textStyle.color=e)},null,8,["modelValue"]),K]),_:1}),Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(n,{modelValue:t.layer.textStyle.textAlign,"onUpdate:modelValue":l[13]||(l[13]=e=>t.layer.textStyle.textAlign=e)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{value:"center",label:"居中对齐"}),Vue.createVNode(o,{value:"left",label:"左对齐"}),Vue.createVNode(o,{value:"right",label:"右对齐"})]),_:1},8,["modelValue"]),P]),_:1})]),_:1})])]),_:1}),Vue.createVNode(d,{label:"url跳转方式"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",Q,[Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:24},{default:Vue.withCtx(()=>[Vue.createVNode(n,{style:{width:"224px"},modelValue:t.layer.data.type,"onUpdate:modelValue":l[14]||(l[14]=e=>t.layer.data.type=e)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{value:"window",label:"新窗口"}),Vue.createVNode(o,{value:"location",label:"当前页面跳转"})]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1})]),_:1}),Vue.createVNode(s,{name:"2"},{title:Vue.withCtx(()=>[X,Vue.createTextVNode("鼠标经过 ")]),default:Vue.withCtx(()=>[Vue.createVNode(d,{label:"启用背景"},{default:Vue.withCtx(()=>[Vue.createVNode(_,{modelValue:t.layer.textStyle.isSwitchOn,"onUpdate:modelValue":l[15]||(l[15]=e=>t.layer.textStyle.isSwitchOn=e),width:28,"inactive-color":"#999999"},null,8,["modelValue"])]),_:1}),Vue.createVNode(d,{label:"背景颜色"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",Y,[Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:t.layer.mouseoverBackgroundColor,"onUpdate:modelValue":l[16]||(l[16]=e=>t.layer.mouseoverBackgroundColor=e),"show-alpha":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),Vue.createVNode(d,{label:"边框颜色"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",Z,[Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:t.layer.mouseoverBorderColor,"onUpdate:modelValue":l[17]||(l[17]=e=>t.layer.mouseoverBorderColor=e),"show-alpha":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),Vue.createVNode(d,{label:"文字颜色"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",$,[Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:12},{default:Vue.withCtx(()=>[Vue.createVNode(i,{modelValue:t.layer.mouseoverColor,"onUpdate:modelValue":l[18]||(l[18]=e=>t.layer.mouseoverColor=e),"show-alpha":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1}),Vue.createVNode(d,{label:"下划线"},{default:Vue.withCtx(()=>[Vue.createElementVNode("div",ee,[Vue.createVNode(u,{gutter:4},{default:Vue.withCtx(()=>[Vue.createVNode(a,{span:24},{default:Vue.withCtx(()=>[Vue.createVNode(n,{style:{width:"224px"},modelValue:t.layer.data.type,"onUpdate:modelValue":l[19]||(l[19]=e=>t.layer.data.type=e)},{default:Vue.withCtx(()=>[Vue.createVNode(o,{value:"window",label:"新窗口"}),Vue.createVNode(o,{value:"location",label:"当前页面跳转"})]),_:1},8,["modelValue"])]),_:1})]),_:1})])]),_:1})]),_:1}),Vue.createVNode(s,{name:"3"},{title:Vue.withCtx(()=>[te,Vue.createTextVNode("动画设置 ")]),default:Vue.withCtx(()=>[Vue.createVNode(x,{layer:t.layer},null,8,["layer"])]),_:1})]),_:1},8,["modelValue"])]),_:1}),Vue.createVNode(c,{label:"数据",name:"data"},{default:Vue.withCtx(()=>[Vue.createVNode(h,{data:t.layer.data},null,8,["data"])]),_:1}),Vue.createVNode(c,{label:"交互",name:"event"},{default:Vue.withCtx(()=>[Vue.createVNode(v,{layer:t.layer},null,8,["layer"])]),_:1})]),_:1},8,["modelValue"])])}const fe=f(A,[["render",le]]);export{fe as default};