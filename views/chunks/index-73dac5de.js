import{d as z}from"./designer-215c5a37.js";import{s as x,P as B,l as D,g as S}from"./method-240c52ff.js";import{_ as I}from"./RenderLayer.vue_vue_type_script_setup_true_lang-6be9d3b8.js";import{_ as k}from"../index-eb0c0c80.js";const T=["id"],C=Vue.defineComponent({__name:"PrelayerBlock",props:{layer:{},indexnum:{},webformId:{},zoomlevel:{}},setup(V){const{layer:r,webformId:v,zoomlevel:s}=V;let m=Vue.ref(!1),f=0;const u=async()=>{await Vue.nextTick(),m.value=!0};r.animation&&r.animation.start&&(r.animation.loop&&(f=r.animation.loopTime-r.animation.time,setInterval(()=>{(f-=r.animation.time)>=0?m.value=!0:(m.value=!1,f=r.animation.loopTime)},r.animation.time*1e3)),u());const n=Vue.computed(()=>x(r.style,s)),p=Vue.computed(()=>{const o=JSON.parse(JSON.stringify(r.style));if(o.rotate="",r.animation&&r.animation.start){const l=r.animation;o.transition="all "+l.time+"s ease",l||(o.backgroundOpacity=l.opacity,o.transform="translate("+l.left+"px,"+l.top+"px) rotate("+l.rotate+"deg) scale("+l.xAmplify+","+l.yAmplify+")")}return B(o,s)});return(o,l)=>Vue.withDirectives((Vue.openBlock(),Vue.createElementBlock("div",{class:"layer-block",style:Vue.normalizeStyle(p.value),key:o.layer.id,id:o.layer.code},[Vue.createElementVNode("div",{class:"layer-content-block",style:Vue.normalizeStyle(n.value)},[Vue.createVNode(I,{layer:o.layer,zoomlevel:o.zoomlevel,webformId:o.webformId,ui:"Formcomponent_"+o.layer.type},null,8,["layer","zoomlevel","webformId","ui"])],4)],12,T)),[[Vue.vShow,!o.layer.ishide]])}});const N=k(C,[["__scopeId","data-v-fe628ee1"]]),E=Vue.defineComponent({__name:"index",props:{formid:{}},setup(V){const{formid:r}=V,v=Vue.ref(),s=Vue.ref(0),m=Vue.ref(0),f=VueRouter.useRoute(),u=Vue.reactive({pageData:{layers:[],config:{width:0,height:0}}});let n=Vue.ref(100),p=Vue.ref(1),o=Vue.ref(1),l;const h=()=>{l!==null&&clearTimeout(l),l=setTimeout(()=>{const a=u.pageData;if(a.config){var e=a.config.width,i=a.config.height,t=s.value/e,c=m.value/i,d=t>c?c:t;s.value<750&&(d=t),t>c?(p.value=s.value/(e/1*d),o.value=1):(o.value=1,p.value=1),n.value=d*100}},50)};Vue.onMounted(()=>{new ResizeObserver(e=>{s.value=e[0].contentRect.width,m.value=e[0].contentRect.height,h()}).observe(v.value),s.value=v.value.clientWidth,m.value=v.value.clientHeight,z(r||f.params.id).then(e=>{let t=e.data.pages[0];u.pageData=t,h()})});const g=a=>{if(!a)return{};if(a.indexOf("-")==-1)return{"background-color":a};var e=a.split("-"),i="linear-gradient(to bottom";for(var t in e)i+=","+e[t];return i+=")",{background:i}},_=Vue.computed(()=>"scale("+p.value+","+o.value+")"),w=Vue.computed(()=>{var i;var a=(i=u.pageData)==null?void 0:i.config,e={};return e.width=a.width/100*n.value+"px",e.height=a.height/100*n.value+"px",g(a.backgroundColor).background&&(e.background=g(a.backgroundColor).background),g(a.backgroundColor)["background-color"]&&(e["background-color"]=g(a.backgroundColor)["background-color"]),a.backgroundUrl&&(e["background-image"]="url("+a.backgroundUrl+")"),e.opacity=a.backgroundOpacity/100,e.filter="blur("+a.backgroundBlur+"px)",e["background-size"]=a.backgroundSize,e}),b=Vue.computed(()=>{var a={},e=u.pageData.config;if(e.iswatermark&&e.watermark.text){var i=e.watermark.backgroundOpacity/100,t=D(e.watermark);t.opacity=i;var c=0;t["font-size"]&&(t["font-size"]=t["font-size"]*n.value/100,c=t["font-size"],t["font-size"]),t.height&&(t.height=(t.height-1+c)*n.value/100),t.width&&(t.width=t.width*n.value/100);var d=S(e.watermark.text,t);a.width=e.width/100*n.value+"px",a.height=e.height/100*n.value+"px",a["background-image"]="url("+d+")"}return a});return(a,e)=>{var i,t,c;return Vue.openBlock(),Vue.createElementBlock("div",{ref_key:"windowdiv",ref:v,style:{position:"absolute",margin:"auto",overflow:"hidden",top:"0",bottom:"0",left:"0",right:"0"}},[Vue.createElementVNode("div",{class:"canvas",ref:"canvas",style:Vue.normalizeStyle({width:((t=(i=u.pageData)==null?void 0:i.config)==null?void 0:t.width)/100*Vue.unref(n)+"px",height:((c=u.pageData.config)==null?void 0:c.height)/100*Vue.unref(n)+"px",transform:_.value})},[Vue.createElementVNode("div",{class:"bg",style:Vue.normalizeStyle(w.value)},null,4),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(u.pageData.layers,(d,y)=>(Vue.openBlock(),Vue.createBlock(N,{ref_for:!0,ref:"layerBlock",zoomlevel:Vue.unref(n),webformId:a.formid||Vue.unref(f).params.id,key:d.id+"_"+Vue.unref(n),layer:d,indexnum:y,style:Vue.normalizeStyle({"z-index":9e3-y})},null,8,["zoomlevel","webformId","layer","indexnum","style"]))),128)),Vue.createElementVNode("div",{class:"watermark",style:Vue.normalizeStyle(b.value)},null,4)],4)],512)}}});const M=k(E,[["__scopeId","data-v-5c224e29"]]);export{M as default};
