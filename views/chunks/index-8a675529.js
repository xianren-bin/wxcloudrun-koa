import{C as i}from"./method-240c52ff.js";import{l as o}from"./mixins-bd2b1c16.js";import{_ as a}from"../index-eb0c0c80.js";import"./index-7154c37a.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";const s={name:"componentText",mixins:[o],props:{layer:Object},data(){return{insidevalue:""}},created(){},computed:{textStyle(){let e=i(this.layer.textStyle,this.zoomlevel);return e["is-switch-on"]||delete e["background-color"],e},borderStyle(){return i(this.layer.borderStyle,this.zoomlevel)}},methods:{initial(){return new Promise((e,r)=>{this.RequestData(this.layer.data).then(t=>{this.insidevalue=t.data,e()})})},getVal(){return this.insidevalue},setVal(e){this.insidevalue=e}}},d=["innerHTML"];function y(e,r,t,u,n,l){return Vue.openBlock(),Vue.createElementBlock("div",null,[Vue.createElementVNode("div",{class:"text-container",onClick:r[0]||(r[0]=c=>e.eventFun("click")),innerHTML:n.insidevalue,style:Vue.normalizeStyle([{"line-height":t.layer.style.height*e.zoomlevel/100-(t.layer.style.border?t.layer.style.border.borderTopWidth:0)-(t.layer.style.border?t.layer.style.border.borderBottomWidth:0)+"px"},l.borderStyle,l.textStyle])},null,12,d)])}const f=a(s,[["render",y],["__scopeId","data-v-fe56a5a0"]]);export{f as default};
