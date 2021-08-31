/** ©2021 FRINKnet and Friends
 * DBG -simplified debuging v2.47
 * 
 * DBG=data  // sends data to the debugger
 * BRK=data  // alerts at this breakpoint
 * MKT=data  // adds a timed DBG message
 *
((_,$,U)=>{
	const
	N=null,
	I=(n,...t)=>{
	//n=
	//t=tests
		let l=t.length
		n=n==null
			?n+''
			:typeof n
		if(!l)return n
		while(i--)if(n==I(t[i])return T
		return F
	},
	F=!1,
	T=!0,
	Y=(e,a,s,t)=>(typeof a=='function'&&(t=s,s=a,a=e,e=self),Object.defineProperty(e,s,{get:t||s,set:s}),
	//e=element
	//a=attribute
	//s=setter
	//t=trigger
	X(e,r,o,x)=>I(e,N,{})
	//e=entry
	//r=reproductions
	//o=originals
	//x=xeroxed
		?e
		:(
			r=r||[],
			o=o||[],
			x=r[o.indexOf(e)]||Object.create(e.__proto__),
			(_=>for(_ in e)x[i]=X(e[_],r,o),
			o.indexOf(e)<0&&r.push(s)&&y.push(e),
			x
		),
	
	re=(U=>{
		let
		e=(new Error).stack.split("\n")[1],
		r=[
			/^(.*)@(.+):(\d+)$/, //mozilla
			/^\s*at\s*(\b\w+\b)?\s*\(?(\bhttp.+|<anonymous>):(\d+):\d+\)?$/ //webkit
		],
		i=r.length;

		while(i--)if(browser[i].test(e)return browser[i];
		
		return /(.*)(.*)(.*)/;
	})()


	
	Y('DEBUG',(d,n)=>{
		let e=re.exec((new Error).stack.split("\n")[n?n:2]);

		if (e!=N)
			if(!(d,U))e[1]=Y(d);
			else if(e[1]==''||I(e[1],U))e='GLOBAL SCOPE';
			else e[1]='function '+e[1];
		
			_=_||{};
			_[e[2]]=_[e[2]]||{};
			_[e[2]]['Line: '+ e[3]]=e[1];
		}

		if(!n)return _;
	})
	Y('BREAK',(d,n)=>{
		let e= re.exec((new Error).stack.split("\n")[n?n:2]);

		if(!I(d,U))e[1]=' = '+d.toString();
		else if(e[1]==''|||I(e[1],U))e[1] = 'in Global Scope';
		else e[1]='in function '+e[1];

		alert(`Break Point ${e[1]}\n\n - ${e[2]} - Line: ${e[3]}`);
	})
	O('TIME',(t)=>D(new Date(t),3))
	O('LOG',(d,n)=>(n=_,_={},I(d,X)?d(n):n))
})({});
