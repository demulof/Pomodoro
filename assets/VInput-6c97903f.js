import{p as k,m as T,a5 as O,ah as G,C as U,v as B,D as Q,ac as j,x as A,h as r,O as W,ai as Z,aa as ee,aj as K,X as q,c as i,E as _,l as ae,q as te,ad as P,N as ne,M as le,ab as se,J,r as ue,a9 as L,u as ie,ak as re,al as oe,b as de,am as H,w as $,n as ce,I as N,H as ve}from"./index-ab613dea.js";const ge=k({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...T(),...O(),...G(),...U()},"VTable"),Ce=B()({name:"VTable",props:ge(),setup(e,s){let{slots:n}=s;const{themeClasses:a}=Q(e),{densityClasses:u}=j(e);return A(()=>r(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!n.top,"v-table--has-bottom":!!n.bottom,"v-table--hover":e.hover},a.value,u.value,e.class],style:e.style},{default:()=>{var t,l,o;return[(t=n.top)==null?void 0:t.call(n),n.default?r("div",{class:"v-table__wrapper",style:{height:W(e.height)}},[r("table",null,[n.default()])]):(l=n.wrapper)==null?void 0:l.call(n),(o=n.bottom)==null?void 0:o.call(n)]}})),{}}});const fe=k({text:String,clickable:Boolean,...T(),...U()},"VLabel"),Se=B()({name:"VLabel",props:fe(),setup(e,s){let{slots:n}=s;return A(()=>{var a;return r("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,(a=n.default)==null?void 0:a.call(n)])}),{}}});function me(e){const{t:s}=Z();function n(a){let{name:u}=a;const t={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[u],l=e[`onClick:${u}`],o=l&&t?s(`$vuetify.input.${t}`,e.label??""):void 0;return r(ee,{icon:e[`${u}Icon`],"aria-label":o,onClick:l},null)}return{InputIcon:n}}const he=k({focused:Boolean,"onUpdate:focused":_()},"focus");function $e(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K();const n=q(e,"focused"),a=i(()=>({[`${s}--focused`]:n.value}));function u(){n.value=!0}function t(){n.value=!1}return{focusClasses:a,isFocused:n,focus:u,blur:t}}const ye=k({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...T(),...ae({transition:{component:te,leaveAbsolute:!0,group:!0}})},"VMessages"),be=B()({name:"VMessages",props:ye(),setup(e,s){let{slots:n}=s;const a=i(()=>P(e.messages)),{textColorClasses:u,textColorStyles:t}=ne(i(()=>e.color));return A(()=>r(le,{transition:e.transition,tag:"div",class:["v-messages",u.value,e.class],style:[t.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&a.value.map((l,o)=>r("div",{class:"v-messages__message",key:`${o}-${a.value}`},[n.message?n.message({message:l}):l]))]})),{}}}),pe=Symbol.for("vuetify:form");function Ve(){return se(pe,null)}const ke=k({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...he()},"validation");function Ie(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:K(),n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:J();const a=q(e,"modelValue"),u=i(()=>e.validationValue===void 0?a.value:e.validationValue),t=Ve(),l=ue([]),o=L(!0),M=i(()=>!!(P(a.value===""?null:a.value).length||P(u.value===""?null:u.value).length)),y=i(()=>!!(e.disabled??(t==null?void 0:t.isDisabled.value))),I=i(()=>!!(e.readonly??(t==null?void 0:t.isReadonly.value))),b=i(()=>e.errorMessages.length?P(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):l.value),m=i(()=>{let d=(e.validateOn??(t==null?void 0:t.validateOn.value))||"input";d==="lazy"&&(d="input lazy");const c=new Set((d==null?void 0:d.split(" "))??[]);return{blur:c.has("blur")||c.has("input"),input:c.has("input"),submit:c.has("submit"),lazy:c.has("lazy")}}),h=i(()=>e.error||e.errorMessages.length?!1:e.rules.length?o.value?l.value.length||m.value.lazy?null:!0:!l.value.length:!0),x=L(!1),C=i(()=>({[`${s}--error`]:h.value===!1,[`${s}--dirty`]:M.value,[`${s}--disabled`]:y.value,[`${s}--readonly`]:I.value})),p=i(()=>e.name??ie(n));re(()=>{t==null||t.register({id:p.value,validate:v,reset:S,resetValidation:V})}),oe(()=>{t==null||t.unregister(p.value)}),de(async()=>{m.value.lazy||await v(!0),t==null||t.update(p.value,h.value,b.value)}),H(()=>m.value.input,()=>{$(u,()=>{if(u.value!=null)v();else if(e.focused){const d=$(()=>e.focused,c=>{c||v(),d()})}})}),H(()=>m.value.blur,()=>{$(()=>e.focused,d=>{d||v()})}),$(h,()=>{t==null||t.update(p.value,h.value,b.value)});function S(){a.value=null,ce(V)}function V(){o.value=!0,m.value.lazy?l.value=[]:v(!0)}async function v(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const c=[];x.value=!0;for(const f of e.rules){if(c.length>=+(e.maxErrors??1))break;const g=await(typeof f=="function"?f:()=>f)(u.value);if(g!==!0){if(typeof g!="string"){console.warn(`${g} is not a valid value. Rule functions must return boolean true or a string.`);continue}c.push(g)}}return l.value=c,x.value=!1,o.value=d,l.value}return{errorMessages:b,isDirty:M,isDisabled:y,isReadonly:I,isPristine:o,isValid:h,isValidating:x,reset:S,resetValidation:V,validate:v,validationClasses:C}}const xe=k({id:String,appendIcon:N,centerAffix:{type:Boolean,default:!0},prependIcon:N,hideDetails:[Boolean,String],hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":_(),"onClick:append":_(),...T(),...O(),...ke()},"VInput"),Pe=B()({name:"VInput",props:{...xe()},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:n,slots:a,emit:u}=s;const{densityClasses:t}=j(e),{rtlClasses:l}=ve(),{InputIcon:o}=me(e),M=J(),y=i(()=>e.id||`input-${M}`),I=i(()=>`${y.value}-messages`),{errorMessages:b,isDirty:m,isDisabled:h,isReadonly:x,isPristine:C,isValid:p,isValidating:S,reset:V,resetValidation:v,validate:d,validationClasses:c}=Ie(e,"v-input",y),f=i(()=>({id:y,messagesId:I,isDirty:m,isDisabled:h,isReadonly:x,isPristine:C,isValid:p,isValidating:S,reset:V,resetValidation:v,validate:d})),D=i(()=>{var g;return(g=e.errorMessages)!=null&&g.length||!C.value&&b.value.length?b.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages});return A(()=>{var z,F,R,E;const g=!!(a.prepend||e.prependIcon),X=!!(a.append||e.appendIcon),w=D.value.length>0,Y=!e.hideDetails||e.hideDetails==="auto"&&(w||!!a.details);return r("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix},t.value,l.value,c.value,e.class],style:e.style},[g&&r("div",{key:"prepend",class:"v-input__prepend"},[(z=a.prepend)==null?void 0:z.call(a,f.value),e.prependIcon&&r(o,{key:"prepend-icon",name:"prepend"},null)]),a.default&&r("div",{class:"v-input__control"},[(F=a.default)==null?void 0:F.call(a,f.value)]),X&&r("div",{key:"append",class:"v-input__append"},[e.appendIcon&&r(o,{key:"append-icon",name:"append"},null),(R=a.append)==null?void 0:R.call(a,f.value)]),Y&&r("div",{class:"v-input__details"},[r(be,{id:I.value,active:w,messages:D.value},{message:a.message}),(E=a.details)==null?void 0:E.call(a,f.value)])])}),{reset:V,resetValidation:v,validate:d}}});export{Se as V,me as a,xe as b,Pe as c,Ce as d,he as m,$e as u};
