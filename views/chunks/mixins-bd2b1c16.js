import{d as l}from"./index-7154c37a.js";import{_ as n,m as o}from"../index-eb0c0c80.js";const d={name:"ChartMapBasic",props:{option:Object},data(){return{hchart:null}},mounted(){this.hchart=echarts.init(this.$refs.vueecaharts),this.hchart.setOption(this.option)},watch:{option:{handler(e){this.hchart&&this.hchart.setOption(e)},deep:!0,immediate:!0}}},u={ref:"vueecaharts",style:{height:"100%"}};function c(e,t,i,r,h,a){return Vue.openBlock(),Vue.createElementBlock("div",u,null,512)}const m=n(d,[["render",c],["__scopeId","data-v-ac09d379"]]),_={components:{"v-chart":m},props:{layer:Object,webformId:String,zoomlevel:Number,perview:Boolean,layerMap:Object,formParams:Object},data(){return{eventMap:{},insidevalue:"",key:new Date().getTime(),inside_time:null,loopTime_time:null}},created(){if(this.layer){var e=this.layer.events;for(var t in e)this.eventMap[e[t].name]=e[t]}this.layerMap[this.layer.id]=this},destroyed(){delete this.layerMap[this.layer.id]},watch:{"layer.data":{handler(e){this.initial_loading=!0,this.initial().then(()=>{this.initial_loading=!1}).catch(()=>{this.initial_loading=!1})},deep:!0,immediate:!0},"layer.style.width":{handler(e,t){e!=t&&this.updateKey()},deep:!0,immediate:!1},"layer.style.height":{handler(e,t){e!=t&&this.updateKey()},deep:!0,immediate:!1},zoomlevel:{handler(e,t){e!=t&&this.updateKey()},deep:!0,immediate:!1},insidevalue:{handler(e){this.updateVal()},deep:!0,immediate:!0}},computed:{},methods:{...o(l,["ExecuteEvent","PublicRequestData"]),initial:function(){return new Promise((e,t)=>{e()})},chartClick(){},getVal(){return this.insidevalue},setVal(e){},show(){this.$set(this.layer,"ishide",!1)},hide(){this.$set(this.layer,"ishide",!0)},toggle(){this.$set(this.layer,"ishide",!this.layer.ishide)},updateKey(){this.inside_time!==null&&clearTimeout(this.inside_time),this.inside_time=setTimeout(()=>{this.$nextTick(()=>{this.key=new Date().getTime()})},100)},updateVal(){this.formParams[this.layer.id]=this.insidevalue},eventFun(e,t,i){return new Promise((r,h)=>{if(this.executing)return!1;this.executing=!0;try{this.updateVal()}catch(s){console.log(s)}const a=this.eventMap[e];a&&this.ExecuteEvent(a,this.webformId).then(s=>{this.executing=!1,r()}).catch(s=>{this.executing=!1,h()})})},RequestData(e,t){this.loopTime_time!==null&&clearTimeout(this.loopTime_time),e.loopTime&&this.perview&&(this.loopTime_time=setTimeout(()=>{this.initial()},e.loopTime*1e3));let i=this.webformId;return this.PublicRequestData({data:e,pager:t,webformId:i})}}};export{_ as l};
