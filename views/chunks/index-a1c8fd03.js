import{l as n}from"./mixins-bd2b1c16.js";import{_ as l}from"../index-eb0c0c80.js";import"./index-7154c37a.js";import"./method-240c52ff.js";import"./designer-215c5a37.js";import"./lodash-3ef7b69b.js";const p={name:"ChartPieNightingaleRose",mixins:[n],props:{layer:Object},data(){return{data:[]}},created(){this.$parent.uiVue=this},computed:{optionsa(){let t=JSON.parse(JSON.stringify(this.layer.option)),r=this.layer.data.xParam,e=this.layer.data.yParam,i=[],s=this.data;for(let o in s){let a=s[o];i.push({value:a[e],name:a[r]})}return t.series[0].data=i,console.log(t),t}},methods:{initial(){return new Promise((t,r)=>{this.RequestData(this.layer.data).then(e=>{this.data=e.data,t()})})},getVal(){return this.insidevalue},setVal(t){this.insidevalue=t},resizeCharts(){this.$refs.myVChart.resize()}}};function h(t,r,e,i,s,o){const a=Vue.resolveComponent("v-chart");return Vue.openBlock(),Vue.createBlock(a,{ref:"myVChart",key:t.key,option:o.optionsa,onClick:t.chartClick},null,8,["option","onClick"])}const _=l(p,[["render",h]]);export{_ as default};
