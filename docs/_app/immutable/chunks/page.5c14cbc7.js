import{s as k,f as d,a as f,g as r,x as p,c as v,j as L,k as E,i as n,r as b,d as o}from"./scheduler.6381a9b9.js";import{S as H,i as M}from"./index.cf31950d.js";function w(T){let s,y=`Restricting selectable is supported by <code>startDate</code> and <code>endDate</code> properties. You can provide <code>string</code> or <code>Date</code>.
When <code>string</code> is passed, it must match <code>format</code> of given Svelty-picker. These border dates are <em>INCLUDED</em> in allowed date range.`,u,l,C="It is recommended to pass <code>strings</code> and not <code>Dates</code> to these properties. When datetime is passed, time range will be restricted as well if applicable.",D,i,x=`If you need something advanced you can provide function through <code>disableDatesFn</code>, in which you can resolve whether given date is disabled or not.
Just take into account that all <code>Date</code> objects passed into this function will be in local time of given user.`,h,t,_='<code><span class="line"><span style="color: #569CD6">function</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA">isDateDisabled</span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE">date</span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0">Date</span><span style="color: #D4D4D4">): </span><span style="color: #4EC9B0">bool</span></span></code>',m,c,g="Both methods can be combined together if needed.";return{c(){s=d("p"),s.innerHTML=y,u=f(),l=d("p"),l.innerHTML=C,D=f(),i=d("p"),i.innerHTML=x,h=f(),t=d("pre"),t.innerHTML=_,m=f(),c=d("p"),c.textContent=g,this.h()},l(e){s=r(e,"P",{"data-svelte-h":!0}),p(s)!=="svelte-9i5rny"&&(s.innerHTML=y),u=v(e),l=r(e,"P",{"data-svelte-h":!0}),p(l)!=="svelte-fenkrv"&&(l.innerHTML=C),D=v(e),i=r(e,"P",{"data-svelte-h":!0}),p(i)!=="svelte-pw1hh0"&&(i.innerHTML=x),h=v(e),t=r(e,"PRE",{class:!0,style:!0,tabindex:!0,"data-svelte-h":!0}),p(t)!=="svelte-11hbcgl"&&(t.innerHTML=_),m=v(e),c=r(e,"P",{"data-svelte-h":!0}),p(c)!=="svelte-1i8tak5"&&(c.textContent=g),this.h()},h(){L(t,"class","shiki dark-plus"),E(t,"background-color","#1E1E1E"),L(t,"tabindex","0")},m(e,a){n(e,s,a),n(e,u,a),n(e,l,a),n(e,D,a),n(e,i,a),n(e,h,a),n(e,t,a),n(e,m,a),n(e,c,a)},p:b,i:b,o:b,d(e){e&&(o(s),o(u),o(l),o(D),o(i),o(h),o(t),o(m),o(c))}}}const I={title:"Disabling dates"};class S extends H{constructor(s){super(),M(this,s,null,w,k,{})}}export{S as default,I as metadata};
