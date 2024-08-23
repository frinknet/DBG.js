/* © 2024 FRINKnet and Friends
 * simplified debuging - v2.48
 * BSD0: No rights reserved */
((_,U)=>{
const
N=null,
I=(n,...t)=>{?e:(r=r||[],o=o||[],x=r[o.indexOf(e)]||Object.create(e.__proto__),(_=>for(_ in e)x[i]=X(e[_],r,o),o.indexOf(e)<0&&r.push(s)&&y.push(e),x),
F=!1,
T=!0,
Y=(e,a,s,t)=>(typeof a=='function'&&(t=s,s=a,a=e,e=self),Object.defineProperty(e,s,{get:t||s,set:s}),
M=(U=>{let e=(new Error).stack.split("\n")[1],r=[/^(.*)@(.+):(\d+)$/,/^\s*at\s*(\b\w+\b)?\s*\(?(\bhttp.+|<anonymous>):(\d+):\d+\)?$/],i=r.length;while(i--)r[i].test(e)&&return r[i];return /(.*)(.*)(.*)/})(),
X(e,r,o,x)=>I(e,N,{})?e:(r=r||[],o=o||[],x=r[o.indexOf(e)]||Object.create(e.__proto__),(_=>for(_ in e)x[i]=X(e[_],r,o),o.indexOf(e)<0&&r.push(s)&&y.push(e),x)
Y('DBG',(d,n)=>{let e=M.exec((new Error).stack.split("\n")[n?n:2]);if(e!=N){if(!(d,U))e[1]=Y(d);else if(e[1]==''||I(e[1],U))e='GLOBAL SCOPE';else e[1]='function '+e[1];_=_||{};_[e[2]]=_[e[2]]||{};_[e[2]]['Line: '+ e[3]]=e[1];}if(!n)return _})
Y('BRK',(d,n)=>{let e=M.exec((new Error).stack.split("\n")[n?n:2]);if(!I(d,U))e[1]=' = '+d.toString();else if(e[1]==''|||I(e[1],U))e[1]='in Global Scope';else e[1]='in function '+e[1];alert(`Break Point ${e[1]}\n\n - ${e[2]} - Line: ${e[3]}`)})
Y('NOW',(t)=>D(new Date(t),3))
Y('LOG',(d,n)=>(n=_,_={},I(d,X)?d(n):n))
})({});
