import{l as r}from"./mixins-bd2b1c16.js";import{_ as o}from"../index-eb0c0c80.js";import"./index-7154c37a.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";const s={name:"pond",mixins:[r],props:{layer:Object},data(){return{insidevalue:""}},created(){},computed:{config(){return JSON.parse(JSON.stringify(this.layer.dataVdata))}},watch:{},methods:{initial(){return new Promise((e,a)=>{this.RequestData(this.layer.data).then(t=>{this.layer.dataVdata.value=t.data,this.insidevalue=t.data,e()})})},getVal(){return this.insidevalue},setVal(e){this.insidevalue=e}}};function d(e,a,t,c,p,i){const n=Vue.resolveComponent("dv-percent-pond");return Vue.openBlock(),Vue.createBlock(n,{key:e.key,config:i.config,style:{width:"100%",height:"100%"}},null,8,["config"])}const y=o(s,[["render",d]]);export{y as default};
