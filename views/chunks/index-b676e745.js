import{l as s}from"./mixins-bd2b1c16.js";import{C as n}from"./method-240c52ff.js";import{_ as o}from"../index-eb0c0c80.js";import"./index-7154c37a.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";const l={name:"chartBarCapsule",mixins:[s],props:{layer:Object},data(){return{insidevalue:""}},created(){},computed:{config(){return console.log(this.layer.dataVdata),JSON.parse(JSON.stringify(this.layer.dataVdata))},layerStyle(){return n(this.layer.style,this.zoomlevel)}},methods:{initial(){return new Promise((e,a)=>{this.RequestData(this.layer.data).then(t=>{this.layer.dataVdata.data=t.data,this.insidevalue=t.data,e()})})},getVal(){return this.insidevalue},setVal(e){this.insidevalue=e}}};function c(e,a,t,d,u,r){const i=Vue.resolveComponent("dv-capsule-chart");return Vue.openBlock(),Vue.createBlock(i,{key:e.key,config:r.config,style:{width:"100%",height:"100%"}},null,8,["config"])}const v=o(l,[["render",c]]);export{v as default};
