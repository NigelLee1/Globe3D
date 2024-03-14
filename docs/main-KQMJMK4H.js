import{$ as Ga,$a as N0,A as Zr,Aa as Mo,Ab as H0,B as m0,Ba as cn,Bb as Zc,C as Dc,Ca as bo,D as jr,Da as Ne,Db as V0,E as jd,Ea as tn,F as g0,Fa as Ie,G as _0,Ga as zc,H as v0,Ha as Ii,I as rr,Ia as Ya,Ib as G0,J as y0,Ja as wn,K as Pn,Ka as _n,L as ln,La as vn,M as ri,Ma as af,N as Kd,Na as P0,O as Va,Oa as en,P as Kr,Pa as Jr,Q as Ke,Qa as kc,R as x0,Ra as I0,S as Oc,Sa as Hc,T as Nc,Ta as Vc,U as Jd,Ua as lf,V as S0,Va as L0,W as Fe,Wa as D0,X as M0,Xa as cf,Y as Pi,Ya as uf,Z as Qd,Za as O0,_ as b0,_a as Gc,a as Jt,aa as Wa,ab as U0,b as Xn,ba as tf,bb as si,c as l0,ca as Je,cb as Wc,d as Wd,da as ce,db as F0,e as c0,ea as Xa,eb as Xc,f as u0,fa as w0,fb as wo,g as h0,ga as Uc,gb as qc,h as Xd,ha as Ts,hb as B0,i as qd,ia as xo,ib as hf,j as Es,ja as ef,jb as z0,k as Ci,ka as E0,kb as Yc,l as As,la as nf,lb as Eo,m as Gi,ma as qa,mb as Qr,n as fe,na as Qe,nb as Ao,o as ka,oa as di,p as d0,pa as rf,q as f0,qa as Fc,r as Ye,ra as So,s as Yd,sa as sf,t as Ri,ta as of,tb as k0,u as p0,ua as Bc,ub as $a,v as $d,va as qn,vb as $c,w as vo,wa as A0,x as yo,xa as T0,y as Ha,ya as C0,z as Zd,za as R0}from"./chunk-CTF4IX4A.js";var Gv=l0((Y3,Vv)=>{"use strict";Vv.exports=(n,t={})=>{if(!n)return;let e={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?))?((((?:[^?#/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@/]*@)([^:/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#/]*\.[^?#/.]+(?:[?#]|$)))*\/?)?([^?#/]*))(?:\?([^#]*))?(?:#(.*))?)/}},i=e.parser[t.strictMode?"strict":"loose"].exec(n),r={},o=14;for(;o--;)r[e.key[o]]=i[o]||"";return r[e.q.name]={},r[e.key[12]].replace(e.q.parser,function(l,c,h){c&&(r[e.q.name][c]=h)}),r}});var km=l0((ba,zl)=>{"use strict";(function(){var n,t="4.17.21",e=200,i="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",r="Expected a function",o="Invalid `variable` option passed into `_.template`",l="__lodash_hash_undefined__",c=500,h="__lodash_placeholder__",d=1,p=2,m=4,_=1,y=2,S=1,A=2,v=4,g=8,I=16,R=32,D=64,z=128,B=256,U=512,ot=30,Mt="...",w=800,N=16,st=1,mt=2,H=3,J=1/0,$=9007199254740991,ut=17976931348623157e292,et=NaN,it=4294967295,at=it-1,yt=it>>>1,bt=[["ary",z],["bind",S],["bindKey",A],["curry",g],["curryRight",I],["flip",U],["partial",R],["partialRight",D],["rearg",B]],Xt="[object Arguments]",Q="[object Array]",ft="[object AsyncFunction]",Tt="[object Boolean]",Bt="[object Date]",qt="[object DOMException]",It="[object Error]",_e="[object Function]",te="[object GeneratorFunction]",G="[object Map]",Ve="[object Number]",Ht="[object Null]",kt="[object Object]",Ut="[object Promise]",ze="[object Proxy]",Qt="[object RegExp]",C="[object Set]",b="[object String]",q="[object Symbol]",_t="[object Undefined]",lt="[object WeakMap]",pt="[object WeakSet]",Lt="[object ArrayBuffer]",xt="[object DataView]",Rt="[object Float32Array]",Vt="[object Float64Array]",ne="[object Int8Array]",ht="[object Int16Array]",Ee="[object Int32Array]",oe="[object Uint8Array]",Kt="[object Uint8ClampedArray]",Ft="[object Uint16Array]",At="[object Uint32Array]",ae=/\b__p \+= '';/g,O=/\b(__p \+=) '' \+/g,vt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,wt=/&(?:amp|lt|gt|quot|#39);/g,zt=/[&<>"']/g,P=RegExp(wt.source),gt=RegExp(zt.source),dt=/<%-([\s\S]+?)%>/g,Dt=/<%([\s\S]+?)%>/g,Gt=/<%=([\s\S]+?)%>/g,Te=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,xe=/^\w*$/,De=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,sn=/[\\^$.*+?()[\]{}|]/g,Ce=RegExp(sn.source),Ge=/^\s+/,Cn=/\s/,Vl=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Lh=/\{\n\/\* \[wrapped with (.+)\] \*/,to=/,? & /,Gl=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,eo=/[()=,{}\[\]\/\s]/,Wl=/\\(\\)?/g,Xl=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ql=/\w*$/,Dh=/^[-+]0x[0-9a-f]+$/i,Oh=/^0b[01]+$/i,T=/^\[object .+?Constructor\]$/,W=/^0o[0-7]+$/i,Z=/^(?:0|[1-9]\d*)$/,K=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Y=/($^)/,Ct=/['\n\r\u2028\u2029\\]/g,Ot="\\ud800-\\udfff",$t="\\u0300-\\u036f",ee="\\ufe20-\\ufe2f",ue="\\u20d0-\\u20ff",ie=$t+ee+ue,re="\\u2700-\\u27bf",Ze="a-z\\xdf-\\xf6\\xf8-\\xff",kn="\\xac\\xb1\\xd7\\xf7",hn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Fi="\\u2000-\\u206f",We=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",he="A-Z\\xc0-\\xd6\\xd8-\\xde",no="\\ufe0e\\ufe0f",Xe=kn+hn+Fi+We,Bi="['\u2019]",Yl="["+Ot+"]",Fr="["+Xe+"]",Br="["+ie+"]",pn="\\d+",fr="["+re+"]",io="["+Ze+"]",Hn="[^"+Ot+Xe+pn+re+Ze+he+"]",ms="\\ud83c[\\udffb-\\udfff]",Nh="(?:"+Br+"|"+ms+")",wa="[^"+Ot+"]",Uh="(?:\\ud83c[\\udde6-\\uddff]){2}",Fh="[\\ud800-\\udbff][\\udc00-\\udfff]",ro="["+he+"]",$m="\\u200d",Zm="(?:"+io+"|"+Hn+")",mS="(?:"+ro+"|"+Hn+")",jm="(?:"+Bi+"(?:d|ll|m|re|s|t|ve))?",Km="(?:"+Bi+"(?:D|LL|M|RE|S|T|VE))?",Jm=Nh+"?",Qm="["+no+"]?",gS="(?:"+$m+"(?:"+[wa,Uh,Fh].join("|")+")"+Qm+Jm+")*",_S="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",vS="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tg=Qm+Jm+gS,yS="(?:"+[fr,Uh,Fh].join("|")+")"+tg,xS="(?:"+[wa+Br+"?",Br,Uh,Fh,Yl].join("|")+")",SS=RegExp(Bi,"g"),MS=RegExp(Br,"g"),Bh=RegExp(ms+"(?="+ms+")|"+xS+tg,"g"),bS=RegExp([ro+"?"+io+"+"+jm+"(?="+[Fr,ro,"$"].join("|")+")",mS+"+"+Km+"(?="+[Fr,ro+Zm,"$"].join("|")+")",ro+"?"+Zm+"+"+jm,ro+"+"+Km,vS,_S,pn,yS].join("|"),"g"),wS=RegExp("["+$m+Ot+ie+no+"]"),ES=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,AS=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],TS=-1,qe={};qe[Rt]=qe[Vt]=qe[ne]=qe[ht]=qe[Ee]=qe[oe]=qe[Kt]=qe[Ft]=qe[At]=!0,qe[Xt]=qe[Q]=qe[Lt]=qe[Tt]=qe[xt]=qe[Bt]=qe[It]=qe[_e]=qe[G]=qe[Ve]=qe[kt]=qe[Qt]=qe[C]=qe[b]=qe[lt]=!1;var He={};He[Xt]=He[Q]=He[Lt]=He[xt]=He[Tt]=He[Bt]=He[Rt]=He[Vt]=He[ne]=He[ht]=He[Ee]=He[G]=He[Ve]=He[kt]=He[Qt]=He[C]=He[b]=He[q]=He[oe]=He[Kt]=He[Ft]=He[At]=!0,He[It]=He[_e]=He[lt]=!1;var CS={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},RS={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},PS={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},IS={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},LS=parseFloat,DS=parseInt,eg=typeof global=="object"&&global&&global.Object===Object&&global,OS=typeof self=="object"&&self&&self.Object===Object&&self,Mn=eg||OS||Function("return this")(),zh=typeof ba=="object"&&ba&&!ba.nodeType&&ba,gs=zh&&typeof zl=="object"&&zl&&!zl.nodeType&&zl,ng=gs&&gs.exports===zh,kh=ng&&eg.process,xi=function(){try{var k=gs&&gs.require&&gs.require("util").types;return k||kh&&kh.binding&&kh.binding("util")}catch{}}(),ig=xi&&xi.isArrayBuffer,rg=xi&&xi.isDate,sg=xi&&xi.isMap,og=xi&&xi.isRegExp,ag=xi&&xi.isSet,lg=xi&&xi.isTypedArray;function oi(k,tt,j){switch(j.length){case 0:return k.call(tt);case 1:return k.call(tt,j[0]);case 2:return k.call(tt,j[0],j[1]);case 3:return k.call(tt,j[0],j[1],j[2])}return k.apply(tt,j)}function NS(k,tt,j,Pt){for(var se=-1,Re=k==null?0:k.length;++se<Re;){var mn=k[se];tt(Pt,mn,j(mn),k)}return Pt}function Si(k,tt){for(var j=-1,Pt=k==null?0:k.length;++j<Pt&&tt(k[j],j,k)!==!1;);return k}function US(k,tt){for(var j=k==null?0:k.length;j--&&tt(k[j],j,k)!==!1;);return k}function cg(k,tt){for(var j=-1,Pt=k==null?0:k.length;++j<Pt;)if(!tt(k[j],j,k))return!1;return!0}function zr(k,tt){for(var j=-1,Pt=k==null?0:k.length,se=0,Re=[];++j<Pt;){var mn=k[j];tt(mn,j,k)&&(Re[se++]=mn)}return Re}function $l(k,tt){var j=k==null?0:k.length;return!!j&&so(k,tt,0)>-1}function Hh(k,tt,j){for(var Pt=-1,se=k==null?0:k.length;++Pt<se;)if(j(tt,k[Pt]))return!0;return!1}function je(k,tt){for(var j=-1,Pt=k==null?0:k.length,se=Array(Pt);++j<Pt;)se[j]=tt(k[j],j,k);return se}function kr(k,tt){for(var j=-1,Pt=tt.length,se=k.length;++j<Pt;)k[se+j]=tt[j];return k}function Vh(k,tt,j,Pt){var se=-1,Re=k==null?0:k.length;for(Pt&&Re&&(j=k[++se]);++se<Re;)j=tt(j,k[se],se,k);return j}function FS(k,tt,j,Pt){var se=k==null?0:k.length;for(Pt&&se&&(j=k[--se]);se--;)j=tt(j,k[se],se,k);return j}function Gh(k,tt){for(var j=-1,Pt=k==null?0:k.length;++j<Pt;)if(tt(k[j],j,k))return!0;return!1}var BS=Wh("length");function zS(k){return k.split("")}function kS(k){return k.match(Gl)||[]}function ug(k,tt,j){var Pt;return j(k,function(se,Re,mn){if(tt(se,Re,mn))return Pt=Re,!1}),Pt}function Zl(k,tt,j,Pt){for(var se=k.length,Re=j+(Pt?1:-1);Pt?Re--:++Re<se;)if(tt(k[Re],Re,k))return Re;return-1}function so(k,tt,j){return tt===tt?JS(k,tt,j):Zl(k,hg,j)}function HS(k,tt,j,Pt){for(var se=j-1,Re=k.length;++se<Re;)if(Pt(k[se],tt))return se;return-1}function hg(k){return k!==k}function dg(k,tt){var j=k==null?0:k.length;return j?qh(k,tt)/j:et}function Wh(k){return function(tt){return tt==null?n:tt[k]}}function Xh(k){return function(tt){return k==null?n:k[tt]}}function fg(k,tt,j,Pt,se){return se(k,function(Re,mn,ke){j=Pt?(Pt=!1,Re):tt(j,Re,mn,ke)}),j}function VS(k,tt){var j=k.length;for(k.sort(tt);j--;)k[j]=k[j].value;return k}function qh(k,tt){for(var j,Pt=-1,se=k.length;++Pt<se;){var Re=tt(k[Pt]);Re!==n&&(j=j===n?Re:j+Re)}return j}function Yh(k,tt){for(var j=-1,Pt=Array(k);++j<k;)Pt[j]=tt(j);return Pt}function GS(k,tt){return je(tt,function(j){return[j,k[j]]})}function pg(k){return k&&k.slice(0,vg(k)+1).replace(Ge,"")}function ai(k){return function(tt){return k(tt)}}function $h(k,tt){return je(tt,function(j){return k[j]})}function Ea(k,tt){return k.has(tt)}function mg(k,tt){for(var j=-1,Pt=k.length;++j<Pt&&so(tt,k[j],0)>-1;);return j}function gg(k,tt){for(var j=k.length;j--&&so(tt,k[j],0)>-1;);return j}function WS(k,tt){for(var j=k.length,Pt=0;j--;)k[j]===tt&&++Pt;return Pt}var XS=Xh(CS),qS=Xh(RS);function YS(k){return"\\"+IS[k]}function $S(k,tt){return k==null?n:k[tt]}function oo(k){return wS.test(k)}function ZS(k){return ES.test(k)}function jS(k){for(var tt,j=[];!(tt=k.next()).done;)j.push(tt.value);return j}function Zh(k){var tt=-1,j=Array(k.size);return k.forEach(function(Pt,se){j[++tt]=[se,Pt]}),j}function _g(k,tt){return function(j){return k(tt(j))}}function Hr(k,tt){for(var j=-1,Pt=k.length,se=0,Re=[];++j<Pt;){var mn=k[j];(mn===tt||mn===h)&&(k[j]=h,Re[se++]=j)}return Re}function jl(k){var tt=-1,j=Array(k.size);return k.forEach(function(Pt){j[++tt]=Pt}),j}function KS(k){var tt=-1,j=Array(k.size);return k.forEach(function(Pt){j[++tt]=[Pt,Pt]}),j}function JS(k,tt,j){for(var Pt=j-1,se=k.length;++Pt<se;)if(k[Pt]===tt)return Pt;return-1}function QS(k,tt,j){for(var Pt=j+1;Pt--;)if(k[Pt]===tt)return Pt;return Pt}function ao(k){return oo(k)?eM(k):BS(k)}function zi(k){return oo(k)?nM(k):zS(k)}function vg(k){for(var tt=k.length;tt--&&Cn.test(k.charAt(tt)););return tt}var tM=Xh(PS);function eM(k){for(var tt=Bh.lastIndex=0;Bh.test(k);)++tt;return tt}function nM(k){return k.match(Bh)||[]}function iM(k){return k.match(bS)||[]}var rM=function k(tt){tt=tt==null?Mn:Vr.defaults(Mn.Object(),tt,Vr.pick(Mn,AS));var j=tt.Array,Pt=tt.Date,se=tt.Error,Re=tt.Function,mn=tt.Math,ke=tt.Object,jh=tt.RegExp,sM=tt.String,Mi=tt.TypeError,Kl=j.prototype,oM=Re.prototype,lo=ke.prototype,Jl=tt["__core-js_shared__"],Ql=oM.toString,Oe=lo.hasOwnProperty,aM=0,yg=function(){var s=/[^.]+$/.exec(Jl&&Jl.keys&&Jl.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),tc=lo.toString,lM=Ql.call(ke),cM=Mn._,uM=jh("^"+Ql.call(Oe).replace(sn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ec=ng?tt.Buffer:n,Gr=tt.Symbol,nc=tt.Uint8Array,xg=ec?ec.allocUnsafe:n,ic=_g(ke.getPrototypeOf,ke),Sg=ke.create,Mg=lo.propertyIsEnumerable,rc=Kl.splice,bg=Gr?Gr.isConcatSpreadable:n,Aa=Gr?Gr.iterator:n,_s=Gr?Gr.toStringTag:n,sc=function(){try{var s=Ms(ke,"defineProperty");return s({},"",{}),s}catch{}}(),hM=tt.clearTimeout!==Mn.clearTimeout&&tt.clearTimeout,dM=Pt&&Pt.now!==Mn.Date.now&&Pt.now,fM=tt.setTimeout!==Mn.setTimeout&&tt.setTimeout,oc=mn.ceil,ac=mn.floor,Kh=ke.getOwnPropertySymbols,pM=ec?ec.isBuffer:n,wg=tt.isFinite,mM=Kl.join,gM=_g(ke.keys,ke),gn=mn.max,On=mn.min,_M=Pt.now,vM=tt.parseInt,Eg=mn.random,yM=Kl.reverse,Jh=Ms(tt,"DataView"),Ta=Ms(tt,"Map"),Qh=Ms(tt,"Promise"),co=Ms(tt,"Set"),Ca=Ms(tt,"WeakMap"),Ra=Ms(ke,"create"),lc=Ca&&new Ca,uo={},xM=bs(Jh),SM=bs(Ta),MM=bs(Qh),bM=bs(co),wM=bs(Ca),cc=Gr?Gr.prototype:n,Pa=cc?cc.valueOf:n,Ag=cc?cc.toString:n;function M(s){if(rn(s)&&!le(s)&&!(s instanceof be)){if(s instanceof bi)return s;if(Oe.call(s,"__wrapped__"))return T_(s)}return new bi(s)}var ho=function(){function s(){}return function(a){if(!nn(a))return{};if(Sg)return Sg(a);s.prototype=a;var u=new s;return s.prototype=n,u}}();function uc(){}function bi(s,a){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!a,this.__index__=0,this.__values__=n}M.templateSettings={escape:dt,evaluate:Dt,interpolate:Gt,variable:"",imports:{_:M}},M.prototype=uc.prototype,M.prototype.constructor=M,bi.prototype=ho(uc.prototype),bi.prototype.constructor=bi;function be(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=it,this.__views__=[]}function EM(){var s=new be(this.__wrapped__);return s.__actions__=ti(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=ti(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=ti(this.__views__),s}function AM(){if(this.__filtered__){var s=new be(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function TM(){var s=this.__wrapped__.value(),a=this.__dir__,u=le(s),f=a<0,x=u?s.length:0,E=zb(0,x,this.__views__),L=E.start,F=E.end,V=F-L,nt=f?F:L-1,rt=this.__iteratees__,ct=rt.length,Et=0,Nt=On(V,this.__takeCount__);if(!u||!f&&x==V&&Nt==V)return jg(s,this.__actions__);var Zt=[];t:for(;V--&&Et<Nt;){nt+=a;for(var me=-1,jt=s[nt];++me<ct;){var Me=rt[me],Ae=Me.iteratee,ui=Me.type,Wn=Ae(jt);if(ui==mt)jt=Wn;else if(!Wn){if(ui==st)continue t;break t}}Zt[Et++]=jt}return Zt}be.prototype=ho(uc.prototype),be.prototype.constructor=be;function vs(s){var a=-1,u=s==null?0:s.length;for(this.clear();++a<u;){var f=s[a];this.set(f[0],f[1])}}function CM(){this.__data__=Ra?Ra(null):{},this.size=0}function RM(s){var a=this.has(s)&&delete this.__data__[s];return this.size-=a?1:0,a}function PM(s){var a=this.__data__;if(Ra){var u=a[s];return u===l?n:u}return Oe.call(a,s)?a[s]:n}function IM(s){var a=this.__data__;return Ra?a[s]!==n:Oe.call(a,s)}function LM(s,a){var u=this.__data__;return this.size+=this.has(s)?0:1,u[s]=Ra&&a===n?l:a,this}vs.prototype.clear=CM,vs.prototype.delete=RM,vs.prototype.get=PM,vs.prototype.has=IM,vs.prototype.set=LM;function pr(s){var a=-1,u=s==null?0:s.length;for(this.clear();++a<u;){var f=s[a];this.set(f[0],f[1])}}function DM(){this.__data__=[],this.size=0}function OM(s){var a=this.__data__,u=hc(a,s);if(u<0)return!1;var f=a.length-1;return u==f?a.pop():rc.call(a,u,1),--this.size,!0}function NM(s){var a=this.__data__,u=hc(a,s);return u<0?n:a[u][1]}function UM(s){return hc(this.__data__,s)>-1}function FM(s,a){var u=this.__data__,f=hc(u,s);return f<0?(++this.size,u.push([s,a])):u[f][1]=a,this}pr.prototype.clear=DM,pr.prototype.delete=OM,pr.prototype.get=NM,pr.prototype.has=UM,pr.prototype.set=FM;function mr(s){var a=-1,u=s==null?0:s.length;for(this.clear();++a<u;){var f=s[a];this.set(f[0],f[1])}}function BM(){this.size=0,this.__data__={hash:new vs,map:new(Ta||pr),string:new vs}}function zM(s){var a=bc(this,s).delete(s);return this.size-=a?1:0,a}function kM(s){return bc(this,s).get(s)}function HM(s){return bc(this,s).has(s)}function VM(s,a){var u=bc(this,s),f=u.size;return u.set(s,a),this.size+=u.size==f?0:1,this}mr.prototype.clear=BM,mr.prototype.delete=zM,mr.prototype.get=kM,mr.prototype.has=HM,mr.prototype.set=VM;function ys(s){var a=-1,u=s==null?0:s.length;for(this.__data__=new mr;++a<u;)this.add(s[a])}function GM(s){return this.__data__.set(s,l),this}function WM(s){return this.__data__.has(s)}ys.prototype.add=ys.prototype.push=GM,ys.prototype.has=WM;function ki(s){var a=this.__data__=new pr(s);this.size=a.size}function XM(){this.__data__=new pr,this.size=0}function qM(s){var a=this.__data__,u=a.delete(s);return this.size=a.size,u}function YM(s){return this.__data__.get(s)}function $M(s){return this.__data__.has(s)}function ZM(s,a){var u=this.__data__;if(u instanceof pr){var f=u.__data__;if(!Ta||f.length<e-1)return f.push([s,a]),this.size=++u.size,this;u=this.__data__=new mr(f)}return u.set(s,a),this.size=u.size,this}ki.prototype.clear=XM,ki.prototype.delete=qM,ki.prototype.get=YM,ki.prototype.has=$M,ki.prototype.set=ZM;function Tg(s,a){var u=le(s),f=!u&&ws(s),x=!u&&!f&&$r(s),E=!u&&!f&&!x&&go(s),L=u||f||x||E,F=L?Yh(s.length,sM):[],V=F.length;for(var nt in s)(a||Oe.call(s,nt))&&!(L&&(nt=="length"||x&&(nt=="offset"||nt=="parent")||E&&(nt=="buffer"||nt=="byteLength"||nt=="byteOffset")||yr(nt,V)))&&F.push(nt);return F}function Cg(s){var a=s.length;return a?s[ud(0,a-1)]:n}function jM(s,a){return wc(ti(s),xs(a,0,s.length))}function KM(s){return wc(ti(s))}function td(s,a,u){(u!==n&&!Hi(s[a],u)||u===n&&!(a in s))&&gr(s,a,u)}function Ia(s,a,u){var f=s[a];(!(Oe.call(s,a)&&Hi(f,u))||u===n&&!(a in s))&&gr(s,a,u)}function hc(s,a){for(var u=s.length;u--;)if(Hi(s[u][0],a))return u;return-1}function JM(s,a,u,f){return Wr(s,function(x,E,L){a(f,x,u(x),L)}),f}function Rg(s,a){return s&&nr(a,bn(a),s)}function QM(s,a){return s&&nr(a,ni(a),s)}function gr(s,a,u){a=="__proto__"&&sc?sc(s,a,{configurable:!0,enumerable:!0,value:u,writable:!0}):s[a]=u}function ed(s,a){for(var u=-1,f=a.length,x=j(f),E=s==null;++u<f;)x[u]=E?n:Nd(s,a[u]);return x}function xs(s,a,u){return s===s&&(u!==n&&(s=s<=u?s:u),a!==n&&(s=s>=a?s:a)),s}function wi(s,a,u,f,x,E){var L,F=a&d,V=a&p,nt=a&m;if(u&&(L=x?u(s,f,x,E):u(s)),L!==n)return L;if(!nn(s))return s;var rt=le(s);if(rt){if(L=Hb(s),!F)return ti(s,L)}else{var ct=Nn(s),Et=ct==_e||ct==te;if($r(s))return Qg(s,F);if(ct==kt||ct==Xt||Et&&!x){if(L=V||Et?{}:v_(s),!F)return V?Pb(s,QM(L,s)):Rb(s,Rg(L,s))}else{if(!He[ct])return x?s:{};L=Vb(s,ct,F)}}E||(E=new ki);var Nt=E.get(s);if(Nt)return Nt;E.set(s,L),Y_(s)?s.forEach(function(jt){L.add(wi(jt,a,u,jt,s,E))}):X_(s)&&s.forEach(function(jt,Me){L.set(Me,wi(jt,a,u,Me,s,E))});var Zt=nt?V?Sd:xd:V?ni:bn,me=rt?n:Zt(s);return Si(me||s,function(jt,Me){me&&(Me=jt,jt=s[Me]),Ia(L,Me,wi(jt,a,u,Me,s,E))}),L}function tb(s){var a=bn(s);return function(u){return Pg(u,s,a)}}function Pg(s,a,u){var f=u.length;if(s==null)return!f;for(s=ke(s);f--;){var x=u[f],E=a[x],L=s[x];if(L===n&&!(x in s)||!E(L))return!1}return!0}function Ig(s,a,u){if(typeof s!="function")throw new Mi(r);return Ba(function(){s.apply(n,u)},a)}function La(s,a,u,f){var x=-1,E=$l,L=!0,F=s.length,V=[],nt=a.length;if(!F)return V;u&&(a=je(a,ai(u))),f?(E=Hh,L=!1):a.length>=e&&(E=Ea,L=!1,a=new ys(a));t:for(;++x<F;){var rt=s[x],ct=u==null?rt:u(rt);if(rt=f||rt!==0?rt:0,L&&ct===ct){for(var Et=nt;Et--;)if(a[Et]===ct)continue t;V.push(rt)}else E(a,ct,f)||V.push(rt)}return V}var Wr=r_(er),Lg=r_(id,!0);function eb(s,a){var u=!0;return Wr(s,function(f,x,E){return u=!!a(f,x,E),u}),u}function dc(s,a,u){for(var f=-1,x=s.length;++f<x;){var E=s[f],L=a(E);if(L!=null&&(F===n?L===L&&!ci(L):u(L,F)))var F=L,V=E}return V}function nb(s,a,u,f){var x=s.length;for(u=de(u),u<0&&(u=-u>x?0:x+u),f=f===n||f>x?x:de(f),f<0&&(f+=x),f=u>f?0:Z_(f);u<f;)s[u++]=a;return s}function Dg(s,a){var u=[];return Wr(s,function(f,x,E){a(f,x,E)&&u.push(f)}),u}function Rn(s,a,u,f,x){var E=-1,L=s.length;for(u||(u=Wb),x||(x=[]);++E<L;){var F=s[E];a>0&&u(F)?a>1?Rn(F,a-1,u,f,x):kr(x,F):f||(x[x.length]=F)}return x}var nd=s_(),Og=s_(!0);function er(s,a){return s&&nd(s,a,bn)}function id(s,a){return s&&Og(s,a,bn)}function fc(s,a){return zr(a,function(u){return xr(s[u])})}function Ss(s,a){a=qr(a,s);for(var u=0,f=a.length;s!=null&&u<f;)s=s[ir(a[u++])];return u&&u==f?s:n}function Ng(s,a,u){var f=a(s);return le(s)?f:kr(f,u(s))}function Vn(s){return s==null?s===n?_t:Ht:_s&&_s in ke(s)?Bb(s):Kb(s)}function rd(s,a){return s>a}function ib(s,a){return s!=null&&Oe.call(s,a)}function rb(s,a){return s!=null&&a in ke(s)}function sb(s,a,u){return s>=On(a,u)&&s<gn(a,u)}function sd(s,a,u){for(var f=u?Hh:$l,x=s[0].length,E=s.length,L=E,F=j(E),V=1/0,nt=[];L--;){var rt=s[L];L&&a&&(rt=je(rt,ai(a))),V=On(rt.length,V),F[L]=!u&&(a||x>=120&&rt.length>=120)?new ys(L&&rt):n}rt=s[0];var ct=-1,Et=F[0];t:for(;++ct<x&&nt.length<V;){var Nt=rt[ct],Zt=a?a(Nt):Nt;if(Nt=u||Nt!==0?Nt:0,!(Et?Ea(Et,Zt):f(nt,Zt,u))){for(L=E;--L;){var me=F[L];if(!(me?Ea(me,Zt):f(s[L],Zt,u)))continue t}Et&&Et.push(Zt),nt.push(Nt)}}return nt}function ob(s,a,u,f){return er(s,function(x,E,L){a(f,u(x),E,L)}),f}function Da(s,a,u){a=qr(a,s),s=M_(s,a);var f=s==null?s:s[ir(Ai(a))];return f==null?n:oi(f,s,u)}function Ug(s){return rn(s)&&Vn(s)==Xt}function ab(s){return rn(s)&&Vn(s)==Lt}function lb(s){return rn(s)&&Vn(s)==Bt}function Oa(s,a,u,f,x){return s===a?!0:s==null||a==null||!rn(s)&&!rn(a)?s!==s&&a!==a:cb(s,a,u,f,Oa,x)}function cb(s,a,u,f,x,E){var L=le(s),F=le(a),V=L?Q:Nn(s),nt=F?Q:Nn(a);V=V==Xt?kt:V,nt=nt==Xt?kt:nt;var rt=V==kt,ct=nt==kt,Et=V==nt;if(Et&&$r(s)){if(!$r(a))return!1;L=!0,rt=!1}if(Et&&!rt)return E||(E=new ki),L||go(s)?m_(s,a,u,f,x,E):Ub(s,a,V,u,f,x,E);if(!(u&_)){var Nt=rt&&Oe.call(s,"__wrapped__"),Zt=ct&&Oe.call(a,"__wrapped__");if(Nt||Zt){var me=Nt?s.value():s,jt=Zt?a.value():a;return E||(E=new ki),x(me,jt,u,f,E)}}return Et?(E||(E=new ki),Fb(s,a,u,f,x,E)):!1}function ub(s){return rn(s)&&Nn(s)==G}function od(s,a,u,f){var x=u.length,E=x,L=!f;if(s==null)return!E;for(s=ke(s);x--;){var F=u[x];if(L&&F[2]?F[1]!==s[F[0]]:!(F[0]in s))return!1}for(;++x<E;){F=u[x];var V=F[0],nt=s[V],rt=F[1];if(L&&F[2]){if(nt===n&&!(V in s))return!1}else{var ct=new ki;if(f)var Et=f(nt,rt,V,s,a,ct);if(!(Et===n?Oa(rt,nt,_|y,f,ct):Et))return!1}}return!0}function Fg(s){if(!nn(s)||qb(s))return!1;var a=xr(s)?uM:T;return a.test(bs(s))}function hb(s){return rn(s)&&Vn(s)==Qt}function db(s){return rn(s)&&Nn(s)==C}function fb(s){return rn(s)&&Pc(s.length)&&!!qe[Vn(s)]}function Bg(s){return typeof s=="function"?s:s==null?ii:typeof s=="object"?le(s)?Hg(s[0],s[1]):kg(s):o0(s)}function ad(s){if(!Fa(s))return gM(s);var a=[];for(var u in ke(s))Oe.call(s,u)&&u!="constructor"&&a.push(u);return a}function pb(s){if(!nn(s))return jb(s);var a=Fa(s),u=[];for(var f in s)f=="constructor"&&(a||!Oe.call(s,f))||u.push(f);return u}function ld(s,a){return s<a}function zg(s,a){var u=-1,f=ei(s)?j(s.length):[];return Wr(s,function(x,E,L){f[++u]=a(x,E,L)}),f}function kg(s){var a=bd(s);return a.length==1&&a[0][2]?x_(a[0][0],a[0][1]):function(u){return u===s||od(u,s,a)}}function Hg(s,a){return Ed(s)&&y_(a)?x_(ir(s),a):function(u){var f=Nd(u,s);return f===n&&f===a?Ud(u,s):Oa(a,f,_|y)}}function pc(s,a,u,f,x){s!==a&&nd(a,function(E,L){if(x||(x=new ki),nn(E))mb(s,a,L,u,pc,f,x);else{var F=f?f(Td(s,L),E,L+"",s,a,x):n;F===n&&(F=E),td(s,L,F)}},ni)}function mb(s,a,u,f,x,E,L){var F=Td(s,u),V=Td(a,u),nt=L.get(V);if(nt){td(s,u,nt);return}var rt=E?E(F,V,u+"",s,a,L):n,ct=rt===n;if(ct){var Et=le(V),Nt=!Et&&$r(V),Zt=!Et&&!Nt&&go(V);rt=V,Et||Nt||Zt?le(F)?rt=F:on(F)?rt=ti(F):Nt?(ct=!1,rt=Qg(V,!0)):Zt?(ct=!1,rt=t_(V,!0)):rt=[]:za(V)||ws(V)?(rt=F,ws(F)?rt=j_(F):(!nn(F)||xr(F))&&(rt=v_(V))):ct=!1}ct&&(L.set(V,rt),x(rt,V,f,E,L),L.delete(V)),td(s,u,rt)}function Vg(s,a){var u=s.length;if(u)return a+=a<0?u:0,yr(a,u)?s[a]:n}function Gg(s,a,u){a.length?a=je(a,function(E){return le(E)?function(L){return Ss(L,E.length===1?E[0]:E)}:E}):a=[ii];var f=-1;a=je(a,ai(Yt()));var x=zg(s,function(E,L,F){var V=je(a,function(nt){return nt(E)});return{criteria:V,index:++f,value:E}});return VS(x,function(E,L){return Cb(E,L,u)})}function gb(s,a){return Wg(s,a,function(u,f){return Ud(s,f)})}function Wg(s,a,u){for(var f=-1,x=a.length,E={};++f<x;){var L=a[f],F=Ss(s,L);u(F,L)&&Na(E,qr(L,s),F)}return E}function _b(s){return function(a){return Ss(a,s)}}function cd(s,a,u,f){var x=f?HS:so,E=-1,L=a.length,F=s;for(s===a&&(a=ti(a)),u&&(F=je(s,ai(u)));++E<L;)for(var V=0,nt=a[E],rt=u?u(nt):nt;(V=x(F,rt,V,f))>-1;)F!==s&&rc.call(F,V,1),rc.call(s,V,1);return s}function Xg(s,a){for(var u=s?a.length:0,f=u-1;u--;){var x=a[u];if(u==f||x!==E){var E=x;yr(x)?rc.call(s,x,1):fd(s,x)}}return s}function ud(s,a){return s+ac(Eg()*(a-s+1))}function vb(s,a,u,f){for(var x=-1,E=gn(oc((a-s)/(u||1)),0),L=j(E);E--;)L[f?E:++x]=s,s+=u;return L}function hd(s,a){var u="";if(!s||a<1||a>$)return u;do a%2&&(u+=s),a=ac(a/2),a&&(s+=s);while(a);return u}function ve(s,a){return Cd(S_(s,a,ii),s+"")}function yb(s){return Cg(_o(s))}function xb(s,a){var u=_o(s);return wc(u,xs(a,0,u.length))}function Na(s,a,u,f){if(!nn(s))return s;a=qr(a,s);for(var x=-1,E=a.length,L=E-1,F=s;F!=null&&++x<E;){var V=ir(a[x]),nt=u;if(V==="__proto__"||V==="constructor"||V==="prototype")return s;if(x!=L){var rt=F[V];nt=f?f(rt,V,F):n,nt===n&&(nt=nn(rt)?rt:yr(a[x+1])?[]:{})}Ia(F,V,nt),F=F[V]}return s}var qg=lc?function(s,a){return lc.set(s,a),s}:ii,Sb=sc?function(s,a){return sc(s,"toString",{configurable:!0,enumerable:!1,value:Bd(a),writable:!0})}:ii;function Mb(s){return wc(_o(s))}function Ei(s,a,u){var f=-1,x=s.length;a<0&&(a=-a>x?0:x+a),u=u>x?x:u,u<0&&(u+=x),x=a>u?0:u-a>>>0,a>>>=0;for(var E=j(x);++f<x;)E[f]=s[f+a];return E}function bb(s,a){var u;return Wr(s,function(f,x,E){return u=a(f,x,E),!u}),!!u}function mc(s,a,u){var f=0,x=s==null?f:s.length;if(typeof a=="number"&&a===a&&x<=yt){for(;f<x;){var E=f+x>>>1,L=s[E];L!==null&&!ci(L)&&(u?L<=a:L<a)?f=E+1:x=E}return x}return dd(s,a,ii,u)}function dd(s,a,u,f){var x=0,E=s==null?0:s.length;if(E===0)return 0;a=u(a);for(var L=a!==a,F=a===null,V=ci(a),nt=a===n;x<E;){var rt=ac((x+E)/2),ct=u(s[rt]),Et=ct!==n,Nt=ct===null,Zt=ct===ct,me=ci(ct);if(L)var jt=f||Zt;else nt?jt=Zt&&(f||Et):F?jt=Zt&&Et&&(f||!Nt):V?jt=Zt&&Et&&!Nt&&(f||!me):Nt||me?jt=!1:jt=f?ct<=a:ct<a;jt?x=rt+1:E=rt}return On(E,at)}function Yg(s,a){for(var u=-1,f=s.length,x=0,E=[];++u<f;){var L=s[u],F=a?a(L):L;if(!u||!Hi(F,V)){var V=F;E[x++]=L===0?0:L}}return E}function $g(s){return typeof s=="number"?s:ci(s)?et:+s}function li(s){if(typeof s=="string")return s;if(le(s))return je(s,li)+"";if(ci(s))return Ag?Ag.call(s):"";var a=s+"";return a=="0"&&1/s==-J?"-0":a}function Xr(s,a,u){var f=-1,x=$l,E=s.length,L=!0,F=[],V=F;if(u)L=!1,x=Hh;else if(E>=e){var nt=a?null:Ob(s);if(nt)return jl(nt);L=!1,x=Ea,V=new ys}else V=a?[]:F;t:for(;++f<E;){var rt=s[f],ct=a?a(rt):rt;if(rt=u||rt!==0?rt:0,L&&ct===ct){for(var Et=V.length;Et--;)if(V[Et]===ct)continue t;a&&V.push(ct),F.push(rt)}else x(V,ct,u)||(V!==F&&V.push(ct),F.push(rt))}return F}function fd(s,a){return a=qr(a,s),s=M_(s,a),s==null||delete s[ir(Ai(a))]}function Zg(s,a,u,f){return Na(s,a,u(Ss(s,a)),f)}function gc(s,a,u,f){for(var x=s.length,E=f?x:-1;(f?E--:++E<x)&&a(s[E],E,s););return u?Ei(s,f?0:E,f?E+1:x):Ei(s,f?E+1:0,f?x:E)}function jg(s,a){var u=s;return u instanceof be&&(u=u.value()),Vh(a,function(f,x){return x.func.apply(x.thisArg,kr([f],x.args))},u)}function pd(s,a,u){var f=s.length;if(f<2)return f?Xr(s[0]):[];for(var x=-1,E=j(f);++x<f;)for(var L=s[x],F=-1;++F<f;)F!=x&&(E[x]=La(E[x]||L,s[F],a,u));return Xr(Rn(E,1),a,u)}function Kg(s,a,u){for(var f=-1,x=s.length,E=a.length,L={};++f<x;){var F=f<E?a[f]:n;u(L,s[f],F)}return L}function md(s){return on(s)?s:[]}function gd(s){return typeof s=="function"?s:ii}function qr(s,a){return le(s)?s:Ed(s,a)?[s]:A_(Pe(s))}var wb=ve;function Yr(s,a,u){var f=s.length;return u=u===n?f:u,!a&&u>=f?s:Ei(s,a,u)}var Jg=hM||function(s){return Mn.clearTimeout(s)};function Qg(s,a){if(a)return s.slice();var u=s.length,f=xg?xg(u):new s.constructor(u);return s.copy(f),f}function _d(s){var a=new s.constructor(s.byteLength);return new nc(a).set(new nc(s)),a}function Eb(s,a){var u=a?_d(s.buffer):s.buffer;return new s.constructor(u,s.byteOffset,s.byteLength)}function Ab(s){var a=new s.constructor(s.source,ql.exec(s));return a.lastIndex=s.lastIndex,a}function Tb(s){return Pa?ke(Pa.call(s)):{}}function t_(s,a){var u=a?_d(s.buffer):s.buffer;return new s.constructor(u,s.byteOffset,s.length)}function e_(s,a){if(s!==a){var u=s!==n,f=s===null,x=s===s,E=ci(s),L=a!==n,F=a===null,V=a===a,nt=ci(a);if(!F&&!nt&&!E&&s>a||E&&L&&V&&!F&&!nt||f&&L&&V||!u&&V||!x)return 1;if(!f&&!E&&!nt&&s<a||nt&&u&&x&&!f&&!E||F&&u&&x||!L&&x||!V)return-1}return 0}function Cb(s,a,u){for(var f=-1,x=s.criteria,E=a.criteria,L=x.length,F=u.length;++f<L;){var V=e_(x[f],E[f]);if(V){if(f>=F)return V;var nt=u[f];return V*(nt=="desc"?-1:1)}}return s.index-a.index}function n_(s,a,u,f){for(var x=-1,E=s.length,L=u.length,F=-1,V=a.length,nt=gn(E-L,0),rt=j(V+nt),ct=!f;++F<V;)rt[F]=a[F];for(;++x<L;)(ct||x<E)&&(rt[u[x]]=s[x]);for(;nt--;)rt[F++]=s[x++];return rt}function i_(s,a,u,f){for(var x=-1,E=s.length,L=-1,F=u.length,V=-1,nt=a.length,rt=gn(E-F,0),ct=j(rt+nt),Et=!f;++x<rt;)ct[x]=s[x];for(var Nt=x;++V<nt;)ct[Nt+V]=a[V];for(;++L<F;)(Et||x<E)&&(ct[Nt+u[L]]=s[x++]);return ct}function ti(s,a){var u=-1,f=s.length;for(a||(a=j(f));++u<f;)a[u]=s[u];return a}function nr(s,a,u,f){var x=!u;u||(u={});for(var E=-1,L=a.length;++E<L;){var F=a[E],V=f?f(u[F],s[F],F,u,s):n;V===n&&(V=s[F]),x?gr(u,F,V):Ia(u,F,V)}return u}function Rb(s,a){return nr(s,wd(s),a)}function Pb(s,a){return nr(s,g_(s),a)}function _c(s,a){return function(u,f){var x=le(u)?NS:JM,E=a?a():{};return x(u,s,Yt(f,2),E)}}function fo(s){return ve(function(a,u){var f=-1,x=u.length,E=x>1?u[x-1]:n,L=x>2?u[2]:n;for(E=s.length>3&&typeof E=="function"?(x--,E):n,L&&Gn(u[0],u[1],L)&&(E=x<3?n:E,x=1),a=ke(a);++f<x;){var F=u[f];F&&s(a,F,f,E)}return a})}function r_(s,a){return function(u,f){if(u==null)return u;if(!ei(u))return s(u,f);for(var x=u.length,E=a?x:-1,L=ke(u);(a?E--:++E<x)&&f(L[E],E,L)!==!1;);return u}}function s_(s){return function(a,u,f){for(var x=-1,E=ke(a),L=f(a),F=L.length;F--;){var V=L[s?F:++x];if(u(E[V],V,E)===!1)break}return a}}function Ib(s,a,u){var f=a&S,x=Ua(s);function E(){var L=this&&this!==Mn&&this instanceof E?x:s;return L.apply(f?u:this,arguments)}return E}function o_(s){return function(a){a=Pe(a);var u=oo(a)?zi(a):n,f=u?u[0]:a.charAt(0),x=u?Yr(u,1).join(""):a.slice(1);return f[s]()+x}}function po(s){return function(a){return Vh(r0(i0(a).replace(SS,"")),s,"")}}function Ua(s){return function(){var a=arguments;switch(a.length){case 0:return new s;case 1:return new s(a[0]);case 2:return new s(a[0],a[1]);case 3:return new s(a[0],a[1],a[2]);case 4:return new s(a[0],a[1],a[2],a[3]);case 5:return new s(a[0],a[1],a[2],a[3],a[4]);case 6:return new s(a[0],a[1],a[2],a[3],a[4],a[5]);case 7:return new s(a[0],a[1],a[2],a[3],a[4],a[5],a[6])}var u=ho(s.prototype),f=s.apply(u,a);return nn(f)?f:u}}function Lb(s,a,u){var f=Ua(s);function x(){for(var E=arguments.length,L=j(E),F=E,V=mo(x);F--;)L[F]=arguments[F];var nt=E<3&&L[0]!==V&&L[E-1]!==V?[]:Hr(L,V);if(E-=nt.length,E<u)return h_(s,a,vc,x.placeholder,n,L,nt,n,n,u-E);var rt=this&&this!==Mn&&this instanceof x?f:s;return oi(rt,this,L)}return x}function a_(s){return function(a,u,f){var x=ke(a);if(!ei(a)){var E=Yt(u,3);a=bn(a),u=function(F){return E(x[F],F,x)}}var L=s(a,u,f);return L>-1?x[E?a[L]:L]:n}}function l_(s){return vr(function(a){var u=a.length,f=u,x=bi.prototype.thru;for(s&&a.reverse();f--;){var E=a[f];if(typeof E!="function")throw new Mi(r);if(x&&!L&&Mc(E)=="wrapper")var L=new bi([],!0)}for(f=L?f:u;++f<u;){E=a[f];var F=Mc(E),V=F=="wrapper"?Md(E):n;V&&Ad(V[0])&&V[1]==(z|g|R|B)&&!V[4].length&&V[9]==1?L=L[Mc(V[0])].apply(L,V[3]):L=E.length==1&&Ad(E)?L[F]():L.thru(E)}return function(){var nt=arguments,rt=nt[0];if(L&&nt.length==1&&le(rt))return L.plant(rt).value();for(var ct=0,Et=u?a[ct].apply(this,nt):rt;++ct<u;)Et=a[ct].call(this,Et);return Et}})}function vc(s,a,u,f,x,E,L,F,V,nt){var rt=a&z,ct=a&S,Et=a&A,Nt=a&(g|I),Zt=a&U,me=Et?n:Ua(s);function jt(){for(var Me=arguments.length,Ae=j(Me),ui=Me;ui--;)Ae[ui]=arguments[ui];if(Nt)var Wn=mo(jt),hi=WS(Ae,Wn);if(f&&(Ae=n_(Ae,f,x,Nt)),E&&(Ae=i_(Ae,E,L,Nt)),Me-=hi,Nt&&Me<nt){var an=Hr(Ae,Wn);return h_(s,a,vc,jt.placeholder,u,Ae,an,F,V,nt-Me)}var Vi=ct?u:this,Mr=Et?Vi[s]:s;return Me=Ae.length,F?Ae=Jb(Ae,F):Zt&&Me>1&&Ae.reverse(),rt&&V<Me&&(Ae.length=V),this&&this!==Mn&&this instanceof jt&&(Mr=me||Ua(Mr)),Mr.apply(Vi,Ae)}return jt}function c_(s,a){return function(u,f){return ob(u,s,a(f),{})}}function yc(s,a){return function(u,f){var x;if(u===n&&f===n)return a;if(u!==n&&(x=u),f!==n){if(x===n)return f;typeof u=="string"||typeof f=="string"?(u=li(u),f=li(f)):(u=$g(u),f=$g(f)),x=s(u,f)}return x}}function vd(s){return vr(function(a){return a=je(a,ai(Yt())),ve(function(u){var f=this;return s(a,function(x){return oi(x,f,u)})})})}function xc(s,a){a=a===n?" ":li(a);var u=a.length;if(u<2)return u?hd(a,s):a;var f=hd(a,oc(s/ao(a)));return oo(a)?Yr(zi(f),0,s).join(""):f.slice(0,s)}function Db(s,a,u,f){var x=a&S,E=Ua(s);function L(){for(var F=-1,V=arguments.length,nt=-1,rt=f.length,ct=j(rt+V),Et=this&&this!==Mn&&this instanceof L?E:s;++nt<rt;)ct[nt]=f[nt];for(;V--;)ct[nt++]=arguments[++F];return oi(Et,x?u:this,ct)}return L}function u_(s){return function(a,u,f){return f&&typeof f!="number"&&Gn(a,u,f)&&(u=f=n),a=Sr(a),u===n?(u=a,a=0):u=Sr(u),f=f===n?a<u?1:-1:Sr(f),vb(a,u,f,s)}}function Sc(s){return function(a,u){return typeof a=="string"&&typeof u=="string"||(a=Ti(a),u=Ti(u)),s(a,u)}}function h_(s,a,u,f,x,E,L,F,V,nt){var rt=a&g,ct=rt?L:n,Et=rt?n:L,Nt=rt?E:n,Zt=rt?n:E;a|=rt?R:D,a&=~(rt?D:R),a&v||(a&=~(S|A));var me=[s,a,x,Nt,ct,Zt,Et,F,V,nt],jt=u.apply(n,me);return Ad(s)&&b_(jt,me),jt.placeholder=f,w_(jt,s,a)}function yd(s){var a=mn[s];return function(u,f){if(u=Ti(u),f=f==null?0:On(de(f),292),f&&wg(u)){var x=(Pe(u)+"e").split("e"),E=a(x[0]+"e"+(+x[1]+f));return x=(Pe(E)+"e").split("e"),+(x[0]+"e"+(+x[1]-f))}return a(u)}}var Ob=co&&1/jl(new co([,-0]))[1]==J?function(s){return new co(s)}:Hd;function d_(s){return function(a){var u=Nn(a);return u==G?Zh(a):u==C?KS(a):GS(a,s(a))}}function _r(s,a,u,f,x,E,L,F){var V=a&A;if(!V&&typeof s!="function")throw new Mi(r);var nt=f?f.length:0;if(nt||(a&=~(R|D),f=x=n),L=L===n?L:gn(de(L),0),F=F===n?F:de(F),nt-=x?x.length:0,a&D){var rt=f,ct=x;f=x=n}var Et=V?n:Md(s),Nt=[s,a,u,f,x,rt,ct,E,L,F];if(Et&&Zb(Nt,Et),s=Nt[0],a=Nt[1],u=Nt[2],f=Nt[3],x=Nt[4],F=Nt[9]=Nt[9]===n?V?0:s.length:gn(Nt[9]-nt,0),!F&&a&(g|I)&&(a&=~(g|I)),!a||a==S)var Zt=Ib(s,a,u);else a==g||a==I?Zt=Lb(s,a,F):(a==R||a==(S|R))&&!x.length?Zt=Db(s,a,u,f):Zt=vc.apply(n,Nt);var me=Et?qg:b_;return w_(me(Zt,Nt),s,a)}function f_(s,a,u,f){return s===n||Hi(s,lo[u])&&!Oe.call(f,u)?a:s}function p_(s,a,u,f,x,E){return nn(s)&&nn(a)&&(E.set(a,s),pc(s,a,n,p_,E),E.delete(a)),s}function Nb(s){return za(s)?n:s}function m_(s,a,u,f,x,E){var L=u&_,F=s.length,V=a.length;if(F!=V&&!(L&&V>F))return!1;var nt=E.get(s),rt=E.get(a);if(nt&&rt)return nt==a&&rt==s;var ct=-1,Et=!0,Nt=u&y?new ys:n;for(E.set(s,a),E.set(a,s);++ct<F;){var Zt=s[ct],me=a[ct];if(f)var jt=L?f(me,Zt,ct,a,s,E):f(Zt,me,ct,s,a,E);if(jt!==n){if(jt)continue;Et=!1;break}if(Nt){if(!Gh(a,function(Me,Ae){if(!Ea(Nt,Ae)&&(Zt===Me||x(Zt,Me,u,f,E)))return Nt.push(Ae)})){Et=!1;break}}else if(!(Zt===me||x(Zt,me,u,f,E))){Et=!1;break}}return E.delete(s),E.delete(a),Et}function Ub(s,a,u,f,x,E,L){switch(u){case xt:if(s.byteLength!=a.byteLength||s.byteOffset!=a.byteOffset)return!1;s=s.buffer,a=a.buffer;case Lt:return!(s.byteLength!=a.byteLength||!E(new nc(s),new nc(a)));case Tt:case Bt:case Ve:return Hi(+s,+a);case It:return s.name==a.name&&s.message==a.message;case Qt:case b:return s==a+"";case G:var F=Zh;case C:var V=f&_;if(F||(F=jl),s.size!=a.size&&!V)return!1;var nt=L.get(s);if(nt)return nt==a;f|=y,L.set(s,a);var rt=m_(F(s),F(a),f,x,E,L);return L.delete(s),rt;case q:if(Pa)return Pa.call(s)==Pa.call(a)}return!1}function Fb(s,a,u,f,x,E){var L=u&_,F=xd(s),V=F.length,nt=xd(a),rt=nt.length;if(V!=rt&&!L)return!1;for(var ct=V;ct--;){var Et=F[ct];if(!(L?Et in a:Oe.call(a,Et)))return!1}var Nt=E.get(s),Zt=E.get(a);if(Nt&&Zt)return Nt==a&&Zt==s;var me=!0;E.set(s,a),E.set(a,s);for(var jt=L;++ct<V;){Et=F[ct];var Me=s[Et],Ae=a[Et];if(f)var ui=L?f(Ae,Me,Et,a,s,E):f(Me,Ae,Et,s,a,E);if(!(ui===n?Me===Ae||x(Me,Ae,u,f,E):ui)){me=!1;break}jt||(jt=Et=="constructor")}if(me&&!jt){var Wn=s.constructor,hi=a.constructor;Wn!=hi&&"constructor"in s&&"constructor"in a&&!(typeof Wn=="function"&&Wn instanceof Wn&&typeof hi=="function"&&hi instanceof hi)&&(me=!1)}return E.delete(s),E.delete(a),me}function vr(s){return Cd(S_(s,n,P_),s+"")}function xd(s){return Ng(s,bn,wd)}function Sd(s){return Ng(s,ni,g_)}var Md=lc?function(s){return lc.get(s)}:Hd;function Mc(s){for(var a=s.name+"",u=uo[a],f=Oe.call(uo,a)?u.length:0;f--;){var x=u[f],E=x.func;if(E==null||E==s)return x.name}return a}function mo(s){var a=Oe.call(M,"placeholder")?M:s;return a.placeholder}function Yt(){var s=M.iteratee||zd;return s=s===zd?Bg:s,arguments.length?s(arguments[0],arguments[1]):s}function bc(s,a){var u=s.__data__;return Xb(a)?u[typeof a=="string"?"string":"hash"]:u.map}function bd(s){for(var a=bn(s),u=a.length;u--;){var f=a[u],x=s[f];a[u]=[f,x,y_(x)]}return a}function Ms(s,a){var u=$S(s,a);return Fg(u)?u:n}function Bb(s){var a=Oe.call(s,_s),u=s[_s];try{s[_s]=n;var f=!0}catch{}var x=tc.call(s);return f&&(a?s[_s]=u:delete s[_s]),x}var wd=Kh?function(s){return s==null?[]:(s=ke(s),zr(Kh(s),function(a){return Mg.call(s,a)}))}:Vd,g_=Kh?function(s){for(var a=[];s;)kr(a,wd(s)),s=ic(s);return a}:Vd,Nn=Vn;(Jh&&Nn(new Jh(new ArrayBuffer(1)))!=xt||Ta&&Nn(new Ta)!=G||Qh&&Nn(Qh.resolve())!=Ut||co&&Nn(new co)!=C||Ca&&Nn(new Ca)!=lt)&&(Nn=function(s){var a=Vn(s),u=a==kt?s.constructor:n,f=u?bs(u):"";if(f)switch(f){case xM:return xt;case SM:return G;case MM:return Ut;case bM:return C;case wM:return lt}return a});function zb(s,a,u){for(var f=-1,x=u.length;++f<x;){var E=u[f],L=E.size;switch(E.type){case"drop":s+=L;break;case"dropRight":a-=L;break;case"take":a=On(a,s+L);break;case"takeRight":s=gn(s,a-L);break}}return{start:s,end:a}}function kb(s){var a=s.match(Lh);return a?a[1].split(to):[]}function __(s,a,u){a=qr(a,s);for(var f=-1,x=a.length,E=!1;++f<x;){var L=ir(a[f]);if(!(E=s!=null&&u(s,L)))break;s=s[L]}return E||++f!=x?E:(x=s==null?0:s.length,!!x&&Pc(x)&&yr(L,x)&&(le(s)||ws(s)))}function Hb(s){var a=s.length,u=new s.constructor(a);return a&&typeof s[0]=="string"&&Oe.call(s,"index")&&(u.index=s.index,u.input=s.input),u}function v_(s){return typeof s.constructor=="function"&&!Fa(s)?ho(ic(s)):{}}function Vb(s,a,u){var f=s.constructor;switch(a){case Lt:return _d(s);case Tt:case Bt:return new f(+s);case xt:return Eb(s,u);case Rt:case Vt:case ne:case ht:case Ee:case oe:case Kt:case Ft:case At:return t_(s,u);case G:return new f;case Ve:case b:return new f(s);case Qt:return Ab(s);case C:return new f;case q:return Tb(s)}}function Gb(s,a){var u=a.length;if(!u)return s;var f=u-1;return a[f]=(u>1?"& ":"")+a[f],a=a.join(u>2?", ":" "),s.replace(Vl,`{
/* [wrapped with `+a+`] */
`)}function Wb(s){return le(s)||ws(s)||!!(bg&&s&&s[bg])}function yr(s,a){var u=typeof s;return a=a??$,!!a&&(u=="number"||u!="symbol"&&Z.test(s))&&s>-1&&s%1==0&&s<a}function Gn(s,a,u){if(!nn(u))return!1;var f=typeof a;return(f=="number"?ei(u)&&yr(a,u.length):f=="string"&&a in u)?Hi(u[a],s):!1}function Ed(s,a){if(le(s))return!1;var u=typeof s;return u=="number"||u=="symbol"||u=="boolean"||s==null||ci(s)?!0:xe.test(s)||!Te.test(s)||a!=null&&s in ke(a)}function Xb(s){var a=typeof s;return a=="string"||a=="number"||a=="symbol"||a=="boolean"?s!=="__proto__":s===null}function Ad(s){var a=Mc(s),u=M[a];if(typeof u!="function"||!(a in be.prototype))return!1;if(s===u)return!0;var f=Md(u);return!!f&&s===f[0]}function qb(s){return!!yg&&yg in s}var Yb=Jl?xr:Gd;function Fa(s){var a=s&&s.constructor,u=typeof a=="function"&&a.prototype||lo;return s===u}function y_(s){return s===s&&!nn(s)}function x_(s,a){return function(u){return u==null?!1:u[s]===a&&(a!==n||s in ke(u))}}function $b(s){var a=Cc(s,function(f){return u.size===c&&u.clear(),f}),u=a.cache;return a}function Zb(s,a){var u=s[1],f=a[1],x=u|f,E=x<(S|A|z),L=f==z&&u==g||f==z&&u==B&&s[7].length<=a[8]||f==(z|B)&&a[7].length<=a[8]&&u==g;if(!(E||L))return s;f&S&&(s[2]=a[2],x|=u&S?0:v);var F=a[3];if(F){var V=s[3];s[3]=V?n_(V,F,a[4]):F,s[4]=V?Hr(s[3],h):a[4]}return F=a[5],F&&(V=s[5],s[5]=V?i_(V,F,a[6]):F,s[6]=V?Hr(s[5],h):a[6]),F=a[7],F&&(s[7]=F),f&z&&(s[8]=s[8]==null?a[8]:On(s[8],a[8])),s[9]==null&&(s[9]=a[9]),s[0]=a[0],s[1]=x,s}function jb(s){var a=[];if(s!=null)for(var u in ke(s))a.push(u);return a}function Kb(s){return tc.call(s)}function S_(s,a,u){return a=gn(a===n?s.length-1:a,0),function(){for(var f=arguments,x=-1,E=gn(f.length-a,0),L=j(E);++x<E;)L[x]=f[a+x];x=-1;for(var F=j(a+1);++x<a;)F[x]=f[x];return F[a]=u(L),oi(s,this,F)}}function M_(s,a){return a.length<2?s:Ss(s,Ei(a,0,-1))}function Jb(s,a){for(var u=s.length,f=On(a.length,u),x=ti(s);f--;){var E=a[f];s[f]=yr(E,u)?x[E]:n}return s}function Td(s,a){if(!(a==="constructor"&&typeof s[a]=="function")&&a!="__proto__")return s[a]}var b_=E_(qg),Ba=fM||function(s,a){return Mn.setTimeout(s,a)},Cd=E_(Sb);function w_(s,a,u){var f=a+"";return Cd(s,Gb(f,Qb(kb(f),u)))}function E_(s){var a=0,u=0;return function(){var f=_M(),x=N-(f-u);if(u=f,x>0){if(++a>=w)return arguments[0]}else a=0;return s.apply(n,arguments)}}function wc(s,a){var u=-1,f=s.length,x=f-1;for(a=a===n?f:a;++u<a;){var E=ud(u,x),L=s[E];s[E]=s[u],s[u]=L}return s.length=a,s}var A_=$b(function(s){var a=[];return s.charCodeAt(0)===46&&a.push(""),s.replace(De,function(u,f,x,E){a.push(x?E.replace(Wl,"$1"):f||u)}),a});function ir(s){if(typeof s=="string"||ci(s))return s;var a=s+"";return a=="0"&&1/s==-J?"-0":a}function bs(s){if(s!=null){try{return Ql.call(s)}catch{}try{return s+""}catch{}}return""}function Qb(s,a){return Si(bt,function(u){var f="_."+u[0];a&u[1]&&!$l(s,f)&&s.push(f)}),s.sort()}function T_(s){if(s instanceof be)return s.clone();var a=new bi(s.__wrapped__,s.__chain__);return a.__actions__=ti(s.__actions__),a.__index__=s.__index__,a.__values__=s.__values__,a}function tw(s,a,u){(u?Gn(s,a,u):a===n)?a=1:a=gn(de(a),0);var f=s==null?0:s.length;if(!f||a<1)return[];for(var x=0,E=0,L=j(oc(f/a));x<f;)L[E++]=Ei(s,x,x+=a);return L}function ew(s){for(var a=-1,u=s==null?0:s.length,f=0,x=[];++a<u;){var E=s[a];E&&(x[f++]=E)}return x}function nw(){var s=arguments.length;if(!s)return[];for(var a=j(s-1),u=arguments[0],f=s;f--;)a[f-1]=arguments[f];return kr(le(u)?ti(u):[u],Rn(a,1))}var iw=ve(function(s,a){return on(s)?La(s,Rn(a,1,on,!0)):[]}),rw=ve(function(s,a){var u=Ai(a);return on(u)&&(u=n),on(s)?La(s,Rn(a,1,on,!0),Yt(u,2)):[]}),sw=ve(function(s,a){var u=Ai(a);return on(u)&&(u=n),on(s)?La(s,Rn(a,1,on,!0),n,u):[]});function ow(s,a,u){var f=s==null?0:s.length;return f?(a=u||a===n?1:de(a),Ei(s,a<0?0:a,f)):[]}function aw(s,a,u){var f=s==null?0:s.length;return f?(a=u||a===n?1:de(a),a=f-a,Ei(s,0,a<0?0:a)):[]}function lw(s,a){return s&&s.length?gc(s,Yt(a,3),!0,!0):[]}function cw(s,a){return s&&s.length?gc(s,Yt(a,3),!0):[]}function uw(s,a,u,f){var x=s==null?0:s.length;return x?(u&&typeof u!="number"&&Gn(s,a,u)&&(u=0,f=x),nb(s,a,u,f)):[]}function C_(s,a,u){var f=s==null?0:s.length;if(!f)return-1;var x=u==null?0:de(u);return x<0&&(x=gn(f+x,0)),Zl(s,Yt(a,3),x)}function R_(s,a,u){var f=s==null?0:s.length;if(!f)return-1;var x=f-1;return u!==n&&(x=de(u),x=u<0?gn(f+x,0):On(x,f-1)),Zl(s,Yt(a,3),x,!0)}function P_(s){var a=s==null?0:s.length;return a?Rn(s,1):[]}function hw(s){var a=s==null?0:s.length;return a?Rn(s,J):[]}function dw(s,a){var u=s==null?0:s.length;return u?(a=a===n?1:de(a),Rn(s,a)):[]}function fw(s){for(var a=-1,u=s==null?0:s.length,f={};++a<u;){var x=s[a];f[x[0]]=x[1]}return f}function I_(s){return s&&s.length?s[0]:n}function pw(s,a,u){var f=s==null?0:s.length;if(!f)return-1;var x=u==null?0:de(u);return x<0&&(x=gn(f+x,0)),so(s,a,x)}function mw(s){var a=s==null?0:s.length;return a?Ei(s,0,-1):[]}var gw=ve(function(s){var a=je(s,md);return a.length&&a[0]===s[0]?sd(a):[]}),_w=ve(function(s){var a=Ai(s),u=je(s,md);return a===Ai(u)?a=n:u.pop(),u.length&&u[0]===s[0]?sd(u,Yt(a,2)):[]}),vw=ve(function(s){var a=Ai(s),u=je(s,md);return a=typeof a=="function"?a:n,a&&u.pop(),u.length&&u[0]===s[0]?sd(u,n,a):[]});function yw(s,a){return s==null?"":mM.call(s,a)}function Ai(s){var a=s==null?0:s.length;return a?s[a-1]:n}function xw(s,a,u){var f=s==null?0:s.length;if(!f)return-1;var x=f;return u!==n&&(x=de(u),x=x<0?gn(f+x,0):On(x,f-1)),a===a?QS(s,a,x):Zl(s,hg,x,!0)}function Sw(s,a){return s&&s.length?Vg(s,de(a)):n}var Mw=ve(L_);function L_(s,a){return s&&s.length&&a&&a.length?cd(s,a):s}function bw(s,a,u){return s&&s.length&&a&&a.length?cd(s,a,Yt(u,2)):s}function ww(s,a,u){return s&&s.length&&a&&a.length?cd(s,a,n,u):s}var Ew=vr(function(s,a){var u=s==null?0:s.length,f=ed(s,a);return Xg(s,je(a,function(x){return yr(x,u)?+x:x}).sort(e_)),f});function Aw(s,a){var u=[];if(!(s&&s.length))return u;var f=-1,x=[],E=s.length;for(a=Yt(a,3);++f<E;){var L=s[f];a(L,f,s)&&(u.push(L),x.push(f))}return Xg(s,x),u}function Rd(s){return s==null?s:yM.call(s)}function Tw(s,a,u){var f=s==null?0:s.length;return f?(u&&typeof u!="number"&&Gn(s,a,u)?(a=0,u=f):(a=a==null?0:de(a),u=u===n?f:de(u)),Ei(s,a,u)):[]}function Cw(s,a){return mc(s,a)}function Rw(s,a,u){return dd(s,a,Yt(u,2))}function Pw(s,a){var u=s==null?0:s.length;if(u){var f=mc(s,a);if(f<u&&Hi(s[f],a))return f}return-1}function Iw(s,a){return mc(s,a,!0)}function Lw(s,a,u){return dd(s,a,Yt(u,2),!0)}function Dw(s,a){var u=s==null?0:s.length;if(u){var f=mc(s,a,!0)-1;if(Hi(s[f],a))return f}return-1}function Ow(s){return s&&s.length?Yg(s):[]}function Nw(s,a){return s&&s.length?Yg(s,Yt(a,2)):[]}function Uw(s){var a=s==null?0:s.length;return a?Ei(s,1,a):[]}function Fw(s,a,u){return s&&s.length?(a=u||a===n?1:de(a),Ei(s,0,a<0?0:a)):[]}function Bw(s,a,u){var f=s==null?0:s.length;return f?(a=u||a===n?1:de(a),a=f-a,Ei(s,a<0?0:a,f)):[]}function zw(s,a){return s&&s.length?gc(s,Yt(a,3),!1,!0):[]}function kw(s,a){return s&&s.length?gc(s,Yt(a,3)):[]}var Hw=ve(function(s){return Xr(Rn(s,1,on,!0))}),Vw=ve(function(s){var a=Ai(s);return on(a)&&(a=n),Xr(Rn(s,1,on,!0),Yt(a,2))}),Gw=ve(function(s){var a=Ai(s);return a=typeof a=="function"?a:n,Xr(Rn(s,1,on,!0),n,a)});function Ww(s){return s&&s.length?Xr(s):[]}function Xw(s,a){return s&&s.length?Xr(s,Yt(a,2)):[]}function qw(s,a){return a=typeof a=="function"?a:n,s&&s.length?Xr(s,n,a):[]}function Pd(s){if(!(s&&s.length))return[];var a=0;return s=zr(s,function(u){if(on(u))return a=gn(u.length,a),!0}),Yh(a,function(u){return je(s,Wh(u))})}function D_(s,a){if(!(s&&s.length))return[];var u=Pd(s);return a==null?u:je(u,function(f){return oi(a,n,f)})}var Yw=ve(function(s,a){return on(s)?La(s,a):[]}),$w=ve(function(s){return pd(zr(s,on))}),Zw=ve(function(s){var a=Ai(s);return on(a)&&(a=n),pd(zr(s,on),Yt(a,2))}),jw=ve(function(s){var a=Ai(s);return a=typeof a=="function"?a:n,pd(zr(s,on),n,a)}),Kw=ve(Pd);function Jw(s,a){return Kg(s||[],a||[],Ia)}function Qw(s,a){return Kg(s||[],a||[],Na)}var tE=ve(function(s){var a=s.length,u=a>1?s[a-1]:n;return u=typeof u=="function"?(s.pop(),u):n,D_(s,u)});function O_(s){var a=M(s);return a.__chain__=!0,a}function eE(s,a){return a(s),s}function Ec(s,a){return a(s)}var nE=vr(function(s){var a=s.length,u=a?s[0]:0,f=this.__wrapped__,x=function(E){return ed(E,s)};return a>1||this.__actions__.length||!(f instanceof be)||!yr(u)?this.thru(x):(f=f.slice(u,+u+(a?1:0)),f.__actions__.push({func:Ec,args:[x],thisArg:n}),new bi(f,this.__chain__).thru(function(E){return a&&!E.length&&E.push(n),E}))});function iE(){return O_(this)}function rE(){return new bi(this.value(),this.__chain__)}function sE(){this.__values__===n&&(this.__values__=$_(this.value()));var s=this.__index__>=this.__values__.length,a=s?n:this.__values__[this.__index__++];return{done:s,value:a}}function oE(){return this}function aE(s){for(var a,u=this;u instanceof uc;){var f=T_(u);f.__index__=0,f.__values__=n,a?x.__wrapped__=f:a=f;var x=f;u=u.__wrapped__}return x.__wrapped__=s,a}function lE(){var s=this.__wrapped__;if(s instanceof be){var a=s;return this.__actions__.length&&(a=new be(this)),a=a.reverse(),a.__actions__.push({func:Ec,args:[Rd],thisArg:n}),new bi(a,this.__chain__)}return this.thru(Rd)}function cE(){return jg(this.__wrapped__,this.__actions__)}var uE=_c(function(s,a,u){Oe.call(s,u)?++s[u]:gr(s,u,1)});function hE(s,a,u){var f=le(s)?cg:eb;return u&&Gn(s,a,u)&&(a=n),f(s,Yt(a,3))}function dE(s,a){var u=le(s)?zr:Dg;return u(s,Yt(a,3))}var fE=a_(C_),pE=a_(R_);function mE(s,a){return Rn(Ac(s,a),1)}function gE(s,a){return Rn(Ac(s,a),J)}function _E(s,a,u){return u=u===n?1:de(u),Rn(Ac(s,a),u)}function N_(s,a){var u=le(s)?Si:Wr;return u(s,Yt(a,3))}function U_(s,a){var u=le(s)?US:Lg;return u(s,Yt(a,3))}var vE=_c(function(s,a,u){Oe.call(s,u)?s[u].push(a):gr(s,u,[a])});function yE(s,a,u,f){s=ei(s)?s:_o(s),u=u&&!f?de(u):0;var x=s.length;return u<0&&(u=gn(x+u,0)),Ic(s)?u<=x&&s.indexOf(a,u)>-1:!!x&&so(s,a,u)>-1}var xE=ve(function(s,a,u){var f=-1,x=typeof a=="function",E=ei(s)?j(s.length):[];return Wr(s,function(L){E[++f]=x?oi(a,L,u):Da(L,a,u)}),E}),SE=_c(function(s,a,u){gr(s,u,a)});function Ac(s,a){var u=le(s)?je:zg;return u(s,Yt(a,3))}function ME(s,a,u,f){return s==null?[]:(le(a)||(a=a==null?[]:[a]),u=f?n:u,le(u)||(u=u==null?[]:[u]),Gg(s,a,u))}var bE=_c(function(s,a,u){s[u?0:1].push(a)},function(){return[[],[]]});function wE(s,a,u){var f=le(s)?Vh:fg,x=arguments.length<3;return f(s,Yt(a,4),u,x,Wr)}function EE(s,a,u){var f=le(s)?FS:fg,x=arguments.length<3;return f(s,Yt(a,4),u,x,Lg)}function AE(s,a){var u=le(s)?zr:Dg;return u(s,Rc(Yt(a,3)))}function TE(s){var a=le(s)?Cg:yb;return a(s)}function CE(s,a,u){(u?Gn(s,a,u):a===n)?a=1:a=de(a);var f=le(s)?jM:xb;return f(s,a)}function RE(s){var a=le(s)?KM:Mb;return a(s)}function PE(s){if(s==null)return 0;if(ei(s))return Ic(s)?ao(s):s.length;var a=Nn(s);return a==G||a==C?s.size:ad(s).length}function IE(s,a,u){var f=le(s)?Gh:bb;return u&&Gn(s,a,u)&&(a=n),f(s,Yt(a,3))}var LE=ve(function(s,a){if(s==null)return[];var u=a.length;return u>1&&Gn(s,a[0],a[1])?a=[]:u>2&&Gn(a[0],a[1],a[2])&&(a=[a[0]]),Gg(s,Rn(a,1),[])}),Tc=dM||function(){return Mn.Date.now()};function DE(s,a){if(typeof a!="function")throw new Mi(r);return s=de(s),function(){if(--s<1)return a.apply(this,arguments)}}function F_(s,a,u){return a=u?n:a,a=s&&a==null?s.length:a,_r(s,z,n,n,n,n,a)}function B_(s,a){var u;if(typeof a!="function")throw new Mi(r);return s=de(s),function(){return--s>0&&(u=a.apply(this,arguments)),s<=1&&(a=n),u}}var Id=ve(function(s,a,u){var f=S;if(u.length){var x=Hr(u,mo(Id));f|=R}return _r(s,f,a,u,x)}),z_=ve(function(s,a,u){var f=S|A;if(u.length){var x=Hr(u,mo(z_));f|=R}return _r(a,f,s,u,x)});function k_(s,a,u){a=u?n:a;var f=_r(s,g,n,n,n,n,n,a);return f.placeholder=k_.placeholder,f}function H_(s,a,u){a=u?n:a;var f=_r(s,I,n,n,n,n,n,a);return f.placeholder=H_.placeholder,f}function V_(s,a,u){var f,x,E,L,F,V,nt=0,rt=!1,ct=!1,Et=!0;if(typeof s!="function")throw new Mi(r);a=Ti(a)||0,nn(u)&&(rt=!!u.leading,ct="maxWait"in u,E=ct?gn(Ti(u.maxWait)||0,a):E,Et="trailing"in u?!!u.trailing:Et);function Nt(an){var Vi=f,Mr=x;return f=x=n,nt=an,L=s.apply(Mr,Vi),L}function Zt(an){return nt=an,F=Ba(Me,a),rt?Nt(an):L}function me(an){var Vi=an-V,Mr=an-nt,a0=a-Vi;return ct?On(a0,E-Mr):a0}function jt(an){var Vi=an-V,Mr=an-nt;return V===n||Vi>=a||Vi<0||ct&&Mr>=E}function Me(){var an=Tc();if(jt(an))return Ae(an);F=Ba(Me,me(an))}function Ae(an){return F=n,Et&&f?Nt(an):(f=x=n,L)}function ui(){F!==n&&Jg(F),nt=0,f=V=x=F=n}function Wn(){return F===n?L:Ae(Tc())}function hi(){var an=Tc(),Vi=jt(an);if(f=arguments,x=this,V=an,Vi){if(F===n)return Zt(V);if(ct)return Jg(F),F=Ba(Me,a),Nt(V)}return F===n&&(F=Ba(Me,a)),L}return hi.cancel=ui,hi.flush=Wn,hi}var OE=ve(function(s,a){return Ig(s,1,a)}),NE=ve(function(s,a,u){return Ig(s,Ti(a)||0,u)});function UE(s){return _r(s,U)}function Cc(s,a){if(typeof s!="function"||a!=null&&typeof a!="function")throw new Mi(r);var u=function(){var f=arguments,x=a?a.apply(this,f):f[0],E=u.cache;if(E.has(x))return E.get(x);var L=s.apply(this,f);return u.cache=E.set(x,L)||E,L};return u.cache=new(Cc.Cache||mr),u}Cc.Cache=mr;function Rc(s){if(typeof s!="function")throw new Mi(r);return function(){var a=arguments;switch(a.length){case 0:return!s.call(this);case 1:return!s.call(this,a[0]);case 2:return!s.call(this,a[0],a[1]);case 3:return!s.call(this,a[0],a[1],a[2])}return!s.apply(this,a)}}function FE(s){return B_(2,s)}var BE=wb(function(s,a){a=a.length==1&&le(a[0])?je(a[0],ai(Yt())):je(Rn(a,1),ai(Yt()));var u=a.length;return ve(function(f){for(var x=-1,E=On(f.length,u);++x<E;)f[x]=a[x].call(this,f[x]);return oi(s,this,f)})}),Ld=ve(function(s,a){var u=Hr(a,mo(Ld));return _r(s,R,n,a,u)}),G_=ve(function(s,a){var u=Hr(a,mo(G_));return _r(s,D,n,a,u)}),zE=vr(function(s,a){return _r(s,B,n,n,n,a)});function kE(s,a){if(typeof s!="function")throw new Mi(r);return a=a===n?a:de(a),ve(s,a)}function HE(s,a){if(typeof s!="function")throw new Mi(r);return a=a==null?0:gn(de(a),0),ve(function(u){var f=u[a],x=Yr(u,0,a);return f&&kr(x,f),oi(s,this,x)})}function VE(s,a,u){var f=!0,x=!0;if(typeof s!="function")throw new Mi(r);return nn(u)&&(f="leading"in u?!!u.leading:f,x="trailing"in u?!!u.trailing:x),V_(s,a,{leading:f,maxWait:a,trailing:x})}function GE(s){return F_(s,1)}function WE(s,a){return Ld(gd(a),s)}function XE(){if(!arguments.length)return[];var s=arguments[0];return le(s)?s:[s]}function qE(s){return wi(s,m)}function YE(s,a){return a=typeof a=="function"?a:n,wi(s,m,a)}function $E(s){return wi(s,d|m)}function ZE(s,a){return a=typeof a=="function"?a:n,wi(s,d|m,a)}function jE(s,a){return a==null||Pg(s,a,bn(a))}function Hi(s,a){return s===a||s!==s&&a!==a}var KE=Sc(rd),JE=Sc(function(s,a){return s>=a}),ws=Ug(function(){return arguments}())?Ug:function(s){return rn(s)&&Oe.call(s,"callee")&&!Mg.call(s,"callee")},le=j.isArray,QE=ig?ai(ig):ab;function ei(s){return s!=null&&Pc(s.length)&&!xr(s)}function on(s){return rn(s)&&ei(s)}function tA(s){return s===!0||s===!1||rn(s)&&Vn(s)==Tt}var $r=pM||Gd,eA=rg?ai(rg):lb;function nA(s){return rn(s)&&s.nodeType===1&&!za(s)}function iA(s){if(s==null)return!0;if(ei(s)&&(le(s)||typeof s=="string"||typeof s.splice=="function"||$r(s)||go(s)||ws(s)))return!s.length;var a=Nn(s);if(a==G||a==C)return!s.size;if(Fa(s))return!ad(s).length;for(var u in s)if(Oe.call(s,u))return!1;return!0}function rA(s,a){return Oa(s,a)}function sA(s,a,u){u=typeof u=="function"?u:n;var f=u?u(s,a):n;return f===n?Oa(s,a,n,u):!!f}function Dd(s){if(!rn(s))return!1;var a=Vn(s);return a==It||a==qt||typeof s.message=="string"&&typeof s.name=="string"&&!za(s)}function oA(s){return typeof s=="number"&&wg(s)}function xr(s){if(!nn(s))return!1;var a=Vn(s);return a==_e||a==te||a==ft||a==ze}function W_(s){return typeof s=="number"&&s==de(s)}function Pc(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=$}function nn(s){var a=typeof s;return s!=null&&(a=="object"||a=="function")}function rn(s){return s!=null&&typeof s=="object"}var X_=sg?ai(sg):ub;function aA(s,a){return s===a||od(s,a,bd(a))}function lA(s,a,u){return u=typeof u=="function"?u:n,od(s,a,bd(a),u)}function cA(s){return q_(s)&&s!=+s}function uA(s){if(Yb(s))throw new se(i);return Fg(s)}function hA(s){return s===null}function dA(s){return s==null}function q_(s){return typeof s=="number"||rn(s)&&Vn(s)==Ve}function za(s){if(!rn(s)||Vn(s)!=kt)return!1;var a=ic(s);if(a===null)return!0;var u=Oe.call(a,"constructor")&&a.constructor;return typeof u=="function"&&u instanceof u&&Ql.call(u)==lM}var Od=og?ai(og):hb;function fA(s){return W_(s)&&s>=-$&&s<=$}var Y_=ag?ai(ag):db;function Ic(s){return typeof s=="string"||!le(s)&&rn(s)&&Vn(s)==b}function ci(s){return typeof s=="symbol"||rn(s)&&Vn(s)==q}var go=lg?ai(lg):fb;function pA(s){return s===n}function mA(s){return rn(s)&&Nn(s)==lt}function gA(s){return rn(s)&&Vn(s)==pt}var _A=Sc(ld),vA=Sc(function(s,a){return s<=a});function $_(s){if(!s)return[];if(ei(s))return Ic(s)?zi(s):ti(s);if(Aa&&s[Aa])return jS(s[Aa]());var a=Nn(s),u=a==G?Zh:a==C?jl:_o;return u(s)}function Sr(s){if(!s)return s===0?s:0;if(s=Ti(s),s===J||s===-J){var a=s<0?-1:1;return a*ut}return s===s?s:0}function de(s){var a=Sr(s),u=a%1;return a===a?u?a-u:a:0}function Z_(s){return s?xs(de(s),0,it):0}function Ti(s){if(typeof s=="number")return s;if(ci(s))return et;if(nn(s)){var a=typeof s.valueOf=="function"?s.valueOf():s;s=nn(a)?a+"":a}if(typeof s!="string")return s===0?s:+s;s=pg(s);var u=Oh.test(s);return u||W.test(s)?DS(s.slice(2),u?2:8):Dh.test(s)?et:+s}function j_(s){return nr(s,ni(s))}function yA(s){return s?xs(de(s),-$,$):s===0?s:0}function Pe(s){return s==null?"":li(s)}var xA=fo(function(s,a){if(Fa(a)||ei(a)){nr(a,bn(a),s);return}for(var u in a)Oe.call(a,u)&&Ia(s,u,a[u])}),K_=fo(function(s,a){nr(a,ni(a),s)}),Lc=fo(function(s,a,u,f){nr(a,ni(a),s,f)}),SA=fo(function(s,a,u,f){nr(a,bn(a),s,f)}),MA=vr(ed);function bA(s,a){var u=ho(s);return a==null?u:Rg(u,a)}var wA=ve(function(s,a){s=ke(s);var u=-1,f=a.length,x=f>2?a[2]:n;for(x&&Gn(a[0],a[1],x)&&(f=1);++u<f;)for(var E=a[u],L=ni(E),F=-1,V=L.length;++F<V;){var nt=L[F],rt=s[nt];(rt===n||Hi(rt,lo[nt])&&!Oe.call(s,nt))&&(s[nt]=E[nt])}return s}),EA=ve(function(s){return s.push(n,p_),oi(J_,n,s)});function AA(s,a){return ug(s,Yt(a,3),er)}function TA(s,a){return ug(s,Yt(a,3),id)}function CA(s,a){return s==null?s:nd(s,Yt(a,3),ni)}function RA(s,a){return s==null?s:Og(s,Yt(a,3),ni)}function PA(s,a){return s&&er(s,Yt(a,3))}function IA(s,a){return s&&id(s,Yt(a,3))}function LA(s){return s==null?[]:fc(s,bn(s))}function DA(s){return s==null?[]:fc(s,ni(s))}function Nd(s,a,u){var f=s==null?n:Ss(s,a);return f===n?u:f}function OA(s,a){return s!=null&&__(s,a,ib)}function Ud(s,a){return s!=null&&__(s,a,rb)}var NA=c_(function(s,a,u){a!=null&&typeof a.toString!="function"&&(a=tc.call(a)),s[a]=u},Bd(ii)),UA=c_(function(s,a,u){a!=null&&typeof a.toString!="function"&&(a=tc.call(a)),Oe.call(s,a)?s[a].push(u):s[a]=[u]},Yt),FA=ve(Da);function bn(s){return ei(s)?Tg(s):ad(s)}function ni(s){return ei(s)?Tg(s,!0):pb(s)}function BA(s,a){var u={};return a=Yt(a,3),er(s,function(f,x,E){gr(u,a(f,x,E),f)}),u}function zA(s,a){var u={};return a=Yt(a,3),er(s,function(f,x,E){gr(u,x,a(f,x,E))}),u}var kA=fo(function(s,a,u){pc(s,a,u)}),J_=fo(function(s,a,u,f){pc(s,a,u,f)}),HA=vr(function(s,a){var u={};if(s==null)return u;var f=!1;a=je(a,function(E){return E=qr(E,s),f||(f=E.length>1),E}),nr(s,Sd(s),u),f&&(u=wi(u,d|p|m,Nb));for(var x=a.length;x--;)fd(u,a[x]);return u});function VA(s,a){return Q_(s,Rc(Yt(a)))}var GA=vr(function(s,a){return s==null?{}:gb(s,a)});function Q_(s,a){if(s==null)return{};var u=je(Sd(s),function(f){return[f]});return a=Yt(a),Wg(s,u,function(f,x){return a(f,x[0])})}function WA(s,a,u){a=qr(a,s);var f=-1,x=a.length;for(x||(x=1,s=n);++f<x;){var E=s==null?n:s[ir(a[f])];E===n&&(f=x,E=u),s=xr(E)?E.call(s):E}return s}function XA(s,a,u){return s==null?s:Na(s,a,u)}function qA(s,a,u,f){return f=typeof f=="function"?f:n,s==null?s:Na(s,a,u,f)}var t0=d_(bn),e0=d_(ni);function YA(s,a,u){var f=le(s),x=f||$r(s)||go(s);if(a=Yt(a,4),u==null){var E=s&&s.constructor;x?u=f?new E:[]:nn(s)?u=xr(E)?ho(ic(s)):{}:u={}}return(x?Si:er)(s,function(L,F,V){return a(u,L,F,V)}),u}function $A(s,a){return s==null?!0:fd(s,a)}function ZA(s,a,u){return s==null?s:Zg(s,a,gd(u))}function jA(s,a,u,f){return f=typeof f=="function"?f:n,s==null?s:Zg(s,a,gd(u),f)}function _o(s){return s==null?[]:$h(s,bn(s))}function KA(s){return s==null?[]:$h(s,ni(s))}function JA(s,a,u){return u===n&&(u=a,a=n),u!==n&&(u=Ti(u),u=u===u?u:0),a!==n&&(a=Ti(a),a=a===a?a:0),xs(Ti(s),a,u)}function QA(s,a,u){return a=Sr(a),u===n?(u=a,a=0):u=Sr(u),s=Ti(s),sb(s,a,u)}function tT(s,a,u){if(u&&typeof u!="boolean"&&Gn(s,a,u)&&(a=u=n),u===n&&(typeof a=="boolean"?(u=a,a=n):typeof s=="boolean"&&(u=s,s=n)),s===n&&a===n?(s=0,a=1):(s=Sr(s),a===n?(a=s,s=0):a=Sr(a)),s>a){var f=s;s=a,a=f}if(u||s%1||a%1){var x=Eg();return On(s+x*(a-s+LS("1e-"+((x+"").length-1))),a)}return ud(s,a)}var eT=po(function(s,a,u){return a=a.toLowerCase(),s+(u?n0(a):a)});function n0(s){return Fd(Pe(s).toLowerCase())}function i0(s){return s=Pe(s),s&&s.replace(K,XS).replace(MS,"")}function nT(s,a,u){s=Pe(s),a=li(a);var f=s.length;u=u===n?f:xs(de(u),0,f);var x=u;return u-=a.length,u>=0&&s.slice(u,x)==a}function iT(s){return s=Pe(s),s&&gt.test(s)?s.replace(zt,qS):s}function rT(s){return s=Pe(s),s&&Ce.test(s)?s.replace(sn,"\\$&"):s}var sT=po(function(s,a,u){return s+(u?"-":"")+a.toLowerCase()}),oT=po(function(s,a,u){return s+(u?" ":"")+a.toLowerCase()}),aT=o_("toLowerCase");function lT(s,a,u){s=Pe(s),a=de(a);var f=a?ao(s):0;if(!a||f>=a)return s;var x=(a-f)/2;return xc(ac(x),u)+s+xc(oc(x),u)}function cT(s,a,u){s=Pe(s),a=de(a);var f=a?ao(s):0;return a&&f<a?s+xc(a-f,u):s}function uT(s,a,u){s=Pe(s),a=de(a);var f=a?ao(s):0;return a&&f<a?xc(a-f,u)+s:s}function hT(s,a,u){return u||a==null?a=0:a&&(a=+a),vM(Pe(s).replace(Ge,""),a||0)}function dT(s,a,u){return(u?Gn(s,a,u):a===n)?a=1:a=de(a),hd(Pe(s),a)}function fT(){var s=arguments,a=Pe(s[0]);return s.length<3?a:a.replace(s[1],s[2])}var pT=po(function(s,a,u){return s+(u?"_":"")+a.toLowerCase()});function mT(s,a,u){return u&&typeof u!="number"&&Gn(s,a,u)&&(a=u=n),u=u===n?it:u>>>0,u?(s=Pe(s),s&&(typeof a=="string"||a!=null&&!Od(a))&&(a=li(a),!a&&oo(s))?Yr(zi(s),0,u):s.split(a,u)):[]}var gT=po(function(s,a,u){return s+(u?" ":"")+Fd(a)});function _T(s,a,u){return s=Pe(s),u=u==null?0:xs(de(u),0,s.length),a=li(a),s.slice(u,u+a.length)==a}function vT(s,a,u){var f=M.templateSettings;u&&Gn(s,a,u)&&(a=n),s=Pe(s),a=Lc({},a,f,f_);var x=Lc({},a.imports,f.imports,f_),E=bn(x),L=$h(x,E),F,V,nt=0,rt=a.interpolate||Y,ct="__p += '",Et=jh((a.escape||Y).source+"|"+rt.source+"|"+(rt===Gt?Xl:Y).source+"|"+(a.evaluate||Y).source+"|$","g"),Nt="//# sourceURL="+(Oe.call(a,"sourceURL")?(a.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++TS+"]")+`
`;s.replace(Et,function(jt,Me,Ae,ui,Wn,hi){return Ae||(Ae=ui),ct+=s.slice(nt,hi).replace(Ct,YS),Me&&(F=!0,ct+=`' +
__e(`+Me+`) +
'`),Wn&&(V=!0,ct+=`';
`+Wn+`;
__p += '`),Ae&&(ct+=`' +
((__t = (`+Ae+`)) == null ? '' : __t) +
'`),nt=hi+jt.length,jt}),ct+=`';
`;var Zt=Oe.call(a,"variable")&&a.variable;if(!Zt)ct=`with (obj) {
`+ct+`
}
`;else if(eo.test(Zt))throw new se(o);ct=(V?ct.replace(ae,""):ct).replace(O,"$1").replace(vt,"$1;"),ct="function("+(Zt||"obj")+`) {
`+(Zt?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(F?", __e = _.escape":"")+(V?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ct+`return __p
}`;var me=s0(function(){return Re(E,Nt+"return "+ct).apply(n,L)});if(me.source=ct,Dd(me))throw me;return me}function yT(s){return Pe(s).toLowerCase()}function xT(s){return Pe(s).toUpperCase()}function ST(s,a,u){if(s=Pe(s),s&&(u||a===n))return pg(s);if(!s||!(a=li(a)))return s;var f=zi(s),x=zi(a),E=mg(f,x),L=gg(f,x)+1;return Yr(f,E,L).join("")}function MT(s,a,u){if(s=Pe(s),s&&(u||a===n))return s.slice(0,vg(s)+1);if(!s||!(a=li(a)))return s;var f=zi(s),x=gg(f,zi(a))+1;return Yr(f,0,x).join("")}function bT(s,a,u){if(s=Pe(s),s&&(u||a===n))return s.replace(Ge,"");if(!s||!(a=li(a)))return s;var f=zi(s),x=mg(f,zi(a));return Yr(f,x).join("")}function wT(s,a){var u=ot,f=Mt;if(nn(a)){var x="separator"in a?a.separator:x;u="length"in a?de(a.length):u,f="omission"in a?li(a.omission):f}s=Pe(s);var E=s.length;if(oo(s)){var L=zi(s);E=L.length}if(u>=E)return s;var F=u-ao(f);if(F<1)return f;var V=L?Yr(L,0,F).join(""):s.slice(0,F);if(x===n)return V+f;if(L&&(F+=V.length-F),Od(x)){if(s.slice(F).search(x)){var nt,rt=V;for(x.global||(x=jh(x.source,Pe(ql.exec(x))+"g")),x.lastIndex=0;nt=x.exec(rt);)var ct=nt.index;V=V.slice(0,ct===n?F:ct)}}else if(s.indexOf(li(x),F)!=F){var Et=V.lastIndexOf(x);Et>-1&&(V=V.slice(0,Et))}return V+f}function ET(s){return s=Pe(s),s&&P.test(s)?s.replace(wt,tM):s}var AT=po(function(s,a,u){return s+(u?" ":"")+a.toUpperCase()}),Fd=o_("toUpperCase");function r0(s,a,u){return s=Pe(s),a=u?n:a,a===n?ZS(s)?iM(s):kS(s):s.match(a)||[]}var s0=ve(function(s,a){try{return oi(s,n,a)}catch(u){return Dd(u)?u:new se(u)}}),TT=vr(function(s,a){return Si(a,function(u){u=ir(u),gr(s,u,Id(s[u],s))}),s});function CT(s){var a=s==null?0:s.length,u=Yt();return s=a?je(s,function(f){if(typeof f[1]!="function")throw new Mi(r);return[u(f[0]),f[1]]}):[],ve(function(f){for(var x=-1;++x<a;){var E=s[x];if(oi(E[0],this,f))return oi(E[1],this,f)}})}function RT(s){return tb(wi(s,d))}function Bd(s){return function(){return s}}function PT(s,a){return s==null||s!==s?a:s}var IT=l_(),LT=l_(!0);function ii(s){return s}function zd(s){return Bg(typeof s=="function"?s:wi(s,d))}function DT(s){return kg(wi(s,d))}function OT(s,a){return Hg(s,wi(a,d))}var NT=ve(function(s,a){return function(u){return Da(u,s,a)}}),UT=ve(function(s,a){return function(u){return Da(s,u,a)}});function kd(s,a,u){var f=bn(a),x=fc(a,f);u==null&&!(nn(a)&&(x.length||!f.length))&&(u=a,a=s,s=this,x=fc(a,bn(a)));var E=!(nn(u)&&"chain"in u)||!!u.chain,L=xr(s);return Si(x,function(F){var V=a[F];s[F]=V,L&&(s.prototype[F]=function(){var nt=this.__chain__;if(E||nt){var rt=s(this.__wrapped__),ct=rt.__actions__=ti(this.__actions__);return ct.push({func:V,args:arguments,thisArg:s}),rt.__chain__=nt,rt}return V.apply(s,kr([this.value()],arguments))})}),s}function FT(){return Mn._===this&&(Mn._=cM),this}function Hd(){}function BT(s){return s=de(s),ve(function(a){return Vg(a,s)})}var zT=vd(je),kT=vd(cg),HT=vd(Gh);function o0(s){return Ed(s)?Wh(ir(s)):_b(s)}function VT(s){return function(a){return s==null?n:Ss(s,a)}}var GT=u_(),WT=u_(!0);function Vd(){return[]}function Gd(){return!1}function XT(){return{}}function qT(){return""}function YT(){return!0}function $T(s,a){if(s=de(s),s<1||s>$)return[];var u=it,f=On(s,it);a=Yt(a),s-=it;for(var x=Yh(f,a);++u<s;)a(u);return x}function ZT(s){return le(s)?je(s,ir):ci(s)?[s]:ti(A_(Pe(s)))}function jT(s){var a=++aM;return Pe(s)+a}var KT=yc(function(s,a){return s+a},0),JT=yd("ceil"),QT=yc(function(s,a){return s/a},1),t1=yd("floor");function e1(s){return s&&s.length?dc(s,ii,rd):n}function n1(s,a){return s&&s.length?dc(s,Yt(a,2),rd):n}function i1(s){return dg(s,ii)}function r1(s,a){return dg(s,Yt(a,2))}function s1(s){return s&&s.length?dc(s,ii,ld):n}function o1(s,a){return s&&s.length?dc(s,Yt(a,2),ld):n}var a1=yc(function(s,a){return s*a},1),l1=yd("round"),c1=yc(function(s,a){return s-a},0);function u1(s){return s&&s.length?qh(s,ii):0}function h1(s,a){return s&&s.length?qh(s,Yt(a,2)):0}return M.after=DE,M.ary=F_,M.assign=xA,M.assignIn=K_,M.assignInWith=Lc,M.assignWith=SA,M.at=MA,M.before=B_,M.bind=Id,M.bindAll=TT,M.bindKey=z_,M.castArray=XE,M.chain=O_,M.chunk=tw,M.compact=ew,M.concat=nw,M.cond=CT,M.conforms=RT,M.constant=Bd,M.countBy=uE,M.create=bA,M.curry=k_,M.curryRight=H_,M.debounce=V_,M.defaults=wA,M.defaultsDeep=EA,M.defer=OE,M.delay=NE,M.difference=iw,M.differenceBy=rw,M.differenceWith=sw,M.drop=ow,M.dropRight=aw,M.dropRightWhile=lw,M.dropWhile=cw,M.fill=uw,M.filter=dE,M.flatMap=mE,M.flatMapDeep=gE,M.flatMapDepth=_E,M.flatten=P_,M.flattenDeep=hw,M.flattenDepth=dw,M.flip=UE,M.flow=IT,M.flowRight=LT,M.fromPairs=fw,M.functions=LA,M.functionsIn=DA,M.groupBy=vE,M.initial=mw,M.intersection=gw,M.intersectionBy=_w,M.intersectionWith=vw,M.invert=NA,M.invertBy=UA,M.invokeMap=xE,M.iteratee=zd,M.keyBy=SE,M.keys=bn,M.keysIn=ni,M.map=Ac,M.mapKeys=BA,M.mapValues=zA,M.matches=DT,M.matchesProperty=OT,M.memoize=Cc,M.merge=kA,M.mergeWith=J_,M.method=NT,M.methodOf=UT,M.mixin=kd,M.negate=Rc,M.nthArg=BT,M.omit=HA,M.omitBy=VA,M.once=FE,M.orderBy=ME,M.over=zT,M.overArgs=BE,M.overEvery=kT,M.overSome=HT,M.partial=Ld,M.partialRight=G_,M.partition=bE,M.pick=GA,M.pickBy=Q_,M.property=o0,M.propertyOf=VT,M.pull=Mw,M.pullAll=L_,M.pullAllBy=bw,M.pullAllWith=ww,M.pullAt=Ew,M.range=GT,M.rangeRight=WT,M.rearg=zE,M.reject=AE,M.remove=Aw,M.rest=kE,M.reverse=Rd,M.sampleSize=CE,M.set=XA,M.setWith=qA,M.shuffle=RE,M.slice=Tw,M.sortBy=LE,M.sortedUniq=Ow,M.sortedUniqBy=Nw,M.split=mT,M.spread=HE,M.tail=Uw,M.take=Fw,M.takeRight=Bw,M.takeRightWhile=zw,M.takeWhile=kw,M.tap=eE,M.throttle=VE,M.thru=Ec,M.toArray=$_,M.toPairs=t0,M.toPairsIn=e0,M.toPath=ZT,M.toPlainObject=j_,M.transform=YA,M.unary=GE,M.union=Hw,M.unionBy=Vw,M.unionWith=Gw,M.uniq=Ww,M.uniqBy=Xw,M.uniqWith=qw,M.unset=$A,M.unzip=Pd,M.unzipWith=D_,M.update=ZA,M.updateWith=jA,M.values=_o,M.valuesIn=KA,M.without=Yw,M.words=r0,M.wrap=WE,M.xor=$w,M.xorBy=Zw,M.xorWith=jw,M.zip=Kw,M.zipObject=Jw,M.zipObjectDeep=Qw,M.zipWith=tE,M.entries=t0,M.entriesIn=e0,M.extend=K_,M.extendWith=Lc,kd(M,M),M.add=KT,M.attempt=s0,M.camelCase=eT,M.capitalize=n0,M.ceil=JT,M.clamp=JA,M.clone=qE,M.cloneDeep=$E,M.cloneDeepWith=ZE,M.cloneWith=YE,M.conformsTo=jE,M.deburr=i0,M.defaultTo=PT,M.divide=QT,M.endsWith=nT,M.eq=Hi,M.escape=iT,M.escapeRegExp=rT,M.every=hE,M.find=fE,M.findIndex=C_,M.findKey=AA,M.findLast=pE,M.findLastIndex=R_,M.findLastKey=TA,M.floor=t1,M.forEach=N_,M.forEachRight=U_,M.forIn=CA,M.forInRight=RA,M.forOwn=PA,M.forOwnRight=IA,M.get=Nd,M.gt=KE,M.gte=JE,M.has=OA,M.hasIn=Ud,M.head=I_,M.identity=ii,M.includes=yE,M.indexOf=pw,M.inRange=QA,M.invoke=FA,M.isArguments=ws,M.isArray=le,M.isArrayBuffer=QE,M.isArrayLike=ei,M.isArrayLikeObject=on,M.isBoolean=tA,M.isBuffer=$r,M.isDate=eA,M.isElement=nA,M.isEmpty=iA,M.isEqual=rA,M.isEqualWith=sA,M.isError=Dd,M.isFinite=oA,M.isFunction=xr,M.isInteger=W_,M.isLength=Pc,M.isMap=X_,M.isMatch=aA,M.isMatchWith=lA,M.isNaN=cA,M.isNative=uA,M.isNil=dA,M.isNull=hA,M.isNumber=q_,M.isObject=nn,M.isObjectLike=rn,M.isPlainObject=za,M.isRegExp=Od,M.isSafeInteger=fA,M.isSet=Y_,M.isString=Ic,M.isSymbol=ci,M.isTypedArray=go,M.isUndefined=pA,M.isWeakMap=mA,M.isWeakSet=gA,M.join=yw,M.kebabCase=sT,M.last=Ai,M.lastIndexOf=xw,M.lowerCase=oT,M.lowerFirst=aT,M.lt=_A,M.lte=vA,M.max=e1,M.maxBy=n1,M.mean=i1,M.meanBy=r1,M.min=s1,M.minBy=o1,M.stubArray=Vd,M.stubFalse=Gd,M.stubObject=XT,M.stubString=qT,M.stubTrue=YT,M.multiply=a1,M.nth=Sw,M.noConflict=FT,M.noop=Hd,M.now=Tc,M.pad=lT,M.padEnd=cT,M.padStart=uT,M.parseInt=hT,M.random=tT,M.reduce=wE,M.reduceRight=EE,M.repeat=dT,M.replace=fT,M.result=WA,M.round=l1,M.runInContext=k,M.sample=TE,M.size=PE,M.snakeCase=pT,M.some=IE,M.sortedIndex=Cw,M.sortedIndexBy=Rw,M.sortedIndexOf=Pw,M.sortedLastIndex=Iw,M.sortedLastIndexBy=Lw,M.sortedLastIndexOf=Dw,M.startCase=gT,M.startsWith=_T,M.subtract=c1,M.sum=u1,M.sumBy=h1,M.template=vT,M.times=$T,M.toFinite=Sr,M.toInteger=de,M.toLength=Z_,M.toLower=yT,M.toNumber=Ti,M.toSafeInteger=yA,M.toString=Pe,M.toUpper=xT,M.trim=ST,M.trimEnd=MT,M.trimStart=bT,M.truncate=wT,M.unescape=ET,M.uniqueId=jT,M.upperCase=AT,M.upperFirst=Fd,M.each=N_,M.eachRight=U_,M.first=I_,kd(M,function(){var s={};return er(M,function(a,u){Oe.call(M.prototype,u)||(s[u]=a)}),s}(),{chain:!1}),M.VERSION=t,Si(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){M[s].placeholder=M}),Si(["drop","take"],function(s,a){be.prototype[s]=function(u){u=u===n?1:gn(de(u),0);var f=this.__filtered__&&!a?new be(this):this.clone();return f.__filtered__?f.__takeCount__=On(u,f.__takeCount__):f.__views__.push({size:On(u,it),type:s+(f.__dir__<0?"Right":"")}),f},be.prototype[s+"Right"]=function(u){return this.reverse()[s](u).reverse()}}),Si(["filter","map","takeWhile"],function(s,a){var u=a+1,f=u==st||u==H;be.prototype[s]=function(x){var E=this.clone();return E.__iteratees__.push({iteratee:Yt(x,3),type:u}),E.__filtered__=E.__filtered__||f,E}}),Si(["head","last"],function(s,a){var u="take"+(a?"Right":"");be.prototype[s]=function(){return this[u](1).value()[0]}}),Si(["initial","tail"],function(s,a){var u="drop"+(a?"":"Right");be.prototype[s]=function(){return this.__filtered__?new be(this):this[u](1)}}),be.prototype.compact=function(){return this.filter(ii)},be.prototype.find=function(s){return this.filter(s).head()},be.prototype.findLast=function(s){return this.reverse().find(s)},be.prototype.invokeMap=ve(function(s,a){return typeof s=="function"?new be(this):this.map(function(u){return Da(u,s,a)})}),be.prototype.reject=function(s){return this.filter(Rc(Yt(s)))},be.prototype.slice=function(s,a){s=de(s);var u=this;return u.__filtered__&&(s>0||a<0)?new be(u):(s<0?u=u.takeRight(-s):s&&(u=u.drop(s)),a!==n&&(a=de(a),u=a<0?u.dropRight(-a):u.take(a-s)),u)},be.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},be.prototype.toArray=function(){return this.take(it)},er(be.prototype,function(s,a){var u=/^(?:filter|find|map|reject)|While$/.test(a),f=/^(?:head|last)$/.test(a),x=M[f?"take"+(a=="last"?"Right":""):a],E=f||/^find/.test(a);x&&(M.prototype[a]=function(){var L=this.__wrapped__,F=f?[1]:arguments,V=L instanceof be,nt=F[0],rt=V||le(L),ct=function(Me){var Ae=x.apply(M,kr([Me],F));return f&&Et?Ae[0]:Ae};rt&&u&&typeof nt=="function"&&nt.length!=1&&(V=rt=!1);var Et=this.__chain__,Nt=!!this.__actions__.length,Zt=E&&!Et,me=V&&!Nt;if(!E&&rt){L=me?L:new be(this);var jt=s.apply(L,F);return jt.__actions__.push({func:Ec,args:[ct],thisArg:n}),new bi(jt,Et)}return Zt&&me?s.apply(this,F):(jt=this.thru(ct),Zt?f?jt.value()[0]:jt.value():jt)})}),Si(["pop","push","shift","sort","splice","unshift"],function(s){var a=Kl[s],u=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",f=/^(?:pop|shift)$/.test(s);M.prototype[s]=function(){var x=arguments;if(f&&!this.__chain__){var E=this.value();return a.apply(le(E)?E:[],x)}return this[u](function(L){return a.apply(le(L)?L:[],x)})}}),er(be.prototype,function(s,a){var u=M[a];if(u){var f=u.name+"";Oe.call(uo,f)||(uo[f]=[]),uo[f].push({name:a,func:u})}}),uo[vc(n,A).name]=[{name:"wrapper",func:n}],be.prototype.clone=EM,be.prototype.reverse=AM,be.prototype.value=TM,M.prototype.at=nE,M.prototype.chain=iE,M.prototype.commit=rE,M.prototype.next=sE,M.prototype.plant=aE,M.prototype.reverse=lE,M.prototype.toJSON=M.prototype.valueOf=M.prototype.value=cE,M.prototype.first=M.prototype.head,Aa&&(M.prototype[Aa]=oE),M},Vr=rM();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Mn._=Vr,define(function(){return Vr})):gs?((gs.exports=Vr)._=Vr,zh._=Vr):Mn._=Vr}).call(ba)});var pf=class extends U0{constructor(){super(...arguments),this.supportsDOMEvents=!0}},mf=class n extends pf{static makeCurrent(){N0(new n)}onAndCancel(t,e,i){return t.addEventListener(e,i),()=>{t.removeEventListener(e,i)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.parentNode&&t.parentNode.removeChild(t)}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=m1();return e==null?null:g1(e)}resetBaseElement(){Za=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return F0(document.cookie,t)}},Za=null;function m1(){return Za=Za||document.querySelector("base"),Za?Za.getAttribute("href"):null}function g1(n){return new URL(n,document.baseURI).pathname}var gf=class{addToWindow(t){Kr.getAngularTestability=(i,r=!0)=>{let o=t.findTestabilityInTree(i,r);if(o==null)throw new ln(5103,!1);return o},Kr.getAllAngularTestabilities=()=>t.getAllTestabilities(),Kr.getAllAngularRootElements=()=>t.getAllRootElements();let e=i=>{let r=Kr.getAllAngularTestabilities(),o=r.length,l=function(){o--,o==0&&i()};r.forEach(c=>{c.whenStable(l)})};Kr.frameworkStabilizers||(Kr.frameworkStabilizers=[]),Kr.frameworkStabilizers.push(e)}findTestabilityInTree(t,e,i){if(e==null)return null;let r=t.getTestability(e);return r??(i?Gc().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null)}},_1=(()=>{let t=class t{build(){return new XMLHttpRequest}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:t.\u0275fac});let n=t;return n})(),_f=new Pi(""),$0=(()=>{let t=class t{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(o=>{o.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,o){return this._findPluginFor(r).addEventListener(i,r,o)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(l=>l.supports(i)),!r)throw new ln(5101,!1);return this._eventNameToPlugin.set(i,r),r}};t.\u0275fac=function(r){return new(r||t)(Je(_f),Je(qn))},t.\u0275prov=Fe({token:t,factory:t.\u0275fac});let n=t;return n})(),jc=class{constructor(t){this._doc=t}},df="ng-app-id",Z0=(()=>{let t=class t{constructor(i,r,o,l={}){this.doc=i,this.appId=r,this.nonce=o,this.platformId=l,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=hf(l),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(o=>o.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${df}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(o=>{o.textContent!=null&&r.set(o.textContent,o)}),r}return null}changeUsageCount(i,r){let o=this.styleRef;if(o.has(i)){let l=o.get(i);return l.usage+=r,l.usage}return o.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let o=this.styleNodesInDOM,l=o?.get(r);if(l?.parentNode===i)return o.delete(r),l.removeAttribute(df),l;{let c=this.doc.createElement("style");return this.nonce&&c.setAttribute("nonce",this.nonce),c.textContent=r,this.platformIsServer&&c.setAttribute(df,this.appId),i.appendChild(c),c}}addStyleToHost(i,r){let o=this.getStyleElement(i,r),l=this.styleRef,c=l.get(r)?.elements;c?c.push(o):l.set(r,{elements:[o],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};t.\u0275fac=function(r){return new(r||t)(Je(si),Je(Qd),Je(tf,8),Je(Ga))},t.\u0275prov=Fe({token:t,factory:t.\u0275fac});let n=t;return n})(),ff={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},yf=/%COMP%/g,j0="%COMP%",v1=`_nghost-${j0}`,y1=`_ngcontent-${j0}`,x1=!0,S1=new Pi("",{providedIn:"root",factory:()=>x1});function M1(n){return y1.replace(yf,n)}function b1(n){return v1.replace(yf,n)}function K0(n,t){return t.map(e=>e.replace(yf,n))}var To=(()=>{let t=class t{constructor(i,r,o,l,c,h,d,p=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=o,this.removeStylesOnCompDestroy=l,this.doc=c,this.platformId=h,this.ngZone=d,this.nonce=p,this.rendererByCompId=new Map,this.platformIsServer=hf(h),this.defaultRenderer=new ja(i,c,d,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Va.ShadowDom&&(r=Xn(Jt({},r),{encapsulation:Va.Emulated}));let o=this.getOrCreateRenderer(i,r);return o instanceof Kc?o.applyToHost(i):o instanceof Ka&&o.applyStyles(),o}getOrCreateRenderer(i,r){let o=this.rendererByCompId,l=o.get(r.id);if(!l){let c=this.doc,h=this.ngZone,d=this.eventManager,p=this.sharedStylesHost,m=this.removeStylesOnCompDestroy,_=this.platformIsServer;switch(r.encapsulation){case Va.Emulated:l=new Kc(d,p,r,this.appId,m,c,h,_);break;case Va.ShadowDom:return new vf(d,p,i,r,c,h,this.nonce,_);default:l=new Ka(d,p,r,m,c,h,_);break}o.set(r.id,l)}return l}ngOnDestroy(){this.rendererByCompId.clear()}};t.\u0275fac=function(r){return new(r||t)(Je($0),Je(Z0),Je(Qd),Je(S1),Je(si),Je(Ga),Je(qn),Je(tf))},t.\u0275prov=Fe({token:t,factory:t.\u0275fac});let n=t;return n})(),ja=class{constructor(t,e,i,r){this.eventManager=t,this.doc=e,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(t,e){return e?this.doc.createElementNS(ff[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(W0(t)?t.content:t).appendChild(e)}insertBefore(t,e,i){t&&(W0(t)?t.content:t).insertBefore(e,i)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let i=typeof t=="string"?this.doc.querySelector(t):t;if(!i)throw new ln(-5104,!1);return e||(i.textContent=""),i}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,i,r){if(r){e=r+":"+e;let o=ff[r];o?t.setAttributeNS(o,e,i):t.setAttribute(e,i)}else t.setAttribute(e,i)}removeAttribute(t,e,i){if(i){let r=ff[i];r?t.removeAttributeNS(r,e):t.removeAttribute(`${i}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,i,r){r&(qa.DashCase|qa.Important)?t.style.setProperty(e,i,r&qa.Important?"important":""):t.style[e]=i}removeStyle(t,e,i){i&qa.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,i){t!=null&&(t[e]=i)}setValue(t,e){t.nodeValue=e}listen(t,e,i){if(typeof t=="string"&&(t=Gc().getGlobalEventTarget(this.doc,t),!t))throw new Error(`Unsupported event target ${t} for event ${e}`);return this.eventManager.addEventListener(t,e,this.decoratePreventDefault(i))}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;(this.platformIsServer?this.ngZone.runGuarded(()=>t(e)):t(e))===!1&&e.preventDefault()}}};function W0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var vf=class extends ja{constructor(t,e,i,r,o,l,c,h){super(t,o,l,h),this.sharedStylesHost=e,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=K0(r.id,r.styles);for(let p of d){let m=document.createElement("style");c&&m.setAttribute("nonce",c),m.textContent=p,this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,i){return super.insertBefore(this.nodeOrShadowRoot(t),e,i)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Ka=class extends ja{constructor(t,e,i,r,o,l,c,h){super(t,o,l,c),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r,this.styles=h?K0(h,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Kc=class extends Ka{constructor(t,e,i,r,o,l,c,h){let d=r+"-"+i.id;super(t,e,i,o,l,c,h,d),this.contentAttr=M1(d),this.hostAttr=b1(d)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let i=super.createElement(t,e);return super.setAttribute(i,this.contentAttr,""),i}},w1=(()=>{let t=class t extends jc{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,o){return i.addEventListener(r,o,!1),()=>this.removeEventListener(i,r,o)}removeEventListener(i,r,o){return i.removeEventListener(r,o)}};t.\u0275fac=function(r){return new(r||t)(Je(si))},t.\u0275prov=Fe({token:t,factory:t.\u0275fac});let n=t;return n})(),X0=["alt","control","meta","shift"],E1={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},A1={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},T1=(()=>{let t=class t extends jc{constructor(i){super(i)}supports(i){return t.parseEventName(i)!=null}addEventListener(i,r,o){let l=t.parseEventName(r),c=t.eventCallback(l.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Gc().onAndCancel(i,l.domEventName,c))}static parseEventName(i){let r=i.toLowerCase().split("."),o=r.shift();if(r.length===0||!(o==="keydown"||o==="keyup"))return null;let l=t._normalizeKey(r.pop()),c="",h=r.indexOf("code");if(h>-1&&(r.splice(h,1),c="code."),X0.forEach(p=>{let m=r.indexOf(p);m>-1&&(r.splice(m,1),c+=p+".")}),c+=l,r.length!=0||l.length===0)return null;let d={};return d.domEventName=o,d.fullKey=c,d}static matchEventFullKeyCode(i,r){let o=E1[i.key]||i.key,l="";return r.indexOf("code.")>-1&&(o=i.code,l="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),X0.forEach(c=>{if(c!==o){let h=A1[c];h(i)&&(l+=c+".")}}),l+=o,l===r)}static eventCallback(i,r,o){return l=>{t.matchEventFullKeyCode(l,i)&&o.runGuarded(()=>r(l))}}static _normalizeKey(i){return i==="esc"?"escape":i}};t.\u0275fac=function(r){return new(r||t)(Je(si))},t.\u0275prov=Fe({token:t,factory:t.\u0275fac});let n=t;return n})();function J0(n,t){return O0(Jt({rootComponent:n},C1(t)))}function C1(n){return{appProviders:[...O1,...n?.providers??[]],platformProviders:L1}}function Q0(){return[...D1]}function R1(){mf.makeCurrent()}function P1(){return new nf}function I1(){return S0(document),document}var L1=[{provide:Ga,useValue:B0},{provide:b0,useValue:R1,multi:!0},{provide:si,useFactory:I1,deps:[]}];var D1=[{provide:Hc,useClass:gf,deps:[]},{provide:I0,useClass:Vc,deps:[qn,lf,Hc]},{provide:Vc,useClass:Vc,deps:[qn,lf,Hc]}],O1=[{provide:w0,useValue:"root"},{provide:nf,useFactory:P1,deps:[]},{provide:_f,useClass:w1,multi:!0,deps:[si,qn,Ga]},{provide:_f,useClass:T1,multi:!0,deps:[si]},To,Z0,$0,{provide:So,useExisting:To},{provide:z0,useClass:_1,deps:[]},[]];var tv=(()=>{let t=class t{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};t.\u0275fac=function(r){return new(r||t)(Je(si))},t.\u0275prov=Fe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var pe="primary",dl=Symbol("RouteTitle"),wf=class{constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Lo(n){return new wf(n)}function U1(n,t,e){let i=e.path.split("/");if(i.length>n.length||e.pathMatch==="full"&&(t.hasChildren()||i.length<n.length))return null;let r={};for(let o=0;o<i.length;o++){let l=i[o],c=n[o];if(l.startsWith(":"))r[l.substring(1)]=c;else if(l!==c.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function F1(n,t){if(n.length!==t.length)return!1;for(let e=0;e<n.length;++e)if(!sr(n[e],t[e]))return!1;return!0}function sr(n,t){let e=n?Ef(n):void 0,i=t?Ef(t):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!ov(n[r],t[r]))return!1;return!0}function Ef(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function ov(n,t){if(Array.isArray(n)&&Array.isArray(t)){if(n.length!==t.length)return!1;let e=[...n].sort(),i=[...t].sort();return e.every((r,o)=>i[o]===r)}else return n===t}function av(n){return n.length>0?n[n.length-1]:null}function ns(n){return d0(n)?n:L0(n)?Gi(Promise.resolve(n)):fe(n)}var B1={exact:cv,subset:uv},lv={exact:z1,subset:k1,ignored:()=>!0};function ev(n,t,e){return B1[e.paths](n.root,t.root,e.matrixParams)&&lv[e.queryParams](n.queryParams,t.queryParams)&&!(e.fragment==="exact"&&n.fragment!==t.fragment)}function z1(n,t){return sr(n,t)}function cv(n,t,e){if(!Rs(n.segments,t.segments)||!tu(n.segments,t.segments,e)||n.numberOfChildren!==t.numberOfChildren)return!1;for(let i in t.children)if(!n.children[i]||!cv(n.children[i],t.children[i],e))return!1;return!0}function k1(n,t){return Object.keys(t).length<=Object.keys(n).length&&Object.keys(t).every(e=>ov(n[e],t[e]))}function uv(n,t,e){return hv(n,t,t.segments,e)}function hv(n,t,e,i){if(n.segments.length>e.length){let r=n.segments.slice(0,e.length);return!(!Rs(r,e)||t.hasChildren()||!tu(r,e,i))}else if(n.segments.length===e.length){if(!Rs(n.segments,e)||!tu(n.segments,e,i))return!1;for(let r in t.children)if(!n.children[r]||!uv(n.children[r],t.children[r],i))return!1;return!0}else{let r=e.slice(0,n.segments.length),o=e.slice(n.segments.length);return!Rs(n.segments,r)||!tu(n.segments,r,i)||!n.children[pe]?!1:hv(n.children[pe],t,o,i)}}function tu(n,t,e){return t.every((i,r)=>lv[e](n[r].parameters,i.parameters))}var ts=class{constructor(t=new Le([],{}),e={},i=null){this.root=t,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Lo(this.queryParams),this._queryParamMap}toString(){return G1.serialize(this)}},Le=class{constructor(t,e){this.segments=t,this.children=e,this.parent=null,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return eu(this)}},Cs=class{constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=Lo(this.parameters),this._parameterMap}toString(){return fv(this)}};function H1(n,t){return Rs(n,t)&&n.every((e,i)=>sr(e.parameters,t[i].parameters))}function Rs(n,t){return n.length!==t.length?!1:n.every((e,i)=>e.path===t[i].path)}function V1(n,t){let e=[];return Object.entries(n.children).forEach(([i,r])=>{i===pe&&(e=e.concat(t(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==pe&&(e=e.concat(t(r,i)))}),e}var Kf=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:()=>new iu,providedIn:"root"});let n=t;return n})(),iu=class{parse(t){let e=new Tf(t);return new ts(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${Ja(t.root,!0)}`,i=q1(t.queryParams),r=typeof t.fragment=="string"?`#${W1(t.fragment)}`:"";return`${e}${i}${r}`}},G1=new iu;function eu(n){return n.segments.map(t=>fv(t)).join("/")}function Ja(n,t){if(!n.hasChildren())return eu(n);if(t){let e=n.children[pe]?Ja(n.children[pe],!1):"",i=[];return Object.entries(n.children).forEach(([r,o])=>{r!==pe&&i.push(`${r}:${Ja(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=V1(n,(i,r)=>r===pe?[Ja(n.children[pe],!1)]:[`${r}:${Ja(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[pe]!=null?`${eu(n)}/${e[0]}`:`${eu(n)}/(${e.join("//")})`}}function dv(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Jc(n){return dv(n).replace(/%3B/gi,";")}function W1(n){return encodeURI(n)}function Af(n){return dv(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function nu(n){return decodeURIComponent(n)}function nv(n){return nu(n.replace(/\+/g,"%20"))}function fv(n){return`${Af(n.path)}${X1(n.parameters)}`}function X1(n){return Object.entries(n).map(([t,e])=>`;${Af(t)}=${Af(e)}`).join("")}function q1(n){let t=Object.entries(n).map(([e,i])=>Array.isArray(i)?i.map(r=>`${Jc(e)}=${Jc(r)}`).join("&"):`${Jc(e)}=${Jc(i)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var Y1=/^[^\/()?;#]+/;function xf(n){let t=n.match(Y1);return t?t[0]:""}var $1=/^[^\/()?;=#]+/;function Z1(n){let t=n.match($1);return t?t[0]:""}var j1=/^[^=?&#]+/;function K1(n){let t=n.match(j1);return t?t[0]:""}var J1=/^[^&#]+/;function Q1(n){let t=n.match(J1);return t?t[0]:""}var Tf=class{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Le([],{}):new Le([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(i[pe]=new Le(t,e)),i}parseSegment(){let t=xf(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new ln(4009,!1);return this.capture(t),new Cs(nu(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=Z1(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=xf(this.remaining);r&&(i=r,this.capture(i))}t[nu(e)]=nu(i)}parseQueryParam(t){let e=K1(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let l=Q1(this.remaining);l&&(i=l,this.capture(i))}let r=nv(e),o=nv(i);if(t.hasOwnProperty(r)){let l=t[r];Array.isArray(l)||(l=[l],t[r]=l),l.push(o)}else t[r]=o}parseParens(t){let e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=xf(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new ln(4010,!1);let o;i.indexOf(":")>-1?(o=i.slice(0,i.indexOf(":")),this.capture(o),this.capture(":")):t&&(o=pe);let l=this.parseChildren();e[o]=Object.keys(l).length===1?l[pe]:new Le([],l),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new ln(4011,!1)}};function pv(n){return n.segments.length>0?new Le([],{[pe]:n}):n}function mv(n){let t={};for(let[i,r]of Object.entries(n.children)){let o=mv(r);if(i===pe&&o.segments.length===0&&o.hasChildren())for(let[l,c]of Object.entries(o.children))t[l]=c;else(o.segments.length>0||o.hasChildren())&&(t[i]=o)}let e=new Le(n.segments,t);return tC(e)}function tC(n){if(n.numberOfChildren===1&&n.children[pe]){let t=n.children[pe];return new Le(n.segments.concat(t.segments),t.children)}return n}function Do(n){return n instanceof ts}function eC(n,t,e=null,i=null){let r=gv(n);return _v(r,t,e,i)}function gv(n){let t;function e(o){let l={};for(let h of o.children){let d=e(h);l[h.outlet]=d}let c=new Le(o.url,l);return o===n&&(t=c),c}let i=e(n.root),r=pv(i);return t??r}function _v(n,t,e,i){let r=n;for(;r.parent;)r=r.parent;if(t.length===0)return Sf(r,r,r,e,i);let o=nC(t);if(o.toRoot())return Sf(r,r,new Le([],{}),e,i);let l=iC(o,r,n),c=l.processChildren?el(l.segmentGroup,l.index,o.commands):yv(l.segmentGroup,l.index,o.commands);return Sf(r,l.segmentGroup,c,e,i)}function ru(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function rl(n){return typeof n=="object"&&n!=null&&n.outlets}function Sf(n,t,e,i,r){let o={};i&&Object.entries(i).forEach(([h,d])=>{o[h]=Array.isArray(d)?d.map(p=>`${p}`):`${d}`});let l;n===t?l=e:l=vv(n,t,e);let c=pv(mv(l));return new ts(c,o,r)}function vv(n,t,e){let i={};return Object.entries(n.children).forEach(([r,o])=>{o===t?i[r]=e:i[r]=vv(o,t,e)}),new Le(n.segments,i)}var su=class{constructor(t,e,i){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=i,t&&i.length>0&&ru(i[0]))throw new ln(4003,!1);let r=i.find(rl);if(r&&r!==av(i))throw new ln(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function nC(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new su(!0,0,n);let t=0,e=!1,i=n.reduce((r,o,l)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([h,d])=>{c[h]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:c}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:l===0?(o.split("/").forEach((c,h)=>{h==0&&c==="."||(h==0&&c===""?e=!0:c===".."?t++:c!=""&&r.push(c))}),r):[...r,o]},[]);return new su(e,t,i)}var Po=class{constructor(t,e,i){this.segmentGroup=t,this.processChildren=e,this.index=i}};function iC(n,t,e){if(n.isAbsolute)return new Po(t,!0,0);if(!e)return new Po(t,!1,NaN);if(e.parent===null)return new Po(e,!0,0);let i=ru(n.commands[0])?0:1,r=e.segments.length-1+i;return rC(e,r,n.numberOfDoubleDots)}function rC(n,t,e){let i=n,r=t,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new ln(4005,!1);r=i.segments.length}return new Po(i,!1,r-o)}function sC(n){return rl(n[0])?n[0].outlets:{[pe]:n}}function yv(n,t,e){if(n??=new Le([],{}),n.segments.length===0&&n.hasChildren())return el(n,t,e);let i=oC(n,t,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let o=new Le(n.segments.slice(0,i.pathIndex),{});return o.children[pe]=new Le(n.segments.slice(i.pathIndex),n.children),el(o,0,r)}else return i.match&&r.length===0?new Le(n.segments,{}):i.match&&!n.hasChildren()?Cf(n,t,e):i.match?el(n,0,r):Cf(n,t,e)}function el(n,t,e){if(e.length===0)return new Le(n.segments,{});{let i=sC(e),r={};if(Object.keys(i).some(o=>o!==pe)&&n.children[pe]&&n.numberOfChildren===1&&n.children[pe].segments.length===0){let o=el(n.children[pe],t,e);return new Le(n.segments,o.children)}return Object.entries(i).forEach(([o,l])=>{typeof l=="string"&&(l=[l]),l!==null&&(r[o]=yv(n.children[o],t,l))}),Object.entries(n.children).forEach(([o,l])=>{i[o]===void 0&&(r[o]=l)}),new Le(n.segments,r)}}function oC(n,t,e){let i=0,r=t,o={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=e.length)return o;let l=n.segments[r],c=e[i];if(rl(c))break;let h=`${c}`,d=i<e.length-1?e[i+1]:null;if(r>0&&h===void 0)break;if(h&&d&&typeof d=="object"&&d.outlets===void 0){if(!rv(h,d,l))return o;i+=2}else{if(!rv(h,{},l))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Cf(n,t,e){let i=n.segments.slice(0,t),r=0;for(;r<e.length;){let o=e[r];if(rl(o)){let h=aC(o.outlets);return new Le(i,h)}if(r===0&&ru(e[0])){let h=n.segments[t];i.push(new Cs(h.path,iv(e[0]))),r++;continue}let l=rl(o)?o.outlets[pe]:`${o}`,c=r<e.length-1?e[r+1]:null;l&&c&&ru(c)?(i.push(new Cs(l,iv(c))),r+=2):(i.push(new Cs(l,{})),r++)}return new Le(i,{})}function aC(n){let t={};return Object.entries(n).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(t[e]=Cf(new Le([],{}),0,i))}),t}function iv(n){let t={};return Object.entries(n).forEach(([e,i])=>t[e]=`${i}`),t}function rv(n,t,e){return n==e.path&&sr(t,e.parameters)}var nl="imperative",In=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(In||{}),Di=class{constructor(t,e){this.id=t,this.url=e}},sl=class extends Di{constructor(t,e,i="imperative",r=null){super(t,e),this.type=In.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Ps=class extends Di{constructor(t,e,i){super(t,e),this.urlAfterRedirects=i,this.type=In.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Li=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(Li||{}),Rf=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Rf||{}),es=class extends Di{constructor(t,e,i,r){super(t,e),this.reason=i,this.code=r,this.type=In.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Is=class extends Di{constructor(t,e,i,r){super(t,e),this.reason=i,this.code=r,this.type=In.NavigationSkipped}},ol=class extends Di{constructor(t,e,i,r){super(t,e),this.error=i,this.target=r,this.type=In.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ou=class extends Di{constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r,this.type=In.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Pf=class extends Di{constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r,this.type=In.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},If=class extends Di{constructor(t,e,i,r,o){super(t,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o,this.type=In.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},Lf=class extends Di{constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r,this.type=In.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Df=class extends Di{constructor(t,e,i,r){super(t,e),this.urlAfterRedirects=i,this.state=r,this.type=In.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Of=class{constructor(t){this.route=t,this.type=In.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Nf=class{constructor(t){this.route=t,this.type=In.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Uf=class{constructor(t){this.snapshot=t,this.type=In.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ff=class{constructor(t){this.snapshot=t,this.type=In.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Bf=class{constructor(t){this.snapshot=t,this.type=In.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},zf=class{constructor(t){this.snapshot=t,this.type=In.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var al=class{},ll=class{constructor(t){this.url=t}};var kf=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new du,this.attachRef=null}},du=(()=>{let t=class t{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let o=this.getOrCreateContext(i);o.outlet=r,this.contexts.set(i,o)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new kf,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),au=class{constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=Hf(t,this._root);return e?e.children.map(i=>i.value):[]}firstChild(t){let e=Hf(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=Vf(t,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return Vf(t,this._root).map(e=>e.value)}};function Hf(n,t){if(n===t.value)return t;for(let e of t.children){let i=Hf(n,e);if(i)return i}return null}function Vf(n,t){if(n===t.value)return[t];for(let e of t.children){let i=Vf(n,e);if(i.length)return i.unshift(t),i}return[]}var fi=class{constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function Ro(n){let t={};return n&&n.children.forEach(e=>t[e.value.outlet]=e),t}var lu=class extends au{constructor(t,e){super(t),this.snapshot=e,Qf(this,t)}toString(){return this.snapshot.toString()}};function xv(n){let t=lC(n),e=new Ci([new Cs("",{})]),i=new Ci({}),r=new Ci({}),o=new Ci({}),l=new Ci(""),c=new Oo(e,i,o,l,r,pe,n,t.root);return c.snapshot=t.root,new lu(new fi(c,[]),t)}function lC(n){let t={},e={},i={},r="",o=new cl([],t,i,r,e,pe,n,null,{});return new cu("",new fi(o,[]))}var Oo=class{constructor(t,e,i,r,o,l,c,h){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=l,this.component=c,this._futureSnapshot=h,this.title=this.dataSubject?.pipe(Ye(d=>d[dl]))??fe(void 0),this.url=t,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(Ye(t=>Lo(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(Ye(t=>Lo(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Jf(n,t,e="emptyOnly"){let i,{routeConfig:r}=n;return t!==null&&(e==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?i={params:Jt(Jt({},t.params),n.params),data:Jt(Jt({},t.data),n.data),resolve:Jt(Jt(Jt(Jt({},n.data),t.data),r?.data),n._resolvedData)}:i={params:Jt({},n.params),data:Jt({},n.data),resolve:Jt(Jt({},n.data),n._resolvedData??{})},r&&Mv(r)&&(i.resolve[dl]=r.title),i}var cl=class{get title(){return this.data?.[dl]}constructor(t,e,i,r,o,l,c,h,d){this.url=t,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=l,this.component=c,this.routeConfig=h,this._resolve=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Lo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Lo(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},cu=class extends au{constructor(t,e){super(e),this.url=t,Qf(this,e)}toString(){return Sv(this._root)}};function Qf(n,t){t.value._routerState=n,t.children.forEach(e=>Qf(n,e))}function Sv(n){let t=n.children.length>0?` { ${n.children.map(Sv).join(", ")} } `:"";return`${n.value}${t}`}function Mf(n){if(n.snapshot){let t=n.snapshot,e=n._futureSnapshot;n.snapshot=e,sr(t.queryParams,e.queryParams)||n.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&n.fragmentSubject.next(e.fragment),sr(t.params,e.params)||n.paramsSubject.next(e.params),F1(t.url,e.url)||n.urlSubject.next(e.url),sr(t.data,e.data)||n.dataSubject.next(e.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Gf(n,t){let e=sr(n.params,t.params)&&H1(n.url,t.url),i=!n.parent!=!t.parent;return e&&!i&&(!n.parent||Gf(n.parent,t.parent))}function Mv(n){return typeof n.title=="string"||n.title===null}var cC=(()=>{let t=class t{constructor(){this.activated=null,this._activatedRoute=null,this.name=pe,this.activateEvents=new ri,this.deactivateEvents=new ri,this.attachEvents=new ri,this.detachEvents=new ri,this.parentContexts=ce(du),this.location=ce(A0),this.changeDetector=ce(of),this.environmentInjector=ce(Uc),this.inputBinder=ce(tp,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:o}=i.name;if(r)return;this.isTrackedInParentContexts(o)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(o)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new ln(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new ln(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new ln(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new ln(4013,!1);this._activatedRoute=i;let o=this.location,c=i.snapshot.component,h=this.parentContexts.getOrCreateContext(this.name).children,d=new Wf(i,h,o.injector);this.activated=o.createComponent(c,{index:o.length,injector:d,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275dir=x0({type:t,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[xo]});let n=t;return n})(),Wf=class{constructor(t,e,i){this.route=t,this.childContexts=e,this.parent=i}get(t,e){return t===Oo?this.route:t===du?this.childContexts:this.parent.get(t,e)}},tp=new Pi("");function uC(n,t,e){let i=ul(n,t._root,e?e._root:void 0);return new lu(i,t)}function ul(n,t,e){if(e&&n.shouldReuseRoute(t.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=t.value;let r=hC(n,t,e);return new fi(i,r)}else{if(n.shouldAttach(t.value)){let o=n.retrieve(t.value);if(o!==null){let l=o.route;return l.value._futureSnapshot=t.value,l.children=t.children.map(c=>ul(n,c)),l}}let i=dC(t.value),r=t.children.map(o=>ul(n,o));return new fi(i,r)}}function hC(n,t,e){return t.children.map(i=>{for(let r of e.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return ul(n,i,r);return ul(n,i)})}function dC(n){return new Oo(new Ci(n.url),new Ci(n.params),new Ci(n.queryParams),new Ci(n.fragment),new Ci(n.data),n.outlet,n.component,n)}var bv="ngNavigationCancelingError";function wv(n,t){let{redirectTo:e,navigationBehaviorOptions:i}=Do(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=Ev(!1,Li.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function Ev(n,t){let e=new Error(`NavigationCancelingError: ${n||""}`);return e[bv]=!0,e.cancellationCode=t,e}function fC(n){return Av(n)&&Do(n.url)}function Av(n){return!!n&&n[bv]}var pC=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=Ke({type:t,selectors:[["ng-component"]],standalone:!0,features:[en],decls:1,vars:0,template:function(r,o){r&1&&Ie(0,"router-outlet")},dependencies:[cC],encapsulation:2});let n=t;return n})();function mC(n,t){return n.providers&&!n._injector&&(n._injector=C0(n.providers,t,`Route: ${n.path}`)),n._injector??t}function ep(n){let t=n.children&&n.children.map(ep),e=t?Xn(Jt({},n),{children:t}):Jt({},n);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==pe&&(e.component=pC),e}function or(n){return n.outlet||pe}function gC(n,t){let e=n.filter(i=>or(i)===t);return e.push(...n.filter(i=>or(i)!==t)),e}function fl(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let t=n.parent;t;t=t.parent){let e=t.routeConfig;if(e?._loadedInjector)return e._loadedInjector;if(e?._injector)return e._injector}return null}var _C=(n,t,e,i)=>Ye(r=>(new Xf(t,r.targetRouterState,r.currentRouterState,e,i).activate(n),r)),Xf=class{constructor(t,e,i,r,o){this.routeReuseStrategy=t,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(t){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,t),Mf(this.futureState.root),this.activateChildRoutes(e,i,t)}deactivateChildRoutes(t,e,i){let r=Ro(e);t.children.forEach(o=>{let l=o.value.outlet;this.deactivateRoutes(o,r[l],i),delete r[l]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(t,e,i){let r=t.value,o=e?e.value:null;if(r===o)if(r.component){let l=i.getContext(r.outlet);l&&this.deactivateChildRoutes(t,e,l.children)}else this.deactivateChildRoutes(t,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let i=e.getContext(t.value.outlet),r=i&&t.value.component?i.children:e,o=Ro(t);for(let l of Object.values(o))this.deactivateRouteAndItsChildren(l,r);if(i&&i.outlet){let l=i.outlet.detach(),c=i.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:l,route:t,contexts:c})}}deactivateRouteAndOutlet(t,e){let i=e.getContext(t.value.outlet),r=i&&t.value.component?i.children:e,o=Ro(t);for(let l of Object.values(o))this.deactivateRouteAndItsChildren(l,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(t,e,i){let r=Ro(e);t.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new zf(o.value.snapshot))}),t.children.length&&this.forwardEvent(new Ff(t.value.snapshot))}activateRoutes(t,e,i){let r=t.value,o=e?e.value:null;if(Mf(r),r===o)if(r.component){let l=i.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,l.children)}else this.activateChildRoutes(t,e,i);else if(r.component){let l=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let c=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),l.children.onOutletReAttached(c.contexts),l.attachRef=c.componentRef,l.route=c.route.value,l.outlet&&l.outlet.attach(c.componentRef,c.route.value),Mf(c.route.value),this.activateChildRoutes(t,null,l.children)}else{let c=fl(r.snapshot);l.attachRef=null,l.route=r,l.injector=c,l.outlet&&l.outlet.activateWith(r,l.injector),this.activateChildRoutes(t,null,l.children)}}else this.activateChildRoutes(t,null,i)}},uu=class{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},Io=class{constructor(t,e){this.component=t,this.route=e}};function vC(n,t,e){let i=n._root,r=t?t._root:null;return Qa(i,r,e,[i.value])}function yC(n){let t=n.routeConfig?n.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:n,guards:t}}function Uo(n,t){let e=Symbol(),i=t.get(n,e);return i===e?typeof n=="function"&&!M0(n)?n:t.get(n):i}function Qa(n,t,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=Ro(t);return n.children.forEach(l=>{xC(l,o[l.value.outlet],e,i.concat([l.value]),r),delete o[l.value.outlet]}),Object.entries(o).forEach(([l,c])=>il(c,e.getContext(l),r)),r}function xC(n,t,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=n.value,l=t?t.value:null,c=e?e.getContext(n.value.outlet):null;if(l&&o.routeConfig===l.routeConfig){let h=SC(l,o,o.routeConfig.runGuardsAndResolvers);h?r.canActivateChecks.push(new uu(i)):(o.data=l.data,o._resolvedData=l._resolvedData),o.component?Qa(n,t,c?c.children:null,i,r):Qa(n,t,e,i,r),h&&c&&c.outlet&&c.outlet.isActivated&&r.canDeactivateChecks.push(new Io(c.outlet.component,l))}else l&&il(t,c,r),r.canActivateChecks.push(new uu(i)),o.component?Qa(n,null,c?c.children:null,i,r):Qa(n,null,e,i,r);return r}function SC(n,t,e){if(typeof e=="function")return e(n,t);switch(e){case"pathParamsChange":return!Rs(n.url,t.url);case"pathParamsOrQueryParamsChange":return!Rs(n.url,t.url)||!sr(n.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Gf(n,t)||!sr(n.queryParams,t.queryParams);case"paramsChange":default:return!Gf(n,t)}}function il(n,t,e){let i=Ro(n),r=n.value;Object.entries(i).forEach(([o,l])=>{r.component?t?il(l,t.children.getContext(o),e):il(l,null,e):il(l,t,e)}),r.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new Io(t.outlet.component,r)):e.canDeactivateChecks.push(new Io(null,r)):e.canDeactivateChecks.push(new Io(null,r))}function pl(n){return typeof n=="function"}function MC(n){return typeof n=="boolean"}function bC(n){return n&&pl(n.canLoad)}function wC(n){return n&&pl(n.canActivate)}function EC(n){return n&&pl(n.canActivateChild)}function AC(n){return n&&pl(n.canDeactivate)}function TC(n){return n&&pl(n.canMatch)}function Tv(n){return n instanceof f0||n?.name==="EmptyError"}var Qc=Symbol("INITIAL_VALUE");function No(){return rr(n=>Yd(n.map(t=>t.pipe(Zr(1),v0(Qc)))).pipe(Ye(t=>{for(let e of t)if(e!==!0){if(e===Qc)return Qc;if(e===!1||e instanceof ts)return e}return!0}),vo(t=>t!==Qc),Zr(1)))}function CC(n,t){return Ri(e=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:o,canDeactivateChecks:l}}=e;return l.length===0&&o.length===0?fe(Xn(Jt({},e),{guardsResult:!0})):RC(l,i,r,n).pipe(Ri(c=>c&&MC(c)?PC(i,o,n,t):fe(c)),Ye(c=>Xn(Jt({},e),{guardsResult:c})))})}function RC(n,t,e,i){return Gi(n).pipe(Ri(r=>NC(r.component,r.route,e,t,i)),jr(r=>r!==!0,!0))}function PC(n,t,e,i){return Gi(t).pipe(Ha(r=>p0(LC(r.route.parent,i),IC(r.route,i),OC(n,r.path,e),DC(n,r.route,e))),jr(r=>r!==!0,!0))}function IC(n,t){return n!==null&&t&&t(new Bf(n)),fe(!0)}function LC(n,t){return n!==null&&t&&t(new Uf(n)),fe(!0)}function DC(n,t,e){let i=t.routeConfig?t.routeConfig.canActivate:null;if(!i||i.length===0)return fe(!0);let r=i.map(o=>$d(()=>{let l=fl(t)??e,c=Uo(o,l),h=wC(c)?c.canActivate(t,n):Ts(l,()=>c(t,n));return ns(h).pipe(jr())}));return fe(r).pipe(No())}function OC(n,t,e){let i=t[t.length-1],o=t.slice(0,t.length-1).reverse().map(l=>yC(l)).filter(l=>l!==null).map(l=>$d(()=>{let c=l.guards.map(h=>{let d=fl(l.node)??e,p=Uo(h,d),m=EC(p)?p.canActivateChild(i,n):Ts(d,()=>p(i,n));return ns(m).pipe(jr())});return fe(c).pipe(No())}));return fe(o).pipe(No())}function NC(n,t,e,i,r){let o=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!o||o.length===0)return fe(!0);let l=o.map(c=>{let h=fl(t)??r,d=Uo(c,h),p=AC(d)?d.canDeactivate(n,t,e,i):Ts(h,()=>d(n,t,e,i));return ns(p).pipe(jr())});return fe(l).pipe(No())}function UC(n,t,e,i){let r=t.canLoad;if(r===void 0||r.length===0)return fe(!0);let o=r.map(l=>{let c=Uo(l,n),h=bC(c)?c.canLoad(t,e):Ts(n,()=>c(t,e));return ns(h)});return fe(o).pipe(No(),Cv(i))}function Cv(n){return h0(Pn(t=>{if(Do(t))throw wv(n,t)}),Ye(t=>t===!0))}function FC(n,t,e,i){let r=t.canMatch;if(!r||r.length===0)return fe(!0);let o=r.map(l=>{let c=Uo(l,n),h=TC(c)?c.canMatch(t,e):Ts(n,()=>c(t,e));return ns(h)});return fe(o).pipe(No(),Cv(i))}var hl=class{constructor(t){this.segmentGroup=t||null}},hu=class extends Error{constructor(t){super(),this.urlTree=t}};function Co(n){return ka(new hl(n))}function BC(n){return ka(new ln(4e3,!1))}function zC(n){return ka(Ev(!1,Li.GuardRejected))}var qf=class{constructor(t,e){this.urlSerializer=t,this.urlTree=e}lineralizeSegments(t,e){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return fe(i);if(r.numberOfChildren>1||!r.children[pe])return BC(t.redirectTo);r=r.children[pe]}}applyRedirectCommands(t,e,i){let r=this.applyRedirectCreateUrlTree(e,this.urlSerializer.parse(e),t,i);if(e.startsWith("/"))throw new hu(r);return r}applyRedirectCreateUrlTree(t,e,i,r){let o=this.createSegmentGroup(t,e.root,i,r);return new ts(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let i={};return Object.entries(t).forEach(([r,o])=>{if(typeof o=="string"&&o.startsWith(":")){let c=o.substring(1);i[r]=e[c]}else i[r]=o}),i}createSegmentGroup(t,e,i,r){let o=this.createSegments(t,e.segments,i,r),l={};return Object.entries(e.children).forEach(([c,h])=>{l[c]=this.createSegmentGroup(t,h,i,r)}),new Le(o,l)}createSegments(t,e,i,r){return e.map(o=>o.path.startsWith(":")?this.findPosParam(t,o,r):this.findOrReturn(o,i))}findPosParam(t,e,i){let r=i[e.path.substring(1)];if(!r)throw new ln(4001,!1);return r}findOrReturn(t,e){let i=0;for(let r of e){if(r.path===t.path)return e.splice(i),r;i++}return t}},Yf={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function kC(n,t,e,i,r){let o=np(n,t,e);return o.matched?(i=mC(t,i),FC(i,t,e,r).pipe(Ye(l=>l===!0?o:Jt({},Yf)))):fe(o)}function np(n,t,e){if(t.path==="**")return HC(e);if(t.path==="")return t.pathMatch==="full"&&(n.hasChildren()||e.length>0)?Jt({},Yf):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(t.matcher||U1)(e,n,t);if(!r)return Jt({},Yf);let o={};Object.entries(r.posParams??{}).forEach(([c,h])=>{o[c]=h.path});let l=r.consumed.length>0?Jt(Jt({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:l,positionalParamSegments:r.posParams??{}}}function HC(n){return{matched:!0,parameters:n.length>0?av(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function sv(n,t,e,i){return e.length>0&&WC(n,e,i)?{segmentGroup:new Le(t,GC(i,new Le(e,n.children))),slicedSegments:[]}:e.length===0&&XC(n,e,i)?{segmentGroup:new Le(n.segments,VC(n,e,i,n.children)),slicedSegments:e}:{segmentGroup:new Le(n.segments,n.children),slicedSegments:e}}function VC(n,t,e,i){let r={};for(let o of e)if(fu(n,t,o)&&!i[or(o)]){let l=new Le([],{});r[or(o)]=l}return Jt(Jt({},i),r)}function GC(n,t){let e={};e[pe]=t;for(let i of n)if(i.path===""&&or(i)!==pe){let r=new Le([],{});e[or(i)]=r}return e}function WC(n,t,e){return e.some(i=>fu(n,t,i)&&or(i)!==pe)}function XC(n,t,e){return e.some(i=>fu(n,t,i))}function fu(n,t,e){return(n.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function qC(n,t,e,i){return or(n)!==i&&(i===pe||!fu(t,e,n))?!1:np(t,n,e).matched}function YC(n,t,e){return t.length===0&&!n.children[e]}var $f=class{};function $C(n,t,e,i,r,o,l="emptyOnly"){return new Zf(n,t,e,i,r,l,o).recognize()}var ZC=31,Zf=class{constructor(t,e,i,r,o,l,c){this.injector=t,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=l,this.urlSerializer=c,this.applyRedirects=new qf(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(t){return new ln(4002,`'${t.segmentGroup}'`)}recognize(){let t=sv(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(t).pipe(Ye(e=>{let i=new cl([],Object.freeze({}),Object.freeze(Jt({},this.urlTree.queryParams)),this.urlTree.fragment,{},pe,this.rootComponentType,null,{}),r=new fi(i,e),o=new cu("",r),l=eC(i,[],this.urlTree.queryParams,this.urlTree.fragment);return l.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(l),this.inheritParamsAndData(o._root,null),{state:o,tree:l}}))}match(t){return this.processSegmentGroup(this.injector,this.config,t,pe).pipe(yo(i=>{if(i instanceof hu)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof hl?this.noMatchError(i):i}))}inheritParamsAndData(t,e){let i=t.value,r=Jf(i,e,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),t.children.forEach(o=>this.inheritParamsAndData(o,i))}processSegmentGroup(t,e,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(t,e,i):this.processSegment(t,e,i,i.segments,r,!0).pipe(Ye(o=>o instanceof fi?[o]:[]))}processChildren(t,e,i){let r=[];for(let o of Object.keys(i.children))o==="primary"?r.unshift(o):r.push(o);return Gi(r).pipe(Ha(o=>{let l=i.children[o],c=gC(e,o);return this.processSegmentGroup(t,c,l,o)}),_0((o,l)=>(o.push(...l),o)),Zd(null),g0(),Ri(o=>{if(o===null)return Co(i);let l=Rv(o);return jC(l),fe(l)}))}processSegment(t,e,i,r,o,l){return Gi(e).pipe(Ha(c=>this.processSegmentAgainstRoute(c._injector??t,e,c,i,r,o,l).pipe(yo(h=>{if(h instanceof hl)return fe(null);throw h}))),jr(c=>!!c),yo(c=>{if(Tv(c))return YC(i,r,o)?fe(new $f):Co(i);throw c}))}processSegmentAgainstRoute(t,e,i,r,o,l,c){return qC(i,r,o,l)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(t,r,i,o,l):this.allowRedirects&&c?this.expandSegmentAgainstRouteUsingRedirect(t,r,e,i,o,l):Co(r):Co(r)}expandSegmentAgainstRouteUsingRedirect(t,e,i,r,o,l){let{matched:c,consumedSegments:h,positionalParamSegments:d,remainingSegments:p}=np(e,r,o);if(!c)return Co(e);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>ZC&&(this.allowRedirects=!1));let m=this.applyRedirects.applyRedirectCommands(h,r.redirectTo,d);return this.applyRedirects.lineralizeSegments(r,m).pipe(Ri(_=>this.processSegment(t,i,e,_.concat(p),l,!1)))}matchSegmentAgainstRoute(t,e,i,r,o){let l=kC(e,i,r,t,this.urlSerializer);return i.path==="**"&&(e.children={}),l.pipe(rr(c=>c.matched?(t=i._injector??t,this.getChildConfig(t,i,r).pipe(rr(({routes:h})=>{let d=i._loadedInjector??t,{consumedSegments:p,remainingSegments:m,parameters:_}=c,y=new cl(p,_,Object.freeze(Jt({},this.urlTree.queryParams)),this.urlTree.fragment,JC(i),or(i),i.component??i._loadedComponent??null,i,QC(i)),{segmentGroup:S,slicedSegments:A}=sv(e,p,m,h);if(A.length===0&&S.hasChildren())return this.processChildren(d,h,S).pipe(Ye(g=>g===null?null:new fi(y,g)));if(h.length===0&&A.length===0)return fe(new fi(y,[]));let v=or(i)===o;return this.processSegment(d,h,S,A,v?pe:o,!0).pipe(Ye(g=>new fi(y,g instanceof fi?[g]:[])))}))):Co(e)))}getChildConfig(t,e,i){return e.children?fe({routes:e.children,injector:t}):e.loadChildren?e._loadedRoutes!==void 0?fe({routes:e._loadedRoutes,injector:e._loadedInjector}):UC(t,e,i,this.urlSerializer).pipe(Ri(r=>r?this.configLoader.loadChildren(t,e).pipe(Pn(o=>{e._loadedRoutes=o.routes,e._loadedInjector=o.injector})):zC(e))):fe({routes:[],injector:t})}};function jC(n){n.sort((t,e)=>t.value.outlet===pe?-1:e.value.outlet===pe?1:t.value.outlet.localeCompare(e.value.outlet))}function KC(n){let t=n.value.routeConfig;return t&&t.path===""}function Rv(n){let t=[],e=new Set;for(let i of n){if(!KC(i)){t.push(i);continue}let r=t.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):t.push(i)}for(let i of e){let r=Rv(i.children);t.push(new fi(i.value,r))}return t.filter(i=>!e.has(i))}function JC(n){return n.data||{}}function QC(n){return n.resolve||{}}function tR(n,t,e,i,r,o){return Ri(l=>$C(n,t,e,i,l.extractedUrl,r,o).pipe(Ye(({state:c,tree:h})=>Xn(Jt({},l),{targetSnapshot:c,urlAfterRedirects:h}))))}function eR(n,t){return Ri(e=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=e;if(!r.length)return fe(e);let o=new Set(r.map(h=>h.route)),l=new Set;for(let h of o)if(!l.has(h))for(let d of Pv(h))l.add(d);let c=0;return Gi(l).pipe(Ha(h=>o.has(h)?nR(h,i,n,t):(h.data=Jf(h,h.parent,n).resolve,fe(void 0))),Pn(()=>c++),jd(1),Ri(h=>c===l.size?fe(e):As))})}function Pv(n){let t=n.children.map(e=>Pv(e)).flat();return[n,...t]}function nR(n,t,e,i){let r=n.routeConfig,o=n._resolve;return r?.title!==void 0&&!Mv(r)&&(o[dl]=r.title),iR(o,n,t,i).pipe(Ye(l=>(n._resolvedData=l,n.data=Jf(n,n.parent,e).resolve,null)))}function iR(n,t,e,i){let r=Ef(n);if(r.length===0)return fe({});let o={};return Gi(r).pipe(Ri(l=>rR(n[l],t,e,i).pipe(jr(),Pn(c=>{o[l]=c}))),jd(1),m0(o),yo(l=>Tv(l)?As:ka(l)))}function rR(n,t,e,i){let r=fl(t)??i,o=Uo(n,r),l=o.resolve?o.resolve(t,e):Ts(r,()=>o(t,e));return ns(l)}function bf(n){return rr(t=>{let e=n(t);return e?Gi(e).pipe(Ye(()=>t)):fe(t)})}var Iv=(()=>{let t=class t{buildTitle(i){let r,o=i.root;for(;o!==void 0;)r=this.getResolvedTitleForRoute(o)??r,o=o.children.find(l=>l.outlet===pe);return r}getResolvedTitleForRoute(i){return i.data[dl]}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:()=>ce(sR),providedIn:"root"});let n=t;return n})(),sR=(()=>{let t=class t extends Iv{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};t.\u0275fac=function(r){return new(r||t)(Je(tv))},t.\u0275prov=Fe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),ip=new Pi("",{providedIn:"root",factory:()=>({})}),rp=new Pi(""),oR=(()=>{let t=class t{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=ce(uf)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return fe(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=ns(i.loadComponent()).pipe(Ye(Lv),Pn(l=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=l}),Dc(()=>{this.componentLoaders.delete(i)})),o=new qd(r,()=>new Es).pipe(Xd());return this.componentLoaders.set(i,o),o}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return fe({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let l=aR(r,this.compiler,i,this.onLoadEndListener).pipe(Dc(()=>{this.childrenLoaders.delete(r)})),c=new qd(l,()=>new Es).pipe(Xd());return this.childrenLoaders.set(r,c),c}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();function aR(n,t,e,i){return ns(n.loadChildren()).pipe(Ye(Lv),Ri(r=>r instanceof T0||Array.isArray(r)?fe(r):Gi(t.compileModuleAsync(r))),Ye(r=>{i&&i(n);let o,l,c=!1;return Array.isArray(r)?(l=r,c=!0):(o=r.create(e).injector,l=o.get(rp,[],{optional:!0,self:!0}).flat()),{routes:l.map(ep),injector:o}}))}function lR(n){return n&&typeof n=="object"&&"default"in n}function Lv(n){return lR(n)?n.default:n}var sp=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:()=>ce(cR),providedIn:"root"});let n=t;return n})(),cR=(()=>{let t=class t{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),uR=new Pi("");var hR=(()=>{let t=class t{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new Es,this.transitionAbortSubject=new Es,this.configLoader=ce(oR),this.environmentInjector=ce(Uc),this.urlSerializer=ce(Kf),this.rootContexts=ce(du),this.location=ce(Wc),this.inputBindingEnabled=ce(tp,{optional:!0})!==null,this.titleStrategy=ce(Iv),this.options=ce(ip,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=ce(sp),this.createViewTransition=ce(uR,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>fe(void 0),this.rootComponentType=null;let i=o=>this.events.next(new Of(o)),r=o=>this.events.next(new Nf(o));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(Xn(Jt(Jt({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,o){return this.transitions=new Ci({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:nl,restoredState:null,currentSnapshot:o.snapshot,targetSnapshot:null,currentRouterState:o,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(vo(l=>l.id!==0),Ye(l=>Xn(Jt({},l),{extractedUrl:this.urlHandlingStrategy.extract(l.rawUrl)})),rr(l=>{this.currentTransition=l;let c=!1,h=!1;return fe(l).pipe(Pn(d=>{this.currentNavigation={id:d.id,initialUrl:d.rawUrl,extractedUrl:d.extractedUrl,trigger:d.source,extras:d.extras,previousNavigation:this.lastSuccessfulNavigation?Xn(Jt({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),rr(d=>{let p=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),m=d.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!p&&m!=="reload"){let _="";return this.events.next(new Is(d.id,this.urlSerializer.serialize(d.rawUrl),_,Rf.IgnoredSameUrlNavigation)),d.resolve(null),As}if(this.urlHandlingStrategy.shouldProcessUrl(d.rawUrl))return fe(d).pipe(rr(_=>{let y=this.transitions?.getValue();return this.events.next(new sl(_.id,this.urlSerializer.serialize(_.extractedUrl),_.source,_.restoredState)),y!==this.transitions?.getValue()?As:Promise.resolve(_)}),tR(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),Pn(_=>{l.targetSnapshot=_.targetSnapshot,l.urlAfterRedirects=_.urlAfterRedirects,this.currentNavigation=Xn(Jt({},this.currentNavigation),{finalUrl:_.urlAfterRedirects});let y=new ou(_.id,this.urlSerializer.serialize(_.extractedUrl),this.urlSerializer.serialize(_.urlAfterRedirects),_.targetSnapshot);this.events.next(y)}));if(p&&this.urlHandlingStrategy.shouldProcessUrl(d.currentRawUrl)){let{id:_,extractedUrl:y,source:S,restoredState:A,extras:v}=d,g=new sl(_,this.urlSerializer.serialize(y),S,A);this.events.next(g);let I=xv(this.rootComponentType).snapshot;return this.currentTransition=l=Xn(Jt({},d),{targetSnapshot:I,urlAfterRedirects:y,extras:Xn(Jt({},v),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=y,fe(l)}else{let _="";return this.events.next(new Is(d.id,this.urlSerializer.serialize(d.extractedUrl),_,Rf.IgnoredByUrlHandlingStrategy)),d.resolve(null),As}}),Pn(d=>{let p=new Pf(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(p)}),Ye(d=>(this.currentTransition=l=Xn(Jt({},d),{guards:vC(d.targetSnapshot,d.currentSnapshot,this.rootContexts)}),l)),CC(this.environmentInjector,d=>this.events.next(d)),Pn(d=>{if(l.guardsResult=d.guardsResult,Do(d.guardsResult))throw wv(this.urlSerializer,d.guardsResult);let p=new If(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot,!!d.guardsResult);this.events.next(p)}),vo(d=>d.guardsResult?!0:(this.cancelNavigationTransition(d,"",Li.GuardRejected),!1)),bf(d=>{if(d.guards.canActivateChecks.length)return fe(d).pipe(Pn(p=>{let m=new Lf(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(m)}),rr(p=>{let m=!1;return fe(p).pipe(eR(this.paramsInheritanceStrategy,this.environmentInjector),Pn({next:()=>m=!0,complete:()=>{m||this.cancelNavigationTransition(p,"",Li.NoDataFromResolver)}}))}),Pn(p=>{let m=new Df(p.id,this.urlSerializer.serialize(p.extractedUrl),this.urlSerializer.serialize(p.urlAfterRedirects),p.targetSnapshot);this.events.next(m)}))}),bf(d=>{let p=m=>{let _=[];m.routeConfig?.loadComponent&&!m.routeConfig._loadedComponent&&_.push(this.configLoader.loadComponent(m.routeConfig).pipe(Pn(y=>{m.component=y}),Ye(()=>{})));for(let y of m.children)_.push(...p(y));return _};return Yd(p(d.targetSnapshot.root)).pipe(Zd(null),Zr(1))}),bf(()=>this.afterPreactivation()),rr(()=>{let{currentSnapshot:d,targetSnapshot:p}=l,m=this.createViewTransition?.(this.environmentInjector,d.root,p.root);return m?Gi(m).pipe(Ye(()=>l)):fe(l)}),Ye(d=>{let p=uC(i.routeReuseStrategy,d.targetSnapshot,d.currentRouterState);return this.currentTransition=l=Xn(Jt({},d),{targetRouterState:p}),this.currentNavigation.targetRouterState=p,l}),Pn(()=>{this.events.next(new al)}),_C(this.rootContexts,i.routeReuseStrategy,d=>this.events.next(d),this.inputBindingEnabled),Zr(1),Pn({next:d=>{c=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Ps(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects))),this.titleStrategy?.updateTitle(d.targetRouterState.snapshot),d.resolve(!0)},complete:()=>{c=!0}}),y0(this.transitionAbortSubject.pipe(Pn(d=>{throw d}))),Dc(()=>{!c&&!h&&this.cancelNavigationTransition(l,"",Li.SupersededByNewNavigation),this.currentTransition?.id===l.id&&(this.currentNavigation=null,this.currentTransition=null)}),yo(d=>{if(h=!0,Av(d))this.events.next(new es(l.id,this.urlSerializer.serialize(l.extractedUrl),d.message,d.cancellationCode)),fC(d)?this.events.next(new ll(d.url)):l.resolve(!1);else{this.events.next(new ol(l.id,this.urlSerializer.serialize(l.extractedUrl),d,l.targetSnapshot??void 0));try{l.resolve(i.errorHandler(d))}catch(p){this.options.resolveNavigationPromiseOnError?l.resolve(!1):l.reject(p)}}return As}))}))}cancelNavigationTransition(i,r,o){let l=new es(i.id,this.urlSerializer.serialize(i.extractedUrl),r,o);this.events.next(l),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();function dR(n){return n!==nl}var fR=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:()=>ce(pR),providedIn:"root"});let n=t;return n})(),jf=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}},pR=(()=>{let t=class t extends jf{};t.\u0275fac=(()=>{let i;return function(o){return(i||(i=ef(t)))(o||t)}})(),t.\u0275prov=Fe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),Dv=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:()=>ce(mR),providedIn:"root"});let n=t;return n})(),mR=(()=>{let t=class t extends Dv{constructor(){super(...arguments),this.location=ce(Wc),this.urlSerializer=ce(Kf),this.options=ce(ip,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=ce(sp),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new ts,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=xv(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof sl)this.stateMemento=this.createStateMemento();else if(i instanceof Is)this.rawUrlTree=r.initialUrl;else if(i instanceof ou){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let o=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(o,r)}}else i instanceof al?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof es&&(i.code===Li.GuardRejected||i.code===Li.NoDataFromResolver)?this.restoreHistory(r):i instanceof ol?this.restoreHistory(r,!0):i instanceof Ps&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let o=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(o)||r.extras.replaceUrl){let l=this.browserPageId,c=Jt(Jt({},r.extras.state),this.generateNgRouterState(r.id,l));this.location.replaceState(o,"",c)}else{let l=Jt(Jt({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(o,"",l)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let o=this.browserPageId,l=this.currentPageId-o;l!==0?this.location.historyGo(l):this.currentUrlTree===i.finalUrl&&l===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};t.\u0275fac=(()=>{let i;return function(o){return(i||(i=ef(t)))(o||t)}})(),t.\u0275prov=Fe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})(),tl=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(tl||{});function gR(n,t){n.events.pipe(vo(e=>e instanceof Ps||e instanceof es||e instanceof ol||e instanceof Is),Ye(e=>e instanceof Ps||e instanceof Is?tl.COMPLETE:(e instanceof es?e.code===Li.Redirect||e.code===Li.SupersededByNewNavigation:!1)?tl.REDIRECTING:tl.FAILED),vo(e=>e!==tl.REDIRECTING),Zr(1)).subscribe(()=>{t()})}function _R(n){throw n}var vR={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},yR={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Ov=(()=>{let t=class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=ce(kc),this.stateManager=ce(Dv),this.options=ce(ip,{optional:!0})||{},this.pendingTasks=ce(R0),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=ce(hR),this.urlSerializer=ce(Kf),this.location=ce(Wc),this.urlHandlingStrategy=ce(sp),this._events=new Es,this.errorHandler=this.options.errorHandler||_R,this.navigated=!1,this.routeReuseStrategy=ce(fR),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=ce(rp,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!ce(tp,{optional:!0}),this.eventsSubscription=new u0,this.isNgZoneEnabled=ce(qn)instanceof qn&&qn.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let o=this.navigationTransitions.currentTransition,l=this.navigationTransitions.currentNavigation;if(o!==null&&l!==null){if(this.stateManager.handleRouterEvent(r,l),r instanceof es&&r.code!==Li.Redirect&&r.code!==Li.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof Ps)this.navigated=!0;else if(r instanceof ll){let c=this.urlHandlingStrategy.merge(r.url,o.currentRawUrl),h={info:o.extras.info,skipLocationChange:o.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||dR(o.source)};this.scheduleNavigation(c,nl,null,h,{resolve:o.resolve,reject:o.reject,promise:o.promise})}}SR(r)&&this._events.next(r)}catch(o){this.navigationTransitions.transitionAbortSubject.next(o)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),nl,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,o){let l={replaceUrl:!0},c=o?.navigationId?o:null;if(o){let d=Jt({},o);delete d.navigationId,delete d.\u0275routerPageId,Object.keys(d).length!==0&&(l.state=d)}let h=this.parseUrl(i);this.scheduleNavigation(h,r,c,l)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(ep),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:o,queryParams:l,fragment:c,queryParamsHandling:h,preserveFragment:d}=r,p=d?this.currentUrlTree.fragment:c,m=null;switch(h){case"merge":m=Jt(Jt({},this.currentUrlTree.queryParams),l);break;case"preserve":m=this.currentUrlTree.queryParams;break;default:m=l||null}m!==null&&(m=this.removeEmptyProps(m));let _;try{let y=o?o.snapshot:this.routerState.snapshot.root;_=gv(y)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),_=this.currentUrlTree.root}return _v(_,i,m,p??null)}navigateByUrl(i,r={skipLocationChange:!1}){let o=Do(i)?i:this.parseUrl(i),l=this.urlHandlingStrategy.merge(o,this.rawUrlTree);return this.scheduleNavigation(l,nl,null,r)}navigate(i,r={skipLocationChange:!1}){return xR(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let o;if(r===!0?o=Jt({},vR):r===!1?o=Jt({},yR):o=r,Do(i))return ev(this.currentUrlTree,i,o);let l=this.parseUrl(i);return ev(this.currentUrlTree,l,o)}removeEmptyProps(i){return Object.entries(i).reduce((r,[o,l])=>(l!=null&&(r[o]=l),r),{})}scheduleNavigation(i,r,o,l,c){if(this.disposed)return Promise.resolve(!1);let h,d,p;c?(h=c.resolve,d=c.reject,p=c.promise):p=new Promise((_,y)=>{h=_,d=y});let m=this.pendingTasks.add();return gR(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(m))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:o,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:l,resolve:h,reject:d,promise:p,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),p.catch(_=>Promise.reject(_))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();function xR(n){for(let t=0;t<n.length;t++)if(n[t]==null)throw new ln(4008,!1)}function SR(n){return!(n instanceof al)&&!(n instanceof ll)}var MR=new Pi("");function Nv(n,...t){return Xa([{provide:rp,multi:!0,useValue:n},[],{provide:Oo,useFactory:bR,deps:[Ov]},{provide:D0,multi:!0,useFactory:wR},t.map(e=>e.\u0275providers)])}function bR(n){return n.routerState.root}function wR(){let n=ce(E0);return t=>{let e=n.get(cf);if(t!==e.components[0])return;let i=n.get(Ov),r=n.get(ER);n.get(AR)===1&&i.initialNavigation(),n.get(TR,null,Kd.Optional)?.setUpPreloading(),n.get(MR,null,Kd.Optional)?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var ER=new Pi("",{factory:()=>new Es}),AR=new Pi("",{providedIn:"root",factory:()=>1});var TR=new Pi("");var Uv=[];var CR="@",RR=(()=>{let t=class t{constructor(i,r,o,l,c){this.doc=i,this.delegate=r,this.zone=o,this.animationType=l,this.moduleImpl=c,this._rendererFactoryPromise=null,this.scheduler=ce(Fc,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-RGLN3PA7.js")).catch(r=>{throw new ln(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let l=new o(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(i,r){let o=this.delegate.createRenderer(i,r);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let l=new op(o);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let h=c.createRenderer(i,r);l.use(h)}).catch(c=>{l.use(o)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(r){rf()},t.\u0275prov=Fe({token:t,factory:t.\u0275fac});let n=t;return n})(),op=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,i,r){this.delegate.insertBefore(t,e,i,r)}removeChild(t,e,i){this.delegate.removeChild(t,e,i)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,i,r){this.delegate.setAttribute(t,e,i,r)}removeAttribute(t,e,i){this.delegate.removeAttribute(t,e,i)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,i,r){this.delegate.setStyle(t,e,i,r)}removeStyle(t,e,i){this.delegate.removeStyle(t,e,i)}setProperty(t,e,i){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,i)),this.delegate.setProperty(t,e,i)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,i){return this.shouldReplay(e)&&this.replay.push(r=>r.listen(t,e,i)),this.delegate.listen(t,e,i)}shouldReplay(t){return this.replay!==null&&t.startsWith(CR)}};function Fv(n="animations"){return Bc("NgAsyncAnimations"),Xa([{provide:So,useFactory:(t,e,i)=>new RR(t,e,i,n),deps:[si,To,qn]},{provide:Wa,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var PR=(()=>{let t=class t extends Zc{constructor(i,r,o){super(i,r,o,ce(Fc,{optional:!0}))}ngOnDestroy(){this.flush()}};t.\u0275fac=function(r){return new(r||t)(Je(si),Je($a),Je($c))},t.\u0275prov=Fe({token:t,factory:t.\u0275fac});let n=t;return n})();function IR(){return new H0}function LR(n,t,e){return new G0(n,t,e)}var Bv=[{provide:$c,useFactory:IR},{provide:Zc,useClass:PR},{provide:So,useFactory:LR,deps:[To,Zc,qn]}],DR=[{provide:$a,useFactory:()=>new V0},{provide:Wa,useValue:"BrowserAnimations"},...Bv],B3=[{provide:$a,useClass:k0},{provide:Wa,useValue:"NoopAnimations"},...Bv];function zv(){return Bc("NgEagerAnimations"),[...DR]}var kv={providers:[Q0(),Nv(Uv),Fv(),zv()]};var Hv=function(){function n(t,e,i){e===void 0&&(e=!1),this.next=null,this.prev=null,this.owner=null,this.fn=t,this.once=e,this.thisArg=i}return n.prototype.detach=function(){return this.owner===null?!1:(this.owner.detach(this),!0)},n.prototype.dispose=function(){this.detach()},n}(),En=function(){function n(){this._head=null,this._tail=null,this._filter=null}return n.prototype.handlers=function(){for(var t=this._head,e=[];t;)e.push(t),t=t.next;return e},n.prototype.hasAny=function(){return!!this._head},n.prototype.has=function(t){return t.owner===this},n.prototype.dispatch=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var i=this._head;if(!i||this._filter&&!this._filter.apply(this,t))return!1;for(;i;)i.once&&this.detach(i),i.fn.apply(i.thisArg,t),i=i.next;return!0},n.prototype.add=function(t,e){return e===void 0&&(e=null),this._addSignalBinding(new Hv(t,!1,e))},n.prototype.once=function(t,e){return e===void 0&&(e=null),this._addSignalBinding(new Hv(t,!0,e))},n.prototype.detach=function(t){var e=t;return e.owner!==this?this:(e.prev&&(e.prev.next=e.next),e.next&&(e.next.prev=e.prev),e===this._head?(this._head=e.next,e.next===null&&(this._tail=null)):e===this._tail&&(this._tail=e.prev,this._tail&&(this._tail.next=null)),e.owner=null,this)},n.prototype.detachAll=function(){var t=this._head;if(!t)return this;for(this._head=null,this._tail=null;t;)t.owner=null,t=t.next;return this},n.prototype.filter=function(t){this._filter=t},n.prototype.proxy=function(){for(var t=this,e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];for(var r=function(){for(var l=[],c=0;c<arguments.length;c++)l[c]=arguments[c];return t.dispatch.apply(t,l)},o=0;o<e.length;++o)e[o].add(r);return this},n.prototype._addSignalBinding=function(t){var e=t;return this._head?(this._tail&&(this._tail.next=e),e.prev=this._tail,this._tail=e):(this._head=e,this._tail=e),e.owner=this,e},n}();var mu=Wd(Gv());var dp=function(){function n(t){this.config=t,this.onError=new En,this.onComplete=new En,this.onProgress=new En}return n}();var hp=function(n,t){return hp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])},hp(n,t)};function ml(n,t){hp(n,t);function e(){this.constructor=n}n.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function OR(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;for(var i=Array(n),r=0,t=0;t<e;t++)for(var o=arguments[t],l=0,c=o.length;l<c;l++,r++)i[r]=o[l];return i}function fp(n){var t=n.indexOf("data:")===0,e="";if(t){var i=n.indexOf("/");e=n.substring(i+1,n.indexOf(";",i))}else{var r=n.indexOf("?"),o=n.indexOf("#"),l=Math.min(r>-1?r:n.length,o>-1?o:n.length);n=n.substring(0,l),e=n.substring(n.lastIndexOf(".")+1)}return e.toLowerCase()}function Wv(n){throw new Error("Unexpected value. Should have been never.")}var Oi=function(n){return n[n.Unknown=0]="Unknown",n[n.Buffer=1]="Buffer",n[n.Blob=2]="Blob",n[n.Json=3]="Json",n[n.Xml=4]="Xml",n[n.Image=5]="Image",n[n.Audio=6]="Audio",n[n.Video=7]="Video",n[n.Text=8]="Text",n}(Oi||{}),Ls=function(n){return n[n.NotStarted=0]="NotStarted",n[n.Loading=1]="Loading",n[n.Complete=2]="Complete",n}(Ls||{}),Xv=function(n){ml(t,n);function t(e,i){var r=n.call(this,e)||this;return r.elementType=i,r._boundOnLoad=r._onLoad.bind(r),r._boundOnError=r._onError.bind(r),r._boundOnTimeout=r._onTimeout.bind(r),r._element=r._createElement(),r._elementTimer=0,r}return t.prototype.load=function(){var e=this.config;e.crossOrigin&&(this._element.crossOrigin=e.crossOrigin);var i=e.sourceSet||[e.url];if(navigator.isCocoonJS)this._element.src=i[0];else for(var r=0;r<i.length;++r){var o=i[r],l=e.mimeTypes?e.mimeTypes[r]:void 0;l||(l=this.elementType+"/"+fp(o));var c=document.createElement("source");c.src=o,c.type=l,this._element.appendChild(c)}this._element.addEventListener("load",this._boundOnLoad,!1),this._element.addEventListener("canplaythrough",this._boundOnLoad,!1),this._element.addEventListener("error",this._boundOnError,!1),this._element.load(),e.timeout&&(this._elementTimer=window.setTimeout(this._boundOnTimeout,e.timeout))},t.prototype.abort=function(){for(this._clearEvents();this._element.firstChild;)this._element.removeChild(this._element.firstChild);this._error(this.elementType+" load aborted by the user.")},t.prototype._createElement=function(){return this.config.loadElement?this.config.loadElement:document.createElement(this.elementType)},t.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this._element.removeEventListener("load",this._boundOnLoad,!1),this._element.removeEventListener("canplaythrough",this._boundOnLoad,!1),this._element.removeEventListener("error",this._boundOnError,!1)},t.prototype._error=function(e){this._clearEvents(),this.onError.dispatch(e)},t.prototype._complete=function(){this._clearEvents();var e=Oi.Unknown;switch(this.elementType){case"audio":e=Oi.Audio;break;case"video":e=Oi.Video;break;default:Wv(this.elementType)}this.onComplete.dispatch(e,this._element)},t.prototype._onLoad=function(){this._complete()},t.prototype._onError=function(){this._error(this.elementType+" failed to load.")},t.prototype._onTimeout=function(){this._error(this.elementType+" load timed out.")},t}(dp),ap=function(n){ml(t,n);function t(e){return n.call(this,e,"audio")||this}return t}(Xv),NR="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",Wi=function(n){ml(t,n);function t(){var e=n!==null&&n.apply(this,arguments)||this;return e._boundOnLoad=e._onLoad.bind(e),e._boundOnError=e._onError.bind(e),e._boundOnTimeout=e._onTimeout.bind(e),e._element=e._createElement(),e._elementTimer=0,e}return t.prototype.load=function(){var e=this.config;e.crossOrigin&&(this._element.crossOrigin=e.crossOrigin),this._element.src=e.url,this._element.addEventListener("load",this._boundOnLoad,!1),this._element.addEventListener("error",this._boundOnError,!1),e.timeout&&(this._elementTimer=window.setTimeout(this._boundOnTimeout,e.timeout))},t.prototype.abort=function(){this._clearEvents(),this._element.src=NR,this._error("Image load aborted by the user.")},t.prototype._createElement=function(){return this.config.loadElement?this.config.loadElement:document.createElement("img")},t.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this._element.removeEventListener("load",this._boundOnLoad,!1),this._element.removeEventListener("error",this._boundOnError,!1)},t.prototype._error=function(e){this._clearEvents(),this.onError.dispatch(e)},t.prototype._complete=function(){this._clearEvents(),this.onComplete.dispatch(Oi.Image,this._element)},t.prototype._onLoad=function(){this._complete()},t.prototype._onError=function(){this._error("Image failed to load.")},t.prototype._onTimeout=function(){this._error("Image load timed out.")},t}(dp),lp=function(n){ml(t,n);function t(e){return n.call(this,e,"video")||this}return t}(Xv),pu=!!(window.XDomainRequest&&!("withCredentials"in new XMLHttpRequest)),we=function(n){return n.Default="text",n.Buffer="arraybuffer",n.Blob="blob",n.Document="document",n.Json="json",n.Text="text",n}(we||{});function cp(n){return n.toString().replace("object ","")}var UR=function(n){ml(t,n);function t(){var e=n!==null&&n.apply(this,arguments)||this;return e._boundOnLoad=e._onLoad.bind(e),e._boundOnAbort=e._onAbort.bind(e),e._boundOnError=e._onError.bind(e),e._boundOnTimeout=e._onTimeout.bind(e),e._boundOnProgress=e._onProgress.bind(e),e._xhr=e._createRequest(),e._xhrType=we.Default,e}return t.prototype.load=function(){var e=this.config,i=fp(e.url);typeof e.xhrType!="string"&&(e.xhrType=this._determineXhrType(i));var r=this._xhr;this._xhrType=e.xhrType||we.Default,pu?(r.timeout=e.timeout||5e3,r.onload=this._boundOnLoad,r.onerror=this._boundOnError,r.ontimeout=this._boundOnTimeout,r.onprogress=this._boundOnProgress,r.open("GET",e.url,!0),setTimeout(function(){r.send()},0)):(r.open("GET",e.url,!0),e.timeout&&(r.timeout=e.timeout),e.xhrType===we.Json||e.xhrType===we.Document?r.responseType=we.Text:r.responseType=e.xhrType,r.addEventListener("load",this._boundOnLoad,!1),r.addEventListener("abort",this._boundOnAbort,!1),r.addEventListener("error",this._boundOnError,!1),r.addEventListener("timeout",this._boundOnTimeout,!1),r.addEventListener("progress",this._boundOnProgress,!1),r.send())},t.prototype.abort=function(){pu?(this._clearEvents(),this._xhr.abort(),this._onAbort()):this._xhr.abort()},t.prototype._createRequest=function(){return pu?new window.XDomainRequest:new XMLHttpRequest},t.prototype._determineXhrType=function(e){return t._xhrTypeMap[e]||we.Default},t.prototype._clearEvents=function(){pu?(this._xhr.onload=null,this._xhr.onerror=null,this._xhr.ontimeout=null,this._xhr.onprogress=null):(this._xhr.removeEventListener("load",this._boundOnLoad,!1),this._xhr.removeEventListener("abort",this._boundOnAbort,!1),this._xhr.removeEventListener("error",this._boundOnError,!1),this._xhr.removeEventListener("timeout",this._boundOnTimeout,!1),this._xhr.removeEventListener("progress",this._boundOnProgress,!1))},t.prototype._error=function(e){this._clearEvents(),this.onError.dispatch(e)},t.prototype._complete=function(e,i){this._clearEvents(),this.onComplete.dispatch(e,i)},t.prototype._onLoad=function(){var e=this._xhr,i="",r=typeof e.status>"u"?200:e.status;(typeof e.responseType>"u"||e.responseType===""||e.responseType==="text")&&(i=e.responseText),r===0&&(i.length>0||e.responseType===we.Buffer)?r=200:r===1223&&(r=204);var o=Math.floor(r/100)*100;if(o!==200){this._error("["+e.status+"] "+e.statusText+": "+e.responseURL);return}switch(this._xhrType){case we.Buffer:this._complete(Oi.Buffer,e.response);break;case we.Blob:this._complete(Oi.Blob,e.response);break;case we.Document:this._parseDocument(i);break;case we.Json:this._parseJson(i);break;case we.Default:case we.Text:this._complete(Oi.Text,i);break;default:Wv(this._xhrType)}},t.prototype._parseDocument=function(e){try{if(window.DOMParser){var i=new DOMParser,r=i.parseFromString(e,"text/xml");this._complete(Oi.Xml,r)}else{var o=document.createElement("div");o.innerHTML=e,this._complete(Oi.Xml,o)}}catch(l){this._error("Error trying to parse loaded xml: "+l)}},t.prototype._parseJson=function(e){try{var i=JSON.parse(e);this._complete(Oi.Json,i)}catch(r){this._error("Error trying to parse loaded json: "+r)}},t.prototype._onAbort=function(){var e=this._xhr;this._error(cp(e)+" Request was aborted by the user.")},t.prototype._onError=function(){var e=this._xhr;this._error(cp(e)+" Request failed. Status: "+e.status+', text: "'+e.statusText+'"')},t.prototype._onTimeout=function(){var e=this._xhr;this._error(cp(e)+" Request timed out.")},t.prototype._onProgress=function(e){e&&e.lengthComputable&&this.onProgress.dispatch(e.loaded/e.total)},t.setExtensionXhrType=function(e,i){e&&e.indexOf(".")===0&&(e=e.substring(1)),e&&(t._xhrTypeMap[e]=i)},t.ResponseType=we,t._xhrTypeMap={xhtml:we.Document,html:we.Document,htm:we.Document,xml:we.Document,tmx:we.Document,svg:we.Document,tsx:we.Document,gif:we.Blob,png:we.Blob,bmp:we.Blob,jpg:we.Blob,jpeg:we.Blob,tif:we.Blob,tiff:we.Blob,webp:we.Blob,tga:we.Blob,json:we.Json,text:we.Text,txt:we.Text,ttf:we.Buffer,otf:we.Buffer},t}(dp);function FR(n){var t=n;return function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];if(t===null)throw new Error("Callback was already called.");var o=t;return t=null,o.apply(this,i)}}var BR=function(){function n(t,e){if(e===void 0&&(e=1),this.worker=t,this.concurrency=e,this.workers=0,this.buffer=0,this.paused=!1,this._started=!1,this._tasks=[],this.onSaturated=new En,this.onUnsaturated=new En,this.onEmpty=new En,this.onDrain=new En,this.onError=new En,e===0)throw new Error("Concurrency must not be zero");this.buffer=e/4}return Object.defineProperty(n.prototype,"started",{get:function(){return this._started},enumerable:!0,configurable:!0}),n.prototype.reset=function(){this.onDrain.detachAll(),this.workers=0,this._started=!1,this._tasks=[]},n.prototype.push=function(t,e){this._insert(t,!1,e)},n.prototype.unshift=function(t,e){this._insert(t,!0,e)},n.prototype.process=function(){for(;!this.paused&&this.workers<this.concurrency&&this._tasks.length;){var t=this._tasks.shift();this._tasks.length===0&&this.onEmpty.dispatch(),this.workers+=1,this.workers===this.concurrency&&this.onSaturated.dispatch(),this.worker(t.data,FR(this._next(t)))}},n.prototype.length=function(){return this._tasks.length},n.prototype.running=function(){return this.workers},n.prototype.idle=function(){return this._tasks.length+this.workers===0},n.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},n.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var t=1;t<=this.concurrency;t++)this.process()}},n.prototype.getTask=function(t){return this._tasks[t]},n.prototype._insert=function(t,e,i){var r=this;if(i!=null&&typeof i!="function")throw new Error("task callback must be a function");if(this._started=!0,t==null&&this.idle()){setTimeout(function(){return r.onDrain.dispatch()},1);return}var o={data:t,callback:i};e?this._tasks.unshift(o):this._tasks.push(o),setTimeout(function(){return r.process()},1)},n.prototype._next=function(t){var e=this;return function(i){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];e.workers-=1,t.callback&&t.callback.apply(t,OR([i],r)),i&&e.onError.dispatch(i,t.data),e.workers<=e.concurrency-e.buffer&&e.onUnsaturated.dispatch(),e.idle()&&e.onDrain.dispatch(),e.process()}},n}(),zR=function(){function n(t,e){if(this.children=[],this.onStart=new En,this.onProgress=new En,this.onComplete=new En,this.onAfterMiddleware=new En,this.data=null,this.type=Oi.Unknown,this.error="",this.progressChunk=0,this._dequeue=function(){},this._onCompleteBinding=null,this._state=Ls.NotStarted,this.name=t,this.metadata=e.metadata,typeof e.crossOrigin!="string"&&(e.crossOrigin=this._determineCrossOrigin(e.url)),e.strategy&&typeof e.strategy!="function")this._strategy=e.strategy,this._strategy.config=e;else{var i=e.strategy;i||(i=n._loadStrategyMap[fp(e.url)]),i||(i=n._defaultLoadStrategy),this._strategy=new i(e)}this._strategy.onError.add(this._error,this),this._strategy.onComplete.add(this._complete,this),this._strategy.onProgress.add(this._progress,this)}return n.setDefaultLoadStrategy=function(t){n._defaultLoadStrategy=t},n.setLoadStrategy=function(t,e){t&&t.indexOf(".")===0&&(t=t.substring(1)),t&&(n._loadStrategyMap[t]=e)},Object.defineProperty(n.prototype,"strategy",{get:function(){return this._strategy},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"url",{get:function(){return this._strategy.config.url},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isLoading",{get:function(){return this._state===Ls.Loading},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"isComplete",{get:function(){return this._state===Ls.Complete},enumerable:!0,configurable:!0}),n.prototype.abort=function(){this._strategy.abort()},n.prototype.load=function(){this._state=Ls.Loading,this.onStart.dispatch(this),this._strategy.load()},n.prototype._error=function(t){this._state=Ls.Complete,this.error=t,this.onComplete.dispatch(this)},n.prototype._complete=function(t,e){this._state=Ls.Complete,this.type=t,this.data=e,this.onComplete.dispatch(this)},n.prototype._progress=function(t){this.onProgress.dispatch(this,t)},n.prototype._determineCrossOrigin=function(t,e){if(e===void 0&&(e=window.location),t.indexOf("data:")===0||t.indexOf("javascript:")===0)return"";if(window.origin!==window.location.origin)return"anonymous";n._tempAnchor||(n._tempAnchor=document.createElement("a")),n._tempAnchor.href=t;var i=(0,mu.default)(n._tempAnchor.href,{strictMode:!0}),r=!i.port&&e.port===""||i.port===e.port,o=i.protocol?i.protocol+":":"";return i.host!==e.hostname||!r||o!==e.protocol?"anonymous":""},n._tempAnchor=null,n._defaultLoadStrategy=UR,n._loadStrategyMap={gif:Wi,png:Wi,bmp:Wi,jpg:Wi,jpeg:Wi,tif:Wi,tiff:Wi,webp:Wi,tga:Wi,svg:Wi,"svg+xml":Wi,mp3:ap,ogg:ap,wav:ap,mp4:lp,webm:lp,mov:lp},n}();function kR(n,t,e,i){i===void 0&&(i=!1);var r=0,o=n.length;(function l(c){if(c||r===o){e&&e(c);return}i?setTimeout(function(){return t(n[r++],l)},1):t(n[r++],l)})()}var up=100,HR=/(#[\w-]+)?$/,qv=function(){function n(t,e){t===void 0&&(t=""),e===void 0&&(e=10),this.progress=0,this.loading=!1,this.defaultQueryString="",this.resources={},this.onError=new En,this.onLoad=new En,this.onStart=new En,this.onComplete=new En,this.onProgress=new En,this._baseUrl="",this._urlResolvers=[],this._middleware=[],this._resourcesParsing=[],this._boundLoadResource=this._loadResource.bind(this),this.baseUrl=t,this._queue=new BR(this._boundLoadResource,e),this._queue.pause(),this._middleware=n._defaultMiddleware.slice()}return Object.defineProperty(n.prototype,"baseUrl",{get:function(){return this._baseUrl},set:function(t){for(;t.length&&t.charAt(t.length-1)==="/";)t=t.slice(0,-1);this._baseUrl=t},enumerable:!0,configurable:!0}),n.prototype.add=function(t,e){if(Array.isArray(t)){for(var i=0;i<t.length;++i)this.add(t[i]);return this}var r="",o="",l=this._baseUrl,c={url:""};if(typeof t=="object"?(r=t.url,o=t.name||t.url,l=t.baseUrl||l,c=t):(o=t,typeof e=="string"?r=e:r=o),!r)throw new Error("You must specify the `url` property.");if(this.loading&&!c.parentResource)throw new Error("Cannot add root resources while the loader is running.");if(this.resources[o])throw new Error('Resource named "'+o+'" already exists.');r=this._prepareUrl(r,l),c.url=r;var h=new zR(o,c);if(this.resources[o]=h,typeof c.onComplete=="function"&&h.onAfterMiddleware.once(c.onComplete),this.loading){for(var d=c.parentResource,p=[],i=0;i<d.children.length;++i)d.children[i].isComplete||p.push(d.children[i]);var m=d.progressChunk*(p.length+1),_=m/(p.length+2);d.children.push(h),d.progressChunk=_;for(var i=0;i<p.length;++i)p[i].progressChunk=_;h.progressChunk=_}return this._queue.push(h),this},n.prototype.use=function(t,e){return e===void 0&&(e=n.DefaultMiddlewarePriority),this._middleware.push({fn:t,priority:e}),this._middleware.sort(function(i,r){return i.priority-r.priority}),this},n.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.reset(),this._queue.pause();for(var t in this.resources){var e=this.resources[t];e&&(e._onCompleteBinding&&e._onCompleteBinding.detach(),e.isLoading&&e.abort())}return this.resources={},this},n.prototype.load=function(t){if(typeof t=="function"&&this.onComplete.once(t),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var e=this._queue.length(),i=up/e,r=0;r<this._queue.length();++r)this._queue.getTask(r).data.progressChunk=i;this._onStart(),this._queue.resume()}return this},Object.defineProperty(n.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(t){this._queue.concurrency=t},enumerable:!0,configurable:!0}),n.prototype.addUrlResolver=function(t){return this._urlResolvers.push(t),this},n.prototype._prepareUrl=function(t,e){var i=(0,mu.default)(t,{strictMode:!0});if(this._urlResolvers.forEach(function(l){t=l(t,i),i=(0,mu.default)(t,{strictMode:!0})}),!i.protocol&&t.indexOf("//")!==0&&(e.length&&t.charAt(0)!=="/"?t=e+"/"+t:t=e+t),this.defaultQueryString){var r=HR.exec(t);if(r){var o=r[0];t=t.substr(0,t.length-o.length),t.indexOf("?")!==-1?t+="&"+this.defaultQueryString:t+="?"+this.defaultQueryString,t+=o}}return t},n.prototype._loadResource=function(t,e){t._dequeue=e,t._onCompleteBinding=t.onComplete.once(this._onLoad,this),t.load()},n.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},n.prototype._onComplete=function(){this.progress=up,this.loading=!1,this.onComplete.dispatch(this,this.resources)},n.prototype._onLoad=function(t){var e=this;t._onCompleteBinding=null,this._resourcesParsing.push(t),t._dequeue(),kR(this._middleware,function(i,r){i.fn.call(e,t,r)},function(){t.onAfterMiddleware.dispatch(t),e.progress=Math.min(up,e.progress+t.progressChunk),e.onProgress.dispatch(e,t),t.error?e.onError.dispatch(t.error,e,t):e.onLoad.dispatch(e,t),e._resourcesParsing.splice(e._resourcesParsing.indexOf(t),1),e._queue.idle()&&e._resourcesParsing.length===0&&e._onComplete()},!0)},n.use=function(t,e){return e===void 0&&(e=n.DefaultMiddlewarePriority),n._defaultMiddleware.push({fn:t,priority:e}),n._defaultMiddleware.sort(function(i,r){return i.priority-r.priority}),n},n.DefaultMiddlewarePriority=50,n._defaultMiddleware=[],n}();var VR="assets/images/earth_texture.jpg",GR="assets/images/earth_bump.jpg",WR="assets/images/earth_spec.jpg",XR="assets/images/earth_cloud.png",qR="assets/images/sign_namibia.png",YR="assets/images/sign_mariana.png",$R="assets/images/sign_greenland.png",ZR="assets/images/sign_galapagos.png",jR="assets/images/sign_antarctica.png",KR="assets/images/sky_cloud_0.jpg",JR="assets/images/sky_cloud_1.jpg",QR="assets/images/sky_cloud_2.jpg",tP="assets/images/sky_cloud_3.jpg",eP="assets/images/sky_cloud_4.jpg",nP="assets/images/sky_cloud_5.jpg",iP="assets/images/sky_cloud_6.jpg",rP="assets/images/sky_cloud_7.jpg",sP="assets/images/sky_cloud_8.jpg",oP="assets/images/sky_cloud_9.jpg",aP="assets/images/sky_cloud_10.jpg",lP="assets/images/sky_cloud_11.jpg",cP="assets/images/sky_cloud_12.jpg",uP="assets/images/bg_meteor.png",hP="assets/video/video.mp4",dP="assets/audio/music_spots.mp3",fP="assets/audio/music_bg.mp3",pP="assets/images/cpt_namibia.png",mP="assets/images/cpt_antarctic.png",gP="assets/images/cpt_greenland.png",_P="assets/images/cpt_mariana.png",vP="assets/images/cpt_galapagos.png",Fo={WIDTH:375,HEIGHT:600},Yv=[{radiusX:150,radiusY:45,revise:0,speed:.01},{radiusX:100,radiusY:35,revise:10,speed:.02}],gu={spotsVideo:hP,spotsAudio:dP,backgroundAudio:fP},Bo={RES:null},$v={earthTextureImage:VR,earthBumpImage:GR,earthSpecImage:WR,earthCloudImage:XR,signNamibiaImage:qR,signMarianaImage:YR,signGreenlandImage:$R,signGalapagosImage:ZR,signAntarcicaImage:jR,skyCloud0:KR,skyCloud1:JR,skyCloud2:QR,skyCloud3:tP,skyCloud4:eP,skyCloud5:nP,skyCloud6:iP,skyCloud7:rP,skyCloud8:sP,skyCloud9:oP,skyCloud10:aP,skyCloud11:lP,skyCloud12:cP,bgMeteor:uP,captionNamibia:pP,captionAntarctic:mP,captionGreenland:gP,captionGalapagos:vP,captionMariana:_P},gl=[{name:"namibia",coord:[-19.2,14.11666667],dotPosition:[4.6,-1.29,-2.42],cameraFar:[26.46,-6.94,-9.96],cameraNear:[4.52,-1.3,-1.63],imageName:"signNamibiaImage",coordSpriteIndex:4,videoTimeline:[2.8,8.4],audioTimeline:[0,10.057142857142857],captionImgName:"captionNamibia"},{name:"mariana",coord:[18.25,142.81666667],dotPosition:[-4.39,2.66,-2.41],cameraFar:[-20.03,13.47,-14.61],cameraNear:[-3.54,2.38,-2.58],imageName:"signMarianaImage",coordSpriteIndex:3,videoTimeline:[10.8,19.1],audioTimeline:[24,34.10938775510204],captionImgName:"captionMariana"},{name:"greenland",coord:[72.16666667,-43],dotPosition:[1.88,5.09,.89],cameraFar:[7.24,26.52,7.06],cameraNear:[1.3,4.66,1.24],imageName:"signGreenlandImage",coordSpriteIndex:2,videoTimeline:[40.2,47.8],audioTimeline:[48,58.10938775510204],captionImgName:"captionGreenland"},{name:"galapagos",coord:[1.33333333,-91.15],dotPosition:[.55,.024,5.39],cameraFar:[-.6,.14,28.21],cameraNear:[-.1,.024,4.99],imageName:"signGalapagosImage",coordSpriteIndex:1,videoTimeline:[22,37.43],audioTimeline:[12,22.057142857142857],captionImgName:"captionGalapagos"},{name:"antarctica",coord:[-77.96666667,-155.63333333],dotPosition:[-1.32,-5.05,.98],cameraFar:[-7.88,-27,1.87],cameraNear:[-1.39,-4.75,.33],imageName:"signAntarcicaImage",coordSpriteIndex:0,videoTimeline:[50.9,69],audioTimeline:[36,46.05714285714286],captionImgName:"captionAntarctic"}];var pp=class{constructor(t,e,i,r,o,l,c){this._color="#fff",this._angle=0,this._rotation=0,this._scaleX=1,this._scaleY=1,this._x=0,this._y=0,this._radius=5,this._ctx=t,this._speed=e||.001,this._radiusX=o||0,this._radiusY=l||0,this._revise=c||0,this._centerX=i/2,this._centerY=r/2}_draw(){this._ctx.save(),this._ctx.translate(this._x,this._y-this._revise),this._ctx.rotate(this._rotation),this._ctx.scale(this._scaleX,this._scaleY),this._ctx.fillStyle=this._color,this._ctx.beginPath(),this._ctx.arc(0,0,this._radius,0,2*Math.PI,!0),this._ctx.closePath(),this._ctx.fill(),this._ctx.restore()}draw(){this._x=this._centerX+Math.cos(this._angle)*this._radiusX,this._y=this._centerY+Math.sin(this._angle)*this._radiusY,this._angle+=this._speed,this._draw()}},_u=class{constructor(t){this._motions=[],this._width=320,this._height=320,this._el=t,this._init()}_init(){let t=document.createElement("canvas");this._el.append(t),this._context=t.getContext("2d"),t.width=this._width,t.height=this._height,t.style.width=this._width/2+"px",t.style.height=this._height/2+"px",Yv.forEach(e=>{let i=new pp(this._context,e.speed,this._width,this._height,e.radiusX,e.radiusY,e.revise);this._motions.push(i)}),this._loop()}_loop(){this._context.clearRect(0,0,this._width,this._height),this._motions.forEach(t=>{t.draw()}),requestAnimationFrame(this._loop.bind(this))}};var yP=["trackOrbit"],Zv=(()=>{let t=class t{constructor(){this.progress=0}ngOnInit(){new _u(this._trackOrbit.nativeElement)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=Ke({type:t,selectors:[["app-loading"]],viewQuery:function(r,o){if(r&1&&wn(yP,7),r&2){let l;_n(l=vn())&&(o._trackOrbit=l.first)}},inputs:{progress:"progress"},standalone:!0,features:[en],decls:8,vars:1,consts:[[1,"loading"],[1,"loading_text"],[1,"loading_orbits"],["trackOrbit",""],[1,"loading_progress"],[1,"loading_tips"]],template:function(r,o){r&1&&(Ne(0,"div",0),Ie(1,"div",1)(2,"div",2,3),Ne(4,"div",4),af(5),tn(),Ne(6,"div",5),af(7,"turn on sound for a better experience"),tn()()),r&2&&(Qe(5),P0("",o.progress,"%"))},styles:[`.loading{position:relative;width:100%;height:100%}.loading_text{position:absolute;width:110px;height:60px;top:50%;left:50%;margin:-160px 0 0 -50.5px;background-image:url("./media/bg_loading_text-MGECTC3S.png");background-size:contain;background-position:center center;background-repeat:no-repeat}.loading_orbits{position:absolute;top:50%;left:50%;width:302px;height:130px;margin:-82px 0 0 -151px;background:url("./media/bg_loading_orbits-WHL7LSXF.png") no-repeat center;background-size:302px 130px}.loading_orbits canvas{position:absolute;left:72px;top:-38px;transform:rotate(15deg)}.loading_tips{position:absolute;top:50%;left:0;margin-top:75px;width:100%;font-size:12px;text-align:center;color:#c0d4ff}.loading_progress{position:absolute;top:50%;left:0;width:100%;margin-top:50px;font-size:12px;text-align:center;color:#fff}
`],encapsulation:2});let n=t;return n})();var Cm="161",js={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ks={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xP=0,jv=1,SP=2;var wx=1,MP=2,Cr=3,ds=0,zn=1,Rr=2,lr=0,aa=1,ua=2,Kv=3,Jv=4,bP=5,Bs=100,wP=101,EP=102,Qv=103,ty=104,AP=200,TP=201,CP=202,RP=203,qp=204,Yp=205,PP=206,IP=207,LP=208,DP=209,OP=210,NP=211,UP=212,FP=213,BP=214,zP=0,kP=1,HP=2,Gu=3,VP=4,GP=5,WP=6,XP=7,Rm=0,qP=1,YP=2,us=0,$P=1,ZP=2,jP=3,KP=4,JP=5,QP=6;var ey=300,ha=301,da=302,$p=303,Zp=304,gh=306,jp=1e3,Zi=1001,Kp=1002,jn=1003,ny=1004;var _l=1005;var Ln=1006,mp=1007;var ks=1008;var hs=1009,tI=1010,eI=1011,Pm=1012,Ex=1013,cs=1014,Pr=1015,qs=1016,Ax=1017,Tx=1018,Vs=1020,nI=1021,gi=1023,iI=1024,rI=1025,Gs=1026,fa=1027,sI=1028,Cx=1029,oI=1030,Rx=1031,Px=1033,gp=33776,_p=33777,vp=33778,yp=33779,iy=35840,ry=35841,sy=35842,oy=35843,Ix=36196,ay=37492,ly=37496,cy=37808,uy=37809,hy=37810,dy=37811,fy=37812,py=37813,my=37814,gy=37815,_y=37816,vy=37817,yy=37818,xy=37819,Sy=37820,My=37821,xp=36492,by=36494,wy=36495,aI=36283,Ey=36284,Ay=36285,Ty=36286;var Wu=2300,Xu=2301,Sp=2302,Cy=2400,Ry=2401,Py=2402;var Lx=3e3,Ws=3001,lI=3200,cI=3201,Dx=0,uI=1,Ui="",Dn="srgb",Dr="srgb-linear",Im="display-p3",_h="display-p3-linear",qu="linear",$e="srgb",Yu="rec709",$u="p3";var zo=7680;var Iy=519,hI=512,dI=513,fI=514,Ox=515,pI=516,mI=517,gI=518,_I=519,Jp=35044;var Ly="300 es",Qp=1035,Ir=2e3,Zu=2001,cr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let r=this._listeners[t];if(r!==void 0){let o=r.indexOf(e);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let o=0,l=r.length;o<l;o++)r[o].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dy=1234567,El=Math.PI/180,Cl=180/Math.PI;function Lr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[e&63|128]+Un[e>>8&255]+"-"+Un[e>>16&255]+Un[e>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function Bn(n,t,e){return Math.max(t,Math.min(e,n))}function Lm(n,t){return(n%t+t)%t}function vI(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function yI(n,t,e){return n!==t?(e-n)/(t-n):0}function Al(n,t,e){return(1-e)*n+e*t}function xI(n,t,e,i){return Al(n,t,1-Math.exp(-e*i))}function SI(n,t=1){return t-Math.abs(Lm(n,t*2)-t)}function MI(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function bI(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function wI(n,t){return n+Math.floor(Math.random()*(t-n+1))}function EI(n,t){return n+Math.random()*(t-n)}function AI(n){return n*(.5-Math.random())}function TI(n){n!==void 0&&(Dy=n);let t=Dy+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function CI(n){return n*El}function RI(n){return n*Cl}function tm(n){return(n&n-1)===0&&n!==0}function PI(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ju(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function II(n,t,e,i,r){let o=Math.cos,l=Math.sin,c=o(e/2),h=l(e/2),d=o((t+i)/2),p=l((t+i)/2),m=o((t-i)/2),_=l((t-i)/2),y=o((i-t)/2),S=l((i-t)/2);switch(r){case"XYX":n.set(c*p,h*m,h*_,c*d);break;case"YZY":n.set(h*_,c*p,h*m,c*d);break;case"ZXZ":n.set(h*m,h*_,c*p,c*d);break;case"XZX":n.set(c*p,h*S,h*y,c*d);break;case"YXY":n.set(h*y,c*p,h*S,c*d);break;case"ZYZ":n.set(h*S,h*y,c*p,c*d);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ji(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Nx={DEG2RAD:El,RAD2DEG:Cl,generateUUID:Lr,clamp:Bn,euclideanModulo:Lm,mapLinear:vI,inverseLerp:yI,lerp:Al,damp:xI,pingpong:SI,smoothstep:MI,smootherstep:bI,randInt:wI,randFloat:EI,randFloatSpread:AI,seededRandom:TI,degToRad:CI,radToDeg:RI,isPowerOfTwo:tm,ceilPowerOfTwo:PI,floorPowerOfTwo:ju,setQuaternionFromProperEuler:II,normalize:Ue,denormalize:ji},Wt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Bn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),o=this.x-t.x,l=this.y-t.y;return this.x=o*i-l*r+t.x,this.y=o*r+l*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Se=class n{constructor(t,e,i,r,o,l,c,h,d){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,c,h,d)}set(t,e,i,r,o,l,c,h,d){let p=this.elements;return p[0]=t,p[1]=r,p[2]=c,p[3]=e,p[4]=o,p[5]=h,p[6]=i,p[7]=l,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],c=i[3],h=i[6],d=i[1],p=i[4],m=i[7],_=i[2],y=i[5],S=i[8],A=r[0],v=r[3],g=r[6],I=r[1],R=r[4],D=r[7],z=r[2],B=r[5],U=r[8];return o[0]=l*A+c*I+h*z,o[3]=l*v+c*R+h*B,o[6]=l*g+c*D+h*U,o[1]=d*A+p*I+m*z,o[4]=d*v+p*R+m*B,o[7]=d*g+p*D+m*U,o[2]=_*A+y*I+S*z,o[5]=_*v+y*R+S*B,o[8]=_*g+y*D+S*U,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],c=t[5],h=t[6],d=t[7],p=t[8];return e*l*p-e*c*d-i*o*p+i*c*h+r*o*d-r*l*h}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],c=t[5],h=t[6],d=t[7],p=t[8],m=p*l-c*d,_=c*h-p*o,y=d*o-l*h,S=e*m+i*_+r*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);let A=1/S;return t[0]=m*A,t[1]=(r*d-p*i)*A,t[2]=(c*i-r*l)*A,t[3]=_*A,t[4]=(p*e-r*h)*A,t[5]=(r*o-c*e)*A,t[6]=y*A,t[7]=(i*h-d*e)*A,t[8]=(l*e-i*o)*A,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,o,l,c){let h=Math.cos(o),d=Math.sin(o);return this.set(i*h,i*d,-i*(h*l+d*c)+l+t,-r*d,r*h,-r*(-d*l+h*c)+c+e,0,0,1),this}scale(t,e){return this.premultiply(Mp.makeScale(t,e)),this}rotate(t){return this.premultiply(Mp.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mp.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Mp=new Se;function Ux(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ku(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function LI(){let n=Ku("canvas");return n.style.display="block",n}var Oy={};function Xs(n){n in Oy||(Oy[n]=!0,console.warn(n))}var Ny=new Se().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uy=new Se().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vu={[Dr]:{transfer:qu,primaries:Yu,toReference:n=>n,fromReference:n=>n},[Dn]:{transfer:$e,primaries:Yu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[_h]:{transfer:qu,primaries:$u,toReference:n=>n.applyMatrix3(Uy),fromReference:n=>n.applyMatrix3(Ny)},[Im]:{transfer:$e,primaries:$u,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Uy),fromReference:n=>n.applyMatrix3(Ny).convertLinearToSRGB()}},DI=new Set([Dr,_h]),Be={enabled:!0,_workingColorSpace:Dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!DI.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=vu[t].toReference,r=vu[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return vu[n].primaries},getTransfer:function(n){return n===Ui?qu:vu[n].transfer}};function la(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bp(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ko,Ju=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ko===void 0&&(ko=Ku("canvas")),ko.width=t.width,ko.height=t.height;let i=ko.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=ko}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ku("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let l=0;l<o.length;l++)o[l]=la(o[l]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(la(e[i]/255)*255):e[i]=la(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},OI=0,Qu=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OI++}),this.uuid=Lr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?o.push(wp(r[l].image)):o.push(wp(r[l]))}else o=wp(r);i.url=o}return e||(t.images[this.uuid]=i),i}};function wp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ju.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var NI=0,Nr=(()=>{class n extends cr{constructor(e=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Zi,o=Zi,l=Ln,c=ks,h=gi,d=hs,p=n.DEFAULT_ANISOTROPY,m=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NI++}),this.uuid=Lr(),this.name="",this.source=new Qu(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof m=="string"?this.colorSpace=m:(Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=m===Ws?Dn:Ui),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ey)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jp:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Kp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jp:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Kp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dn?Ws:Lx}set encoding(e){Xs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ws?Dn:Ui}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=ey,n.DEFAULT_ANISOTROPY=1,n})(),Tn=class n{constructor(t=0,e=0,i=0,r=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=this.w,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*r+l[12]*o,this.y=l[1]*e+l[5]*i+l[9]*r+l[13]*o,this.z=l[2]*e+l[6]*i+l[10]*r+l[14]*o,this.w=l[3]*e+l[7]*i+l[11]*r+l[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,o,h=t.elements,d=h[0],p=h[4],m=h[8],_=h[1],y=h[5],S=h[9],A=h[2],v=h[6],g=h[10];if(Math.abs(p-_)<.01&&Math.abs(m-A)<.01&&Math.abs(S-v)<.01){if(Math.abs(p+_)<.1&&Math.abs(m+A)<.1&&Math.abs(S+v)<.1&&Math.abs(d+y+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(d+1)/2,D=(y+1)/2,z=(g+1)/2,B=(p+_)/4,U=(m+A)/4,ot=(S+v)/4;return R>D&&R>z?R<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(R),r=B/i,o=U/i):D>z?D<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(D),i=B/r,o=ot/r):z<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(z),i=U/o,r=ot/o),this.set(i,r,o,e),this}let I=Math.sqrt((v-S)*(v-S)+(m-A)*(m-A)+(_-p)*(_-p));return Math.abs(I)<.001&&(I=1),this.x=(v-S)/I,this.y=(m-A)/I,this.z=(_-p)/I,this.w=Math.acos((d+y+g-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},em=class extends cr{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Tn(0,0,t,e),this.scissorTest=!1,this.viewport=new Tn(0,0,t,e);let r={width:t,height:e,depth:1};i.encoding!==void 0&&(Xs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ws?Dn:Ui),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Nr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Qu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends em{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},th=class extends Nr{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nm=class extends Nr{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,o,l,c){let h=i[r+0],d=i[r+1],p=i[r+2],m=i[r+3],_=o[l+0],y=o[l+1],S=o[l+2],A=o[l+3];if(c===0){t[e+0]=h,t[e+1]=d,t[e+2]=p,t[e+3]=m;return}if(c===1){t[e+0]=_,t[e+1]=y,t[e+2]=S,t[e+3]=A;return}if(m!==A||h!==_||d!==y||p!==S){let v=1-c,g=h*_+d*y+p*S+m*A,I=g>=0?1:-1,R=1-g*g;if(R>Number.EPSILON){let z=Math.sqrt(R),B=Math.atan2(z,g*I);v=Math.sin(v*B)/z,c=Math.sin(c*B)/z}let D=c*I;if(h=h*v+_*D,d=d*v+y*D,p=p*v+S*D,m=m*v+A*D,v===1-c){let z=1/Math.sqrt(h*h+d*d+p*p+m*m);h*=z,d*=z,p*=z,m*=z}}t[e]=h,t[e+1]=d,t[e+2]=p,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,r,o,l){let c=i[r],h=i[r+1],d=i[r+2],p=i[r+3],m=o[l],_=o[l+1],y=o[l+2],S=o[l+3];return t[e]=c*S+p*m+h*y-d*_,t[e+1]=h*S+p*_+d*m-c*y,t[e+2]=d*S+p*y+c*_-h*m,t[e+3]=p*S-c*m-h*_-d*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,o=t._z,l=t._order,c=Math.cos,h=Math.sin,d=c(i/2),p=c(r/2),m=c(o/2),_=h(i/2),y=h(r/2),S=h(o/2);switch(l){case"XYZ":this._x=_*p*m+d*y*S,this._y=d*y*m-_*p*S,this._z=d*p*S+_*y*m,this._w=d*p*m-_*y*S;break;case"YXZ":this._x=_*p*m+d*y*S,this._y=d*y*m-_*p*S,this._z=d*p*S-_*y*m,this._w=d*p*m+_*y*S;break;case"ZXY":this._x=_*p*m-d*y*S,this._y=d*y*m+_*p*S,this._z=d*p*S+_*y*m,this._w=d*p*m-_*y*S;break;case"ZYX":this._x=_*p*m-d*y*S,this._y=d*y*m+_*p*S,this._z=d*p*S-_*y*m,this._w=d*p*m+_*y*S;break;case"YZX":this._x=_*p*m+d*y*S,this._y=d*y*m+_*p*S,this._z=d*p*S-_*y*m,this._w=d*p*m-_*y*S;break;case"XZY":this._x=_*p*m-d*y*S,this._y=d*y*m-_*p*S,this._z=d*p*S+_*y*m,this._w=d*p*m+_*y*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],o=e[8],l=e[1],c=e[5],h=e[9],d=e[2],p=e[6],m=e[10],_=i+c+m;if(_>0){let y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(p-h)*y,this._y=(o-d)*y,this._z=(l-r)*y}else if(i>c&&i>m){let y=2*Math.sqrt(1+i-c-m);this._w=(p-h)/y,this._x=.25*y,this._y=(r+l)/y,this._z=(o+d)/y}else if(c>m){let y=2*Math.sqrt(1+c-i-m);this._w=(o-d)/y,this._x=(r+l)/y,this._y=.25*y,this._z=(h+p)/y}else{let y=2*Math.sqrt(1+m-i-c);this._w=(l-r)/y,this._x=(o+d)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Bn(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,o=t._z,l=t._w,c=e._x,h=e._y,d=e._z,p=e._w;return this._x=i*p+l*c+r*d-o*h,this._y=r*p+l*h+o*c-i*d,this._z=o*p+l*d+i*h-r*c,this._w=l*p-i*c-r*h-o*d,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,r=this._y,o=this._z,l=this._w,c=l*t._w+i*t._x+r*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=l,this._x=i,this._y=r,this._z=o,this;let h=1-c*c;if(h<=Number.EPSILON){let y=1-e;return this._w=y*l+e*this._w,this._x=y*i+e*this._x,this._y=y*r+e*this._y,this._z=y*o+e*this._z,this.normalize(),this}let d=Math.sqrt(h),p=Math.atan2(d,c),m=Math.sin((1-e)*p)/d,_=Math.sin(e*p)/d;return this._w=l*m+this._w*_,this._x=i*m+this._x*_,this._y=r*m+this._y*_,this._z=o*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(o),i*Math.cos(o),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fy.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fy.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*r,this.y=o[1]*e+o[4]*i+o[7]*r,this.z=o[2]*e+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,o=t.elements,l=1/(o[3]*e+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*r+o[12])*l,this.y=(o[1]*e+o[5]*i+o[9]*r+o[13])*l,this.z=(o[2]*e+o[6]*i+o[10]*r+o[14])*l,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,o=t.x,l=t.y,c=t.z,h=t.w,d=2*(l*r-c*i),p=2*(c*e-o*r),m=2*(o*i-l*e);return this.x=e+h*d+l*m-c*p,this.y=i+h*p+c*d-o*m,this.z=r+h*m+o*p-l*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r,this.y=o[1]*e+o[5]*i+o[9]*r,this.z=o[2]*e+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,o=t.z,l=e.x,c=e.y,h=e.z;return this.x=r*h-o*c,this.y=o*l-i*h,this.z=i*c-r*l,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ep.copy(this).projectOnVector(t),this.sub(Ep)}reflect(t){return this.sub(Ep.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Bn(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ep=new X,Fy=new Ji,Ys=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Xi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Xi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Xi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)t.isMesh===!0?t.getVertexPosition(l,Xi):Xi.fromBufferAttribute(o,l),Xi.applyMatrix4(t.matrixWorld),this.expandByPoint(Xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yu.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yu.copy(i.boundingBox)),yu.applyMatrix4(t.matrixWorld),this.union(yu)}let r=t.children;for(let o=0,l=r.length;o<l;o++)this.expandByObject(r[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xi),Xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vl),xu.subVectors(this.max,vl),Ho.subVectors(t.a,vl),Vo.subVectors(t.b,vl),Go.subVectors(t.c,vl),is.subVectors(Vo,Ho),rs.subVectors(Go,Vo),Ds.subVectors(Ho,Go);let e=[0,-is.z,is.y,0,-rs.z,rs.y,0,-Ds.z,Ds.y,is.z,0,-is.x,rs.z,0,-rs.x,Ds.z,0,-Ds.x,-is.y,is.x,0,-rs.y,rs.x,0,-Ds.y,Ds.x,0];return!Ap(e,Ho,Vo,Go,xu)||(e=[1,0,0,0,1,0,0,0,1],!Ap(e,Ho,Vo,Go,xu))?!1:(Su.crossVectors(is,rs),e=[Su.x,Su.y,Su.z],Ap(e,Ho,Vo,Go,xu))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(br),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},br=[new X,new X,new X,new X,new X,new X,new X,new X],Xi=new X,yu=new Ys,Ho=new X,Vo=new X,Go=new X,is=new X,rs=new X,Ds=new X,vl=new X,xu=new X,Su=new X,Os=new X;function Ap(n,t,e,i,r){for(let o=0,l=n.length-3;o<=l;o+=3){Os.fromArray(n,o);let c=r.x*Math.abs(Os.x)+r.y*Math.abs(Os.y)+r.z*Math.abs(Os.z),h=t.dot(Os),d=e.dot(Os),p=i.dot(Os);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>c)return!1}return!0}var UI=new Ys,yl=new X,Tp=new X,Rl=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):UI.setFromPoints(t).getCenter(i);let r=0;for(let o=0,l=t.length;o<l;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yl.subVectors(t,this.center);let e=yl.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(yl,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Tp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yl.copy(t.center).add(Tp)),this.expandByPoint(yl.copy(t.center).sub(Tp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},wr=new X,Cp=new X,Mu=new X,ss=new X,Rp=new X,bu=new X,Pp=new X,Pl=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=wr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wr.copy(this.origin).addScaledVector(this.direction,e),wr.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Cp.copy(t).add(e).multiplyScalar(.5),Mu.copy(e).sub(t).normalize(),ss.copy(this.origin).sub(Cp);let o=t.distanceTo(e)*.5,l=-this.direction.dot(Mu),c=ss.dot(this.direction),h=-ss.dot(Mu),d=ss.lengthSq(),p=Math.abs(1-l*l),m,_,y,S;if(p>0)if(m=l*h-c,_=l*c-h,S=o*p,m>=0)if(_>=-S)if(_<=S){let A=1/p;m*=A,_*=A,y=m*(m+l*_+2*c)+_*(l*m+_+2*h)+d}else _=o,m=Math.max(0,-(l*_+c)),y=-m*m+_*(_+2*h)+d;else _=-o,m=Math.max(0,-(l*_+c)),y=-m*m+_*(_+2*h)+d;else _<=-S?(m=Math.max(0,-(-l*o+c)),_=m>0?-o:Math.min(Math.max(-o,-h),o),y=-m*m+_*(_+2*h)+d):_<=S?(m=0,_=Math.min(Math.max(-o,-h),o),y=_*(_+2*h)+d):(m=Math.max(0,-(l*o+c)),_=m>0?o:Math.min(Math.max(-o,-h),o),y=-m*m+_*(_+2*h)+d);else _=l>0?-o:o,m=Math.max(0,-(l*_+c)),y=-m*m+_*(_+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(Cp).addScaledVector(Mu,_),y}intersectSphere(t,e){wr.subVectors(t.center,this.origin);let i=wr.dot(this.direction),r=wr.dot(wr)-i*i,o=t.radius*t.radius;if(r>o)return null;let l=Math.sqrt(o-r),c=i-l,h=i+l;return h<0?null:c<0?this.at(h,e):this.at(c,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,o,l,c,h,d=1/this.direction.x,p=1/this.direction.y,m=1/this.direction.z,_=this.origin;return d>=0?(i=(t.min.x-_.x)*d,r=(t.max.x-_.x)*d):(i=(t.max.x-_.x)*d,r=(t.min.x-_.x)*d),p>=0?(o=(t.min.y-_.y)*p,l=(t.max.y-_.y)*p):(o=(t.max.y-_.y)*p,l=(t.min.y-_.y)*p),i>l||o>r||((o>i||isNaN(i))&&(i=o),(l<r||isNaN(r))&&(r=l),m>=0?(c=(t.min.z-_.z)*m,h=(t.max.z-_.z)*m):(c=(t.max.z-_.z)*m,h=(t.min.z-_.z)*m),i>h||c>r)||((c>i||i!==i)&&(i=c),(h<r||r!==r)&&(r=h),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,wr)!==null}intersectTriangle(t,e,i,r,o){Rp.subVectors(e,t),bu.subVectors(i,t),Pp.crossVectors(Rp,bu);let l=this.direction.dot(Pp),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;ss.subVectors(this.origin,t);let h=c*this.direction.dot(bu.crossVectors(ss,bu));if(h<0)return null;let d=c*this.direction.dot(Rp.cross(ss));if(d<0||h+d>l)return null;let p=-c*ss.dot(Pp);return p<0?null:this.at(p/l,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},yn=class n{constructor(t,e,i,r,o,l,c,h,d,p,m,_,y,S,A,v){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,o,l,c,h,d,p,m,_,y,S,A,v)}set(t,e,i,r,o,l,c,h,d,p,m,_,y,S,A,v){let g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=r,g[1]=o,g[5]=l,g[9]=c,g[13]=h,g[2]=d,g[6]=p,g[10]=m,g[14]=_,g[3]=y,g[7]=S,g[11]=A,g[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,r=1/Wo.setFromMatrixColumn(t,0).length(),o=1/Wo.setFromMatrixColumn(t,1).length(),l=1/Wo.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*l,e[9]=i[9]*l,e[10]=i[10]*l,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,o=t.z,l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o);if(t.order==="XYZ"){let _=l*p,y=l*m,S=c*p,A=c*m;e[0]=h*p,e[4]=-h*m,e[8]=d,e[1]=y+S*d,e[5]=_-A*d,e[9]=-c*h,e[2]=A-_*d,e[6]=S+y*d,e[10]=l*h}else if(t.order==="YXZ"){let _=h*p,y=h*m,S=d*p,A=d*m;e[0]=_+A*c,e[4]=S*c-y,e[8]=l*d,e[1]=l*m,e[5]=l*p,e[9]=-c,e[2]=y*c-S,e[6]=A+_*c,e[10]=l*h}else if(t.order==="ZXY"){let _=h*p,y=h*m,S=d*p,A=d*m;e[0]=_-A*c,e[4]=-l*m,e[8]=S+y*c,e[1]=y+S*c,e[5]=l*p,e[9]=A-_*c,e[2]=-l*d,e[6]=c,e[10]=l*h}else if(t.order==="ZYX"){let _=l*p,y=l*m,S=c*p,A=c*m;e[0]=h*p,e[4]=S*d-y,e[8]=_*d+A,e[1]=h*m,e[5]=A*d+_,e[9]=y*d-S,e[2]=-d,e[6]=c*h,e[10]=l*h}else if(t.order==="YZX"){let _=l*h,y=l*d,S=c*h,A=c*d;e[0]=h*p,e[4]=A-_*m,e[8]=S*m+y,e[1]=m,e[5]=l*p,e[9]=-c*p,e[2]=-d*p,e[6]=y*m+S,e[10]=_-A*m}else if(t.order==="XZY"){let _=l*h,y=l*d,S=c*h,A=c*d;e[0]=h*p,e[4]=-m,e[8]=d*p,e[1]=_*m+A,e[5]=l*p,e[9]=y*m-S,e[2]=S*m-y,e[6]=c*p,e[10]=A*m+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(FI,t,BI)}lookAt(t,e,i){let r=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),os.crossVectors(i,pi),os.lengthSq()===0&&(Math.abs(i.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),os.crossVectors(i,pi)),os.normalize(),wu.crossVectors(pi,os),r[0]=os.x,r[4]=wu.x,r[8]=pi.x,r[1]=os.y,r[5]=wu.y,r[9]=pi.y,r[2]=os.z,r[6]=wu.z,r[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,o=this.elements,l=i[0],c=i[4],h=i[8],d=i[12],p=i[1],m=i[5],_=i[9],y=i[13],S=i[2],A=i[6],v=i[10],g=i[14],I=i[3],R=i[7],D=i[11],z=i[15],B=r[0],U=r[4],ot=r[8],Mt=r[12],w=r[1],N=r[5],st=r[9],mt=r[13],H=r[2],J=r[6],$=r[10],ut=r[14],et=r[3],it=r[7],at=r[11],yt=r[15];return o[0]=l*B+c*w+h*H+d*et,o[4]=l*U+c*N+h*J+d*it,o[8]=l*ot+c*st+h*$+d*at,o[12]=l*Mt+c*mt+h*ut+d*yt,o[1]=p*B+m*w+_*H+y*et,o[5]=p*U+m*N+_*J+y*it,o[9]=p*ot+m*st+_*$+y*at,o[13]=p*Mt+m*mt+_*ut+y*yt,o[2]=S*B+A*w+v*H+g*et,o[6]=S*U+A*N+v*J+g*it,o[10]=S*ot+A*st+v*$+g*at,o[14]=S*Mt+A*mt+v*ut+g*yt,o[3]=I*B+R*w+D*H+z*et,o[7]=I*U+R*N+D*J+z*it,o[11]=I*ot+R*st+D*$+z*at,o[15]=I*Mt+R*mt+D*ut+z*yt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],o=t[12],l=t[1],c=t[5],h=t[9],d=t[13],p=t[2],m=t[6],_=t[10],y=t[14],S=t[3],A=t[7],v=t[11],g=t[15];return S*(+o*h*m-r*d*m-o*c*_+i*d*_+r*c*y-i*h*y)+A*(+e*h*y-e*d*_+o*l*_-r*l*y+r*d*p-o*h*p)+v*(+e*d*m-e*c*y-o*l*m+i*l*y+o*c*p-i*d*p)+g*(-r*c*p-e*h*m+e*c*_+r*l*m-i*l*_+i*h*p)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],o=t[3],l=t[4],c=t[5],h=t[6],d=t[7],p=t[8],m=t[9],_=t[10],y=t[11],S=t[12],A=t[13],v=t[14],g=t[15],I=m*v*d-A*_*d+A*h*y-c*v*y-m*h*g+c*_*g,R=S*_*d-p*v*d-S*h*y+l*v*y+p*h*g-l*_*g,D=p*A*d-S*m*d+S*c*y-l*A*y-p*c*g+l*m*g,z=S*m*h-p*A*h-S*c*_+l*A*_+p*c*v-l*m*v,B=e*I+i*R+r*D+o*z;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/B;return t[0]=I*U,t[1]=(A*_*o-m*v*o-A*r*y+i*v*y+m*r*g-i*_*g)*U,t[2]=(c*v*o-A*h*o+A*r*d-i*v*d-c*r*g+i*h*g)*U,t[3]=(m*h*o-c*_*o-m*r*d+i*_*d+c*r*y-i*h*y)*U,t[4]=R*U,t[5]=(p*v*o-S*_*o+S*r*y-e*v*y-p*r*g+e*_*g)*U,t[6]=(S*h*o-l*v*o-S*r*d+e*v*d+l*r*g-e*h*g)*U,t[7]=(l*_*o-p*h*o+p*r*d-e*_*d-l*r*y+e*h*y)*U,t[8]=D*U,t[9]=(S*m*o-p*A*o-S*i*y+e*A*y+p*i*g-e*m*g)*U,t[10]=(l*A*o-S*c*o+S*i*d-e*A*d-l*i*g+e*c*g)*U,t[11]=(p*c*o-l*m*o-p*i*d+e*m*d+l*i*y-e*c*y)*U,t[12]=z*U,t[13]=(p*A*r-S*m*r+S*i*_-e*A*_-p*i*v+e*m*v)*U,t[14]=(S*c*r-l*A*r-S*i*h+e*A*h+l*i*v-e*c*v)*U,t[15]=(l*m*r-p*c*r+p*i*h-e*m*h-l*i*_+e*c*_)*U,this}scale(t){let e=this.elements,i=t.x,r=t.y,o=t.z;return e[0]*=i,e[4]*=r,e[8]*=o,e[1]*=i,e[5]*=r,e[9]*=o,e[2]*=i,e[6]*=r,e[10]*=o,e[3]*=i,e[7]*=r,e[11]*=o,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),o=1-i,l=t.x,c=t.y,h=t.z,d=o*l,p=o*c;return this.set(d*l+i,d*c-r*h,d*h+r*c,0,d*c+r*h,p*c+i,p*h-r*l,0,d*h-r*c,p*h+r*l,o*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,o,l){return this.set(1,i,o,0,t,1,l,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,o=e._x,l=e._y,c=e._z,h=e._w,d=o+o,p=l+l,m=c+c,_=o*d,y=o*p,S=o*m,A=l*p,v=l*m,g=c*m,I=h*d,R=h*p,D=h*m,z=i.x,B=i.y,U=i.z;return r[0]=(1-(A+g))*z,r[1]=(y+D)*z,r[2]=(S-R)*z,r[3]=0,r[4]=(y-D)*B,r[5]=(1-(_+g))*B,r[6]=(v+I)*B,r[7]=0,r[8]=(S+R)*U,r[9]=(v-I)*U,r[10]=(1-(_+A))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements,o=Wo.set(r[0],r[1],r[2]).length(),l=Wo.set(r[4],r[5],r[6]).length(),c=Wo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],qi.copy(this);let d=1/o,p=1/l,m=1/c;return qi.elements[0]*=d,qi.elements[1]*=d,qi.elements[2]*=d,qi.elements[4]*=p,qi.elements[5]*=p,qi.elements[6]*=p,qi.elements[8]*=m,qi.elements[9]*=m,qi.elements[10]*=m,e.setFromRotationMatrix(qi),i.x=o,i.y=l,i.z=c,this}makePerspective(t,e,i,r,o,l,c=Ir){let h=this.elements,d=2*o/(e-t),p=2*o/(i-r),m=(e+t)/(e-t),_=(i+r)/(i-r),y,S;if(c===Ir)y=-(l+o)/(l-o),S=-2*l*o/(l-o);else if(c===Zu)y=-l/(l-o),S=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=p,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=y,h[14]=S,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,r,o,l,c=Ir){let h=this.elements,d=1/(e-t),p=1/(i-r),m=1/(l-o),_=(e+t)*d,y=(i+r)*p,S,A;if(c===Ir)S=(l+o)*m,A=-2*m;else if(c===Zu)S=o*m,A=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*p,h[9]=0,h[13]=-y,h[2]=0,h[6]=0,h[10]=A,h[14]=-S,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Wo=new X,qi=new yn,FI=new X(0,0,0),BI=new X(1,1,1),os=new X,wu=new X,pi=new X,By=new yn,zy=new Ji,zI=(()=>{class n{constructor(e=0,i=0,r=0,o=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,o=this._order){return this._x=e,this._y=i,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){let o=e.elements,l=o[0],c=o[4],h=o[8],d=o[1],p=o[5],m=o[9],_=o[2],y=o[6],S=o[10];switch(i){case"XYZ":this._y=Math.asin(Bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Bn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return By.makeRotationFromQuaternion(e),this.setFromRotationMatrix(By,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return zy.setFromEuler(this),this.setFromQuaternion(zy,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),eh=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},kI=0,ky=new X,Xo=new Ji,Er=new yn,Eu=new X,xl=new X,HI=new X,VI=new Ji,Hy=new X(1,0,0),Vy=new X(0,1,0),Gy=new X(0,0,1),GI={type:"added"},WI={type:"removed"},ur=(()=>{class n extends cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kI++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new X,i=new zI,r=new Ji,o=new X(1,1,1);function l(){r.setFromEuler(i,!1)}function c(){i.setFromQuaternion(r,void 0,!1)}i._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new yn},normalMatrix:{value:new Se}}),this.matrix=new yn,this.matrixWorld=new yn,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Xo.setFromAxisAngle(e,i),this.quaternion.multiply(Xo),this}rotateOnWorldAxis(e,i){return Xo.setFromAxisAngle(e,i),this.quaternion.premultiply(Xo),this}rotateX(e){return this.rotateOnAxis(Hy,e)}rotateY(e){return this.rotateOnAxis(Vy,e)}rotateZ(e){return this.rotateOnAxis(Gy,e)}translateOnAxis(e,i){return ky.copy(e).applyQuaternion(this.quaternion),this.position.add(ky.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Hy,e)}translateY(e){return this.translateOnAxis(Vy,e)}translateZ(e){return this.translateOnAxis(Gy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Er.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Eu.copy(e):Eu.set(e,i,r);let o=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Er.lookAt(xl,Eu,this.up):Er.lookAt(Eu,xl,this.up),this.quaternion.setFromRotationMatrix(Er),o&&(Er.extractRotation(o.matrixWorld),Xo.setFromRotationMatrix(Er),this.quaternion.premultiply(Xo.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(GI)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(WI)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Er.multiply(e.parent.matrixWorld)),e.applyMatrix4(Er),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,o=this.children.length;r<o;r++){let c=this.children[r].getObjectByProperty(e,i);if(c!==void 0)return c}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);let o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,e,HI),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,VI,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let r=0,o=i.length;r<o;r++){let l=i[r];(l.matrixWorldAutoUpdate===!0||e===!0)&&l.updateMatrixWorld(e)}}updateWorldMatrix(e,i){let r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let o=this.children;for(let l=0,c=o.length;l<c;l++){let h=o[l];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){let i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);let h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){let d=h.shapes;if(Array.isArray(d))for(let p=0,m=d.length;p<m;p++){let _=d[p];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(l(e.materials,this.material[d]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){let d=this.animations[h];o.animations.push(l(e.animations,d))}}if(i){let h=c(e.geometries),d=c(e.materials),p=c(e.textures),m=c(e.images),_=c(e.shapes),y=c(e.skeletons),S=c(e.animations),A=c(e.nodes);h.length>0&&(r.geometries=h),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),m.length>0&&(r.images=m),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),A.length>0&&(r.nodes=A)}return r.object=o,r;function c(h){let d=[];for(let p in h){let m=h[p];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){let o=e.children[r];this.add(o.clone())}return this}}return n.DEFAULT_UP=new X(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Yi=new X,Ar=new X,Ip=new X,Tr=new X,qo=new X,Yo=new X,Wy=new X,Lp=new X,Dp=new X,Op=new X,Hs=class n{constructor(t=new X,e=new X,i=new X){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Yi.subVectors(t,e),r.cross(Yi);let o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,e,i,r,o){Yi.subVectors(r,e),Ar.subVectors(i,e),Ip.subVectors(t,e);let l=Yi.dot(Yi),c=Yi.dot(Ar),h=Yi.dot(Ip),d=Ar.dot(Ar),p=Ar.dot(Ip),m=l*d-c*c;if(m===0)return o.set(0,0,0),null;let _=1/m,y=(d*h-c*p)*_,S=(l*p-c*h)*_;return o.set(1-y-S,S,y)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(t,e,i,r,o,l,c,h){return this.getBarycoord(t,e,i,r,Tr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Tr.x),h.addScaledVector(l,Tr.y),h.addScaledVector(c,Tr.z),h)}static isFrontFacing(t,e,i,r){return Yi.subVectors(i,e),Ar.subVectors(t,e),Yi.cross(Ar).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),Yi.cross(Ar).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,o){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,o)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,o=this.c,l,c;qo.subVectors(r,i),Yo.subVectors(o,i),Lp.subVectors(t,i);let h=qo.dot(Lp),d=Yo.dot(Lp);if(h<=0&&d<=0)return e.copy(i);Dp.subVectors(t,r);let p=qo.dot(Dp),m=Yo.dot(Dp);if(p>=0&&m<=p)return e.copy(r);let _=h*m-p*d;if(_<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(i).addScaledVector(qo,l);Op.subVectors(t,o);let y=qo.dot(Op),S=Yo.dot(Op);if(S>=0&&y<=S)return e.copy(o);let A=y*d-h*S;if(A<=0&&d>=0&&S<=0)return c=d/(d-S),e.copy(i).addScaledVector(Yo,c);let v=p*S-y*m;if(v<=0&&m-p>=0&&y-S>=0)return Wy.subVectors(o,r),c=(m-p)/(m-p+(y-S)),e.copy(r).addScaledVector(Wy,c);let g=1/(v+A+_);return l=A*g,c=_*g,e.copy(i).addScaledVector(qo,l).addScaledVector(Yo,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},as={h:0,s:0,l:0},Au={h:0,s:0,l:0};function Np(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var ye=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Be.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=Be.workingColorSpace){return this.r=t,this.g=e,this.b=i,Be.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=Be.workingColorSpace){if(t=Lm(t,1),e=Bn(e,0,1),i=Bn(i,0,1),e===0)this.r=this.g=this.b=i;else{let o=i<=.5?i*(1+e):i+e-i*e,l=2*i-o;this.r=Np(l,o,t+1/3),this.g=Np(l,o,t),this.b=Np(l,o,t-1/3)}return Be.toWorkingColorSpace(this,r),this}setStyle(t,e=Dn){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o,l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let o=r[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(l===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Dn){let i=Fx[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=la(t.r),this.g=la(t.g),this.b=la(t.b),this}copyLinearToSRGB(t){return this.r=bp(t.r),this.g=bp(t.g),this.b=bp(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Dn){return Be.fromWorkingColorSpace(Fn.copy(this),t),Math.round(Bn(Fn.r*255,0,255))*65536+Math.round(Bn(Fn.g*255,0,255))*256+Math.round(Bn(Fn.b*255,0,255))}getHexString(t=Dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Be.workingColorSpace){Be.fromWorkingColorSpace(Fn.copy(this),e);let i=Fn.r,r=Fn.g,o=Fn.b,l=Math.max(i,r,o),c=Math.min(i,r,o),h,d,p=(c+l)/2;if(c===l)h=0,d=0;else{let m=l-c;switch(d=p<=.5?m/(l+c):m/(2-l-c),l){case i:h=(r-o)/m+(r<o?6:0);break;case r:h=(o-i)/m+2;break;case o:h=(i-r)/m+4;break}h/=6}return t.h=h,t.s=d,t.l=p,t}getRGB(t,e=Be.workingColorSpace){return Be.fromWorkingColorSpace(Fn.copy(this),e),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Dn){Be.fromWorkingColorSpace(Fn.copy(this),t);let e=Fn.r,i=Fn.g,r=Fn.b;return t!==Dn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(as),this.setHSL(as.h+t,as.s+e,as.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(as),t.getHSL(Au);let i=Al(as.h,Au.h,e),r=Al(as.s,Au.s,e),o=Al(as.l,Au.l,e);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*r,this.g=o[1]*e+o[4]*i+o[7]*r,this.b=o[2]*e+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new ye;ye.NAMES=Fx;var XI=0,fs=class extends cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:XI++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=aa,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qp,this.blendDst=Yp,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Gu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Iy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zo,this.stencilZFail=zo,this.stencilZPass=zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==aa&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qp&&(i.blendSrc=this.blendSrc),this.blendDst!==Yp&&(i.blendDst=this.blendDst),this.blendEquation!==Bs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Iy&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}if(e){let o=r(t.textures),l=r(t.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},pa=class extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var dn=new X,Tu=new Wt,_i=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Jp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Xs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Tu.fromBufferAttribute(this,e),Tu.applyMatrix3(t),this.setXY(e,Tu.x,Tu.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix3(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ji(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),r=Ue(r,this.array),o=Ue(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jp&&(t.usage=this.usage),t}};var nh=class extends _i{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ih=class extends _i{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Jn=class extends _i{constructor(t,e,i){super(new Float32Array(t),e,i)}};var qI=0,Ni=new yn,Up=new ur,$o=new X,mi=new Ys,Sl=new Ys,An=new X,Qi=class n extends cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qI++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ux(t)?ih:nh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let o=new Se().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,e,i){return Ni.makeTranslation(t,e,i),this.applyMatrix4(Ni),this}scale(t,e,i){return Ni.makeScale(t,e,i),this.applyMatrix4(Ni),this}lookAt(t){return Up.lookAt(t),Up.updateMatrix(),this.applyMatrix4(Up.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($o).negate(),this.translate($o.x,$o.y,$o.z),this}setFromPoints(t){let e=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Jn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let o=e[i];mi.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rl);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(t){let i=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let o=0,l=e.length;o<l;o++){let c=e[o];Sl.setFromBufferAttribute(c),this.morphTargetsRelative?(An.addVectors(mi.min,Sl.min),mi.expandByPoint(An),An.addVectors(mi.max,Sl.max),mi.expandByPoint(An)):(mi.expandByPoint(Sl.min),mi.expandByPoint(Sl.max))}mi.getCenter(i);let r=0;for(let o=0,l=t.count;o<l;o++)An.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(An));if(e)for(let o=0,l=e.length;o<l;o++){let c=e[o],h=this.morphTargetsRelative;for(let d=0,p=c.count;d<p;d++)An.fromBufferAttribute(c,d),h&&($o.fromBufferAttribute(t,d),An.add($o)),r=Math.max(r,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,r=e.position.array,o=e.normal.array,l=e.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*c),4));let h=this.getAttribute("tangent").array,d=[],p=[];for(let w=0;w<c;w++)d[w]=new X,p[w]=new X;let m=new X,_=new X,y=new X,S=new Wt,A=new Wt,v=new Wt,g=new X,I=new X;function R(w,N,st){m.fromArray(r,w*3),_.fromArray(r,N*3),y.fromArray(r,st*3),S.fromArray(l,w*2),A.fromArray(l,N*2),v.fromArray(l,st*2),_.sub(m),y.sub(m),A.sub(S),v.sub(S);let mt=1/(A.x*v.y-v.x*A.y);isFinite(mt)&&(g.copy(_).multiplyScalar(v.y).addScaledVector(y,-A.y).multiplyScalar(mt),I.copy(y).multiplyScalar(A.x).addScaledVector(_,-v.x).multiplyScalar(mt),d[w].add(g),d[N].add(g),d[st].add(g),p[w].add(I),p[N].add(I),p[st].add(I))}let D=this.groups;D.length===0&&(D=[{start:0,count:i.length}]);for(let w=0,N=D.length;w<N;++w){let st=D[w],mt=st.start,H=st.count;for(let J=mt,$=mt+H;J<$;J+=3)R(i[J+0],i[J+1],i[J+2])}let z=new X,B=new X,U=new X,ot=new X;function Mt(w){U.fromArray(o,w*3),ot.copy(U);let N=d[w];z.copy(N),z.sub(U.multiplyScalar(U.dot(N))).normalize(),B.crossVectors(ot,N);let mt=B.dot(p[w])<0?-1:1;h[w*4]=z.x,h[w*4+1]=z.y,h[w*4+2]=z.z,h[w*4+3]=mt}for(let w=0,N=D.length;w<N;++w){let st=D[w],mt=st.start,H=st.count;for(let J=mt,$=mt+H;J<$;J+=3)Mt(i[J+0]),Mt(i[J+1]),Mt(i[J+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let _=0,y=i.count;_<y;_++)i.setXYZ(_,0,0,0);let r=new X,o=new X,l=new X,c=new X,h=new X,d=new X,p=new X,m=new X;if(t)for(let _=0,y=t.count;_<y;_+=3){let S=t.getX(_+0),A=t.getX(_+1),v=t.getX(_+2);r.fromBufferAttribute(e,S),o.fromBufferAttribute(e,A),l.fromBufferAttribute(e,v),p.subVectors(l,o),m.subVectors(r,o),p.cross(m),c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,v),c.add(p),h.add(p),d.add(p),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(A,h.x,h.y,h.z),i.setXYZ(v,d.x,d.y,d.z)}else for(let _=0,y=e.count;_<y;_+=3)r.fromBufferAttribute(e,_+0),o.fromBufferAttribute(e,_+1),l.fromBufferAttribute(e,_+2),p.subVectors(l,o),m.subVectors(r,o),p.cross(m),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)An.fromBufferAttribute(t,e),An.normalize(),t.setXYZ(e,An.x,An.y,An.z)}toNonIndexed(){function t(c,h){let d=c.array,p=c.itemSize,m=c.normalized,_=new d.constructor(h.length*p),y=0,S=0;for(let A=0,v=h.length;A<v;A++){c.isInterleavedBufferAttribute?y=h[A]*c.data.stride+c.offset:y=h[A]*p;for(let g=0;g<p;g++)_[S++]=d[y++]}return new _i(_,p,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let c in r){let h=r[c],d=t(h,i);e.setAttribute(c,d)}let o=this.morphAttributes;for(let c in o){let h=[],d=o[c];for(let p=0,m=d.length;p<m;p++){let _=d[p],y=t(_,i);h.push(y)}e.morphAttributes[c]=h}e.morphTargetsRelative=this.morphTargetsRelative;let l=this.groups;for(let c=0,h=l.length;c<h;c++){let d=l[c];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let h=this.parameters;for(let d in h)h[d]!==void 0&&(t[d]=h[d]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let h in i){let d=i[h];t.data.attributes[h]=d.toJSON(t.data)}let r={},o=!1;for(let h in this.morphAttributes){let d=this.morphAttributes[h],p=[];for(let m=0,_=d.length;m<_;m++){let y=d[m];p.push(y.toJSON(t.data))}p.length>0&&(r[h]=p,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let l=this.groups;l.length>0&&(t.data.groups=JSON.parse(JSON.stringify(l)));let c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let r=t.attributes;for(let d in r){let p=r[d];this.setAttribute(d,p.clone(e))}let o=t.morphAttributes;for(let d in o){let p=[],m=o[d];for(let _=0,y=m.length;_<y;_++)p.push(m[_].clone(e));this.morphAttributes[d]=p}this.morphTargetsRelative=t.morphTargetsRelative;let l=t.groups;for(let d=0,p=l.length;d<p;d++){let m=l[d];this.addGroup(m.start,m.count,m.materialIndex)}let c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());let h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xy=new yn,Ns=new Pl,Cu=new Rl,qy=new X,Zo=new X,jo=new X,Ko=new X,Fp=new X,Ru=new X,Pu=new Wt,Iu=new Wt,Lu=new Wt,Yy=new X,$y=new X,Zy=new X,Du=new X,Ou=new X,fn=class extends ur{constructor(t=new Qi,e=new pa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=r.length;o<l;o++){let c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let c=this.morphTargetInfluences;if(o&&c){Ru.set(0,0,0);for(let h=0,d=o.length;h<d;h++){let p=c[h],m=o[h];p!==0&&(Fp.fromBufferAttribute(m,t),l?Ru.addScaledVector(Fp,p):Ru.addScaledVector(Fp.sub(e),p))}e.add(Ru)}return e}raycast(t,e){let i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cu.copy(i.boundingSphere),Cu.applyMatrix4(o),Ns.copy(t.ray).recast(t.near),!(Cu.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Cu,qy)===null||Ns.origin.distanceToSquared(qy)>(t.far-t.near)**2))&&(Xy.copy(o).invert(),Ns.copy(t.ray).applyMatrix4(Xy),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ns)))}_computeIntersections(t,e,i){let r,o=this.geometry,l=this.material,c=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,m=o.attributes.normal,_=o.groups,y=o.drawRange;if(c!==null)if(Array.isArray(l))for(let S=0,A=_.length;S<A;S++){let v=_[S],g=l[v.materialIndex],I=Math.max(v.start,y.start),R=Math.min(c.count,Math.min(v.start+v.count,y.start+y.count));for(let D=I,z=R;D<z;D+=3){let B=c.getX(D),U=c.getX(D+1),ot=c.getX(D+2);r=Nu(this,g,t,i,d,p,m,B,U,ot),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{let S=Math.max(0,y.start),A=Math.min(c.count,y.start+y.count);for(let v=S,g=A;v<g;v+=3){let I=c.getX(v),R=c.getX(v+1),D=c.getX(v+2);r=Nu(this,l,t,i,d,p,m,I,R,D),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(l))for(let S=0,A=_.length;S<A;S++){let v=_[S],g=l[v.materialIndex],I=Math.max(v.start,y.start),R=Math.min(h.count,Math.min(v.start+v.count,y.start+y.count));for(let D=I,z=R;D<z;D+=3){let B=D,U=D+1,ot=D+2;r=Nu(this,g,t,i,d,p,m,B,U,ot),r&&(r.faceIndex=Math.floor(D/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{let S=Math.max(0,y.start),A=Math.min(h.count,y.start+y.count);for(let v=S,g=A;v<g;v+=3){let I=v,R=v+1,D=v+2;r=Nu(this,l,t,i,d,p,m,I,R,D),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}};function YI(n,t,e,i,r,o,l,c){let h;if(t.side===zn?h=i.intersectTriangle(l,o,r,!0,c):h=i.intersectTriangle(r,o,l,t.side===ds,c),h===null)return null;Ou.copy(c),Ou.applyMatrix4(n.matrixWorld);let d=e.ray.origin.distanceTo(Ou);return d<e.near||d>e.far?null:{distance:d,point:Ou.clone(),object:n}}function Nu(n,t,e,i,r,o,l,c,h,d){n.getVertexPosition(c,Zo),n.getVertexPosition(h,jo),n.getVertexPosition(d,Ko);let p=YI(n,t,e,i,Zo,jo,Ko,Du);if(p){r&&(Pu.fromBufferAttribute(r,c),Iu.fromBufferAttribute(r,h),Lu.fromBufferAttribute(r,d),p.uv=Hs.getInterpolation(Du,Zo,jo,Ko,Pu,Iu,Lu,new Wt)),o&&(Pu.fromBufferAttribute(o,c),Iu.fromBufferAttribute(o,h),Lu.fromBufferAttribute(o,d),p.uv1=Hs.getInterpolation(Du,Zo,jo,Ko,Pu,Iu,Lu,new Wt),p.uv2=p.uv1),l&&(Yy.fromBufferAttribute(l,c),$y.fromBufferAttribute(l,h),Zy.fromBufferAttribute(l,d),p.normal=Hs.getInterpolation(Du,Zo,jo,Ko,Yy,$y,Zy,new X),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));let m={a:c,b:h,c:d,normal:new X,materialIndex:0};Hs.getNormal(Zo,jo,Ko,m.normal),p.face=m}return p}var Il=class n extends Qi{constructor(t=1,e=1,i=1,r=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:o,depthSegments:l};let c=this;r=Math.floor(r),o=Math.floor(o),l=Math.floor(l);let h=[],d=[],p=[],m=[],_=0,y=0;S("z","y","x",-1,-1,i,e,t,l,o,0),S("z","y","x",1,-1,i,e,-t,l,o,1),S("x","z","y",1,1,t,i,e,r,l,2),S("x","z","y",1,-1,t,i,-e,r,l,3),S("x","y","z",1,-1,t,e,i,r,o,4),S("x","y","z",-1,-1,t,e,-i,r,o,5),this.setIndex(h),this.setAttribute("position",new Jn(d,3)),this.setAttribute("normal",new Jn(p,3)),this.setAttribute("uv",new Jn(m,2));function S(A,v,g,I,R,D,z,B,U,ot,Mt){let w=D/U,N=z/ot,st=D/2,mt=z/2,H=B/2,J=U+1,$=ot+1,ut=0,et=0,it=new X;for(let at=0;at<$;at++){let yt=at*N-mt;for(let bt=0;bt<J;bt++){let Xt=bt*w-st;it[A]=Xt*I,it[v]=yt*R,it[g]=H,d.push(it.x,it.y,it.z),it[A]=0,it[v]=0,it[g]=B>0?1:-1,p.push(it.x,it.y,it.z),m.push(bt/U),m.push(1-at/ot),ut+=1}}for(let at=0;at<ot;at++)for(let yt=0;yt<U;yt++){let bt=_+yt+J*at,Xt=_+yt+J*(at+1),Q=_+(yt+1)+J*(at+1),ft=_+(yt+1)+J*at;h.push(bt,Xt,ft),h.push(Xt,Q,ft),et+=6}c.addGroup(y,et,Mt),y+=et,_+=ut}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ma(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Zn(n){let t={};for(let e=0;e<n.length;e++){let i=ma(n[e]);for(let r in i)t[r]=i[r]}return t}function $I(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bx(n){return n.getRenderTarget()===null?n.outputColorSpace:Be.workingColorSpace}var Dm={clone:ma,merge:Zn},ZI=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jI=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ZI,this.fragmentShader=jI,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ma(t.uniforms),this.uniformsGroups=$I(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let l=this.uniforms[r].value;l&&l.isTexture?e.uniforms[r]={type:"t",value:l.toJSON(t).uuid}:l&&l.isColor?e.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?e.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?e.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?e.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?e.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?e.uniforms[r]={type:"m4",value:l.toArray()}:e.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},rh=class extends ur{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yn,this.projectionMatrix=new yn,this.projectionMatrixInverse=new yn,this.coordinateSystem=Ir}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ls=new X,jy=new Wt,Ky=new Wt,Kn=class extends rh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(El*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cl*2*Math.atan(Math.tan(El*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ls.x,ls.y).multiplyScalar(-t/ls.z),ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ls.x,ls.y).multiplyScalar(-t/ls.z)}getViewSize(t,e){return this.getViewBounds(t,jy,Ky),e.subVectors(Ky,jy)}setViewOffset(t,e,i,r,o,l){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(El*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,o=-.5*r,l=this.view;if(this.view!==null&&this.view.enabled){let h=l.fullWidth,d=l.fullHeight;o+=l.offsetX*r/h,e-=l.offsetY*i/d,r*=l.width/h,i*=l.height/d}let c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Jo=-90,Qo=1,im=class extends ur{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Kn(Jo,Qo,t,e);r.layers=this.layers,this.add(r);let o=new Kn(Jo,Qo,t,e);o.layers=this.layers,this.add(o);let l=new Kn(Jo,Qo,t,e);l.layers=this.layers,this.add(l);let c=new Kn(Jo,Qo,t,e);c.layers=this.layers,this.add(c);let h=new Kn(Jo,Qo,t,e);h.layers=this.layers,this.add(h);let d=new Kn(Jo,Qo,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,o,l,c,h]=e;for(let d of e)this.remove(d);if(t===Ir)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Zu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[o,l,c,h,d,p]=this.children,m=t.getRenderTarget(),_=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;let A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,o),t.setRenderTarget(i,1,r),t.render(e,l),t.setRenderTarget(i,2,r),t.render(e,c),t.setRenderTarget(i,3,r),t.render(e,h),t.setRenderTarget(i,4,r),t.render(e,d),i.texture.generateMipmaps=A,t.setRenderTarget(i,5,r),t.render(e,p),t.setRenderTarget(m,_,y),t.xr.enabled=S,i.texture.needsPMREMUpdate=!0}},sh=class extends Nr{constructor(t,e,i,r,o,l,c,h,d,p){t=t!==void 0?t:[],e=e!==void 0?e:ha,super(t,e,i,r,o,l,c,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},rm=class extends vi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Xs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ws?Dn:Ui),this.texture=new sh(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Il(5,5,5),o=new Qn({name:"CubemapFromEquirect",uniforms:ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:lr});o.uniforms.tEquirect.value=e;let l=new fn(r,o),c=e.minFilter;return e.minFilter===ks&&(e.minFilter=Ln),new im(1,10,this).update(t,l),e.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(t,e,i,r){let o=t.getRenderTarget();for(let l=0;l<6;l++)t.setRenderTarget(this,l),t.clear(e,i,r);t.setRenderTarget(o)}},Bp=new X,KI=new X,JI=new Se,$i=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=Bp.subVectors(i,e).cross(KI.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Bp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||JI.getNormalMatrix(t),r=this.coplanarPoint(Bp).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Us=new Rl,Uu=new X,Ll=class{constructor(t=new $i,e=new $i,i=new $i,r=new $i,o=new $i,l=new $i){this.planes=[t,e,i,r,o,l]}set(t,e,i,r,o,l){let c=this.planes;return c[0].copy(t),c[1].copy(e),c[2].copy(i),c[3].copy(r),c[4].copy(o),c[5].copy(l),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ir){let i=this.planes,r=t.elements,o=r[0],l=r[1],c=r[2],h=r[3],d=r[4],p=r[5],m=r[6],_=r[7],y=r[8],S=r[9],A=r[10],v=r[11],g=r[12],I=r[13],R=r[14],D=r[15];if(i[0].setComponents(h-o,_-d,v-y,D-g).normalize(),i[1].setComponents(h+o,_+d,v+y,D+g).normalize(),i[2].setComponents(h+l,_+p,v+S,D+I).normalize(),i[3].setComponents(h-l,_-p,v-S,D-I).normalize(),i[4].setComponents(h-c,_-m,v-A,D-R).normalize(),e===Ir)i[5].setComponents(h+c,_+m,v+A,D+R).normalize();else if(e===Zu)i[5].setComponents(c,m,A,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Us.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Uu.x=r.normal.x>0?t.max.x:t.min.x,Uu.y=r.normal.y>0?t.max.y:t.min.y,Uu.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Uu)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function zx(){let n=null,t=!1,e=null,i=null;function r(o,l){e(o,l),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function QI(n,t){let e=t.isWebGL2,i=new WeakMap;function r(d,p){let m=d.array,_=d.usage,y=m.byteLength,S=n.createBuffer();n.bindBuffer(p,S),n.bufferData(p,m,_),d.onUploadCallback();let A;if(m instanceof Float32Array)A=n.FLOAT;else if(m instanceof Uint16Array)if(d.isFloat16BufferAttribute)if(e)A=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else A=n.UNSIGNED_SHORT;else if(m instanceof Int16Array)A=n.SHORT;else if(m instanceof Uint32Array)A=n.UNSIGNED_INT;else if(m instanceof Int32Array)A=n.INT;else if(m instanceof Int8Array)A=n.BYTE;else if(m instanceof Uint8Array)A=n.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)A=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:A,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:y}}function o(d,p,m){let _=p.array,y=p._updateRange,S=p.updateRanges;if(n.bindBuffer(m,d),y.count===-1&&S.length===0&&n.bufferSubData(m,0,_),S.length!==0){for(let A=0,v=S.length;A<v;A++){let g=S[A];e?n.bufferSubData(m,g.start*_.BYTES_PER_ELEMENT,_,g.start,g.count):n.bufferSubData(m,g.start*_.BYTES_PER_ELEMENT,_.subarray(g.start,g.start+g.count))}p.clearUpdateRanges()}y.count!==-1&&(e?n.bufferSubData(m,y.offset*_.BYTES_PER_ELEMENT,_,y.offset,y.count):n.bufferSubData(m,y.offset*_.BYTES_PER_ELEMENT,_.subarray(y.offset,y.offset+y.count)),y.count=-1),p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),i.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);let p=i.get(d);p&&(n.deleteBuffer(p.buffer),i.delete(d))}function h(d,p){if(d.isGLBufferAttribute){let _=i.get(d);(!_||_.version<d.version)&&i.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);let m=i.get(d);if(m===void 0)i.set(d,r(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var oh=class n extends Qi{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let o=t/2,l=e/2,c=Math.floor(i),h=Math.floor(r),d=c+1,p=h+1,m=t/c,_=e/h,y=[],S=[],A=[],v=[];for(let g=0;g<p;g++){let I=g*_-l;for(let R=0;R<d;R++){let D=R*m-o;S.push(D,-I,0),A.push(0,0,1),v.push(R/c),v.push(1-g/h)}}for(let g=0;g<h;g++)for(let I=0;I<c;I++){let R=I+d*g,D=I+d*(g+1),z=I+1+d*(g+1),B=I+1+d*g;y.push(R,D,B),y.push(D,z,B)}this.setIndex(y),this.setAttribute("position",new Jn(S,3)),this.setAttribute("normal",new Jn(A,3)),this.setAttribute("uv",new Jn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},tL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eL=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,oL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lL=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dL=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_L=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ML=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EL=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,AL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,TL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,PL="gl_FragColor = linearToOutputTexel( gl_FragColor );",IL=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,LL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,OL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,VL=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,YL=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$L=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,o2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,a2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,m2=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,g2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,b2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,w2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,D2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,O2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,U2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,z2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,H2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,G2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,aD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_D=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ED=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,CD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ID=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ge={alphahash_fragment:tL,alphahash_pars_fragment:eL,alphamap_fragment:nL,alphamap_pars_fragment:iL,alphatest_fragment:rL,alphatest_pars_fragment:sL,aomap_fragment:oL,aomap_pars_fragment:aL,batching_pars_vertex:lL,batching_vertex:cL,begin_vertex:uL,beginnormal_vertex:hL,bsdfs:dL,iridescence_fragment:fL,bumpmap_pars_fragment:pL,clipping_planes_fragment:mL,clipping_planes_pars_fragment:gL,clipping_planes_pars_vertex:_L,clipping_planes_vertex:vL,color_fragment:yL,color_pars_fragment:xL,color_pars_vertex:SL,color_vertex:ML,common:bL,cube_uv_reflection_fragment:wL,defaultnormal_vertex:EL,displacementmap_pars_vertex:AL,displacementmap_vertex:TL,emissivemap_fragment:CL,emissivemap_pars_fragment:RL,colorspace_fragment:PL,colorspace_pars_fragment:IL,envmap_fragment:LL,envmap_common_pars_fragment:DL,envmap_pars_fragment:OL,envmap_pars_vertex:NL,envmap_physical_pars_fragment:YL,envmap_vertex:UL,fog_vertex:FL,fog_pars_vertex:BL,fog_fragment:zL,fog_pars_fragment:kL,gradientmap_pars_fragment:HL,lightmap_fragment:VL,lightmap_pars_fragment:GL,lights_lambert_fragment:WL,lights_lambert_pars_fragment:XL,lights_pars_begin:qL,lights_toon_fragment:$L,lights_toon_pars_fragment:ZL,lights_phong_fragment:jL,lights_phong_pars_fragment:KL,lights_physical_fragment:JL,lights_physical_pars_fragment:QL,lights_fragment_begin:t2,lights_fragment_maps:e2,lights_fragment_end:n2,logdepthbuf_fragment:i2,logdepthbuf_pars_fragment:r2,logdepthbuf_pars_vertex:s2,logdepthbuf_vertex:o2,map_fragment:a2,map_pars_fragment:l2,map_particle_fragment:c2,map_particle_pars_fragment:u2,metalnessmap_fragment:h2,metalnessmap_pars_fragment:d2,morphcolor_vertex:f2,morphnormal_vertex:p2,morphtarget_pars_vertex:m2,morphtarget_vertex:g2,normal_fragment_begin:_2,normal_fragment_maps:v2,normal_pars_fragment:y2,normal_pars_vertex:x2,normal_vertex:S2,normalmap_pars_fragment:M2,clearcoat_normal_fragment_begin:b2,clearcoat_normal_fragment_maps:w2,clearcoat_pars_fragment:E2,iridescence_pars_fragment:A2,opaque_fragment:T2,packing:C2,premultiplied_alpha_fragment:R2,project_vertex:P2,dithering_fragment:I2,dithering_pars_fragment:L2,roughnessmap_fragment:D2,roughnessmap_pars_fragment:O2,shadowmap_pars_fragment:N2,shadowmap_pars_vertex:U2,shadowmap_vertex:F2,shadowmask_pars_fragment:B2,skinbase_vertex:z2,skinning_pars_vertex:k2,skinning_vertex:H2,skinnormal_vertex:V2,specularmap_fragment:G2,specularmap_pars_fragment:W2,tonemapping_fragment:X2,tonemapping_pars_fragment:q2,transmission_fragment:Y2,transmission_pars_fragment:$2,uv_pars_fragment:Z2,uv_pars_vertex:j2,uv_vertex:K2,worldpos_vertex:J2,background_vert:Q2,background_frag:tD,backgroundCube_vert:eD,backgroundCube_frag:nD,cube_vert:iD,cube_frag:rD,depth_vert:sD,depth_frag:oD,distanceRGBA_vert:aD,distanceRGBA_frag:lD,equirect_vert:cD,equirect_frag:uD,linedashed_vert:hD,linedashed_frag:dD,meshbasic_vert:fD,meshbasic_frag:pD,meshlambert_vert:mD,meshlambert_frag:gD,meshmatcap_vert:_D,meshmatcap_frag:vD,meshnormal_vert:yD,meshnormal_frag:xD,meshphong_vert:SD,meshphong_frag:MD,meshphysical_vert:bD,meshphysical_frag:wD,meshtoon_vert:ED,meshtoon_frag:AD,points_vert:TD,points_frag:CD,shadow_vert:RD,shadow_frag:PD,sprite_vert:ID,sprite_frag:LD},St={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Se}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Se},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0},uvTransform:{value:new Se}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Se},alphaMap:{value:null},alphaMapTransform:{value:new Se},alphaTest:{value:0}}},ar={basic:{uniforms:Zn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Zn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ye(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Zn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Zn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Zn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new ye(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Zn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Zn([St.points,St.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Zn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Zn([St.common,St.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Zn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Zn([St.sprite,St.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Zn([St.common,St.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Zn([St.lights,St.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};ar.physical={uniforms:Zn([ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Se},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Se},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Se},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Se},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Se},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Se},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Se}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};var Fu={r:0,b:0,g:0};function DD(n,t,e,i,r,o,l){let c=new ye(0),h=o===!0?0:1,d,p,m=null,_=0,y=null;function S(v,g){let I=!1,R=g.isScene===!0?g.background:null;R&&R.isTexture&&(R=(g.backgroundBlurriness>0?e:t).get(R)),R===null?A(c,h):R&&R.isColor&&(A(R,1),I=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(n.autoClear||I)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),R&&(R.isCubeTexture||R.mapping===gh)?(p===void 0&&(p=new fn(new Il(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:ma(ar.backgroundCube.uniforms),vertexShader:ar.backgroundCube.vertexShader,fragmentShader:ar.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(z,B,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.toneMapped=Be.getTransfer(R.colorSpace)!==$e,(m!==R||_!==R.version||y!==n.toneMapping)&&(p.material.needsUpdate=!0,m=R,_=R.version,y=n.toneMapping),p.layers.enableAll(),v.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new fn(new oh(2,2),new Qn({name:"BackgroundMaterial",uniforms:ma(ar.background.uniforms),vertexShader:ar.background.vertexShader,fragmentShader:ar.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,d.material.toneMapped=Be.getTransfer(R.colorSpace)!==$e,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(m!==R||_!==R.version||y!==n.toneMapping)&&(d.material.needsUpdate=!0,m=R,_=R.version,y=n.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null))}function A(v,g){v.getRGB(Fu,Bx(n)),i.buffers.color.setClear(Fu.r,Fu.g,Fu.b,g,l)}return{getClearColor:function(){return c},setClearColor:function(v,g=1){c.set(v),h=g,A(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,A(c,h)},render:S}}function OD(n,t,e,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:t.get("OES_vertex_array_object"),l=i.isWebGL2||o!==null,c={},h=v(null),d=h,p=!1;function m(H,J,$,ut,et){let it=!1;if(l){let at=A(ut,$,J);d!==at&&(d=at,y(d.object)),it=g(H,ut,$,et),it&&I(H,ut,$,et)}else{let at=J.wireframe===!0;(d.geometry!==ut.id||d.program!==$.id||d.wireframe!==at)&&(d.geometry=ut.id,d.program=$.id,d.wireframe=at,it=!0)}et!==null&&e.update(et,n.ELEMENT_ARRAY_BUFFER),(it||p)&&(p=!1,ot(H,J,$,ut),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(et).buffer))}function _(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function y(H){return i.isWebGL2?n.bindVertexArray(H):o.bindVertexArrayOES(H)}function S(H){return i.isWebGL2?n.deleteVertexArray(H):o.deleteVertexArrayOES(H)}function A(H,J,$){let ut=$.wireframe===!0,et=c[H.id];et===void 0&&(et={},c[H.id]=et);let it=et[J.id];it===void 0&&(it={},et[J.id]=it);let at=it[ut];return at===void 0&&(at=v(_()),it[ut]=at),at}function v(H){let J=[],$=[],ut=[];for(let et=0;et<r;et++)J[et]=0,$[et]=0,ut[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:$,attributeDivisors:ut,object:H,attributes:{},index:null}}function g(H,J,$,ut){let et=d.attributes,it=J.attributes,at=0,yt=$.getAttributes();for(let bt in yt)if(yt[bt].location>=0){let Q=et[bt],ft=it[bt];if(ft===void 0&&(bt==="instanceMatrix"&&H.instanceMatrix&&(ft=H.instanceMatrix),bt==="instanceColor"&&H.instanceColor&&(ft=H.instanceColor)),Q===void 0||Q.attribute!==ft||ft&&Q.data!==ft.data)return!0;at++}return d.attributesNum!==at||d.index!==ut}function I(H,J,$,ut){let et={},it=J.attributes,at=0,yt=$.getAttributes();for(let bt in yt)if(yt[bt].location>=0){let Q=it[bt];Q===void 0&&(bt==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),bt==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor));let ft={};ft.attribute=Q,Q&&Q.data&&(ft.data=Q.data),et[bt]=ft,at++}d.attributes=et,d.attributesNum=at,d.index=ut}function R(){let H=d.newAttributes;for(let J=0,$=H.length;J<$;J++)H[J]=0}function D(H){z(H,0)}function z(H,J){let $=d.newAttributes,ut=d.enabledAttributes,et=d.attributeDivisors;$[H]=1,ut[H]===0&&(n.enableVertexAttribArray(H),ut[H]=1),et[H]!==J&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,J),et[H]=J)}function B(){let H=d.newAttributes,J=d.enabledAttributes;for(let $=0,ut=J.length;$<ut;$++)J[$]!==H[$]&&(n.disableVertexAttribArray($),J[$]=0)}function U(H,J,$,ut,et,it,at){at===!0?n.vertexAttribIPointer(H,J,$,et,it):n.vertexAttribPointer(H,J,$,ut,et,it)}function ot(H,J,$,ut){if(i.isWebGL2===!1&&(H.isInstancedMesh||ut.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;R();let et=ut.attributes,it=$.getAttributes(),at=J.defaultAttributeValues;for(let yt in it){let bt=it[yt];if(bt.location>=0){let Xt=et[yt];if(Xt===void 0&&(yt==="instanceMatrix"&&H.instanceMatrix&&(Xt=H.instanceMatrix),yt==="instanceColor"&&H.instanceColor&&(Xt=H.instanceColor)),Xt!==void 0){let Q=Xt.normalized,ft=Xt.itemSize,Tt=e.get(Xt);if(Tt===void 0)continue;let Bt=Tt.buffer,qt=Tt.type,It=Tt.bytesPerElement,_e=i.isWebGL2===!0&&(qt===n.INT||qt===n.UNSIGNED_INT||Xt.gpuType===Ex);if(Xt.isInterleavedBufferAttribute){let te=Xt.data,G=te.stride,Ve=Xt.offset;if(te.isInstancedInterleavedBuffer){for(let Ht=0;Ht<bt.locationSize;Ht++)z(bt.location+Ht,te.meshPerAttribute);H.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ht=0;Ht<bt.locationSize;Ht++)D(bt.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let Ht=0;Ht<bt.locationSize;Ht++)U(bt.location+Ht,ft/bt.locationSize,qt,Q,G*It,(Ve+ft/bt.locationSize*Ht)*It,_e)}else{if(Xt.isInstancedBufferAttribute){for(let te=0;te<bt.locationSize;te++)z(bt.location+te,Xt.meshPerAttribute);H.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=Xt.meshPerAttribute*Xt.count)}else for(let te=0;te<bt.locationSize;te++)D(bt.location+te);n.bindBuffer(n.ARRAY_BUFFER,Bt);for(let te=0;te<bt.locationSize;te++)U(bt.location+te,ft/bt.locationSize,qt,Q,ft*It,ft/bt.locationSize*te*It,_e)}}else if(at!==void 0){let Q=at[yt];if(Q!==void 0)switch(Q.length){case 2:n.vertexAttrib2fv(bt.location,Q);break;case 3:n.vertexAttrib3fv(bt.location,Q);break;case 4:n.vertexAttrib4fv(bt.location,Q);break;default:n.vertexAttrib1fv(bt.location,Q)}}}}B()}function Mt(){st();for(let H in c){let J=c[H];for(let $ in J){let ut=J[$];for(let et in ut)S(ut[et].object),delete ut[et];delete J[$]}delete c[H]}}function w(H){if(c[H.id]===void 0)return;let J=c[H.id];for(let $ in J){let ut=J[$];for(let et in ut)S(ut[et].object),delete ut[et];delete J[$]}delete c[H.id]}function N(H){for(let J in c){let $=c[J];if($[H.id]===void 0)continue;let ut=$[H.id];for(let et in ut)S(ut[et].object),delete ut[et];delete $[H.id]}}function st(){mt(),p=!0,d!==h&&(d=h,y(d.object))}function mt(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:m,reset:st,resetDefaultState:mt,dispose:Mt,releaseStatesOfGeometry:w,releaseStatesOfProgram:N,initAttributes:R,enableAttribute:D,disableUnusedAttributes:B}}function ND(n,t,e,i){let r=i.isWebGL2,o;function l(p){o=p}function c(p,m){n.drawArrays(o,p,m),e.update(m,o,1)}function h(p,m,_){if(_===0)return;let y,S;if(r)y=n,S="drawArraysInstanced";else if(y=t.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",y===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[S](o,p,m,_),e.update(m,o,_)}function d(p,m,_){if(_===0)return;let y=t.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<_;S++)this.render(p[S],m[S]);else{y.multiDrawArraysWEBGL(o,p,0,m,0,_);let S=0;for(let A=0;A<_;A++)S+=m[A];e.update(S,o,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d}function UD(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let U=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",c=e.precision!==void 0?e.precision:"highp",h=o(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=l||t.has("WEBGL_draw_buffers"),p=e.logarithmicDepthBuffer===!0,m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),A=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),I=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,D=l||t.has("OES_texture_float"),z=R&&D,B=l?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:d,getMaxAnisotropy:r,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:p,maxTextures:m,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:S,maxAttributes:A,maxVertexUniforms:v,maxVaryings:g,maxFragmentUniforms:I,vertexTextures:R,floatFragmentTextures:D,floatVertexTextures:z,maxSamples:B}}function FD(n){let t=this,e=null,i=0,r=!1,o=!1,l=new $i,c=new Se,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_){let y=m.length!==0||_||i!==0||r;return r=_,i=m.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(m,_){e=p(m,_,0)},this.setState=function(m,_,y){let S=m.clippingPlanes,A=m.clipIntersection,v=m.clipShadows,g=n.get(m);if(!r||S===null||S.length===0||o&&!v)o?p(null):d();else{let I=o?0:i,R=I*4,D=g.clippingState||null;h.value=D,D=p(S,_,R,y);for(let z=0;z!==R;++z)D[z]=e[z];g.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function d(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(m,_,y,S){let A=m!==null?m.length:0,v=null;if(A!==0){if(v=h.value,S!==!0||v===null){let g=y+A*4,I=_.matrixWorldInverse;c.getNormalMatrix(I),(v===null||v.length<g)&&(v=new Float32Array(g));for(let R=0,D=y;R!==A;++R,D+=4)l.copy(m[R]).applyMatrix4(I,c),l.normal.toArray(v,D),v[D+3]=l.constant}h.value=v,h.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,v}}function BD(n){let t=new WeakMap;function e(l,c){return c===$p?l.mapping=ha:c===Zp&&(l.mapping=da),l}function i(l){if(l&&l.isTexture){let c=l.mapping;if(c===$p||c===Zp)if(t.has(l)){let h=t.get(l).texture;return e(h,l.mapping)}else{let h=l.image;if(h&&h.height>0){let d=new rm(h.height);return d.fromEquirectangularTexture(n,l),t.set(l,d),l.addEventListener("dispose",r),e(d.texture,l.mapping)}else return null}}return l}function r(l){let c=l.target;c.removeEventListener("dispose",r);let h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}var ga=class extends rh{constructor(t=-1,e=1,i=1,r=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,o=i-t,l=i+t,c=r+e,h=r-e;if(this.view!==null&&this.view.enabled){let d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,c-=p*this.view.offsetY,h=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sa=4,Jy=[.125,.215,.35,.446,.526,.582],zs=20,zp=new ga,Qy=new ye,kp=null,Hp=0,Vp=0,Fs=(1+Math.sqrt(5))/2,ta=1/Fs,tx=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Fs,ta),new X(0,Fs,-ta),new X(ta,0,Fs),new X(-ta,0,Fs),new X(Fs,ta,0),new X(-Fs,ta,0)],ah=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){kp=this._renderer.getRenderTarget(),Hp=this._renderer.getActiveCubeFace(),Vp=this._renderer.getActiveMipmapLevel(),this._setSize(256);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,r,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ix(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kp,Hp,Vp),t.scissorTest=!1,Bu(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ha||t.mapping===da?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kp=this._renderer.getRenderTarget(),Hp=this._renderer.getActiveCubeFace(),Vp=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:qs,format:gi,colorSpace:Dr,depthBuffer:!1},r=ex(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ex(t,e,i);let{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zD(o)),this._blurMaterial=kD(o,t,e)}return r}_compileMaterial(t){let e=new fn(this._lodPlanes[0],t);this._renderer.compile(e,zp)}_sceneToCubeUV(t,e,i,r){let c=new Kn(90,1,e,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],p=this._renderer,m=p.autoClear,_=p.toneMapping;p.getClearColor(Qy),p.toneMapping=us,p.autoClear=!1;let y=new pa({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),S=new fn(new Il,y),A=!1,v=t.background;v?v.isColor&&(y.color.copy(v),t.background=null,A=!0):(y.color.copy(Qy),A=!0);for(let g=0;g<6;g++){let I=g%3;I===0?(c.up.set(0,h[g],0),c.lookAt(d[g],0,0)):I===1?(c.up.set(0,0,h[g]),c.lookAt(0,d[g],0)):(c.up.set(0,h[g],0),c.lookAt(0,0,d[g]));let R=this._cubeSize;Bu(r,I*R,g>2?R:0,R,R),p.setRenderTarget(r),A&&p.render(S,c),p.render(t,c)}S.geometry.dispose(),S.material.dispose(),p.toneMapping=_,p.autoClear=m,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===ha||t.mapping===da;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ix()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nx());let o=r?this._cubemapMaterial:this._equirectMaterial,l=new fn(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=t;let h=this._cubeSize;Bu(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(l,zp)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=tx[(r-1)%tx.length];this._blur(t,r-1,r,o,l)}e.autoClear=i}_blur(t,e,i,r,o){let l=this._pingPongRenderTarget;this._halfBlur(t,l,e,i,r,"latitudinal",o),this._halfBlur(l,t,i,i,r,"longitudinal",o)}_halfBlur(t,e,i,r,o,l,c){let h=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let p=3,m=new fn(this._lodPlanes[r],d),_=d.uniforms,y=this._sizeLods[i]-1,S=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*zs-1),A=o/S,v=isFinite(o)?1+Math.floor(p*A):zs;v>zs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${zs}`);let g=[],I=0;for(let U=0;U<zs;++U){let ot=U/A,Mt=Math.exp(-ot*ot/2);g.push(Mt),U===0?I+=Mt:U<v&&(I+=2*Mt)}for(let U=0;U<g.length;U++)g[U]=g[U]/I;_.envMap.value=t.texture,_.samples.value=v,_.weights.value=g,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);let{_lodMax:R}=this;_.dTheta.value=S,_.mipInt.value=R-i;let D=this._sizeLods[r],z=3*D*(r>R-sa?r-R+sa:0),B=4*(this._cubeSize-D);Bu(e,z,B,3*D,2*D),h.setRenderTarget(e),h.render(m,zp)}};function zD(n){let t=[],e=[],i=[],r=n,o=n-sa+1+Jy.length;for(let l=0;l<o;l++){let c=Math.pow(2,r);e.push(c);let h=1/c;l>n-sa?h=Jy[l-n+sa-1]:l===0&&(h=0),i.push(h);let d=1/(c-2),p=-d,m=1+d,_=[p,p,m,p,m,m,p,p,m,m,p,m],y=6,S=6,A=3,v=2,g=1,I=new Float32Array(A*S*y),R=new Float32Array(v*S*y),D=new Float32Array(g*S*y);for(let B=0;B<y;B++){let U=B%3*2/3-1,ot=B>2?0:-1,Mt=[U,ot,0,U+2/3,ot,0,U+2/3,ot+1,0,U,ot,0,U+2/3,ot+1,0,U,ot+1,0];I.set(Mt,A*S*B),R.set(_,v*S*B);let w=[B,B,B,B,B,B];D.set(w,g*S*B)}let z=new Qi;z.setAttribute("position",new _i(I,A)),z.setAttribute("uv",new _i(R,v)),z.setAttribute("faceIndex",new _i(D,g)),t.push(z),r>sa&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ex(n,t,e){let i=new vi(n,t,e);return i.texture.mapping=gh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bu(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function kD(n,t,e){let i=new Float32Array(zs),r=new X(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function nx(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function ix(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Om(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lr,depthTest:!1,depthWrite:!1})}function Om(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function HD(n){let t=new WeakMap,e=null;function i(c){if(c&&c.isTexture){let h=c.mapping,d=h===$p||h===Zp,p=h===ha||h===da;if(d||p)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let m=t.get(c);return e===null&&(e=new ah(n)),m=d?e.fromEquirectangular(c,m):e.fromCubemap(c,m),t.set(c,m),m.texture}else{if(t.has(c))return t.get(c).texture;{let m=c.image;if(d&&m&&m.height>0||p&&m&&r(m)){e===null&&(e=new ah(n));let _=d?e.fromEquirectangular(c):e.fromCubemap(c);return t.set(c,_),c.addEventListener("dispose",o),_.texture}else return null}}}return c}function r(c){let h=0,d=6;for(let p=0;p<d;p++)c[p]!==void 0&&h++;return h===d}function o(c){let h=c.target;h.removeEventListener("dispose",o);let d=t.get(h);d!==void 0&&(t.delete(h),d.dispose())}function l(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:l}}function VD(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function GD(n,t,e,i){let r={},o=new WeakMap;function l(m){let _=m.target;_.index!==null&&t.remove(_.index);for(let S in _.attributes)t.remove(_.attributes[S]);for(let S in _.morphAttributes){let A=_.morphAttributes[S];for(let v=0,g=A.length;v<g;v++)t.remove(A[v])}_.removeEventListener("dispose",l),delete r[_.id];let y=o.get(_);y&&(t.remove(y),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function c(m,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,e.memory.geometries++),_}function h(m){let _=m.attributes;for(let S in _)t.update(_[S],n.ARRAY_BUFFER);let y=m.morphAttributes;for(let S in y){let A=y[S];for(let v=0,g=A.length;v<g;v++)t.update(A[v],n.ARRAY_BUFFER)}}function d(m){let _=[],y=m.index,S=m.attributes.position,A=0;if(y!==null){let I=y.array;A=y.version;for(let R=0,D=I.length;R<D;R+=3){let z=I[R+0],B=I[R+1],U=I[R+2];_.push(z,B,B,U,U,z)}}else if(S!==void 0){let I=S.array;A=S.version;for(let R=0,D=I.length/3-1;R<D;R+=3){let z=R+0,B=R+1,U=R+2;_.push(z,B,B,U,U,z)}}else return;let v=new(Ux(_)?ih:nh)(_,1);v.version=A;let g=o.get(m);g&&t.remove(g),o.set(m,v)}function p(m){let _=o.get(m);if(_){let y=m.index;y!==null&&_.version<y.version&&d(m)}else d(m);return o.get(m)}return{get:c,update:h,getWireframeAttribute:p}}function WD(n,t,e,i){let r=i.isWebGL2,o;function l(y){o=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function p(y,S){n.drawElements(o,S,c,y*h),e.update(S,o,1)}function m(y,S,A){if(A===0)return;let v,g;if(r)v=n,g="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[g](o,S,c,y*h,A),e.update(S,o,A)}function _(y,S,A){if(A===0)return;let v=t.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<A;g++)this.render(y[g]/h,S[g]);else{v.multiDrawElementsWEBGL(o,S,0,c,y,0,A);let g=0;for(let I=0;I<A;I++)g+=S[I];e.update(g,o,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function XD(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,c){switch(e.calls++,l){case n.TRIANGLES:e.triangles+=c*(o/3);break;case n.LINES:e.lines+=c*(o/2);break;case n.LINE_STRIP:e.lines+=c*(o-1);break;case n.LINE_LOOP:e.lines+=c*o;break;case n.POINTS:e.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function qD(n,t){return n[0]-t[0]}function YD(n,t){return Math.abs(t[1])-Math.abs(n[1])}function $D(n,t,e){let i={},r=new Float32Array(8),o=new WeakMap,l=new Tn,c=[];for(let d=0;d<8;d++)c[d]=[d,0];function h(d,p,m){let _=d.morphTargetInfluences;if(t.isWebGL2===!0){let S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,A=S!==void 0?S.length:0,v=o.get(p);if(v===void 0||v.count!==A){let J=function(){mt.dispose(),o.delete(p),p.removeEventListener("dispose",J)};var y=J;v!==void 0&&v.texture.dispose();let R=p.morphAttributes.position!==void 0,D=p.morphAttributes.normal!==void 0,z=p.morphAttributes.color!==void 0,B=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],ot=p.morphAttributes.color||[],Mt=0;R===!0&&(Mt=1),D===!0&&(Mt=2),z===!0&&(Mt=3);let w=p.attributes.position.count*Mt,N=1;w>t.maxTextureSize&&(N=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);let st=new Float32Array(w*N*4*A),mt=new th(st,w,N,A);mt.type=Pr,mt.needsUpdate=!0;let H=Mt*4;for(let $=0;$<A;$++){let ut=B[$],et=U[$],it=ot[$],at=w*N*4*$;for(let yt=0;yt<ut.count;yt++){let bt=yt*H;R===!0&&(l.fromBufferAttribute(ut,yt),st[at+bt+0]=l.x,st[at+bt+1]=l.y,st[at+bt+2]=l.z,st[at+bt+3]=0),D===!0&&(l.fromBufferAttribute(et,yt),st[at+bt+4]=l.x,st[at+bt+5]=l.y,st[at+bt+6]=l.z,st[at+bt+7]=0),z===!0&&(l.fromBufferAttribute(it,yt),st[at+bt+8]=l.x,st[at+bt+9]=l.y,st[at+bt+10]=l.z,st[at+bt+11]=it.itemSize===4?l.w:1)}}v={count:A,texture:mt,size:new Wt(w,N)},o.set(p,v),p.addEventListener("dispose",J)}let g=0;for(let R=0;R<_.length;R++)g+=_[R];let I=p.morphTargetsRelative?1:1-g;m.getUniforms().setValue(n,"morphTargetBaseInfluence",I),m.getUniforms().setValue(n,"morphTargetInfluences",_),m.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),m.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let S=_===void 0?0:_.length,A=i[p.id];if(A===void 0||A.length!==S){A=[];for(let D=0;D<S;D++)A[D]=[D,0];i[p.id]=A}for(let D=0;D<S;D++){let z=A[D];z[0]=D,z[1]=_[D]}A.sort(YD);for(let D=0;D<8;D++)D<S&&A[D][1]?(c[D][0]=A[D][0],c[D][1]=A[D][1]):(c[D][0]=Number.MAX_SAFE_INTEGER,c[D][1]=0);c.sort(qD);let v=p.morphAttributes.position,g=p.morphAttributes.normal,I=0;for(let D=0;D<8;D++){let z=c[D],B=z[0],U=z[1];B!==Number.MAX_SAFE_INTEGER&&U?(v&&p.getAttribute("morphTarget"+D)!==v[B]&&p.setAttribute("morphTarget"+D,v[B]),g&&p.getAttribute("morphNormal"+D)!==g[B]&&p.setAttribute("morphNormal"+D,g[B]),r[D]=U,I+=U):(v&&p.hasAttribute("morphTarget"+D)===!0&&p.deleteAttribute("morphTarget"+D),g&&p.hasAttribute("morphNormal"+D)===!0&&p.deleteAttribute("morphNormal"+D),r[D]=0)}let R=p.morphTargetsRelative?1:1-I;m.getUniforms().setValue(n,"morphTargetBaseInfluence",R),m.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:h}}function ZD(n,t,e,i){let r=new WeakMap;function o(h){let d=i.render.frame,p=h.geometry,m=t.get(h,p);if(r.get(m)!==d&&(t.update(m),r.set(m,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),r.get(h)!==d&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){let _=h.skeleton;r.get(_)!==d&&(_.update(),r.set(_,d))}return m}function l(){r=new WeakMap}function c(h){let d=h.target;d.removeEventListener("dispose",c),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:l}}var lh=class extends Nr{constructor(t,e,i,r,o,l,c,h,d,p){if(p=p!==void 0?p:Gs,p!==Gs&&p!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&p===Gs&&(i=cs),i===void 0&&p===fa&&(i=Vs),super(null,r,o,l,c,h,p,i,d),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=c!==void 0?c:jn,this.minFilter=h!==void 0?h:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},kx=new Nr,Hx=new lh(1,1);Hx.compareFunction=Ox;var Vx=new th,Gx=new nm,Wx=new sh,rx=[],sx=[],ox=new Float32Array(16),ax=new Float32Array(9),lx=new Float32Array(4);function ya(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,o=rx[r];if(o===void 0&&(o=new Float32Array(r),rx[r]=o),t!==0){i.toArray(o,0);for(let l=1,c=0;l!==t;++l)c+=e,n[l].toArray(o,c)}return o}function xn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Sn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vh(n,t){let e=sx[t];e===void 0&&(e=new Int32Array(t),sx[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function jD(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function KD(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2fv(this.addr,t),Sn(e,t)}}function JD(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xn(e,t))return;n.uniform3fv(this.addr,t),Sn(e,t)}}function QD(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4fv(this.addr,t),Sn(e,t)}}function tO(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Sn(e,t)}else{if(xn(e,i))return;lx.set(i),n.uniformMatrix2fv(this.addr,!1,lx),Sn(e,i)}}function eO(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Sn(e,t)}else{if(xn(e,i))return;ax.set(i),n.uniformMatrix3fv(this.addr,!1,ax),Sn(e,i)}}function nO(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Sn(e,t)}else{if(xn(e,i))return;ox.set(i),n.uniformMatrix4fv(this.addr,!1,ox),Sn(e,i)}}function iO(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function rO(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2iv(this.addr,t),Sn(e,t)}}function sO(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;n.uniform3iv(this.addr,t),Sn(e,t)}}function oO(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4iv(this.addr,t),Sn(e,t)}}function aO(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function lO(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xn(e,t))return;n.uniform2uiv(this.addr,t),Sn(e,t)}}function cO(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xn(e,t))return;n.uniform3uiv(this.addr,t),Sn(e,t)}}function uO(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xn(e,t))return;n.uniform4uiv(this.addr,t),Sn(e,t)}}function hO(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let o=this.type===n.SAMPLER_2D_SHADOW?Hx:kx;e.setTexture2D(t||o,r)}function dO(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Gx,r)}function fO(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Wx,r)}function pO(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Vx,r)}function mO(n){switch(n){case 5126:return jD;case 35664:return KD;case 35665:return JD;case 35666:return QD;case 35674:return tO;case 35675:return eO;case 35676:return nO;case 5124:case 35670:return iO;case 35667:case 35671:return rO;case 35668:case 35672:return sO;case 35669:case 35673:return oO;case 5125:return aO;case 36294:return lO;case 36295:return cO;case 36296:return uO;case 35678:case 36198:case 36298:case 36306:case 35682:return hO;case 35679:case 36299:case 36307:return dO;case 35680:case 36300:case 36308:case 36293:return fO;case 36289:case 36303:case 36311:case 36292:return pO}}function gO(n,t){n.uniform1fv(this.addr,t)}function _O(n,t){let e=ya(t,this.size,2);n.uniform2fv(this.addr,e)}function vO(n,t){let e=ya(t,this.size,3);n.uniform3fv(this.addr,e)}function yO(n,t){let e=ya(t,this.size,4);n.uniform4fv(this.addr,e)}function xO(n,t){let e=ya(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function SO(n,t){let e=ya(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function MO(n,t){let e=ya(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function bO(n,t){n.uniform1iv(this.addr,t)}function wO(n,t){n.uniform2iv(this.addr,t)}function EO(n,t){n.uniform3iv(this.addr,t)}function AO(n,t){n.uniform4iv(this.addr,t)}function TO(n,t){n.uniform1uiv(this.addr,t)}function CO(n,t){n.uniform2uiv(this.addr,t)}function RO(n,t){n.uniform3uiv(this.addr,t)}function PO(n,t){n.uniform4uiv(this.addr,t)}function IO(n,t,e){let i=this.cache,r=t.length,o=vh(e,r);xn(i,o)||(n.uniform1iv(this.addr,o),Sn(i,o));for(let l=0;l!==r;++l)e.setTexture2D(t[l]||kx,o[l])}function LO(n,t,e){let i=this.cache,r=t.length,o=vh(e,r);xn(i,o)||(n.uniform1iv(this.addr,o),Sn(i,o));for(let l=0;l!==r;++l)e.setTexture3D(t[l]||Gx,o[l])}function DO(n,t,e){let i=this.cache,r=t.length,o=vh(e,r);xn(i,o)||(n.uniform1iv(this.addr,o),Sn(i,o));for(let l=0;l!==r;++l)e.setTextureCube(t[l]||Wx,o[l])}function OO(n,t,e){let i=this.cache,r=t.length,o=vh(e,r);xn(i,o)||(n.uniform1iv(this.addr,o),Sn(i,o));for(let l=0;l!==r;++l)e.setTexture2DArray(t[l]||Vx,o[l])}function NO(n){switch(n){case 5126:return gO;case 35664:return _O;case 35665:return vO;case 35666:return yO;case 35674:return xO;case 35675:return SO;case 35676:return MO;case 5124:case 35670:return bO;case 35667:case 35671:return wO;case 35668:case 35672:return EO;case 35669:case 35673:return AO;case 5125:return TO;case 36294:return CO;case 36295:return RO;case 36296:return PO;case 35678:case 36198:case 36298:case 36306:case 35682:return IO;case 35679:case 36299:case 36307:return LO;case 35680:case 36300:case 36308:case 36293:return DO;case 36289:case 36303:case 36311:case 36292:return OO}}var sm=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=mO(e.type)}},om=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=NO(e.type)}},am=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let o=0,l=r.length;o!==l;++o){let c=r[o];c.setValue(t,e[c.id],i)}}},Gp=/(\w+)(\])?(\[|\.)?/g;function cx(n,t){n.seq.push(t),n.map[t.id]=t}function UO(n,t,e){let i=n.name,r=i.length;for(Gp.lastIndex=0;;){let o=Gp.exec(i),l=Gp.lastIndex,c=o[1],h=o[2]==="]",d=o[3];if(h&&(c=c|0),d===void 0||d==="["&&l+2===r){cx(e,d===void 0?new sm(c,n,t):new om(c,n,t));break}else{let m=e.map[c];m===void 0&&(m=new am(c),cx(e,m)),e=m}}}var ca=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let o=t.getActiveUniform(e,r),l=t.getUniformLocation(e,o.name);UO(o,l,this)}}setValue(t,e,i,r){let o=this.map[e];o!==void 0&&o.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let o=0,l=e.length;o!==l;++o){let c=e[o],h=i[c.id];h.needsUpdate!==!1&&c.setValue(t,h.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,o=t.length;r!==o;++r){let l=t[r];l.id in e&&i.push(l)}return i}};function ux(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var FO=37297,BO=0;function zO(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let l=r;l<o;l++){let c=l+1;i.push(`${c===t?">":" "} ${c}: ${e[l]}`)}return i.join(`
`)}function kO(n){let t=Be.getPrimaries(Be.workingColorSpace),e=Be.getPrimaries(n),i;switch(t===e?i="":t===$u&&e===Yu?i="LinearDisplayP3ToLinearSRGB":t===Yu&&e===$u&&(i="LinearSRGBToLinearDisplayP3"),n){case Dr:case _h:return[i,"LinearTransferOETF"];case Dn:case Im:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function hx(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let l=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+zO(n.getShaderSource(t),l)}else return r}function HO(n,t){let e=kO(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function VO(n,t){let e;switch(t){case $P:e="Linear";break;case ZP:e="Reinhard";break;case jP:e="OptimizedCineon";break;case KP:e="ACESFilmic";break;case QP:e="AgX";break;case JP:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function GO(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oa).join(`
`)}function WO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function XO(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function qO(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let o=n.getActiveAttrib(t,r),l=o.name,c=1;o.type===n.FLOAT_MAT2&&(c=2),o.type===n.FLOAT_MAT3&&(c=3),o.type===n.FLOAT_MAT4&&(c=4),e[l]={type:o.type,location:n.getAttribLocation(t,l),locationSize:c}}return e}function oa(n){return n!==""}function dx(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fx(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var YO=/^[ \t]*#include +<([\w\d./]+)>/gm;function lm(n){return n.replace(YO,ZO)}var $O=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ZO(n,t){let e=ge[t];if(e===void 0){let i=$O.get(t);if(i!==void 0)e=ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return lm(e)}var jO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function px(n){return n.replace(jO,KO)}function KO(n,t,e,i){let r="";for(let o=parseInt(t);o<parseInt(e);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function mx(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(t+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function JO(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===wx?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===MP?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cr&&(t="SHADOWMAP_TYPE_VSM"),t}function QO(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ha:case da:t="ENVMAP_TYPE_CUBE";break;case gh:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tN(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case da:t="ENVMAP_MODE_REFRACTION";break}return t}function eN(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Rm:t="ENVMAP_BLENDING_MULTIPLY";break;case qP:t="ENVMAP_BLENDING_MIX";break;case YP:t="ENVMAP_BLENDING_ADD";break}return t}function nN(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function iN(n,t,e,i){let r=n.getContext(),o=e.defines,l=e.vertexShader,c=e.fragmentShader,h=JO(e),d=QO(e),p=tN(e),m=eN(e),_=nN(e),y=e.isWebGL2?"":GO(e),S=WO(e),A=XO(o),v=r.createProgram(),g,I,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A].filter(oa).join(`
`),g.length>0&&(g+=`
`),I=[y,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A].filter(oa).join(`
`),I.length>0&&(I+=`
`)):(g=[mx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),I=[y,mx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+p:"",e.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==us?"#define TONE_MAPPING":"",e.toneMapping!==us?ge.tonemapping_pars_fragment:"",e.toneMapping!==us?VO("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,HO("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(oa).join(`
`)),l=lm(l),l=dx(l,e),l=fx(l,e),c=lm(c),c=dx(c,e),c=fx(c,e),l=px(l),c=px(c),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,g=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,I=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ly?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ly?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+I);let D=R+g+l,z=R+I+c,B=ux(r,r.VERTEX_SHADER,D),U=ux(r,r.FRAGMENT_SHADER,z);r.attachShader(v,B),r.attachShader(v,U),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function ot(st){if(n.debug.checkShaderErrors){let mt=r.getProgramInfoLog(v).trim(),H=r.getShaderInfoLog(B).trim(),J=r.getShaderInfoLog(U).trim(),$=!0,ut=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,B,U);else{let et=hx(r,B,"vertex"),it=hx(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+st.name+`
Material Type: `+st.type+`

Program Info Log: `+mt+`
`+et+`
`+it)}else mt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",mt):(H===""||J==="")&&(ut=!1);ut&&(st.diagnostics={runnable:$,programLog:mt,vertexShader:{log:H,prefix:g},fragmentShader:{log:J,prefix:I}})}r.deleteShader(B),r.deleteShader(U),Mt=new ca(r,v),w=qO(r,v)}let Mt;this.getUniforms=function(){return Mt===void 0&&ot(this),Mt};let w;this.getAttributes=function(){return w===void 0&&ot(this),w};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(v,FO)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=BO++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=U,this}var rN=0,cm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(t);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new um(t),e.set(t,i)),i}},um=class{constructor(t){this.id=rN++,this.code=t,this.usedTimes=0}};function sN(n,t,e,i,r,o,l){let c=new eh,h=new cm,d=new Set,p=[],m=r.isWebGL2,_=r.logarithmicDepthBuffer,y=r.vertexTextures,S=r.precision,A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return d.add(w),w===0?"uv":`uv${w}`}function g(w,N,st,mt,H){let J=mt.fog,$=H.geometry,ut=w.isMeshStandardMaterial?mt.environment:null,et=(w.isMeshStandardMaterial?e:t).get(w.envMap||ut),it=et&&et.mapping===gh?et.image.height:null,at=A[w.type];w.precision!==null&&(S=r.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));let yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,bt=yt!==void 0?yt.length:0,Xt=0;$.morphAttributes.position!==void 0&&(Xt=1),$.morphAttributes.normal!==void 0&&(Xt=2),$.morphAttributes.color!==void 0&&(Xt=3);let Q,ft,Tt,Bt;if(at){let xe=ar[at];Q=xe.vertexShader,ft=xe.fragmentShader}else Q=w.vertexShader,ft=w.fragmentShader,h.update(w),Tt=h.getVertexShaderID(w),Bt=h.getFragmentShaderID(w);let qt=n.getRenderTarget(),It=H.isInstancedMesh===!0,_e=H.isBatchedMesh===!0,te=!!w.map,G=!!w.matcap,Ve=!!et,Ht=!!w.aoMap,kt=!!w.lightMap,Ut=!!w.bumpMap,ze=!!w.normalMap,Qt=!!w.displacementMap,C=!!w.emissiveMap,b=!!w.metalnessMap,q=!!w.roughnessMap,_t=w.anisotropy>0,lt=w.clearcoat>0,pt=w.iridescence>0,Lt=w.sheen>0,xt=w.transmission>0,Rt=_t&&!!w.anisotropyMap,Vt=lt&&!!w.clearcoatMap,ne=lt&&!!w.clearcoatNormalMap,ht=lt&&!!w.clearcoatRoughnessMap,Ee=pt&&!!w.iridescenceMap,oe=pt&&!!w.iridescenceThicknessMap,Kt=Lt&&!!w.sheenColorMap,Ft=Lt&&!!w.sheenRoughnessMap,At=!!w.specularMap,ae=!!w.specularColorMap,O=!!w.specularIntensityMap,vt=xt&&!!w.transmissionMap,wt=xt&&!!w.thicknessMap,zt=!!w.gradientMap,P=!!w.alphaMap,gt=w.alphaTest>0,dt=!!w.alphaHash,Dt=!!w.extensions,Gt=us;w.toneMapped&&(qt===null||qt.isXRRenderTarget===!0)&&(Gt=n.toneMapping);let Te={isWebGL2:m,shaderID:at,shaderType:w.type,shaderName:w.name,vertexShader:Q,fragmentShader:ft,defines:w.defines,customVertexShaderID:Tt,customFragmentShaderID:Bt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:_e,instancing:It,instancingColor:It&&H.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:qt===null?n.outputColorSpace:qt.isXRRenderTarget===!0?qt.texture.colorSpace:Dr,alphaToCoverage:!!w.alphaToCoverage,map:te,matcap:G,envMap:Ve,envMapMode:Ve&&et.mapping,envMapCubeUVHeight:it,aoMap:Ht,lightMap:kt,bumpMap:Ut,normalMap:ze,displacementMap:y&&Qt,emissiveMap:C,normalMapObjectSpace:ze&&w.normalMapType===uI,normalMapTangentSpace:ze&&w.normalMapType===Dx,metalnessMap:b,roughnessMap:q,anisotropy:_t,anisotropyMap:Rt,clearcoat:lt,clearcoatMap:Vt,clearcoatNormalMap:ne,clearcoatRoughnessMap:ht,iridescence:pt,iridescenceMap:Ee,iridescenceThicknessMap:oe,sheen:Lt,sheenColorMap:Kt,sheenRoughnessMap:Ft,specularMap:At,specularColorMap:ae,specularIntensityMap:O,transmission:xt,transmissionMap:vt,thicknessMap:wt,gradientMap:zt,opaque:w.transparent===!1&&w.blending===aa&&w.alphaToCoverage===!1,alphaMap:P,alphaTest:gt,alphaHash:dt,combine:w.combine,mapUv:te&&v(w.map.channel),aoMapUv:Ht&&v(w.aoMap.channel),lightMapUv:kt&&v(w.lightMap.channel),bumpMapUv:Ut&&v(w.bumpMap.channel),normalMapUv:ze&&v(w.normalMap.channel),displacementMapUv:Qt&&v(w.displacementMap.channel),emissiveMapUv:C&&v(w.emissiveMap.channel),metalnessMapUv:b&&v(w.metalnessMap.channel),roughnessMapUv:q&&v(w.roughnessMap.channel),anisotropyMapUv:Rt&&v(w.anisotropyMap.channel),clearcoatMapUv:Vt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&v(w.sheenRoughnessMap.channel),specularMapUv:At&&v(w.specularMap.channel),specularColorMapUv:ae&&v(w.specularColorMap.channel),specularIntensityMapUv:O&&v(w.specularIntensityMap.channel),transmissionMapUv:vt&&v(w.transmissionMap.channel),thicknessMapUv:wt&&v(w.thicknessMap.channel),alphaMapUv:P&&v(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ze||_t),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(te||P),fog:!!J,useFog:w.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Xt,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&st.length>0,shadowMapType:n.shadowMap.type,toneMapping:Gt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:te&&w.map.isVideoTexture===!0&&Be.getTransfer(w.map.colorSpace)===$e,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Rr,flipSided:w.side===zn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Dt&&w.extensions.derivatives===!0,extensionFragDepth:Dt&&w.extensions.fragDepth===!0,extensionDrawBuffers:Dt&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Dt&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Dt&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Dt&&w.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:m||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:m||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:m||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Te.vertexUv1s=d.has(1),Te.vertexUv2s=d.has(2),Te.vertexUv3s=d.has(3),d.clear(),Te}function I(w){let N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(let st in w.defines)N.push(st),N.push(w.defines[st]);return w.isRawShaderMaterial===!1&&(R(N,w),D(N,w),N.push(n.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function R(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function D(w,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.matcap&&c.enable(4),N.envMap&&c.enable(5),N.normalMapObjectSpace&&c.enable(6),N.normalMapTangentSpace&&c.enable(7),N.clearcoat&&c.enable(8),N.iridescence&&c.enable(9),N.alphaTest&&c.enable(10),N.vertexColors&&c.enable(11),N.vertexAlphas&&c.enable(12),N.vertexUv1s&&c.enable(13),N.vertexUv2s&&c.enable(14),N.vertexUv3s&&c.enable(15),N.vertexTangents&&c.enable(16),N.anisotropy&&c.enable(17),N.alphaHash&&c.enable(18),N.batching&&c.enable(19),w.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.useLegacyLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),N.alphaToCoverage&&c.enable(20),w.push(c.mask)}function z(w){let N=A[w.type],st;if(N){let mt=ar[N];st=Dm.clone(mt.uniforms)}else st=w.uniforms;return st}function B(w,N){let st;for(let mt=0,H=p.length;mt<H;mt++){let J=p[mt];if(J.cacheKey===N){st=J,++st.usedTimes;break}}return st===void 0&&(st=new iN(n,N,w,o),p.push(st)),st}function U(w){if(--w.usedTimes===0){let N=p.indexOf(w);p[N]=p[p.length-1],p.pop(),w.destroy()}}function ot(w){h.remove(w)}function Mt(){h.dispose()}return{getParameters:g,getProgramCacheKey:I,getUniforms:z,acquireProgram:B,releaseProgram:U,releaseShaderCache:ot,programs:p,dispose:Mt}}function oN(){let n=new WeakMap;function t(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function e(o){n.delete(o)}function i(o,l,c){n.get(o)[l]=c}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function aN(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function gx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function _x(){let n=[],t=0,e=[],i=[],r=[];function o(){t=0,e.length=0,i.length=0,r.length=0}function l(m,_,y,S,A,v){let g=n[t];return g===void 0?(g={id:m.id,object:m,geometry:_,material:y,groupOrder:S,renderOrder:m.renderOrder,z:A,group:v},n[t]=g):(g.id=m.id,g.object=m,g.geometry=_,g.material=y,g.groupOrder=S,g.renderOrder=m.renderOrder,g.z=A,g.group=v),t++,g}function c(m,_,y,S,A,v){let g=l(m,_,y,S,A,v);y.transmission>0?i.push(g):y.transparent===!0?r.push(g):e.push(g)}function h(m,_,y,S,A,v){let g=l(m,_,y,S,A,v);y.transmission>0?i.unshift(g):y.transparent===!0?r.unshift(g):e.unshift(g)}function d(m,_){e.length>1&&e.sort(m||aN),i.length>1&&i.sort(_||gx),r.length>1&&r.sort(_||gx)}function p(){for(let m=t,_=n.length;m<_;m++){let y=n[m];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:i,transparent:r,init:o,push:c,unshift:h,finish:p,sort:d}}function lN(){let n=new WeakMap;function t(i,r){let o=n.get(i),l;return o===void 0?(l=new _x,n.set(i,[l])):r>=o.length?(l=new _x,o.push(l)):l=o[r],l}function e(){n=new WeakMap}return{get:t,dispose:e}}function cN(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new ye};break;case"SpotLight":e={position:new X,direction:new X,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new ye,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":e={color:new ye,position:new X,halfWidth:new X,halfHeight:new X};break}return n[t.id]=e,e}}}function uN(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var hN=0;function dN(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function fN(n,t){let e=new cN,i=uN(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new X);let o=new X,l=new yn,c=new yn;function h(p,m){let _=0,y=0,S=0;for(let st=0;st<9;st++)r.probe[st].set(0,0,0);let A=0,v=0,g=0,I=0,R=0,D=0,z=0,B=0,U=0,ot=0,Mt=0;p.sort(dN);let w=m===!0?Math.PI:1;for(let st=0,mt=p.length;st<mt;st++){let H=p[st],J=H.color,$=H.intensity,ut=H.distance,et=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=J.r*$*w,y+=J.g*$*w,S+=J.b*$*w;else if(H.isLightProbe){for(let it=0;it<9;it++)r.probe[it].addScaledVector(H.sh.coefficients[it],$);Mt++}else if(H.isDirectionalLight){let it=e.get(H);if(it.color.copy(H.color).multiplyScalar(H.intensity*w),H.castShadow){let at=H.shadow,yt=i.get(H);yt.shadowBias=at.bias,yt.shadowNormalBias=at.normalBias,yt.shadowRadius=at.radius,yt.shadowMapSize=at.mapSize,r.directionalShadow[A]=yt,r.directionalShadowMap[A]=et,r.directionalShadowMatrix[A]=H.shadow.matrix,D++}r.directional[A]=it,A++}else if(H.isSpotLight){let it=e.get(H);it.position.setFromMatrixPosition(H.matrixWorld),it.color.copy(J).multiplyScalar($*w),it.distance=ut,it.coneCos=Math.cos(H.angle),it.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),it.decay=H.decay,r.spot[g]=it;let at=H.shadow;if(H.map&&(r.spotLightMap[U]=H.map,U++,at.updateMatrices(H),H.castShadow&&ot++),r.spotLightMatrix[g]=at.matrix,H.castShadow){let yt=i.get(H);yt.shadowBias=at.bias,yt.shadowNormalBias=at.normalBias,yt.shadowRadius=at.radius,yt.shadowMapSize=at.mapSize,r.spotShadow[g]=yt,r.spotShadowMap[g]=et,B++}g++}else if(H.isRectAreaLight){let it=e.get(H);it.color.copy(J).multiplyScalar($),it.halfWidth.set(H.width*.5,0,0),it.halfHeight.set(0,H.height*.5,0),r.rectArea[I]=it,I++}else if(H.isPointLight){let it=e.get(H);if(it.color.copy(H.color).multiplyScalar(H.intensity*w),it.distance=H.distance,it.decay=H.decay,H.castShadow){let at=H.shadow,yt=i.get(H);yt.shadowBias=at.bias,yt.shadowNormalBias=at.normalBias,yt.shadowRadius=at.radius,yt.shadowMapSize=at.mapSize,yt.shadowCameraNear=at.camera.near,yt.shadowCameraFar=at.camera.far,r.pointShadow[v]=yt,r.pointShadowMap[v]=et,r.pointShadowMatrix[v]=H.shadow.matrix,z++}r.point[v]=it,v++}else if(H.isHemisphereLight){let it=e.get(H);it.skyColor.copy(H.color).multiplyScalar($*w),it.groundColor.copy(H.groundColor).multiplyScalar($*w),r.hemi[R]=it,R++}}I>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=St.LTC_FLOAT_1,r.rectAreaLTC2=St.LTC_FLOAT_2):(r.rectAreaLTC1=St.LTC_HALF_1,r.rectAreaLTC2=St.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=St.LTC_FLOAT_1,r.rectAreaLTC2=St.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=St.LTC_HALF_1,r.rectAreaLTC2=St.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=y,r.ambient[2]=S;let N=r.hash;(N.directionalLength!==A||N.pointLength!==v||N.spotLength!==g||N.rectAreaLength!==I||N.hemiLength!==R||N.numDirectionalShadows!==D||N.numPointShadows!==z||N.numSpotShadows!==B||N.numSpotMaps!==U||N.numLightProbes!==Mt)&&(r.directional.length=A,r.spot.length=g,r.rectArea.length=I,r.point.length=v,r.hemi.length=R,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=B+U-ot,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=ot,r.numLightProbes=Mt,N.directionalLength=A,N.pointLength=v,N.spotLength=g,N.rectAreaLength=I,N.hemiLength=R,N.numDirectionalShadows=D,N.numPointShadows=z,N.numSpotShadows=B,N.numSpotMaps=U,N.numLightProbes=Mt,r.version=hN++)}function d(p,m){let _=0,y=0,S=0,A=0,v=0,g=m.matrixWorldInverse;for(let I=0,R=p.length;I<R;I++){let D=p[I];if(D.isDirectionalLight){let z=r.directional[_];z.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(g),_++}else if(D.isSpotLight){let z=r.spot[S];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(g),z.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),z.direction.sub(o),z.direction.transformDirection(g),S++}else if(D.isRectAreaLight){let z=r.rectArea[A];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(g),c.identity(),l.copy(D.matrixWorld),l.premultiply(g),c.extractRotation(l),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),z.halfWidth.applyMatrix4(c),z.halfHeight.applyMatrix4(c),A++}else if(D.isPointLight){let z=r.point[y];z.position.setFromMatrixPosition(D.matrixWorld),z.position.applyMatrix4(g),y++}else if(D.isHemisphereLight){let z=r.hemi[v];z.direction.setFromMatrixPosition(D.matrixWorld),z.direction.transformDirection(g),v++}}}return{setup:h,setupView:d,state:r}}function vx(n,t){let e=new fN(n,t),i=[],r=[];function o(){i.length=0,r.length=0}function l(m){i.push(m)}function c(m){r.push(m)}function h(m){e.setup(i,m)}function d(m){e.setupView(i,m)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:h,setupLightsView:d,pushLight:l,pushShadow:c}}function pN(n,t){let e=new WeakMap;function i(o,l=0){let c=e.get(o),h;return c===void 0?(h=new vx(n,t),e.set(o,[h])):l>=c.length?(h=new vx(n,t),c.push(h)):h=c[l],h}function r(){e=new WeakMap}return{get:i,dispose:r}}var hm=class extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lI,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},dm=class extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},mN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _N(n,t,e){let i=new Ll,r=new Wt,o=new Wt,l=new Tn,c=new hm({depthPacking:cI}),h=new dm,d={},p=e.maxTextureSize,m={[ds]:zn,[zn]:ds,[Rr]:Rr},_=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:mN,fragmentShader:gN}),y=_.clone();y.defines.HORIZONTAL_PASS=1;let S=new Qi;S.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let A=new fn(S,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wx;let g=this.type;this.render=function(B,U,ot){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||B.length===0)return;let Mt=n.getRenderTarget(),w=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),st=n.state;st.setBlending(lr),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);let mt=g!==Cr&&this.type===Cr,H=g===Cr&&this.type!==Cr;for(let J=0,$=B.length;J<$;J++){let ut=B[J],et=ut.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",ut,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;r.copy(et.mapSize);let it=et.getFrameExtents();if(r.multiply(it),o.copy(et.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(o.x=Math.floor(p/it.x),r.x=o.x*it.x,et.mapSize.x=o.x),r.y>p&&(o.y=Math.floor(p/it.y),r.y=o.y*it.y,et.mapSize.y=o.y)),et.map===null||mt===!0||H===!0){let yt=this.type!==Cr?{minFilter:jn,magFilter:jn}:{};et.map!==null&&et.map.dispose(),et.map=new vi(r.x,r.y,yt),et.map.texture.name=ut.name+".shadowMap",et.camera.updateProjectionMatrix()}n.setRenderTarget(et.map),n.clear();let at=et.getViewportCount();for(let yt=0;yt<at;yt++){let bt=et.getViewport(yt);l.set(o.x*bt.x,o.y*bt.y,o.x*bt.z,o.y*bt.w),st.viewport(l),et.updateMatrices(ut,yt),i=et.getFrustum(),D(U,ot,et.camera,ut,this.type)}et.isPointLightShadow!==!0&&this.type===Cr&&I(et,ot),et.needsUpdate=!1}g=this.type,v.needsUpdate=!1,n.setRenderTarget(Mt,w,N)};function I(B,U){let ot=t.update(A);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,y.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new vi(r.x,r.y)),_.uniforms.shadow_pass.value=B.map.texture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,n.setRenderTarget(B.mapPass),n.clear(),n.renderBufferDirect(U,null,ot,_,A,null),y.uniforms.shadow_pass.value=B.mapPass.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,n.setRenderTarget(B.map),n.clear(),n.renderBufferDirect(U,null,ot,y,A,null)}function R(B,U,ot,Mt){let w=null,N=ot.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(N!==void 0)w=N;else if(w=ot.isPointLight===!0?h:c,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){let st=w.uuid,mt=U.uuid,H=d[st];H===void 0&&(H={},d[st]=H);let J=H[mt];J===void 0&&(J=w.clone(),H[mt]=J,U.addEventListener("dispose",z)),w=J}if(w.visible=U.visible,w.wireframe=U.wireframe,Mt===Cr?w.side=U.shadowSide!==null?U.shadowSide:U.side:w.side=U.shadowSide!==null?U.shadowSide:m[U.side],w.alphaMap=U.alphaMap,w.alphaTest=U.alphaTest,w.map=U.map,w.clipShadows=U.clipShadows,w.clippingPlanes=U.clippingPlanes,w.clipIntersection=U.clipIntersection,w.displacementMap=U.displacementMap,w.displacementScale=U.displacementScale,w.displacementBias=U.displacementBias,w.wireframeLinewidth=U.wireframeLinewidth,w.linewidth=U.linewidth,ot.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let st=n.properties.get(w);st.light=ot}return w}function D(B,U,ot,Mt,w){if(B.visible===!1)return;if(B.layers.test(U.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&w===Cr)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,B.matrixWorld);let mt=t.update(B),H=B.material;if(Array.isArray(H)){let J=mt.groups;for(let $=0,ut=J.length;$<ut;$++){let et=J[$],it=H[et.materialIndex];if(it&&it.visible){let at=R(B,it,Mt,w);B.onBeforeShadow(n,B,U,ot,mt,at,et),n.renderBufferDirect(ot,null,mt,at,B,et),B.onAfterShadow(n,B,U,ot,mt,at,et)}}}else if(H.visible){let J=R(B,H,Mt,w);B.onBeforeShadow(n,B,U,ot,mt,J,null),n.renderBufferDirect(ot,null,mt,J,B,null),B.onAfterShadow(n,B,U,ot,mt,J,null)}}let st=B.children;for(let mt=0,H=st.length;mt<H;mt++)D(st[mt],U,ot,Mt,w)}function z(B){B.target.removeEventListener("dispose",z);for(let ot in d){let Mt=d[ot],w=B.target.uuid;w in Mt&&(Mt[w].dispose(),delete Mt[w])}}}function vN(n,t,e){let i=e.isWebGL2;function r(){let P=!1,gt=new Tn,dt=null,Dt=new Tn(0,0,0,0);return{setMask:function(Gt){dt!==Gt&&!P&&(n.colorMask(Gt,Gt,Gt,Gt),dt=Gt)},setLocked:function(Gt){P=Gt},setClear:function(Gt,Te,xe,De,sn){sn===!0&&(Gt*=De,Te*=De,xe*=De),gt.set(Gt,Te,xe,De),Dt.equals(gt)===!1&&(n.clearColor(Gt,Te,xe,De),Dt.copy(gt))},reset:function(){P=!1,dt=null,Dt.set(-1,0,0,0)}}}function o(){let P=!1,gt=null,dt=null,Dt=null;return{setTest:function(Gt){Gt?It(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(Gt){gt!==Gt&&!P&&(n.depthMask(Gt),gt=Gt)},setFunc:function(Gt){if(dt!==Gt){switch(Gt){case zP:n.depthFunc(n.NEVER);break;case kP:n.depthFunc(n.ALWAYS);break;case HP:n.depthFunc(n.LESS);break;case Gu:n.depthFunc(n.LEQUAL);break;case VP:n.depthFunc(n.EQUAL);break;case GP:n.depthFunc(n.GEQUAL);break;case WP:n.depthFunc(n.GREATER);break;case XP:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}dt=Gt}},setLocked:function(Gt){P=Gt},setClear:function(Gt){Dt!==Gt&&(n.clearDepth(Gt),Dt=Gt)},reset:function(){P=!1,gt=null,dt=null,Dt=null}}}function l(){let P=!1,gt=null,dt=null,Dt=null,Gt=null,Te=null,xe=null,De=null,sn=null;return{setTest:function(Ce){P||(Ce?It(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(Ce){gt!==Ce&&!P&&(n.stencilMask(Ce),gt=Ce)},setFunc:function(Ce,Ge,Cn){(dt!==Ce||Dt!==Ge||Gt!==Cn)&&(n.stencilFunc(Ce,Ge,Cn),dt=Ce,Dt=Ge,Gt=Cn)},setOp:function(Ce,Ge,Cn){(Te!==Ce||xe!==Ge||De!==Cn)&&(n.stencilOp(Ce,Ge,Cn),Te=Ce,xe=Ge,De=Cn)},setLocked:function(Ce){P=Ce},setClear:function(Ce){sn!==Ce&&(n.clearStencil(Ce),sn=Ce)},reset:function(){P=!1,gt=null,dt=null,Dt=null,Gt=null,Te=null,xe=null,De=null,sn=null}}}let c=new r,h=new o,d=new l,p=new WeakMap,m=new WeakMap,_={},y={},S=new WeakMap,A=[],v=null,g=!1,I=null,R=null,D=null,z=null,B=null,U=null,ot=null,Mt=new ye(0,0,0),w=0,N=!1,st=null,mt=null,H=null,J=null,$=null,ut=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),et=!1,it=0,at=n.getParameter(n.VERSION);at.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(at)[1]),et=it>=1):at.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(at)[1]),et=it>=2);let yt=null,bt={},Xt=n.getParameter(n.SCISSOR_BOX),Q=n.getParameter(n.VIEWPORT),ft=new Tn().fromArray(Xt),Tt=new Tn().fromArray(Q);function Bt(P,gt,dt,Dt){let Gt=new Uint8Array(4),Te=n.createTexture();n.bindTexture(P,Te),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xe=0;xe<dt;xe++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(gt,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,Gt):n.texImage2D(gt+xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Gt);return Te}let qt={};qt[n.TEXTURE_2D]=Bt(n.TEXTURE_2D,n.TEXTURE_2D,1),qt[n.TEXTURE_CUBE_MAP]=Bt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(qt[n.TEXTURE_2D_ARRAY]=Bt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),qt[n.TEXTURE_3D]=Bt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),It(n.DEPTH_TEST),h.setFunc(Gu),Qt(!1),C(jv),It(n.CULL_FACE),Ut(lr);function It(P){_[P]!==!0&&(n.enable(P),_[P]=!0)}function _e(P){_[P]!==!1&&(n.disable(P),_[P]=!1)}function te(P,gt){return y[P]!==gt?(n.bindFramebuffer(P,gt),y[P]=gt,i&&(P===n.DRAW_FRAMEBUFFER&&(y[n.FRAMEBUFFER]=gt),P===n.FRAMEBUFFER&&(y[n.DRAW_FRAMEBUFFER]=gt)),!0):!1}function G(P,gt){let dt=A,Dt=!1;if(P)if(dt=S.get(gt),dt===void 0&&(dt=[],S.set(gt,dt)),P.isWebGLMultipleRenderTargets){let Gt=P.texture;if(dt.length!==Gt.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,xe=Gt.length;Te<xe;Te++)dt[Te]=n.COLOR_ATTACHMENT0+Te;dt.length=Gt.length,Dt=!0}}else dt[0]!==n.COLOR_ATTACHMENT0&&(dt[0]=n.COLOR_ATTACHMENT0,Dt=!0);else dt[0]!==n.BACK&&(dt[0]=n.BACK,Dt=!0);Dt&&(e.isWebGL2?n.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function Ve(P){return v!==P?(n.useProgram(P),v=P,!0):!1}let Ht={[Bs]:n.FUNC_ADD,[wP]:n.FUNC_SUBTRACT,[EP]:n.FUNC_REVERSE_SUBTRACT};if(i)Ht[Qv]=n.MIN,Ht[ty]=n.MAX;else{let P=t.get("EXT_blend_minmax");P!==null&&(Ht[Qv]=P.MIN_EXT,Ht[ty]=P.MAX_EXT)}let kt={[AP]:n.ZERO,[TP]:n.ONE,[CP]:n.SRC_COLOR,[qp]:n.SRC_ALPHA,[OP]:n.SRC_ALPHA_SATURATE,[LP]:n.DST_COLOR,[PP]:n.DST_ALPHA,[RP]:n.ONE_MINUS_SRC_COLOR,[Yp]:n.ONE_MINUS_SRC_ALPHA,[DP]:n.ONE_MINUS_DST_COLOR,[IP]:n.ONE_MINUS_DST_ALPHA,[NP]:n.CONSTANT_COLOR,[UP]:n.ONE_MINUS_CONSTANT_COLOR,[FP]:n.CONSTANT_ALPHA,[BP]:n.ONE_MINUS_CONSTANT_ALPHA};function Ut(P,gt,dt,Dt,Gt,Te,xe,De,sn,Ce){if(P===lr){g===!0&&(_e(n.BLEND),g=!1);return}if(g===!1&&(It(n.BLEND),g=!0),P!==bP){if(P!==I||Ce!==N){if((R!==Bs||B!==Bs)&&(n.blendEquation(n.FUNC_ADD),R=Bs,B=Bs),Ce)switch(P){case aa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ua:n.blendFunc(n.ONE,n.ONE);break;case Kv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case aa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ua:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}D=null,z=null,U=null,ot=null,Mt.set(0,0,0),w=0,I=P,N=Ce}return}Gt=Gt||gt,Te=Te||dt,xe=xe||Dt,(gt!==R||Gt!==B)&&(n.blendEquationSeparate(Ht[gt],Ht[Gt]),R=gt,B=Gt),(dt!==D||Dt!==z||Te!==U||xe!==ot)&&(n.blendFuncSeparate(kt[dt],kt[Dt],kt[Te],kt[xe]),D=dt,z=Dt,U=Te,ot=xe),(De.equals(Mt)===!1||sn!==w)&&(n.blendColor(De.r,De.g,De.b,sn),Mt.copy(De),w=sn),I=P,N=!1}function ze(P,gt){P.side===Rr?_e(n.CULL_FACE):It(n.CULL_FACE);let dt=P.side===zn;gt&&(dt=!dt),Qt(dt),P.blending===aa&&P.transparent===!1?Ut(lr):Ut(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),h.setFunc(P.depthFunc),h.setTest(P.depthTest),h.setMask(P.depthWrite),c.setMask(P.colorWrite);let Dt=P.stencilWrite;d.setTest(Dt),Dt&&(d.setMask(P.stencilWriteMask),d.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),d.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),q(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?It(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(P){st!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),st=P)}function C(P){P!==xP?(It(n.CULL_FACE),P!==mt&&(P===jv?n.cullFace(n.BACK):P===SP?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),mt=P}function b(P){P!==H&&(et&&n.lineWidth(P),H=P)}function q(P,gt,dt){P?(It(n.POLYGON_OFFSET_FILL),(J!==gt||$!==dt)&&(n.polygonOffset(gt,dt),J=gt,$=dt)):_e(n.POLYGON_OFFSET_FILL)}function _t(P){P?It(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function lt(P){P===void 0&&(P=n.TEXTURE0+ut-1),yt!==P&&(n.activeTexture(P),yt=P)}function pt(P,gt,dt){dt===void 0&&(yt===null?dt=n.TEXTURE0+ut-1:dt=yt);let Dt=bt[dt];Dt===void 0&&(Dt={type:void 0,texture:void 0},bt[dt]=Dt),(Dt.type!==P||Dt.texture!==gt)&&(yt!==dt&&(n.activeTexture(dt),yt=dt),n.bindTexture(P,gt||qt[P]),Dt.type=P,Dt.texture=gt)}function Lt(){let P=bt[yt];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function xt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Rt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Vt(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ne(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ht(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Kt(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ft(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function At(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(P){ft.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),ft.copy(P))}function O(P){Tt.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),Tt.copy(P))}function vt(P,gt){let dt=m.get(gt);dt===void 0&&(dt=new WeakMap,m.set(gt,dt));let Dt=dt.get(P);Dt===void 0&&(Dt=n.getUniformBlockIndex(gt,P.name),dt.set(P,Dt))}function wt(P,gt){let Dt=m.get(gt).get(P);p.get(gt)!==Dt&&(n.uniformBlockBinding(gt,Dt,P.__bindingPointIndex),p.set(gt,Dt))}function zt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),_={},yt=null,bt={},y={},S=new WeakMap,A=[],v=null,g=!1,I=null,R=null,D=null,z=null,B=null,U=null,ot=null,Mt=new ye(0,0,0),w=0,N=!1,st=null,mt=null,H=null,J=null,$=null,ft.set(0,0,n.canvas.width,n.canvas.height),Tt.set(0,0,n.canvas.width,n.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:It,disable:_e,bindFramebuffer:te,drawBuffers:G,useProgram:Ve,setBlending:Ut,setMaterial:ze,setFlipSided:Qt,setCullFace:C,setLineWidth:b,setPolygonOffset:q,setScissorTest:_t,activeTexture:lt,bindTexture:pt,unbindTexture:Lt,compressedTexImage2D:xt,compressedTexImage3D:Rt,texImage2D:Ft,texImage3D:At,updateUBOMapping:vt,uniformBlockBinding:wt,texStorage2D:oe,texStorage3D:Kt,texSubImage2D:Vt,texSubImage3D:ne,compressedTexSubImage2D:ht,compressedTexSubImage3D:Ee,scissor:ae,viewport:O,reset:zt}}function yN(n,t,e,i,r,o,l){let c=r.isWebGL2,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new WeakMap,m,_=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,b){return y?new OffscreenCanvas(C,b):Ku("canvas")}function A(C,b,q,_t){let lt=1;if((C.width>_t||C.height>_t)&&(lt=_t/Math.max(C.width,C.height)),lt<1||b===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){let pt=b?ju:Math.floor,Lt=pt(lt*C.width),xt=pt(lt*C.height);m===void 0&&(m=S(Lt,xt));let Rt=q?S(Lt,xt):m;return Rt.width=Lt,Rt.height=xt,Rt.getContext("2d").drawImage(C,0,0,Lt,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Lt+"x"+xt+")."),Rt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return tm(C.width)&&tm(C.height)}function g(C){return c?!1:C.wrapS!==Zi||C.wrapT!==Zi||C.minFilter!==jn&&C.minFilter!==Ln}function I(C,b){return C.generateMipmaps&&b&&C.minFilter!==jn&&C.minFilter!==Ln}function R(C){n.generateMipmap(C)}function D(C,b,q,_t,lt=!1){if(c===!1)return b;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let pt=b;if(b===n.RED&&(q===n.FLOAT&&(pt=n.R32F),q===n.HALF_FLOAT&&(pt=n.R16F),q===n.UNSIGNED_BYTE&&(pt=n.R8)),b===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(pt=n.R8UI),q===n.UNSIGNED_SHORT&&(pt=n.R16UI),q===n.UNSIGNED_INT&&(pt=n.R32UI),q===n.BYTE&&(pt=n.R8I),q===n.SHORT&&(pt=n.R16I),q===n.INT&&(pt=n.R32I)),b===n.RG&&(q===n.FLOAT&&(pt=n.RG32F),q===n.HALF_FLOAT&&(pt=n.RG16F),q===n.UNSIGNED_BYTE&&(pt=n.RG8)),b===n.RGBA){let Lt=lt?qu:Be.getTransfer(_t);q===n.FLOAT&&(pt=n.RGBA32F),q===n.HALF_FLOAT&&(pt=n.RGBA16F),q===n.UNSIGNED_BYTE&&(pt=Lt===$e?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(pt=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(pt=n.RGB5_A1)}return(pt===n.R16F||pt===n.R32F||pt===n.RG16F||pt===n.RG32F||pt===n.RGBA16F||pt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function z(C,b,q){return I(C,q)===!0||C.isFramebufferTexture&&C.minFilter!==jn&&C.minFilter!==Ln?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function B(C){return C===jn||C===ny||C===_l?n.NEAREST:n.LINEAR}function U(C){let b=C.target;b.removeEventListener("dispose",U),Mt(b),b.isVideoTexture&&p.delete(b)}function ot(C){let b=C.target;b.removeEventListener("dispose",ot),N(b)}function Mt(C){let b=i.get(C);if(b.__webglInit===void 0)return;let q=C.source,_t=_.get(q);if(_t){let lt=_t[b.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&w(C),Object.keys(_t).length===0&&_.delete(q)}i.remove(C)}function w(C){let b=i.get(C);n.deleteTexture(b.__webglTexture);let q=C.source,_t=_.get(q);delete _t[b.__cacheKey],l.memory.textures--}function N(C){let b=C.texture,q=i.get(C),_t=i.get(b);if(_t.__webglTexture!==void 0&&(n.deleteTexture(_t.__webglTexture),l.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++){if(Array.isArray(q.__webglFramebuffer[lt]))for(let pt=0;pt<q.__webglFramebuffer[lt].length;pt++)n.deleteFramebuffer(q.__webglFramebuffer[lt][pt]);else n.deleteFramebuffer(q.__webglFramebuffer[lt]);q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer[lt])}else{if(Array.isArray(q.__webglFramebuffer))for(let lt=0;lt<q.__webglFramebuffer.length;lt++)n.deleteFramebuffer(q.__webglFramebuffer[lt]);else n.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&n.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&n.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let lt=0;lt<q.__webglColorRenderbuffer.length;lt++)q.__webglColorRenderbuffer[lt]&&n.deleteRenderbuffer(q.__webglColorRenderbuffer[lt]);q.__webglDepthRenderbuffer&&n.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let lt=0,pt=b.length;lt<pt;lt++){let Lt=i.get(b[lt]);Lt.__webglTexture&&(n.deleteTexture(Lt.__webglTexture),l.memory.textures--),i.remove(b[lt])}i.remove(b),i.remove(C)}let st=0;function mt(){st=0}function H(){let C=st;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),st+=1,C}function J(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function $(C,b){let q=i.get(C);if(C.isVideoTexture&&ze(C),C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){let _t=C.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(q,C,b);return}}e.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+b)}function ut(C,b){let q=i.get(C);if(C.version>0&&q.__version!==C.version){ft(q,C,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+b)}function et(C,b){let q=i.get(C);if(C.version>0&&q.__version!==C.version){ft(q,C,b);return}e.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+b)}function it(C,b){let q=i.get(C);if(C.version>0&&q.__version!==C.version){Tt(q,C,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+b)}let at={[jp]:n.REPEAT,[Zi]:n.CLAMP_TO_EDGE,[Kp]:n.MIRRORED_REPEAT},yt={[jn]:n.NEAREST,[ny]:n.NEAREST_MIPMAP_NEAREST,[_l]:n.NEAREST_MIPMAP_LINEAR,[Ln]:n.LINEAR,[mp]:n.LINEAR_MIPMAP_NEAREST,[ks]:n.LINEAR_MIPMAP_LINEAR},bt={[hI]:n.NEVER,[_I]:n.ALWAYS,[dI]:n.LESS,[Ox]:n.LEQUAL,[fI]:n.EQUAL,[gI]:n.GEQUAL,[pI]:n.GREATER,[mI]:n.NOTEQUAL};function Xt(C,b,q){if(b.type===Pr&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ln||b.magFilter===mp||b.magFilter===_l||b.magFilter===ks||b.minFilter===Ln||b.minFilter===mp||b.minFilter===_l||b.minFilter===ks)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(n.texParameteri(C,n.TEXTURE_WRAP_S,at[b.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,at[b.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,at[b.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,yt[b.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,yt[b.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==Zi||b.wrapT!==Zi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,B(b.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,B(b.minFilter)),b.minFilter!==jn&&b.minFilter!==Ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,bt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let _t=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===jn||b.minFilter!==_l&&b.minFilter!==ks||b.type===Pr&&t.has("OES_texture_float_linear")===!1||c===!1&&b.type===qs&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(C,_t.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Q(C,b){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",U));let _t=b.source,lt=_.get(_t);lt===void 0&&(lt={},_.set(_t,lt));let pt=J(b);if(pt!==C.__cacheKey){lt[pt]===void 0&&(lt[pt]={texture:n.createTexture(),usedTimes:0},l.memory.textures++,q=!0),lt[pt].usedTimes++;let Lt=lt[C.__cacheKey];Lt!==void 0&&(lt[C.__cacheKey].usedTimes--,Lt.usedTimes===0&&w(b)),C.__cacheKey=pt,C.__webglTexture=lt[pt].texture}return q}function ft(C,b,q){let _t=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(_t=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(_t=n.TEXTURE_3D);let lt=Q(C,b),pt=b.source;e.bindTexture(_t,C.__webglTexture,n.TEXTURE0+q);let Lt=i.get(pt);if(pt.version!==Lt.__version||lt===!0){e.activeTexture(n.TEXTURE0+q);let xt=Be.getPrimaries(Be.workingColorSpace),Rt=b.colorSpace===Ui?null:Be.getPrimaries(b.colorSpace),Vt=b.colorSpace===Ui||xt===Rt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);let ne=g(b)&&v(b.image)===!1,ht=A(b.image,ne,!1,r.maxTextureSize);ht=Qt(b,ht);let Ee=v(ht)||c,oe=o.convert(b.format,b.colorSpace),Kt=o.convert(b.type),Ft=D(b.internalFormat,oe,Kt,b.colorSpace,b.isVideoTexture);Xt(_t,b,Ee);let At,ae=b.mipmaps,O=c&&b.isVideoTexture!==!0&&Ft!==Ix,vt=Lt.__version===void 0||lt===!0,wt=pt.dataReady,zt=z(b,ht,Ee);if(b.isDepthTexture)Ft=n.DEPTH_COMPONENT,c?b.type===Pr?Ft=n.DEPTH_COMPONENT32F:b.type===cs?Ft=n.DEPTH_COMPONENT24:b.type===Vs?Ft=n.DEPTH24_STENCIL8:Ft=n.DEPTH_COMPONENT16:b.type===Pr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Gs&&Ft===n.DEPTH_COMPONENT&&b.type!==Pm&&b.type!==cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=cs,Kt=o.convert(b.type)),b.format===fa&&Ft===n.DEPTH_COMPONENT&&(Ft=n.DEPTH_STENCIL,b.type!==Vs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Vs,Kt=o.convert(b.type))),vt&&(O?e.texStorage2D(n.TEXTURE_2D,1,Ft,ht.width,ht.height):e.texImage2D(n.TEXTURE_2D,0,Ft,ht.width,ht.height,0,oe,Kt,null));else if(b.isDataTexture)if(ae.length>0&&Ee){O&&vt&&e.texStorage2D(n.TEXTURE_2D,zt,Ft,ae[0].width,ae[0].height);for(let P=0,gt=ae.length;P<gt;P++)At=ae[P],O?wt&&e.texSubImage2D(n.TEXTURE_2D,P,0,0,At.width,At.height,oe,Kt,At.data):e.texImage2D(n.TEXTURE_2D,P,Ft,At.width,At.height,0,oe,Kt,At.data);b.generateMipmaps=!1}else O?(vt&&e.texStorage2D(n.TEXTURE_2D,zt,Ft,ht.width,ht.height),wt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ht.width,ht.height,oe,Kt,ht.data)):e.texImage2D(n.TEXTURE_2D,0,Ft,ht.width,ht.height,0,oe,Kt,ht.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,zt,Ft,ae[0].width,ae[0].height,ht.depth);for(let P=0,gt=ae.length;P<gt;P++)At=ae[P],b.format!==gi?oe!==null?O?wt&&e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,0,At.width,At.height,ht.depth,oe,At.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,P,Ft,At.width,At.height,ht.depth,0,At.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?wt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,P,0,0,0,At.width,At.height,ht.depth,oe,Kt,At.data):e.texImage3D(n.TEXTURE_2D_ARRAY,P,Ft,At.width,At.height,ht.depth,0,oe,Kt,At.data)}else{O&&vt&&e.texStorage2D(n.TEXTURE_2D,zt,Ft,ae[0].width,ae[0].height);for(let P=0,gt=ae.length;P<gt;P++)At=ae[P],b.format!==gi?oe!==null?O?wt&&e.compressedTexSubImage2D(n.TEXTURE_2D,P,0,0,At.width,At.height,oe,At.data):e.compressedTexImage2D(n.TEXTURE_2D,P,Ft,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?wt&&e.texSubImage2D(n.TEXTURE_2D,P,0,0,At.width,At.height,oe,Kt,At.data):e.texImage2D(n.TEXTURE_2D,P,Ft,At.width,At.height,0,oe,Kt,At.data)}else if(b.isDataArrayTexture)O?(vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,zt,Ft,ht.width,ht.height,ht.depth),wt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,oe,Kt,ht.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ft,ht.width,ht.height,ht.depth,0,oe,Kt,ht.data);else if(b.isData3DTexture)O?(vt&&e.texStorage3D(n.TEXTURE_3D,zt,Ft,ht.width,ht.height,ht.depth),wt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,oe,Kt,ht.data)):e.texImage3D(n.TEXTURE_3D,0,Ft,ht.width,ht.height,ht.depth,0,oe,Kt,ht.data);else if(b.isFramebufferTexture){if(vt)if(O)e.texStorage2D(n.TEXTURE_2D,zt,Ft,ht.width,ht.height);else{let P=ht.width,gt=ht.height;for(let dt=0;dt<zt;dt++)e.texImage2D(n.TEXTURE_2D,dt,Ft,P,gt,0,oe,Kt,null),P>>=1,gt>>=1}}else if(ae.length>0&&Ee){O&&vt&&e.texStorage2D(n.TEXTURE_2D,zt,Ft,ae[0].width,ae[0].height);for(let P=0,gt=ae.length;P<gt;P++)At=ae[P],O?wt&&e.texSubImage2D(n.TEXTURE_2D,P,0,0,oe,Kt,At):e.texImage2D(n.TEXTURE_2D,P,Ft,oe,Kt,At);b.generateMipmaps=!1}else O?(vt&&e.texStorage2D(n.TEXTURE_2D,zt,Ft,ht.width,ht.height),wt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,Kt,ht)):e.texImage2D(n.TEXTURE_2D,0,Ft,oe,Kt,ht);I(b,Ee)&&R(_t),Lt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Tt(C,b,q){if(b.image.length!==6)return;let _t=Q(C,b),lt=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+q);let pt=i.get(lt);if(lt.version!==pt.__version||_t===!0){e.activeTexture(n.TEXTURE0+q);let Lt=Be.getPrimaries(Be.workingColorSpace),xt=b.colorSpace===Ui?null:Be.getPrimaries(b.colorSpace),Rt=b.colorSpace===Ui||Lt===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);let Vt=b.isCompressedTexture||b.image[0].isCompressedTexture,ne=b.image[0]&&b.image[0].isDataTexture,ht=[];for(let P=0;P<6;P++)!Vt&&!ne?ht[P]=A(b.image[P],!1,!0,r.maxCubemapSize):ht[P]=ne?b.image[P].image:b.image[P],ht[P]=Qt(b,ht[P]);let Ee=ht[0],oe=v(Ee)||c,Kt=o.convert(b.format,b.colorSpace),Ft=o.convert(b.type),At=D(b.internalFormat,Kt,Ft,b.colorSpace),ae=c&&b.isVideoTexture!==!0,O=pt.__version===void 0||_t===!0,vt=lt.dataReady,wt=z(b,Ee,oe);Xt(n.TEXTURE_CUBE_MAP,b,oe);let zt;if(Vt){ae&&O&&e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,At,Ee.width,Ee.height);for(let P=0;P<6;P++){zt=ht[P].mipmaps;for(let gt=0;gt<zt.length;gt++){let dt=zt[gt];b.format!==gi?Kt!==null?ae?vt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt,0,0,dt.width,dt.height,Kt,dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt,At,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt,0,0,dt.width,dt.height,Kt,Ft,dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt,At,dt.width,dt.height,0,Kt,Ft,dt.data)}}}else{zt=b.mipmaps,ae&&O&&(zt.length>0&&wt++,e.texStorage2D(n.TEXTURE_CUBE_MAP,wt,At,ht[0].width,ht[0].height));for(let P=0;P<6;P++)if(ne){ae?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,ht[P].width,ht[P].height,Kt,Ft,ht[P].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,At,ht[P].width,ht[P].height,0,Kt,Ft,ht[P].data);for(let gt=0;gt<zt.length;gt++){let Dt=zt[gt].image[P].image;ae?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt+1,0,0,Dt.width,Dt.height,Kt,Ft,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt+1,At,Dt.width,Dt.height,0,Kt,Ft,Dt.data)}}else{ae?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Kt,Ft,ht[P]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,At,Kt,Ft,ht[P]);for(let gt=0;gt<zt.length;gt++){let dt=zt[gt];ae?vt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt+1,0,0,Kt,Ft,dt.image[P]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+P,gt+1,At,Kt,Ft,dt.image[P])}}}I(b,oe)&&R(n.TEXTURE_CUBE_MAP),pt.__version=lt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Bt(C,b,q,_t,lt,pt){let Lt=o.convert(q.format,q.colorSpace),xt=o.convert(q.type),Rt=D(q.internalFormat,Lt,xt,q.colorSpace);if(!i.get(b).__hasExternalTextures){let ne=Math.max(1,b.width>>pt),ht=Math.max(1,b.height>>pt);lt===n.TEXTURE_3D||lt===n.TEXTURE_2D_ARRAY?e.texImage3D(lt,pt,Rt,ne,ht,b.depth,0,Lt,xt,null):e.texImage2D(lt,pt,Rt,ne,ht,0,Lt,xt,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Ut(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_t,lt,i.get(q).__webglTexture,0,kt(b)):(lt===n.TEXTURE_2D||lt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,_t,lt,i.get(q).__webglTexture,pt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function qt(C,b,q){if(n.bindRenderbuffer(n.RENDERBUFFER,C),b.depthBuffer&&!b.stencilBuffer){let _t=c===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(q||Ut(b)){let lt=b.depthTexture;lt&&lt.isDepthTexture&&(lt.type===Pr?_t=n.DEPTH_COMPONENT32F:lt.type===cs&&(_t=n.DEPTH_COMPONENT24));let pt=kt(b);Ut(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,_t,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,_t,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,_t,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(b.depthBuffer&&b.stencilBuffer){let _t=kt(b);q&&Ut(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,n.DEPTH24_STENCIL8,b.width,b.height):Ut(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{let _t=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let lt=0;lt<_t.length;lt++){let pt=_t[lt],Lt=o.convert(pt.format,pt.colorSpace),xt=o.convert(pt.type),Rt=D(pt.internalFormat,Lt,xt,pt.colorSpace),Vt=kt(b);q&&Ut(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Vt,Rt,b.width,b.height):Ut(b)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Vt,Rt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Rt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function It(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let _t=i.get(b.depthTexture).__webglTexture,lt=kt(b);if(b.depthTexture.format===Gs)Ut(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_t,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_t,0);else if(b.depthTexture.format===fa)Ut(b)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_t,0,lt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function _e(C){let b=i.get(C),q=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");It(b.__webglFramebuffer,C)}else if(q){b.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[_t]),b.__webglDepthbuffer[_t]=n.createRenderbuffer(),qt(b.__webglDepthbuffer[_t],C,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),qt(b.__webglDepthbuffer,C,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function te(C,b,q){let _t=i.get(C);b!==void 0&&Bt(_t.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&_e(C)}function G(C){let b=C.texture,q=i.get(C),_t=i.get(b);C.addEventListener("dispose",ot),C.isWebGLMultipleRenderTargets!==!0&&(_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture()),_t.__version=b.version,l.memory.textures++);let lt=C.isWebGLCubeRenderTarget===!0,pt=C.isWebGLMultipleRenderTargets===!0,Lt=v(C)||c;if(lt){q.__webglFramebuffer=[];for(let xt=0;xt<6;xt++)if(c&&b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[xt]=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)q.__webglFramebuffer[xt][Rt]=n.createFramebuffer()}else q.__webglFramebuffer[xt]=n.createFramebuffer()}else{if(c&&b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let xt=0;xt<b.mipmaps.length;xt++)q.__webglFramebuffer[xt]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(pt)if(r.drawBuffers){let xt=C.texture;for(let Rt=0,Vt=xt.length;Rt<Vt;Rt++){let ne=i.get(xt[Rt]);ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&C.samples>0&&Ut(C)===!1){let xt=pt?b:[b];q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Rt=0;Rt<xt.length;Rt++){let Vt=xt[Rt];q.__webglColorRenderbuffer[Rt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Rt]);let ne=o.convert(Vt.format,Vt.colorSpace),ht=o.convert(Vt.type),Ee=D(Vt.internalFormat,ne,ht,Vt.colorSpace,C.isXRRenderTarget===!0),oe=kt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Ee,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Rt,n.RENDERBUFFER,q.__webglColorRenderbuffer[Rt])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),qt(q.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(lt){e.bindTexture(n.TEXTURE_CUBE_MAP,_t.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,b,Lt);for(let xt=0;xt<6;xt++)if(c&&b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)Bt(q.__webglFramebuffer[xt][Rt],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Rt);else Bt(q.__webglFramebuffer[xt],C,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0);I(b,Lt)&&R(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){let xt=C.texture;for(let Rt=0,Vt=xt.length;Rt<Vt;Rt++){let ne=xt[Rt],ht=i.get(ne);e.bindTexture(n.TEXTURE_2D,ht.__webglTexture),Xt(n.TEXTURE_2D,ne,Lt),Bt(q.__webglFramebuffer,C,ne,n.COLOR_ATTACHMENT0+Rt,n.TEXTURE_2D,0),I(ne,Lt)&&R(n.TEXTURE_2D)}e.unbindTexture()}else{let xt=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(c?xt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(xt,_t.__webglTexture),Xt(xt,b,Lt),c&&b.mipmaps&&b.mipmaps.length>0)for(let Rt=0;Rt<b.mipmaps.length;Rt++)Bt(q.__webglFramebuffer[Rt],C,b,n.COLOR_ATTACHMENT0,xt,Rt);else Bt(q.__webglFramebuffer,C,b,n.COLOR_ATTACHMENT0,xt,0);I(b,Lt)&&R(xt),e.unbindTexture()}C.depthBuffer&&_e(C)}function Ve(C){let b=v(C)||c,q=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let _t=0,lt=q.length;_t<lt;_t++){let pt=q[_t];if(I(pt,b)){let Lt=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,xt=i.get(pt).__webglTexture;e.bindTexture(Lt,xt),R(Lt),e.unbindTexture()}}}function Ht(C){if(c&&C.samples>0&&Ut(C)===!1){let b=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],q=C.width,_t=C.height,lt=n.COLOR_BUFFER_BIT,pt=[],Lt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(C),Rt=C.isWebGLMultipleRenderTargets===!0;if(Rt)for(let Vt=0;Vt<b.length;Vt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let Vt=0;Vt<b.length;Vt++){pt.push(n.COLOR_ATTACHMENT0+Vt),C.depthBuffer&&pt.push(Lt);let ne=xt.__ignoreDepthValues!==void 0?xt.__ignoreDepthValues:!1;if(ne===!1&&(C.depthBuffer&&(lt|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(lt|=n.STENCIL_BUFFER_BIT)),Rt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Vt]),ne===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Lt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Lt])),Rt){let ht=i.get(b[Vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ht,0)}n.blitFramebuffer(0,0,q,_t,0,0,q,_t,lt,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Rt)for(let Vt=0;Vt<b.length;Vt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[Vt]);let ne=i.get(b[Vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Vt,n.TEXTURE_2D,ne,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}}function kt(C){return Math.min(r.maxSamples,C.samples)}function Ut(C){let b=i.get(C);return c&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ze(C){let b=l.render.frame;p.get(C)!==b&&(p.set(C,b),C.update())}function Qt(C,b){let q=C.colorSpace,_t=C.format,lt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===Qp||q!==Dr&&q!==Ui&&(Be.getTransfer(q)===$e?c===!1?t.has("EXT_sRGB")===!0&&_t===gi?(C.format=Qp,C.minFilter=Ln,C.generateMipmaps=!1):b=Ju.sRGBToLinear(b):(_t!==gi||lt!==hs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}this.allocateTextureUnit=H,this.resetTextureUnits=mt,this.setTexture2D=$,this.setTexture2DArray=ut,this.setTexture3D=et,this.setTextureCube=it,this.rebindTextures=te,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=Bt,this.useMultisampledRTT=Ut}function xN(n,t,e){let i=e.isWebGL2;function r(o,l=Ui){let c,h=Be.getTransfer(l);if(o===hs)return n.UNSIGNED_BYTE;if(o===Ax)return n.UNSIGNED_SHORT_4_4_4_4;if(o===Tx)return n.UNSIGNED_SHORT_5_5_5_1;if(o===tI)return n.BYTE;if(o===eI)return n.SHORT;if(o===Pm)return n.UNSIGNED_SHORT;if(o===Ex)return n.INT;if(o===cs)return n.UNSIGNED_INT;if(o===Pr)return n.FLOAT;if(o===qs)return i?n.HALF_FLOAT:(c=t.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===nI)return n.ALPHA;if(o===gi)return n.RGBA;if(o===iI)return n.LUMINANCE;if(o===rI)return n.LUMINANCE_ALPHA;if(o===Gs)return n.DEPTH_COMPONENT;if(o===fa)return n.DEPTH_STENCIL;if(o===Qp)return c=t.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===sI)return n.RED;if(o===Cx)return n.RED_INTEGER;if(o===oI)return n.RG;if(o===Rx)return n.RG_INTEGER;if(o===Px)return n.RGBA_INTEGER;if(o===gp||o===_p||o===vp||o===yp)if(h===$e)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===gp)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===_p)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===vp)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===yp)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===gp)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===_p)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===vp)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===yp)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===iy||o===ry||o===sy||o===oy)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===iy)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===ry)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===sy)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===oy)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Ix)return c=t.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===ay||o===ly)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(o===ay)return h===$e?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===ly)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===cy||o===uy||o===hy||o===dy||o===fy||o===py||o===my||o===gy||o===_y||o===vy||o===yy||o===xy||o===Sy||o===My)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(o===cy)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===uy)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===hy)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===dy)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===fy)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===py)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===my)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===gy)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===_y)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===vy)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===yy)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===xy)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Sy)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===My)return h===$e?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===xp||o===by||o===wy)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(o===xp)return h===$e?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===by)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===wy)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===aI||o===Ey||o===Ay||o===Ty)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(o===xp)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Ey)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Ay)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Ty)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Vs?i?n.UNSIGNED_INT_24_8:(c=t.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}var fm=class extends Kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ki=class extends ur{constructor(){super(),this.isGroup=!0,this.type="Group"}},SN={type:"move"},Tl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,o=null,l=null,c=this._targetRay,h=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){l=!0;for(let A of t.hand.values()){let v=e.getJointPose(A,i),g=this._getHandJoint(d,A);v!==null&&(g.matrix.fromArray(v.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=v.radius),g.visible=v!==null}let p=d.joints["index-finger-tip"],m=d.joints["thumb-tip"],_=p.position.distanceTo(m.position),y=.02,S=.005;d.inputState.pinching&&_>y+S?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=y-S&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(SN)))}return c!==null&&(c.visible=r!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ki;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},MN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,pm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){let r=new Nr,o=t.properties.get(r);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){let i=e.cameras[0].viewport,r=new Qn({extensions:{fragDepth:!0},vertexShader:MN,fragmentShader:bN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fn(new oh(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}},mm=class extends cr{constructor(t,e){super();let i=this,r=null,o=1,l=null,c="local-floor",h=1,d=null,p=null,m=null,_=null,y=null,S=null,A=new pm,v=e.getContextAttributes(),g=null,I=null,R=[],D=[],z=new Wt,B=null,U=new Kn;U.layers.enable(1),U.viewport=new Tn;let ot=new Kn;ot.layers.enable(2),ot.viewport=new Tn;let Mt=[U,ot],w=new fm;w.layers.enable(1),w.layers.enable(2);let N=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ft=R[Q];return ft===void 0&&(ft=new Tl,R[Q]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(Q){let ft=R[Q];return ft===void 0&&(ft=new Tl,R[Q]=ft),ft.getGripSpace()},this.getHand=function(Q){let ft=R[Q];return ft===void 0&&(ft=new Tl,R[Q]=ft),ft.getHandSpace()};function mt(Q){let ft=D.indexOf(Q.inputSource);if(ft===-1)return;let Tt=R[ft];Tt!==void 0&&(Tt.update(Q.inputSource,Q.frame,d||l),Tt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){r.removeEventListener("select",mt),r.removeEventListener("selectstart",mt),r.removeEventListener("selectend",mt),r.removeEventListener("squeeze",mt),r.removeEventListener("squeezestart",mt),r.removeEventListener("squeezeend",mt),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",J);for(let Q=0;Q<R.length;Q++){let ft=D[Q];ft!==null&&(D[Q]=null,R[Q].disconnect(ft))}N=null,st=null,A.reset(),t.setRenderTarget(g),y=null,_=null,m=null,r=null,I=null,Xt.stop(),i.isPresenting=!1,t.setPixelRatio(B),t.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return m},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=function(Q){return c0(this,null,function*(){if(r=Q,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",mt),r.addEventListener("selectstart",mt),r.addEventListener("selectend",mt),r.addEventListener("squeeze",mt),r.addEventListener("squeezestart",mt),r.addEventListener("squeezeend",mt),r.addEventListener("end",H),r.addEventListener("inputsourceschange",J),v.xrCompatible!==!0&&(yield e.makeXRCompatible()),B=t.getPixelRatio(),t.getSize(z),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let ft={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(r,e,ft),r.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new vi(y.framebufferWidth,y.framebufferHeight,{format:gi,type:hs,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let ft=null,Tt=null,Bt=null;v.depth&&(Bt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=v.stencil?fa:Gs,Tt=v.stencil?Vs:cs);let qt={colorFormat:e.RGBA8,depthFormat:Bt,scaleFactor:o};m=new XRWebGLBinding(r,e),_=m.createProjectionLayer(qt),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),I=new vi(_.textureWidth,_.textureHeight,{format:gi,type:hs,depthTexture:new lh(_.textureWidth,_.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let It=t.properties.get(I);It.__ignoreDepthValues=_.ignoreDepthValues}I.isXRRenderTarget=!0,this.setFoveation(h),d=null,l=yield r.requestReferenceSpace(c),Xt.setContext(r),Xt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(Q){for(let ft=0;ft<Q.removed.length;ft++){let Tt=Q.removed[ft],Bt=D.indexOf(Tt);Bt>=0&&(D[Bt]=null,R[Bt].disconnect(Tt))}for(let ft=0;ft<Q.added.length;ft++){let Tt=Q.added[ft],Bt=D.indexOf(Tt);if(Bt===-1){for(let It=0;It<R.length;It++)if(It>=D.length){D.push(Tt),Bt=It;break}else if(D[It]===null){D[It]=Tt,Bt=It;break}if(Bt===-1)break}let qt=R[Bt];qt&&qt.connect(Tt)}}let $=new X,ut=new X;function et(Q,ft,Tt){$.setFromMatrixPosition(ft.matrixWorld),ut.setFromMatrixPosition(Tt.matrixWorld);let Bt=$.distanceTo(ut),qt=ft.projectionMatrix.elements,It=Tt.projectionMatrix.elements,_e=qt[14]/(qt[10]-1),te=qt[14]/(qt[10]+1),G=(qt[9]+1)/qt[5],Ve=(qt[9]-1)/qt[5],Ht=(qt[8]-1)/qt[0],kt=(It[8]+1)/It[0],Ut=_e*Ht,ze=_e*kt,Qt=Bt/(-Ht+kt),C=Qt*-Ht;ft.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(C),Q.translateZ(Qt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();let b=_e+Qt,q=te+Qt,_t=Ut-C,lt=ze+(Bt-C),pt=G*te/q*b,Lt=Ve*te/q*b;Q.projectionMatrix.makePerspective(_t,lt,pt,Lt,b,q),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function it(Q,ft){ft===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ft.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;A.texture!==null&&(Q.near=A.depthNear,Q.far=A.depthFar),w.near=ot.near=U.near=Q.near,w.far=ot.far=U.far=Q.far,(N!==w.near||st!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),N=w.near,st=w.far,U.near=N,U.far=st,ot.near=N,ot.far=st,U.updateProjectionMatrix(),ot.updateProjectionMatrix(),Q.updateProjectionMatrix());let ft=Q.parent,Tt=w.cameras;it(w,ft);for(let Bt=0;Bt<Tt.length;Bt++)it(Tt[Bt],ft);Tt.length===2?et(w,U,ot):w.projectionMatrix.copy(U.projectionMatrix),at(Q,w,ft)};function at(Q,ft,Tt){Tt===null?Q.matrix.copy(ft.matrixWorld):(Q.matrix.copy(Tt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ft.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ft.projectionMatrix),Q.projectionMatrixInverse.copy(ft.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Cl*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(_===null&&y===null))return h},this.setFoveation=function(Q){h=Q,_!==null&&(_.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null};let yt=null;function bt(Q,ft){if(p=ft.getViewerPose(d||l),S=ft,p!==null){let Tt=p.views;y!==null&&(t.setRenderTargetFramebuffer(I,y.framebuffer),t.setRenderTarget(I));let Bt=!1;Tt.length!==w.cameras.length&&(w.cameras.length=0,Bt=!0);for(let It=0;It<Tt.length;It++){let _e=Tt[It],te=null;if(y!==null)te=y.getViewport(_e);else{let Ve=m.getViewSubImage(_,_e);te=Ve.viewport,It===0&&(t.setRenderTargetTextures(I,Ve.colorTexture,_.ignoreDepthValues?void 0:Ve.depthStencilTexture),t.setRenderTarget(I))}let G=Mt[It];G===void 0&&(G=new Kn,G.layers.enable(It),G.viewport=new Tn,Mt[It]=G),G.matrix.fromArray(_e.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(_e.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(te.x,te.y,te.width,te.height),It===0&&(w.matrix.copy(G.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Bt===!0&&w.cameras.push(G)}let qt=r.enabledFeatures;if(qt&&qt.includes("depth-sensing")){let It=m.getDepthInformation(Tt[0]);It&&It.isValid&&It.texture&&A.init(t,It,r.renderState)}}for(let Tt=0;Tt<R.length;Tt++){let Bt=D[Tt],qt=R[Tt];Bt!==null&&qt!==void 0&&qt.update(Bt,ft,d||l)}A.render(t,w),yt&&yt(Q,ft),ft.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ft}),S=null}let Xt=new zx;Xt.setAnimationLoop(bt),this.setAnimationLoop=function(Q){yt=Q},this.dispose=function(){}}};function wN(n,t){function e(v,g){v.matrixAutoUpdate===!0&&v.updateMatrix(),g.value.copy(v.matrix)}function i(v,g){g.color.getRGB(v.fogColor.value,Bx(n)),g.isFog?(v.fogNear.value=g.near,v.fogFar.value=g.far):g.isFogExp2&&(v.fogDensity.value=g.density)}function r(v,g,I,R,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(v,g):g.isMeshToonMaterial?(o(v,g),m(v,g)):g.isMeshPhongMaterial?(o(v,g),p(v,g)):g.isMeshStandardMaterial?(o(v,g),_(v,g),g.isMeshPhysicalMaterial&&y(v,g,D)):g.isMeshMatcapMaterial?(o(v,g),S(v,g)):g.isMeshDepthMaterial?o(v,g):g.isMeshDistanceMaterial?(o(v,g),A(v,g)):g.isMeshNormalMaterial?o(v,g):g.isLineBasicMaterial?(l(v,g),g.isLineDashedMaterial&&c(v,g)):g.isPointsMaterial?h(v,g,I,R):g.isSpriteMaterial?d(v,g):g.isShadowMaterial?(v.color.value.copy(g.color),v.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(v,g){v.opacity.value=g.opacity,g.color&&v.diffuse.value.copy(g.color),g.emissive&&v.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(v.map.value=g.map,e(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,e(g.alphaMap,v.alphaMapTransform)),g.bumpMap&&(v.bumpMap.value=g.bumpMap,e(g.bumpMap,v.bumpMapTransform),v.bumpScale.value=g.bumpScale,g.side===zn&&(v.bumpScale.value*=-1)),g.normalMap&&(v.normalMap.value=g.normalMap,e(g.normalMap,v.normalMapTransform),v.normalScale.value.copy(g.normalScale),g.side===zn&&v.normalScale.value.negate()),g.displacementMap&&(v.displacementMap.value=g.displacementMap,e(g.displacementMap,v.displacementMapTransform),v.displacementScale.value=g.displacementScale,v.displacementBias.value=g.displacementBias),g.emissiveMap&&(v.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,v.emissiveMapTransform)),g.specularMap&&(v.specularMap.value=g.specularMap,e(g.specularMap,v.specularMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest);let I=t.get(g).envMap;if(I&&(v.envMap.value=I,v.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=g.reflectivity,v.ior.value=g.ior,v.refractionRatio.value=g.refractionRatio),g.lightMap){v.lightMap.value=g.lightMap;let R=n._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=g.lightMapIntensity*R,e(g.lightMap,v.lightMapTransform)}g.aoMap&&(v.aoMap.value=g.aoMap,v.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,v.aoMapTransform))}function l(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,g.map&&(v.map.value=g.map,e(g.map,v.mapTransform))}function c(v,g){v.dashSize.value=g.dashSize,v.totalSize.value=g.dashSize+g.gapSize,v.scale.value=g.scale}function h(v,g,I,R){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.size.value=g.size*I,v.scale.value=R*.5,g.map&&(v.map.value=g.map,e(g.map,v.uvTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,e(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function d(v,g){v.diffuse.value.copy(g.color),v.opacity.value=g.opacity,v.rotation.value=g.rotation,g.map&&(v.map.value=g.map,e(g.map,v.mapTransform)),g.alphaMap&&(v.alphaMap.value=g.alphaMap,e(g.alphaMap,v.alphaMapTransform)),g.alphaTest>0&&(v.alphaTest.value=g.alphaTest)}function p(v,g){v.specular.value.copy(g.specular),v.shininess.value=Math.max(g.shininess,1e-4)}function m(v,g){g.gradientMap&&(v.gradientMap.value=g.gradientMap)}function _(v,g){v.metalness.value=g.metalness,g.metalnessMap&&(v.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,v.metalnessMapTransform)),v.roughness.value=g.roughness,g.roughnessMap&&(v.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,v.roughnessMapTransform)),t.get(g).envMap&&(v.envMapIntensity.value=g.envMapIntensity)}function y(v,g,I){v.ior.value=g.ior,g.sheen>0&&(v.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),v.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(v.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,v.sheenColorMapTransform)),g.sheenRoughnessMap&&(v.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,v.sheenRoughnessMapTransform))),g.clearcoat>0&&(v.clearcoat.value=g.clearcoat,v.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(v.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,v.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(v.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&v.clearcoatNormalScale.value.negate())),g.iridescence>0&&(v.iridescence.value=g.iridescence,v.iridescenceIOR.value=g.iridescenceIOR,v.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(v.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,v.iridescenceMapTransform)),g.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),g.transmission>0&&(v.transmission.value=g.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(v.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,v.transmissionMapTransform)),v.thickness.value=g.thickness,g.thicknessMap&&(v.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=g.attenuationDistance,v.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(v.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(v.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=g.specularIntensity,v.specularColor.value.copy(g.specularColor),g.specularColorMap&&(v.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,v.specularColorMapTransform)),g.specularIntensityMap&&(v.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,v.specularIntensityMapTransform))}function S(v,g){g.matcap&&(v.matcap.value=g.matcap)}function A(v,g){let I=t.get(g).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function EN(n,t,e,i){let r={},o={},l=[],c=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(I,R){let D=R.program;i.uniformBlockBinding(I,D)}function d(I,R){let D=r[I.id];D===void 0&&(S(I),D=p(I),r[I.id]=D,I.addEventListener("dispose",v));let z=R.program;i.updateUBOMapping(I,z);let B=t.render.frame;o[I.id]!==B&&(_(I),o[I.id]=B)}function p(I){let R=m();I.__bindingPointIndex=R;let D=n.createBuffer(),z=I.__size,B=I.usage;return n.bindBuffer(n.UNIFORM_BUFFER,D),n.bufferData(n.UNIFORM_BUFFER,z,B),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,R,D),D}function m(){for(let I=0;I<c;I++)if(l.indexOf(I)===-1)return l.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(I){let R=r[I.id],D=I.uniforms,z=I.__cache;n.bindBuffer(n.UNIFORM_BUFFER,R);for(let B=0,U=D.length;B<U;B++){let ot=Array.isArray(D[B])?D[B]:[D[B]];for(let Mt=0,w=ot.length;Mt<w;Mt++){let N=ot[Mt];if(y(N,B,Mt,z)===!0){let st=N.__offset,mt=Array.isArray(N.value)?N.value:[N.value],H=0;for(let J=0;J<mt.length;J++){let $=mt[J],ut=A($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,st+H,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,H),H+=ut.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,st,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function y(I,R,D,z){let B=I.value,U=R+"_"+D;if(z[U]===void 0)return typeof B=="number"||typeof B=="boolean"?z[U]=B:z[U]=B.clone(),!0;{let ot=z[U];if(typeof B=="number"||typeof B=="boolean"){if(ot!==B)return z[U]=B,!0}else if(ot.equals(B)===!1)return ot.copy(B),!0}return!1}function S(I){let R=I.uniforms,D=0,z=16;for(let U=0,ot=R.length;U<ot;U++){let Mt=Array.isArray(R[U])?R[U]:[R[U]];for(let w=0,N=Mt.length;w<N;w++){let st=Mt[w],mt=Array.isArray(st.value)?st.value:[st.value];for(let H=0,J=mt.length;H<J;H++){let $=mt[H],ut=A($),et=D%z;et!==0&&z-et<ut.boundary&&(D+=z-et),st.__data=new Float32Array(ut.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=D,D+=ut.storage}}}let B=D%z;return B>0&&(D+=z-B),I.__size=D,I.__cache={},this}function A(I){let R={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function v(I){let R=I.target;R.removeEventListener("dispose",v);let D=l.indexOf(R.__bindingPointIndex);l.splice(D,1),n.deleteBuffer(r[R.id]),delete r[R.id],delete o[R.id]}function g(){for(let I in r)n.deleteBuffer(r[I]);l=[],r={},o={}}return{bind:h,update:d,dispose:g}}var Dl=class{constructor(t={}){let{canvas:e=LI(),context:i=null,depth:r=!0,stencil:o=!0,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let _;i!==null?_=i.getContextAttributes().alpha:_=l;let y=new Uint32Array(4),S=new Int32Array(4),A=null,v=null,g=[],I=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this._useLegacyLights=!1,this.toneMapping=us,this.toneMappingExposure=1;let R=this,D=!1,z=0,B=0,U=null,ot=-1,Mt=null,w=new Tn,N=new Tn,st=null,mt=new ye(0),H=0,J=e.width,$=e.height,ut=1,et=null,it=null,at=new Tn(0,0,J,$),yt=new Tn(0,0,J,$),bt=!1,Xt=new Ll,Q=!1,ft=!1,Tt=null,Bt=new yn,qt=new Wt,It=new X,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return U===null?ut:1}let G=i;function Ve(T,W){for(let Z=0;Z<T.length;Z++){let K=T[Z],Y=e.getContext(K,W);if(Y!==null)return Y}return null}try{let T={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Cm}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",gt,!1),G===null){let W=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&W.shift(),G=Ve(W,T),G===null)throw Ve(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ht,kt,Ut,ze,Qt,C,b,q,_t,lt,pt,Lt,xt,Rt,Vt,ne,ht,Ee,oe,Kt,Ft,At,ae,O;function vt(){Ht=new VD(G),kt=new UD(G,Ht,t),Ht.init(kt),At=new xN(G,Ht,kt),Ut=new vN(G,Ht,kt),ze=new XD(G),Qt=new oN,C=new yN(G,Ht,Ut,Qt,kt,At,ze),b=new BD(R),q=new HD(R),_t=new QI(G,kt),ae=new OD(G,Ht,_t,kt),lt=new GD(G,_t,ze,ae),pt=new ZD(G,lt,_t,ze),oe=new $D(G,kt,C),ne=new FD(Qt),Lt=new sN(R,b,q,Ht,kt,ae,ne),xt=new wN(R,Qt),Rt=new lN,Vt=new pN(Ht,kt),Ee=new DD(R,b,q,Ut,pt,_,h),ht=new _N(R,pt,kt),O=new EN(G,ze,kt,Ut),Kt=new ND(G,Ht,ze,kt),Ft=new WD(G,Ht,ze,kt),ze.programs=Lt.programs,R.capabilities=kt,R.extensions=Ht,R.properties=Qt,R.renderLists=Rt,R.shadowMap=ht,R.state=Ut,R.info=ze}vt();let wt=new mm(R,G);this.xr=wt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let T=Ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ut},this.setPixelRatio=function(T){T!==void 0&&(ut=T,this.setSize(J,$,!1))},this.getSize=function(T){return T.set(J,$)},this.setSize=function(T,W,Z=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,$=W,e.width=Math.floor(T*ut),e.height=Math.floor(W*ut),Z===!0&&(e.style.width=T+"px",e.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(J*ut,$*ut).floor()},this.setDrawingBufferSize=function(T,W,Z){J=T,$=W,ut=Z,e.width=Math.floor(T*Z),e.height=Math.floor(W*Z),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(at)},this.setViewport=function(T,W,Z,K){T.isVector4?at.set(T.x,T.y,T.z,T.w):at.set(T,W,Z,K),Ut.viewport(w.copy(at).multiplyScalar(ut).floor())},this.getScissor=function(T){return T.copy(yt)},this.setScissor=function(T,W,Z,K){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,W,Z,K),Ut.scissor(N.copy(yt).multiplyScalar(ut).floor())},this.getScissorTest=function(){return bt},this.setScissorTest=function(T){Ut.setScissorTest(bt=T)},this.setOpaqueSort=function(T){et=T},this.setTransparentSort=function(T){it=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,W=!0,Z=!0){let K=0;if(T){let Y=!1;if(U!==null){let Ct=U.texture.format;Y=Ct===Px||Ct===Rx||Ct===Cx}if(Y){let Ct=U.texture.type,Ot=Ct===hs||Ct===cs||Ct===Pm||Ct===Vs||Ct===Ax||Ct===Tx,$t=Ee.getClearColor(),ee=Ee.getClearAlpha(),ue=$t.r,ie=$t.g,re=$t.b;Ot?(y[0]=ue,y[1]=ie,y[2]=re,y[3]=ee,G.clearBufferuiv(G.COLOR,0,y)):(S[0]=ue,S[1]=ie,S[2]=re,S[3]=ee,G.clearBufferiv(G.COLOR,0,S))}else K|=G.COLOR_BUFFER_BIT}W&&(K|=G.DEPTH_BUFFER_BIT),Z&&(K|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),Rt.dispose(),Vt.dispose(),Qt.dispose(),b.dispose(),q.dispose(),pt.dispose(),ae.dispose(),O.dispose(),Lt.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",sn),wt.removeEventListener("sessionend",Ce),Tt&&(Tt.dispose(),Tt=null),Ge.stop()};function zt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;let T=ze.autoReset,W=ht.enabled,Z=ht.autoUpdate,K=ht.needsUpdate,Y=ht.type;vt(),ze.autoReset=T,ht.enabled=W,ht.autoUpdate=Z,ht.needsUpdate=K,ht.type=Y}function gt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){let W=T.target;W.removeEventListener("dispose",dt),Dt(W)}function Dt(T){Gt(T),Qt.remove(T)}function Gt(T){let W=Qt.get(T).programs;W!==void 0&&(W.forEach(function(Z){Lt.releaseProgram(Z)}),T.isShaderMaterial&&Lt.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,Z,K,Y,Ct){W===null&&(W=_e);let Ot=Y.isMesh&&Y.matrixWorld.determinant()<0,$t=ql(T,W,Z,K,Y);Ut.setMaterial(K,Ot);let ee=Z.index,ue=1;if(K.wireframe===!0){if(ee=lt.getWireframeAttribute(Z),ee===void 0)return;ue=2}let ie=Z.drawRange,re=Z.attributes.position,Ze=ie.start*ue,kn=(ie.start+ie.count)*ue;Ct!==null&&(Ze=Math.max(Ze,Ct.start*ue),kn=Math.min(kn,(Ct.start+Ct.count)*ue)),ee!==null?(Ze=Math.max(Ze,0),kn=Math.min(kn,ee.count)):re!=null&&(Ze=Math.max(Ze,0),kn=Math.min(kn,re.count));let hn=kn-Ze;if(hn<0||hn===1/0)return;ae.setup(Y,K,$t,Z,ee);let Fi,We=Kt;if(ee!==null&&(Fi=_t.get(ee),We=Ft,We.setIndex(Fi)),Y.isMesh)K.wireframe===!0?(Ut.setLineWidth(K.wireframeLinewidth*te()),We.setMode(G.LINES)):We.setMode(G.TRIANGLES);else if(Y.isLine){let he=K.linewidth;he===void 0&&(he=1),Ut.setLineWidth(he*te()),Y.isLineSegments?We.setMode(G.LINES):Y.isLineLoop?We.setMode(G.LINE_LOOP):We.setMode(G.LINE_STRIP)}else Y.isPoints?We.setMode(G.POINTS):Y.isSprite&&We.setMode(G.TRIANGLES);if(Y.isBatchedMesh)We.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)We.renderInstances(Ze,hn,Y.count);else if(Z.isInstancedBufferGeometry){let he=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,no=Math.min(Z.instanceCount,he);We.renderInstances(Ze,hn,no)}else We.render(Ze,hn)};function Te(T,W,Z){T.transparent===!0&&T.side===Rr&&T.forceSinglePass===!1?(T.side=zn,T.needsUpdate=!0,eo(T,W,Z),T.side=ds,T.needsUpdate=!0,eo(T,W,Z),T.side=Rr):eo(T,W,Z)}this.compile=function(T,W,Z=null){Z===null&&(Z=T),v=Vt.get(Z),v.init(),I.push(v),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),T!==Z&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights(R._useLegacyLights);let K=new Set;return T.traverse(function(Y){let Ct=Y.material;if(Ct)if(Array.isArray(Ct))for(let Ot=0;Ot<Ct.length;Ot++){let $t=Ct[Ot];Te($t,Z,Y),K.add($t)}else Te(Ct,Z,Y),K.add(Ct)}),I.pop(),v=null,K},this.compileAsync=function(T,W,Z=null){let K=this.compile(T,W,Z);return new Promise(Y=>{function Ct(){if(K.forEach(function(Ot){Qt.get(Ot).currentProgram.isReady()&&K.delete(Ot)}),K.size===0){Y(T);return}setTimeout(Ct,10)}Ht.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let xe=null;function De(T){xe&&xe(T)}function sn(){Ge.stop()}function Ce(){Ge.start()}let Ge=new zx;Ge.setAnimationLoop(De),typeof self<"u"&&Ge.setContext(self),this.setAnimationLoop=function(T){xe=T,wt.setAnimationLoop(T),T===null?Ge.stop():Ge.start()},wt.addEventListener("sessionstart",sn),wt.addEventListener("sessionend",Ce),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(W),W=wt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,W,U),v=Vt.get(T,I.length),v.init(),I.push(v),Bt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Xt.setFromProjectionMatrix(Bt),ft=this.localClippingEnabled,Q=ne.init(this.clippingPlanes,ft),A=Rt.get(T,g.length),A.init(),g.push(A),Cn(T,W,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(et,it),this.info.render.frame++,Q===!0&&ne.beginShadows();let Z=v.state.shadowsArray;if(ht.render(Z,T,W),Q===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset(),(wt.enabled===!1||wt.isPresenting===!1||wt.hasDepthSensing()===!1)&&Ee.render(A,T),v.setupLights(R._useLegacyLights),W.isArrayCamera){let K=W.cameras;for(let Y=0,Ct=K.length;Y<Ct;Y++){let Ot=K[Y];Vl(A,T,Ot,Ot.viewport)}}else Vl(A,T,W);U!==null&&(C.updateMultisampleRenderTarget(U),C.updateRenderTargetMipmap(U)),T.isScene===!0&&T.onAfterRender(R,T,W),ae.resetDefaultState(),ot=-1,Mt=null,I.pop(),I.length>0?v=I[I.length-1]:v=null,g.pop(),g.length>0?A=g[g.length-1]:A=null};function Cn(T,W,Z,K){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Xt.intersectsSprite(T)){K&&It.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Bt);let Ot=pt.update(T),$t=T.material;$t.visible&&A.push(T,Ot,$t,Z,It.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Xt.intersectsObject(T))){let Ot=pt.update(T),$t=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),It.copy(T.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),It.copy(Ot.boundingSphere.center)),It.applyMatrix4(T.matrixWorld).applyMatrix4(Bt)),Array.isArray($t)){let ee=Ot.groups;for(let ue=0,ie=ee.length;ue<ie;ue++){let re=ee[ue],Ze=$t[re.materialIndex];Ze&&Ze.visible&&A.push(T,Ot,Ze,Z,It.z,re)}}else $t.visible&&A.push(T,Ot,$t,Z,It.z,null)}}let Ct=T.children;for(let Ot=0,$t=Ct.length;Ot<$t;Ot++)Cn(Ct[Ot],W,Z,K)}function Vl(T,W,Z,K){let Y=T.opaque,Ct=T.transmissive,Ot=T.transparent;v.setupLightsView(Z),Q===!0&&ne.setGlobalState(R.clippingPlanes,Z),Ct.length>0&&Lh(Y,Ct,W,Z),K&&Ut.viewport(w.copy(K)),Y.length>0&&to(Y,W,Z),Ct.length>0&&to(Ct,W,Z),Ot.length>0&&to(Ot,W,Z),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Lh(T,W,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;let Ct=kt.isWebGL2;Tt===null&&(Tt=new vi(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")?qs:hs,minFilter:ks,samples:Ct?4:0})),R.getDrawingBufferSize(qt),Ct?Tt.setSize(qt.x,qt.y):Tt.setSize(ju(qt.x),ju(qt.y));let Ot=R.getRenderTarget();R.setRenderTarget(Tt),R.getClearColor(mt),H=R.getClearAlpha(),H<1&&R.setClearColor(16777215,.5),R.clear();let $t=R.toneMapping;R.toneMapping=us,to(T,Z,K),C.updateMultisampleRenderTarget(Tt),C.updateRenderTargetMipmap(Tt);let ee=!1;for(let ue=0,ie=W.length;ue<ie;ue++){let re=W[ue],Ze=re.object,kn=re.geometry,hn=re.material,Fi=re.group;if(hn.side===Rr&&Ze.layers.test(K.layers)){let We=hn.side;hn.side=zn,hn.needsUpdate=!0,Gl(Ze,Z,K,kn,hn,Fi),hn.side=We,hn.needsUpdate=!0,ee=!0}}ee===!0&&(C.updateMultisampleRenderTarget(Tt),C.updateRenderTargetMipmap(Tt)),R.setRenderTarget(Ot),R.setClearColor(mt,H),R.toneMapping=$t}function to(T,W,Z){let K=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,Ct=T.length;Y<Ct;Y++){let Ot=T[Y],$t=Ot.object,ee=Ot.geometry,ue=K===null?Ot.material:K,ie=Ot.group;$t.layers.test(Z.layers)&&Gl($t,W,Z,ee,ue,ie)}}function Gl(T,W,Z,K,Y,Ct){T.onBeforeRender(R,W,Z,K,Y,Ct),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(R,W,Z,K,T,Ct),Y.transparent===!0&&Y.side===Rr&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,R.renderBufferDirect(Z,W,K,Y,T,Ct),Y.side=ds,Y.needsUpdate=!0,R.renderBufferDirect(Z,W,K,Y,T,Ct),Y.side=Rr):R.renderBufferDirect(Z,W,K,Y,T,Ct),T.onAfterRender(R,W,Z,K,Y,Ct)}function eo(T,W,Z){W.isScene!==!0&&(W=_e);let K=Qt.get(T),Y=v.state.lights,Ct=v.state.shadowsArray,Ot=Y.state.version,$t=Lt.getParameters(T,Y.state,Ct,W,Z),ee=Lt.getProgramCacheKey($t),ue=K.programs;K.environment=T.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(T.isMeshStandardMaterial?q:b).get(T.envMap||K.environment),ue===void 0&&(T.addEventListener("dispose",dt),ue=new Map,K.programs=ue);let ie=ue.get(ee);if(ie!==void 0){if(K.currentProgram===ie&&K.lightsStateVersion===Ot)return Xl(T,$t),ie}else $t.uniforms=Lt.getUniforms(T),T.onBuild(Z,$t,R),T.onBeforeCompile($t,R),ie=Lt.acquireProgram($t,ee),ue.set(ee,ie),K.uniforms=$t.uniforms;let re=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(re.clippingPlanes=ne.uniform),Xl(T,$t),K.needsLights=Oh(T),K.lightsStateVersion=Ot,K.needsLights&&(re.ambientLightColor.value=Y.state.ambient,re.lightProbe.value=Y.state.probe,re.directionalLights.value=Y.state.directional,re.directionalLightShadows.value=Y.state.directionalShadow,re.spotLights.value=Y.state.spot,re.spotLightShadows.value=Y.state.spotShadow,re.rectAreaLights.value=Y.state.rectArea,re.ltc_1.value=Y.state.rectAreaLTC1,re.ltc_2.value=Y.state.rectAreaLTC2,re.pointLights.value=Y.state.point,re.pointLightShadows.value=Y.state.pointShadow,re.hemisphereLights.value=Y.state.hemi,re.directionalShadowMap.value=Y.state.directionalShadowMap,re.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,re.spotShadowMap.value=Y.state.spotShadowMap,re.spotLightMatrix.value=Y.state.spotLightMatrix,re.spotLightMap.value=Y.state.spotLightMap,re.pointShadowMap.value=Y.state.pointShadowMap,re.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=ie,K.uniformsList=null,ie}function Wl(T){if(T.uniformsList===null){let W=T.currentProgram.getUniforms();T.uniformsList=ca.seqWithValue(W.seq,T.uniforms)}return T.uniformsList}function Xl(T,W){let Z=Qt.get(T);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function ql(T,W,Z,K,Y){W.isScene!==!0&&(W=_e),C.resetTextureUnits();let Ct=W.fog,Ot=K.isMeshStandardMaterial?W.environment:null,$t=U===null?R.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Dr,ee=(K.isMeshStandardMaterial?q:b).get(K.envMap||Ot),ue=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ie=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),re=!!Z.morphAttributes.position,Ze=!!Z.morphAttributes.normal,kn=!!Z.morphAttributes.color,hn=us;K.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(hn=R.toneMapping);let Fi=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,We=Fi!==void 0?Fi.length:0,he=Qt.get(K),no=v.state.lights;if(Q===!0&&(ft===!0||T!==Mt)){let Hn=T===Mt&&K.id===ot;ne.setState(K,T,Hn)}let Xe=!1;K.version===he.__version?(he.needsLights&&he.lightsStateVersion!==no.state.version||he.outputColorSpace!==$t||Y.isBatchedMesh&&he.batching===!1||!Y.isBatchedMesh&&he.batching===!0||Y.isInstancedMesh&&he.instancing===!1||!Y.isInstancedMesh&&he.instancing===!0||Y.isSkinnedMesh&&he.skinning===!1||!Y.isSkinnedMesh&&he.skinning===!0||Y.isInstancedMesh&&he.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&he.instancingColor===!1&&Y.instanceColor!==null||he.envMap!==ee||K.fog===!0&&he.fog!==Ct||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==ne.numPlanes||he.numIntersection!==ne.numIntersection)||he.vertexAlphas!==ue||he.vertexTangents!==ie||he.morphTargets!==re||he.morphNormals!==Ze||he.morphColors!==kn||he.toneMapping!==hn||kt.isWebGL2===!0&&he.morphTargetsCount!==We)&&(Xe=!0):(Xe=!0,he.__version=K.version);let Bi=he.currentProgram;Xe===!0&&(Bi=eo(K,W,Y));let Yl=!1,Fr=!1,Br=!1,pn=Bi.getUniforms(),fr=he.uniforms;if(Ut.useProgram(Bi.program)&&(Yl=!0,Fr=!0,Br=!0),K.id!==ot&&(ot=K.id,Fr=!0),Yl||Mt!==T){pn.setValue(G,"projectionMatrix",T.projectionMatrix),pn.setValue(G,"viewMatrix",T.matrixWorldInverse);let Hn=pn.map.cameraPosition;Hn!==void 0&&Hn.setValue(G,It.setFromMatrixPosition(T.matrixWorld)),kt.logarithmicDepthBuffer&&pn.setValue(G,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&pn.setValue(G,"isOrthographic",T.isOrthographicCamera===!0),Mt!==T&&(Mt=T,Fr=!0,Br=!0)}if(Y.isSkinnedMesh){pn.setOptional(G,Y,"bindMatrix"),pn.setOptional(G,Y,"bindMatrixInverse");let Hn=Y.skeleton;Hn&&(kt.floatVertexTextures?(Hn.boneTexture===null&&Hn.computeBoneTexture(),pn.setValue(G,"boneTexture",Hn.boneTexture,C)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(pn.setOptional(G,Y,"batchingTexture"),pn.setValue(G,"batchingTexture",Y._matricesTexture,C));let io=Z.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0&&kt.isWebGL2===!0)&&oe.update(Y,Z,Bi),(Fr||he.receiveShadow!==Y.receiveShadow)&&(he.receiveShadow=Y.receiveShadow,pn.setValue(G,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(fr.envMap.value=ee,fr.flipEnvMap.value=ee.isCubeTexture&&ee.isRenderTargetTexture===!1?-1:1),Fr&&(pn.setValue(G,"toneMappingExposure",R.toneMappingExposure),he.needsLights&&Dh(fr,Br),Ct&&K.fog===!0&&xt.refreshFogUniforms(fr,Ct),xt.refreshMaterialUniforms(fr,K,ut,$,Tt),ca.upload(G,Wl(he),fr,C)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ca.upload(G,Wl(he),fr,C),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&pn.setValue(G,"center",Y.center),pn.setValue(G,"modelViewMatrix",Y.modelViewMatrix),pn.setValue(G,"normalMatrix",Y.normalMatrix),pn.setValue(G,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let Hn=K.uniformsGroups;for(let ms=0,Nh=Hn.length;ms<Nh;ms++)if(kt.isWebGL2){let wa=Hn[ms];O.update(wa,Bi),O.bind(wa,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function Dh(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function Oh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(T,W,Z){Qt.get(T.texture).__webglTexture=W,Qt.get(T.depthTexture).__webglTexture=Z;let K=Qt.get(T);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=Z===void 0,K.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,W){let Z=Qt.get(T);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,Z=0){U=T,z=W,B=Z;let K=!0,Y=null,Ct=!1,Ot=!1;if(T){let ee=Qt.get(T);ee.__useDefaultFramebuffer!==void 0?(Ut.bindFramebuffer(G.FRAMEBUFFER,null),K=!1):ee.__webglFramebuffer===void 0?C.setupRenderTarget(T):ee.__hasExternalTextures&&C.rebindTextures(T,Qt.get(T.texture).__webglTexture,Qt.get(T.depthTexture).__webglTexture);let ue=T.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(Ot=!0);let ie=Qt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ie[W])?Y=ie[W][Z]:Y=ie[W],Ct=!0):kt.isWebGL2&&T.samples>0&&C.useMultisampledRTT(T)===!1?Y=Qt.get(T).__webglMultisampledFramebuffer:Array.isArray(ie)?Y=ie[Z]:Y=ie,w.copy(T.viewport),N.copy(T.scissor),st=T.scissorTest}else w.copy(at).multiplyScalar(ut).floor(),N.copy(yt).multiplyScalar(ut).floor(),st=bt;if(Ut.bindFramebuffer(G.FRAMEBUFFER,Y)&&kt.drawBuffers&&K&&Ut.drawBuffers(T,Y),Ut.viewport(w),Ut.scissor(N),Ut.setScissorTest(st),Ct){let ee=Qt.get(T.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,ee.__webglTexture,Z)}else if(Ot){let ee=Qt.get(T.texture),ue=W||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ee.__webglTexture,Z||0,ue)}ot=-1},this.readRenderTargetPixels=function(T,W,Z,K,Y,Ct,Ot){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $t=Qt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ot!==void 0&&($t=$t[Ot]),$t){Ut.bindFramebuffer(G.FRAMEBUFFER,$t);try{let ee=T.texture,ue=ee.format,ie=ee.type;if(ue!==gi&&At.convert(ue)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let re=ie===qs&&(Ht.has("EXT_color_buffer_half_float")||kt.isWebGL2&&Ht.has("EXT_color_buffer_float"));if(ie!==hs&&At.convert(ie)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ie===Pr&&(kt.isWebGL2||Ht.has("OES_texture_float")||Ht.has("WEBGL_color_buffer_float")))&&!re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-K&&Z>=0&&Z<=T.height-Y&&G.readPixels(W,Z,K,Y,At.convert(ue),At.convert(ie),Ct)}finally{let ee=U!==null?Qt.get(U).__webglFramebuffer:null;Ut.bindFramebuffer(G.FRAMEBUFFER,ee)}}},this.copyFramebufferToTexture=function(T,W,Z=0){let K=Math.pow(2,-Z),Y=Math.floor(W.image.width*K),Ct=Math.floor(W.image.height*K);C.setTexture2D(W,0),G.copyTexSubImage2D(G.TEXTURE_2D,Z,0,0,T.x,T.y,Y,Ct),Ut.unbindTexture()},this.copyTextureToTexture=function(T,W,Z,K=0){let Y=W.image.width,Ct=W.image.height,Ot=At.convert(Z.format),$t=At.convert(Z.type);C.setTexture2D(Z,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Z.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Z.unpackAlignment),W.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,K,T.x,T.y,Y,Ct,Ot,$t,W.image.data):W.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,K,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,Ot,W.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,K,T.x,T.y,Ot,$t,W.image),K===0&&Z.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ut.unbindTexture()},this.copyTextureToTexture3D=function(T,W,Z,K,Y=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Ct=T.max.x-T.min.x+1,Ot=T.max.y-T.min.y+1,$t=T.max.z-T.min.z+1,ee=At.convert(K.format),ue=At.convert(K.type),ie;if(K.isData3DTexture)C.setTexture3D(K,0),ie=G.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)C.setTexture2DArray(K,0),ie=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);let re=G.getParameter(G.UNPACK_ROW_LENGTH),Ze=G.getParameter(G.UNPACK_IMAGE_HEIGHT),kn=G.getParameter(G.UNPACK_SKIP_PIXELS),hn=G.getParameter(G.UNPACK_SKIP_ROWS),Fi=G.getParameter(G.UNPACK_SKIP_IMAGES),We=Z.isCompressedTexture?Z.mipmaps[Y]:Z.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,We.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,We.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,T.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,T.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,T.min.z),Z.isDataTexture||Z.isData3DTexture?G.texSubImage3D(ie,Y,W.x,W.y,W.z,Ct,Ot,$t,ee,ue,We.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(ie,Y,W.x,W.y,W.z,Ct,Ot,$t,ee,We.data)):G.texSubImage3D(ie,Y,W.x,W.y,W.z,Ct,Ot,$t,ee,ue,We),G.pixelStorei(G.UNPACK_ROW_LENGTH,re),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ze),G.pixelStorei(G.UNPACK_SKIP_PIXELS,kn),G.pixelStorei(G.UNPACK_SKIP_ROWS,hn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Fi),Y===0&&K.generateMipmaps&&G.generateMipmap(ie),Ut.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?C.setTextureCube(T,0):T.isData3DTexture?C.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?C.setTexture2DArray(T,0):C.setTexture2D(T,0),Ut.unbindTexture()},this.resetState=function(){z=0,B=0,U=null,Ut.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Im?"display-p3":"srgb",e.unpackColorSpace=Be.workingColorSpace===_h?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dn?Ws:Lx}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ws?Dn:Dr}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},gm=class extends Dl{};gm.prototype.isWebGL1Renderer=!0;var ch=class extends ur{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},_m=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Lr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Xs("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Lr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$n=new X,uh=class n{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)$n.fromBufferAttribute(this,e),$n.applyMatrix4(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)$n.fromBufferAttribute(this,e),$n.applyNormalMatrix(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)$n.fromBufferAttribute(this,e),$n.transformDirection(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ji(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ji(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ji(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ji(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ji(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),r=Ue(r,this.array),o=Ue(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return new _i(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ol=class extends fs{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ea,Ml=new X,na=new X,ia=new X,ra=new Wt,bl=new Wt,Xx=new yn,zu=new X,wl=new X,ku=new X,yx=new Wt,Wp=new Wt,xx=new Wt,hh=class extends ur{constructor(t=new Ol){if(super(),this.isSprite=!0,this.type="Sprite",ea===void 0){ea=new Qi;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _m(e,5);ea.setIndex([0,1,2,0,2,3]),ea.setAttribute("position",new uh(i,3,0,!1)),ea.setAttribute("uv",new uh(i,2,3,!1))}this.geometry=ea,this.material=t,this.center=new Wt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),na.setFromMatrixScale(this.matrixWorld),Xx.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ia.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&na.multiplyScalar(-ia.z);let i=this.material.rotation,r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));let l=this.center;Hu(zu.set(-.5,-.5,0),ia,l,na,r,o),Hu(wl.set(.5,-.5,0),ia,l,na,r,o),Hu(ku.set(.5,.5,0),ia,l,na,r,o),yx.set(0,0),Wp.set(1,0),xx.set(1,1);let c=t.ray.intersectTriangle(zu,wl,ku,!1,Ml);if(c===null&&(Hu(wl.set(-.5,.5,0),ia,l,na,r,o),Wp.set(0,1),c=t.ray.intersectTriangle(zu,ku,wl,!1,Ml),c===null))return;let h=t.ray.origin.distanceTo(Ml);h<t.near||h>t.far||e.push({distance:h,point:Ml.clone(),uv:Hs.getInterpolation(Ml,zu,wl,ku,yx,Wp,xx,new Wt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Hu(n,t,e,i,r,o){ra.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(bl.x=o*ra.x-r*ra.y,bl.y=r*ra.x+o*ra.y):bl.copy(ra),n.copy(t),n.x+=bl.x,n.y+=bl.y,n.applyMatrix4(Xx)}var Or=class n extends Qi{constructor(t=1,e=32,i=16,r=0,o=Math.PI*2,l=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:o,thetaStart:l,thetaLength:c},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let h=Math.min(l+c,Math.PI),d=0,p=[],m=new X,_=new X,y=[],S=[],A=[],v=[];for(let g=0;g<=i;g++){let I=[],R=g/i,D=0;g===0&&l===0?D=.5/e:g===i&&h===Math.PI&&(D=-.5/e);for(let z=0;z<=e;z++){let B=z/e;m.x=-t*Math.cos(r+B*o)*Math.sin(l+R*c),m.y=t*Math.cos(l+R*c),m.z=t*Math.sin(r+B*o)*Math.sin(l+R*c),S.push(m.x,m.y,m.z),_.copy(m).normalize(),A.push(_.x,_.y,_.z),v.push(B+D,1-R),I.push(d++)}p.push(I)}for(let g=0;g<i;g++)for(let I=0;I<e;I++){let R=p[g][I+1],D=p[g][I],z=p[g+1][I],B=p[g+1][I+1];(g!==0||l>0)&&y.push(R,D,B),(g!==i-1||h<Math.PI)&&y.push(D,z,B)}this.setIndex(y),this.setAttribute("position",new Jn(S,3)),this.setAttribute("normal",new Jn(A,3)),this.setAttribute("uv",new Jn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var _a=class extends fs{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dx,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vu(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function AN(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var va=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],o=e[i-1];t:{e:{let l;n:{i:if(!(t<r)){for(let c=i+2;;){if(r===void 0){if(t<o)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(o=r,r=e[++i],t<r)break e}l=e.length;break n}if(!(t>=o)){let c=e[1];t<c&&(i=2,o=c);for(let h=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(r=o,o=e[--i-1],t>=o)break e}l=i,i=0;break n}break t}for(;i<l;){let c=i+l>>>1;t<e[c]?l=c:i=c+1}if(r=e[i],o=e[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let l=0;l!==r;++l)e[l]=i[o+l];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},vm=class extends va{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cy,endingEnd:Cy}}intervalChanged_(t,e,i){let r=this.parameterPositions,o=t-2,l=t+1,c=r[o],h=r[l];if(c===void 0)switch(this.getSettings_().endingStart){case Ry:o=t,c=2*e-i;break;case Py:o=r.length-2,c=e+r[o]-r[o+1];break;default:o=t,c=i}if(h===void 0)switch(this.getSettings_().endingEnd){case Ry:l=t,h=2*i-e;break;case Py:l=1,h=i+r[1]-r[0];break;default:l=t-1,h=e}let d=(i-e)*.5,p=this.valueSize;this._weightPrev=d/(e-c),this._weightNext=d/(h-i),this._offsetPrev=o*p,this._offsetNext=l*p}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=t*c,d=h-c,p=this._offsetPrev,m=this._offsetNext,_=this._weightPrev,y=this._weightNext,S=(i-e)/(r-e),A=S*S,v=A*S,g=-_*v+2*_*A-_*S,I=(1+_)*v+(-1.5-2*_)*A+(-.5+_)*S+1,R=(-1-y)*v+(1.5+y)*A+.5*S,D=y*v-y*A;for(let z=0;z!==c;++z)o[z]=g*l[p+z]+I*l[d+z]+R*l[h+z]+D*l[m+z];return o}},ym=class extends va{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=t*c,d=h-c,p=(i-e)/(r-e),m=1-p;for(let _=0;_!==c;++_)o[_]=l[d+_]*m+l[h+_]*p;return o}},xm=class extends va{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},tr=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vu(e,this.TimeBufferType),this.values=Vu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Vu(t.times,Array),values:Vu(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new xm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ym(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new vm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Wu:e=this.InterpolantFactoryMethodDiscrete;break;case Xu:e=this.InterpolantFactoryMethodLinear;break;case Sp:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wu;case this.InterpolantFactoryMethodLinear:return Xu;case this.InterpolantFactoryMethodSmooth:return Sp}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t}return this}trim(t,e){let i=this.times,r=i.length,o=0,l=r-1;for(;o!==r&&i[o]<t;)++o;for(;l!==-1&&i[l]>e;)--l;if(++l,o!==0||l!==r){o>=l&&(l=Math.max(l,1),o=l-1);let c=this.getValueSize();this.times=i.slice(o,l),this.values=this.values.slice(o*c,l*c)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let l=null;for(let c=0;c!==o;c++){let h=i[c];if(typeof h=="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,h),t=!1;break}if(l!==null&&l>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,h,l),t=!1;break}l=h}if(r!==void 0&&AN(r))for(let c=0,h=r.length;c!==h;++c){let d=r[c];if(isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,d),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Sp,o=t.length-1,l=1;for(let c=1;c<o;++c){let h=!1,d=t[c],p=t[c+1];if(d!==p&&(c!==1||d!==t[0]))if(r)h=!0;else{let m=c*i,_=m-i,y=m+i;for(let S=0;S!==i;++S){let A=e[m+S];if(A!==e[_+S]||A!==e[y+S]){h=!0;break}}}if(h){if(c!==l){t[l]=t[c];let m=c*i,_=l*i;for(let y=0;y!==i;++y)e[_+y]=e[m+y]}++l}}if(o>0){t[l]=t[o];for(let c=o*i,h=l*i,d=0;d!==i;++d)e[h+d]=e[c+d];++l}return l!==t.length?(this.times=t.slice(0,l),this.values=e.slice(0,l*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};tr.prototype.TimeBufferType=Float32Array;tr.prototype.ValueBufferType=Float32Array;tr.prototype.DefaultInterpolation=Xu;var $s=class extends tr{};$s.prototype.ValueTypeName="bool";$s.prototype.ValueBufferType=Array;$s.prototype.DefaultInterpolation=Wu;$s.prototype.InterpolantFactoryMethodLinear=void 0;$s.prototype.InterpolantFactoryMethodSmooth=void 0;var Sm=class extends tr{};Sm.prototype.ValueTypeName="color";var Mm=class extends tr{};Mm.prototype.ValueTypeName="number";var bm=class extends va{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let o=this.resultBuffer,l=this.sampleValues,c=this.valueSize,h=(i-e)/(r-e),d=t*c;for(let p=d+c;d!==p;d+=4)Ji.slerpFlat(o,0,l,d-c,l,d,h);return o}},Nl=class extends tr{InterpolantFactoryMethodLinear(t){return new bm(this.times,this.values,this.getValueSize(),t)}};Nl.prototype.ValueTypeName="quaternion";Nl.prototype.DefaultInterpolation=Xu;Nl.prototype.InterpolantFactoryMethodSmooth=void 0;var Zs=class extends tr{};Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=Wu;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var wm=class extends tr{};wm.prototype.ValueTypeName="vector";var dh=class extends ur{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var Xp=new yn,Sx=new X,Mx=new X,Em=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new yn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ll,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new Tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Sx.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sx),Mx.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Mx),e.updateMatrixWorld(),Xp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Am=class extends Em{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fh=class extends dh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ur.DEFAULT_UP),this.updateMatrix(),this.target=new ur,this.shadow=new Am}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ph=class extends dh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var mh=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bx(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=bx();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function bx(){return(typeof performance>"u"?Date:performance).now()}var Nm="\\[\\]\\.:\\/",TN=new RegExp("["+Nm+"]","g"),Um="[^"+Nm+"]",CN="[^"+Nm.replace("\\.","")+"]",RN=/((?:WC+[\/:])*)/.source.replace("WC",Um),PN=/(WCOD+)?/.source.replace("WCOD",CN),IN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Um),LN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Um),DN=new RegExp("^"+RN+PN+IN+LN+"$"),ON=["material","materials","bones","map"],Tm=class{constructor(t,e,i){let r=i||un.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},un=(()=>{class n{constructor(e,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,r){return e&&e.isAnimationObjectGroup?new n.Composite(e,i,r):new n(e,i,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(TN,"")}static parseTrackName(e){let i=DN.exec(e);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},o=r.nodeName&&r.nodeName.lastIndexOf(".");if(o!==void 0&&o!==-1){let l=r.nodeName.substring(o+1);ON.indexOf(l)!==-1&&(r.nodeName=r.nodeName.substring(0,o),r.objectName=l)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(i);if(r!==void 0)return r}if(e.children){let r=function(l){for(let c=0;c<l.length;c++){let h=l[c];if(h.name===i||h.uuid===i)return h;let d=r(h.children);if(d)return d}return null},o=r(e.children);if(o)return o}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let r=this.resolvedProperty;for(let o=0,l=r.length;o!==l;++o)e[i++]=r[o]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let r=this.resolvedProperty;for(let o=0,l=r.length;o!==l;++o)r[o]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let r=this.resolvedProperty;for(let o=0,l=r.length;o!==l;++o)r[o]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let r=this.resolvedProperty;for(let o=0,l=r.length;o!==l;++o)r[o]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,r=i.objectName,o=i.propertyName,l=i.propertyIndex;if(e||(e=n.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let p=i.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===p){p=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(p!==void 0){if(e[p]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[p]}}let c=e[o];if(c===void 0){let p=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+p+"."+o+" but it wasn't found.",e);return}let h=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?h=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(h=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(l!==void 0){if(o==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[l]!==void 0&&(l=e.morphTargetDictionary[l])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=l}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=o;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][h]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Tm,n})();un.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};un.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};un.prototype.GetterByBindingType=[un.prototype._getValue_direct,un.prototype._getValue_array,un.prototype._getValue_arrayElement,un.prototype._getValue_toArray];un.prototype.SetterByBindingTypeAndVersioning=[[un.prototype._setValue_direct,un.prototype._setValue_direct_setNeedsUpdate,un.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[un.prototype._setValue_array,un.prototype._setValue_array_setNeedsUpdate,un.prototype._setValue_array_setMatrixWorldNeedsUpdate],[un.prototype._setValue_arrayElement,un.prototype._setValue_arrayElement_setNeedsUpdate,un.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[un.prototype._setValue_fromArray,un.prototype._setValue_fromArray_setNeedsUpdate,un.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eF=new Float32Array(1);var Ul=class{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Bn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cm);var qx={type:"change"},Fm={type:"start"},Yx={type:"end"},yh=new Pl,$x=new $i,UN=Math.cos(70*Nx.DEG2RAD),xh=class extends cr{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:js.ROTATE,MIDDLE:js.DOLLY,RIGHT:js.PAN},this.touches={ONE:Ks.ROTATE,TWO:Ks.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",Vt),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Vt),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(qx),i.update(),o=r.NONE},this.update=function(){let O=new X,vt=new Ji().setFromUnitVectors(t.up,new X(0,1,0)),wt=vt.clone().invert(),zt=new X,P=new Ji,gt=new X,dt=2*Math.PI;return function(Gt=null){let Te=i.object.position;O.copy(Te).sub(i.target),O.applyQuaternion(vt),c.setFromVector3(O),i.autoRotate&&o===r.NONE&&st(w(Gt)),i.enableDamping?(c.theta+=h.theta*i.dampingFactor,c.phi+=h.phi*i.dampingFactor):(c.theta+=h.theta,c.phi+=h.phi);let xe=i.minAzimuthAngle,De=i.maxAzimuthAngle;isFinite(xe)&&isFinite(De)&&(xe<-Math.PI?xe+=dt:xe>Math.PI&&(xe-=dt),De<-Math.PI?De+=dt:De>Math.PI&&(De-=dt),xe<=De?c.theta=Math.max(xe,Math.min(De,c.theta)):c.theta=c.theta>(xe+De)/2?Math.max(xe,c.theta):Math.min(De,c.theta)),c.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,c.phi)),c.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&B||i.object.isOrthographicCamera?c.radius=at(c.radius):c.radius=at(c.radius*d),O.setFromSpherical(c),O.applyQuaternion(wt),Te.copy(i.target).add(O),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),p.set(0,0,0));let sn=!1;if(i.zoomToCursor&&B){let Ce=null;if(i.object.isPerspectiveCamera){let Ge=O.length();Ce=at(Ge*d);let Cn=Ge-Ce;i.object.position.addScaledVector(D,Cn),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){let Ge=new X(z.x,z.y,0);Ge.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix(),sn=!0;let Cn=new X(z.x,z.y,0);Cn.unproject(i.object),i.object.position.sub(Cn).add(Ge),i.object.updateMatrixWorld(),Ce=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Ce!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Ce).add(i.object.position):(yh.origin.copy(i.object.position),yh.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(yh.direction))<UN?t.lookAt(i.target):($x.setFromNormalAndCoplanarPoint(i.object.up,i.target),yh.intersectPlane($x,i.target))))}else i.object.isOrthographicCamera&&(sn=d!==1,sn&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/d)),i.object.updateProjectionMatrix()));return d=1,B=!1,sn||zt.distanceToSquared(i.object.position)>l||8*(1-P.dot(i.object.quaternion))>l||gt.distanceToSquared(i.target)>0?(i.dispatchEvent(qx),zt.copy(i.object.position),P.copy(i.object.quaternion),gt.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ee),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",q),i.domElement.removeEventListener("wheel",pt),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",q),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Vt),i._domElementKeyEvents=null)};let i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},o=r.NONE,l=1e-6,c=new Ul,h=new Ul,d=1,p=new X,m=new Wt,_=new Wt,y=new Wt,S=new Wt,A=new Wt,v=new Wt,g=new Wt,I=new Wt,R=new Wt,D=new X,z=new Wt,B=!1,U=[],ot={},Mt=!1;function w(O){return O!==null?2*Math.PI/60*i.autoRotateSpeed*O:2*Math.PI/60/60*i.autoRotateSpeed}function N(O){let vt=Math.abs(O*.01);return Math.pow(.95,i.zoomSpeed*vt)}function st(O){h.theta-=O}function mt(O){h.phi-=O}let H=function(){let O=new X;return function(wt,zt){O.setFromMatrixColumn(zt,0),O.multiplyScalar(-wt),p.add(O)}}(),J=function(){let O=new X;return function(wt,zt){i.screenSpacePanning===!0?O.setFromMatrixColumn(zt,1):(O.setFromMatrixColumn(zt,0),O.crossVectors(i.object.up,O)),O.multiplyScalar(wt),p.add(O)}}(),$=function(){let O=new X;return function(wt,zt){let P=i.domElement;if(i.object.isPerspectiveCamera){let gt=i.object.position;O.copy(gt).sub(i.target);let dt=O.length();dt*=Math.tan(i.object.fov/2*Math.PI/180),H(2*wt*dt/P.clientHeight,i.object.matrix),J(2*zt*dt/P.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(H(wt*(i.object.right-i.object.left)/i.object.zoom/P.clientWidth,i.object.matrix),J(zt*(i.object.top-i.object.bottom)/i.object.zoom/P.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ut(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function et(O){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?d*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function it(O,vt){if(!i.zoomToCursor)return;B=!0;let wt=i.domElement.getBoundingClientRect(),zt=O-wt.left,P=vt-wt.top,gt=wt.width,dt=wt.height;z.x=zt/gt*2-1,z.y=-(P/dt)*2+1,D.set(z.x,z.y,1).unproject(i.object).sub(i.object.position).normalize()}function at(O){return Math.max(i.minDistance,Math.min(i.maxDistance,O))}function yt(O){m.set(O.clientX,O.clientY)}function bt(O){it(O.clientX,O.clientX),g.set(O.clientX,O.clientY)}function Xt(O){S.set(O.clientX,O.clientY)}function Q(O){_.set(O.clientX,O.clientY),y.subVectors(_,m).multiplyScalar(i.rotateSpeed);let vt=i.domElement;st(2*Math.PI*y.x/vt.clientHeight),mt(2*Math.PI*y.y/vt.clientHeight),m.copy(_),i.update()}function ft(O){I.set(O.clientX,O.clientY),R.subVectors(I,g),R.y>0?ut(N(R.y)):R.y<0&&et(N(R.y)),g.copy(I),i.update()}function Tt(O){A.set(O.clientX,O.clientY),v.subVectors(A,S).multiplyScalar(i.panSpeed),$(v.x,v.y),S.copy(A),i.update()}function Bt(O){it(O.clientX,O.clientY),O.deltaY<0?et(N(O.deltaY)):O.deltaY>0&&ut(N(O.deltaY)),i.update()}function qt(O){let vt=!1;switch(O.code){case i.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?mt(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),vt=!0;break;case i.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?mt(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),vt=!0;break;case i.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?st(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),vt=!0;break;case i.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?st(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),vt=!0;break}vt&&(O.preventDefault(),i.update())}function It(O){if(U.length===1)m.set(O.pageX,O.pageY);else{let vt=At(O),wt=.5*(O.pageX+vt.x),zt=.5*(O.pageY+vt.y);m.set(wt,zt)}}function _e(O){if(U.length===1)S.set(O.pageX,O.pageY);else{let vt=At(O),wt=.5*(O.pageX+vt.x),zt=.5*(O.pageY+vt.y);S.set(wt,zt)}}function te(O){let vt=At(O),wt=O.pageX-vt.x,zt=O.pageY-vt.y,P=Math.sqrt(wt*wt+zt*zt);g.set(0,P)}function G(O){i.enableZoom&&te(O),i.enablePan&&_e(O)}function Ve(O){i.enableZoom&&te(O),i.enableRotate&&It(O)}function Ht(O){if(U.length==1)_.set(O.pageX,O.pageY);else{let wt=At(O),zt=.5*(O.pageX+wt.x),P=.5*(O.pageY+wt.y);_.set(zt,P)}y.subVectors(_,m).multiplyScalar(i.rotateSpeed);let vt=i.domElement;st(2*Math.PI*y.x/vt.clientHeight),mt(2*Math.PI*y.y/vt.clientHeight),m.copy(_)}function kt(O){if(U.length===1)A.set(O.pageX,O.pageY);else{let vt=At(O),wt=.5*(O.pageX+vt.x),zt=.5*(O.pageY+vt.y);A.set(wt,zt)}v.subVectors(A,S).multiplyScalar(i.panSpeed),$(v.x,v.y),S.copy(A)}function Ut(O){let vt=At(O),wt=O.pageX-vt.x,zt=O.pageY-vt.y,P=Math.sqrt(wt*wt+zt*zt);I.set(0,P),R.set(0,Math.pow(I.y/g.y,i.zoomSpeed)),ut(R.y),g.copy(I);let gt=(O.pageX+vt.x)*.5,dt=(O.pageY+vt.y)*.5;it(gt,dt)}function ze(O){i.enableZoom&&Ut(O),i.enablePan&&kt(O)}function Qt(O){i.enableZoom&&Ut(O),i.enableRotate&&Ht(O)}function C(O){i.enabled!==!1&&(U.length===0&&(i.domElement.setPointerCapture(O.pointerId),i.domElement.addEventListener("pointermove",b),i.domElement.addEventListener("pointerup",q)),oe(O),O.pointerType==="touch"?ne(O):_t(O))}function b(O){i.enabled!==!1&&(O.pointerType==="touch"?ht(O):lt(O))}function q(O){switch(Kt(O),U.length){case 0:i.domElement.releasePointerCapture(O.pointerId),i.domElement.removeEventListener("pointermove",b),i.domElement.removeEventListener("pointerup",q),i.dispatchEvent(Yx),o=r.NONE;break;case 1:let vt=U[0],wt=ot[vt];ne({pointerId:vt,pageX:wt.x,pageY:wt.y});break}}function _t(O){let vt;switch(O.button){case 0:vt=i.mouseButtons.LEFT;break;case 1:vt=i.mouseButtons.MIDDLE;break;case 2:vt=i.mouseButtons.RIGHT;break;default:vt=-1}switch(vt){case js.DOLLY:if(i.enableZoom===!1)return;bt(O),o=r.DOLLY;break;case js.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enablePan===!1)return;Xt(O),o=r.PAN}else{if(i.enableRotate===!1)return;yt(O),o=r.ROTATE}break;case js.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(i.enableRotate===!1)return;yt(O),o=r.ROTATE}else{if(i.enablePan===!1)return;Xt(O),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Fm)}function lt(O){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;Q(O);break;case r.DOLLY:if(i.enableZoom===!1)return;ft(O);break;case r.PAN:if(i.enablePan===!1)return;Tt(O);break}}function pt(O){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(O.preventDefault(),i.dispatchEvent(Fm),Bt(Lt(O)),i.dispatchEvent(Yx))}function Lt(O){let vt=O.deltaMode,wt={clientX:O.clientX,clientY:O.clientY,deltaY:O.deltaY};switch(vt){case 1:wt.deltaY*=16;break;case 2:wt.deltaY*=100;break}return O.ctrlKey&&!Mt&&(wt.deltaY*=10),wt}function xt(O){O.key==="Control"&&(Mt=!0,i.domElement.getRootNode().addEventListener("keyup",Rt,{passive:!0,capture:!0}))}function Rt(O){O.key==="Control"&&(Mt=!1,i.domElement.getRootNode().removeEventListener("keyup",Rt,{passive:!0,capture:!0}))}function Vt(O){i.enabled===!1||i.enablePan===!1||qt(O)}function ne(O){switch(Ft(O),U.length){case 1:switch(i.touches.ONE){case Ks.ROTATE:if(i.enableRotate===!1)return;It(O),o=r.TOUCH_ROTATE;break;case Ks.PAN:if(i.enablePan===!1)return;_e(O),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case Ks.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;G(O),o=r.TOUCH_DOLLY_PAN;break;case Ks.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ve(O),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Fm)}function ht(O){switch(Ft(O),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ht(O),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;kt(O),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;ze(O),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Qt(O),i.update();break;default:o=r.NONE}}function Ee(O){i.enabled!==!1&&O.preventDefault()}function oe(O){U.push(O.pointerId)}function Kt(O){delete ot[O.pointerId];for(let vt=0;vt<U.length;vt++)if(U[vt]==O.pointerId){U.splice(vt,1);return}}function Ft(O){let vt=ot[O.pointerId];vt===void 0&&(vt=new Wt,ot[O.pointerId]=vt),vt.set(O.pageX,O.pageY)}function At(O){let vt=O.pointerId===U[0]?U[1]:U[0];return ot[vt]}i.domElement.addEventListener("contextmenu",Ee),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",q),i.domElement.addEventListener("wheel",pt,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",xt,{passive:!0,capture:!0}),this.update()}};var Zx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ur=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},FN=new ga(-1,1,1,-1,0,1),Bm=class extends Qi{constructor(){super(),this.setAttribute("position",new Jn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Jn([0,2,0,0,2,0],2))}},BN=new Bm,Sh=class{constructor(t){this._mesh=new fn(BN,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,FN)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var xa=class extends Ur{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Qn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Dm.clone(t.uniforms),this.material=new Qn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Sh(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Fl=class extends Ur{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let r=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let l,c;this.inverse?(l=0,c=1):(l=1,c=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,l,4294967295),o.buffers.stencil.setClear(c),o.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}},Mh=class extends Ur{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var bh=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new Wt);this._width=i.width,this._height=i.height,e=new vi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qs}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new xa(Zx),this.copyPass.material.blending=lr,this.clock=new mh}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let r=0,o=this.passes.length;r<o;r++){let l=this.passes[r];if(l.enabled!==!1){if(l.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),l.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),l.needsSwap){if(i){let c=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(c.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),h.setFunc(c.EQUAL,1,4294967295)}this.swapBuffers()}Fl!==void 0&&(l instanceof Fl?i=!0:l instanceof Mh&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Wt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var wh=class extends Ur{constructor(t,e,i=null,r=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(t,e,i){let r=t.autoClear;t.autoClear=!1;let o,l;this.overrideMaterial!==null&&(l=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=l),t.autoClear=r}};var zN=["varying vec3 vNormal;","void main() {","vNormal = normalize( normalMatrix * normal );","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),kN=["uniform float c;","uniform float p;","varying vec3 vNormal;","void main() {","float intensity = pow( c - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), p );","gl_FragColor = vec4( 0.2, 0.58, 0.9, 0.3 ) * intensity;","}"].join(`
`),jx={uniforms:{tSampler1:{type:"t",value:null},tSampler2:{type:"t",value:null}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`),fragmentShader:["uniform sampler2D tSampler1;","uniform sampler2D tSampler2;","varying vec2 vUv;","void main() {","vec4 texture1 = texture2D( tSampler1, vUv );","vec4 texture2 = texture2D( tSampler2, vUv );","gl_FragColor = texture1 + texture2;","}"].join(`
`)};function Kx(){let n=new Ki;return n.add(VN()),n.add(HN()),n}function HN(){let n=new Or(5,40,40),t=new pa({color:0}),e=new fn(n,t);return e.material.transparent=!1,e.scale.set(.99,.99,.99),e}function VN(){let n=new Or(5,40,40),t=GN(),e=new fn(n,t);return e.material.transparent=!1,e.scale.set(1.5,1.5,1.5),e}function GN(){let n={c:{type:"f",value:.34},p:{type:"f",value:9}};return new Qn({uniforms:n,vertexShader:zN,fragmentShader:kN,blending:ua,side:zn})}function Jx(){return new ph(4210752,.2)}function Qx(){let n=new fh(16777215,3);return n.position.set(5,3,5),n}function ps(n){let t=Bo.RES&&Bo.RES[n]?Bo.RES[n].data:null;if(t){let e=new Nr(t);return e.needsUpdate=!0,e}else return null}function tS(){return new fn(new Or(5,32,32),new _a({map:ps("earthTextureImage"),bumpMap:ps("earthBumpImage"),bumpScale:.15,specularMap:ps("earthSpecImage"),specular:new ye("#909090"),shininess:5,transparent:!0}))}function eS(){return new fn(new Or(5.2,40,40),new _a({map:ps("earthCloudImage"),transparent:!0,opacity:1,blending:ua}))}function nS(n){let t=new Ol({map:ps(n.imageName),color:16777215,fog:!0}),e=new hh(t);return e.position.set(n.dotPosition[0],n.dotPosition[1],n.dotPosition[2]),e.scale.set(1.4,1.4,1.4),e}var Eh=class{constructor(t){this._width=Fo.WIDTH*2,this._height=Fo.HEIGHT*2,this._autoRotate=!0,this._rotationSpeed=.001,this._cloudSpeed=3e-4,this._container=typeof t=="string"?document.getElementById(t):t,this._init()}_init(){this._buildRenderer(),this._buildScene(),this._buildCamera(),this._buildLight(),this._buildEarth(),this._buildCloud(),this._buildSpots(),this._buildAtmosphere(),this._buildRenderComposer(),this._createController(),this._loop()}_buildRenderer(){let t=new Dl({alpha:!0,antialias:!0,preserveDrawingBuffer:!0});t.setClearColor(0,0),t.setPixelRatio(window.devicePixelRatio),t.setSize(this._width,this._height),t.domElement.style.position="relative",t.domElement.style.width=this._width/2+"px",t.domElement.style.height=this._height/2+"px",this._container.appendChild(t.domElement),this._renderer=t}_buildScene(){this._scene=new ch,this._earthGroup=new Ki,this._locationGroup=new Ki,this._scene.add(this._earthGroup),this._earthGroup.add(this._locationGroup),this._earthGroup.layers.set(1)}_buildCamera(){let t=new Kn(40,this._width/this._height,.1,1e3);t.position.set(3.55,0,-328),this._scene&&(this._scene.add(t),this._camera=t)}_buildLight(){this._scene.add(Jx());let t=Qx();this._camera.add(t),t.target=this._camera}_buildEarth(){let t=tS();t.layers.set(0),this._earthGroup.add(t)}_buildCloud(){this._cloud=eS(),this._earthGroup.add(this._cloud)}_buildSpots(){gl.forEach(t=>{let e=nS(t);this._locationGroup.add(e)})}_buildAtmosphere(){let t=Kx();this._earthGroup.add(t)}_buildRenderComposer(){let t=new vi(this._width,this._height,{minFilter:Ln,magFilter:Ln,format:gi,stencilBuffer:!0}),e=new wh(this._scene,this._camera);this._sceneComposer=new bh(this._renderer,t),this._sceneComposer.addPass(e);let i=new xa(jx,"tSampler1");i.renderToScreen=!0,this._sceneComposer.addPass(i)}_createController(){let t=new xh(this._camera,this._renderer.domElement);t.enableZoom=!1,t.enablePan=!0,t.enabled=!0,t.enableDamping=!1,t.target.set(0,0,0),this._controller=t,t.update()}_loop(){this._animate(),this._render(),requestAnimationFrame(this._loop.bind(this))}_animate(){let t=this._rotationSpeed,e=this._cloudSpeed;this._autoRotate&&(this._camera.position.x=this._camera.position.x*Math.cos(t)-this._camera.position.z*Math.sin(t),this._camera.position.z=this._camera.position.z*Math.cos(t)+this._camera.position.x*Math.sin(t)),this._cloud.rotation.y-=e,this._controller.update()}_render(){this._sceneComposer.render(this._scene,this._camera)}setCameraPosition(){arguments.length===3?this._camera.position.set(arguments[0],arguments[1],arguments[2]):this._camera.position.set(arguments[0].x,arguments[0].y,arguments[0].z)}getCameraPosition(){return{x:this._camera.position.x,y:this._camera.position.y,z:this._camera.position.z}}rotateGlobe(t){this._earthGroup.rotation.y=t}};var XN=["map"],qN=n=>({"center-position":n}),iS=(()=>{let t=class t{constructor(){this.bannerActive=!1}ngOnInit(){this.earth=new Eh(this.map.nativeElement)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=Ke({type:t,selectors:[["app-earth"]],viewQuery:function(r,o){if(r&1&&wn(XN,7),r&2){let l;_n(l=vn())&&(o.map=l.first)}},inputs:{bannerActive:"bannerActive"},standalone:!0,features:[en],decls:3,vars:3,consts:[[1,"earth"],[1,"map",3,"ngClass"],["map",""]],template:function(r,o){r&1&&(Ne(0,"div",0),Ie(1,"div",1,2),tn()),r&2&&(Qe(),cn("ngClass",Jr(1,qN,o.bannerActive)))},dependencies:[Xc],styles:[".earth[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;height:100%;z-index:1}.map[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;transform:translateY(-40px);transition:transform 1s ease}.map.center-position[_ngcontent-%COMP%]{transform:translateY(10px)}"]});let n=t;return n})();var Js=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var t=1.70158;return n===1?1:n*n*((t+1)*n-t)},Out:function(n){var t=1.70158;return n===0?0:--n*n*((t+1)*n+t)+1},InOut:function(n){var t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Js.Bounce.Out(1-n)},Out:function(n){return n<.36363636363636365?7.5625*n*n:n<.7272727272727273?7.5625*(n-=.5454545454545454)*n+.75:n<.9090909090909091?7.5625*(n-=.8181818181818182)*n+.9375:7.5625*(n-=.9545454545454546)*n+.984375},InOut:function(n){return n<.5?Js.Bounce.In(n*2)*.5:Js.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(t){return Math.pow(t,n)},Out:function(t){return 1-Math.pow(1-t,n)},InOut:function(t){return t<.5?Math.pow(t*2,n)/2:(1-Math.pow(2-t*2,n))/2+.5}}}}),Bl=function(){return performance.now()},YN=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},n.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},n.prototype.update=function(t,e){t===void 0&&(t=Bl()),e===void 0&&(e=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var o=this._tweens[i[r]],l=!e;o&&o.update(t,l)===!1&&!e&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Sa={Linear:function(n,t){var e=n.length-1,i=e*t,r=Math.floor(i),o=Sa.Utils.Linear;return t<0?o(n[0],n[1],i):t>1?o(n[e],n[e-1],e-i):o(n[r],n[r+1>e?e:r+1],i-r)},Bezier:function(n,t){for(var e=0,i=n.length-1,r=Math.pow,o=Sa.Utils.Bernstein,l=0;l<=i;l++)e+=r(1-t,i-l)*r(t,l)*n[l]*o(i,l);return e},CatmullRom:function(n,t){var e=n.length-1,i=e*t,r=Math.floor(i),o=Sa.Utils.CatmullRom;return n[0]===n[e]?(t<0&&(r=Math.floor(i=e*(1+t))),o(n[(r-1+e)%e],n[r],n[(r+1)%e],n[(r+2)%e],i-r)):t<0?n[0]-(o(n[0],n[0],n[1],n[1],-i)-n[0]):t>1?n[e]-(o(n[e],n[e],n[e-1],n[e-1],i-e)-n[e]):o(n[r?r-1:0],n[r],n[e<r+1?e:r+1],n[e<r+2?e:r+2],i-r)},Utils:{Linear:function(n,t,e){return(t-n)*e+n},Bernstein:function(n,t){var e=Sa.Utils.Factorial;return e(n)/e(t)/e(n-t)},Factorial:function(){var n=[1];return function(t){var e=1;if(n[t])return n[t];for(var i=t;i>1;i--)e*=i;return n[t]=e,e}}(),CatmullRom:function(n,t,e,i,r){var o=(e-n)*.5,l=(i-t)*.5,c=r*r,h=r*c;return(2*t-2*e+o+l)*h+(-3*t+3*e-2*o-l)*c+o*r+t}}},rS=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),zm=new YN,Ah=function(){function n(t,e){e===void 0&&(e=zm),this._object=t,this._group=e,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Js.Linear.None,this._interpolationFunction=Sa.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=rS.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.getDuration=function(){return this._duration},n.prototype.to=function(t,e){if(e===void 0&&(e=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=t,this._propertiesAreSetUp=!1,this._duration=e<0?0:e,this},n.prototype.duration=function(t){return t===void 0&&(t=1e3),this._duration=t<0?0:t,this},n.prototype.dynamic=function(t){return t===void 0&&(t=!1),this._isDynamic=t,this},n.prototype.start=function(t,e){if(t===void 0&&(t=Bl()),e===void 0&&(e=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,!this._propertiesAreSetUp||e){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var o in this._valuesEnd)r[o]=this._valuesEnd[o];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,e)}return this},n.prototype.startFromCurrentValues=function(t){return this.start(t,!0)},n.prototype._setupProperties=function(t,e,i,r,o){for(var l in i){var c=t[l],h=Array.isArray(c),d=h?"array":typeof c,p=!h&&Array.isArray(i[l]);if(!(d==="undefined"||d==="function")){if(p){var m=i[l];if(m.length===0)continue;for(var _=[c],y=0,S=m.length;y<S;y+=1){var A=this._handleRelativeValue(c,m[y]);if(isNaN(A)){p=!1,console.warn("Found invalid interpolation list. Skipping.");break}_.push(A)}p&&(i[l]=_)}if((d==="object"||h)&&c&&!p){e[l]=h?[]:{};var v=c;for(var g in v)e[l][g]=v[g];r[l]=h?[]:{};var m=i[l];if(!this._isDynamic){var I={};for(var g in m)I[g]=m[g];i[l]=m=I}this._setupProperties(v,e[l],m,r[l],o)}else(typeof e[l]>"u"||o)&&(e[l]=c),h||(e[l]*=1),p?r[l]=i[l].slice().reverse():r[l]=e[l]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(t){return t===void 0&&(t=Bl()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)},n.prototype.resume=function(t){return t===void 0&&(t=Bl()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},n.prototype.group=function(t){return t===void 0&&(t=zm),this._group=t,this},n.prototype.delay=function(t){return t===void 0&&(t=0),this._delayTime=t,this},n.prototype.repeat=function(t){return t===void 0&&(t=0),this._initialRepeat=t,this._repeat=t,this},n.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},n.prototype.yoyo=function(t){return t===void 0&&(t=!1),this._yoyo=t,this},n.prototype.easing=function(t){return t===void 0&&(t=Js.Linear.None),this._easingFunction=t,this},n.prototype.interpolation=function(t){return t===void 0&&(t=Sa.Linear),this._interpolationFunction=t,this},n.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},n.prototype.onStart=function(t){return this._onStartCallback=t,this},n.prototype.onEveryStart=function(t){return this._onEveryStartCallback=t,this},n.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},n.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},n.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},n.prototype.onStop=function(t){return this._onStopCallback=t,this},n.prototype.update=function(t,e){var i=this,r;if(t===void 0&&(t=Bl()),e===void 0&&(e=!0),this._isPaused)return!0;var o,l=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>l)return!1;e&&this.start(t,!0)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var c=t-this._startTime,h=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),d=this._duration+this._repeat*h,p=function(){if(i._duration===0||c>d)return 1;var v=Math.trunc(c/h),g=c-v*h,I=Math.min(g/i._duration,1);return I===0&&c===i._duration?1:I},m=p(),_=this._easingFunction(m);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,_),this._onUpdateCallback&&this._onUpdateCallback(this._object,m),this._duration===0||c>=this._duration)if(this._repeat>0){var y=Math.min(Math.trunc((c-this._duration)/h)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=y);for(o in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[o]=="string"&&(this._valuesStartRepeat[o]=this._valuesStartRepeat[o]+parseFloat(this._valuesEnd[o])),this._yoyo&&this._swapEndStartRepeatValues(o),this._valuesStart[o]=this._valuesStartRepeat[o];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=h*y,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var S=0,A=this._chainedTweens.length;S<A;S++)this._chainedTweens[S].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(t,e,i,r){for(var o in i)if(e[o]!==void 0){var l=e[o]||0,c=i[o],h=Array.isArray(t[o]),d=Array.isArray(c),p=!h&&d;p?t[o]=this._interpolationFunction(c,r):typeof c=="object"&&c?this._updateProperties(t[o],l,c,r):(c=this._handleRelativeValue(l,c),typeof c=="number"&&(t[o]=l+(c-l)*r))}},n.prototype._handleRelativeValue=function(t,e){return typeof e!="string"?e:e.charAt(0)==="+"||e.charAt(0)==="-"?t+parseFloat(e):parseFloat(e)},n.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];typeof i=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(i):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=e},n}();var JF=rS.nextId,hr=zm,QF=hr.getAll.bind(hr),tB=hr.removeAll.bind(hr),eB=hr.add.bind(hr),nB=hr.remove.bind(hr),Ma=hr.update.bind(hr);var sS=Wd(km());var kl=class{constructor(t){this.controller=t}animate(){}},Hm=class extends kl{constructor(t){super(t);let e={x:3.55,y:0,z:-328,ry:0};this.tween=new Ah(e).to({x:0,y:0,z:-28,ry:Math.PI*-2},1600).onUpdate(function(){t.earth.setCameraPosition(e.x,e.y,e.z),t.earth.rotateGlobe(e.ry)}).onComplete(function(){t.changeState("idle")}).start()}animate(){Ma()}},Qs=class extends kl{constructor(t){super(t)}animate(){this.controller.touchDown&&this.controller.target?this.controller.state.forward():this.controller.state.backward()}forward(){}backward(){}},Th=class extends Qs{constructor(t){super(t)}forward(){this.controller.changeState("rotating")}},Vm=class extends Qs{constructor(t){super(t),this.tween=null,t.pauseSprite("audio")}forward(){let t=this,e=this.controller.earth,i=this.controller.target,r=e.getCameraPosition();this.tween?Ma():this.tween=new Ah(r).to({x:i.cameraFar[0],y:i.cameraFar[1],z:i.cameraFar[2]},1e3).easing(Js.Quadratic.InOut).onUpdate(function(){e.setCameraPosition(r.x,r.y,r.z)}).onComplete(function(){t.controller.touchDown&&t.controller.target&&t.controller.changeState("zooming"),t.tween=null}).start()}backward(){this.tween?Ma():this.controller.state=new Th(this.controller)}},Gm=class extends Qs{constructor(t){super(t),this._direction="",this._tween=null}_setDirection(t){let e=this,i=this.controller.earth,r=this.controller.target,o=i.getCameraPosition(),l=null,c;this._direction!==t&&(t==="forward"?(l={x:r.cameraNear[0],y:r.cameraNear[1],z:r.cameraNear[2]},c=200):(l={x:r.cameraFar[0],y:r.cameraFar[1],z:r.cameraFar[2]},c=0),this._direction=t,this._tween&&this._tween.stop(),this._tween=new Ah(o).delay(c).to(l,1e3).onUpdate(function(){i.setCameraPosition(o.x,o.y,o.z)}).onComplete(function(){e._handleTweenComplete()}).start())}_handleTweenComplete(){this._direction==="forward"?this.controller.changeState("diving"):this.controller.changeState("idle"),this._tween=null}forward(){this._setDirection("forward"),this._tween&&Ma()}backward(){this._setDirection("backward"),this._tween&&Ma()}},Wm=class extends Qs{constructor(t){super(t),this._direction="forward",t.hideVideo(),this.controller.cloud.onAnimationEnd.pipe(Zr(1)).subscribe(()=>{this._direction==="forward"?this.controller.changeState("presenting"):this.controller.changeState("zooming")})}_setDirection(t){this._direction!==t&&(t==="forward"?this.controller.cloud.play():this.controller.cloud.reverse(),this._direction=t)}forward(){this._setDirection("forward")}backward(){this._setDirection("backward")}},Xm=class extends Qs{constructor(t){super(t),t.showVideo()}backward(){this.controller.changeState("diving")}},Ch=class{constructor(t){this.earth=t.earth,this.cloud=t.cloud,this.audioSprite=t.audioSprite,this.videoSprite=t.videoSprite,this.onStateChange=t.onStateChange,this.onTargetChange=t.onTargetChange,this.state=null,this.touchDown=!1,this.target=null,this.targetList=[],this._init()}_init(){setTimeout(t=>{this.state=new Hm(this)},10),this._shuffleTargetList(),this._loop()}_shuffleTargetList(){this.targetList=(0,sS.shuffle)(gl.map(t=>t.name))}_loop(){requestAnimationFrame(this._loop.bind(this)),this._animate()}_animate(){this.state&&this.state.animate()}showVideo(){this.playSprite("video")}hideVideo(){this.pauseSprite("video")}playSprite(t){if(this.target){if(t==="video")this.videoSprite.playSpotVideo(this.target.videoTimeline[0],this.target.videoTimeline[1],this.target.captionImgName);else if(t==="audio"){let e=this;this.audioSprite.playSpotMusic(this.target.audioTimeline[0],this.target.audioTimeline[1],()=>{e.nextTarget()})}}}pauseSprite(t){t==="video"?this.videoSprite.pauseSpotVideo():t==="audio"&&(this.audioSprite.pauseBgMusic(),this.audioSprite.pauseSpotMusic())}start(){this.touchDown=!0}end(){this.touchDown=!1}nextTarget(){let t=(this.targetList.indexOf(this.target?this.target.name:null)+1)%this.targetList.length;this.setTarget(this.targetList[t])}setTarget(t){this.target=gl.filter(e=>e.name===t)[0],this.playSprite("audio"),this.onTargetChange&&this.onTargetChange()}changeState(t){switch(t){case"idle":this.state=new Th(this);break;case"rotating":this.state=new Vm(this);break;case"zooming":this.state=new Gm(this);break;case"diving":this.state=new Wm(this);break;case"presenting":this.state=new Xm(this);break;default:this.state=new kl(this)}this.onStateChange&&this.onStateChange(t)}};var Rh=class{constructor(t,e){this.width=t,this.height=e,this.init()}},qm=class extends Rh{constructor(t,e){super(t,e)}init(){var t=document.createElement("canvas");t.width=this.width,t.style.width=this.width+"px",t.height=this.height,t.style.height=this.height+"px",this._context=t.getContext("2d"),this.dom=t}drawImage(t){this._context.clearRect(0,0,this.width,this.height),this._context.drawImage(t,0,0,this.width,this.height)}},Ym=class extends Rh{constructor(t,e){super(t,e),this._imageArray=[]}init(){var t=document.createElement("div");t.style.display="inline-block",t.style.position="absolute",t.style.margin="0px",t.style.padding="0px",this.dom=t}_setImageStyle(t){t.style.position="absolute",t.style.top="0px",t.style.left="0px",t.style.width=this.width+"px",t.style.height=this.height+"px"}drawImage(t){this._imageArray.indexOf(t)===-1?(this._imageArray.forEach(function(e){e.style.opacity="0"}),this._setImageStyle(t),this.dom.appendChild(t),this._imageArray.push(t)):this._imageArray.forEach(function(e){e===t?e.style.opacity="1":e.style.opacity="0"})}},Ph=class{constructor(t,e){this._animating=!1,this._currentFrameIndex=0,this._lastTick=Date.now(),this._initOptions={width:200,height:200,domType:"canvas",reverse:!1,fps:30,images:[]},this._options=Object.assign(this._initOptions,e),this.container=t,this._renderer=this._options.domType==="canvas"?new qm(this._options.width,this._options.height):new Ym(this._options.width,this._options.height),this.container.style.width=this._options.width+"px",this.container.style.height=this._options.height+"px",this.container.innerHTML="",this.container.appendChild(this._renderer.dom),this._timeDiff=1e3/this._options.fps}_loop(){if(this._animating){let t=Date.now();t-this._lastTick>this._timeDiff&&(console.log(this._currentFrameIndex),this._renderer.drawImage(this._options.images[this._currentFrameIndex]),this._lastTick=t,this._options.reverse?(--this._currentFrameIndex,this._currentFrameIndex==-1&&this._destroy()):(++this._currentFrameIndex,this._currentFrameIndex==this._options.images.length&&this._destroy())),this._aid=requestAnimationFrame(this._loop.bind(this))}}_destroy(){cancelAnimationFrame(this._aid),this._currentFrameIndex=0,this._animating=!1,this._options.onAnimationEnd&&this._options.onAnimationEnd.bind(this)()}play(){this._options.reverse=!1,this._animating||this._play()}pause(){this._animating=!1,cancelAnimationFrame(this._aid)}_play(){this._animating=!0,this._aid=requestAnimationFrame(this._loop.bind(this))}reverse(){this._options.reverse=!0,this._animating||(this._currentFrameIndex=this._initOptions.images.length-1,this._play())}isAnimating(){return this._animating}};var dr=(()=>{let t=class t{constructor(){}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=Fe({token:t,factory:t.\u0275fac,providedIn:"root"});let n=t;return n})();var jN=["cloud"],KN=n=>({display:n}),oS=(()=>{let t=class t{ngOnInit(){this._initAnimation()}constructor(i){this.globalService=i,this.show=!1,this.onAnimationEnd=new ri}_initAnimation(){let i=this.globalService.loader.resources,r=Object.keys(i).filter(l=>l.includes("skyCloud"));this._images=Array.from(r,l=>i[l].data);let o=new Ph(this.cloud.nativeElement,{fps:10,width:Fo.WIDTH,height:Fo.HEIGHT,images:this._images,reverse:!1,domType:"canvas",onAnimationEnd:()=>{this.onAnimationEnd.emit()}});this._iman=o}play(){this._iman.play()}reverse(){this._iman.reverse()}ngOnChanges(i){}};t.\u0275fac=function(r){return new(r||t)(di(dr))},t.\u0275cmp=Ke({type:t,selectors:[["app-cloud"]],viewQuery:function(r,o){if(r&1&&wn(jN,7),r&2){let l;_n(l=vn())&&(o.cloud=l.first)}},inputs:{show:"show"},outputs:{onAnimationEnd:"onAnimationEnd"},standalone:!0,features:[xo,en],decls:3,vars:3,consts:[[1,"cloud"],[1,"cloud_container",3,"ngStyle"],["cloud",""]],template:function(r,o){r&1&&(Ne(0,"div",0),Ie(1,"div",1,2),tn()),r&2&&(Qe(),cn("ngStyle",Jr(1,KN,o.show?"block":"none")))},dependencies:[qc],styles:[".cloud[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:3;pointer-events:none}.cloud_container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:none}"],changeDetection:0});let n=t;return n})();var JN=n=>({"is-active":n});function QN(n,t){if(n&1){let e=zc();Ne(0,"div",1),Ie(1,"div",2),Ne(2,"div",3),Ie(3,"div",4),tn(),Ie(4,"span",5),Ne(5,"span",6),Ii("click",function(){Oc(e);let r=Ya();return Nc(r.knowMore())}),tn()()}if(n&2){let e=Ya();cn("@fade",void 0),Qe(2),cn("ngClass",Jr(6,JN,e.showTips)),Qe(2),bo("is-active",e.showTips),Qe(),bo("is-active",e.showTips)}}var aS=(()=>{let t=class t{constructor(){this.backgroundPosition="",this.show=!0,this.showTips=!1,this.showCoord=!0,this._coordIndex=0,this.onKnowMore=new ri}set coordIndex(i){this._coordIndex=i,this.setBackgroundPosition(i)}get coordIndex(){return this._coordIndex}ngOnChanges(i){}ngOnInit(){document.documentElement.addEventListener("touchmove",this.touchMove.bind(this),{passive:!1,once:!0})}setBackgroundPosition(i){this.backgroundPosition=["0px 0px","0px -19px","0px -38px","0px -57px","0px -76px"][i]}touchMove(){this.showTips=!0}knowMore(){this.onKnowMore.emit()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=Ke({type:t,selectors:[["app-box"]],inputs:{show:"show",showCoord:"showCoord",coordIndex:"coordIndex"},outputs:{onKnowMore:"onKnowMore"},standalone:!0,features:[xo,en],decls:1,vars:1,consts:[["class","box",4,"ngIf"],[1,"box"],[1,"box_cover"],[1,"box_tips",3,"ngClass"],[1,"box_hand"],[1,"box_action_tip"],[1,"box_action_more",3,"click"]],template:function(r,o){r&1&&Mo(0,QN,6,8,"div",0),r&2&&cn("ngIf",o.show)},dependencies:[wo,Xc],styles:['.box[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:2;pointer-events:none}.box_cover[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;z-index:2;width:375px;height:600px;margin:-300px 0 0 -187.5px;background-image:url(/assets/images/bg_index_cover.png);background-size:cover;background-repeat:no-repeat;background-position:center center}.box_tips[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:325px;height:89px;margin:-35px 0 0 -162.5px;background-image:url(/assets/images/bg_tips.png);background-position:center center;background-size:cover;background-repeat:no-repeat;opacity:1;transition:opacity .5s ease}.box_tips.is-active[_ngcontent-%COMP%]{opacity:0}.box_hand[_ngcontent-%COMP%]{position:absolute;bottom:0;left:50%;width:16px;height:19px;margin-left:-8px;background-image:url(/assets/images/hand.png);background-size:cover;animation:_ngcontent-%COMP%_moveHand 2s linear infinite}.c-earthCover__coord[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:117px;height:18px;margin:-253px 0 0 -58.5px;background-size:124px 95px;background-image:url(/assets/images/bg_coord.png);background-repeat:no-repeat;transition:all .5s ease}.box_action_tip[_ngcontent-%COMP%]{position:absolute;display:inline-block;left:115px;bottom:130px;width:140px;height:33px;opacity:0;background-image:url("./media/btn_show_text-36YXSRDP.png");background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity 2s ease}.box_action_tip.is-active[_ngcontent-%COMP%]{opacity:.8}.box_action_more[_ngcontent-%COMP%]{position:absolute;display:inline-block;opacity:0;right:55px;bottom:52px;width:66px;height:70px;pointer-events:auto;background-image:url("./media/btn_end-KMMCIC5A.png");background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity .5s ease}.box_action_more.is-active[_ngcontent-%COMP%]{opacity:1}@keyframes _ngcontent-%COMP%_moveHand{0%{-webkit-transform:translate3d(0,0,0)}25%{-webkit-transform:translate3d(-10px,0,0)}50%{-webkit-transform:translate3d(0,0,0)}75%{-webkit-transform:translate3d(10px,0,0)}to{-webkit-transform:translate3d(0,0,0)}}'],data:{animation:[Yc("fade",[Ao("void => *",[Qr({opacity:0}),Eo(500,Qr({opacity:1}))]),Ao("* => void",[Eo(500,Qr({opacity:0}))])])]}});let n=t;return n})();var lS=(()=>{let t=class t{constructor(){this.active=!1,this.emitter=new ri}ngAfterViewInit(){setTimeout(()=>{this.active=!0},9e3)}back(){this.active&&this.emitter.emit("back")}register(){}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=Ke({type:t,selectors:[["app-banner"]],outputs:{emitter:"emitter"},standalone:!0,features:[en],decls:11,vars:0,consts:[[1,"banner"],[1,"banner_texts"],[1,"banner_text","line1"],[1,"banner_text","line2"],[1,"banner_text","line3"],[1,"banner_text","line4"],[1,"rally"],[1,"slogan"],[1,"btn-oper"],[1,"btn-back",3,"click"],[1,"btn-register",3,"click"]],template:function(r,o){r&1&&(Ne(0,"div",0)(1,"div",1),Ie(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),tn(),Ne(6,"div",6),Ie(7,"div",7),Ne(8,"div",8)(9,"span",9),Ii("click",function(){return o.back()}),tn(),Ne(10,"span",10),Ii("click",function(){return o.register()}),tn()()()())},styles:['.banner[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;height:100%;z-index:6}.banner_texts[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:203px;height:83px;margin:-250px 0 0 -101.5px;animation:_ngcontent-%COMP%_fadeOut 1s linear 8s;animation-fill-mode:forwards}.banner_text[_ngcontent-%COMP%]{position:absolute;width:100%;background-image:url("./media/end_text-G54WALY6.png");background-size:203px 83px;opacity:0}.banner_text.line1[_ngcontent-%COMP%]{top:0;height:20px;background-position:0 0;animation:_ngcontent-%COMP%_fadeIn 1s linear 0s;animation-fill-mode:forwards}.banner_text.line2[_ngcontent-%COMP%]{top:20px;height:24px;background-position:0 -18px;animation:_ngcontent-%COMP%_fadeIn 1s linear 2s;animation-fill-mode:forwards}.banner_text.line3[_ngcontent-%COMP%]{top:44px;height:24px;background-position:0 -40px;animation:_ngcontent-%COMP%_fadeIn 1s linear 4s;animation-fill-mode:forwards}.banner_text.line4[_ngcontent-%COMP%]{top:68px;height:24px;background-position:0 -62px;animation:_ngcontent-%COMP%_fadeIn 1s linear 6s;animation-fill-mode:forwards}.rally[_ngcontent-%COMP%]{opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;animation:_ngcontent-%COMP%_fadeIn 1.5s linear 9s 1 normal forwards}.slogan[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:279px;height:60px;margin:-220px 0 0 -139.5px;background-image:url("./media/end_slogan-2HQ2O2HS.png");background-position:center center;background-size:cover;background-repeat:no-repeat}.btn-oper[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:309px;height:50px;margin:215px 0 0 -154.5px}.btn-back[_ngcontent-%COMP%]{position:absolute;top:0;width:100px;height:40px;left:25px;background-image:url("./media/btn_back-GSJ33AVL.png");background-position:center center;background-repeat:no-repeat;background-size:contain}.btn-register[_ngcontent-%COMP%]{position:absolute;top:0;width:100px;height:40px;right:25px;background-image:url("./media/btn_register-UC4DJMIL.png");background-position:center center;background-repeat:no-repeat;background-size:contain}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_fadeOut{0%{opacity:1}to{opacity:0}}']});let n=t;return n})();var tU=["videoCaption"],eU=["container"],nU=n=>({display:n}),cS=(()=>{let t=class t{set videoCaption(i){this._videoCaption=i}constructor(i){this._globalService=i,this.show=!1,this.videoSrc=gu.spotsVideo}ngOnInit(){let i=this._globalService.loader.resources;this._video=i.spotsVideo.data,this._video.className="video_play",this._video.playsInline=!0,this._container.nativeElement.appendChild(this._video)}playSpotVideo(i,r,o){let l=this._video;l.currentTime=i,l.play();let c=this._globalService.loader.resources,h=this._videoCaption.nativeElement.children;h.length&&this._videoCaption.nativeElement.removeChild(h[0]),this._videoCaption.nativeElement.appendChild(c[o].data),l.addEventListener("timeupdate",function(){Math.floor(l.currentTime)>r&&(l.currentTime=i)},!1)}pauseSpotVideo(){this._video.pause()}};t.\u0275fac=function(r){return new(r||t)(di(dr))},t.\u0275cmp=Ke({type:t,selectors:[["app-video"]],viewQuery:function(r,o){if(r&1&&(wn(tU,5),wn(eU,7)),r&2){let l;_n(l=vn())&&(o.videoCaption=l.first),_n(l=vn())&&(o._container=l.first)}},inputs:{show:"show"},standalone:!0,features:[en],decls:4,vars:3,consts:[[1,"video",3,"ngStyle"],["container",""],[1,"video_caption"],["videoCaption",""]],template:function(r,o){r&1&&(Ne(0,"div",0,1),Ie(2,"div",2,3),tn()),r&2&&cn("ngStyle",Jr(1,nU,o.show?"flex":"none"))},dependencies:[qc],styles:[".video[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:4;pointer-events:none;display:none}.video_caption[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;user-select:none;z-index:2;display:flex;justify-content:center;align-items:center;flex-direction:column}.video_play[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}"]});let n=t;return n})();var uS=(()=>{let t=class t{constructor(){this.onPressDown=new ri,this.onPressEnd=new ri}touchStart(){this.onPressDown.emit()}touchEnd(){this.onPressEnd.emit()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=Ke({type:t,selectors:[["app-press"]],inputs:{showPressButton:"showPressButton",showBackTip:"showBackTip"},outputs:{onPressDown:"onPressDown",onPressEnd:"onPressEnd"},standalone:!0,features:[en],decls:3,vars:4,consts:[[1,"press"],[1,"back_tip"],[1,"press_btn",3,"touchstart","touchend","touchcancel"]],template:function(r,o){r&1&&(Ne(0,"div",0),Ie(1,"span",1),Ne(2,"span",2),Ii("touchstart",function(){return o.touchStart()})("touchend",function(){return o.touchEnd()})("touchcancel",function(){return o.touchEnd()}),tn()()),r&2&&(Qe(),bo("is-active",o.showBackTip),Qe(),bo("is-active",o.showPressButton))},styles:['.press[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:5;pointer-events:none}.press_btn[_ngcontent-%COMP%]{position:absolute;display:inline-block;left:138px;bottom:30px;width:99px;height:133px;opacity:0;background-image:url("./media/btn_show-65SQ4CWU.png");background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity 2s ease;pointer-events:auto}.press_btn.is-active[_ngcontent-%COMP%]{opacity:1;animation:_ngcontent-%COMP%_twinkle 2s linear infinite}.back_tip[_ngcontent-%COMP%]{position:absolute;display:inline-block;left:50%;top:50%;width:120px;height:35px;opacity:0;margin:-280px 0 0 -65px;background-image:url("./media/back_tip-BYD2AH2T.png");background-position:center center;background-repeat:no-repeat;background-size:contain;transition:opacity 2s ease}.back_tip.is-active[_ngcontent-%COMP%]{opacity:1;animation:_ngcontent-%COMP%_twinkle 1s linear infinite}@keyframes _ngcontent-%COMP%_twinkle{0%{opacity:.5}50%{opacity:.9}to{opacity:.5}}']});let n=t;return n})();var iU=["container"],hS=(()=>{let t=class t{constructor(i,r,o){this.rd=i,this._elementRef=r,this._globalService=o}ngOnInit(){this._initMusic()}_initMusic(){let i=this._globalService.loader.resources;this._backgroundAudio=i.backgroundAudio.data,this._spotAudio=i.spotsAudio.data,this._backgroundAudio.loop=!0,this._spotAudio.loop=!0,this._backgroundAudio.style.display="none",this._spotAudio.style.display="none",this._container.nativeElement.appendChild(this._backgroundAudio),this._container.nativeElement.appendChild(this._spotAudio)}playSpotMusic(i,r,o){let l=this._spotAudio;l.currentTime=i,l.play();let c=!1;l.addEventListener("timeupdate",function(){Math.floor(l.currentTime)>r&&(l.currentTime=i,c||(o(),c=!0))},!1)}pauseSpotMusic(){this._spotAudio.pause()}playBgMusic(){let i=this._backgroundAudio,r=i.play();r!==void 0&&r.then(o=>{}).catch(o=>{i.play()})}pauseBgMusic(){this._backgroundAudio.pause()}};t.\u0275fac=function(r){return new(r||t)(di(sf),di(Jd),di(dr))},t.\u0275cmp=Ke({type:t,selectors:[["app-music"]],viewQuery:function(r,o){if(r&1&&wn(iU,7),r&2){let l;_n(l=vn())&&(o._container=l.first)}},standalone:!0,features:[en],decls:2,vars:0,consts:[["container",""]],template:function(r,o){r&1&&Ie(0,"div",null,0)}});let n=t;return n})();var rU=["earth"],sU=["cloudSprite"],oU=["videoPlay"],aU=["music"];function lU(n,t){if(n&1){let e=zc();Ne(0,"app-banner",10),Ii("emitter",function(){Oc(e);let r=Ya();return Nc(r.handleBack())}),tn()}}var dS=(()=>{let t=class t{constructor(){this.showCover=!1,this.showCoord=!1,this.showPressButton=!1,this.showBackTip=!1,this.coordIndex=-1,this.showEarth=!0,this.showCloudLayer=!1,this.showVideoLayer=!1,this.showBannerLayer=!1}ngAfterViewInit(){this.addDocumentTouchMove(),this.createController()}addDocumentTouchMove(){document.documentElement.addEventListener("touchend",this.handleDocumentTouchMove.bind(this),{passive:!1,once:!0})}handleDocumentTouchMove(){this.musicComponent.playBgMusic(),this.showPressButton=!0,this._controller.target||setTimeout(()=>this._controller.nextTarget(),100)}handleHold(){this._controller.start()}handleRelease(){this._controller.end()}handleKnowMore(){this.showBannerLayer=!0,this.showPressButton=!1,this.showCover=!1,this.musicComponent.pauseSpotMusic()}handleBack(){this.showBannerLayer=!1,this.showPressButton=!0,this.showCover=!0,this._controller.nextTarget()}createController(){let i=this,r=this.earthComponent.earth,o=new Ch({earth:r,cloud:this.CloudComponent,videoSprite:this.videoComponent,audioSprite:this.musicComponent,onTargetChange(){i.showCoord=!1},onStateChange(l){["idle","rotating"].includes(l)&&(i.showCover=!0),l==="zooming"&&(i.showCoord=!0,i.coordIndex=o.target.coordSpriteIndex),["idle","zooming","rotating"].includes(l)?i.showEarth=!0:i.showEarth=!1,l==="presenting"?(i.showVideoLayer=!0,i.showBackTip=!0):(i.showVideoLayer=!1,i.showBackTip=!1),l==="diving"?i.showCloudLayer=!0:i.showCloudLayer=!1}});this._controller=o}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=Ke({type:t,selectors:[["app-core"]],viewQuery:function(r,o){if(r&1&&(wn(rU,7),wn(sU,7),wn(oU,7),wn(aU,7)),r&2){let l;_n(l=vn())&&(o.earthComponent=l.first),_n(l=vn())&&(o.CloudComponent=l.first),_n(l=vn())&&(o.videoComponent=l.first),_n(l=vn())&&(o.musicComponent=l.first)}},standalone:!0,features:[en],decls:12,vars:10,consts:[[1,"core"],["music",""],[3,"show","showCoord","coordIndex","onKnowMore"],[3,"emitter",4,"ngIf"],[3,"hidden","bannerActive"],["earth",""],[3,"show"],["cloudSprite",""],["videoPlay",""],[3,"showPressButton","showBackTip","onPressDown","onPressEnd"],[3,"emitter"]],template:function(r,o){r&1&&(Ne(0,"div",0),Ie(1,"app-music",null,1),Ne(3,"app-box",2),Ii("onKnowMore",function(){return o.handleKnowMore()}),tn(),Mo(4,lU,1,0,"app-banner",3),Ie(5,"app-earth",4,5)(7,"app-cloud",6,7)(9,"app-video",6,8),Ne(11,"app-press",9),Ii("onPressDown",function(){return o.handleHold()})("onPressEnd",function(){return o.handleRelease()}),tn()()),r&2&&(Qe(3),cn("show",o.showCover)("showCoord",o.showCoord)("coordIndex",o.coordIndex),Qe(),cn("ngIf",o.showBannerLayer),Qe(),cn("hidden",!o.showEarth)("bannerActive",o.showBannerLayer),Qe(2),cn("show",o.showCloudLayer),Qe(2),cn("show",o.showVideoLayer),Qe(2),cn("showPressButton",o.showPressButton)("showBackTip",o.showBackTip))},dependencies:[iS,oS,aS,lS,cS,uS,hS,wo],styles:[".core[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;margin:auto;transform:translateY(0);transition:transform 1s ease}"],data:{animation:[Yc("fade",[Ao("void => *",[Qr({opacity:0}),Eo(200,Qr({opacity:1}))]),Ao("* => void",[Eo(200,Qr({opacity:0}))])])]}});let n=t;return n})();var yi=Wd(km()),cU=[50,100,null],uU=[1,3,null],Ih=class{constructor(t,e){this.el=t,this.meteorImage=e,this.width=window.innerWidth*2,this.height=window.innerHeight*2,this.context=null,this.stars=[],this.meteor=null,this._init()}_init(){this._createCanvas(),this._createStars(),this._loop()}_loop(){requestAnimationFrame(this._loop.bind(this)),this._shine(),this._moveMeteor(),this._render()}_render(){this._clear(),this._drawStars(),this.meteor&&this.meteorImage&&this._drawMeteor()}_createCanvas(){let t=document.createElement("canvas");t.width=this.width,t.height=this.height,t.style.width=this.width/2+"px",t.style.height=this.height/2+"px",this.el.appendChild(t),this.context=t.getContext("2d")}_createStars(){let t=yi.random.apply(null,cU),e=this.width,i=this.height;for(let r=0;r<t;r++)this.stars.push({x:(0,yi.random)(0,e),y:(0,yi.random)(0,i),r:yi.random.apply(null,uU),shine:!1})}_clear(){this.context.clearRect(0,0,this.width,this.height)}_shine(){let t=(0,yi.sampleSize)(this.stars,(0,yi.random)(this.stars.length*.9,this.stars.length));this.stars.forEach(e=>{t.indexOf(e)===-1?e.shine=!1:e.shine=!0})}_drawStars(){this.stars.forEach(t=>{this._drawStar(t)})}_drawStar(t){let e=this.context;e.globalAlpha=.2,e.fillStyle="#FFF",e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2,!0),e.closePath(),e.fill(),t.shine&&(e.globalAlpha=(0,yi.random)(.5,1),e.fillStyle="#FFF",e.beginPath(),e.arc(t.x,t.y,t.r*.8,0,Math.PI*2,!0),e.closePath(),e.fill())}_drawMeteor(){this.meteorImage.complete&&this.context.drawImage(this.meteorImage,this.meteor.x,this.meteor.y)}_createMeteor(){setTimeout(()=>{let t=(0,yi.random)(this.width*.5,this.width*1.5),e=(0,yi.random)(this.height*-.5,this.height*.5);this.meteor={x:t,y:e,fromX:t,fromY:e,toX:this.width*-.1,toY:this.height*1.1,speed:(0,yi.random)(2,4)}},(0,yi.random)(0,1))}_moveMeteor(){let t=this.meteor;t?t.x<t.toX||t.y>t.toY?this._createMeteor():(t.x-=t.speed,t.y+=t.speed):this._createMeteor()}};var hU=["meteor"],fS=(()=>{let t=class t{constructor(i){this._globalService=i}ngOnInit(){let i=this._globalService.loader.resources;new Ih(this.dom.nativeElement,i.bgMeteor.data)}};t.\u0275fac=function(r){return new(r||t)(di(dr))},t.\u0275cmp=Ke({type:t,selectors:[["app-meteor"]],viewQuery:function(r,o){if(r&1&&wn(hU,7),r&2){let l;_n(l=vn())&&(o.dom=l.first)}},standalone:!0,features:[en],decls:2,vars:0,consts:[[1,"meteor"],["meteor",""]],template:function(r,o){r&1&&Ie(0,"div",0,1)},styles:[".meteor[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1}"]});let n=t;return n})();function dU(n,t){n&1&&Ie(0,"app-core")}function fU(n,t){n&1&&Ie(0,"app-meteor")}var pS=(()=>{let t=class t{constructor(i){this.globalService=i,this.loading=!0,this.progress=10}ngOnInit(){let i=new qv,r=Object.assign({},gu,$v);Object.keys(r).forEach(o=>{let l=r[o];i.add(o,l)}),i.onProgress.add(()=>{this.progress=Math.round(i.progress)}),i.onComplete.add(()=>{setTimeout(()=>{this.loading=!1},200)}),i.load(),Bo.RES=i.resources,this.globalService.loader=i}};t.\u0275fac=function(r){return new(r||t)(di(dr))},t.\u0275cmp=Ke({type:t,selectors:[["app-root"]],standalone:!0,features:[en],decls:5,vars:4,consts:[[1,"page"],[1,"wrapper"],[3,"progress","hidden"],[4,"ngIf"]],template:function(r,o){r&1&&(Ne(0,"div",0)(1,"div",1),Ie(2,"app-loading",2),Mo(3,dU,1,0,"app-core",3)(4,fU,1,0,"app-meteor",3),tn()()),r&2&&(Qe(2),cn("progress",o.progress)("hidden",!o.loading),Qe(),cn("ngIf",!o.loading),Qe(),cn("ngIf",!o.loading))},dependencies:[Zv,dS,fS,wo],styles:[".page[_ngcontent-%COMP%]{top:0;left:0;width:100%;height:100vh;position:fixed}.wrapper[_ngcontent-%COMP%]{position:absolute;display:inline-block;top:50%;left:50%;width:375px;height:600px;margin:-300px 0 0 -187.5px;overflow:hidden}"]});let n=t;return n})();J0(pS,kv).catch(n=>console.error(n));
