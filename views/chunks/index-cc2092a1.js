import{t as m}from"./method1-ab6822cd.js";import{l as p}from"./mixins-bd2b1c16.js";import{_ as d}from"../index-eb0c0c80.js";import"./index-7154c37a.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";const l={name:"ChartBarStackedColumn",mixins:[p],props:{layer:Object},data(){return{data:[]}},created(){this.$parent.uiVue=this},computed:{optionsa(){let t=JSON.parse(JSON.stringify(this.layer.option)),i=this.layer.data.xParams||{},r=this.layer.data.yParams||[];const[o,e]=m(this.data,i,r);t.xAxis.data=o.data;const n=JSON.stringify(t.series[0]),s=[];for(let a in e)t.series[a]||t.series.splice(a,0,JSON.parse(n)),t.series[a].data=e[a].data,t.series[a].name=e[a].name||"",s.push(e[a].name||"");return t.legend.data=s,t}},methods:{initial(){return new Promise((t,i)=>{this.RequestData(this.layer.data).then(r=>{this.data=r.data,t()})})},getVal(){return this.insidevalue},setVal(t){this.insidevalue=t},resizeCharts(){this.$refs.myVChart.resize()}}};function c(t,i,r,o,e,n){const s=Vue.resolveComponent("v-chart");return Vue.openBlock(),Vue.createBlock(s,{ref:"myVChart",key:t.key,option:n.optionsa,onClick:t.chartClick},null,8,["option","onClick"])}const k=d(l,[["render",c]]);export{k as default};
