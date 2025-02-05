var Mf=Object.defineProperty;var Sf=(s,t,n)=>t in s?Mf(s,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[t]=n;var le=(s,t,n)=>Sf(s,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eo="172",ls={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tf=0,dl=1,Ef=2,hh=1,bf=2,Bn=3,vn=0,Be=1,mn=2,ai=0,us=1,pl=2,ml=3,gl=4,Af=5,wi=100,wf=101,Rf=102,Cf=103,Pf=104,Lf=200,Df=201,If=202,Uf=203,La=204,Da=205,Nf=206,Ff=207,Of=208,Bf=209,zf=210,kf=211,Hf=212,Vf=213,Gf=214,Ia=0,Ua=1,Na=2,ps=3,Fa=4,Oa=5,Ba=6,za=7,fh=0,Wf=1,Xf=2,ci=0,qf=1,Yf=2,jf=3,dh=4,Kf=5,Zf=6,$f=7,_l="attached",Jf="detached",ph=300,ms=301,gs=302,ka=303,Ha=304,bo=306,_s=1e3,si=1001,_o=1002,ze=1003,mh=1004,$s=1005,Ke=1006,ao=1007,Hn=1008,Xn=1009,gh=1010,_h=1011,or=1012,Ic=1013,Pi=1014,_n=1015,hr=1016,Uc=1017,Nc=1018,xs=1020,xh=35902,yh=1021,vh=1022,sn=1023,Mh=1024,Sh=1025,hs=1026,ys=1027,Fc=1028,Oc=1029,Th=1030,Bc=1031,zc=1033,co=33776,lo=33777,uo=33778,ho=33779,Va=35840,Ga=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,ja=37496,Ka=37808,Za=37809,$a=37810,Ja=37811,Qa=37812,tc=37813,ec=37814,nc=37815,ic=37816,sc=37817,rc=37818,oc=37819,ac=37820,cc=37821,fo=36492,lc=36494,uc=36495,Eh=36283,hc=36284,fc=36285,dc=36286,ar=2300,cr=2301,Do=2302,xl=2400,yl=2401,vl=2402,Qf=2500,td=0,bh=1,pc=2,ed=3200,nd=3201,Ah=0,id=1,ii="",ye="srgb",He="srgb-linear",xo="linear",te="srgb",Fi=7680,Ml=519,sd=512,rd=513,od=514,wh=515,ad=516,cd=517,ld=518,ud=519,mc=35044,Sl="300 es",Vn=2e3,yo=2001;class Di{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tl=1234567;const er=Math.PI/180,vs=180/Math.PI;function xn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[n&63|128]+Le[n>>8&255]+"-"+Le[n>>16&255]+Le[n>>24&255]+Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]).toLowerCase()}function Ft(s,t,n){return Math.max(t,Math.min(n,s))}function kc(s,t){return(s%t+t)%t}function hd(s,t,n,i,r){return i+(s-t)*(r-i)/(n-t)}function fd(s,t,n){return s!==t?(n-s)/(t-s):0}function nr(s,t,n){return(1-n)*s+n*t}function dd(s,t,n,i){return nr(s,t,1-Math.exp(-n*i))}function pd(s,t=1){return t-Math.abs(kc(s,t*2)-t)}function md(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*(3-2*s))}function gd(s,t,n){return s<=t?0:s>=n?1:(s=(s-t)/(n-t),s*s*s*(s*(s*6-15)+10))}function _d(s,t){return s+Math.floor(Math.random()*(t-s+1))}function xd(s,t){return s+Math.random()*(t-s)}function yd(s){return s*(.5-Math.random())}function vd(s){s!==void 0&&(Tl=s);let t=Tl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Md(s){return s*er}function Sd(s){return s*vs}function Td(s){return(s&s-1)===0&&s!==0}function Ed(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function bd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ad(s,t,n,i,r){const o=Math.cos,a=Math.sin,c=o(n/2),l=a(n/2),u=o((t+i)/2),h=a((t+i)/2),f=o((t-i)/2),d=a((t-i)/2),p=o((i-t)/2),_=a((i-t)/2);switch(r){case"XYX":s.set(c*h,l*f,l*d,c*u);break;case"YZY":s.set(l*d,c*h,l*f,c*u);break;case"ZXZ":s.set(l*f,l*d,c*h,c*u);break;case"XZX":s.set(c*h,l*_,l*p,c*u);break;case"YXY":s.set(l*p,c*h,l*_,c*u);break;case"ZYZ":s.set(l*_,l*p,c*h,c*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jt(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rh={DEG2RAD:er,RAD2DEG:vs,generateUUID:xn,clamp:Ft,euclideanModulo:kc,mapLinear:hd,inverseLerp:fd,lerp:nr,damp:dd,pingpong:pd,smoothstep:md,smootherstep:gd,randInt:_d,randFloat:xd,randFloatSpread:yd,seededRandom:vd,degToRad:Md,radToDeg:Sd,isPowerOfTwo:Td,ceilPowerOfTwo:Ed,floorPowerOfTwo:bd,setQuaternionFromProperEuler:Ad,normalize:Jt,denormalize:gn};class Mt{constructor(t=0,n=0){Mt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ft(this.x,t.x,n.x),this.y=Ft(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ft(this.x,t,n),this.y=Ft(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ft(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-t.x,a=this.y-t.y;return this.x=o*i-a*r+t.x,this.y=o*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,n,i,r,o,a,c,l,u){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,o,a,c,l,u)}set(t,n,i,r,o,a,c,l,u){const h=this.elements;return h[0]=t,h[1]=r,h[2]=c,h[3]=n,h[4]=o,h[5]=l,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,o=this.elements,a=i[0],c=i[3],l=i[6],u=i[1],h=i[4],f=i[7],d=i[2],p=i[5],_=i[8],x=r[0],g=r[3],m=r[6],v=r[1],M=r[4],y=r[7],A=r[2],w=r[5],R=r[8];return o[0]=a*x+c*v+l*A,o[3]=a*g+c*M+l*w,o[6]=a*m+c*y+l*R,o[1]=u*x+h*v+f*A,o[4]=u*g+h*M+f*w,o[7]=u*m+h*y+f*R,o[2]=d*x+p*v+_*A,o[5]=d*g+p*M+_*w,o[8]=d*m+p*y+_*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],o=t[3],a=t[4],c=t[5],l=t[6],u=t[7],h=t[8];return n*a*h-n*c*u-i*o*h+i*c*l+r*o*u-r*a*l}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],o=t[3],a=t[4],c=t[5],l=t[6],u=t[7],h=t[8],f=h*a-c*u,d=c*l-h*o,p=u*o-a*l,_=n*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return t[0]=f*x,t[1]=(r*u-h*i)*x,t[2]=(c*i-r*a)*x,t[3]=d*x,t[4]=(h*n-r*l)*x,t[5]=(r*o-c*n)*x,t[6]=p*x,t[7]=(i*l-u*n)*x,t[8]=(a*n-i*o)*x,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,o,a,c){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*a+u*c)+a+t,-r*u,r*l,-r*(-u*a+l*c)+c+n,0,0,1),this}scale(t,n){return this.premultiply(Io.makeScale(t,n)),this}rotate(t){return this.premultiply(Io.makeRotation(-t)),this}translate(t,n){return this.premultiply(Io.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new Dt;function Ch(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function lr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wd(){const s=lr("canvas");return s.style.display="block",s}const El={};function ss(s){s in El||(El[s]=!0,console.warn(s))}function Rd(s,t,n){return new Promise(function(i,r){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:r();break;case s.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function Cd(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Pd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const bl=new Dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){const s={enabled:!0,workingColorSpace:He,spaces:{},convert:function(r,o,a){return this.enabled===!1||o===a||!o||!a||(this.spaces[o].transfer===te&&(r.r=Gn(r.r),r.g=Gn(r.g),r.b=Gn(r.b)),this.spaces[o].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===te&&(r.r=fs(r.r),r.g=fs(r.g),r.b=fs(r.b))),r},fromWorkingColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},toWorkingColorSpace:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ii?xo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,a){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[He]:{primaries:t,whitePoint:i,transfer:xo,toXYZ:bl,fromXYZ:Al,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:t,whitePoint:i,transfer:te,toXYZ:bl,fromXYZ:Al,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}}),s}const Gt=Ld();function Gn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Oi;class Dd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Oi===void 0&&(Oi=lr("canvas")),Oi.width=t.width,Oi.height=t.height;const i=Oi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Oi}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=lr("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Gn(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Gn(n[i]/255)*255):n[i]=Gn(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Id=0;class Ph{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?o.push(Uo(r[a].image)):o.push(Uo(r[a]))}else o=Uo(r);i.url=o}return n||(t.images[this.uuid]=i),i}}function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Dd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ud=0;class Ae extends Di{constructor(t=Ae.DEFAULT_IMAGE,n=Ae.DEFAULT_MAPPING,i=si,r=si,o=Ke,a=Hn,c=sn,l=Xn,u=Ae.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=xn(),this.name="",this.source=new Ph(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ph)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case si:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case si:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ae.DEFAULT_IMAGE=null;Ae.DEFAULT_MAPPING=ph;Ae.DEFAULT_ANISOTROPY=1;class Wt{constructor(t=0,n=0,i=0,r=1){Wt.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,o=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,o;const l=t.elements,u=l[0],h=l[4],f=l[8],d=l[1],p=l[5],_=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,y=(p+1)/2,A=(m+1)/2,w=(h+d)/4,R=(f+x)/4,L=(_+g)/4;return M>y&&M>A?M<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(M),r=w/i,o=R/i):y>A?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=w/r,o=L/r):A<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(A),i=R/o,r=L/o),this.set(i,r,o,n),this}let v=Math.sqrt((g-_)*(g-_)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(f-x)/v,this.z=(d-h)/v,this.w=Math.acos((u+p+m-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ft(this.x,t.x,n.x),this.y=Ft(this.y,t.y,n.y),this.z=Ft(this.z,t.z,n.z),this.w=Ft(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ft(this.x,t,n),this.y=Ft(this.y,t,n),this.z=Ft(this.z,t,n),this.w=Ft(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nd extends Di{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Wt(0,0,t,n),this.scissorTest=!1,this.viewport=new Wt(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Ae(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let c=0;c<a;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const n=Object.assign({},t.texture.image);return this.texture.source=new Ph(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Nd{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Lh extends Ae{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fd extends Ae{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=ze,this.minFilter=ze,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wn{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,o,a,c){let l=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3];const d=o[a+0],p=o[a+1],_=o[a+2],x=o[a+3];if(c===0){t[n+0]=l,t[n+1]=u,t[n+2]=h,t[n+3]=f;return}if(c===1){t[n+0]=d,t[n+1]=p,t[n+2]=_,t[n+3]=x;return}if(f!==x||l!==d||u!==p||h!==_){let g=1-c;const m=l*d+u*p+h*_+f*x,v=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const A=Math.sqrt(M),w=Math.atan2(A,m*v);g=Math.sin(g*w)/A,c=Math.sin(c*w)/A}const y=c*v;if(l=l*g+d*y,u=u*g+p*y,h=h*g+_*y,f=f*g+x*y,g===1-c){const A=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=A,u*=A,h*=A,f*=A}}t[n]=l,t[n+1]=u,t[n+2]=h,t[n+3]=f}static multiplyQuaternionsFlat(t,n,i,r,o,a){const c=i[r],l=i[r+1],u=i[r+2],h=i[r+3],f=o[a],d=o[a+1],p=o[a+2],_=o[a+3];return t[n]=c*_+h*f+l*p-u*d,t[n+1]=l*_+h*d+u*f-c*p,t[n+2]=u*_+h*p+c*d-l*f,t[n+3]=h*_-c*f-l*d-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,o=t._z,a=t._order,c=Math.cos,l=Math.sin,u=c(i/2),h=c(r/2),f=c(o/2),d=l(i/2),p=l(r/2),_=l(o/2);switch(a){case"XYZ":this._x=d*h*f+u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f-d*p*_;break;case"YXZ":this._x=d*h*f+u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f+d*p*_;break;case"ZXY":this._x=d*h*f-u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f-d*p*_;break;case"ZYX":this._x=d*h*f-u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f+d*p*_;break;case"YZX":this._x=d*h*f+u*p*_,this._y=u*p*f+d*h*_,this._z=u*h*_-d*p*f,this._w=u*h*f-d*p*_;break;case"XZY":this._x=d*h*f-u*p*_,this._y=u*p*f-d*h*_,this._z=u*h*_+d*p*f,this._w=u*h*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],o=n[8],a=n[1],c=n[5],l=n[9],u=n[2],h=n[6],f=n[10],d=i+c+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-u)*p,this._z=(a-r)*p}else if(i>c&&i>f){const p=2*Math.sqrt(1+i-c-f);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+u)/p}else if(c>f){const p=2*Math.sqrt(1+c-i-f);this._w=(o-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+f-i-c);this._w=(a-r)/p,this._x=(o+u)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ft(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,o=t._z,a=t._w,c=n._x,l=n._y,u=n._z,h=n._w;return this._x=i*h+a*c+r*u-o*l,this._y=r*h+a*l+o*c-i*u,this._z=o*h+a*u+i*l-r*c,this._w=a*h-i*c-r*l-o*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,o=this._z,a=this._w;let c=a*t._w+i*t._x+r*t._y+o*t._z;if(c<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,c=-c):this.copy(t),c>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-c*c;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,c),f=Math.sin((1-n)*h)/u,d=Math.sin(n*h)/u;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),o*Math.sin(n),o*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,n=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(wl.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(wl.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,o=t.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,o=t.x,a=t.y,c=t.z,l=t.w,u=2*(a*r-c*i),h=2*(c*n-o*r),f=2*(o*i-a*n);return this.x=n+l*u+a*f-c*h,this.y=i+l*h+c*u-o*f,this.z=r+l*f+o*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ft(this.x,t.x,n.x),this.y=Ft(this.y,t.y,n.y),this.z=Ft(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ft(this.x,t,n),this.y=Ft(this.y,t,n),this.z=Ft(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ft(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,o=t.z,a=n.x,c=n.y,l=n.z;return this.x=r*l-o*c,this.y=o*a-i*l,this.z=i*c-r*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ft(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new P,wl=new wn;class ge{constructor(t=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(hn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(hn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=hn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,c=o.count;a<c;a++)t.isMesh===!0?t.getVertexPosition(a,hn):hn.fromBufferAttribute(o,a),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mr.copy(i.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}const r=t.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),gr.subVectors(this.max,Ds),Bi.subVectors(t.a,Ds),zi.subVectors(t.b,Ds),ki.subVectors(t.c,Ds),jn.subVectors(zi,Bi),Kn.subVectors(ki,zi),di.subVectors(Bi,ki);let n=[0,-jn.z,jn.y,0,-Kn.z,Kn.y,0,-di.z,di.y,jn.z,0,-jn.x,Kn.z,0,-Kn.x,di.z,0,-di.x,-jn.y,jn.x,0,-Kn.y,Kn.x,0,-di.y,di.x,0];return!Fo(n,Bi,zi,ki,gr)||(n=[1,0,0,0,1,0,0,0,1],!Fo(n,Bi,zi,ki,gr))?!1:(_r.crossVectors(jn,Kn),n=[_r.x,_r.y,_r.z],Fo(n,Bi,zi,ki,gr))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new P,new P,new P,new P,new P,new P,new P,new P],hn=new P,mr=new ge,Bi=new P,zi=new P,ki=new P,jn=new P,Kn=new P,di=new P,Ds=new P,gr=new P,_r=new P,pi=new P;function Fo(s,t,n,i,r){for(let o=0,a=s.length-3;o<=a;o+=3){pi.fromArray(s,o);const c=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),l=t.dot(pi),u=n.dot(pi),h=i.dot(pi);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>c)return!1}return!0}const Od=new ge,Is=new P,Oo=new P;class Sn{constructor(t=new P,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):Od.setFromPoints(t).getCenter(i);let r=0;for(let o=0,a=t.length;o<a;o++)r=Math.max(r,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const n=Is.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Is,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Oo)),this.expandByPoint(Is.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new P,Bo=new P,xr=new P,Zn=new P,zo=new P,yr=new P,ko=new P;class bs{constructor(t=new P,n=new P(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=In.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,n),In.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){Bo.copy(t).add(n).multiplyScalar(.5),xr.copy(n).sub(t).normalize(),Zn.copy(this.origin).sub(Bo);const o=t.distanceTo(n)*.5,a=-this.direction.dot(xr),c=Zn.dot(this.direction),l=-Zn.dot(xr),u=Zn.lengthSq(),h=Math.abs(1-a*a);let f,d,p,_;if(h>0)if(f=a*l-c,d=a*c-l,_=o*h,f>=0)if(d>=-_)if(d<=_){const x=1/h;f*=x,d*=x,p=f*(f+a*d+2*c)+d*(a*f+d+2*l)+u}else d=o,f=Math.max(0,-(a*d+c)),p=-f*f+d*(d+2*l)+u;else d=-o,f=Math.max(0,-(a*d+c)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-a*o+c)),d=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+u):(f=Math.max(0,-(a*o+c)),d=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+d*(d+2*l)+u);else d=a>0?-o:o,f=Math.max(0,-(a*d+c)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Bo).addScaledVector(xr,d),p}intersectSphere(t,n){In.subVectors(t.center,this.origin);const i=In.dot(this.direction),r=In.dot(In)-i*i,o=t.radius*t.radius;if(r>o)return null;const a=Math.sqrt(o-r),c=i-a,l=i+a;return l<0?null:c<0?this.at(l,n):this.at(c,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,o,a,c,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(t.min.x-d.x)*u,r=(t.max.x-d.x)*u):(i=(t.max.x-d.x)*u,r=(t.min.x-d.x)*u),h>=0?(o=(t.min.y-d.y)*h,a=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,a=(t.min.y-d.y)*h),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),f>=0?(c=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(c=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||c>r)||((c>i||i!==i)&&(i=c),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,n,i,r,o){zo.subVectors(n,t),yr.subVectors(i,t),ko.crossVectors(zo,yr);let a=this.direction.dot(ko),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;Zn.subVectors(this.origin,t);const l=c*this.direction.dot(yr.crossVectors(Zn,yr));if(l<0)return null;const u=c*this.direction.dot(zo.cross(Zn));if(u<0||l+u>a)return null;const h=-c*Zn.dot(ko);return h<0?null:this.at(h/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(t,n,i,r,o,a,c,l,u,h,f,d,p,_,x,g){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,o,a,c,l,u,h,f,d,p,_,x,g)}set(t,n,i,r,o,a,c,l,u,h,f,d,p,_,x,g){const m=this.elements;return m[0]=t,m[4]=n,m[8]=i,m[12]=r,m[1]=o,m[5]=a,m[9]=c,m[13]=l,m[2]=u,m[6]=h,m[10]=f,m[14]=d,m[3]=p,m[7]=_,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/Hi.setFromMatrixColumn(t,0).length(),o=1/Hi.setFromMatrixColumn(t,1).length(),a=1/Hi.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,o=t.z,a=Math.cos(i),c=Math.sin(i),l=Math.cos(r),u=Math.sin(r),h=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const d=a*h,p=a*f,_=c*h,x=c*f;n[0]=l*h,n[4]=-l*f,n[8]=u,n[1]=p+_*u,n[5]=d-x*u,n[9]=-c*l,n[2]=x-d*u,n[6]=_+p*u,n[10]=a*l}else if(t.order==="YXZ"){const d=l*h,p=l*f,_=u*h,x=u*f;n[0]=d+x*c,n[4]=_*c-p,n[8]=a*u,n[1]=a*f,n[5]=a*h,n[9]=-c,n[2]=p*c-_,n[6]=x+d*c,n[10]=a*l}else if(t.order==="ZXY"){const d=l*h,p=l*f,_=u*h,x=u*f;n[0]=d-x*c,n[4]=-a*f,n[8]=_+p*c,n[1]=p+_*c,n[5]=a*h,n[9]=x-d*c,n[2]=-a*u,n[6]=c,n[10]=a*l}else if(t.order==="ZYX"){const d=a*h,p=a*f,_=c*h,x=c*f;n[0]=l*h,n[4]=_*u-p,n[8]=d*u+x,n[1]=l*f,n[5]=x*u+d,n[9]=p*u-_,n[2]=-u,n[6]=c*l,n[10]=a*l}else if(t.order==="YZX"){const d=a*l,p=a*u,_=c*l,x=c*u;n[0]=l*h,n[4]=x-d*f,n[8]=_*f+p,n[1]=f,n[5]=a*h,n[9]=-c*h,n[2]=-u*h,n[6]=p*f+_,n[10]=d-x*f}else if(t.order==="XZY"){const d=a*l,p=a*u,_=c*l,x=c*u;n[0]=l*h,n[4]=-f,n[8]=u*h,n[1]=d*f+x,n[5]=a*h,n[9]=p*f-_,n[2]=_*f-p,n[6]=c*h,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bd,t,zd)}lookAt(t,n,i){const r=this.elements;return Ye.subVectors(t,n),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),$n.crossVectors(i,Ye),$n.lengthSq()===0&&(Math.abs(i.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),$n.crossVectors(i,Ye)),$n.normalize(),vr.crossVectors(Ye,$n),r[0]=$n.x,r[4]=vr.x,r[8]=Ye.x,r[1]=$n.y,r[5]=vr.y,r[9]=Ye.y,r[2]=$n.z,r[6]=vr.z,r[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,o=this.elements,a=i[0],c=i[4],l=i[8],u=i[12],h=i[1],f=i[5],d=i[9],p=i[13],_=i[2],x=i[6],g=i[10],m=i[14],v=i[3],M=i[7],y=i[11],A=i[15],w=r[0],R=r[4],L=r[8],T=r[12],S=r[1],D=r[5],U=r[9],N=r[13],z=r[2],q=r[6],G=r[10],J=r[14],W=r[3],nt=r[7],ht=r[11],yt=r[15];return o[0]=a*w+c*S+l*z+u*W,o[4]=a*R+c*D+l*q+u*nt,o[8]=a*L+c*U+l*G+u*ht,o[12]=a*T+c*N+l*J+u*yt,o[1]=h*w+f*S+d*z+p*W,o[5]=h*R+f*D+d*q+p*nt,o[9]=h*L+f*U+d*G+p*ht,o[13]=h*T+f*N+d*J+p*yt,o[2]=_*w+x*S+g*z+m*W,o[6]=_*R+x*D+g*q+m*nt,o[10]=_*L+x*U+g*G+m*ht,o[14]=_*T+x*N+g*J+m*yt,o[3]=v*w+M*S+y*z+A*W,o[7]=v*R+M*D+y*q+A*nt,o[11]=v*L+M*U+y*G+A*ht,o[15]=v*T+M*N+y*J+A*yt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],o=t[12],a=t[1],c=t[5],l=t[9],u=t[13],h=t[2],f=t[6],d=t[10],p=t[14],_=t[3],x=t[7],g=t[11],m=t[15];return _*(+o*l*f-r*u*f-o*c*d+i*u*d+r*c*p-i*l*p)+x*(+n*l*p-n*u*d+o*a*d-r*a*p+r*u*h-o*l*h)+g*(+n*u*f-n*c*p-o*a*f+i*a*p+o*c*h-i*u*h)+m*(-r*c*h-n*l*f+n*c*d+r*a*f-i*a*d+i*l*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],o=t[3],a=t[4],c=t[5],l=t[6],u=t[7],h=t[8],f=t[9],d=t[10],p=t[11],_=t[12],x=t[13],g=t[14],m=t[15],v=f*g*u-x*d*u+x*l*p-c*g*p-f*l*m+c*d*m,M=_*d*u-h*g*u-_*l*p+a*g*p+h*l*m-a*d*m,y=h*x*u-_*f*u+_*c*p-a*x*p-h*c*m+a*f*m,A=_*f*l-h*x*l-_*c*d+a*x*d+h*c*g-a*f*g,w=n*v+i*M+r*y+o*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return t[0]=v*R,t[1]=(x*d*o-f*g*o-x*r*p+i*g*p+f*r*m-i*d*m)*R,t[2]=(c*g*o-x*l*o+x*r*u-i*g*u-c*r*m+i*l*m)*R,t[3]=(f*l*o-c*d*o-f*r*u+i*d*u+c*r*p-i*l*p)*R,t[4]=M*R,t[5]=(h*g*o-_*d*o+_*r*p-n*g*p-h*r*m+n*d*m)*R,t[6]=(_*l*o-a*g*o-_*r*u+n*g*u+a*r*m-n*l*m)*R,t[7]=(a*d*o-h*l*o+h*r*u-n*d*u-a*r*p+n*l*p)*R,t[8]=y*R,t[9]=(_*f*o-h*x*o-_*i*p+n*x*p+h*i*m-n*f*m)*R,t[10]=(a*x*o-_*c*o+_*i*u-n*x*u-a*i*m+n*c*m)*R,t[11]=(h*c*o-a*f*o-h*i*u+n*f*u+a*i*p-n*c*p)*R,t[12]=A*R,t[13]=(h*x*r-_*f*r+_*i*d-n*x*d-h*i*g+n*f*g)*R,t[14]=(_*c*r-a*x*r-_*i*l+n*x*l+a*i*g-n*c*g)*R,t[15]=(a*f*r-h*c*r+h*i*l-n*f*l-a*i*d+n*c*d)*R,this}scale(t){const n=this.elements,i=t.x,r=t.y,o=t.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,a=t.x,c=t.y,l=t.z,u=o*a,h=o*c;return this.set(u*a+i,u*c-r*l,u*l+r*c,0,u*c+r*l,h*c+i,h*l-r*a,0,u*l-r*c,h*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,o,a){return this.set(1,i,o,0,t,1,a,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,o=n._x,a=n._y,c=n._z,l=n._w,u=o+o,h=a+a,f=c+c,d=o*u,p=o*h,_=o*f,x=a*h,g=a*f,m=c*f,v=l*u,M=l*h,y=l*f,A=i.x,w=i.y,R=i.z;return r[0]=(1-(x+m))*A,r[1]=(p+y)*A,r[2]=(_-M)*A,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(d+m))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(_+M)*R,r[9]=(g-v)*R,r[10]=(1-(d+x))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let o=Hi.set(r[0],r[1],r[2]).length();const a=Hi.set(r[4],r[5],r[6]).length(),c=Hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),t.x=r[12],t.y=r[13],t.z=r[14],fn.copy(this);const u=1/o,h=1/a,f=1/c;return fn.elements[0]*=u,fn.elements[1]*=u,fn.elements[2]*=u,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=f,fn.elements[9]*=f,fn.elements[10]*=f,n.setFromRotationMatrix(fn),i.x=o,i.y=a,i.z=c,this}makePerspective(t,n,i,r,o,a,c=Vn){const l=this.elements,u=2*o/(n-t),h=2*o/(i-r),f=(n+t)/(n-t),d=(i+r)/(i-r);let p,_;if(c===Vn)p=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(c===yo)p=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,r,o,a,c=Vn){const l=this.elements,u=1/(n-t),h=1/(i-r),f=1/(a-o),d=(n+t)*u,p=(i+r)*h;let _,x;if(c===Vn)_=(a+o)*f,x=-2*f;else if(c===yo)_=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Hi=new P,fn=new St,Bd=new P(0,0,0),zd=new P(1,1,1),$n=new P,vr=new P,Ye=new P,Rl=new St,Cl=new wn;class Rn{constructor(t=0,n=0,i=0,r=Rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,o=r[0],a=r[4],c=r[8],l=r[1],u=r[5],h=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(c,p));break;case"XZY":this._z=Math.asin(-Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rn.DEFAULT_ORDER="XYZ";class Hc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let kd=0;const Pl=new P,Vi=new wn,Un=new St,Mr=new P,Us=new P,Hd=new P,Vd=new wn,Ll=new P(1,0,0),Dl=new P(0,1,0),Il=new P(0,0,1),Ul={type:"added"},Gd={type:"removed"},Gi={type:"childadded",child:null},Ho={type:"childremoved",child:null};class ae extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new P,n=new Rn,i=new wn,r=new P(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Dt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Vi.setFromAxisAngle(t,n),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(t,n){return Vi.setFromAxisAngle(t,n),this.quaternion.premultiply(Vi),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Il,t)}translateOnAxis(t,n){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Il,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Mr.copy(t):Mr.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Us,Mr,this.up):Un.lookAt(Mr,Us,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Vi.setFromRotationMatrix(Un),this.quaternion.premultiply(Vi.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(Gd),Ho.child=t,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,Hd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(t.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];o(t.shapes,f)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));r.material=c}else r.material=o(t.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];r.animations.push(o(t.animations,l))}}if(n){const c=a(t.geometries),l=a(t.materials),u=a(t.textures),h=a(t.images),f=a(t.shapes),d=a(t.skeletons),p=a(t.animations),_=a(t.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(c){const l=[];for(const u in c){const h=c[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}ae.DEFAULT_UP=new P(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new P,Nn=new P,Vo=new P,Fn=new P,Wi=new P,Xi=new P,Nl=new P,Go=new P,Wo=new P,Xo=new P,qo=new Wt,Yo=new Wt,jo=new Wt;class Ce{constructor(t=new P,n=new P,i=new P){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),dn.subVectors(t,n),r.cross(dn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(t,n,i,r,o){dn.subVectors(r,n),Nn.subVectors(i,n),Vo.subVectors(t,n);const a=dn.dot(dn),c=dn.dot(Nn),l=dn.dot(Vo),u=Nn.dot(Nn),h=Nn.dot(Vo),f=a*u-c*c;if(f===0)return o.set(0,0,0),null;const d=1/f,p=(u*l-c*h)*d,_=(a*h-c*l)*d;return o.set(1-p-_,_,p)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,n,i,r,o,a,c,l){return this.getBarycoord(t,n,i,r,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(c,Fn.z),l)}static getInterpolatedAttribute(t,n,i,r,o,a){return qo.setScalar(0),Yo.setScalar(0),jo.setScalar(0),qo.fromBufferAttribute(t,n),Yo.fromBufferAttribute(t,i),jo.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(qo,o.x),a.addScaledVector(Yo,o.y),a.addScaledVector(jo,o.z),a}static isFrontFacing(t,n,i,r){return dn.subVectors(i,n),Nn.subVectors(t,n),dn.cross(Nn).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),dn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ce.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ce.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,o){return Ce.getInterpolation(t,this.a,this.b,this.c,n,i,r,o)}containsPoint(t){return Ce.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ce.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,o=this.c;let a,c;Wi.subVectors(r,i),Xi.subVectors(o,i),Go.subVectors(t,i);const l=Wi.dot(Go),u=Xi.dot(Go);if(l<=0&&u<=0)return n.copy(i);Wo.subVectors(t,r);const h=Wi.dot(Wo),f=Xi.dot(Wo);if(h>=0&&f<=h)return n.copy(r);const d=l*f-h*u;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(Wi,a);Xo.subVectors(t,o);const p=Wi.dot(Xo),_=Xi.dot(Xo);if(_>=0&&p<=_)return n.copy(o);const x=p*u-l*_;if(x<=0&&u>=0&&_<=0)return c=u/(u-_),n.copy(i).addScaledVector(Xi,c);const g=h*_-p*f;if(g<=0&&f-h>=0&&p-_>=0)return Nl.subVectors(o,r),c=(f-h)/(f-h+(p-_)),n.copy(r).addScaledVector(Nl,c);const m=1/(g+x+d);return a=x*m,c=d*m,n.copy(i).addScaledVector(Wi,a).addScaledVector(Xi,c)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ko(s,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(t-s)*6*n:n<1/2?t:n<2/3?s+(t-s)*6*(2/3-n):s}class Ct{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=Gt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Gt.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=Gt.workingColorSpace){if(t=kc(t,1),n=Ft(n,0,1),i=Ft(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=Ko(a,o,t+1/3),this.g=Ko(a,o,t),this.b=Ko(a,o,t-1/3)}return Gt.toWorkingColorSpace(this,r),this}setStyle(t,n=ye){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=ye){const i=Dh[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Gn(t.r),this.g=Gn(t.g),this.b=Gn(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return Gt.fromWorkingColorSpace(De.copy(this),t),Math.round(Ft(De.r*255,0,255))*65536+Math.round(Ft(De.g*255,0,255))*256+Math.round(Ft(De.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Gt.workingColorSpace){Gt.fromWorkingColorSpace(De.copy(this),n);const i=De.r,r=De.g,o=De.b,a=Math.max(i,r,o),c=Math.min(i,r,o);let l,u;const h=(c+a)/2;if(c===a)l=0,u=0;else{const f=a-c;switch(u=h<=.5?f/(a+c):f/(2-a-c),a){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,n=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(De.copy(this),n),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=ye){Gt.fromWorkingColorSpace(De.copy(this),t);const n=De.r,i=De.g,r=De.b;return t!==ye?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+n,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Jn),t.getHSL(Sr);const i=nr(Jn.h,Sr.h,n),r=nr(Jn.s,Sr.s,n),o=nr(Jn.l,Sr.l,n);return this.setHSL(i,r,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,o=t.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Ct;Ct.NAMES=Dh;let Wd=0;class An extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=xn(),this.name="",this.type="Material",this.blending=us,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Da,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==La&&(i.blendSrc=this.blendSrc),this.blendDst!==Da&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ml&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const c in o){const l=o[c];delete l.metadata,a.push(l)}return a}if(n){const o=r(t.textures),a=r(t.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bn extends An{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=fh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new P,Tr=new Mt;class de{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=mc,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Tr.fromBufferAttribute(this,n),Tr.applyMatrix3(t),this.setXY(n,Tr.x,Tr.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xe.fromBufferAttribute(this,n),xe.applyMatrix3(t),this.setXYZ(n,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)xe.fromBufferAttribute(this,n),xe.applyMatrix4(t),this.setXYZ(n,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)xe.fromBufferAttribute(this,n),xe.applyNormalMatrix(t),this.setXYZ(n,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)xe.fromBufferAttribute(this,n),xe.transformDirection(t),this.setXYZ(n,xe.x,xe.y,xe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=gn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Jt(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=gn(n,this.array)),n}setX(t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=gn(n,this.array)),n}setY(t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=gn(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=gn(n,this.array)),n}setW(t,n){return this.normalized&&(n=Jt(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,o){return t*=this.itemSize,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),o=Jt(o,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mc&&(t.usage=this.usage),t}}class Ih extends de{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class Uh extends de{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Wn extends de{constructor(t,n,i){super(new Float32Array(t),n,i)}}let Xd=0;const tn=new St,Zo=new ae,qi=new P,je=new ge,Ns=new ge,be=new P;class ke extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ch(t)?Uh:Ih)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Dt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,n,i){return tn.makeTranslation(t,n,i),this.applyMatrix4(tn),this}scale(t,n,i){return tn.makeScale(t,n,i),this.applyMatrix4(tn),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wn(i,3))}else{const i=Math.min(t.length,n.count);for(let r=0;r<i;r++){const o=t[r];n.setXYZ(r,o.x,o.y,o.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ge);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];je.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sn);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(je.setFromBufferAttribute(t),n)for(let o=0,a=n.length;o<a;o++){const c=n[o];Ns.setFromBufferAttribute(c),this.morphTargetsRelative?(be.addVectors(je.min,Ns.min),je.expandByPoint(be),be.addVectors(je.max,Ns.max),je.expandByPoint(be)):(je.expandByPoint(Ns.min),je.expandByPoint(Ns.max))}je.getCenter(i);let r=0;for(let o=0,a=t.count;o<a;o++)be.fromBufferAttribute(t,o),r=Math.max(r,i.distanceToSquared(be));if(n)for(let o=0,a=n.length;o<a;o++){const c=n[o],l=this.morphTargetsRelative;for(let u=0,h=c.count;u<h;u++)be.fromBufferAttribute(c,u),l&&(qi.fromBufferAttribute(t,u),be.add(qi)),r=Math.max(r,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new de(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),c=[],l=[];for(let L=0;L<i.count;L++)c[L]=new P,l[L]=new P;const u=new P,h=new P,f=new P,d=new Mt,p=new Mt,_=new Mt,x=new P,g=new P;function m(L,T,S){u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),d.fromBufferAttribute(o,L),p.fromBufferAttribute(o,T),_.fromBufferAttribute(o,S),h.sub(u),f.sub(u),p.sub(d),_.sub(d);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(D),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(D),c[L].add(x),c[T].add(x),c[S].add(x),l[L].add(g),l[T].add(g),l[S].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let L=0,T=v.length;L<T;++L){const S=v[L],D=S.start,U=S.count;for(let N=D,z=D+U;N<z;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const M=new P,y=new P,A=new P,w=new P;function R(L){A.fromBufferAttribute(r,L),w.copy(A);const T=c[L];M.copy(T),M.sub(A.multiplyScalar(A.dot(T))).normalize(),y.crossVectors(w,T);const D=y.dot(l[L])<0?-1:1;a.setXYZW(L,M.x,M.y,M.z,D)}for(let L=0,T=v.length;L<T;++L){const S=v[L],D=S.start,U=S.count;for(let N=D,z=D+U;N<z;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new de(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new P,o=new P,a=new P,c=new P,l=new P,u=new P,h=new P,f=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){const _=t.getX(d+0),x=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,g),c.add(h),l.add(h),u.add(h),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)be.fromBufferAttribute(t,n),be.normalize(),t.setXYZ(n,be.x,be.y,be.z)}toNonIndexed(){function t(c,l){const u=c.array,h=c.itemSize,f=c.normalized,d=new u.constructor(l.length*h);let p=0,_=0;for(let x=0,g=l.length;x<g;x++){c.isInterleavedBufferAttribute?p=l[x]*c.data.stride+c.offset:p=l[x]*h;for(let m=0;m<h;m++)d[_++]=u[p++]}return new de(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ke,i=this.index.array,r=this.attributes;for(const c in r){const l=r[c],u=t(l,i);n.setAttribute(c,u)}const o=this.morphAttributes;for(const c in o){const l=[],u=o[c];for(let h=0,f=u.length;h<f;h++){const d=u[h],p=t(d,i);l.push(p)}n.morphAttributes[c]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,l=a.length;c<l;c++){const u=a[c];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,o=!0)}o&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(t.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const o=t.morphAttributes;for(const u in o){const h=[],f=o[u];for(let d=0,p=f.length;d<p;d++)h.push(f[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const c=t.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new St,mi=new bs,Er=new Sn,Ol=new P,br=new P,Ar=new P,wr=new P,$o=new P,Rr=new P,Bl=new P,Cr=new P;class Oe extends ae{constructor(t=new ke,n=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const c=this.morphTargetInfluences;if(o&&c){Rr.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const h=c[l],f=o[l];h!==0&&($o.fromBufferAttribute(f,t),a?Rr.addScaledVector($o,h):Rr.addScaledVector($o.sub(n),h))}n.add(Rr)}return n}raycast(t,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(o),mi.copy(t.ray).recast(t.near),!(Er.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Er,Ol)===null||mi.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Fl.copy(o).invert(),mi.copy(t.ray).applyMatrix4(Fl),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,mi)))}_computeIntersections(t,n,i){let r;const o=this.geometry,a=this.material,c=o.index,l=o.attributes.position,u=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,d=o.groups,p=o.drawRange;if(c!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const g=d[_],m=a[g.materialIndex],v=Math.max(g.start,p.start),M=Math.min(c.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,A=M;y<A;y+=3){const w=c.getX(y),R=c.getX(y+1),L=c.getX(y+2);r=Pr(this,m,t,i,u,h,f,w,R,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){const v=c.getX(g),M=c.getX(g+1),y=c.getX(g+2);r=Pr(this,a,t,i,u,h,f,v,M,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const g=d[_],m=a[g.materialIndex],v=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=v,A=M;y<A;y+=3){const w=y,R=y+1,L=y+2;r=Pr(this,m,t,i,u,h,f,w,R,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,m=x;g<m;g+=3){const v=g,M=g+1,y=g+2;r=Pr(this,a,t,i,u,h,f,v,M,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function qd(s,t,n,i,r,o,a,c){let l;if(t.side===Be?l=i.intersectTriangle(a,o,r,!0,c):l=i.intersectTriangle(r,o,a,t.side===vn,c),l===null)return null;Cr.copy(c),Cr.applyMatrix4(s.matrixWorld);const u=n.ray.origin.distanceTo(Cr);return u<n.near||u>n.far?null:{distance:u,point:Cr.clone(),object:s}}function Pr(s,t,n,i,r,o,a,c,l,u){s.getVertexPosition(c,br),s.getVertexPosition(l,Ar),s.getVertexPosition(u,wr);const h=qd(s,t,n,i,br,Ar,wr,Bl);if(h){const f=new P;Ce.getBarycoord(Bl,br,Ar,wr,f),r&&(h.uv=Ce.getInterpolatedAttribute(r,c,l,u,f,new Mt)),o&&(h.uv1=Ce.getInterpolatedAttribute(o,c,l,u,f,new Mt)),a&&(h.normal=Ce.getInterpolatedAttribute(a,c,l,u,f,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:c,b:l,c:u,normal:new P,materialIndex:0};Ce.getNormal(br,Ar,wr,d.normal),h.face=d,h.barycoord=f}return h}class As extends ke{constructor(t=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const c=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],u=[],h=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,t,a,o,0),_("z","y","x",1,-1,i,n,-t,a,o,1),_("x","z","y",1,1,t,i,n,r,a,2),_("x","z","y",1,-1,t,i,-n,r,a,3),_("x","y","z",1,-1,t,n,i,r,o,4),_("x","y","z",-1,-1,t,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Wn(u,3)),this.setAttribute("normal",new Wn(h,3)),this.setAttribute("uv",new Wn(f,2));function _(x,g,m,v,M,y,A,w,R,L,T){const S=y/R,D=A/L,U=y/2,N=A/2,z=w/2,q=R+1,G=L+1;let J=0,W=0;const nt=new P;for(let ht=0;ht<G;ht++){const yt=ht*D-N;for(let Ot=0;Ot<q;Ot++){const ne=Ot*S-U;nt[x]=ne*v,nt[g]=yt*M,nt[m]=z,u.push(nt.x,nt.y,nt.z),nt[x]=0,nt[g]=0,nt[m]=w>0?1:-1,h.push(nt.x,nt.y,nt.z),f.push(Ot/R),f.push(1-ht/L),J+=1}}for(let ht=0;ht<L;ht++)for(let yt=0;yt<R;yt++){const Ot=d+yt+q*ht,ne=d+yt+q*(ht+1),j=d+(yt+1)+q*(ht+1),et=d+(yt+1)+q*ht;l.push(Ot,ne,et),l.push(ne,j,et),W+=6}c.addGroup(p,W,T),p+=W,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(s){const t={};for(const n in s){t[n]={};for(const i in s[n]){const r=s[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Ne(s){const t={};for(let n=0;n<s.length;n++){const i=Ms(s[n]);for(const r in i)t[r]=i[r]}return t}function Yd(s){const t=[];for(let n=0;n<s.length;n++)t.push(s[n].clone());return t}function Nh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const jd={clone:Ms,merge:Ne};var Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends An{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Fh extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Vn}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new P,zl=new Mt,kl=new Mt;class Fe extends Fh{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=vs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vs*2*Math.atan(Math.tan(er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-t/Qn.z)}getViewSize(t,n){return this.getViewBounds(t,zl,kl),n.subVectors(kl,zl)}setViewOffset(t,n,i,r,o,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(er*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const c=this.filmOffset;c!==0&&(o+=t*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Yi=-90,ji=1;class $d extends ae{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fe(Yi,ji,t,n);r.layers=this.layers,this.add(r);const o=new Fe(Yi,ji,t,n);o.layers=this.layers,this.add(o);const a=new Fe(Yi,ji,t,n);a.layers=this.layers,this.add(a);const c=new Fe(Yi,ji,t,n);c.layers=this.layers,this.add(c);const l=new Fe(Yi,ji,t,n);l.layers=this.layers,this.add(l);const u=new Fe(Yi,ji,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,o,a,c,l]=n;for(const u of n)this.remove(u);if(t===Vn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,c,l,u,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,o),t.setRenderTarget(i,1,r),t.render(n,a),t.setRenderTarget(i,2,r),t.render(n,c),t.setRenderTarget(i,3,r),t.render(n,l),t.setRenderTarget(i,4,r),t.render(n,u),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,r),t.render(n,h),t.setRenderTarget(f,d,p),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Oh extends Ae{constructor(t,n,i,r,o,a,c,l,u,h){t=t!==void 0?t:[],n=n!==void 0?n:ms,super(t,n,i,r,o,a,c,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jd extends Li{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Oh(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ke}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new As(5,5,5),o=new li({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Be,blending:ai});o.uniforms.tEquirect.value=n;const a=new Oe(r,o),c=n.minFilter;return n.minFilter===Hn&&(n.minFilter=Ke),new $d(1,10,this).update(t,a),n.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(t,n,i,r){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,r);t.setRenderTarget(o)}}class Qd extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class tp{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=mc,this.updateRanges=[],this.version=0,this.uuid=xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[t+r]=n.array[i+r];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ue=new P;class Vc{constructor(t,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.applyMatrix4(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.applyNormalMatrix(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Ue.fromBufferAttribute(this,n),Ue.transformDirection(t),this.setXYZ(n,Ue.x,Ue.y,Ue.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=gn(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Jt(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Jt(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=gn(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=gn(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=gn(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=gn(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,n,i,r,o){return t=t*this.data.stride+this.offset,this.normalized&&(n=Jt(n,this.array),i=Jt(i,this.array),r=Jt(r,this.array),o=Jt(o,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new de(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vc(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Hl=new P,Vl=new Wt,Gl=new Wt,ep=new P,Wl=new St,Lr=new P,Jo=new Sn,Xl=new St,Qo=new bs;class np extends Oe{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_l,this.bindMatrix=new St,this.bindMatrixInverse=new St,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new ge),this.boundingBox.makeEmpty();const n=t.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Lr),this.boundingBox.expandByPoint(Lr)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Sn),this.boundingSphere.makeEmpty();const n=t.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Lr),this.boundingSphere.expandByPoint(Lr)}copy(t,n){return super.copy(t,n),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,n){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jo.copy(this.boundingSphere),Jo.applyMatrix4(r),t.ray.intersectsSphere(Jo)!==!1&&(Xl.copy(r).invert(),Qo.copy(t.ray).applyMatrix4(Xl),!(this.boundingBox!==null&&Qo.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,n,Qo)))}getVertexPosition(t,n){return super.getVertexPosition(t,n),this.applyBoneTransform(t,n),n}bind(t,n){this.skeleton=t,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Wt,n=this.geometry.attributes.skinWeight;for(let i=0,r=n.count;i<r;i++){t.fromBufferAttribute(n,i);const o=1/t.manhattanLength();o!==1/0?t.multiplyScalar(o):t.set(1,0,0,0),n.setXYZW(i,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===_l?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Jf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,n){const i=this.skeleton,r=this.geometry;Vl.fromBufferAttribute(r.attributes.skinIndex,t),Gl.fromBufferAttribute(r.attributes.skinWeight,t),Hl.copy(n).applyMatrix4(this.bindMatrix),n.set(0,0,0);for(let o=0;o<4;o++){const a=Gl.getComponent(o);if(a!==0){const c=Vl.getComponent(o);Wl.multiplyMatrices(i.bones[c].matrixWorld,i.boneInverses[c]),n.addScaledVector(ep.copy(Hl).applyMatrix4(Wl),a)}}return n.applyMatrix4(this.bindMatrixInverse)}}class Bh extends ae{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zh extends Ae{constructor(t=null,n=1,i=1,r,o,a,c,l,u=ze,h=ze,f,d){super(null,a,c,l,u,h,r,o,f,d),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ql=new St,ip=new St;class Gc{constructor(t=[],n=[]){this.uuid=xn(),this.bones=t.slice(0),this.boneInverses=n,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),n.length===0)this.calculateInverses();else if(t.length!==n.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new St)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,n=this.bones.length;t<n;t++){const i=new St;this.bones[t]&&i.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&i.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const t=this.bones,n=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let o=0,a=t.length;o<a;o++){const c=t[o]?t[o].matrixWorld:ip;ql.multiplyMatrices(c,n[o]),ql.toArray(i,o*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Gc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const n=new Float32Array(t*t*4);n.set(this.boneMatrices);const i=new zh(n,t,t,sn,_n);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(t){for(let n=0,i=this.bones.length;n<i;n++){const r=this.bones[n];if(r.name===t)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,n){this.uuid=t.uuid;for(let i=0,r=t.bones.length;i<r;i++){const o=t.bones[i];let a=n[o];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",o),a=new Bh),this.bones.push(a),this.boneInverses.push(new St().fromArray(t.boneInverses[i]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const n=this.bones,i=this.boneInverses;for(let r=0,o=n.length;r<o;r++){const a=n[r];t.bones.push(a.uuid);const c=i[r];t.boneInverses.push(c.toArray())}return t}}class gc extends de{constructor(t,n,i,r=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ki=new St,Yl=new St,Dr=[],jl=new ge,sp=new St,Fs=new Oe,Os=new Sn;class rp extends Oe{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new gc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,sp)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new ge),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ki),jl.copy(t.boundingBox).applyMatrix4(Ki),this.boundingBox.union(jl)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Sn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ki),Os.copy(t.boundingSphere).applyMatrix4(Ki),this.boundingSphere.union(Os)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,o=i.length+1,a=t*o+1;for(let c=0;c<i.length;c++)i[c]=r[a+c]}raycast(t,n){const i=this.matrixWorld,r=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(i),t.ray.intersectsSphere(Os)!==!1))for(let o=0;o<r;o++){this.getMatrixAt(o,Ki),Yl.multiplyMatrices(i,Ki),Fs.matrixWorld=Yl,Fs.raycast(t,Dr);for(let a=0,c=Dr.length;a<c;a++){const l=Dr[a];l.instanceId=o,l.object=this,n.push(l)}Dr.length=0}}setColorAt(t,n){this.instanceColor===null&&(this.instanceColor=new gc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,n){n.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new zh(new Float32Array(r*this.count),r,this.count,Fc,_n));const o=this.morphTexture.source.data.data;let a=0;for(let u=0;u<i.length;u++)a+=i[u];const c=this.geometry.morphTargetsRelative?1:1-a,l=r*t;o[l]=c,o.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const ta=new P,op=new P,ap=new Dt;class Tn{constructor(t=new P(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=ta.subVectors(i,n).cross(op.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(ta),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||ap.getNormalMatrix(t),r=this.coplanarPoint(ta).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Sn,Ir=new P;class Wc{constructor(t=new Tn,n=new Tn,i=new Tn,r=new Tn,o=new Tn,a=new Tn){this.planes=[t,n,i,r,o,a]}set(t,n,i,r,o,a){const c=this.planes;return c[0].copy(t),c[1].copy(n),c[2].copy(i),c[3].copy(r),c[4].copy(o),c[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Vn){const i=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],_=r[9],x=r[10],g=r[11],m=r[12],v=r[13],M=r[14],y=r[15];if(i[0].setComponents(l-o,d-u,g-p,y-m).normalize(),i[1].setComponents(l+o,d+u,g+p,y+m).normalize(),i[2].setComponents(l+a,d+h,g+_,y+v).normalize(),i[3].setComponents(l-a,d-h,g-_,y-v).normalize(),i[4].setComponents(l-c,d-f,g-x,y-M).normalize(),n===Vn)i[5].setComponents(l+c,d+f,g+x,y+M).normalize();else if(n===yo)i[5].setComponents(c,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gi.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ir.x=r.normal.x>0?t.max.x:t.min.x,Ir.y=r.normal.y>0?t.max.y:t.min.y,Ir.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xc extends An{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const vo=new P,Mo=new P,Kl=new St,Bs=new bs,Ur=new Sn,ea=new P,Zl=new P;class qc extends ae{constructor(t=new ke,n=new Xc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)vo.fromBufferAttribute(n,r-1),Mo.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=vo.distanceTo(Mo);t.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,o=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(r),Ur.radius+=o,t.ray.intersectsSphere(Ur)===!1)return;Kl.copy(r).invert(),Bs.copy(t.ray).applyMatrix4(Kl);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,u=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=p,g=_-1;x<g;x+=u){const m=h.getX(x),v=h.getX(x+1),M=Nr(this,t,Bs,l,m,v);M&&n.push(M)}if(this.isLineLoop){const x=h.getX(_-1),g=h.getX(p),m=Nr(this,t,Bs,l,x,g);m&&n.push(m)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=p,g=_-1;x<g;x+=u){const m=Nr(this,t,Bs,l,x,x+1);m&&n.push(m)}if(this.isLineLoop){const x=Nr(this,t,Bs,l,_-1,p);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Nr(s,t,n,i,r,o){const a=s.geometry.attributes.position;if(vo.fromBufferAttribute(a,r),Mo.fromBufferAttribute(a,o),n.distanceSqToSegment(vo,Mo,ea,Zl)>i)return;ea.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(ea);if(!(l<t.near||l>t.far))return{distance:l,point:Zl.clone().applyMatrix4(s.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:s}}const $l=new P,Jl=new P;class kh extends qc{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let r=0,o=n.count;r<o;r+=2)$l.fromBufferAttribute(n,r),Jl.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$l.distanceTo(Jl);t.setAttribute("lineDistance",new Wn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cp extends qc{constructor(t,n){super(t,n),this.isLineLoop=!0,this.type="LineLoop"}}class Hh extends An{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Ql=new St,_c=new bs,Fr=new Sn,Or=new P;class lp extends ae{constructor(t=new ke,n=new Hh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,o=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),Fr.radius+=o,t.ray.intersectsSphere(Fr)===!1)return;Ql.copy(r).invert(),_c.copy(t.ray).applyMatrix4(Ql);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let _=d,x=p;_<x;_++){const g=u.getX(_);Or.fromBufferAttribute(f,g),tu(Or,g,l,r,t,n,this)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=d,x=p;_<x;_++)Or.fromBufferAttribute(f,_),tu(Or,_,l,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const c=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function tu(s,t,n,i,r,o,a){const c=_c.distanceSqToPoint(s);if(c<n){const l=new P;_c.closestPointToPoint(s,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;o.push({distance:u,distanceToRay:Math.sqrt(c),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Ci extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Vh extends Ae{constructor(t,n,i,r,o,a,c,l,u,h=hs){if(h!==hs&&h!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===hs&&(i=Pi),i===void 0&&h===ys&&(i=xs),super(null,r,o,a,c,l,h,i,u),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=c!==void 0?c:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ao extends ke{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const o=t/2,a=n/2,c=Math.floor(i),l=Math.floor(r),u=c+1,h=l+1,f=t/c,d=n/l,p=[],_=[],x=[],g=[];for(let m=0;m<h;m++){const v=m*d-a;for(let M=0;M<u;M++){const y=M*f-o;_.push(y,-v,0),x.push(0,0,1),g.push(M/c),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<c;v++){const M=v+u*m,y=v+u*(m+1),A=v+1+u*(m+1),w=v+1+u*m;p.push(M,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new Wn(_,3)),this.setAttribute("normal",new Wn(x,3)),this.setAttribute("uv",new Wn(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.width,t.height,t.widthSegments,t.heightSegments)}}class Yc extends An{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ah,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cn extends Yc{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class up extends An{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class hp extends An{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}function Br(s,t,n){return!s||!n&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function fp(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function dp(s){function t(r,o){return s[r]-s[o]}const n=s.length,i=new Array(n);for(let r=0;r!==n;++r)i[r]=r;return i.sort(t),i}function eu(s,t,n){const i=s.length,r=new s.constructor(i);for(let o=0,a=0;a!==i;++o){const c=n[o]*t;for(let l=0;l!==t;++l)r[a++]=s[c+l]}return r}function Gh(s,t,n,i){let r=1,o=s[0];for(;o!==void 0&&o[i]===void 0;)o=s[r++];if(o===void 0)return;let a=o[i];if(a!==void 0)if(Array.isArray(a))do a=o[i],a!==void 0&&(t.push(o.time),n.push.apply(n,a)),o=s[r++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[i],a!==void 0&&(t.push(o.time),a.toArray(n,n.length)),o=s[r++];while(o!==void 0);else do a=o[i],a!==void 0&&(t.push(o.time),n.push(a)),o=s[r++];while(o!==void 0)}class fr{constructor(t,n,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){const n=this.parameterPositions;let i=this._cachedIndex,r=n[i],o=n[i-1];n:{t:{let a;e:{i:if(!(t<r)){for(let c=i+2;;){if(r===void 0){if(t<o)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===c)break;if(o=r,r=n[++i],t<r)break t}a=n.length;break e}if(!(t>=o)){const c=n[1];t<c&&(i=2,o=c);for(let l=i-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=o,o=n[--i-1],t>=o)break t}a=i,i=0;break e}break n}for(;i<a;){const c=i+a>>>1;t<n[c]?a=c:i=c+1}if(r=n[i],o=n[i-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,o,r)}return this.interpolate_(i,o,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r;for(let a=0;a!==r;++a)n[a]=i[o+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pp extends fr{constructor(t,n,i,r){super(t,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xl,endingEnd:xl}}intervalChanged_(t,n,i){const r=this.parameterPositions;let o=t-2,a=t+1,c=r[o],l=r[a];if(c===void 0)switch(this.getSettings_().endingStart){case yl:o=t,c=2*n-i;break;case vl:o=r.length-2,c=n+r[o]-r[o+1];break;default:o=t,c=i}if(l===void 0)switch(this.getSettings_().endingEnd){case yl:a=t,l=2*i-n;break;case vl:a=1,l=i+r[1]-r[0];break;default:a=t-1,l=n}const u=(i-n)*.5,h=this.valueSize;this._weightPrev=u/(n-c),this._weightNext=u/(l-i),this._offsetPrev=o*h,this._offsetNext=a*h}interpolate_(t,n,i,r){const o=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=t*c,u=l-c,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(i-n)/(r-n),x=_*_,g=x*_,m=-d*g+2*d*x-d*_,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*_+1,M=(-1-p)*g+(1.5+p)*x+.5*_,y=p*g-p*x;for(let A=0;A!==c;++A)o[A]=m*a[h+A]+v*a[u+A]+M*a[l+A]+y*a[f+A];return o}}class mp extends fr{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t,n,i,r){const o=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=t*c,u=l-c,h=(i-n)/(r-n),f=1-h;for(let d=0;d!==c;++d)o[d]=a[u+d]*f+a[l+d]*h;return o}}class gp extends fr{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}}class Pn{constructor(t,n,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Br(n,this.TimeBufferType),this.values=Br(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){const n=t.constructor;let i;if(n.toJSON!==this.toJSON)i=n.toJSON(t);else{i={name:t.name,times:Br(t.times,Array),values:Br(t.values,Array)};const r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pp(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let n;switch(t){case ar:n=this.InterpolantFactoryMethodDiscrete;break;case cr:n=this.InterpolantFactoryMethodLinear;break;case Do:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return cr;case this.InterpolantFactoryMethodSmooth:return Do}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=t}return this}scale(t){if(t!==1){const n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=t}return this}trim(t,n){const i=this.times,r=i.length;let o=0,a=r-1;for(;o!==r&&i[o]<t;)++o;for(;a!==-1&&i[a]>n;)--a;if(++a,o!==0||a!==r){o>=a&&(a=Math.max(a,1),o=a-1);const c=this.getValueSize();this.times=i.slice(o,a),this.values=this.values.slice(o*c,a*c)}return this}validate(){let t=!0;const n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const i=this.times,r=this.values,o=i.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let c=0;c!==o;c++){const l=i[c];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,c,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,c,l,a),t=!1;break}a=l}if(r!==void 0&&fp(r))for(let c=0,l=r.length;c!==l;++c){const u=r[c];if(isNaN(u)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,c,u),t=!1;break}}return t}optimize(){const t=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Do,o=t.length-1;let a=1;for(let c=1;c<o;++c){let l=!1;const u=t[c],h=t[c+1];if(u!==h&&(c!==1||u!==t[0]))if(r)l=!0;else{const f=c*i,d=f-i,p=f+i;for(let _=0;_!==i;++_){const x=n[f+_];if(x!==n[d+_]||x!==n[p+_]){l=!0;break}}}if(l){if(c!==a){t[a]=t[c];const f=c*i,d=a*i;for(let p=0;p!==i;++p)n[d+p]=n[f+p]}++a}}if(o>0){t[a]=t[o];for(let c=o*i,l=a*i,u=0;u!==i;++u)n[l+u]=n[c+u];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=n.slice(0,a*i)):(this.times=t,this.values=n),this}clone(){const t=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,t,n);return r.createInterpolant=this.createInterpolant,r}}Pn.prototype.TimeBufferType=Float32Array;Pn.prototype.ValueBufferType=Float32Array;Pn.prototype.DefaultInterpolation=cr;class ws extends Pn{constructor(t,n,i){super(t,n,i)}}ws.prototype.ValueTypeName="bool";ws.prototype.ValueBufferType=Array;ws.prototype.DefaultInterpolation=ar;ws.prototype.InterpolantFactoryMethodLinear=void 0;ws.prototype.InterpolantFactoryMethodSmooth=void 0;class Wh extends Pn{}Wh.prototype.ValueTypeName="color";class Ss extends Pn{}Ss.prototype.ValueTypeName="number";class _p extends fr{constructor(t,n,i,r){super(t,n,i,r)}interpolate_(t,n,i,r){const o=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=(i-n)/(r-n);let u=t*c;for(let h=u+c;u!==h;u+=4)wn.slerpFlat(o,0,a,u-c,a,u,l);return o}}class Ts extends Pn{InterpolantFactoryMethodLinear(t){return new _p(this.times,this.values,this.getValueSize(),t)}}Ts.prototype.ValueTypeName="quaternion";Ts.prototype.InterpolantFactoryMethodSmooth=void 0;class Rs extends Pn{constructor(t,n,i){super(t,n,i)}}Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ar;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Es extends Pn{}Es.prototype.ValueTypeName="vector";class xp{constructor(t="",n=-1,i=[],r=Qf){this.name=t,this.tracks=i,this.duration=n,this.blendMode=r,this.uuid=xn(),this.duration<0&&this.resetDuration()}static parse(t){const n=[],i=t.tracks,r=1/(t.fps||1);for(let a=0,c=i.length;a!==c;++a)n.push(vp(i[a]).scale(r));const o=new this(t.name,t.duration,n,t.blendMode);return o.uuid=t.uuid,o}static toJSON(t){const n=[],i=t.tracks,r={name:t.name,duration:t.duration,tracks:n,uuid:t.uuid,blendMode:t.blendMode};for(let o=0,a=i.length;o!==a;++o)n.push(Pn.toJSON(i[o]));return r}static CreateFromMorphTargetSequence(t,n,i,r){const o=n.length,a=[];for(let c=0;c<o;c++){let l=[],u=[];l.push((c+o-1)%o,c,(c+1)%o),u.push(0,1,0);const h=dp(l);l=eu(l,1,h),u=eu(u,1,h),!r&&l[0]===0&&(l.push(o),u.push(u[0])),a.push(new Ss(".morphTargetInfluences["+n[c].name+"]",l,u).scale(1/i))}return new this(t,-1,a)}static findByName(t,n){let i=t;if(!Array.isArray(t)){const r=t;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===n)return i[r];return null}static CreateClipsFromMorphTargetSequences(t,n,i){const r={},o=/^([\w-]*?)([\d]+)$/;for(let c=0,l=t.length;c<l;c++){const u=t[c],h=u.name.match(o);if(h&&h.length>1){const f=h[1];let d=r[f];d||(r[f]=d=[]),d.push(u)}}const a=[];for(const c in r)a.push(this.CreateFromMorphTargetSequence(c,r[c],n,i));return a}static parseAnimation(t,n){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,_,x){if(p.length!==0){const g=[],m=[];Gh(p,g,m,_),g.length!==0&&x.push(new f(d,g,m))}},r=[],o=t.name||"default",a=t.fps||30,c=t.blendMode;let l=t.length||-1;const u=t.hierarchy||[];for(let f=0;f<u.length;f++){const d=u[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)p[d[_].morphTargets[x]]=-1;for(const x in p){const g=[],m=[];for(let v=0;v!==d[_].morphTargets.length;++v){const M=d[_];g.push(M.time),m.push(M.morphTarget===x?1:0)}r.push(new Ss(".morphTargetInfluence["+x+"]",g,m))}l=p.length*a}else{const p=".bones["+n[f].name+"]";i(Es,p+".position",d,"pos",r),i(Ts,p+".quaternion",d,"rot",r),i(Es,p+".scale",d,"scl",r)}}return r.length===0?null:new this(o,l,r,c)}resetDuration(){const t=this.tracks;let n=0;for(let i=0,r=t.length;i!==r;++i){const o=this.tracks[i];n=Math.max(n,o.times[o.times.length-1])}return this.duration=n,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let n=0;n<this.tracks.length;n++)t=t&&this.tracks[n].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function yp(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ss;case"vector":case"vector2":case"vector3":case"vector4":return Es;case"color":return Wh;case"quaternion":return Ts;case"bool":case"boolean":return ws;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function vp(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=yp(s.type);if(s.times===void 0){const n=[],i=[];Gh(s.keys,n,i,"value"),s.times=n,s.values=i}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const ri={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Mp{constructor(t,n,i){const r=this;let o=!1,a=0,c=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(h){c++,o===!1&&r.onStart!==void 0&&r.onStart(h,a,c),o=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,c),a===c&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return u.push(h,f),this},this.removeHandler=function(h){const f=u.indexOf(h);return f!==-1&&u.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const Xh=new Mp;let Ii=class{constructor(t){this.manager=t!==void 0?t:Xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(r,o){i.load(t,r,n,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";const On={};class Sp extends Error{constructor(t,n){super(t),this.response=n}}class jc extends Ii{constructor(t){super(t)}load(t,n,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=ri.get(t);if(o!==void 0)return this.manager.itemStart(t),setTimeout(()=>{n&&n(o),this.manager.itemEnd(t)},0),o;if(On[t]!==void 0){On[t].push({onLoad:n,onProgress:i,onError:r});return}On[t]=[],On[t].push({onLoad:n,onProgress:i,onError:r});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),c=this.mimeType,l=this.responseType;fetch(a).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const h=On[t],f=u.body.getReader(),d=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=d?parseInt(d):0,_=p!==0;let x=0;const g=new ReadableStream({start(m){v();function v(){f.read().then(({done:M,value:y})=>{if(M)m.close();else{x+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let w=0,R=h.length;w<R;w++){const L=h[w];L.onProgress&&L.onProgress(A)}m.enqueue(y),v()}},M=>{m.error(M)})}}});return new Response(g)}else throw new Sp(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(h=>new DOMParser().parseFromString(h,c));case"json":return u.json();default:if(c===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(c),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return u.arrayBuffer().then(_=>p.decode(_))}}}).then(u=>{ri.add(t,u);const h=On[t];delete On[t];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const h=On[t];if(h===void 0)throw this.manager.itemError(t),u;delete On[t];for(let f=0,d=h.length;f<d;f++){const p=h[f];p.onError&&p.onError(u)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Tp extends Ii{constructor(t){super(t)}load(t,n,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,a=ri.get(t);if(a!==void 0)return o.manager.itemStart(t),setTimeout(function(){n&&n(a),o.manager.itemEnd(t)},0),a;const c=lr("img");function l(){h(),ri.add(t,this),n&&n(this),o.manager.itemEnd(t)}function u(f){h(),r&&r(f),o.manager.itemError(t),o.manager.itemEnd(t)}function h(){c.removeEventListener("load",l,!1),c.removeEventListener("error",u,!1)}return c.addEventListener("load",l,!1),c.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),o.manager.itemStart(t),c.src=t,c}}class qh extends Ii{constructor(t){super(t)}load(t,n,i,r){const o=new Ae,a=new Tp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(c){o.image=c,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class Kc extends ae{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const na=new St,nu=new P,iu=new P;class Zc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wc,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;nu.setFromMatrixPosition(t.matrixWorld),n.position.copy(nu),iu.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(iu),n.updateMatrixWorld(),na.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ep extends Zc{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const n=this.camera,i=vs*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,o=t.distance||n.far;(i!==n.fov||r!==n.aspect||o!==n.far)&&(n.fov=i,n.aspect=r,n.far=o,n.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class bp extends Kc{constructor(t,n,i=0,r=Math.PI/3,o=0,a=2){super(t,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=i,this.angle=r,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new Ep}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const su=new St,zs=new P,ia=new P;class Ap extends Zc{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Mt(4,2),this._viewportCount=6,this._viewports=[new Wt(2,1,1,1),new Wt(0,1,1,1),new Wt(3,1,1,1),new Wt(1,1,1,1),new Wt(3,0,1,1),new Wt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,n=0){const i=this.camera,r=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),i.position.copy(zs),ia.copy(i.position),ia.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ia),i.updateMatrixWorld(),r.makeTranslation(-zs.x,-zs.y,-zs.z),su.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su)}}class wp extends Kc{constructor(t,n,i=0,r=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ap}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class $c extends Fh{constructor(t=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-t,a=i+t,c=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,c-=h*this.view.offsetY,l=c-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,c,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Rp extends Zc{constructor(){super(new $c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cp extends Kc{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ir{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let n="";for(let i=0,r=t.length;i<r;i++)n+=String.fromCharCode(t[i]);try{return decodeURIComponent(escape(n))}catch{return n}}static extractUrlBase(t){const n=t.lastIndexOf("/");return n===-1?"./":t.slice(0,n+1)}static resolveURL(t,n){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(t)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:n+t)}}class Pp extends Ii{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,n,i,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const o=this,a=ri.get(t);if(a!==void 0){if(o.manager.itemStart(t),a.then){a.then(u=>{n&&n(u),o.manager.itemEnd(t)}).catch(u=>{r&&r(u)});return}return setTimeout(function(){n&&n(a),o.manager.itemEnd(t)},0),a}const c={};c.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",c.headers=this.requestHeader;const l=fetch(t,c).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(o.options,{colorSpaceConversion:"none"}))}).then(function(u){return ri.add(t,u),n&&n(u),o.manager.itemEnd(t),u}).catch(function(u){r&&r(u),ri.remove(t),o.manager.itemError(t),o.manager.itemEnd(t)});ri.add(t,l),o.manager.itemStart(t)}}let zr;class Lp{static getContext(){return zr===void 0&&(zr=new(window.AudioContext||window.webkitAudioContext)),zr}static setContext(t){zr=t}}class Dp extends Ii{constructor(t){super(t)}load(t,n,i,r){const o=this,a=new jc(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){try{const u=l.slice(0);Lp.getContext().decodeAudioData(u,function(f){n(f)}).catch(c)}catch(u){c(u)}},i,r);function c(l){r?r(l):console.error(l),o.manager.itemError(t)}}}class Ip extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Up{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ru(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=ru();t=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=t}return t}}function ru(){return performance.now()}const Jc="\\[\\]\\.:\\/",Np=new RegExp("["+Jc+"]","g"),Qc="[^"+Jc+"]",Fp="[^"+Jc.replace("\\.","")+"]",Op=/((?:WC+[\/:])*)/.source.replace("WC",Qc),Bp=/(WCOD+)?/.source.replace("WCOD",Fp),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qc),kp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qc),Hp=new RegExp("^"+Op+Bp+zp+kp+"$"),Vp=["material","materials","bones","map"];class Gp{constructor(t,n,i){const r=i||Qt.parseTrackName(n);this._targetGroup=t,this._bindings=t.subscribe_(n,r)}getValue(t,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,n)}setValue(t,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,o=i.length;r!==o;++r)i[r].setValue(t,n)}bind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].bind()}unbind(){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].unbind()}}class Qt{constructor(t,n,i){this.path=n,this.parsedPath=i||Qt.parseTrackName(n),this.node=Qt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,i){return t&&t.isAnimationObjectGroup?new Qt.Composite(t,n,i):new Qt(t,n,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Np,"")}static parseTrackName(t){const n=Hp.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const o=i.nodeName.substring(r+1);Vp.indexOf(o)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=o)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){const i=t.skeleton.getBoneByName(n);if(i!==void 0)return i}if(t.children){const i=function(o){for(let a=0;a<o.length;a++){const c=o[a];if(c.name===n||c.uuid===n)return c;const l=i(c.children);if(l)return l}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)t[n++]=i[r]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++]}_setValue_array_setNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){const i=this.resolvedProperty;for(let r=0,o=i.length;r!==o;++r)i[r]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let o=n.propertyIndex;if(t||(t=Qt.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}const a=t[r];if(a===void 0){const u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?c=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qt.Composite=Gp;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ou=new St;class au{constructor(t,n,i=0,r=1/0){this.ray=new bs(t,n),this.near=i,this.far=r,this.camera=null,this.layers=new Hc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return ou.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ou),this}intersectObject(t,n=!0,i=[]){return xc(t,this,i,n),i.sort(cu),i}intersectObjects(t,n=!0,i=[]){for(let r=0,o=t.length;r<o;r++)xc(t[r],this,i,n);return i.sort(cu),i}}function cu(s,t){return s.distance-t.distance}function xc(s,t,n,i){let r=!0;if(s.layers.test(t.layers)&&s.raycast(t,n)===!1&&(r=!1),r===!0&&i===!0){const o=s.children;for(let a=0,c=o.length;a<c;a++)xc(o[a],t,n,!0)}}class lu{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ft(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ft(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const uu=new P,kr=new P;class yn{constructor(t=new P,n=new P){this.start=t,this.end=n}set(t,n){return this.start.copy(t),this.end.copy(n),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,n){return this.delta(n).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,n){uu.subVectors(t,this.start),kr.subVectors(this.end,this.start);const i=kr.dot(kr);let o=kr.dot(uu)/i;return n&&(o=Ft(o,0,1)),o}closestPointToPoint(t,n,i){const r=this.closestPointToPointParameter(t,n);return this.delta(i).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Hr=new ge;class Wp extends kh{constructor(t,n=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),o=new ke;o.setIndex(new de(i,1)),o.setAttribute("position",new de(r,3)),super(o,new Xc({color:n,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(t){if(t!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Hr.setFromObject(this.object),Hr.isEmpty())return;const n=Hr.min,i=Hr.max,r=this.geometry.attributes.position,o=r.array;o[0]=i.x,o[1]=i.y,o[2]=i.z,o[3]=n.x,o[4]=i.y,o[5]=i.z,o[6]=n.x,o[7]=n.y,o[8]=i.z,o[9]=i.x,o[10]=n.y,o[11]=i.z,o[12]=i.x,o[13]=i.y,o[14]=n.z,o[15]=n.x,o[16]=i.y,o[17]=n.z,o[18]=n.x,o[19]=n.y,o[20]=n.z,o[21]=i.x,o[22]=n.y,o[23]=n.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,n){return super.copy(t,n),this.object=t.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Xp extends Di{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function hu(s,t,n,i){const r=qp(i);switch(n){case yh:return s*t;case Mh:return s*t;case Sh:return s*t*2;case Fc:return s*t/r.components*r.byteLength;case Oc:return s*t/r.components*r.byteLength;case Th:return s*t*2/r.components*r.byteLength;case Bc:return s*t*2/r.components*r.byteLength;case vh:return s*t*3/r.components*r.byteLength;case sn:return s*t*4/r.components*r.byteLength;case zc:return s*t*4/r.components*r.byteLength;case co:case lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case uo:case ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ga:case Xa:return Math.max(s,16)*Math.max(t,8)/4;case Va:case Wa:return Math.max(s,8)*Math.max(t,8)/2;case qa:case Ya:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ja:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case $a:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Ja:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ec:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case nc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ic:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case sc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case rc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case oc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ac:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case cc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case fo:case lc:case uc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Eh:case hc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case fc:case dc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function qp(s){switch(s){case Xn:case gh:return{byteLength:1,components:1};case or:case _h:case hr:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case Pi:case Ic:case _n:return{byteLength:4,components:1};case xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eo);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yh(){let s=null,t=!1,n=null,i=null;function r(o,a){n(o,a),i=s.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=s.requestAnimationFrame(r),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){n=o},setContext:function(o){s=o}}}function Yp(s){const t=new WeakMap;function n(c,l){const u=c.array,h=c.usage,f=u.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,u,h),c.onUploadCallback();let p;if(u instanceof Float32Array)p=s.FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=s.SHORT;else if(u instanceof Uint32Array)p=s.UNSIGNED_INT;else if(u instanceof Int32Array)p=s.INT;else if(u instanceof Int8Array)p=s.BYTE;else if(u instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function i(c,l,u){const h=l.array,f=l.updateRanges;if(s.bindBuffer(u,c),f.length===0)s.bufferSubData(u,0,h);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];s.bufferSubData(u,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),t.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=t.get(c);l&&(s.deleteBuffer(l.buffer),t.delete(c))}function a(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const h=t.get(c);(!h||h.version<c.version)&&t.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const u=t.get(c);if(u===void 0)t.set(c,n(c,l));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,c,l),u.version=c.version}}return{get:r,remove:o,update:a}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tm=`#ifdef USE_AOMAP
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
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,om=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,am=`#ifdef USE_IRIDESCENCE
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
#endif`,cm=`#ifdef USE_BUMPMAP
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,_m=`#define PI 3.141592653589793
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
} // validated`,xm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ym=`vec3 transformedNormal = objectNormal;
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
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Tm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Em="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Am=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rm=`#ifdef USE_ENVMAP
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
#endif`,Cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
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
}`,Fm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zm=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,km=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xm=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,qm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Ym=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,jm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ig=`#if defined( USE_POINTS_UV )
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
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,og=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
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
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Tg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ug=`#ifdef USE_SKINNING
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
#endif`,Ng=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kg=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hg=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vg=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jg=`uniform sampler2D t2D;
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
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,t_=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e_=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,n_=`#define DISTANCE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
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
}`,a_=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,c_=`uniform vec3 diffuse;
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
}`,l_=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,u_=`#define LAMBERT
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
}`,h_=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,f_=`#define MATCAP
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
}`,d_=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,p_=`#define NORMAL
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
}`,m_=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,g_=`#define PHONG
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
}`,__=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,x_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,y_=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,v_=`#define TOON
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
}`,M_=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,S_=`uniform vec3 diffuse;
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
}`,T_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,E_=`uniform vec3 color;
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
}`,b_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,A_=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:jp,alphahash_pars_fragment:Kp,alphamap_fragment:Zp,alphamap_pars_fragment:$p,alphatest_fragment:Jp,alphatest_pars_fragment:Qp,aomap_fragment:tm,aomap_pars_fragment:em,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:om,iridescence_fragment:am,bumpmap_pars_fragment:cm,clipping_planes_fragment:lm,clipping_planes_pars_fragment:um,clipping_planes_pars_vertex:hm,clipping_planes_vertex:fm,color_fragment:dm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:_m,cube_uv_reflection_fragment:xm,defaultnormal_vertex:ym,displacementmap_pars_vertex:vm,displacementmap_vertex:Mm,emissivemap_fragment:Sm,emissivemap_pars_fragment:Tm,colorspace_fragment:Em,colorspace_pars_fragment:bm,envmap_fragment:Am,envmap_common_pars_fragment:wm,envmap_pars_fragment:Rm,envmap_pars_vertex:Cm,envmap_physical_pars_fragment:km,envmap_vertex:Pm,fog_vertex:Lm,fog_pars_vertex:Dm,fog_fragment:Im,fog_pars_fragment:Um,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Fm,lights_lambert_fragment:Om,lights_lambert_pars_fragment:Bm,lights_pars_begin:zm,lights_toon_fragment:Hm,lights_toon_pars_fragment:Vm,lights_phong_fragment:Gm,lights_phong_pars_fragment:Wm,lights_physical_fragment:Xm,lights_physical_pars_fragment:qm,lights_fragment_begin:Ym,lights_fragment_maps:jm,lights_fragment_end:Km,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:Qm,map_fragment:tg,map_pars_fragment:eg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:og,morphcolor_vertex:ag,morphnormal_vertex:cg,morphtarget_pars_vertex:lg,morphtarget_vertex:ug,normal_fragment_begin:hg,normal_fragment_maps:fg,normal_pars_fragment:dg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:vg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:Tg,project_vertex:Eg,dithering_fragment:bg,dithering_pars_fragment:Ag,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Pg,shadowmap_vertex:Lg,shadowmask_pars_fragment:Dg,skinbase_vertex:Ig,skinning_pars_vertex:Ug,skinning_vertex:Ng,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:kg,transmission_fragment:Hg,transmission_pars_fragment:Vg,uv_pars_fragment:Gg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:jg,backgroundCube_vert:Kg,backgroundCube_frag:Zg,cube_vert:$g,cube_frag:Jg,depth_vert:Qg,depth_frag:t_,distanceRGBA_vert:e_,distanceRGBA_frag:n_,equirect_vert:i_,equirect_frag:s_,linedashed_vert:r_,linedashed_frag:o_,meshbasic_vert:a_,meshbasic_frag:c_,meshlambert_vert:l_,meshlambert_frag:u_,meshmatcap_vert:h_,meshmatcap_frag:f_,meshnormal_vert:d_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:__,meshphysical_frag:x_,meshtoon_vert:y_,meshtoon_frag:v_,points_vert:M_,points_frag:S_,shadow_vert:T_,shadow_frag:E_,sprite_vert:b_,sprite_frag:A_},it={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},En={basic:{uniforms:Ne([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Ne([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Ne([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Ne([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Ne([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Ne([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Ne([it.points,it.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Ne([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Ne([it.common,it.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Ne([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Ne([it.sprite,it.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Ne([it.common,it.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Ne([it.lights,it.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};En.physical={uniforms:Ne([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Vr={r:0,b:0,g:0},_i=new Rn,w_=new St;function R_(s,t,n,i,r,o,a){const c=new Ct(0);let l=o===!0?0:1,u,h,f=null,d=0,p=null;function _(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?n:t).get(y)),y}function x(M){let y=!1;const A=_(M);A===null?m(c,l):A&&A.isColor&&(m(A,1),y=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(M,y){const A=_(y);A&&(A.isCubeTexture||A.mapping===bo)?(h===void 0&&(h=new Oe(new As(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Ms(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),_i.copy(y.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w_.makeRotationFromEuler(_i)),h.material.toneMapped=Gt.getTransfer(A.colorSpace)!==te,(f!==A||d!==A.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,f=A,d=A.version,p=s.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new Oe(new Ao(2,2),new li({name:"BackgroundMaterial",uniforms:Ms(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=Gt.getTransfer(A.colorSpace)!==te,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,p=s.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null))}function m(M,y){M.getRGB(Vr,Nh(s)),i.buffers.color.setClear(Vr.r,Vr.g,Vr.b,y,a)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(M,y=1){c.set(M),l=y,m(c,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(c,l)},render:x,addToRenderList:g,dispose:v}}function C_(s,t){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,a=!1;function c(S,D,U,N,z){let q=!1;const G=f(N,U,D);o!==G&&(o=G,u(o.object)),q=p(S,N,U,z),q&&_(S,N,U,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,y(S,D,U,N),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function u(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function f(S,D,U){const N=U.wireframe===!0;let z=i[S.id];z===void 0&&(z={},i[S.id]=z);let q=z[D.id];q===void 0&&(q={},z[D.id]=q);let G=q[N];return G===void 0&&(G=d(l()),q[N]=G),G}function d(S){const D=[],U=[],N=[];for(let z=0;z<n;z++)D[z]=0,U[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,D,U,N){const z=o.attributes,q=D.attributes;let G=0;const J=U.getAttributes();for(const W in J)if(J[W].location>=0){const ht=z[W];let yt=q[W];if(yt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(yt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(yt=S.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;G++}return o.attributesNum!==G||o.index!==N}function _(S,D,U,N){const z={},q=D.attributes;let G=0;const J=U.getAttributes();for(const W in J)if(J[W].location>=0){let ht=q[W];ht===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),z[W]=yt,G++}o.attributes=z,o.attributesNum=G,o.index=N}function x(){const S=o.newAttributes;for(let D=0,U=S.length;D<U;D++)S[D]=0}function g(S){m(S,0)}function m(S,D){const U=o.newAttributes,N=o.enabledAttributes,z=o.attributeDivisors;U[S]=1,N[S]===0&&(s.enableVertexAttribArray(S),N[S]=1),z[S]!==D&&(s.vertexAttribDivisor(S,D),z[S]=D)}function v(){const S=o.newAttributes,D=o.enabledAttributes;for(let U=0,N=D.length;U<N;U++)D[U]!==S[U]&&(s.disableVertexAttribArray(U),D[U]=0)}function M(S,D,U,N,z,q,G){G===!0?s.vertexAttribIPointer(S,D,U,z,q):s.vertexAttribPointer(S,D,U,N,z,q)}function y(S,D,U,N){x();const z=N.attributes,q=U.getAttributes(),G=D.defaultAttributeValues;for(const J in q){const W=q[J];if(W.location>=0){let nt=z[J];if(nt===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(nt=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(nt=S.instanceColor)),nt!==void 0){const ht=nt.normalized,yt=nt.itemSize,Ot=t.get(nt);if(Ot===void 0)continue;const ne=Ot.buffer,j=Ot.type,et=Ot.bytesPerElement,gt=j===s.INT||j===s.UNSIGNED_INT||nt.gpuType===Ic;if(nt.isInterleavedBufferAttribute){const ot=nt.data,At=ot.stride,Pt=nt.offset;if(ot.isInstancedInterleavedBuffer){for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt,ot.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)g(W.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let Bt=0;Bt<W.locationSize;Bt++)M(W.location+Bt,yt/W.locationSize,j,ht,At*et,(Pt+yt/W.locationSize*Bt)*et,gt)}else{if(nt.isInstancedBufferAttribute){for(let ot=0;ot<W.locationSize;ot++)m(W.location+ot,nt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ot=0;ot<W.locationSize;ot++)g(W.location+ot);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let ot=0;ot<W.locationSize;ot++)M(W.location+ot,yt/W.locationSize,j,ht,yt*et,yt/W.locationSize*ot*et,gt)}}else if(G!==void 0){const ht=G[J];if(ht!==void 0)switch(ht.length){case 2:s.vertexAttrib2fv(W.location,ht);break;case 3:s.vertexAttrib3fv(W.location,ht);break;case 4:s.vertexAttrib4fv(W.location,ht);break;default:s.vertexAttrib1fv(W.location,ht)}}}}v()}function A(){L();for(const S in i){const D=i[S];for(const U in D){const N=D[U];for(const z in N)h(N[z].object),delete N[z];delete D[U]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const D=i[S.id];for(const U in D){const N=D[U];for(const z in N)h(N[z].object),delete N[z];delete D[U]}delete i[S.id]}function R(S){for(const D in i){const U=i[D];if(U[S.id]===void 0)continue;const N=U[S.id];for(const z in N)h(N[z].object),delete N[z];delete U[S.id]}}function L(){T(),a=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:L,resetDefaultState:T,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function P_(s,t,n){let i;function r(u){i=u}function o(u,h){s.drawArrays(i,u,h),n.update(h,i,1)}function a(u,h,f){f!==0&&(s.drawArraysInstanced(i,u,h,f),n.update(h,i,f))}function c(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,f);let p=0;for(let _=0;_<f;_++)p+=h[_];n.update(p,i,1)}function l(u,h,f,d){if(f===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)a(u[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,h,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=h[x]*d[x];n.update(_,i,1)}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function L_(s,t,n,i){let r;function o(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==sn&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(R){const L=R===hr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Xn&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_n&&!L)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,w=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:A,maxSamples:w}}function D_(s){const t=this;let n=null,i=0,r=!1,o=!1;const a=new Tn,c=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,m=s.get(f);if(!r||_===null||_.length===0||o&&!g)o?h(null):u();else{const v=o?0:i,M=v*4;let y=m.clippingState||null;l.value=y,y=h(_,d,M,p);for(let A=0;A!==M;++A)y[A]=n[A];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,p,_){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const m=p+x*4,v=d.matrixWorldInverse;c.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,y=p;M!==x;++M,y+=4)a.copy(f[M]).applyMatrix4(v,c),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function I_(s){let t=new WeakMap;function n(a,c){return c===ka?a.mapping=ms:c===Ha&&(a.mapping=gs),a}function i(a){if(a&&a.isTexture){const c=a.mapping;if(c===ka||c===Ha)if(t.has(a)){const l=t.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Jd(l.height);return u.fromEquirectangularTexture(s,a),t.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}const os=4,fu=[.125,.215,.35,.446,.526,.582],Ri=20,sa=new $c,du=new Ct;let ra=null,oa=0,aa=0,ca=!1;const Ai=(1+Math.sqrt(5))/2,Zi=1/Ai,pu=[new P(-Ai,Zi,0),new P(Ai,Zi,0),new P(-Zi,0,Ai),new P(Zi,0,Ai),new P(0,Ai,-Zi),new P(0,Ai,Zi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class mu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ra,oa,aa),this._renderer.xr.enabled=ca,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ra=this._renderer.getRenderTarget(),oa=this._renderer.getActiveCubeFace(),aa=this._renderer.getActiveMipmapLevel(),ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:hr,format:sn,colorSpace:He,depthBuffer:!1},r=gu(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(t,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=U_(o)),this._blurMaterial=N_(o,t,n)}return r}_compileMaterial(t){const n=new Oe(this._lodPlanes[0],t);this._renderer.compile(n,sa)}_sceneToCubeUV(t,n,i,r){const c=new Fe(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(du),h.toneMapping=ci,h.autoClear=!1;const p=new bn({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),_=new Oe(new As,p);let x=!1;const g=t.background;g?g.isColor&&(p.color.copy(g),t.background=null,x=!0):(p.color.copy(du),x=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(c.up.set(0,l[m],0),c.lookAt(u[m],0,0)):v===1?(c.up.set(0,0,l[m]),c.lookAt(0,u[m],0)):(c.up.set(0,l[m],0),c.lookAt(0,0,u[m]));const M=this._cubeSize;Gr(r,v*M,m>2?M:0,M,M),h.setRenderTarget(r),x&&h.render(_,c),h.render(t,c)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=g}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===ms||t.mapping===gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Oe(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=t;const l=this._cubeSize;Gr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,sa)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=pu[(r-o-1)%pu.length];this._blur(t,o-1,o,a,c)}n.autoClear=i}_blur(t,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,r,"latitudinal",o),this._halfBlur(a,t,i,i,r,"longitudinal",o)}_halfBlur(t,n,i,r,o,a,c){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Oe(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),x=o/_,g=isFinite(o)?1+Math.floor(h*x):Ri;g>Ri&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ri}`);const m=[];let v=0;for(let R=0;R<Ri;++R){const L=R/x,T=Math.exp(-L*L/2);m.push(T),R===0?v+=T:R<g&&(v+=2*T)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",c&&(d.poleAxis.value=c);const{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-i;const y=this._sizeLods[r],A=3*y*(r>M-os?r-M+os:0),w=4*(this._cubeSize-y);Gr(n,A,w,3*y,2*y),l.setRenderTarget(n),l.render(f,sa)}}function U_(s){const t=[],n=[],i=[];let r=s;const o=s-os+1+fu.length;for(let a=0;a<o;a++){const c=Math.pow(2,r);n.push(c);let l=1/c;a>s-os?l=fu[a-s+os-1]:a===0&&(l=0),i.push(l);const u=1/(c-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],p=6,_=6,x=3,g=2,m=1,v=new Float32Array(x*_*p),M=new Float32Array(g*_*p),y=new Float32Array(m*_*p);for(let w=0;w<p;w++){const R=w%3*2/3-1,L=w>2?0:-1,T=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];v.set(T,x*_*w),M.set(d,g*_*w);const S=[w,w,w,w,w,w];y.set(S,m*_*w)}const A=new ke;A.setAttribute("position",new de(v,x)),A.setAttribute("uv",new de(M,g)),A.setAttribute("faceIndex",new de(y,m)),t.push(A),r>os&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function gu(s,t,n){const i=new Li(s,t,n);return i.texture.mapping=bo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(s,t,n,i,r){s.viewport.set(t,n,i,r),s.scissor.set(t,n,i,r)}function N_(s,t,n){const i=new Float32Array(Ri),r=new P(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function _u(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tl(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function xu(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function tl(){return`

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
	`}function F_(s){let t=new WeakMap,n=null;function i(c){if(c&&c.isTexture){const l=c.mapping,u=l===ka||l===Ha,h=l===ms||l===gs;if(u||h){let f=t.get(c);const d=f!==void 0?f.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==d)return n===null&&(n=new mu(s)),f=u?n.fromEquirectangular(c,f):n.fromCubemap(c,f),f.texture.pmremVersion=c.pmremVersion,t.set(c,f),f.texture;if(f!==void 0)return f.texture;{const p=c.image;return u&&p&&p.height>0||h&&p&&r(p)?(n===null&&(n=new mu(s)),f=u?n.fromEquirectangular(c):n.fromCubemap(c),f.texture.pmremVersion=c.pmremVersion,t.set(c,f),c.addEventListener("dispose",o),f.texture):null}}}return c}function r(c){let l=0;const u=6;for(let h=0;h<u;h++)c[h]!==void 0&&l++;return l===u}function o(c){const l=c.target;l.removeEventListener("dispose",o);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function O_(s){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ss("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function B_(s,t,n,i){const r={},o=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=o.get(d);p&&(t.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function c(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function u(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let M=0,y=v.length;M<y;M+=3){const A=v[M+0],w=v[M+1],R=v[M+2];d.push(A,w,w,R,R,A)}}else if(_!==void 0){const v=_.array;x=_.version;for(let M=0,y=v.length/3-1;M<y;M+=3){const A=M+0,w=M+1,R=M+2;d.push(A,w,w,R,R,A)}}else return;const g=new(Ch(d)?Uh:Ih)(d,1);g.version=x;const m=o.get(f);m&&t.remove(m),o.set(f,g)}function h(f){const d=o.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return o.get(f)}return{get:c,update:l,getWireframeAttribute:h}}function z_(s,t,n){let i;function r(d){i=d}let o,a;function c(d){o=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(i,p,o,d*a),n.update(p,i,1)}function u(d,p,_){_!==0&&(s.drawElementsInstanced(i,p,o,d*a,_),n.update(p,i,_))}function h(d,p,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,d,0,_);let g=0;for(let m=0;m<_;m++)g+=p[m];n.update(g,i,1)}function f(d,p,_,x){if(_===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)u(d[m]/a,p[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,x,0,_);let m=0;for(let v=0;v<_;v++)m+=p[v]*x[v];n.update(m,i,1)}}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function k_(s){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,c){switch(n.calls++,a){case s.TRIANGLES:n.triangles+=c*(o/3);break;case s.LINES:n.lines+=c*(o/2);break;case s.LINE_STRIP:n.lines+=c*(o-1);break;case s.LINE_LOOP:n.lines+=c*o;break;case s.POINTS:n.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function H_(s,t,n){const i=new WeakMap,r=new Wt;function o(a,c,l){const u=a.morphTargetInfluences,h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=h!==void 0?h.length:0;let d=i.get(c);if(d===void 0||d.count!==f){let T=function(){R.dispose(),i.delete(c),c.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const p=c.morphAttributes.position!==void 0,_=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,g=c.morphAttributes.position||[],m=c.morphAttributes.normal||[],v=c.morphAttributes.color||[];let M=0;p===!0&&(M=1),_===!0&&(M=2),x===!0&&(M=3);let y=c.attributes.position.count*M,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*A*4*f),R=new Lh(w,y,A,f);R.type=_n,R.needsUpdate=!0;const L=M*4;for(let S=0;S<f;S++){const D=g[S],U=m[S],N=v[S],z=y*A*4*S;for(let q=0;q<D.count;q++){const G=q*L;p===!0&&(r.fromBufferAttribute(D,q),w[z+G+0]=r.x,w[z+G+1]=r.y,w[z+G+2]=r.z,w[z+G+3]=0),_===!0&&(r.fromBufferAttribute(U,q),w[z+G+4]=r.x,w[z+G+5]=r.y,w[z+G+6]=r.z,w[z+G+7]=0),x===!0&&(r.fromBufferAttribute(N,q),w[z+G+8]=r.x,w[z+G+9]=r.y,w[z+G+10]=r.z,w[z+G+11]=N.itemSize===4?r.w:1)}}d={count:f,texture:R,size:new Mt(y,A)},i.set(c,d),c.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,n);else{let p=0;for(let x=0;x<u.length;x++)p+=u[x];const _=c.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",u)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function V_(s,t,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,h=l.geometry,f=t.get(l,h);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(n.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const jh=new Ae,yu=new Vh(1,1),Kh=new Lh,Zh=new Fd,$h=new Oh,vu=[],Mu=[],Su=new Float32Array(16),Tu=new Float32Array(9),Eu=new Float32Array(4);function Cs(s,t,n){const i=s[0];if(i<=0||i>0)return s;const r=t*n;let o=vu[r];if(o===void 0&&(o=new Float32Array(r),vu[r]=o),t!==0){i.toArray(o,0);for(let a=1,c=0;a!==t;++a)c+=n,s[a].toArray(o,c)}return o}function Se(s,t){if(s.length!==t.length)return!1;for(let n=0,i=s.length;n<i;n++)if(s[n]!==t[n])return!1;return!0}function Te(s,t){for(let n=0,i=t.length;n<i;n++)s[n]=t[n]}function wo(s,t){let n=Mu[t];n===void 0&&(n=new Int32Array(t),Mu[t]=n);for(let i=0;i!==t;++i)n[i]=s.allocateTextureUnit();return n}function G_(s,t){const n=this.cache;n[0]!==t&&(s.uniform1f(this.addr,t),n[0]=t)}function W_(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Se(n,t))return;s.uniform2fv(this.addr,t),Te(n,t)}}function X_(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Se(n,t))return;s.uniform3fv(this.addr,t),Te(n,t)}}function q_(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Se(n,t))return;s.uniform4fv(this.addr,t),Te(n,t)}}function Y_(s,t){const n=this.cache,i=t.elements;if(i===void 0){if(Se(n,t))return;s.uniformMatrix2fv(this.addr,!1,t),Te(n,t)}else{if(Se(n,i))return;Eu.set(i),s.uniformMatrix2fv(this.addr,!1,Eu),Te(n,i)}}function j_(s,t){const n=this.cache,i=t.elements;if(i===void 0){if(Se(n,t))return;s.uniformMatrix3fv(this.addr,!1,t),Te(n,t)}else{if(Se(n,i))return;Tu.set(i),s.uniformMatrix3fv(this.addr,!1,Tu),Te(n,i)}}function K_(s,t){const n=this.cache,i=t.elements;if(i===void 0){if(Se(n,t))return;s.uniformMatrix4fv(this.addr,!1,t),Te(n,t)}else{if(Se(n,i))return;Su.set(i),s.uniformMatrix4fv(this.addr,!1,Su),Te(n,i)}}function Z_(s,t){const n=this.cache;n[0]!==t&&(s.uniform1i(this.addr,t),n[0]=t)}function $_(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Se(n,t))return;s.uniform2iv(this.addr,t),Te(n,t)}}function J_(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Se(n,t))return;s.uniform3iv(this.addr,t),Te(n,t)}}function Q_(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Se(n,t))return;s.uniform4iv(this.addr,t),Te(n,t)}}function tx(s,t){const n=this.cache;n[0]!==t&&(s.uniform1ui(this.addr,t),n[0]=t)}function ex(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Se(n,t))return;s.uniform2uiv(this.addr,t),Te(n,t)}}function nx(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Se(n,t))return;s.uniform3uiv(this.addr,t),Te(n,t)}}function ix(s,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Se(n,t))return;s.uniform4uiv(this.addr,t),Te(n,t)}}function sx(s,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r);let o;this.type===s.SAMPLER_2D_SHADOW?(yu.compareFunction=wh,o=yu):o=jh,n.setTexture2D(t||o,r)}function rx(s,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||Zh,r)}function ox(s,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||$h,r)}function ax(s,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||Kh,r)}function cx(s){switch(s){case 5126:return G_;case 35664:return W_;case 35665:return X_;case 35666:return q_;case 35674:return Y_;case 35675:return j_;case 35676:return K_;case 5124:case 35670:return Z_;case 35667:case 35671:return $_;case 35668:case 35672:return J_;case 35669:case 35673:return Q_;case 5125:return tx;case 36294:return ex;case 36295:return nx;case 36296:return ix;case 35678:case 36198:case 36298:case 36306:case 35682:return sx;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return ax}}function lx(s,t){s.uniform1fv(this.addr,t)}function ux(s,t){const n=Cs(t,this.size,2);s.uniform2fv(this.addr,n)}function hx(s,t){const n=Cs(t,this.size,3);s.uniform3fv(this.addr,n)}function fx(s,t){const n=Cs(t,this.size,4);s.uniform4fv(this.addr,n)}function dx(s,t){const n=Cs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function px(s,t){const n=Cs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function mx(s,t){const n=Cs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function gx(s,t){s.uniform1iv(this.addr,t)}function _x(s,t){s.uniform2iv(this.addr,t)}function xx(s,t){s.uniform3iv(this.addr,t)}function yx(s,t){s.uniform4iv(this.addr,t)}function vx(s,t){s.uniform1uiv(this.addr,t)}function Mx(s,t){s.uniform2uiv(this.addr,t)}function Sx(s,t){s.uniform3uiv(this.addr,t)}function Tx(s,t){s.uniform4uiv(this.addr,t)}function Ex(s,t,n){const i=this.cache,r=t.length,o=wo(n,r);Se(i,o)||(s.uniform1iv(this.addr,o),Te(i,o));for(let a=0;a!==r;++a)n.setTexture2D(t[a]||jh,o[a])}function bx(s,t,n){const i=this.cache,r=t.length,o=wo(n,r);Se(i,o)||(s.uniform1iv(this.addr,o),Te(i,o));for(let a=0;a!==r;++a)n.setTexture3D(t[a]||Zh,o[a])}function Ax(s,t,n){const i=this.cache,r=t.length,o=wo(n,r);Se(i,o)||(s.uniform1iv(this.addr,o),Te(i,o));for(let a=0;a!==r;++a)n.setTextureCube(t[a]||$h,o[a])}function wx(s,t,n){const i=this.cache,r=t.length,o=wo(n,r);Se(i,o)||(s.uniform1iv(this.addr,o),Te(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(t[a]||Kh,o[a])}function Rx(s){switch(s){case 5126:return lx;case 35664:return ux;case 35665:return hx;case 35666:return fx;case 35674:return dx;case 35675:return px;case 35676:return mx;case 5124:case 35670:return gx;case 35667:case 35671:return _x;case 35668:case 35672:return xx;case 35669:case 35673:return yx;case 5125:return vx;case 36294:return Mx;case 36295:return Sx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return bx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return wx}}class Cx{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cx(n.type)}}class Px{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Rx(n.type)}}class Lx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const c=r[o];c.setValue(t,n[c.id],i)}}}const la=/(\w+)(\])?(\[|\.)?/g;function bu(s,t){s.seq.push(t),s.map[t.id]=t}function Dx(s,t,n){const i=s.name,r=i.length;for(la.lastIndex=0;;){const o=la.exec(i),a=la.lastIndex;let c=o[1];const l=o[2]==="]",u=o[3];if(l&&(c=c|0),u===void 0||u==="["&&a+2===r){bu(n,u===void 0?new Cx(c,s,t):new Px(c,s,t));break}else{let f=n.map[c];f===void 0&&(f=new Lx(c),bu(n,f)),n=f}}}class po{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=t.getActiveUniform(n,r),a=t.getUniformLocation(n,o.name);Dx(o,a,this)}}setValue(t,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let o=0,a=n.length;o!==a;++o){const c=n[o],l=i[c.id];l.needsUpdate!==!1&&c.setValue(t,l.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,o=t.length;r!==o;++r){const a=t[r];a.id in n&&i.push(a)}return i}}function Au(s,t,n){const i=s.createShader(t);return s.shaderSource(i,n),s.compileShader(i),i}const Ix=37297;let Ux=0;function Nx(s,t){const n=s.split(`
`),i=[],r=Math.max(t-6,0),o=Math.min(t+6,n.length);for(let a=r;a<o;a++){const c=a+1;i.push(`${c===t?">":" "} ${c}: ${n[a]}`)}return i.join(`
`)}const wu=new Dt;function Fx(s){Gt._getMatrix(wu,Gt.workingColorSpace,s);const t=`mat3( ${wu.elements.map(n=>n.toFixed(4))} )`;switch(Gt.getTransfer(s)){case xo:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ru(s,t,n){const i=s.getShaderParameter(t,s.COMPILE_STATUS),r=s.getShaderInfoLog(t).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Nx(s.getShaderSource(t),a)}else return r}function Ox(s,t){const n=Fx(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Bx(s,t){let n;switch(t){case qf:n="Linear";break;case Yf:n="Reinhard";break;case jf:n="Cineon";break;case dh:n="ACESFilmic";break;case Zf:n="AgX";break;case $f:n="Neutral";break;case Kf:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wr=new P;function zx(){Gt.getLuminanceCoefficients(Wr);const s=Wr.x.toFixed(4),t=Wr.y.toFixed(4),n=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kx(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Js).join(`
`)}function Hx(s){const t=[];for(const n in s){const i=s[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function Vx(s,t){const n={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=s.getActiveAttrib(t,r),a=o.name;let c=1;o.type===s.FLOAT_MAT2&&(c=2),o.type===s.FLOAT_MAT3&&(c=3),o.type===s.FLOAT_MAT4&&(c=4),n[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:c}}return n}function Js(s){return s!==""}function Cu(s,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pu(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(s){return s.replace(Gx,Xx)}const Wx=new Map;function Xx(s,t){let n=Nt[t];if(n===void 0){const i=Wx.get(t);if(i!==void 0)n=Nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yc(n)}const qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lu(s){return s.replace(qx,Yx)}function Yx(s,t,n,i){let r="";for(let o=parseInt(t);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Du(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function jx(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===bf?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Kx(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zx(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function $x(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case fh:t="ENVMAP_BLENDING_MULTIPLY";break;case Wf:t="ENVMAP_BLENDING_MIX";break;case Xf:t="ENVMAP_BLENDING_ADD";break}return t}function Jx(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Qx(s,t,n,i){const r=s.getContext(),o=n.defines;let a=n.vertexShader,c=n.fragmentShader;const l=jx(n),u=Kx(n),h=Zx(n),f=$x(n),d=Jx(n),p=kx(n),_=Hx(o),x=r.createProgram();let g,m,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Js).join(`
`),m.length>0&&(m+=`
`)):(g=[Du(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Js).join(`
`),m=[Du(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ci?"#define TONE_MAPPING":"",n.toneMapping!==ci?Nt.tonemapping_pars_fragment:"",n.toneMapping!==ci?Bx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Ox("linearToOutputTexel",n.outputColorSpace),zx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Js).join(`
`)),a=yc(a),a=Cu(a,n),a=Pu(a,n),c=yc(c),c=Cu(c,n),c=Pu(c,n),a=Lu(a),c=Lu(c),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=v+g+a,y=v+m+c,A=Au(r,r.VERTEX_SHADER,M),w=Au(r,r.FRAGMENT_SHADER,y);r.attachShader(x,A),r.attachShader(x,w),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(D){if(s.debug.checkShaderErrors){const U=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(A).trim(),z=r.getShaderInfoLog(w).trim();let q=!0,G=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(r,x,A,w);else{const J=Ru(r,A,"vertex"),W=Ru(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+U+`
`+J+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||z==="")&&(G=!1);G&&(D.diagnostics={runnable:q,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:z,prefix:m}})}r.deleteShader(A),r.deleteShader(w),L=new po(r,x),T=Vx(r,x)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,Ix)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ux++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=w,this}let t0=0;class e0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new n0(t),n.set(t,i)),i}}class n0{constructor(t){this.id=t0++,this.code=t,this.usedTimes=0}}function i0(s,t,n,i,r,o,a){const c=new Hc,l=new e0,u=new Set,h=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return u.add(T),T===0?"uv":`uv${T}`}function g(T,S,D,U,N){const z=U.fog,q=N.geometry,G=T.isMeshStandardMaterial?U.environment:null,J=(T.isMeshStandardMaterial?n:t).get(T.envMap||G),W=J&&J.mapping===bo?J.image.height:null,nt=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,yt=ht!==void 0?ht.length:0;let Ot=0;q.morphAttributes.position!==void 0&&(Ot=1),q.morphAttributes.normal!==void 0&&(Ot=2),q.morphAttributes.color!==void 0&&(Ot=3);let ne,j,et,gt;if(nt){const $t=En[nt];ne=$t.vertexShader,j=$t.fragmentShader}else ne=T.vertexShader,j=T.fragmentShader,l.update(T),et=l.getVertexShaderID(T),gt=l.getFragmentShaderID(T);const ot=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Pt=N.isInstancedMesh===!0,Bt=N.isBatchedMesh===!0,ce=!!T.map,Xt=!!T.matcap,pe=!!J,I=!!T.aoMap,$e=!!T.lightMap,kt=!!T.bumpMap,Ht=!!T.normalMap,vt=!!T.displacementMap,se=!!T.emissiveMap,xt=!!T.metalnessMap,C=!!T.roughnessMap,E=T.anisotropy>0,k=T.clearcoat>0,K=T.dispersion>0,$=T.iridescence>0,Y=T.sheen>0,_t=T.transmission>0,at=E&&!!T.anisotropyMap,ft=k&&!!T.clearcoatMap,qt=k&&!!T.clearcoatNormalMap,tt=k&&!!T.clearcoatRoughnessMap,dt=$&&!!T.iridescenceMap,bt=$&&!!T.iridescenceThicknessMap,wt=Y&&!!T.sheenColorMap,pt=Y&&!!T.sheenRoughnessMap,Vt=!!T.specularMap,Ut=!!T.specularColorMap,ie=!!T.specularIntensityMap,F=_t&&!!T.transmissionMap,st=_t&&!!T.thicknessMap,X=!!T.gradientMap,Z=!!T.alphaMap,lt=T.alphaTest>0,ct=!!T.alphaHash,It=!!T.extensions;let ue=ci;T.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Pe={shaderID:nt,shaderType:T.type,shaderName:T.name,vertexShader:ne,fragmentShader:j,defines:T.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Bt,batchingColor:Bt&&N._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&N.instanceColor!==null,instancingMorph:Pt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ot===null?s.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:He,alphaToCoverage:!!T.alphaToCoverage,map:ce,matcap:Xt,envMap:pe,envMapMode:pe&&J.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:$e,bumpMap:kt,normalMap:Ht,displacementMap:d&&vt,emissiveMap:se,normalMapObjectSpace:Ht&&T.normalMapType===id,normalMapTangentSpace:Ht&&T.normalMapType===Ah,metalnessMap:xt,roughnessMap:C,anisotropy:E,anisotropyMap:at,clearcoat:k,clearcoatMap:ft,clearcoatNormalMap:qt,clearcoatRoughnessMap:tt,dispersion:K,iridescence:$,iridescenceMap:dt,iridescenceThicknessMap:bt,sheen:Y,sheenColorMap:wt,sheenRoughnessMap:pt,specularMap:Vt,specularColorMap:Ut,specularIntensityMap:ie,transmission:_t,transmissionMap:F,thicknessMap:st,gradientMap:X,opaque:T.transparent===!1&&T.blending===us&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:lt,alphaHash:ct,combine:T.combine,mapUv:ce&&x(T.map.channel),aoMapUv:I&&x(T.aoMap.channel),lightMapUv:$e&&x(T.lightMap.channel),bumpMapUv:kt&&x(T.bumpMap.channel),normalMapUv:Ht&&x(T.normalMap.channel),displacementMapUv:vt&&x(T.displacementMap.channel),emissiveMapUv:se&&x(T.emissiveMap.channel),metalnessMapUv:xt&&x(T.metalnessMap.channel),roughnessMapUv:C&&x(T.roughnessMap.channel),anisotropyMapUv:at&&x(T.anisotropyMap.channel),clearcoatMapUv:ft&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:qt&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:pt&&x(T.sheenRoughnessMap.channel),specularMapUv:Vt&&x(T.specularMap.channel),specularColorMapUv:Ut&&x(T.specularColorMap.channel),specularIntensityMapUv:ie&&x(T.specularIntensityMap.channel),transmissionMapUv:F&&x(T.transmissionMap.channel),thicknessMapUv:st&&x(T.thicknessMap.channel),alphaMapUv:Z&&x(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ht||E),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(ce||Z),fog:!!z,useFog:T.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:At,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ot,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:ce&&T.map.isVideoTexture===!0&&Gt.getTransfer(T.map.colorSpace)===te,decodeVideoTextureEmissive:se&&T.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(T.emissiveMap.colorSpace)===te,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===mn,flipSided:T.side===Be,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:It&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&T.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pe.vertexUv1s=u.has(1),Pe.vertexUv2s=u.has(2),Pe.vertexUv3s=u.has(3),u.clear(),Pe}function m(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)S.push(D),S.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(v(S,T),M(S,T),S.push(s.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function v(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function M(T,S){c.disableAll(),S.supportsVertexTextures&&c.enable(0),S.instancing&&c.enable(1),S.instancingColor&&c.enable(2),S.instancingMorph&&c.enable(3),S.matcap&&c.enable(4),S.envMap&&c.enable(5),S.normalMapObjectSpace&&c.enable(6),S.normalMapTangentSpace&&c.enable(7),S.clearcoat&&c.enable(8),S.iridescence&&c.enable(9),S.alphaTest&&c.enable(10),S.vertexColors&&c.enable(11),S.vertexAlphas&&c.enable(12),S.vertexUv1s&&c.enable(13),S.vertexUv2s&&c.enable(14),S.vertexUv3s&&c.enable(15),S.vertexTangents&&c.enable(16),S.anisotropy&&c.enable(17),S.alphaHash&&c.enable(18),S.batching&&c.enable(19),S.dispersion&&c.enable(20),S.batchingColor&&c.enable(21),T.push(c.mask),c.disableAll(),S.fog&&c.enable(0),S.useFog&&c.enable(1),S.flatShading&&c.enable(2),S.logarithmicDepthBuffer&&c.enable(3),S.reverseDepthBuffer&&c.enable(4),S.skinning&&c.enable(5),S.morphTargets&&c.enable(6),S.morphNormals&&c.enable(7),S.morphColors&&c.enable(8),S.premultipliedAlpha&&c.enable(9),S.shadowMapEnabled&&c.enable(10),S.doubleSided&&c.enable(11),S.flipSided&&c.enable(12),S.useDepthPacking&&c.enable(13),S.dithering&&c.enable(14),S.transmission&&c.enable(15),S.sheen&&c.enable(16),S.opaque&&c.enable(17),S.pointsUvs&&c.enable(18),S.decodeVideoTexture&&c.enable(19),S.decodeVideoTextureEmissive&&c.enable(20),S.alphaToCoverage&&c.enable(21),T.push(c.mask)}function y(T){const S=_[T.type];let D;if(S){const U=En[S];D=jd.clone(U.uniforms)}else D=T.uniforms;return D}function A(T,S){let D;for(let U=0,N=h.length;U<N;U++){const z=h[U];if(z.cacheKey===S){D=z,++D.usedTimes;break}}return D===void 0&&(D=new Qx(s,S,T,o),h.push(D)),D}function w(T){if(--T.usedTimes===0){const S=h.indexOf(T);h[S]=h[h.length-1],h.pop(),T.destroy()}}function R(T){l.remove(T)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:R,programs:h,dispose:L}}function s0(){let s=new WeakMap;function t(a){return s.has(a)}function n(a){let c=s.get(a);return c===void 0&&(c={},s.set(a,c)),c}function i(a){s.delete(a)}function r(a,c,l){s.get(a)[c]=l}function o(){s=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:o}}function r0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Iu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Uu(){const s=[];let t=0;const n=[],i=[],r=[];function o(){t=0,n.length=0,i.length=0,r.length=0}function a(f,d,p,_,x,g){let m=s[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:g},s[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=p,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=x,m.group=g),t++,m}function c(f,d,p,_,x,g){const m=a(f,d,p,_,x,g);p.transmission>0?i.push(m):p.transparent===!0?r.push(m):n.push(m)}function l(f,d,p,_,x,g){const m=a(f,d,p,_,x,g);p.transmission>0?i.unshift(m):p.transparent===!0?r.unshift(m):n.unshift(m)}function u(f,d){n.length>1&&n.sort(f||r0),i.length>1&&i.sort(d||Iu),r.length>1&&r.sort(d||Iu)}function h(){for(let f=t,d=s.length;f<d;f++){const p=s[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:c,unshift:l,finish:h,sort:u}}function o0(){let s=new WeakMap;function t(i,r){const o=s.get(i);let a;return o===void 0?(a=new Uu,s.set(i,[a])):r>=o.length?(a=new Uu,o.push(a)):a=o[r],a}function n(){s=new WeakMap}return{get:t,dispose:n}}function a0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new P,color:new Ct};break;case"SpotLight":n={position:new P,direction:new P,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=n,n}}}function c0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=n,n}}}let l0=0;function u0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function h0(s){const t=new a0,n=c0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new P);const r=new P,o=new St,a=new St;function c(u){let h=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,x=0,g=0,m=0,v=0,M=0,y=0,A=0,w=0,R=0;u.sort(u0);for(let T=0,S=u.length;T<S;T++){const D=u[T],U=D.color,N=D.intensity,z=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=U.r*N,f+=U.g*N,d+=U.b*N;else if(D.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(D.sh.coefficients[G],N);R++}else if(D.isDirectionalLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,W=n.get(D);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.directionalShadow[p]=W,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=D.shadow.matrix,v++}i.directional[p]=G,p++}else if(D.isSpotLight){const G=t.get(D);G.position.setFromMatrixPosition(D.matrixWorld),G.color.copy(U).multiplyScalar(N),G.distance=z,G.coneCos=Math.cos(D.angle),G.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),G.decay=D.decay,i.spot[x]=G;const J=D.shadow;if(D.map&&(i.spotLightMap[A]=D.map,A++,J.updateMatrices(D),D.castShadow&&w++),i.spotLightMatrix[x]=J.matrix,D.castShadow){const W=n.get(D);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=q,y++}x++}else if(D.isRectAreaLight){const G=t.get(D);G.color.copy(U).multiplyScalar(N),G.halfWidth.set(D.width*.5,0,0),G.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=G,g++}else if(D.isPointLight){const G=t.get(D);if(G.color.copy(D.color).multiplyScalar(D.intensity),G.distance=D.distance,G.decay=D.decay,D.castShadow){const J=D.shadow,W=n.get(D);W.shadowIntensity=J.intensity,W.shadowBias=J.bias,W.shadowNormalBias=J.normalBias,W.shadowRadius=J.radius,W.shadowMapSize=J.mapSize,W.shadowCameraNear=J.camera.near,W.shadowCameraFar=J.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=D.shadow.matrix,M++}i.point[_]=G,_++}else if(D.isHemisphereLight){const G=t.get(D);G.skyColor.copy(D.color).multiplyScalar(N),G.groundColor.copy(D.groundColor).multiplyScalar(N),i.hemi[m]=G,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==p||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==g||L.hemiLength!==m||L.numDirectionalShadows!==v||L.numPointShadows!==M||L.numSpotShadows!==y||L.numSpotMaps!==A||L.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=_,i.hemi.length=m,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,L.directionalLength=p,L.pointLength=_,L.spotLength=x,L.rectAreaLength=g,L.hemiLength=m,L.numDirectionalShadows=v,L.numPointShadows=M,L.numSpotShadows=y,L.numSpotMaps=A,L.numLightProbes=R,i.version=l0++)}function l(u,h){let f=0,d=0,p=0,_=0,x=0;const g=h.matrixWorldInverse;for(let m=0,v=u.length;m<v;m++){const M=u[m];if(M.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(M.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),a.identity(),o.copy(M.matrixWorld),o.premultiply(g),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:c,setupView:l,state:i}}function Nu(s){const t=new h0(s),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(){t.setup(n)}function l(h){t.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function f0(s){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Nu(s),t.set(r,[c])):o>=a.length?(c=new Nu(s),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}const d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p0=`uniform sampler2D shadow_pass;
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
}`;function m0(s,t,n){let i=new Wc;const r=new Mt,o=new Mt,a=new Wt,c=new up({depthPacking:nd}),l=new hp,u={},h=n.maxTextureSize,f={[vn]:Be,[Be]:vn,[mn]:mn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:d0,fragmentShader:p0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ke;_.setAttribute("position",new de(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Oe(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let m=this.type;this.render=function(w,R,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;const T=s.getRenderTarget(),S=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),U=s.state;U.setBlending(ai),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=m!==Bn&&this.type===Bn,z=m===Bn&&this.type!==Bn;for(let q=0,G=w.length;q<G;q++){const J=w[q],W=J.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const nt=W.getFrameExtents();if(r.multiply(nt),o.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/nt.x),r.x=o.x*nt.x,W.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/nt.y),r.y=o.y*nt.y,W.mapSize.y=o.y)),W.map===null||N===!0||z===!0){const yt=this.type!==Bn?{minFilter:ze,magFilter:ze}:{};W.map!==null&&W.map.dispose(),W.map=new Li(r.x,r.y,yt),W.map.texture.name=J.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const ht=W.getViewportCount();for(let yt=0;yt<ht;yt++){const Ot=W.getViewport(yt);a.set(o.x*Ot.x,o.y*Ot.y,o.x*Ot.z,o.y*Ot.w),U.viewport(a),W.updateMatrices(J,yt),i=W.getFrustum(),y(R,L,W.camera,J,this.type)}W.isPointLightShadow!==!0&&this.type===Bn&&v(W,L),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(T,S,D)};function v(w,R){const L=t.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Li(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(R,null,L,d,x,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(R,null,L,p,x,null)}function M(w,R,L,T){let S=null;const D=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)S=D;else if(S=L.isPointLight===!0?l:c,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const U=S.uuid,N=R.uuid;let z=u[U];z===void 0&&(z={},u[U]=z);let q=z[N];q===void 0&&(q=S.clone(),z[N]=q,R.addEventListener("dispose",A)),S=q}if(S.visible=R.visible,S.wireframe=R.wireframe,T===Bn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:f[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=s.properties.get(S);U.light=L}return S}function y(w,R,L,T,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Bn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const N=t.update(w),z=w.material;if(Array.isArray(z)){const q=N.groups;for(let G=0,J=q.length;G<J;G++){const W=q[G],nt=z[W.materialIndex];if(nt&&nt.visible){const ht=M(w,nt,T,S);w.onBeforeShadow(s,w,R,L,N,ht,W),s.renderBufferDirect(L,null,N,ht,w,W),w.onAfterShadow(s,w,R,L,N,ht,W)}}}else if(z.visible){const q=M(w,z,T,S);w.onBeforeShadow(s,w,R,L,N,q,null),s.renderBufferDirect(L,null,N,q,w,null),w.onAfterShadow(s,w,R,L,N,q,null)}}const U=w.children;for(let N=0,z=U.length;N<z;N++)y(U[N],R,L,T,S)}function A(w){w.target.removeEventListener("dispose",A);for(const L in u){const T=u[L],S=w.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const g0={[Ia]:Ua,[Na]:Ba,[Fa]:za,[ps]:Oa,[Ua]:Ia,[Ba]:Na,[za]:Fa,[Oa]:ps};function _0(s,t){function n(){let F=!1;const st=new Wt;let X=null;const Z=new Wt(0,0,0,0);return{setMask:function(lt){X!==lt&&!F&&(s.colorMask(lt,lt,lt,lt),X=lt)},setLocked:function(lt){F=lt},setClear:function(lt,ct,It,ue,Pe){Pe===!0&&(lt*=ue,ct*=ue,It*=ue),st.set(lt,ct,It,ue),Z.equals(st)===!1&&(s.clearColor(lt,ct,It,ue),Z.copy(st))},reset:function(){F=!1,X=null,Z.set(-1,0,0,0)}}}function i(){let F=!1,st=!1,X=null,Z=null,lt=null;return{setReversed:function(ct){if(st!==ct){const It=t.get("EXT_clip_control");st?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT);const ue=lt;lt=null,this.setClear(ue)}st=ct},getReversed:function(){return st},setTest:function(ct){ct?ot(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(ct){X!==ct&&!F&&(s.depthMask(ct),X=ct)},setFunc:function(ct){if(st&&(ct=g0[ct]),Z!==ct){switch(ct){case Ia:s.depthFunc(s.NEVER);break;case Ua:s.depthFunc(s.ALWAYS);break;case Na:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case Fa:s.depthFunc(s.EQUAL);break;case Oa:s.depthFunc(s.GEQUAL);break;case Ba:s.depthFunc(s.GREATER);break;case za:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Z=ct}},setLocked:function(ct){F=ct},setClear:function(ct){lt!==ct&&(st&&(ct=1-ct),s.clearDepth(ct),lt=ct)},reset:function(){F=!1,X=null,Z=null,lt=null,st=!1}}}function r(){let F=!1,st=null,X=null,Z=null,lt=null,ct=null,It=null,ue=null,Pe=null;return{setTest:function($t){F||($t?ot(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function($t){st!==$t&&!F&&(s.stencilMask($t),st=$t)},setFunc:function($t,ln,Ln){(X!==$t||Z!==ln||lt!==Ln)&&(s.stencilFunc($t,ln,Ln),X=$t,Z=ln,lt=Ln)},setOp:function($t,ln,Ln){(ct!==$t||It!==ln||ue!==Ln)&&(s.stencilOp($t,ln,Ln),ct=$t,It=ln,ue=Ln)},setLocked:function($t){F=$t},setClear:function($t){Pe!==$t&&(s.clearStencil($t),Pe=$t)},reset:function(){F=!1,st=null,X=null,Z=null,lt=null,ct=null,It=null,ue=null,Pe=null}}}const o=new n,a=new i,c=new r,l=new WeakMap,u=new WeakMap;let h={},f={},d=new WeakMap,p=[],_=null,x=!1,g=null,m=null,v=null,M=null,y=null,A=null,w=null,R=new Ct(0,0,0),L=0,T=!1,S=null,D=null,U=null,N=null,z=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,J=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=J>=1):W.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=J>=2);let nt=null,ht={};const yt=s.getParameter(s.SCISSOR_BOX),Ot=s.getParameter(s.VIEWPORT),ne=new Wt().fromArray(yt),j=new Wt().fromArray(Ot);function et(F,st,X,Z){const lt=new Uint8Array(4),ct=s.createTexture();s.bindTexture(F,ct),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let It=0;It<X;It++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(st,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(st+It,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return ct}const gt={};gt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),gt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),gt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),c.setClear(0),ot(s.DEPTH_TEST),a.setFunc(ps),kt(!1),Ht(dl),ot(s.CULL_FACE),I(ai);function ot(F){h[F]!==!0&&(s.enable(F),h[F]=!0)}function At(F){h[F]!==!1&&(s.disable(F),h[F]=!1)}function Pt(F,st){return f[F]!==st?(s.bindFramebuffer(F,st),f[F]=st,F===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=st),F===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=st),!0):!1}function Bt(F,st){let X=p,Z=!1;if(F){X=d.get(st),X===void 0&&(X=[],d.set(st,X));const lt=F.textures;if(X.length!==lt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ct=0,It=lt.length;ct<It;ct++)X[ct]=s.COLOR_ATTACHMENT0+ct;X.length=lt.length,Z=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,Z=!0);Z&&s.drawBuffers(X)}function ce(F){return _!==F?(s.useProgram(F),_=F,!0):!1}const Xt={[wi]:s.FUNC_ADD,[wf]:s.FUNC_SUBTRACT,[Rf]:s.FUNC_REVERSE_SUBTRACT};Xt[Cf]=s.MIN,Xt[Pf]=s.MAX;const pe={[Lf]:s.ZERO,[Df]:s.ONE,[If]:s.SRC_COLOR,[La]:s.SRC_ALPHA,[zf]:s.SRC_ALPHA_SATURATE,[Of]:s.DST_COLOR,[Nf]:s.DST_ALPHA,[Uf]:s.ONE_MINUS_SRC_COLOR,[Da]:s.ONE_MINUS_SRC_ALPHA,[Bf]:s.ONE_MINUS_DST_COLOR,[Ff]:s.ONE_MINUS_DST_ALPHA,[kf]:s.CONSTANT_COLOR,[Hf]:s.ONE_MINUS_CONSTANT_COLOR,[Vf]:s.CONSTANT_ALPHA,[Gf]:s.ONE_MINUS_CONSTANT_ALPHA};function I(F,st,X,Z,lt,ct,It,ue,Pe,$t){if(F===ai){x===!0&&(At(s.BLEND),x=!1);return}if(x===!1&&(ot(s.BLEND),x=!0),F!==Af){if(F!==g||$t!==T){if((m!==wi||y!==wi)&&(s.blendEquation(s.FUNC_ADD),m=wi,y=wi),$t)switch(F){case us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pl:s.blendFunc(s.ONE,s.ONE);break;case ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ml:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,M=null,A=null,w=null,R.set(0,0,0),L=0,g=F,T=$t}return}lt=lt||st,ct=ct||X,It=It||Z,(st!==m||lt!==y)&&(s.blendEquationSeparate(Xt[st],Xt[lt]),m=st,y=lt),(X!==v||Z!==M||ct!==A||It!==w)&&(s.blendFuncSeparate(pe[X],pe[Z],pe[ct],pe[It]),v=X,M=Z,A=ct,w=It),(ue.equals(R)===!1||Pe!==L)&&(s.blendColor(ue.r,ue.g,ue.b,Pe),R.copy(ue),L=Pe),g=F,T=!1}function $e(F,st){F.side===mn?At(s.CULL_FACE):ot(s.CULL_FACE);let X=F.side===Be;st&&(X=!X),kt(X),F.blending===us&&F.transparent===!1?I(ai):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),o.setMask(F.colorWrite);const Z=F.stencilWrite;c.setTest(Z),Z&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),se(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ot(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function kt(F){S!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),S=F)}function Ht(F){F!==Tf?(ot(s.CULL_FACE),F!==D&&(F===dl?s.cullFace(s.BACK):F===Ef?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),D=F}function vt(F){F!==U&&(G&&s.lineWidth(F),U=F)}function se(F,st,X){F?(ot(s.POLYGON_OFFSET_FILL),(N!==st||z!==X)&&(s.polygonOffset(st,X),N=st,z=X)):At(s.POLYGON_OFFSET_FILL)}function xt(F){F?ot(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function C(F){F===void 0&&(F=s.TEXTURE0+q-1),nt!==F&&(s.activeTexture(F),nt=F)}function E(F,st,X){X===void 0&&(nt===null?X=s.TEXTURE0+q-1:X=nt);let Z=ht[X];Z===void 0&&(Z={type:void 0,texture:void 0},ht[X]=Z),(Z.type!==F||Z.texture!==st)&&(nt!==X&&(s.activeTexture(X),nt=X),s.bindTexture(F,st||gt[F]),Z.type=F,Z.texture=st)}function k(){const F=ht[nt];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(F){ne.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),ne.copy(F))}function pt(F){j.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function Vt(F,st){let X=u.get(st);X===void 0&&(X=new WeakMap,u.set(st,X));let Z=X.get(F);Z===void 0&&(Z=s.getUniformBlockIndex(st,F.name),X.set(F,Z))}function Ut(F,st){const Z=u.get(st).get(F);l.get(st)!==Z&&(s.uniformBlockBinding(st,Z,F.__bindingPointIndex),l.set(st,Z))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},nt=null,ht={},f={},d=new WeakMap,p=[],_=null,x=!1,g=null,m=null,v=null,M=null,y=null,A=null,w=null,R=new Ct(0,0,0),L=0,T=!1,S=null,D=null,U=null,N=null,z=null,ne.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),c.reset()}return{buffers:{color:o,depth:a,stencil:c},enable:ot,disable:At,bindFramebuffer:Pt,drawBuffers:Bt,useProgram:ce,setBlending:I,setMaterial:$e,setFlipSided:kt,setCullFace:Ht,setLineWidth:vt,setPolygonOffset:se,setScissorTest:xt,activeTexture:C,bindTexture:E,unbindTexture:k,compressedTexImage2D:K,compressedTexImage3D:$,texImage2D:dt,texImage3D:bt,updateUBOMapping:Vt,uniformBlockBinding:Ut,texStorage2D:qt,texStorage3D:tt,texSubImage2D:Y,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:wt,viewport:pt,reset:ie}}function x0(s,t,n,i,r,o,a){const c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Mt,h=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return p?new OffscreenCanvas(C,E):lr("canvas")}function x(C,E,k){let K=1;const $=xt(C);if(($.width>k||$.height>k)&&(K=k/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(K*$.width),_t=Math.floor(K*$.height);f===void 0&&(f=_(Y,_t));const at=E?_(Y,_t):f;return at.width=Y,at.height=_t,at.getContext("2d").drawImage(C,0,0,Y,_t),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Y+"x"+_t+")."),at}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function g(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(C,E,k,K,$=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=E;if(E===s.RED&&(k===s.FLOAT&&(Y=s.R32F),k===s.HALF_FLOAT&&(Y=s.R16F),k===s.UNSIGNED_BYTE&&(Y=s.R8)),E===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.R8UI),k===s.UNSIGNED_SHORT&&(Y=s.R16UI),k===s.UNSIGNED_INT&&(Y=s.R32UI),k===s.BYTE&&(Y=s.R8I),k===s.SHORT&&(Y=s.R16I),k===s.INT&&(Y=s.R32I)),E===s.RG&&(k===s.FLOAT&&(Y=s.RG32F),k===s.HALF_FLOAT&&(Y=s.RG16F),k===s.UNSIGNED_BYTE&&(Y=s.RG8)),E===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RG8UI),k===s.UNSIGNED_SHORT&&(Y=s.RG16UI),k===s.UNSIGNED_INT&&(Y=s.RG32UI),k===s.BYTE&&(Y=s.RG8I),k===s.SHORT&&(Y=s.RG16I),k===s.INT&&(Y=s.RG32I)),E===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),k===s.UNSIGNED_INT&&(Y=s.RGB32UI),k===s.BYTE&&(Y=s.RGB8I),k===s.SHORT&&(Y=s.RGB16I),k===s.INT&&(Y=s.RGB32I)),E===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),k===s.UNSIGNED_INT&&(Y=s.RGBA32UI),k===s.BYTE&&(Y=s.RGBA8I),k===s.SHORT&&(Y=s.RGBA16I),k===s.INT&&(Y=s.RGBA32I)),E===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),E===s.RGBA){const _t=$?xo:Gt.getTransfer(K);k===s.FLOAT&&(Y=s.RGBA32F),k===s.HALF_FLOAT&&(Y=s.RGBA16F),k===s.UNSIGNED_BYTE&&(Y=_t===te?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(C,E){let k;return C?E===null||E===Pi||E===xs?k=s.DEPTH24_STENCIL8:E===_n?k=s.DEPTH32F_STENCIL8:E===or&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pi||E===xs?k=s.DEPTH_COMPONENT24:E===_n?k=s.DEPTH_COMPONENT32F:E===or&&(k=s.DEPTH_COMPONENT16),k}function A(C,E){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==ze&&C.minFilter!==Ke?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function w(C){const E=C.target;E.removeEventListener("dispose",w),L(E),E.isVideoTexture&&h.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),S(E)}function L(C){const E=i.get(C);if(E.__webglInit===void 0)return;const k=C.source,K=d.get(k);if(K){const $=K[E.__cacheKey];$.usedTimes--,$.usedTimes===0&&T(C),Object.keys(K).length===0&&d.delete(k)}i.remove(C)}function T(C){const E=i.get(C);s.deleteTexture(E.__webglTexture);const k=C.source,K=d.get(k);delete K[E.__cacheKey],a.memory.textures--}function S(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(E.__webglFramebuffer[K]))for(let $=0;$<E.__webglFramebuffer[K].length;$++)s.deleteFramebuffer(E.__webglFramebuffer[K][$]);else s.deleteFramebuffer(E.__webglFramebuffer[K]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[K])}else{if(Array.isArray(E.__webglFramebuffer))for(let K=0;K<E.__webglFramebuffer.length;K++)s.deleteFramebuffer(E.__webglFramebuffer[K]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let K=0;K<E.__webglColorRenderbuffer.length;K++)E.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[K]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const k=C.textures;for(let K=0,$=k.length;K<$;K++){const Y=i.get(k[K]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),i.remove(k[K])}i.remove(C)}let D=0;function U(){D=0}function N(){const C=D;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function z(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function q(C,E){const k=i.get(C);if(C.isVideoTexture&&vt(C),C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){const K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,C,E);return}}n.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+E)}function G(C,E){const k=i.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+E)}function J(C,E){const k=i.get(C);if(C.version>0&&k.__version!==C.version){j(k,C,E);return}n.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+E)}function W(C,E){const k=i.get(C);if(C.version>0&&k.__version!==C.version){et(k,C,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+E)}const nt={[_s]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[_o]:s.MIRRORED_REPEAT},ht={[ze]:s.NEAREST,[mh]:s.NEAREST_MIPMAP_NEAREST,[$s]:s.NEAREST_MIPMAP_LINEAR,[Ke]:s.LINEAR,[ao]:s.LINEAR_MIPMAP_NEAREST,[Hn]:s.LINEAR_MIPMAP_LINEAR},yt={[sd]:s.NEVER,[ud]:s.ALWAYS,[rd]:s.LESS,[wh]:s.LEQUAL,[od]:s.EQUAL,[ld]:s.GEQUAL,[ad]:s.GREATER,[cd]:s.NOTEQUAL};function Ot(C,E){if(E.type===_n&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ke||E.magFilter===ao||E.magFilter===$s||E.magFilter===Hn||E.minFilter===Ke||E.minFilter===ao||E.minFilter===$s||E.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,nt[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,nt[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,nt[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,ht[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,ht[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,yt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ze||E.minFilter!==$s&&E.minFilter!==Hn||E.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ne(C,E){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",w));const K=E.source;let $=d.get(K);$===void 0&&($={},d.set(K,$));const Y=z(E);if(Y!==C.__cacheKey){$[Y]===void 0&&($[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[Y].usedTimes++;const _t=$[C.__cacheKey];_t!==void 0&&($[C.__cacheKey].usedTimes--,_t.usedTimes===0&&T(E)),C.__cacheKey=Y,C.__webglTexture=$[Y].texture}return k}function j(C,E,k){let K=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(K=s.TEXTURE_3D);const $=ne(C,E),Y=E.source;n.bindTexture(K,C.__webglTexture,s.TEXTURE0+k);const _t=i.get(Y);if(Y.version!==_t.__version||$===!0){n.activeTexture(s.TEXTURE0+k);const at=Gt.getPrimaries(Gt.workingColorSpace),ft=E.colorSpace===ii?null:Gt.getPrimaries(E.colorSpace),qt=E.colorSpace===ii||at===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let tt=x(E.image,!1,r.maxTextureSize);tt=se(E,tt);const dt=o.convert(E.format,E.colorSpace),bt=o.convert(E.type);let wt=M(E.internalFormat,dt,bt,E.colorSpace,E.isVideoTexture);Ot(K,E);let pt;const Vt=E.mipmaps,Ut=E.isVideoTexture!==!0,ie=_t.__version===void 0||$===!0,F=Y.dataReady,st=A(E,tt);if(E.isDepthTexture)wt=y(E.format===ys,E.type),ie&&(Ut?n.texStorage2D(s.TEXTURE_2D,1,wt,tt.width,tt.height):n.texImage2D(s.TEXTURE_2D,0,wt,tt.width,tt.height,0,dt,bt,null));else if(E.isDataTexture)if(Vt.length>0){Ut&&ie&&n.texStorage2D(s.TEXTURE_2D,st,wt,Vt[0].width,Vt[0].height);for(let X=0,Z=Vt.length;X<Z;X++)pt=Vt[X],Ut?F&&n.texSubImage2D(s.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,bt,pt.data):n.texImage2D(s.TEXTURE_2D,X,wt,pt.width,pt.height,0,dt,bt,pt.data);E.generateMipmaps=!1}else Ut?(ie&&n.texStorage2D(s.TEXTURE_2D,st,wt,tt.width,tt.height),F&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,tt.width,tt.height,dt,bt,tt.data)):n.texImage2D(s.TEXTURE_2D,0,wt,tt.width,tt.height,0,dt,bt,tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ut&&ie&&n.texStorage3D(s.TEXTURE_2D_ARRAY,st,wt,Vt[0].width,Vt[0].height,tt.depth);for(let X=0,Z=Vt.length;X<Z;X++)if(pt=Vt[X],E.format!==sn)if(dt!==null)if(Ut){if(F)if(E.layerUpdates.size>0){const lt=hu(pt.width,pt.height,E.format,E.type);for(const ct of E.layerUpdates){const It=pt.data.subarray(ct*lt/pt.data.BYTES_PER_ELEMENT,(ct+1)*lt/pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,ct,pt.width,pt.height,1,dt,It)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,tt.depth,dt,pt.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,wt,pt.width,pt.height,tt.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?F&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,tt.depth,dt,bt,pt.data):n.texImage3D(s.TEXTURE_2D_ARRAY,X,wt,pt.width,pt.height,tt.depth,0,dt,bt,pt.data)}else{Ut&&ie&&n.texStorage2D(s.TEXTURE_2D,st,wt,Vt[0].width,Vt[0].height);for(let X=0,Z=Vt.length;X<Z;X++)pt=Vt[X],E.format!==sn?dt!==null?Ut?F&&n.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,pt.data):n.compressedTexImage2D(s.TEXTURE_2D,X,wt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?F&&n.texSubImage2D(s.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,bt,pt.data):n.texImage2D(s.TEXTURE_2D,X,wt,pt.width,pt.height,0,dt,bt,pt.data)}else if(E.isDataArrayTexture)if(Ut){if(ie&&n.texStorage3D(s.TEXTURE_2D_ARRAY,st,wt,tt.width,tt.height,tt.depth),F)if(E.layerUpdates.size>0){const X=hu(tt.width,tt.height,E.format,E.type);for(const Z of E.layerUpdates){const lt=tt.data.subarray(Z*X/tt.data.BYTES_PER_ELEMENT,(Z+1)*X/tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,tt.width,tt.height,1,dt,bt,lt)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,dt,bt,tt.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,wt,tt.width,tt.height,tt.depth,0,dt,bt,tt.data);else if(E.isData3DTexture)Ut?(ie&&n.texStorage3D(s.TEXTURE_3D,st,wt,tt.width,tt.height,tt.depth),F&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,dt,bt,tt.data)):n.texImage3D(s.TEXTURE_3D,0,wt,tt.width,tt.height,tt.depth,0,dt,bt,tt.data);else if(E.isFramebufferTexture){if(ie)if(Ut)n.texStorage2D(s.TEXTURE_2D,st,wt,tt.width,tt.height);else{let X=tt.width,Z=tt.height;for(let lt=0;lt<st;lt++)n.texImage2D(s.TEXTURE_2D,lt,wt,X,Z,0,dt,bt,null),X>>=1,Z>>=1}}else if(Vt.length>0){if(Ut&&ie){const X=xt(Vt[0]);n.texStorage2D(s.TEXTURE_2D,st,wt,X.width,X.height)}for(let X=0,Z=Vt.length;X<Z;X++)pt=Vt[X],Ut?F&&n.texSubImage2D(s.TEXTURE_2D,X,0,0,dt,bt,pt):n.texImage2D(s.TEXTURE_2D,X,wt,dt,bt,pt);E.generateMipmaps=!1}else if(Ut){if(ie){const X=xt(tt);n.texStorage2D(s.TEXTURE_2D,st,wt,X.width,X.height)}F&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,bt,tt)}else n.texImage2D(s.TEXTURE_2D,0,wt,dt,bt,tt);g(E)&&m(K),_t.__version=Y.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function et(C,E,k){if(E.image.length!==6)return;const K=ne(C,E),$=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const Y=i.get($);if($.version!==Y.__version||K===!0){n.activeTexture(s.TEXTURE0+k);const _t=Gt.getPrimaries(Gt.workingColorSpace),at=E.colorSpace===ii?null:Gt.getPrimaries(E.colorSpace),ft=E.colorSpace===ii||_t===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,tt=E.image[0]&&E.image[0].isDataTexture,dt=[];for(let Z=0;Z<6;Z++)!qt&&!tt?dt[Z]=x(E.image[Z],!0,r.maxCubemapSize):dt[Z]=tt?E.image[Z].image:E.image[Z],dt[Z]=se(E,dt[Z]);const bt=dt[0],wt=o.convert(E.format,E.colorSpace),pt=o.convert(E.type),Vt=M(E.internalFormat,wt,pt,E.colorSpace),Ut=E.isVideoTexture!==!0,ie=Y.__version===void 0||K===!0,F=$.dataReady;let st=A(E,bt);Ot(s.TEXTURE_CUBE_MAP,E);let X;if(qt){Ut&&ie&&n.texStorage2D(s.TEXTURE_CUBE_MAP,st,Vt,bt.width,bt.height);for(let Z=0;Z<6;Z++){X=dt[Z].mipmaps;for(let lt=0;lt<X.length;lt++){const ct=X[lt];E.format!==sn?wt!==null?Ut?F&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ct.width,ct.height,wt,ct.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?F&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,ct.width,ct.height,wt,pt,ct.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Vt,ct.width,ct.height,0,wt,pt,ct.data)}}}else{if(X=E.mipmaps,Ut&&ie){X.length>0&&st++;const Z=xt(dt[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,st,Vt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(tt){Ut?F&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,dt[Z].width,dt[Z].height,wt,pt,dt[Z].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,dt[Z].width,dt[Z].height,0,wt,pt,dt[Z].data);for(let lt=0;lt<X.length;lt++){const It=X[lt].image[Z].image;Ut?F&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,It.width,It.height,wt,pt,It.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Vt,It.width,It.height,0,wt,pt,It.data)}}else{Ut?F&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,wt,pt,dt[Z]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Vt,wt,pt,dt[Z]);for(let lt=0;lt<X.length;lt++){const ct=X[lt];Ut?F&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,wt,pt,ct.image[Z]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Vt,wt,pt,ct.image[Z])}}}g(E)&&m(s.TEXTURE_CUBE_MAP),Y.__version=$.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function gt(C,E,k,K,$,Y){const _t=o.convert(k.format,k.colorSpace),at=o.convert(k.type),ft=M(k.internalFormat,_t,at,k.colorSpace),qt=i.get(E),tt=i.get(k);if(tt.__renderTarget=E,!qt.__hasExternalTextures){const dt=Math.max(1,E.width>>Y),bt=Math.max(1,E.height>>Y);$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?n.texImage3D($,Y,ft,dt,bt,E.depth,0,_t,at,null):n.texImage2D($,Y,ft,dt,bt,0,_t,at,null)}n.bindFramebuffer(s.FRAMEBUFFER,C),Ht(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,$,tt.__webglTexture,0,kt(E)):($===s.TEXTURE_2D||$>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,$,tt.__webglTexture,Y),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(C,E,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){const K=E.depthTexture,$=K&&K.isDepthTexture?K.type:null,Y=y(E.stencilBuffer,$),_t=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=kt(E);Ht(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,Y,E.width,E.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,at,Y,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Y,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,C)}else{const K=E.textures;for(let $=0;$<K.length;$++){const Y=K[$],_t=o.convert(Y.format,Y.colorSpace),at=o.convert(Y.type),ft=M(Y.internalFormat,_t,at,Y.colorSpace),qt=kt(E);k&&Ht(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,ft,E.width,E.height):Ht(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qt,ft,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ft,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(E.depthTexture);K.__renderTarget=E,(!K.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const $=K.__webglTexture,Y=kt(E);if(E.depthTexture.format===hs)Ht(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,$,0);else if(E.depthTexture.format===ys)Ht(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Pt(C){const E=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),K){const $=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),E.__depthDisposeCallback=$}E.__boundDepthTexture=K}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(E.__webglFramebuffer,C)}else if(k){E.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[K]),E.__webglDepthbuffer[K]===void 0)E.__webglDepthbuffer[K]=s.createRenderbuffer(),ot(E.__webglDepthbuffer[K],C,!1);else{const $=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ot(E.__webglDepthbuffer,C,!1);else{const K=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,$)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(C,E,k){const K=i.get(C);E!==void 0&&gt(K.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Pt(C)}function ce(C){const E=C.texture,k=i.get(C),K=i.get(E);C.addEventListener("dispose",R);const $=C.textures,Y=C.isWebGLCubeRenderTarget===!0,_t=$.length>1;if(_t||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=E.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer[at]=[];for(let ft=0;ft<E.mipmaps.length;ft++)k.__webglFramebuffer[at][ft]=s.createFramebuffer()}else k.__webglFramebuffer[at]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){k.__webglFramebuffer=[];for(let at=0;at<E.mipmaps.length;at++)k.__webglFramebuffer[at]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(_t)for(let at=0,ft=$.length;at<ft;at++){const qt=i.get($[at]);qt.__webglTexture===void 0&&(qt.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ht(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let at=0;at<$.length;at++){const ft=$[at];k.__webglColorRenderbuffer[at]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[at]);const qt=o.convert(ft.format,ft.colorSpace),tt=o.convert(ft.type),dt=M(ft.internalFormat,qt,tt,ft.colorSpace,C.isXRRenderTarget===!0),bt=kt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,bt,dt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,k.__webglColorRenderbuffer[at])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),ot(k.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Ot(s.TEXTURE_CUBE_MAP,E);for(let at=0;at<6;at++)if(E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)gt(k.__webglFramebuffer[at][ft],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else gt(k.__webglFramebuffer[at],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);g(E)&&m(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_t){for(let at=0,ft=$.length;at<ft;at++){const qt=$[at],tt=i.get(qt);n.bindTexture(s.TEXTURE_2D,tt.__webglTexture),Ot(s.TEXTURE_2D,qt),gt(k.__webglFramebuffer,C,qt,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,0),g(qt)&&m(s.TEXTURE_2D)}n.unbindTexture()}else{let at=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(at=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(at,K.__webglTexture),Ot(at,E),E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)gt(k.__webglFramebuffer[ft],C,E,s.COLOR_ATTACHMENT0,at,ft);else gt(k.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,at,0);g(E)&&m(at),n.unbindTexture()}C.depthBuffer&&Pt(C)}function Xt(C){const E=C.textures;for(let k=0,K=E.length;k<K;k++){const $=E[k];if(g($)){const Y=v(C),_t=i.get($).__webglTexture;n.bindTexture(Y,_t),m(Y),n.unbindTexture()}}}const pe=[],I=[];function $e(C){if(C.samples>0){if(Ht(C)===!1){const E=C.textures,k=C.width,K=C.height;let $=s.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=i.get(C),at=E.length>1;if(at)for(let ft=0;ft<E.length;ft++)n.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let ft=0;ft<E.length;ft++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=s.STENCIL_BUFFER_BIT)),at){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const qt=i.get(E[ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qt,0)}s.blitFramebuffer(0,0,k,K,0,0,k,K,$,s.NEAREST),l===!0&&(pe.length=0,I.length=0,pe.push(s.COLOR_ATTACHMENT0+ft),C.depthBuffer&&C.resolveDepthBuffer===!1&&(pe.push(Y),I.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,pe))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<E.length;ft++){n.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,_t.__webglColorRenderbuffer[ft]);const qt=i.get(E[ft]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,qt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function kt(C){return Math.min(r.maxSamples,C.samples)}function Ht(C){const E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function vt(C){const E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function se(C,E){const k=C.colorSpace,K=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==He&&k!==ii&&(Gt.getTransfer(k)===te?(K!==sn||$!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),E}function xt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=J,this.setTextureCube=W,this.rebindTextures=Bt,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ht}function y0(s,t){function n(i,r=ii){let o;const a=Gt.getTransfer(r);if(i===Xn)return s.UNSIGNED_BYTE;if(i===Uc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Nc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===xh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===gh)return s.BYTE;if(i===_h)return s.SHORT;if(i===or)return s.UNSIGNED_SHORT;if(i===Ic)return s.INT;if(i===Pi)return s.UNSIGNED_INT;if(i===_n)return s.FLOAT;if(i===hr)return s.HALF_FLOAT;if(i===yh)return s.ALPHA;if(i===vh)return s.RGB;if(i===sn)return s.RGBA;if(i===Mh)return s.LUMINANCE;if(i===Sh)return s.LUMINANCE_ALPHA;if(i===hs)return s.DEPTH_COMPONENT;if(i===ys)return s.DEPTH_STENCIL;if(i===Fc)return s.RED;if(i===Oc)return s.RED_INTEGER;if(i===Th)return s.RG;if(i===Bc)return s.RG_INTEGER;if(i===zc)return s.RGBA_INTEGER;if(i===co||i===lo||i===uo||i===ho)if(a===te)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===co)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ho)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===co)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===lo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ho)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Va||i===Ga||i===Wa||i===Xa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Va)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ga)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qa||i===Ya||i===ja)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===qa||i===Ya)return a===te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ja)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ka||i===Za||i===$a||i===Ja||i===Qa||i===tc||i===ec||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===cc)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Ka)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Za)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$a)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tc)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sc)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cc)return a===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fo||i===lc||i===uc)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===fo)return a===te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lc)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uc)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Eh||i===hc||i===fc||i===dc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===fo)return o.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===dc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:n}}const v0={type:"move"};class ua{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,o=null,a=null;const c=this._targetRay,l=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const x of t.hand.values()){const g=n.getJointPose(x,i),m=this._getHandJoint(u,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=n.getPose(t.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(v0)))}return c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Ci;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const M0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new Ae,o=t.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new li({vertexShader:M0,fragmentShader:S0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Oe(new Ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E0 extends Di{constructor(t,n){super();const i=this;let r=null,o=1,a=null,c="local-floor",l=1,u=null,h=null,f=null,d=null,p=null,_=null;const x=new T0,g=n.getContextAttributes();let m=null,v=null;const M=[],y=[],A=new Mt;let w=null;const R=new Fe;R.viewport=new Wt;const L=new Fe;L.viewport=new Wt;const T=[R,L],S=new Ip;let D=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=M[j];return et===void 0&&(et=new ua,M[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=M[j];return et===void 0&&(et=new ua,M[j]=et),et.getGripSpace()},this.getHand=function(j){let et=M[j];return et===void 0&&(et=new ua,M[j]=et),et.getHandSpace()};function N(j){const et=y.indexOf(j.inputSource);if(et===-1)return;const gt=M[et];gt!==void 0&&(gt.update(j.inputSource,j.frame,u||a),gt.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",q);for(let j=0;j<M.length;j++){const et=y[j];et!==null&&(y[j]=null,M[j].disconnect(et))}D=null,U=null,x.reset(),t.setRenderTarget(m),p=null,d=null,f=null,r=null,v=null,ne.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){c=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",z),r.addEventListener("inputsourceschange",q),g.xrCompatible!==!0&&await n.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let gt=null,ot=null,At=null;g.depth&&(At=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,gt=g.stencil?ys:hs,ot=g.stencil?xs:Pi);const Pt={colorFormat:n.RGBA8,depthFormat:At,scaleFactor:o};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Pt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new Li(d.textureWidth,d.textureHeight,{format:sn,type:Xn,depthTexture:new Vh(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const gt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,gt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Li(p.framebufferWidth,p.framebufferHeight,{format:sn,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(c),ne.setContext(r),ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(j){for(let et=0;et<j.removed.length;et++){const gt=j.removed[et],ot=y.indexOf(gt);ot>=0&&(y[ot]=null,M[ot].disconnect(gt))}for(let et=0;et<j.added.length;et++){const gt=j.added[et];let ot=y.indexOf(gt);if(ot===-1){for(let Pt=0;Pt<M.length;Pt++)if(Pt>=y.length){y.push(gt),ot=Pt;break}else if(y[Pt]===null){y[Pt]=gt,ot=Pt;break}if(ot===-1)break}const At=M[ot];At&&At.connect(gt)}}const G=new P,J=new P;function W(j,et,gt){G.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(gt.matrixWorld);const ot=G.distanceTo(J),At=et.projectionMatrix.elements,Pt=gt.projectionMatrix.elements,Bt=At[14]/(At[10]-1),ce=At[14]/(At[10]+1),Xt=(At[9]+1)/At[5],pe=(At[9]-1)/At[5],I=(At[8]-1)/At[0],$e=(Pt[8]+1)/Pt[0],kt=Bt*I,Ht=Bt*$e,vt=ot/(-I+$e),se=vt*-I;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(se),j.translateZ(vt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const xt=Bt+vt,C=ce+vt,E=kt-se,k=Ht+(ot-se),K=Xt*ce/C*xt,$=pe*ce/C*xt;j.projectionMatrix.makePerspective(E,k,K,$,xt,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function nt(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let et=j.near,gt=j.far;x.texture!==null&&(x.depthNear>0&&(et=x.depthNear),x.depthFar>0&&(gt=x.depthFar)),S.near=L.near=R.near=et,S.far=L.far=R.far=gt,(D!==S.near||U!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,U=S.far),R.layers.mask=j.layers.mask|2,L.layers.mask=j.layers.mask|4,S.layers.mask=R.layers.mask|L.layers.mask;const ot=j.parent,At=S.cameras;nt(S,ot);for(let Pt=0;Pt<At.length;Pt++)nt(At[Pt],ot);At.length===2?W(S,R,L):S.projectionMatrix.copy(R.projectionMatrix),ht(j,S,ot)};function ht(j,et,gt){gt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(gt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=vs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let yt=null;function Ot(j,et){if(h=et.getViewerPose(u||a),_=et,h!==null){const gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let ot=!1;gt.length!==S.cameras.length&&(S.cameras.length=0,ot=!0);for(let Pt=0;Pt<gt.length;Pt++){const Bt=gt[Pt];let ce=null;if(p!==null)ce=p.getViewport(Bt);else{const pe=f.getViewSubImage(d,Bt);ce=pe.viewport,Pt===0&&(t.setRenderTargetTextures(v,pe.colorTexture,d.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(v))}let Xt=T[Pt];Xt===void 0&&(Xt=new Fe,Xt.layers.enable(Pt),Xt.viewport=new Wt,T[Pt]=Xt),Xt.matrix.fromArray(Bt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Bt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ce.x,ce.y,ce.width,ce.height),Pt===0&&(S.matrix.copy(Xt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ot===!0&&S.cameras.push(Xt)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")){const Pt=f.getDepthInformation(gt[0]);Pt&&Pt.isValid&&Pt.texture&&x.init(t,Pt,r.renderState)}}for(let gt=0;gt<M.length;gt++){const ot=y[gt],At=M[gt];ot!==null&&At!==void 0&&At.update(ot,et,u||a)}yt&&yt(j,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),_=null}const ne=new Yh;ne.setAnimationLoop(Ot),this.setAnimationLoop=function(j){yt=j},this.dispose=function(){}}}const xi=new Rn,b0=new St;function A0(s,t){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Nh(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,v,M,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),f(g,m)):m.isMeshPhongMaterial?(o(g,m),h(g,m)):m.isMeshStandardMaterial?(o(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,y)):m.isMeshMatcapMaterial?(o(g,m),_(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),x(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&c(g,m)):m.isPointsMaterial?l(g,m,v,M):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Be&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Be&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const v=t.get(m),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,xi.copy(y),xi.x*=-1,xi.y*=-1,xi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),g.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(xi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function c(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=M*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,v){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function w0(s,t,n,i){let r={},o={},a=[];const c=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){const y=M.program;i.uniformBlockBinding(v,y)}function u(v,M){let y=r[v.id];y===void 0&&(_(v),y=h(v),r[v.id]=y,v.addEventListener("dispose",g));const A=M.program;i.updateUBOMapping(v,A);const w=t.render.frame;o[v.id]!==w&&(d(v),o[v.id]=w)}function h(v){const M=f();v.__bindingPointIndex=M;const y=s.createBuffer(),A=v.__size,w=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function f(){for(let v=0;v<c;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=r[v.id],y=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let w=0,R=y.length;w<R;w++){const L=Array.isArray(y[w])?y[w]:[y[w]];for(let T=0,S=L.length;T<S;T++){const D=L[T];if(p(D,w,T,A)===!0){const U=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let z=0;for(let q=0;q<N.length;q++){const G=N[q],J=x(G);typeof G=="number"||typeof G=="boolean"?(D.__data[0]=G,s.bufferSubData(s.UNIFORM_BUFFER,U+z,D.__data)):G.isMatrix3?(D.__data[0]=G.elements[0],D.__data[1]=G.elements[1],D.__data[2]=G.elements[2],D.__data[3]=0,D.__data[4]=G.elements[3],D.__data[5]=G.elements[4],D.__data[6]=G.elements[5],D.__data[7]=0,D.__data[8]=G.elements[6],D.__data[9]=G.elements[7],D.__data[10]=G.elements[8],D.__data[11]=0):(G.toArray(D.__data,z),z+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(v,M,y,A){const w=v.value,R=M+"_"+y;if(A[R]===void 0)return typeof w=="number"||typeof w=="boolean"?A[R]=w:A[R]=w.clone(),!0;{const L=A[R];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return A[R]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function _(v){const M=v.uniforms;let y=0;const A=16;for(let R=0,L=M.length;R<L;R++){const T=Array.isArray(M[R])?M[R]:[M[R]];for(let S=0,D=T.length;S<D;S++){const U=T[S],N=Array.isArray(U.value)?U.value:[U.value];for(let z=0,q=N.length;z<q;z++){const G=N[z],J=x(G),W=y%A,nt=W%J.boundary,ht=W+nt;y+=nt,ht!==0&&A-ht<J.storage&&(y+=A-ht),U.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=J.storage}}}const w=y%A;return w>0&&(y+=A-w),v.__size=y,v.__cache={},this}function x(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){const M=v.target;M.removeEventListener("dispose",g);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function m(){for(const v in r)s.deleteBuffer(r[v]);a=[],r={},o={}}return{bind:l,update:u,dispose:m}}class R0{constructor(t={}){const{canvas:n=wd(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const v=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=ci,this.toneMappingExposure=1;const y=this;let A=!1,w=0,R=0,L=null,T=-1,S=null;const D=new Wt,U=new Wt;let N=null;const z=new Ct(0);let q=0,G=n.width,J=n.height,W=1,nt=null,ht=null;const yt=new Wt(0,0,G,J),Ot=new Wt(0,0,G,J);let ne=!1;const j=new Wc;let et=!1,gt=!1;this.transmissionResolutionScale=1;const ot=new St,At=new St,Pt=new P,Bt=new Wt,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function pe(){return L===null?W:1}let I=i;function $e(b,O){return n.getContext(b,O)}try{const b={alpha:!0,depth:r,stencil:o,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Eo}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",lt,!1),n.addEventListener("webglcontextcreationerror",ct,!1),I===null){const O="webgl2";if(I=$e(O,b),I===null)throw $e(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let kt,Ht,vt,se,xt,C,E,k,K,$,Y,_t,at,ft,qt,tt,dt,bt,wt,pt,Vt,Ut,ie,F;function st(){kt=new O_(I),kt.init(),Ut=new y0(I,kt),Ht=new L_(I,kt,t,Ut),vt=new _0(I,kt),Ht.reverseDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),se=new k_(I),xt=new s0,C=new x0(I,kt,vt,xt,Ht,Ut,se),E=new I_(y),k=new F_(y),K=new Yp(I),ie=new C_(I,K),$=new B_(I,K,se,ie),Y=new V_(I,$,K,se),wt=new H_(I,Ht,C),tt=new D_(xt),_t=new i0(y,E,k,kt,Ht,ie,tt),at=new A0(y,xt),ft=new o0,qt=new f0(kt),bt=new R_(y,E,k,vt,Y,p,l),dt=new m0(y,Y,Ht),F=new w0(I,se,Ht,vt),pt=new P_(I,kt,se),Vt=new z_(I,kt,se),se.programs=_t.programs,y.capabilities=Ht,y.extensions=kt,y.properties=xt,y.renderLists=ft,y.shadowMap=dt,y.state=vt,y.info=se}st();const X=new E0(y,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=kt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=kt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(b){b!==void 0&&(W=b,this.setSize(G,J,!1))},this.getSize=function(b){return b.set(G,J)},this.setSize=function(b,O,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,J=O,n.width=Math.floor(b*W),n.height=Math.floor(O*W),H===!0&&(n.style.width=b+"px",n.style.height=O+"px"),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(G*W,J*W).floor()},this.setDrawingBufferSize=function(b,O,H){G=b,J=O,W=H,n.width=Math.floor(b*H),n.height=Math.floor(O*H),this.setViewport(0,0,b,O)},this.getCurrentViewport=function(b){return b.copy(D)},this.getViewport=function(b){return b.copy(yt)},this.setViewport=function(b,O,H,V){b.isVector4?yt.set(b.x,b.y,b.z,b.w):yt.set(b,O,H,V),vt.viewport(D.copy(yt).multiplyScalar(W).round())},this.getScissor=function(b){return b.copy(Ot)},this.setScissor=function(b,O,H,V){b.isVector4?Ot.set(b.x,b.y,b.z,b.w):Ot.set(b,O,H,V),vt.scissor(U.copy(Ot).multiplyScalar(W).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){vt.setScissorTest(ne=b)},this.setOpaqueSort=function(b){nt=b},this.setTransparentSort=function(b){ht=b},this.getClearColor=function(b){return b.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(b=!0,O=!0,H=!0){let V=0;if(b){let B=!1;if(L!==null){const Q=L.texture.format;B=Q===zc||Q===Bc||Q===Oc}if(B){const Q=L.texture.type,rt=Q===Xn||Q===Pi||Q===or||Q===xs||Q===Uc||Q===Nc,ut=bt.getClearColor(),mt=bt.getClearAlpha(),Rt=ut.r,Lt=ut.g,Tt=ut.b;rt?(_[0]=Rt,_[1]=Lt,_[2]=Tt,_[3]=mt,I.clearBufferuiv(I.COLOR,0,_)):(x[0]=Rt,x[1]=Lt,x[2]=Tt,x[3]=mt,I.clearBufferiv(I.COLOR,0,x))}else V|=I.COLOR_BUFFER_BIT}O&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",lt,!1),n.removeEventListener("webglcontextcreationerror",ct,!1),bt.dispose(),ft.dispose(),qt.dispose(),xt.dispose(),E.dispose(),k.dispose(),Y.dispose(),ie.dispose(),F.dispose(),_t.dispose(),X.dispose(),X.removeEventListener("sessionstart",ol),X.removeEventListener("sessionend",al),hi.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const b=se.autoReset,O=dt.enabled,H=dt.autoUpdate,V=dt.needsUpdate,B=dt.type;st(),se.autoReset=b,dt.enabled=O,dt.autoUpdate=H,dt.needsUpdate=V,dt.type=B}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const O=b.target;O.removeEventListener("dispose",It),ue(O)}function ue(b){Pe(b),xt.remove(b)}function Pe(b){const O=xt.get(b).programs;O!==void 0&&(O.forEach(function(H){_t.releaseProgram(H)}),b.isShaderMaterial&&_t.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,H,V,B,Q){O===null&&(O=ce);const rt=B.isMesh&&B.matrixWorld.determinant()<0,ut=mf(b,O,H,V,B);vt.setMaterial(V,rt);let mt=H.index,Rt=1;if(V.wireframe===!0){if(mt=$.getWireframeAttribute(H),mt===void 0)return;Rt=2}const Lt=H.drawRange,Tt=H.attributes.position;let Yt=Lt.start*Rt,Kt=(Lt.start+Lt.count)*Rt;Q!==null&&(Yt=Math.max(Yt,Q.start*Rt),Kt=Math.min(Kt,(Q.start+Q.count)*Rt)),mt!==null?(Yt=Math.max(Yt,0),Kt=Math.min(Kt,mt.count)):Tt!=null&&(Yt=Math.max(Yt,0),Kt=Math.min(Kt,Tt.count));const _e=Kt-Yt;if(_e<0||_e===1/0)return;ie.setup(B,V,ut,H,mt);let he,jt=pt;if(mt!==null&&(he=K.get(mt),jt=Vt,jt.setIndex(he)),B.isMesh)V.wireframe===!0?(vt.setLineWidth(V.wireframeLinewidth*pe()),jt.setMode(I.LINES)):jt.setMode(I.TRIANGLES);else if(B.isLine){let Et=V.linewidth;Et===void 0&&(Et=1),vt.setLineWidth(Et*pe()),B.isLineSegments?jt.setMode(I.LINES):B.isLineLoop?jt.setMode(I.LINE_LOOP):jt.setMode(I.LINE_STRIP)}else B.isPoints?jt.setMode(I.POINTS):B.isSprite&&jt.setMode(I.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)jt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(kt.get("WEBGL_multi_draw"))jt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Et=B._multiDrawStarts,Re=B._multiDrawCounts,Zt=B._multiDrawCount,un=mt?K.get(mt).bytesPerElement:1,Ni=xt.get(V).currentProgram.getUniforms();for(let qe=0;qe<Zt;qe++)Ni.setValue(I,"_gl_DrawID",qe),jt.render(Et[qe]/un,Re[qe])}else if(B.isInstancedMesh)jt.renderInstances(Yt,_e,B.count);else if(H.isInstancedBufferGeometry){const Et=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Re=Math.min(H.instanceCount,Et);jt.renderInstances(Yt,_e,Re)}else jt.render(Yt,_e)};function $t(b,O,H){b.transparent===!0&&b.side===mn&&b.forceSinglePass===!1?(b.side=Be,b.needsUpdate=!0,pr(b,O,H),b.side=vn,b.needsUpdate=!0,pr(b,O,H),b.side=mn):pr(b,O,H)}this.compile=function(b,O,H=null){H===null&&(H=b),m=qt.get(H),m.init(O),M.push(m),H.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),b!==H&&b.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(m.pushLight(B),B.castShadow&&m.pushShadow(B))}),m.setupLights();const V=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const Q=B.material;if(Q)if(Array.isArray(Q))for(let rt=0;rt<Q.length;rt++){const ut=Q[rt];$t(ut,H,B),V.add(ut)}else $t(Q,H,B),V.add(Q)}),M.pop(),m=null,V},this.compileAsync=function(b,O,H=null){const V=this.compile(b,O,H);return new Promise(B=>{function Q(){if(V.forEach(function(rt){xt.get(rt).currentProgram.isReady()&&V.delete(rt)}),V.size===0){B(b);return}setTimeout(Q,10)}kt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let ln=null;function Ln(b){ln&&ln(b)}function ol(){hi.stop()}function al(){hi.start()}const hi=new Yh;hi.setAnimationLoop(Ln),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(b){ln=b,X.setAnimationLoop(b),b===null?hi.stop():hi.start()},X.addEventListener("sessionstart",ol),X.addEventListener("sessionend",al),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(O),O=X.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,O,L),m=qt.get(b,M.length),m.init(O),M.push(m),At.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(At),gt=this.localClippingEnabled,et=tt.init(this.clippingPlanes,gt),g=ft.get(b,v.length),g.init(),v.push(g),X.enabled===!0&&X.isPresenting===!0){const Q=y.xr.getDepthSensingMesh();Q!==null&&Po(Q,O,-1/0,y.sortObjects)}Po(b,O,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(nt,ht),Xt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Xt&&bt.addToRenderList(g,b),this.info.render.frame++,et===!0&&tt.beginShadows();const H=m.state.shadowsArray;dt.render(H,b,O),et===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=g.opaque,B=g.transmissive;if(m.setupLights(),O.isArrayCamera){const Q=O.cameras;if(B.length>0)for(let rt=0,ut=Q.length;rt<ut;rt++){const mt=Q[rt];ll(V,B,b,mt)}Xt&&bt.render(b);for(let rt=0,ut=Q.length;rt<ut;rt++){const mt=Q[rt];cl(g,b,mt,mt.viewport)}}else B.length>0&&ll(V,B,b,O),Xt&&bt.render(b),cl(g,b,O);L!==null&&R===0&&(C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L)),b.isScene===!0&&b.onAfterRender(y,b,O),ie.resetDefaultState(),T=-1,S=null,M.pop(),M.length>0?(m=M[M.length-1],et===!0&&tt.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function Po(b,O,H,V){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){V&&Bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(At);const rt=Y.update(b),ut=b.material;ut.visible&&g.push(b,rt,ut,H,Bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const rt=Y.update(b),ut=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Bt.copy(b.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Bt.copy(rt.boundingSphere.center)),Bt.applyMatrix4(b.matrixWorld).applyMatrix4(At)),Array.isArray(ut)){const mt=rt.groups;for(let Rt=0,Lt=mt.length;Rt<Lt;Rt++){const Tt=mt[Rt],Yt=ut[Tt.materialIndex];Yt&&Yt.visible&&g.push(b,rt,Yt,H,Bt.z,Tt)}}else ut.visible&&g.push(b,rt,ut,H,Bt.z,null)}}const Q=b.children;for(let rt=0,ut=Q.length;rt<ut;rt++)Po(Q[rt],O,H,V)}function cl(b,O,H,V){const B=b.opaque,Q=b.transmissive,rt=b.transparent;m.setupLightsView(H),et===!0&&tt.setGlobalState(y.clippingPlanes,H),V&&vt.viewport(D.copy(V)),B.length>0&&dr(B,O,H),Q.length>0&&dr(Q,O,H),rt.length>0&&dr(rt,O,H),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ll(b,O,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new Li(1,1,{generateMipmaps:!0,type:kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float")?hr:Xn,minFilter:Hn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const Q=m.state.transmissionRenderTarget[V.id],rt=V.viewport||D;Q.setSize(rt.z*y.transmissionResolutionScale,rt.w*y.transmissionResolutionScale);const ut=y.getRenderTarget();y.setRenderTarget(Q),y.getClearColor(z),q=y.getClearAlpha(),q<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&bt.render(H);const mt=y.toneMapping;y.toneMapping=ci;const Rt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),et===!0&&tt.setGlobalState(y.clippingPlanes,V),dr(b,H,V),C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let Tt=0,Yt=O.length;Tt<Yt;Tt++){const Kt=O[Tt],_e=Kt.object,he=Kt.geometry,jt=Kt.material,Et=Kt.group;if(jt.side===mn&&_e.layers.test(V.layers)){const Re=jt.side;jt.side=Be,jt.needsUpdate=!0,ul(_e,H,V,he,jt,Et),jt.side=Re,jt.needsUpdate=!0,Lt=!0}}Lt===!0&&(C.updateMultisampleRenderTarget(Q),C.updateRenderTargetMipmap(Q))}y.setRenderTarget(ut),y.setClearColor(z,q),Rt!==void 0&&(V.viewport=Rt),y.toneMapping=mt}function dr(b,O,H){const V=O.isScene===!0?O.overrideMaterial:null;for(let B=0,Q=b.length;B<Q;B++){const rt=b[B],ut=rt.object,mt=rt.geometry,Rt=V===null?rt.material:V,Lt=rt.group;ut.layers.test(H.layers)&&ul(ut,O,H,mt,Rt,Lt)}}function ul(b,O,H,V,B,Q){b.onBeforeRender(y,O,H,V,B,Q),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(y,O,H,V,b,Q),B.transparent===!0&&B.side===mn&&B.forceSinglePass===!1?(B.side=Be,B.needsUpdate=!0,y.renderBufferDirect(H,O,V,B,b,Q),B.side=vn,B.needsUpdate=!0,y.renderBufferDirect(H,O,V,B,b,Q),B.side=mn):y.renderBufferDirect(H,O,V,B,b,Q),b.onAfterRender(y,O,H,V,B,Q)}function pr(b,O,H){O.isScene!==!0&&(O=ce);const V=xt.get(b),B=m.state.lights,Q=m.state.shadowsArray,rt=B.state.version,ut=_t.getParameters(b,B.state,Q,O,H),mt=_t.getProgramCacheKey(ut);let Rt=V.programs;V.environment=b.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(b.isMeshStandardMaterial?k:E).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Rt===void 0&&(b.addEventListener("dispose",It),Rt=new Map,V.programs=Rt);let Lt=Rt.get(mt);if(Lt!==void 0){if(V.currentProgram===Lt&&V.lightsStateVersion===rt)return fl(b,ut),Lt}else ut.uniforms=_t.getUniforms(b),b.onBeforeCompile(ut,y),Lt=_t.acquireProgram(ut,mt),Rt.set(mt,Lt),V.uniforms=ut.uniforms;const Tt=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=tt.uniform),fl(b,ut),V.needsLights=_f(b),V.lightsStateVersion=rt,V.needsLights&&(Tt.ambientLightColor.value=B.state.ambient,Tt.lightProbe.value=B.state.probe,Tt.directionalLights.value=B.state.directional,Tt.directionalLightShadows.value=B.state.directionalShadow,Tt.spotLights.value=B.state.spot,Tt.spotLightShadows.value=B.state.spotShadow,Tt.rectAreaLights.value=B.state.rectArea,Tt.ltc_1.value=B.state.rectAreaLTC1,Tt.ltc_2.value=B.state.rectAreaLTC2,Tt.pointLights.value=B.state.point,Tt.pointLightShadows.value=B.state.pointShadow,Tt.hemisphereLights.value=B.state.hemi,Tt.directionalShadowMap.value=B.state.directionalShadowMap,Tt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Tt.spotShadowMap.value=B.state.spotShadowMap,Tt.spotLightMatrix.value=B.state.spotLightMatrix,Tt.spotLightMap.value=B.state.spotLightMap,Tt.pointShadowMap.value=B.state.pointShadowMap,Tt.pointShadowMatrix.value=B.state.pointShadowMatrix),V.currentProgram=Lt,V.uniformsList=null,Lt}function hl(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=po.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function fl(b,O){const H=xt.get(b);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function mf(b,O,H,V,B){O.isScene!==!0&&(O=ce),C.resetTextureUnits();const Q=O.fog,rt=V.isMeshStandardMaterial?O.environment:null,ut=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:He,mt=(V.isMeshStandardMaterial?k:E).get(V.envMap||rt),Rt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Lt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Tt=!!H.morphAttributes.position,Yt=!!H.morphAttributes.normal,Kt=!!H.morphAttributes.color;let _e=ci;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(_e=y.toneMapping);const he=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,jt=he!==void 0?he.length:0,Et=xt.get(V),Re=m.state.lights;if(et===!0&&(gt===!0||b!==S)){const Ie=b===S&&V.id===T;tt.setState(V,b,Ie)}let Zt=!1;V.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==Re.state.version||Et.outputColorSpace!==ut||B.isBatchedMesh&&Et.batching===!1||!B.isBatchedMesh&&Et.batching===!0||B.isBatchedMesh&&Et.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Et.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Et.instancing===!1||!B.isInstancedMesh&&Et.instancing===!0||B.isSkinnedMesh&&Et.skinning===!1||!B.isSkinnedMesh&&Et.skinning===!0||B.isInstancedMesh&&Et.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Et.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Et.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Et.instancingMorph===!1&&B.morphTexture!==null||Et.envMap!==mt||V.fog===!0&&Et.fog!==Q||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==tt.numPlanes||Et.numIntersection!==tt.numIntersection)||Et.vertexAlphas!==Rt||Et.vertexTangents!==Lt||Et.morphTargets!==Tt||Et.morphNormals!==Yt||Et.morphColors!==Kt||Et.toneMapping!==_e||Et.morphTargetsCount!==jt)&&(Zt=!0):(Zt=!0,Et.__version=V.version);let un=Et.currentProgram;Zt===!0&&(un=pr(V,O,B));let Ni=!1,qe=!1,Ls=!1;const oe=un.getUniforms(),Je=Et.uniforms;if(vt.useProgram(un.program)&&(Ni=!0,qe=!0,Ls=!0),V.id!==T&&(T=V.id,qe=!0),Ni||S!==b){vt.buffers.depth.getReversed()?(ot.copy(b.projectionMatrix),Cd(ot),Pd(ot),oe.setValue(I,"projectionMatrix",ot)):oe.setValue(I,"projectionMatrix",b.projectionMatrix),oe.setValue(I,"viewMatrix",b.matrixWorldInverse);const Ge=oe.map.cameraPosition;Ge!==void 0&&Ge.setValue(I,Pt.setFromMatrixPosition(b.matrixWorld)),Ht.logarithmicDepthBuffer&&oe.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&oe.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,qe=!0,Ls=!0)}if(B.isSkinnedMesh){oe.setOptional(I,B,"bindMatrix"),oe.setOptional(I,B,"bindMatrixInverse");const Ie=B.skeleton;Ie&&(Ie.boneTexture===null&&Ie.computeBoneTexture(),oe.setValue(I,"boneTexture",Ie.boneTexture,C))}B.isBatchedMesh&&(oe.setOptional(I,B,"batchingTexture"),oe.setValue(I,"batchingTexture",B._matricesTexture,C),oe.setOptional(I,B,"batchingIdTexture"),oe.setValue(I,"batchingIdTexture",B._indirectTexture,C),oe.setOptional(I,B,"batchingColorTexture"),B._colorsTexture!==null&&oe.setValue(I,"batchingColorTexture",B._colorsTexture,C));const Qe=H.morphAttributes;if((Qe.position!==void 0||Qe.normal!==void 0||Qe.color!==void 0)&&wt.update(B,H,un),(qe||Et.receiveShadow!==B.receiveShadow)&&(Et.receiveShadow=B.receiveShadow,oe.setValue(I,"receiveShadow",B.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Je.envMap.value=mt,Je.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&O.environment!==null&&(Je.envMapIntensity.value=O.environmentIntensity),qe&&(oe.setValue(I,"toneMappingExposure",y.toneMappingExposure),Et.needsLights&&gf(Je,Ls),Q&&V.fog===!0&&at.refreshFogUniforms(Je,Q),at.refreshMaterialUniforms(Je,V,W,J,m.state.transmissionRenderTarget[b.id]),po.upload(I,hl(Et),Je,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(po.upload(I,hl(Et),Je,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&oe.setValue(I,"center",B.center),oe.setValue(I,"modelViewMatrix",B.modelViewMatrix),oe.setValue(I,"normalMatrix",B.normalMatrix),oe.setValue(I,"modelMatrix",B.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ie=V.uniformsGroups;for(let Ge=0,Lo=Ie.length;Ge<Lo;Ge++){const fi=Ie[Ge];F.update(fi,un),F.bind(fi,un)}}return un}function gf(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function _f(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(b,O,H){xt.get(b.texture).__webglTexture=O,xt.get(b.depthTexture).__webglTexture=H;const V=xt.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,O){const H=xt.get(b);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0};const xf=I.createFramebuffer();this.setRenderTarget=function(b,O=0,H=0){L=b,w=O,R=H;let V=!0,B=null,Q=!1,rt=!1;if(b){const mt=xt.get(b);if(mt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(mt.__hasExternalTextures)C.rebindTextures(b,xt.get(b.texture).__webglTexture,xt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(mt.__boundDepthTexture!==Tt){if(Tt!==null&&xt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Rt=b.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(rt=!0);const Lt=xt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Lt[O])?B=Lt[O][H]:B=Lt[O],Q=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?B=xt.get(b).__webglMultisampledFramebuffer:Array.isArray(Lt)?B=Lt[H]:B=Lt,D.copy(b.viewport),U.copy(b.scissor),N=b.scissorTest}else D.copy(yt).multiplyScalar(W).floor(),U.copy(Ot).multiplyScalar(W).floor(),N=ne;if(H!==0&&(B=xf),vt.bindFramebuffer(I.FRAMEBUFFER,B)&&V&&vt.drawBuffers(b,B),vt.viewport(D),vt.scissor(U),vt.setScissorTest(N),Q){const mt=xt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+O,mt.__webglTexture,H)}else if(rt){const mt=xt.get(b.texture),Rt=O;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,mt.__webglTexture,H,Rt)}else if(b!==null&&H!==0){const mt=xt.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,H)}T=-1},this.readRenderTargetPixels=function(b,O,H,V,B,Q,rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&rt!==void 0&&(ut=ut[rt]),ut){vt.bindFramebuffer(I.FRAMEBUFFER,ut);try{const mt=b.texture,Rt=mt.format,Lt=mt.type;if(!Ht.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-V&&H>=0&&H<=b.height-B&&I.readPixels(O,H,V,B,Ut.convert(Rt),Ut.convert(Lt),Q)}finally{const mt=L!==null?xt.get(L).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(b,O,H,V,B,Q,rt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=xt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&rt!==void 0&&(ut=ut[rt]),ut){const mt=b.texture,Rt=mt.format,Lt=mt.type;if(!Ht.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=b.width-V&&H>=0&&H<=b.height-B){vt.bindFramebuffer(I.FRAMEBUFFER,ut);const Tt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Tt),I.bufferData(I.PIXEL_PACK_BUFFER,Q.byteLength,I.STREAM_READ),I.readPixels(O,H,V,B,Ut.convert(Rt),Ut.convert(Lt),0);const Yt=L!==null?xt.get(L).__webglFramebuffer:null;vt.bindFramebuffer(I.FRAMEBUFFER,Yt);const Kt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Rd(I,Kt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Tt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Q),I.deleteBuffer(Tt),I.deleteSync(Kt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,O=null,H=0){b.isTexture!==!0&&(ss("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-H),B=Math.floor(b.image.width*V),Q=Math.floor(b.image.height*V),rt=O!==null?O.x:0,ut=O!==null?O.y:0;C.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,rt,ut,B,Q),vt.unbindTexture()};const yf=I.createFramebuffer(),vf=I.createFramebuffer();this.copyTextureToTexture=function(b,O,H=null,V=null,B=0,Q=null){b.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],O=arguments[2],Q=arguments[3]||0,H=null),Q===null&&(B!==0?(ss("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=B,B=0):Q=0);let rt,ut,mt,Rt,Lt,Tt,Yt,Kt,_e;const he=b.isCompressedTexture?b.mipmaps[Q]:b.image;if(H!==null)rt=H.max.x-H.min.x,ut=H.max.y-H.min.y,mt=H.isBox3?H.max.z-H.min.z:1,Rt=H.min.x,Lt=H.min.y,Tt=H.isBox3?H.min.z:0;else{const Qe=Math.pow(2,-B);rt=Math.floor(he.width*Qe),ut=Math.floor(he.height*Qe),b.isDataArrayTexture?mt=he.depth:b.isData3DTexture?mt=Math.floor(he.depth*Qe):mt=1,Rt=0,Lt=0,Tt=0}V!==null?(Yt=V.x,Kt=V.y,_e=V.z):(Yt=0,Kt=0,_e=0);const jt=Ut.convert(O.format),Et=Ut.convert(O.type);let Re;O.isData3DTexture?(C.setTexture3D(O,0),Re=I.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(C.setTexture2DArray(O,0),Re=I.TEXTURE_2D_ARRAY):(C.setTexture2D(O,0),Re=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment);const Zt=I.getParameter(I.UNPACK_ROW_LENGTH),un=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ni=I.getParameter(I.UNPACK_SKIP_PIXELS),qe=I.getParameter(I.UNPACK_SKIP_ROWS),Ls=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,he.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,he.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Rt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Lt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Tt);const oe=b.isDataArrayTexture||b.isData3DTexture,Je=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const Qe=xt.get(b),Ie=xt.get(O),Ge=xt.get(Qe.__renderTarget),Lo=xt.get(Ie.__renderTarget);vt.bindFramebuffer(I.READ_FRAMEBUFFER,Ge.__webglFramebuffer),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Lo.__webglFramebuffer);for(let fi=0;fi<mt;fi++)oe&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(b).__webglTexture,B,Tt+fi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(O).__webglTexture,Q,_e+fi)),I.blitFramebuffer(Rt,Lt,rt,ut,Yt,Kt,rt,ut,I.DEPTH_BUFFER_BIT,I.NEAREST);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(B!==0||b.isRenderTargetTexture||xt.has(b)){const Qe=xt.get(b),Ie=xt.get(O);vt.bindFramebuffer(I.READ_FRAMEBUFFER,yf),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,vf);for(let Ge=0;Ge<mt;Ge++)oe?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.__webglTexture,B,Tt+Ge):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Qe.__webglTexture,B),Je?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ie.__webglTexture,Q,_e+Ge):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,Q),B!==0?I.blitFramebuffer(Rt,Lt,rt,ut,Yt,Kt,rt,ut,I.COLOR_BUFFER_BIT,I.NEAREST):Je?I.copyTexSubImage3D(Re,Q,Yt,Kt,_e+Ge,Rt,Lt,rt,ut):I.copyTexSubImage2D(Re,Q,Yt,Kt,Rt,Lt,rt,ut);vt.bindFramebuffer(I.READ_FRAMEBUFFER,null),vt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Je?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Re,Q,Yt,Kt,_e,rt,ut,mt,jt,Et,he.data):O.isCompressedArrayTexture?I.compressedTexSubImage3D(Re,Q,Yt,Kt,_e,rt,ut,mt,jt,he.data):I.texSubImage3D(Re,Q,Yt,Kt,_e,rt,ut,mt,jt,Et,he):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Q,Yt,Kt,rt,ut,jt,Et,he.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Q,Yt,Kt,he.width,he.height,jt,he.data):I.texSubImage2D(I.TEXTURE_2D,Q,Yt,Kt,rt,ut,jt,Et,he);I.pixelStorei(I.UNPACK_ROW_LENGTH,Zt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,un),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ni),I.pixelStorei(I.UNPACK_SKIP_ROWS,qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ls),Q===0&&O.generateMipmaps&&I.generateMipmap(Re),vt.unbindTexture()},this.copyTextureToTexture3D=function(b,O,H=null,V=null,B=0){return b.isTexture!==!0&&(ss("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,b=arguments[2],O=arguments[3],B=arguments[4]||0),ss('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,O,H,V,B)},this.initRenderTarget=function(b){xt.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),vt.unbindTexture()},this.resetState=function(){w=0,R=0,L=null,vt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=Gt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Gt._getUnpackColorSpace()}}const Fu={type:"change"},el={type:"start"},Jh={type:"end"},Xr=new bs,Ou=new Tn,C0=Math.cos(70*Rh.DEG2RAD),Me=new P,We=2*Math.PI,ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ha=1e-6;class P0 extends Xp{constructor(t,n=null){super(t,n),this.state=ee.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ls.ROTATE,MIDDLE:ls.DOLLY,RIGHT:ls.PAN},this.touches={ONE:rs.ROTATE,TWO:rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new wn,this._lastTargetPosition=new P,this._quat=new wn().setFromUnitVectors(t.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lu,this._sphericalDelta=new lu,this._scale=1,this._panOffset=new P,this._rotateStart=new Mt,this._rotateEnd=new Mt,this._rotateDelta=new Mt,this._panStart=new Mt,this._panEnd=new Mt,this._panDelta=new Mt,this._dollyStart=new Mt,this._dollyEnd=new Mt,this._dollyDelta=new Mt,this._dollyDirection=new P,this._mouse=new Mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D0.bind(this),this._onPointerDown=L0.bind(this),this._onPointerUp=I0.bind(this),this._onContextMenu=k0.bind(this),this._onMouseWheel=F0.bind(this),this._onKeyDown=O0.bind(this),this._onTouchStart=B0.bind(this),this._onTouchMove=z0.bind(this),this._onMouseDown=U0.bind(this),this._onMouseMove=N0.bind(this),this._interceptControlDown=H0.bind(this),this._interceptControlUp=V0.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Fu),this.update(),this.state=ee.NONE}update(t=null){const n=this.object.position;Me.copy(n).sub(this.target),Me.applyQuaternion(this._quat),this._spherical.setFromVector3(Me),this.autoRotate&&this.state===ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=We:i>Math.PI&&(i-=We),r<-Math.PI?r+=We:r>Math.PI&&(r-=We),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=a!=this._spherical.radius}if(Me.setFromSpherical(this._spherical),Me.applyQuaternion(this._quatInverse),n.copy(this.target).add(Me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const c=Me.length();a=this._clampDistance(c*this._scale);const l=c-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),o=!!l}else if(this.object.isOrthographicCamera){const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=l!==this.object.zoom;const u=new P(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(c),this.object.updateMatrixWorld(),a=Me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Xr.origin.copy(this.object.position),Xr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xr.direction))<C0?this.object.lookAt(this.target):(Ou.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xr.intersectPlane(Ou,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>ha||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ha||this._lastTargetPosition.distanceToSquared(this.target)>ha?(this.dispatchEvent(Fu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Me.setFromMatrixColumn(n,0),Me.multiplyScalar(-t),this._panOffset.add(Me)}_panUp(t,n){this.screenSpacePanning===!0?Me.setFromMatrixColumn(n,1):(Me.setFromMatrixColumn(n,0),Me.crossVectors(this.object.up,Me)),Me.multiplyScalar(t),this._panOffset.add(Me)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Me.copy(r).sub(this.target);let o=Me.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*o/i.clientHeight,this.object.matrix),this._panUp(2*n*o/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,o=n-i.top,a=i.width,c=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(o/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(We*this._rotateDelta.x/n.clientHeight),this._rotateUp(We*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),o=.5*(t.pageY+i.y);this._rotateEnd.set(r,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(We*this._rotateDelta.x/n.clientHeight),this._rotateUp(We*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,o=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+n.x)*.5,c=(t.pageY+n.y)*.5;this._updateZoomParameters(a,c)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Mt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function L0(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function D0(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function I0(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jh),this.state=ee.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function U0(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ls.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ee.DOLLY;break;case ls.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ee.ROTATE}break;case ls.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ee.PAN}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(el)}function N0(s){switch(this.state){case ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function F0(s){this.enabled===!1||this.enableZoom===!1||this.state!==ee.NONE||(s.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Jh))}function O0(s){this.enabled!==!1&&this._handleKeyDown(s)}function B0(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ee.TOUCH_ROTATE;break;case rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ee.TOUCH_PAN;break;default:this.state=ee.NONE}break;case 2:switch(this.touches.TWO){case rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ee.TOUCH_DOLLY_PAN;break;case rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ee.TOUCH_DOLLY_ROTATE;break;default:this.state=ee.NONE}break;default:this.state=ee.NONE}this.state!==ee.NONE&&this.dispatchEvent(el)}function z0(s){switch(this._trackPointer(s),this.state){case ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ee.NONE}}function k0(s){this.enabled!==!1&&s.preventDefault()}function H0(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function V0(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Bu(s,t){if(t===td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(t===pc||t===bh){let n=s.getIndex();if(n===null){const a=[],c=s.getAttribute("position");if(c!==void 0){for(let l=0;l<c.count;l++)a.push(l);s.setIndex(a),n=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=n.count-2,r=[];if(t===pc)for(let a=1;a<=i;a++)r.push(n.getX(0)),r.push(n.getX(a)),r.push(n.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(n.getX(a)),r.push(n.getX(a+1)),r.push(n.getX(a+2))):(r.push(n.getX(a+2)),r.push(n.getX(a+1)),r.push(n.getX(a)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const o=s.clone();return o.setIndex(r),o.clearGroups(),o}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),s}class G0 extends Ii{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new j0(n)}),this.register(function(n){return new K0(n)}),this.register(function(n){return new sy(n)}),this.register(function(n){return new ry(n)}),this.register(function(n){return new oy(n)}),this.register(function(n){return new $0(n)}),this.register(function(n){return new J0(n)}),this.register(function(n){return new Q0(n)}),this.register(function(n){return new ty(n)}),this.register(function(n){return new Y0(n)}),this.register(function(n){return new ey(n)}),this.register(function(n){return new Z0(n)}),this.register(function(n){return new iy(n)}),this.register(function(n){return new ny(n)}),this.register(function(n){return new X0(n)}),this.register(function(n){return new ay(n)}),this.register(function(n){return new cy(n)})}load(t,n,i,r){const o=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const u=ir.extractUrlBase(t);a=ir.resolveURL(u,this.path)}else a=ir.extractUrlBase(t);this.manager.itemStart(t);const c=function(u){r?r(u):console.error(u),o.manager.itemError(t),o.manager.itemEnd(t)},l=new jc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(u){try{o.parse(u,a,function(h){n(h),o.manager.itemEnd(t)},c)}catch(h){c(h)}},i,c)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,n,i,r){let o;const a={},c={},l=new TextDecoder;if(typeof t=="string")o=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===Qh){try{a[zt.KHR_BINARY_GLTF]=new ly(t)}catch(f){r&&r(f);return}o=JSON.parse(a[zt.KHR_BINARY_GLTF].content)}else o=JSON.parse(l.decode(t));else o=t;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const u=new Sy(o,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const f=this.pluginCallbacks[h](u);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),c[f.name]=f,a[f.name]=!0}if(o.extensionsUsed)for(let h=0;h<o.extensionsUsed.length;++h){const f=o.extensionsUsed[h],d=o.extensionsRequired||[];switch(f){case zt.KHR_MATERIALS_UNLIT:a[f]=new q0;break;case zt.KHR_DRACO_MESH_COMPRESSION:a[f]=new uy(o,this.dracoLoader);break;case zt.KHR_TEXTURE_TRANSFORM:a[f]=new hy;break;case zt.KHR_MESH_QUANTIZATION:a[f]=new fy;break;default:d.indexOf(f)>=0&&c[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}u.setExtensions(a),u.setPlugins(c),u.parse(i,r)}parseAsync(t,n){const i=this;return new Promise(function(r,o){i.parse(t,n,r,o)})}}function W0(){let s={};return{get:function(t){return s[t]},add:function(t,n){s[t]=n},remove:function(t){delete s[t]},removeAll:function(){s={}}}}const zt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class X0{constructor(t){this.parser=t,this.name=zt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const t=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){const o=n[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(t){const n=this.parser,i="light:"+t;let r=n.cache.get(i);if(r)return r;const o=n.json,l=((o.extensions&&o.extensions[this.name]||{}).lights||[])[t];let u;const h=new Ct(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],He);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new Cp(h),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new wp(h),u.distance=f;break;case"spot":u=new bp(h),u.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),u.decay=2,kn(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=n.createUniqueName(l.name||"light_"+t),r=Promise.resolve(u),n.cache.add(i,r),r}getDependency(t,n){if(t==="light")return this._loadLight(n)}createNodeAttachment(t){const n=this,i=this.parser,o=i.json.nodes[t],c=(o.extensions&&o.extensions[this.name]||{}).light;return c===void 0?null:this._loadLight(c).then(function(l){return i._getNodeRef(n.cache,c,l)})}}class q0{constructor(){this.name=zt.KHR_MATERIALS_UNLIT}getMaterialType(){return bn}extendParams(t,n,i){const r=[];t.color=new Ct(1,1,1),t.opacity=1;const o=n.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){const a=o.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],He),t.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(t,"map",o.baseColorTexture,ye))}return Promise.all(r)}}class Y0{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name].emissiveStrength;return o!==void 0&&(n.emissiveIntensity=o),Promise.resolve()}}class j0{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(n.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&o.push(i.assignTexture(n,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&o.push(i.assignTexture(n,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(o.push(i.assignTexture(n,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const c=a.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Mt(c,c)}return Promise.all(o)}}class K0{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_DISPERSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return n.dispersion=o.dispersion!==void 0?o.dispersion:0,Promise.resolve()}}class Z0{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(n.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&o.push(i.assignTexture(n,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(n.iridescenceIOR=a.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&o.push(i.assignTexture(n,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(o)}}class $0{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_SHEEN}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[];n.sheenColor=new Ct(0,0,0),n.sheenRoughness=0,n.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const c=a.sheenColorFactor;n.sheenColor.setRGB(c[0],c[1],c[2],He)}return a.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&o.push(i.assignTexture(n,"sheenColorMap",a.sheenColorTexture,ye)),a.sheenRoughnessTexture!==void 0&&o.push(i.assignTexture(n,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(o)}}class J0{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(n.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&o.push(i.assignTexture(n,"transmissionMap",a.transmissionTexture)),Promise.all(o)}}class Q0{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_VOLUME}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];n.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&o.push(i.assignTexture(n,"thicknessMap",a.thicknessTexture)),n.attenuationDistance=a.attenuationDistance||1/0;const c=a.attenuationColor||[1,1,1];return n.attenuationColor=new Ct().setRGB(c[0],c[1],c[2],He),Promise.all(o)}}class ty{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_IOR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(t,n){const r=this.parser.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=r.extensions[this.name];return n.ior=o.ior!==void 0?o.ior:1.5,Promise.resolve()}}class ey{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_SPECULAR}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];n.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&o.push(i.assignTexture(n,"specularIntensityMap",a.specularTexture));const c=a.specularColorFactor||[1,1,1];return n.specularColor=new Ct().setRGB(c[0],c[1],c[2],He),a.specularColorTexture!==void 0&&o.push(i.assignTexture(n,"specularColorMap",a.specularColorTexture,ye)),Promise.all(o)}}class ny{constructor(t){this.parser=t,this.name=zt.EXT_MATERIALS_BUMP}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return n.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&o.push(i.assignTexture(n,"bumpMap",a.bumpTexture)),Promise.all(o)}}class iy{constructor(t){this.parser=t,this.name=zt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){const i=this.parser.json.materials[t];return!i.extensions||!i.extensions[this.name]?null:Cn}extendMaterialParams(t,n){const i=this.parser,r=i.json.materials[t];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const o=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(n.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(n.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&o.push(i.assignTexture(n,"anisotropyMap",a.anisotropyTexture)),Promise.all(o)}}class sy{constructor(t){this.parser=t,this.name=zt.KHR_TEXTURE_BASISU}loadTexture(t){const n=this.parser,i=n.json,r=i.textures[t];if(!r.extensions||!r.extensions[this.name])return null;const o=r.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(t,o.source,a)}}class ry{constructor(t){this.parser=t,this.name=zt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(t){const n=this.name,i=this.parser,r=i.json,o=r.textures[t];if(!o.extensions||!o.extensions[n])return null;const a=o.extensions[n],c=r.images[a.source];let l=i.textureLoader;if(c.uri){const u=i.options.manager.getHandler(c.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(t,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const n=new Image;n.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",n.onload=n.onerror=function(){t(n.height===1)}})),this.isSupported}}class oy{constructor(t){this.parser=t,this.name=zt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(t){const n=this.name,i=this.parser,r=i.json,o=r.textures[t];if(!o.extensions||!o.extensions[n])return null;const a=o.extensions[n],c=r.images[a.source];let l=i.textureLoader;if(c.uri){const u=i.options.manager.getHandler(c.uri);u!==null&&(l=u)}return this.detectSupport().then(function(u){if(u)return i.loadTextureImage(t,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(n)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(t)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(t){const n=new Image;n.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",n.onload=n.onerror=function(){t(n.height===1)}})),this.isSupported}}class ay{constructor(t){this.name=zt.EXT_MESHOPT_COMPRESSION,this.parser=t}loadBufferView(t){const n=this.parser.json,i=n.bufferViews[t];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(c){const l=r.byteOffset||0,u=r.byteLength||0,h=r.count,f=r.byteStride,d=new Uint8Array(c,l,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(p),h,f,d,r.mode,r.filter),p})})}else return null}}class cy{constructor(t){this.name=zt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){const n=this.parser.json,i=n.nodes[t];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=n.meshes[i.mesh];for(const u of r.primitives)if(u.mode!==nn.TRIANGLES&&u.mode!==nn.TRIANGLE_STRIP&&u.mode!==nn.TRIANGLE_FAN&&u.mode!==void 0)return null;const a=i.extensions[this.name].attributes,c=[],l={};for(const u in a)c.push(this.parser.getDependency("accessor",a[u]).then(h=>(l[u]=h,l[u])));return c.length<1?null:(c.push(this.parser.createNodeMesh(t)),Promise.all(c).then(u=>{const h=u.pop(),f=h.isGroup?h.children:[h],d=u[0].count,p=[];for(const _ of f){const x=new St,g=new P,m=new wn,v=new P(1,1,1),M=new rp(_.geometry,_.material,d);for(let y=0;y<d;y++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,y),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,y),l.SCALE&&v.fromBufferAttribute(l.SCALE,y),M.setMatrixAt(y,x.compose(g,m,v));for(const y in l)if(y==="_COLOR_0"){const A=l[y];M.instanceColor=new gc(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&_.geometry.setAttribute(y,l[y]);ae.prototype.copy.call(M,_),this.parser.assignFinalMaterial(M),p.push(M)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Qh="glTF",ks=12,zu={JSON:1313821514,BIN:5130562};class ly{constructor(t){this.name=zt.KHR_BINARY_GLTF,this.content=null,this.body=null;const n=new DataView(t,0,ks),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(t.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-ks,o=new DataView(t,ks);let a=0;for(;a<r;){const c=o.getUint32(a,!0);a+=4;const l=o.getUint32(a,!0);if(a+=4,l===zu.JSON){const u=new Uint8Array(t,ks+a,c);this.content=i.decode(u)}else if(l===zu.BIN){const u=ks+a;this.body=t.slice(u,u+c)}a+=c}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class uy{constructor(t,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=zt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(t,n){const i=this.json,r=this.dracoLoader,o=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,c={},l={},u={};for(const h in a){const f=vc[h]||h.toLowerCase();c[f]=a[h]}for(const h in t.attributes){const f=vc[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[t.attributes[h]],p=ds[d.componentType];u[f]=p.name,l[f]=d.normalized===!0}}return n.getDependency("bufferView",o).then(function(h){return new Promise(function(f,d){r.decodeDracoFile(h,function(p){for(const _ in p.attributes){const x=p.attributes[_],g=l[_];g!==void 0&&(x.normalized=g)}f(p)},c,u,He,d)})})}}class hy{constructor(){this.name=zt.KHR_TEXTURE_TRANSFORM}extendTexture(t,n){return(n.texCoord===void 0||n.texCoord===t.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0||(t=t.clone(),n.texCoord!==void 0&&(t.channel=n.texCoord),n.offset!==void 0&&t.offset.fromArray(n.offset),n.rotation!==void 0&&(t.rotation=n.rotation),n.scale!==void 0&&t.repeat.fromArray(n.scale),t.needsUpdate=!0),t}}class fy{constructor(){this.name=zt.KHR_MESH_QUANTIZATION}}class tf extends fr{constructor(t,n,i,r){super(t,n,i,r)}copySampleValue_(t){const n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=t*r*3+r;for(let a=0;a!==r;a++)n[a]=i[o+a];return n}interpolate_(t,n,i,r){const o=this.resultBuffer,a=this.sampleValues,c=this.valueSize,l=c*2,u=c*3,h=r-n,f=(i-n)/h,d=f*f,p=d*f,_=t*u,x=_-u,g=-2*p+3*d,m=p-d,v=1-g,M=m-d+f;for(let y=0;y!==c;y++){const A=a[x+y+c],w=a[x+y+l]*h,R=a[_+y+c],L=a[_+y]*h;o[y]=v*A+M*w+g*R+m*L}return o}}const dy=new wn;class py extends tf{interpolate_(t,n,i,r){const o=super.interpolate_(t,n,i,r);return dy.fromArray(o).normalize().toArray(o),o}}const nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ds={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ku={9728:ze,9729:Ke,9984:mh,9985:ao,9986:$s,9987:Hn},Hu={33071:si,33648:_o,10497:_s},fa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},vc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ti={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},my={CUBICSPLINE:void 0,LINEAR:cr,STEP:ar},da={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function gy(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Yc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vn})),s.DefaultMaterial}function yi(s,t,n){for(const i in n.extensions)s[i]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[i]=n.extensions[i])}function kn(s,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(s.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function _y(s,t,n){let i=!1,r=!1,o=!1;for(let u=0,h=t.length;u<h;u++){const f=t[u];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(o=!0),i&&r&&o)break}if(!i&&!r&&!o)return Promise.resolve(s);const a=[],c=[],l=[];for(let u=0,h=t.length;u<h;u++){const f=t[u];if(i){const d=f.POSITION!==void 0?n.getDependency("accessor",f.POSITION):s.attributes.position;a.push(d)}if(r){const d=f.NORMAL!==void 0?n.getDependency("accessor",f.NORMAL):s.attributes.normal;c.push(d)}if(o){const d=f.COLOR_0!==void 0?n.getDependency("accessor",f.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(c),Promise.all(l)]).then(function(u){const h=u[0],f=u[1],d=u[2];return i&&(s.morphAttributes.position=h),r&&(s.morphAttributes.normal=f),o&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function xy(s,t){if(s.updateMorphTargets(),t.weights!==void 0)for(let n=0,i=t.weights.length;n<i;n++)s.morphTargetInfluences[n]=t.weights[n];if(t.extras&&Array.isArray(t.extras.targetNames)){const n=t.extras.targetNames;if(s.morphTargetInfluences.length===n.length){s.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++)s.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function yy(s){let t;const n=s.extensions&&s.extensions[zt.KHR_DRACO_MESH_COMPRESSION];if(n?t="draco:"+n.bufferView+":"+n.indices+":"+pa(n.attributes):t=s.indices+":"+pa(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,r=s.targets.length;i<r;i++)t+=":"+pa(s.targets[i]);return t}function pa(s){let t="";const n=Object.keys(s).sort();for(let i=0,r=n.length;i<r;i++)t+=n[i]+":"+s[n[i]]+";";return t}function Mc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function vy(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const My=new St;class Sy{constructor(t={},n={}){this.json=t,this.extensions={},this.plugins={},this.options=n,this.cache=new W0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,o=!1,a=-1;if(typeof navigator<"u"){const c=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(c)===!0;const l=c.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,o=c.indexOf("Firefox")>-1,a=o?c.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||o&&a<98?this.textureLoader=new qh(this.options.manager):this.textureLoader=new Pp(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,n){const i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const c={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return yi(o,c,r),kn(c,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(c)})).then(function(){for(const l of c.scenes)l.updateMatrixWorld();t(c)})}).catch(n)}_markDefs(){const t=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=n.length;r<o;r++){const a=n[r].joints;for(let c=0,l=a.length;c<l;c++)t[a[c]].isBone=!0}for(let r=0,o=t.length;r<o;r++){const a=t[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,n){n!==void 0&&(t.refs[n]===void 0&&(t.refs[n]=t.uses[n]=0),t.refs[n]++)}_getNodeRef(t,n,i){if(t.refs[n]<=1)return i;const r=i.clone(),o=(a,c)=>{const l=this.associations.get(a);l!=null&&this.associations.set(c,l);for(const[u,h]of a.children.entries())o(h,c.children[u])};return o(i,r),r.name+="_instance_"+t.uses[n]++,r}_invokeOne(t){const n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){const r=t(n[i]);if(r)return r}return null}_invokeAll(t){const n=Object.values(this.plugins);n.unshift(this);const i=[];for(let r=0;r<n.length;r++){const o=t(n[r]);o&&i.push(o)}return i}getDependency(t,n){const i=t+":"+n;let r=this.cache.get(i);if(!r){switch(t){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(n)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(t,n)}),!r)throw new Error("Unknown type: "+t);break}this.cache.add(i,r)}return r}getDependencies(t){let n=this.cache.get(t);if(!n){const i=this,r=this.json[t+(t==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(o,a){return i.getDependency(t,a)})),this.cache.add(t,n)}return n}loadBuffer(t){const n=this.json.buffers[t],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&t===0)return Promise.resolve(this.extensions[zt.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(o,a){i.load(ir.resolveURL(n.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(t){const n=this.json.bufferViews[t];return this.getDependency("buffer",n.buffer).then(function(i){const r=n.byteLength||0,o=n.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(t){const n=this,i=this.json,r=this.json.accessors[t];if(r.bufferView===void 0&&r.sparse===void 0){const a=fa[r.type],c=ds[r.componentType],l=r.normalized===!0,u=new c(r.count*a);return Promise.resolve(new de(u,a,l))}const o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){const c=a[0],l=fa[r.type],u=ds[r.componentType],h=u.BYTES_PER_ELEMENT,f=h*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let x,g;if(p&&p!==f){const m=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+m+":"+r.count;let M=n.cache.get(v);M||(x=new u(c,m*p,r.count*p/h),M=new tp(x,p/h),n.cache.add(v,M)),g=new Vc(M,l,d%p/h,_)}else c===null?x=new u(r.count*l):x=new u(c,d,r.count*l),g=new de(x,l,_);if(r.sparse!==void 0){const m=fa.SCALAR,v=ds[r.sparse.indices.componentType],M=r.sparse.indices.byteOffset||0,y=r.sparse.values.byteOffset||0,A=new v(a[1],M,r.sparse.count*m),w=new u(a[2],y,r.sparse.count*l);c!==null&&(g=new de(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,L=A.length;R<L;R++){const T=A[R];if(g.setX(T,w[R*l]),l>=2&&g.setY(T,w[R*l+1]),l>=3&&g.setZ(T,w[R*l+2]),l>=4&&g.setW(T,w[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=_}return g})}loadTexture(t){const n=this.json,i=this.options,o=n.textures[t].source,a=n.images[o];let c=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(c=l)}return this.loadTextureImage(t,o,c)}loadTextureImage(t,n,i){const r=this,o=this.json,a=o.textures[t],c=o.images[n],l=(c.uri||c.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const u=this.loadImageSource(n,i).then(function(h){h.flipY=!1,h.name=a.name||c.name||"",h.name===""&&typeof c.uri=="string"&&c.uri.startsWith("data:image/")===!1&&(h.name=c.uri);const d=(o.samplers||{})[a.sampler]||{};return h.magFilter=ku[d.magFilter]||Ke,h.minFilter=ku[d.minFilter]||Hn,h.wrapS=Hu[d.wrapS]||_s,h.wrapT=Hu[d.wrapT]||_s,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==ze&&h.minFilter!==Ke,r.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(t,n){const i=this,r=this.json,o=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(f=>f.clone());const a=r.images[t],c=self.URL||self.webkitURL;let l=a.uri||"",u=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(f){u=!0;const d=new Blob([f],{type:a.mimeType});return l=c.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;n.isImageBitmapLoader===!0&&(_=function(x){const g=new Ae(x);g.needsUpdate=!0,d(g)}),n.load(ir.resolveURL(f,o.path),_,void 0,p)})}).then(function(f){return u===!0&&c.revokeObjectURL(l),kn(f,a),f.userData.mimeType=a.mimeType||vy(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[t]=h,h}assignTexture(t,n,i,r){const o=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),o.extensions[zt.KHR_TEXTURE_TRANSFORM]){const c=i.extensions!==void 0?i.extensions[zt.KHR_TEXTURE_TRANSFORM]:void 0;if(c){const l=o.associations.get(a);a=o.extensions[zt.KHR_TEXTURE_TRANSFORM].extendTexture(a,c),o.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),t[n]=a,a})}assignFinalMaterial(t){const n=t.geometry;let i=t.material;const r=n.attributes.tangent===void 0,o=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(t.isPoints){const c="PointsMaterial:"+i.uuid;let l=this.cache.get(c);l||(l=new Hh,An.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(c,l)),i=l}else if(t.isLine){const c="LineBasicMaterial:"+i.uuid;let l=this.cache.get(c);l||(l=new Xc,An.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(c,l)),i=l}if(r||o||a){let c="ClonedMaterial:"+i.uuid+":";r&&(c+="derivative-tangents:"),o&&(c+="vertex-colors:"),a&&(c+="flat-shading:");let l=this.cache.get(c);l||(l=i.clone(),o&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(c,l),this.associations.set(l,this.associations.get(i))),i=l}t.material=i}getMaterialType(){return Yc}loadMaterial(t){const n=this,i=this.json,r=this.extensions,o=i.materials[t];let a;const c={},l=o.extensions||{},u=[];if(l[zt.KHR_MATERIALS_UNLIT]){const f=r[zt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),u.push(f.extendParams(c,o,n))}else{const f=o.pbrMetallicRoughness||{};if(c.color=new Ct(1,1,1),c.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;c.color.setRGB(d[0],d[1],d[2],He),c.opacity=d[3]}f.baseColorTexture!==void 0&&u.push(n.assignTexture(c,"map",f.baseColorTexture,ye)),c.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,c.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(u.push(n.assignTexture(c,"metalnessMap",f.metallicRoughnessTexture)),u.push(n.assignTexture(c,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),u.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,c)})))}o.doubleSided===!0&&(c.side=mn);const h=o.alphaMode||da.OPAQUE;if(h===da.BLEND?(c.transparent=!0,c.depthWrite=!1):(c.transparent=!1,h===da.MASK&&(c.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==bn&&(u.push(n.assignTexture(c,"normalMap",o.normalTexture)),c.normalScale=new Mt(1,1),o.normalTexture.scale!==void 0)){const f=o.normalTexture.scale;c.normalScale.set(f,f)}if(o.occlusionTexture!==void 0&&a!==bn&&(u.push(n.assignTexture(c,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(c.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==bn){const f=o.emissiveFactor;c.emissive=new Ct().setRGB(f[0],f[1],f[2],He)}return o.emissiveTexture!==void 0&&a!==bn&&u.push(n.assignTexture(c,"emissiveMap",o.emissiveTexture,ye)),Promise.all(u).then(function(){const f=new a(c);return o.name&&(f.name=o.name),kn(f,o),n.associations.set(f,{materials:t}),o.extensions&&yi(r,f,o),f})}createUniqueName(t){const n=Qt.sanitizeNodeName(t||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(t){const n=this,i=this.extensions,r=this.primitiveCache;function o(c){return i[zt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(c,n).then(function(l){return Vu(l,c,n)})}const a=[];for(let c=0,l=t.length;c<l;c++){const u=t[c],h=yy(u),f=r[h];if(f)a.push(f.promise);else{let d;u.extensions&&u.extensions[zt.KHR_DRACO_MESH_COMPRESSION]?d=o(u):d=Vu(new ke,u,n),r[h]={primitive:u,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){const n=this,i=this.json,r=this.extensions,o=i.meshes[t],a=o.primitives,c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l].material===void 0?gy(this.cache):this.getDependency("material",a[l].material);c.push(h)}return c.push(n.loadGeometries(a)),Promise.all(c).then(function(l){const u=l.slice(0,l.length-1),h=l[l.length-1],f=[];for(let p=0,_=h.length;p<_;p++){const x=h[p],g=a[p];let m;const v=u[p];if(g.mode===nn.TRIANGLES||g.mode===nn.TRIANGLE_STRIP||g.mode===nn.TRIANGLE_FAN||g.mode===void 0)m=o.isSkinnedMesh===!0?new np(x,v):new Oe(x,v),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),g.mode===nn.TRIANGLE_STRIP?m.geometry=Bu(m.geometry,bh):g.mode===nn.TRIANGLE_FAN&&(m.geometry=Bu(m.geometry,pc));else if(g.mode===nn.LINES)m=new kh(x,v);else if(g.mode===nn.LINE_STRIP)m=new qc(x,v);else if(g.mode===nn.LINE_LOOP)m=new cp(x,v);else if(g.mode===nn.POINTS)m=new lp(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(m.geometry.morphAttributes).length>0&&xy(m,o),m.name=n.createUniqueName(o.name||"mesh_"+t),kn(m,o),g.extensions&&yi(r,m,g),n.assignFinalMaterial(m),f.push(m)}for(let p=0,_=f.length;p<_;p++)n.associations.set(f[p],{meshes:t,primitives:p});if(f.length===1)return o.extensions&&yi(r,f[0],o),f[0];const d=new Ci;o.extensions&&yi(r,d,o),n.associations.set(d,{meshes:t});for(let p=0,_=f.length;p<_;p++)d.add(f[p]);return d})}loadCamera(t){let n;const i=this.json.cameras[t],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new Fe(Rh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new $c(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),kn(n,i),Promise.resolve(n)}loadSkin(t){const n=this.json.skins[t],i=[];for(let r=0,o=n.joints.length;r<o;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const o=r.pop(),a=r,c=[],l=[];for(let u=0,h=a.length;u<h;u++){const f=a[u];if(f){c.push(f);const d=new St;o!==null&&d.fromArray(o.array,u*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[u])}return new Gc(c,l)})}loadAnimation(t){const n=this.json,i=this,r=n.animations[t],o=r.name?r.name:"animation_"+t,a=[],c=[],l=[],u=[],h=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],_=r.samplers[p.sampler],x=p.target,g=x.node,m=r.parameters!==void 0?r.parameters[_.input]:_.input,v=r.parameters!==void 0?r.parameters[_.output]:_.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),c.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",v)),u.push(_),h.push(x))}return Promise.all([Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u),Promise.all(h)]).then(function(f){const d=f[0],p=f[1],_=f[2],x=f[3],g=f[4],m=[];for(let v=0,M=d.length;v<M;v++){const y=d[v],A=p[v],w=_[v],R=x[v],L=g[v];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const T=i._createAnimationTracks(y,A,w,R,L);if(T)for(let S=0;S<T.length;S++)m.push(T[S])}return new xp(o,void 0,m)})}createNodeMesh(t){const n=this.json,i=this,r=n.nodes[t];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){const a=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(c){if(c.isMesh)for(let l=0,u=r.weights.length;l<u;l++)c.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(t){const n=this.json,i=this,r=n.nodes[t],o=i._loadNodeShallow(t),a=[],c=r.children||[];for(let u=0,h=c.length;u<h;u++)a.push(i.getDependency("node",c[u]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),l]).then(function(u){const h=u[0],f=u[1],d=u[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,My)});for(let p=0,_=f.length;p<_;p++)h.add(f[p]);return h})}_loadNodeShallow(t){const n=this.json,i=this.extensions,r=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];const o=n.nodes[t],a=o.name?r.createUniqueName(o.name):"",c=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(t)});return l&&c.push(l),o.camera!==void 0&&c.push(r.getDependency("camera",o.camera).then(function(u){return r._getNodeRef(r.cameraCache,o.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(t)}).forEach(function(u){c.push(u)}),this.nodeCache[t]=Promise.all(c).then(function(u){let h;if(o.isBone===!0?h=new Bh:u.length>1?h=new Ci:u.length===1?h=u[0]:h=new ae,h!==u[0])for(let f=0,d=u.length;f<d;f++)h.add(u[f]);if(o.name&&(h.userData.name=o.name,h.name=a),kn(h,o),o.extensions&&yi(i,h,o),o.matrix!==void 0){const f=new St;f.fromArray(o.matrix),h.applyMatrix4(f)}else o.translation!==void 0&&h.position.fromArray(o.translation),o.rotation!==void 0&&h.quaternion.fromArray(o.rotation),o.scale!==void 0&&h.scale.fromArray(o.scale);return r.associations.has(h)||r.associations.set(h,{}),r.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){const n=this.extensions,i=this.json.scenes[t],r=this,o=new Ci;i.name&&(o.name=r.createUniqueName(i.name)),kn(o,i),i.extensions&&yi(n,o,i);const a=i.nodes||[],c=[];for(let l=0,u=a.length;l<u;l++)c.push(r.getDependency("node",a[l]));return Promise.all(c).then(function(l){for(let h=0,f=l.length;h<f;h++)o.add(l[h]);const u=h=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof An||d instanceof Ae)&&f.set(d,p);return h.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=u(o),o})}_createAnimationTracks(t,n,i,r,o){const a=[],c=t.name?t.name:t.uuid,l=[];ti[o.path]===ti.weights?t.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(c);let u;switch(ti[o.path]){case ti.weights:u=Ss;break;case ti.rotation:u=Ts;break;case ti.position:case ti.scale:u=Es;break;default:switch(i.itemSize){case 1:u=Ss;break;case 2:case 3:default:u=Es;break}break}const h=r.interpolation!==void 0?my[r.interpolation]:cr,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const _=new u(l[d]+"."+ti[o.path],n.array,f,h);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(t){let n=t.array;if(t.normalized){const i=Mc(n.constructor),r=new Float32Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=n[o]*i;n=r}return n}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(i){const r=this instanceof Ts?py:tf;return new r(this.times,this.values,this.getValueSize()/3,i)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ty(s,t,n){const i=t.attributes,r=new ge;if(i.POSITION!==void 0){const c=n.json.accessors[i.POSITION],l=c.min,u=c.max;if(l!==void 0&&u!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(u[0],u[1],u[2])),c.normalized){const h=Mc(ds[c.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const o=t.targets;if(o!==void 0){const c=new P,l=new P;for(let u=0,h=o.length;u<h;u++){const f=o[u];if(f.POSITION!==void 0){const d=n.json.accessors[f.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const x=Mc(ds[d.componentType]);l.multiplyScalar(x)}c.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(c)}s.boundingBox=r;const a=new Sn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=a}function Vu(s,t,n){const i=t.attributes,r=[];function o(a,c){return n.getDependency("accessor",a).then(function(l){s.setAttribute(c,l)})}for(const a in i){const c=vc[a]||a.toLowerCase();c in s.attributes||r.push(o(i[a],c))}if(t.indices!==void 0&&!s.index){const a=n.getDependency("accessor",t.indices).then(function(c){s.setIndex(c)});r.push(a)}return Gt.workingColorSpace!==He&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Gt.workingColorSpace}" not supported.`),kn(s,t),Ty(s,t,n),Promise.all(r).then(function(){return t.targets!==void 0?_y(s,t.targets,n):s})}const Ey=new URL(""+new URL("test-BT7rZgno.glb",import.meta.url).href,import.meta.url).href,Gu=[new URL(""+new URL("1-WscFlIht.png",import.meta.url).href,import.meta.url).href,new URL(""+new URL("2-CsXAPOxq.jpg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("3-CXczxsqt.jpeg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("4-C1hKOoLV.jpg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("5-DDTfHYtC.jpeg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("6-BpXblAKo.jpeg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("7-DDb6U06K.jpeg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("8-DuF0Vn5L.jpg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("9-C1I9kM0n.jpg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("10-CQsRVk-J.jpg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("11--guzs4po.jpeg",import.meta.url).href,import.meta.url).href,new URL(""+new URL("12-Bpi8xCOD.jpg",import.meta.url).href,import.meta.url).href],by=new URL(""+new URL("test-DaiXUPDa.jpg",import.meta.url).href,import.meta.url).href,Ay="on-load-progress",ef="on-load-model-finish",nf="on-key-down",wy="on-key-up",Ry="on-click-ray-cast",sf="on-show-tooltip",rf="on-hide-tooltip",Cy={1:{title:"三小只叠叠乐"},2:{title:"三小只花丛"},3:{title:"小八埃及"},4:{title:"小八薯片"},5:{title:"乌萨奇蜷手"},6:{title:"小八跳舞"},7:{title:"吉伊吃糖"},8:{title:"寿喜烧"},9:{title:"养乐多"},10:{title:"小八游泳"},11:{title:"小八上网"},12:{title:"小八被料理"}};class Py{constructor(){this.core=new Ui,this.gltfLoader=new G0,this.textureLoader=new qh,this.audioLoader=new Dp,Xh.onProgress=(t,n,i)=>{this.core.$emit(Ay,{url:t,loaded:n,total:i})}}}function Ly(s){return{all:s=s||new Map,on:function(t,n){var i=s.get(t);i?i.push(n):s.set(t,[n])},off:function(t,n){var i=s.get(t);i&&(n?i.splice(i.indexOf(n)>>>0,1):s.set(t,[]))},emit:function(t,n){var i=s.get(t);i&&i.slice().map(function(r){r(n)}),(i=s.get("*"))&&i.slice().map(function(r){r(t,n)})}}}class Dy{constructor(){this.emitterInstance=Ly()}$on(t,n){this.emitterInstance.on(t,n)}$emit(t,...n){this.emitterInstance.emit(t,n)}$off(t,n){this.emitterInstance.off(t,n)}}class Iy{constructor(t,n){this.viewer=t;const i=n??65535;this.boxHelper=new Wp(new ae,new Ct(i)),this.viewer.scene.add(this.boxHelper)}setVisible(t){this.boxHelper.visible=t}attach(t){this.boxHelper.setFromObject(t),this.setVisible(!0)}}const Hs=new P;function en(s,t,n,i,r,o){const a=2*Math.PI*r/4,c=Math.max(o-2*r,0),l=Math.PI/4;Hs.copy(t),Hs[i]=0,Hs.normalize();const u=.5*a/(a+c),h=1-Hs.angleTo(s)/l;return Math.sign(Hs[n])===1?h*u:c/(a+c)+u+u*(1-h)}class Uy extends As{constructor(t=1,n=1,i=1,r=2,o=.1){if(r=r*2+1,o=Math.min(t/2,n/2,i/2,o),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const c=new P,l=new P,u=new P(t,n,i).divideScalar(2).subScalar(o),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,_=new P,x=.5/r;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(c.fromArray(h,g),l.copy(c),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[g+0]=u.x*Math.sign(c.x)+l.x*o,h[g+1]=u.y*Math.sign(c.y)+l.y*o,h[g+2]=u.z*Math.sign(c.z)+l.z*o,f[g+0]=l.x,f[g+1]=l.y,f[g+2]=l.z,Math.floor(g/p)){case 0:_.set(1,0,0),d[m+0]=en(_,l,"z","y",o,i),d[m+1]=1-en(_,l,"y","z",o,n);break;case 1:_.set(-1,0,0),d[m+0]=1-en(_,l,"z","y",o,i),d[m+1]=1-en(_,l,"y","z",o,n);break;case 2:_.set(0,1,0),d[m+0]=1-en(_,l,"x","z",o,t),d[m+1]=en(_,l,"z","x",o,i);break;case 3:_.set(0,-1,0),d[m+0]=1-en(_,l,"x","z",o,t),d[m+1]=1-en(_,l,"z","x",o,i);break;case 4:_.set(0,0,1),d[m+0]=1-en(_,l,"x","y",o,t),d[m+1]=1-en(_,l,"y","x",o,n);break;case 5:_.set(0,0,-1),d[m+0]=en(_,l,"x","y",o,t),d[m+1]=1-en(_,l,"y","x",o,n);break}}}class Ny{constructor(){le(this,"playerIsOnGround",!1);le(this,"velocity",new P);le(this,"gravity",-50);le(this,"tempVector",new P);le(this,"tempVector2",new P);le(this,"speed",12);le(this,"resetPosition",new P(0,6,0));le(this,"capsuleInfo",{radius:1,segment:new yn(new P(0,0,0),new P(0,-5,0))});le(this,"tempBox",new ge);le(this,"tempMat",new St);le(this,"tempSegment",new yn);le(this,"resetY",-25);le(this,"jumpHeight",20);this.core=new Ui,this._createCharacter(),this.core.$on(nf,this._onKeyDown.bind(this))}_createCharacter(){this.character=new Oe(new Uy(.5,2.5,.5,10,1),new bn({color:255})),this.character.geometry.translate(0,-.25,0),this.character.position.copy(this.resetPosition),this.character.visible=!1,this.core.scene.add(this.character)}update(t,n){this._updateOrbitControls(),this._updateCharacter(t),this._checkCollision(t,n),this._updateCamera(),this._checkReset()}_updateOrbitControls(){this.core.controls.maxPolarAngle=Math.PI,this.core.controls.minDistance=1e-4,this.core.controls.maxDistance=1e-4}_updateCharacter(t){this.velocity.y+=this.playerIsOnGround?0:t*this.gravity,this.character.position.addScaledVector(this.velocity,t);const n=this.core.controls.getAzimuthalAngle();if(this.core.controlManager.mode=="pc")this.core.controlManager.keyStatus.KeyW&&(this.tempVector.set(0,0,-1).applyAxisAngle(new P(0,1,0),n),this.character.position.addScaledVector(this.tempVector,this.speed*t)),this.core.controlManager.keyStatus.KeyS&&(this.tempVector.set(0,0,1).applyAxisAngle(new P(0,1,0),n),this.character.position.addScaledVector(this.tempVector,this.speed*t)),this.core.controlManager.keyStatus.KeyA&&(this.tempVector.set(-1,0,0).applyAxisAngle(new P(0,1,0),n),this.character.position.addScaledVector(this.tempVector,this.speed*t)),this.core.controlManager.keyStatus.KeyD&&(this.tempVector.set(1,0,0).applyAxisAngle(new P(0,1,0),n),this.character.position.addScaledVector(this.tempVector,this.speed*t));else{const i=this.core.controlManager.moveDegree;if(i){const r=(i-90)*(Math.PI/180);this.tempVector.set(0,0,-1).applyAxisAngle(new P(0,1,0),r),this.tempVector.applyQuaternion(this.core.camera.quaternion),this.character.position.addScaledVector(this.tempVector,this.speed*t)}}this.character.updateMatrixWorld()}_updateCamera(){this.core.camera.position.sub(this.core.controls.target),this.core.controls.target.copy(this.character.position),this.core.camera.position.add(this.character.position)}_checkCollision(t,n){var c,l;const i=this.capsuleInfo;this.tempBox.makeEmpty(),this.tempMat.copy(n.matrixWorld).invert(),this.tempSegment.copy(i.segment),this.tempSegment.start.applyMatrix4(this.character.matrixWorld).applyMatrix4(this.tempMat),this.tempSegment.end.applyMatrix4(this.character.matrixWorld).applyMatrix4(this.tempMat),this.tempBox.expandByPoint(this.tempSegment.start),this.tempBox.expandByPoint(this.tempSegment.end),this.tempBox.min.addScalar(-i.radius),this.tempBox.max.addScalar(i.radius),(l=(c=n.geometry)==null?void 0:c.boundsTree)==null||l.shapecast({intersectsBounds:u=>u.intersectsBox(this.tempBox),intersectsTriangle:u=>{const h=this.tempVector,f=this.tempVector2,d=u.closestPointToSegment(this.tempSegment,h,f);if(d<i.radius){const p=i.radius-d,_=f.sub(h).normalize();this.tempSegment.start.addScaledVector(_,p),this.tempSegment.end.addScaledVector(_,p)}}});const r=this.tempVector;r.copy(this.tempSegment.start).applyMatrix4(n.matrixWorld);const o=this.tempVector2;o.subVectors(r,this.character.position),this.playerIsOnGround=o.y>Math.abs(t*this.velocity.y*.25);const a=Math.max(0,o.length()-1e-5);o.normalize().multiplyScalar(a),this.character.position.add(o),this.playerIsOnGround?this.velocity.set(0,0,0):(o.normalize(),this.velocity.addScaledVector(o,-o.dot(this.velocity)))}_checkReset(){this.character.position.y<this.resetY&&this._reset()}_reset(){this.velocity.set(0,0,0),this.character.position.copy(this.resetPosition),this.core.camera.position.sub(this.core.controls.target),this.core.controls.target.copy(this.character.position),this.core.camera.position.add(this.character.position),this.core.controls.update()}_onKeyDown(t){t=="Space"&&this.playerIsOnGround&&(this.velocity.y=this.jumpHeight)}}function Fy(s){return typeof s=="object"&&s!=null&&"isMesh"in s}const of=0,Oy=1,By=2,Wu=2,ma=1.25,Xu=1,sr=6*4+4+4,Ro=65535,zy=Math.pow(2,-24),ga=Symbol("SKIP_GENERATION");function ky(s){return s.index?s.index.count:s.attributes.position.count}function Ps(s){return ky(s)/3}function Hy(s,t=ArrayBuffer){return s>65535?new Uint32Array(new t(4*s)):new Uint16Array(new t(2*s))}function Vy(s,t){if(!s.index){const n=s.attributes.position.count,i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Hy(n,i);s.setIndex(new de(r,1));for(let o=0;o<n;o++)r[o]=o}}function af(s,t){const n=Ps(s),i=t||s.drawRange,r=i.start/3,o=(i.start+i.count)/3,a=Math.max(0,r),c=Math.min(n,o)-a;return[{offset:Math.floor(a),count:Math.floor(c)}]}function cf(s,t){if(!s.groups||!s.groups.length)return af(s,t);const n=[],i=new Set,r=t||s.drawRange,o=r.start/3,a=(r.start+r.count)/3;for(const l of s.groups){const u=l.start/3,h=(l.start+l.count)/3;i.add(Math.max(o,u)),i.add(Math.min(a,h))}const c=Array.from(i.values()).sort((l,u)=>l-u);for(let l=0;l<c.length-1;l++){const u=c[l],h=c[l+1];n.push({offset:Math.floor(u),count:Math.floor(h-u)})}return n}function Gy(s,t){const n=Ps(s),i=cf(s,t).sort((a,c)=>a.offset-c.offset),r=i[i.length-1];r.count=Math.min(n-r.offset,r.count);let o=0;return i.forEach(({count:a})=>o+=a),n!==o}function _a(s,t,n,i,r){let o=1/0,a=1/0,c=1/0,l=-1/0,u=-1/0,h=-1/0,f=1/0,d=1/0,p=1/0,_=-1/0,x=-1/0,g=-1/0;for(let m=t*6,v=(t+n)*6;m<v;m+=6){const M=s[m+0],y=s[m+1],A=M-y,w=M+y;A<o&&(o=A),w>l&&(l=w),M<f&&(f=M),M>_&&(_=M);const R=s[m+2],L=s[m+3],T=R-L,S=R+L;T<a&&(a=T),S>u&&(u=S),R<d&&(d=R),R>x&&(x=R);const D=s[m+4],U=s[m+5],N=D-U,z=D+U;N<c&&(c=N),z>h&&(h=z),D<p&&(p=D),D>g&&(g=D)}i[0]=o,i[1]=a,i[2]=c,i[3]=l,i[4]=u,i[5]=h,r[0]=f,r[1]=d,r[2]=p,r[3]=_,r[4]=x,r[5]=g}function Wy(s,t=null,n=null,i=null){const r=s.attributes.position,o=s.index?s.index.array:null,a=Ps(s),c=r.normalized;let l;t===null?(l=new Float32Array(a*6),n=0,i=a):(l=t,n=n||0,i=i||a);const u=r.array,h=r.offset||0;let f=3;r.isInterleavedBufferAttribute&&(f=r.data.stride);const d=["getX","getY","getZ"];for(let p=n;p<n+i;p++){const _=p*3,x=p*6;let g=_+0,m=_+1,v=_+2;o&&(g=o[g],m=o[m],v=o[v]),c||(g=g*f+h,m=m*f+h,v=v*f+h);for(let M=0;M<3;M++){let y,A,w;c?(y=r[d[M]](g),A=r[d[M]](m),w=r[d[M]](v)):(y=u[g+M],A=u[m+M],w=u[v+M]);let R=y;A<R&&(R=A),w<R&&(R=w);let L=y;A>L&&(L=A),w>L&&(L=w);const T=(L-R)/2,S=M*2;l[x+S+0]=R+T,l[x+S+1]=T+(Math.abs(R)+T)*zy}}return l}function fe(s,t,n){return n.min.x=t[s],n.min.y=t[s+1],n.min.z=t[s+2],n.max.x=t[s+3],n.max.y=t[s+4],n.max.z=t[s+5],n}function qu(s){let t=-1,n=-1/0;for(let i=0;i<3;i++){const r=s[i+3]-s[i];r>n&&(n=r,t=i)}return t}function Yu(s,t){t.set(s)}function ju(s,t,n){let i,r;for(let o=0;o<3;o++){const a=o+3;i=s[o],r=t[o],n[o]=i<r?i:r,i=s[a],r=t[a],n[a]=i>r?i:r}}function qr(s,t,n){for(let i=0;i<3;i++){const r=t[s+2*i],o=t[s+2*i+1],a=r-o,c=r+o;a<n[i]&&(n[i]=a),c>n[i+3]&&(n[i+3]=c)}}function Vs(s){const t=s[3]-s[0],n=s[4]-s[1],i=s[5]-s[2];return 2*(t*n+n*i+i*t)}const zn=32,Xy=(s,t)=>s.candidate-t.candidate,ei=new Array(zn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Yr=new Float32Array(6);function qy(s,t,n,i,r,o){let a=-1,c=0;if(o===of)a=qu(t),a!==-1&&(c=(t[a]+t[a+3])/2);else if(o===Oy)a=qu(s),a!==-1&&(c=Yy(n,i,r,a));else if(o===By){const l=Vs(s);let u=ma*r;const h=i*6,f=(i+r)*6;for(let d=0;d<3;d++){const p=t[d],g=(t[d+3]-p)/zn;if(r<zn/4){const m=[...ei];m.length=r;let v=0;for(let y=h;y<f;y+=6,v++){const A=m[v];A.candidate=n[y+2*d],A.count=0;const{bounds:w,leftCacheBounds:R,rightCacheBounds:L}=A;for(let T=0;T<3;T++)L[T]=1/0,L[T+3]=-1/0,R[T]=1/0,R[T+3]=-1/0,w[T]=1/0,w[T+3]=-1/0;qr(y,n,w)}m.sort(Xy);let M=r;for(let y=0;y<M;y++){const A=m[y];for(;y+1<M&&m[y+1].candidate===A.candidate;)m.splice(y+1,1),M--}for(let y=h;y<f;y+=6){const A=n[y+2*d];for(let w=0;w<M;w++){const R=m[w];A>=R.candidate?qr(y,n,R.rightCacheBounds):(qr(y,n,R.leftCacheBounds),R.count++)}}for(let y=0;y<M;y++){const A=m[y],w=A.count,R=r-A.count,L=A.leftCacheBounds,T=A.rightCacheBounds;let S=0;w!==0&&(S=Vs(L)/l);let D=0;R!==0&&(D=Vs(T)/l);const U=Xu+ma*(S*w+D*R);U<u&&(a=d,u=U,c=A.candidate)}}else{for(let M=0;M<zn;M++){const y=ei[M];y.count=0,y.candidate=p+g+M*g;const A=y.bounds;for(let w=0;w<3;w++)A[w]=1/0,A[w+3]=-1/0}for(let M=h;M<f;M+=6){let w=~~((n[M+2*d]-p)/g);w>=zn&&(w=zn-1);const R=ei[w];R.count++,qr(M,n,R.bounds)}const m=ei[zn-1];Yu(m.bounds,m.rightCacheBounds);for(let M=zn-2;M>=0;M--){const y=ei[M],A=ei[M+1];ju(y.bounds,A.rightCacheBounds,y.rightCacheBounds)}let v=0;for(let M=0;M<zn-1;M++){const y=ei[M],A=y.count,w=y.bounds,L=ei[M+1].rightCacheBounds;A!==0&&(v===0?Yu(w,Yr):ju(w,Yr,Yr)),v+=A;let T=0,S=0;v!==0&&(T=Vs(Yr)/l);const D=r-v;D!==0&&(S=Vs(L)/l);const U=Xu+ma*(T*v+S*D);U<u&&(a=d,u=U,c=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${o} used.`);return{axis:a,pos:c}}function Yy(s,t,n,i){let r=0;for(let o=t,a=t+n;o<a;o++)r+=s[o*6+i*2];return r/n}class xa{constructor(){this.boundingData=new Float32Array(6)}}function jy(s,t,n,i,r,o){let a=i,c=i+r-1;const l=o.pos,u=o.axis*2;for(;;){for(;a<=c&&n[a*6+u]<l;)a++;for(;a<=c&&n[c*6+u]>=l;)c--;if(a<c){for(let h=0;h<3;h++){let f=t[a*3+h];t[a*3+h]=t[c*3+h],t[c*3+h]=f}for(let h=0;h<6;h++){let f=n[a*6+h];n[a*6+h]=n[c*6+h],n[c*6+h]=f}a++,c--}else return a}}function Ky(s,t,n,i,r,o){let a=i,c=i+r-1;const l=o.pos,u=o.axis*2;for(;;){for(;a<=c&&n[a*6+u]<l;)a++;for(;a<=c&&n[c*6+u]>=l;)c--;if(a<c){let h=s[a];s[a]=s[c],s[c]=h;for(let f=0;f<6;f++){let d=n[a*6+f];n[a*6+f]=n[c*6+f],n[c*6+f]=d}a++,c--}else return a}}function Xe(s,t){return t[s+15]===65535}function Ze(s,t){return t[s+6]}function rn(s,t){return t[s+14]}function on(s){return s+8}function an(s,t){return t[s+6]}function lf(s,t){return t[s+7]}let uf,Qs,mo,hf;const Zy=Math.pow(2,32);function Sc(s){return"count"in s?1:1+Sc(s.left)+Sc(s.right)}function $y(s,t,n){return uf=new Float32Array(n),Qs=new Uint32Array(n),mo=new Uint16Array(n),hf=new Uint8Array(n),Tc(s,t)}function Tc(s,t){const n=s/4,i=s/2,r="count"in t,o=t.boundingData;for(let a=0;a<6;a++)uf[n+a]=o[a];if(r)if(t.buffer){const a=t.buffer;hf.set(new Uint8Array(a),s);for(let c=s,l=s+a.byteLength;c<l;c+=sr){const u=c/2;Xe(u,mo)||(Qs[c/4+6]+=n)}return s+a.byteLength}else{const a=t.offset,c=t.count;return Qs[n+6]=a,mo[i+14]=c,mo[i+15]=Ro,s+sr}else{const a=t.left,c=t.right,l=t.splitAxis;let u;if(u=Tc(s+sr,a),u/4>Zy)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Qs[n+6]=u/4,u=Tc(u,c),Qs[n+7]=l,u}}function Jy(s,t){const n=(s.index?s.index.count:s.attributes.position.count)/3,i=n>2**16,r=i?4:2,o=t?new SharedArrayBuffer(n*r):new ArrayBuffer(n*r),a=i?new Uint32Array(o):new Uint16Array(o);for(let c=0,l=a.length;c<l;c++)a[c]=c;return a}function Qy(s,t,n,i,r){const{maxDepth:o,verbose:a,maxLeafTris:c,strategy:l,onProgress:u,indirect:h}=r,f=s._indirectBuffer,d=s.geometry,p=d.index?d.index.array:null,_=h?Ky:jy,x=Ps(d),g=new Float32Array(6);let m=!1;const v=new xa;return _a(t,n,i,v.boundingData,g),y(v,n,i,g),v;function M(A){u&&u(A/x)}function y(A,w,R,L=null,T=0){if(!m&&T>=o&&(m=!0,a&&(console.warn(`MeshBVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),R<=c||T>=o)return M(w+R),A.offset=w,A.count=R,A;const S=qy(A.boundingData,L,t,w,R,l);if(S.axis===-1)return M(w+R),A.offset=w,A.count=R,A;const D=_(f,p,t,w,R,S);if(D===w||D===w+R)M(w+R),A.offset=w,A.count=R;else{A.splitAxis=S.axis;const U=new xa,N=w,z=D-w;A.left=U,_a(t,N,z,U.boundingData,g),y(U,N,z,g,T+1);const q=new xa,G=D,J=R-z;A.right=q,_a(t,G,J,q.boundingData,g),y(q,G,J,g,T+1)}return A}}function tv(s,t){const n=s.geometry;t.indirect&&(s._indirectBuffer=Jy(n,t.useSharedArrayBuffer),Gy(n,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||Vy(n,t);const i=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Wy(n),o=t.indirect?af(n,t.range):cf(n,t.range);s._roots=o.map(a=>{const c=Qy(s,r,a.offset,a.count,t),l=Sc(c),u=new i(sr*l);return $y(0,c,u),u})}class qn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,n){let i=1/0,r=-1/0;for(let o=0,a=t.length;o<a;o++){const l=t[o][n];i=l<i?l:i,r=l>r?l:r}this.min=i,this.max=r}setFromPoints(t,n){let i=1/0,r=-1/0;for(let o=0,a=n.length;o<a;o++){const c=n[o],l=t.dot(c);i=l<i?l:i,r=l>r?l:r}this.min=i,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}qn.prototype.setFromBox=function(){const s=new P;return function(n,i){const r=i.min,o=i.max;let a=1/0,c=-1/0;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){s.x=r.x*l+o.x*(1-l),s.y=r.y*u+o.y*(1-u),s.z=r.z*h+o.z*(1-h);const f=n.dot(s);a=Math.min(f,a),c=Math.max(f,c)}this.min=a,this.max=c}}();const ev=function(){const s=new P,t=new P,n=new P;return function(r,o,a){const c=r.start,l=s,u=o.start,h=t;n.subVectors(c,u),s.subVectors(r.end,r.start),t.subVectors(o.end,o.start);const f=n.dot(h),d=h.dot(l),p=h.dot(h),_=n.dot(l),g=l.dot(l)*p-d*d;let m,v;g!==0?m=(f*d-_*p)/g:m=0,v=(f+m*d)/p,a.x=m,a.y=v}}(),nl=function(){const s=new Mt,t=new P,n=new P;return function(r,o,a,c){ev(r,o,s);let l=s.x,u=s.y;if(l>=0&&l<=1&&u>=0&&u<=1){r.at(l,a),o.at(u,c);return}else if(l>=0&&l<=1){u<0?o.at(0,c):o.at(1,c),r.closestPointToPoint(c,!0,a);return}else if(u>=0&&u<=1){l<0?r.at(0,a):r.at(1,a),o.closestPointToPoint(a,!0,c);return}else{let h;l<0?h=r.start:h=r.end;let f;u<0?f=o.start:f=o.end;const d=t,p=n;if(r.closestPointToPoint(f,!0,t),o.closestPointToPoint(h,!0,n),d.distanceToSquared(f)<=p.distanceToSquared(h)){a.copy(d),c.copy(f);return}else{a.copy(h),c.copy(p);return}}}}(),nv=function(){const s=new P,t=new P,n=new Tn,i=new yn;return function(o,a){const{radius:c,center:l}=o,{a:u,b:h,c:f}=a;if(i.start=u,i.end=h,i.closestPointToPoint(l,!0,s).distanceTo(l)<=c||(i.start=u,i.end=f,i.closestPointToPoint(l,!0,s).distanceTo(l)<=c)||(i.start=h,i.end=f,i.closestPointToPoint(l,!0,s).distanceTo(l)<=c))return!0;const x=a.getPlane(n);if(Math.abs(x.distanceToPoint(l))<=c){const m=x.projectPoint(l,t);if(a.containsPoint(m))return!0}return!1}}(),iv=1e-15;function ya(s){return Math.abs(s)<iv}class Mn extends Ce{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new P),this.satBounds=new Array(4).fill().map(()=>new qn),this.points=[this.a,this.b,this.c],this.sphere=new Sn,this.plane=new Tn,this.needsUpdate=!0}intersectsSphere(t){return nv(t,this)}update(){const t=this.a,n=this.b,i=this.c,r=this.points,o=this.satAxes,a=this.satBounds,c=o[0],l=a[0];this.getNormal(c),l.setFromPoints(c,r);const u=o[1],h=a[1];u.subVectors(t,n),h.setFromPoints(u,r);const f=o[2],d=a[2];f.subVectors(n,i),d.setFromPoints(f,r);const p=o[3],_=a[3];p.subVectors(i,t),_.setFromPoints(p,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(c,t),this.needsUpdate=!1}}Mn.prototype.closestPointToSegment=function(){const s=new P,t=new P,n=new yn;return function(r,o=null,a=null){const{start:c,end:l}=r,u=this.points;let h,f=1/0;for(let d=0;d<3;d++){const p=(d+1)%3;n.start.copy(u[d]),n.end.copy(u[p]),nl(n,r,s,t),h=s.distanceToSquared(t),h<f&&(f=h,o&&o.copy(s),a&&a.copy(t))}return this.closestPointToPoint(c,s),h=c.distanceToSquared(s),h<f&&(f=h,o&&o.copy(s),a&&a.copy(c)),this.closestPointToPoint(l,s),h=l.distanceToSquared(s),h<f&&(f=h,o&&o.copy(s),a&&a.copy(l)),Math.sqrt(f)}}();Mn.prototype.intersectsTriangle=function(){const s=new Mn,t=new Array(3),n=new Array(3),i=new qn,r=new qn,o=new P,a=new P,c=new P,l=new P,u=new P,h=new yn,f=new yn,d=new yn,p=new P;function _(x,g,m){const v=x.points;let M=0,y=-1;for(let A=0;A<3;A++){const{start:w,end:R}=h;w.copy(v[A]),R.copy(v[(A+1)%3]),h.delta(a);const L=ya(g.distanceToPoint(w));if(ya(g.normal.dot(a))&&L){m.copy(h),M=2;break}const T=g.intersectLine(h,p);if(!T&&L&&p.copy(w),(T||L)&&!ya(p.distanceTo(R))){if(M<=1)(M===1?m.start:m.end).copy(p),L&&(y=M);else if(M>=2){(y===1?m.start:m.end).copy(p),M=2;break}if(M++,M===2&&y===-1)break}}return M}return function(g,m=null,v=!1){this.needsUpdate&&this.update(),g.isExtendedTriangle?g.needsUpdate&&g.update():(s.copy(g),s.update(),g=s);const M=this.plane,y=g.plane;if(Math.abs(M.normal.dot(y.normal))>1-1e-10){const A=this.satBounds,w=this.satAxes;n[0]=g.a,n[1]=g.b,n[2]=g.c;for(let T=0;T<4;T++){const S=A[T],D=w[T];if(i.setFromPoints(D,n),S.isSeparated(i))return!1}const R=g.satBounds,L=g.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let T=0;T<4;T++){const S=R[T],D=L[T];if(i.setFromPoints(D,t),S.isSeparated(i))return!1}for(let T=0;T<4;T++){const S=w[T];for(let D=0;D<4;D++){const U=L[D];if(o.crossVectors(S,U),i.setFromPoints(o,t),r.setFromPoints(o,n),i.isSeparated(r))return!1}}return m&&(v||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),m.start.set(0,0,0),m.end.set(0,0,0)),!0}else{const A=_(this,y,f);if(A===1&&g.containsPoint(f.end))return m&&(m.start.copy(f.end),m.end.copy(f.end)),!0;if(A!==2)return!1;const w=_(g,M,d);if(w===1&&this.containsPoint(d.end))return m&&(m.start.copy(d.end),m.end.copy(d.end)),!0;if(w!==2)return!1;if(f.delta(c),d.delta(l),c.dot(l)<0){let N=d.start;d.start=d.end,d.end=N}const R=f.start.dot(c),L=f.end.dot(c),T=d.start.dot(c),S=d.end.dot(c),D=L<T,U=R<S;return R!==S&&T!==L&&D===U?!1:(m&&(u.subVectors(f.start,d.start),u.dot(c)>0?m.start.copy(f.start):m.start.copy(d.start),u.subVectors(f.end,d.end),u.dot(c)<0?m.end.copy(f.end):m.end.copy(d.end)),!0)}}}();Mn.prototype.distanceToPoint=function(){const s=new P;return function(n){return this.closestPointToPoint(n,s),n.distanceTo(s)}}();Mn.prototype.distanceToTriangle=function(){const s=new P,t=new P,n=["a","b","c"],i=new yn,r=new yn;return function(a,c=null,l=null){const u=c||l?i:null;if(this.intersectsTriangle(a,u))return(c||l)&&(c&&u.getCenter(c),l&&u.getCenter(l)),0;let h=1/0;for(let f=0;f<3;f++){let d;const p=n[f],_=a[p];this.closestPointToPoint(_,s),d=_.distanceToSquared(s),d<h&&(h=d,c&&c.copy(s),l&&l.copy(_));const x=this[p];a.closestPointToPoint(x,s),d=x.distanceToSquared(s),d<h&&(h=d,c&&c.copy(x),l&&l.copy(s))}for(let f=0;f<3;f++){const d=n[f],p=n[(f+1)%3];i.set(this[d],this[p]);for(let _=0;_<3;_++){const x=n[_],g=n[(_+1)%3];r.set(a[x],a[g]),nl(i,r,s,t);const m=s.distanceToSquared(t);m<h&&(h=m,c&&c.copy(s),l&&l.copy(t))}}return Math.sqrt(h)}}();class Ve{constructor(t,n,i){this.isOrientedBox=!0,this.min=new P,this.max=new P,this.matrix=new St,this.invMatrix=new St,this.points=new Array(8).fill().map(()=>new P),this.satAxes=new Array(3).fill().map(()=>new P),this.satBounds=new Array(3).fill().map(()=>new qn),this.alignedSatBounds=new Array(3).fill().map(()=>new qn),this.needsUpdate=!1,t&&this.min.copy(t),n&&this.max.copy(n),i&&this.matrix.copy(i)}set(t,n,i){this.min.copy(t),this.max.copy(n),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ve.prototype.update=function(){return function(){const t=this.matrix,n=this.min,i=this.max,r=this.points;for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){const d=1*u|2*h|4*f,p=r[d];p.x=u?i.x:n.x,p.y=h?i.y:n.y,p.z=f?i.z:n.z,p.applyMatrix4(t)}const o=this.satBounds,a=this.satAxes,c=r[0];for(let u=0;u<3;u++){const h=a[u],f=o[u],d=1<<u,p=r[d];h.subVectors(c,p),f.setFromPoints(h,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ve.prototype.intersectsBox=function(){const s=new qn;return function(n){this.needsUpdate&&this.update();const i=n.min,r=n.max,o=this.satBounds,a=this.satAxes,c=this.alignedSatBounds;if(s.min=i.x,s.max=r.x,c[0].isSeparated(s)||(s.min=i.y,s.max=r.y,c[1].isSeparated(s))||(s.min=i.z,s.max=r.z,c[2].isSeparated(s)))return!1;for(let l=0;l<3;l++){const u=a[l],h=o[l];if(s.setFromBox(u,n),h.isSeparated(s))return!1}return!0}}();Ve.prototype.intersectsTriangle=function(){const s=new Mn,t=new Array(3),n=new qn,i=new qn,r=new P;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(s.copy(a),s.update(),a=s);const c=this.satBounds,l=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let d=0;d<3;d++){const p=c[d],_=l[d];if(n.setFromPoints(_,t),p.isSeparated(n))return!1}const u=a.satBounds,h=a.satAxes,f=this.points;for(let d=0;d<3;d++){const p=u[d],_=h[d];if(n.setFromPoints(_,f),p.isSeparated(n))return!1}for(let d=0;d<3;d++){const p=l[d];for(let _=0;_<4;_++){const x=h[_];if(r.crossVectors(p,x),n.setFromPoints(r,t),i.setFromPoints(r,f),n.isSeparated(i))return!1}}return!0}}();Ve.prototype.closestPointToPoint=function(){return function(t,n){return this.needsUpdate&&this.update(),n.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),n}}();Ve.prototype.distanceToPoint=function(){const s=new P;return function(n){return this.closestPointToPoint(n,s),n.distanceTo(s)}}();Ve.prototype.distanceToBox=function(){const s=["x","y","z"],t=new Array(12).fill().map(()=>new yn),n=new Array(12).fill().map(()=>new yn),i=new P,r=new P;return function(a,c=0,l=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||u)&&(a.getCenter(r),this.closestPointToPoint(r,i),a.closestPointToPoint(i,r),l&&l.copy(i),u&&u.copy(r)),0;const h=c*c,f=a.min,d=a.max,p=this.points;let _=1/0;for(let g=0;g<8;g++){const m=p[g];r.copy(m).clamp(f,d);const v=m.distanceToSquared(r);if(v<_&&(_=v,l&&l.copy(m),u&&u.copy(r),v<h))return Math.sqrt(v)}let x=0;for(let g=0;g<3;g++)for(let m=0;m<=1;m++)for(let v=0;v<=1;v++){const M=(g+1)%3,y=(g+2)%3,A=m<<M|v<<y,w=1<<g|m<<M|v<<y,R=p[A],L=p[w];t[x].set(R,L);const S=s[g],D=s[M],U=s[y],N=n[x],z=N.start,q=N.end;z[S]=f[S],z[D]=m?f[D]:d[D],z[U]=v?f[U]:d[D],q[S]=d[S],q[D]=m?f[D]:d[D],q[U]=v?f[U]:d[D],x++}for(let g=0;g<=1;g++)for(let m=0;m<=1;m++)for(let v=0;v<=1;v++){r.x=g?d.x:f.x,r.y=m?d.y:f.y,r.z=v?d.z:f.z,this.closestPointToPoint(r,i);const M=r.distanceToSquared(i);if(M<_&&(_=M,l&&l.copy(i),u&&u.copy(r),M<h))return Math.sqrt(M)}for(let g=0;g<12;g++){const m=t[g];for(let v=0;v<12;v++){const M=n[v];nl(m,M,i,r);const y=i.distanceToSquared(r);if(y<_&&(_=y,l&&l.copy(i),u&&u.copy(r),y<h))return Math.sqrt(y)}}return Math.sqrt(_)}}();class il{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class sv extends il{constructor(){super(()=>new Mn)}}const cn=new sv;class rv{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let n=null;this.setBuffer=i=>{n&&t.push(n),n=i,this.float32Array=new Float32Array(i),this.uint16Array=new Uint16Array(i),this.uint32Array=new Uint32Array(i)},this.clearBuffer=()=>{n=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const re=new rv;let oi,as;const $i=[],jr=new il(()=>new ge);function ov(s,t,n,i,r,o){oi=jr.getPrimitive(),as=jr.getPrimitive(),$i.push(oi,as),re.setBuffer(s._roots[t]);const a=Ec(0,s.geometry,n,i,r,o);re.clearBuffer(),jr.releasePrimitive(oi),jr.releasePrimitive(as),$i.pop(),$i.pop();const c=$i.length;return c>0&&(as=$i[c-1],oi=$i[c-2]),a}function Ec(s,t,n,i,r=null,o=0,a=0){const{float32Array:c,uint16Array:l,uint32Array:u}=re;let h=s*2;if(Xe(h,l)){const d=Ze(s,u),p=rn(h,l);return fe(s,c,oi),i(d,p,!1,a,o+s,oi)}else{let S=function(U){const{uint16Array:N,uint32Array:z}=re;let q=U*2;for(;!Xe(q,N);)U=on(U),q=U*2;return Ze(U,z)},D=function(U){const{uint16Array:N,uint32Array:z}=re;let q=U*2;for(;!Xe(q,N);)U=an(U,z),q=U*2;return Ze(U,z)+rn(q,N)};const d=on(s),p=an(s,u);let _=d,x=p,g,m,v,M;if(r&&(v=oi,M=as,fe(_,c,v),fe(x,c,M),g=r(v),m=r(M),m<g)){_=p,x=d;const U=g;g=m,m=U,v=M}v||(v=oi,fe(_,c,v));const y=Xe(_*2,l),A=n(v,y,g,a+1,o+_);let w;if(A===Wu){const U=S(_),z=D(_)-U;w=i(U,z,!0,a+1,o+_,v)}else w=A&&Ec(_,t,n,i,r,o,a+1);if(w)return!0;M=as,fe(x,c,M);const R=Xe(x*2,l),L=n(M,R,m,a+1,o+x);let T;if(L===Wu){const U=S(x),z=D(x)-U;T=i(U,z,!0,a+1,o+x,M)}else T=L&&Ec(x,t,n,i,r,o,a+1);return!!T}}const Gs=new P,va=new P;function av(s,t,n={},i=0,r=1/0){const o=i*i,a=r*r;let c=1/0,l=null;if(s.shapecast({boundsTraverseOrder:h=>(Gs.copy(t).clamp(h.min,h.max),Gs.distanceToSquared(t)),intersectsBounds:(h,f,d)=>d<c&&d<a,intersectsTriangle:(h,f)=>{h.closestPointToPoint(t,Gs);const d=t.distanceToSquared(Gs);return d<c&&(va.copy(Gs),c=d,l=f),d<o}}),c===1/0)return null;const u=Math.sqrt(c);return n.point?n.point.copy(va):n.point=va.clone(),n.distance=u,n.faceIndex=l,n}const cv=parseInt(Eo)>=169,vi=new P,Mi=new P,Si=new P,Kr=new Mt,Zr=new Mt,$r=new Mt,Ku=new P,Zu=new P,$u=new P,Ws=new P;function lv(s,t,n,i,r,o,a,c){let l;if(o===Be?l=s.intersectTriangle(i,n,t,!0,r):l=s.intersectTriangle(t,n,i,o!==mn,r),l===null)return null;const u=s.origin.distanceTo(r);return u<a||u>c?null:{distance:u,point:r.clone()}}function uv(s,t,n,i,r,o,a,c,l,u,h){vi.fromBufferAttribute(t,o),Mi.fromBufferAttribute(t,a),Si.fromBufferAttribute(t,c);const f=lv(s,vi,Mi,Si,Ws,l,u,h);if(f){const d=new P;Ce.getBarycoord(Ws,vi,Mi,Si,d),i&&(Kr.fromBufferAttribute(i,o),Zr.fromBufferAttribute(i,a),$r.fromBufferAttribute(i,c),f.uv=Ce.getInterpolation(Ws,vi,Mi,Si,Kr,Zr,$r,new Mt)),r&&(Kr.fromBufferAttribute(r,o),Zr.fromBufferAttribute(r,a),$r.fromBufferAttribute(r,c),f.uv1=Ce.getInterpolation(Ws,vi,Mi,Si,Kr,Zr,$r,new Mt)),n&&(Ku.fromBufferAttribute(n,o),Zu.fromBufferAttribute(n,a),$u.fromBufferAttribute(n,c),f.normal=Ce.getInterpolation(Ws,vi,Mi,Si,Ku,Zu,$u,new P),f.normal.dot(s.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:a,c,normal:new P,materialIndex:0};Ce.getNormal(vi,Mi,Si,p.normal),f.face=p,f.faceIndex=o,cv&&(f.barycoord=d)}return f}function Co(s,t,n,i,r,o,a){const c=i*3;let l=c+0,u=c+1,h=c+2;const f=s.index;s.index&&(l=f.getX(l),u=f.getX(u),h=f.getX(h));const{position:d,normal:p,uv:_,uv1:x}=s.attributes,g=uv(n,d,p,_,x,l,u,h,t,o,a);return g?(g.faceIndex=i,r&&r.push(g),g):null}function ve(s,t,n,i){const r=s.a,o=s.b,a=s.c;let c=t,l=t+1,u=t+2;n&&(c=n.getX(c),l=n.getX(l),u=n.getX(u)),r.x=i.getX(c),r.y=i.getY(c),r.z=i.getZ(c),o.x=i.getX(l),o.y=i.getY(l),o.z=i.getZ(l),a.x=i.getX(u),a.y=i.getY(u),a.z=i.getZ(u)}function hv(s,t,n,i,r,o,a,c){const{geometry:l,_indirectBuffer:u}=s;for(let h=i,f=i+r;h<f;h++)Co(l,t,n,h,o,a,c)}function fv(s,t,n,i,r,o,a){const{geometry:c,_indirectBuffer:l}=s;let u=1/0,h=null;for(let f=i,d=i+r;f<d;f++){let p;p=Co(c,t,n,f,null,o,a),p&&p.distance<u&&(h=p,u=p.distance)}return h}function dv(s,t,n,i,r,o,a){const{geometry:c}=n,{index:l}=c,u=c.attributes.position;for(let h=s,f=t+s;h<f;h++){let d;if(d=h,ve(a,d*3,l,u),a.needsUpdate=!0,i(a,d,r,o))return!0}return!1}function pv(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const n=s.geometry,i=n.index?n.index.array:null,r=n.attributes.position;let o,a,c,l,u=0;const h=s._roots;for(let d=0,p=h.length;d<p;d++)o=h[d],a=new Uint32Array(o),c=new Uint16Array(o),l=new Float32Array(o),f(0,u),u+=o.byteLength;function f(d,p,_=!1){const x=d*2;if(c[x+15]===Ro){const m=a[d+6],v=c[x+14];let M=1/0,y=1/0,A=1/0,w=-1/0,R=-1/0,L=-1/0;for(let T=3*m,S=3*(m+v);T<S;T++){let D=i[T];const U=r.getX(D),N=r.getY(D),z=r.getZ(D);U<M&&(M=U),U>w&&(w=U),N<y&&(y=N),N>R&&(R=N),z<A&&(A=z),z>L&&(L=z)}return l[d+0]!==M||l[d+1]!==y||l[d+2]!==A||l[d+3]!==w||l[d+4]!==R||l[d+5]!==L?(l[d+0]=M,l[d+1]=y,l[d+2]=A,l[d+3]=w,l[d+4]=R,l[d+5]=L,!0):!1}else{const m=d+8,v=a[d+6],M=m+p,y=v+p;let A=_,w=!1,R=!1;t?A||(w=t.has(M),R=t.has(y),A=!w&&!R):(w=!0,R=!0);const L=A||w,T=A||R;let S=!1;L&&(S=f(m,p,A));let D=!1;T&&(D=f(v,p,A));const U=S||D;if(U)for(let N=0;N<3;N++){const z=m+N,q=v+N,G=l[z],J=l[z+3],W=l[q],nt=l[q+3];l[d+N]=G<W?G:W,l[d+N+3]=J>nt?J:nt}return U}}}function ui(s,t,n,i,r){let o,a,c,l,u,h;const f=1/n.direction.x,d=1/n.direction.y,p=1/n.direction.z,_=n.origin.x,x=n.origin.y,g=n.origin.z;let m=t[s],v=t[s+3],M=t[s+1],y=t[s+3+1],A=t[s+2],w=t[s+3+2];return f>=0?(o=(m-_)*f,a=(v-_)*f):(o=(v-_)*f,a=(m-_)*f),d>=0?(c=(M-x)*d,l=(y-x)*d):(c=(y-x)*d,l=(M-x)*d),o>l||c>a||((c>o||isNaN(o))&&(o=c),(l<a||isNaN(a))&&(a=l),p>=0?(u=(A-g)*p,h=(w-g)*p):(u=(w-g)*p,h=(A-g)*p),o>h||u>a)?!1:((u>o||o!==o)&&(o=u),(h<a||a!==a)&&(a=h),o<=r&&a>=i)}function mv(s,t,n,i,r,o,a,c){const{geometry:l,_indirectBuffer:u}=s;for(let h=i,f=i+r;h<f;h++){let d=u?u[h]:h;Co(l,t,n,d,o,a,c)}}function gv(s,t,n,i,r,o,a){const{geometry:c,_indirectBuffer:l}=s;let u=1/0,h=null;for(let f=i,d=i+r;f<d;f++){let p;p=Co(c,t,n,l?l[f]:f,null,o,a),p&&p.distance<u&&(h=p,u=p.distance)}return h}function _v(s,t,n,i,r,o,a){const{geometry:c}=n,{index:l}=c,u=c.attributes.position;for(let h=s,f=t+s;h<f;h++){let d;if(d=n.resolveTriangleIndex(h),ve(a,d*3,l,u),a.needsUpdate=!0,i(a,d,r,o))return!0}return!1}function xv(s,t,n,i,r,o,a){re.setBuffer(s._roots[t]),bc(0,s,n,i,r,o,a),re.clearBuffer()}function bc(s,t,n,i,r,o,a){const{float32Array:c,uint16Array:l,uint32Array:u}=re,h=s*2;if(Xe(h,l)){const d=Ze(s,u),p=rn(h,l);hv(t,n,i,d,p,r,o,a)}else{const d=on(s);ui(d,c,i,o,a)&&bc(d,t,n,i,r,o,a);const p=an(s,u);ui(p,c,i,o,a)&&bc(p,t,n,i,r,o,a)}}const yv=["x","y","z"];function vv(s,t,n,i,r,o){re.setBuffer(s._roots[t]);const a=Ac(0,s,n,i,r,o);return re.clearBuffer(),a}function Ac(s,t,n,i,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=re;let u=s*2;if(Xe(u,c)){const f=Ze(s,l),d=rn(u,c);return fv(t,n,i,f,d,r,o)}else{const f=lf(s,l),d=yv[f],_=i.direction[d]>=0;let x,g;_?(x=on(s),g=an(s,l)):(x=an(s,l),g=on(s));const v=ui(x,a,i,r,o)?Ac(x,t,n,i,r,o):null;if(v){const A=v.point[d];if(_?A<=a[g+f]:A>=a[g+f+3])return v}const y=ui(g,a,i,r,o)?Ac(g,t,n,i,r,o):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const Jr=new ge,Ji=new Mn,Qi=new Mn,Xs=new St,Ju=new Ve,Qr=new Ve;function Mv(s,t,n,i){re.setBuffer(s._roots[t]);const r=wc(0,s,n,i);return re.clearBuffer(),r}function wc(s,t,n,i,r=null){const{float32Array:o,uint16Array:a,uint32Array:c}=re;let l=s*2;if(r===null&&(n.boundingBox||n.computeBoundingBox(),Ju.set(n.boundingBox.min,n.boundingBox.max,i),r=Ju),Xe(l,a)){const h=t.geometry,f=h.index,d=h.attributes.position,p=n.index,_=n.attributes.position,x=Ze(s,c),g=rn(l,a);if(Xs.copy(i).invert(),n.boundsTree)return fe(s,o,Qr),Qr.matrix.copy(Xs),Qr.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:v=>Qr.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(i),v.b.applyMatrix4(i),v.c.applyMatrix4(i),v.needsUpdate=!0;for(let M=x*3,y=(g+x)*3;M<y;M+=3)if(ve(Qi,M,f,d),Qi.needsUpdate=!0,v.intersectsTriangle(Qi))return!0;return!1}});for(let m=x*3,v=(g+x)*3;m<v;m+=3){ve(Ji,m,f,d),Ji.a.applyMatrix4(Xs),Ji.b.applyMatrix4(Xs),Ji.c.applyMatrix4(Xs),Ji.needsUpdate=!0;for(let M=0,y=p.count;M<y;M+=3)if(ve(Qi,M,p,_),Qi.needsUpdate=!0,Ji.intersectsTriangle(Qi))return!0}}else{const h=s+8,f=c[s+6];return fe(h,o,Jr),!!(r.intersectsBox(Jr)&&wc(h,t,n,i,r)||(fe(f,o,Jr),r.intersectsBox(Jr)&&wc(f,t,n,i,r)))}}const to=new St,Ma=new Ve,qs=new Ve,Sv=new P,Tv=new P,Ev=new P,bv=new P;function Av(s,t,n,i={},r={},o=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Ma.set(t.boundingBox.min,t.boundingBox.max,n),Ma.needsUpdate=!0;const c=s.geometry,l=c.attributes.position,u=c.index,h=t.attributes.position,f=t.index,d=cn.getPrimitive(),p=cn.getPrimitive();let _=Sv,x=Tv,g=null,m=null;r&&(g=Ev,m=bv);let v=1/0,M=null,y=null;return to.copy(n).invert(),qs.matrix.copy(to),s.shapecast({boundsTraverseOrder:A=>Ma.distanceToBox(A),intersectsBounds:(A,w,R)=>R<v&&R<a?(w&&(qs.min.copy(A.min),qs.max.copy(A.max),qs.needsUpdate=!0),!0):!1,intersectsRange:(A,w)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:L=>qs.distanceToBox(L),intersectsBounds:(L,T,S)=>S<v&&S<a,intersectsRange:(L,T)=>{for(let S=L,D=L+T;S<D;S++){ve(p,3*S,f,h),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let U=A,N=A+w;U<N;U++){ve(d,3*U,u,l),d.needsUpdate=!0;const z=d.distanceToTriangle(p,_,g);if(z<v&&(x.copy(_),m&&m.copy(g),v=z,M=U,y=S),z<o)return!0}}}});{const R=Ps(t);for(let L=0,T=R;L<T;L++){ve(p,3*L,f,h),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let S=A,D=A+w;S<D;S++){ve(d,3*S,u,l),d.needsUpdate=!0;const U=d.distanceToTriangle(p,_,g);if(U<v&&(x.copy(_),m&&m.copy(g),v=U,M=S,y=L),U<o)return!0}}}}}),cn.releasePrimitive(d),cn.releasePrimitive(p),v===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=v,i.faceIndex=M,r&&(r.point?r.point.copy(m):r.point=m.clone(),r.point.applyMatrix4(to),x.applyMatrix4(to),r.distance=x.sub(r.point).length(),r.faceIndex=y),i)}function wv(s,t=null){t&&Array.isArray(t)&&(t=new Set(t));const n=s.geometry,i=n.index?n.index.array:null,r=n.attributes.position;let o,a,c,l,u=0;const h=s._roots;for(let d=0,p=h.length;d<p;d++)o=h[d],a=new Uint32Array(o),c=new Uint16Array(o),l=new Float32Array(o),f(0,u),u+=o.byteLength;function f(d,p,_=!1){const x=d*2;if(c[x+15]===Ro){const m=a[d+6],v=c[x+14];let M=1/0,y=1/0,A=1/0,w=-1/0,R=-1/0,L=-1/0;for(let T=m,S=m+v;T<S;T++){const D=3*s.resolveTriangleIndex(T);for(let U=0;U<3;U++){let N=D+U;N=i?i[N]:N;const z=r.getX(N),q=r.getY(N),G=r.getZ(N);z<M&&(M=z),z>w&&(w=z),q<y&&(y=q),q>R&&(R=q),G<A&&(A=G),G>L&&(L=G)}}return l[d+0]!==M||l[d+1]!==y||l[d+2]!==A||l[d+3]!==w||l[d+4]!==R||l[d+5]!==L?(l[d+0]=M,l[d+1]=y,l[d+2]=A,l[d+3]=w,l[d+4]=R,l[d+5]=L,!0):!1}else{const m=d+8,v=a[d+6],M=m+p,y=v+p;let A=_,w=!1,R=!1;t?A||(w=t.has(M),R=t.has(y),A=!w&&!R):(w=!0,R=!0);const L=A||w,T=A||R;let S=!1;L&&(S=f(m,p,A));let D=!1;T&&(D=f(v,p,A));const U=S||D;if(U)for(let N=0;N<3;N++){const z=m+N,q=v+N,G=l[z],J=l[z+3],W=l[q],nt=l[q+3];l[d+N]=G<W?G:W,l[d+N+3]=J>nt?J:nt}return U}}}function Rv(s,t,n,i,r,o,a){re.setBuffer(s._roots[t]),Rc(0,s,n,i,r,o,a),re.clearBuffer()}function Rc(s,t,n,i,r,o,a){const{float32Array:c,uint16Array:l,uint32Array:u}=re,h=s*2;if(Xe(h,l)){const d=Ze(s,u),p=rn(h,l);mv(t,n,i,d,p,r,o,a)}else{const d=on(s);ui(d,c,i,o,a)&&Rc(d,t,n,i,r,o,a);const p=an(s,u);ui(p,c,i,o,a)&&Rc(p,t,n,i,r,o,a)}}const Cv=["x","y","z"];function Pv(s,t,n,i,r,o){re.setBuffer(s._roots[t]);const a=Cc(0,s,n,i,r,o);return re.clearBuffer(),a}function Cc(s,t,n,i,r,o){const{float32Array:a,uint16Array:c,uint32Array:l}=re;let u=s*2;if(Xe(u,c)){const f=Ze(s,l),d=rn(u,c);return gv(t,n,i,f,d,r,o)}else{const f=lf(s,l),d=Cv[f],_=i.direction[d]>=0;let x,g;_?(x=on(s),g=an(s,l)):(x=an(s,l),g=on(s));const v=ui(x,a,i,r,o)?Cc(x,t,n,i,r,o):null;if(v){const A=v.point[d];if(_?A<=a[g+f]:A>=a[g+f+3])return v}const y=ui(g,a,i,r,o)?Cc(g,t,n,i,r,o):null;return v&&y?v.distance<=y.distance?v:y:v||y||null}}const eo=new ge,ts=new Mn,es=new Mn,Ys=new St,Qu=new Ve,no=new Ve;function Lv(s,t,n,i){re.setBuffer(s._roots[t]);const r=Pc(0,s,n,i);return re.clearBuffer(),r}function Pc(s,t,n,i,r=null){const{float32Array:o,uint16Array:a,uint32Array:c}=re;let l=s*2;if(r===null&&(n.boundingBox||n.computeBoundingBox(),Qu.set(n.boundingBox.min,n.boundingBox.max,i),r=Qu),Xe(l,a)){const h=t.geometry,f=h.index,d=h.attributes.position,p=n.index,_=n.attributes.position,x=Ze(s,c),g=rn(l,a);if(Ys.copy(i).invert(),n.boundsTree)return fe(s,o,no),no.matrix.copy(Ys),no.needsUpdate=!0,n.boundsTree.shapecast({intersectsBounds:v=>no.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(i),v.b.applyMatrix4(i),v.c.applyMatrix4(i),v.needsUpdate=!0;for(let M=x,y=g+x;M<y;M++)if(ve(es,3*t.resolveTriangleIndex(M),f,d),es.needsUpdate=!0,v.intersectsTriangle(es))return!0;return!1}});for(let m=x,v=g+x;m<v;m++){const M=t.resolveTriangleIndex(m);ve(ts,3*M,f,d),ts.a.applyMatrix4(Ys),ts.b.applyMatrix4(Ys),ts.c.applyMatrix4(Ys),ts.needsUpdate=!0;for(let y=0,A=p.count;y<A;y+=3)if(ve(es,y,p,_),es.needsUpdate=!0,ts.intersectsTriangle(es))return!0}}else{const h=s+8,f=c[s+6];return fe(h,o,eo),!!(r.intersectsBox(eo)&&Pc(h,t,n,i,r)||(fe(f,o,eo),r.intersectsBox(eo)&&Pc(f,t,n,i,r)))}}const io=new St,Sa=new Ve,js=new Ve,Dv=new P,Iv=new P,Uv=new P,Nv=new P;function Fv(s,t,n,i={},r={},o=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Sa.set(t.boundingBox.min,t.boundingBox.max,n),Sa.needsUpdate=!0;const c=s.geometry,l=c.attributes.position,u=c.index,h=t.attributes.position,f=t.index,d=cn.getPrimitive(),p=cn.getPrimitive();let _=Dv,x=Iv,g=null,m=null;r&&(g=Uv,m=Nv);let v=1/0,M=null,y=null;return io.copy(n).invert(),js.matrix.copy(io),s.shapecast({boundsTraverseOrder:A=>Sa.distanceToBox(A),intersectsBounds:(A,w,R)=>R<v&&R<a?(w&&(js.min.copy(A.min),js.max.copy(A.max),js.needsUpdate=!0),!0):!1,intersectsRange:(A,w)=>{if(t.boundsTree){const R=t.boundsTree;return R.shapecast({boundsTraverseOrder:L=>js.distanceToBox(L),intersectsBounds:(L,T,S)=>S<v&&S<a,intersectsRange:(L,T)=>{for(let S=L,D=L+T;S<D;S++){const U=R.resolveTriangleIndex(S);ve(p,3*U,f,h),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let N=A,z=A+w;N<z;N++){const q=s.resolveTriangleIndex(N);ve(d,3*q,u,l),d.needsUpdate=!0;const G=d.distanceToTriangle(p,_,g);if(G<v&&(x.copy(_),m&&m.copy(g),v=G,M=N,y=S),G<o)return!0}}}})}else{const R=Ps(t);for(let L=0,T=R;L<T;L++){ve(p,3*L,f,h),p.a.applyMatrix4(n),p.b.applyMatrix4(n),p.c.applyMatrix4(n),p.needsUpdate=!0;for(let S=A,D=A+w;S<D;S++){const U=s.resolveTriangleIndex(S);ve(d,3*U,u,l),d.needsUpdate=!0;const N=d.distanceToTriangle(p,_,g);if(N<v&&(x.copy(_),m&&m.copy(g),v=N,M=S,y=L),N<o)return!0}}}}}),cn.releasePrimitive(d),cn.releasePrimitive(p),v===1/0?null:(i.point?i.point.copy(x):i.point=x.clone(),i.distance=v,i.faceIndex=M,r&&(r.point?r.point.copy(m):r.point=m.clone(),r.point.applyMatrix4(io),x.applyMatrix4(io),r.distance=x.sub(r.point).length(),r.faceIndex=y),i)}function Ov(){return typeof SharedArrayBuffer<"u"}const rr=new re.constructor,So=new re.constructor,ni=new il(()=>new ge),ns=new ge,is=new ge,Ta=new ge,Ea=new ge;let ba=!1;function Bv(s,t,n,i){if(ba)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");ba=!0;const r=s._roots,o=t._roots;let a,c=0,l=0;const u=new St().copy(n).invert();for(let h=0,f=r.length;h<f;h++){rr.setBuffer(r[h]),l=0;const d=ni.getPrimitive();fe(0,rr.float32Array,d),d.applyMatrix4(u);for(let p=0,_=o.length;p<_&&(So.setBuffer(o[p]),a=pn(0,0,n,u,i,c,l,0,0,d),So.clearBuffer(),l+=o[p].length,!a);p++);if(ni.releasePrimitive(d),rr.clearBuffer(),c+=r[h].length,a)break}return ba=!1,a}function pn(s,t,n,i,r,o=0,a=0,c=0,l=0,u=null,h=!1){let f,d;h?(f=So,d=rr):(f=rr,d=So);const p=f.float32Array,_=f.uint32Array,x=f.uint16Array,g=d.float32Array,m=d.uint32Array,v=d.uint16Array,M=s*2,y=t*2,A=Xe(M,x),w=Xe(y,v);let R=!1;if(w&&A)h?R=r(Ze(t,m),rn(t*2,v),Ze(s,_),rn(s*2,x),l,a+t,c,o+s):R=r(Ze(s,_),rn(s*2,x),Ze(t,m),rn(t*2,v),c,o+s,l,a+t);else if(w){const L=ni.getPrimitive();fe(t,g,L),L.applyMatrix4(n);const T=on(s),S=an(s,_);fe(T,p,ns),fe(S,p,is);const D=L.intersectsBox(ns),U=L.intersectsBox(is);R=D&&pn(t,T,i,n,r,a,o,l,c+1,L,!h)||U&&pn(t,S,i,n,r,a,o,l,c+1,L,!h),ni.releasePrimitive(L)}else{const L=on(t),T=an(t,m);fe(L,g,Ta),fe(T,g,Ea);const S=u.intersectsBox(Ta),D=u.intersectsBox(Ea);if(S&&D)R=pn(s,L,n,i,r,o,a,c,l+1,u,h)||pn(s,T,n,i,r,o,a,c,l+1,u,h);else if(S)if(A)R=pn(s,L,n,i,r,o,a,c,l+1,u,h);else{const U=ni.getPrimitive();U.copy(Ta).applyMatrix4(n);const N=on(s),z=an(s,_);fe(N,p,ns),fe(z,p,is);const q=U.intersectsBox(ns),G=U.intersectsBox(is);R=q&&pn(L,N,i,n,r,a,o,l,c+1,U,!h)||G&&pn(L,z,i,n,r,a,o,l,c+1,U,!h),ni.releasePrimitive(U)}else if(D)if(A)R=pn(s,T,n,i,r,o,a,c,l+1,u,h);else{const U=ni.getPrimitive();U.copy(Ea).applyMatrix4(n);const N=on(s),z=an(s,_);fe(N,p,ns),fe(z,p,is);const q=U.intersectsBox(ns),G=U.intersectsBox(is);R=q&&pn(T,N,i,n,r,a,o,l,c+1,U,!h)||G&&pn(T,z,i,n,r,a,o,l,c+1,U,!h),ni.releasePrimitive(U)}}return R}const so=new Ve,th=new ge,zv={strategy:of,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class sl{static serialize(t,n={}){n={cloneBuffers:!0,...n};const i=t.geometry,r=t._roots,o=t._indirectBuffer,a=i.getIndex();let c;return n.cloneBuffers?c={roots:r.map(l=>l.slice()),index:a?a.array.slice():null,indirectBuffer:o?o.slice():null}:c={roots:r,index:a?a.array:null,indirectBuffer:o},c}static deserialize(t,n,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};const{index:r,roots:o,indirectBuffer:a}=t,c=new sl(n,{...i,[ga]:!0});if(c._roots=o,c._indirectBuffer=a||null,i.setIndex){const l=n.getIndex();if(l===null){const u=new de(t.index,1,!1);n.setIndex(u)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return c}get indirect(){return!!this._indirectBuffer}constructor(t,n={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(n=Object.assign({...zv,[ga]:!1},n),n.useSharedArrayBuffer&&!Ov())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,n[ga]||(tv(this,n),!t.boundingBox&&n.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new ge))),this.resolveTriangleIndex=n.indirect?i=>this._indirectBuffer[i]:i=>i}refit(t=null){return(this.indirect?wv:pv)(this,t)}traverse(t,n=0){const i=this._roots[n],r=new Uint32Array(i),o=new Uint16Array(i);a(0);function a(c,l=0){const u=c*2,h=o[u+15]===Ro;if(h){const f=r[c+6],d=o[u+14];t(l,h,new Float32Array(i,c*4,6),f,d)}else{const f=c+sr/4,d=r[c+6],p=r[c+7];t(l,h,new Float32Array(i,c*4,6),p)||(a(f,l+1),a(d,l+1))}}}raycast(t,n=vn,i=0,r=1/0){const o=this._roots,a=this.geometry,c=[],l=n.isMaterial,u=Array.isArray(n),h=a.groups,f=l?n.side:n,d=this.indirect?Rv:xv;for(let p=0,_=o.length;p<_;p++){const x=u?n[h[p].materialIndex].side:f,g=c.length;if(d(this,p,x,t,c,i,r),u){const m=h[p].materialIndex;for(let v=g,M=c.length;v<M;v++)c[v].face.materialIndex=m}}return c}raycastFirst(t,n=vn,i=0,r=1/0){const o=this._roots,a=this.geometry,c=n.isMaterial,l=Array.isArray(n);let u=null;const h=a.groups,f=c?n.side:n,d=this.indirect?Pv:vv;for(let p=0,_=o.length;p<_;p++){const x=l?n[h[p].materialIndex].side:f,g=d(this,p,x,t,i,r);g!=null&&(u==null||g.distance<u.distance)&&(u=g,l&&(g.face.materialIndex=h[p].materialIndex))}return u}intersectsGeometry(t,n){let i=!1;const r=this._roots,o=this.indirect?Lv:Mv;for(let a=0,c=r.length;a<c&&(i=o(this,a,t,n),!i);a++);return i}shapecast(t){const n=cn.getPrimitive(),i=this.indirect?_v:dv;let{boundsTraverseOrder:r,intersectsBounds:o,intersectsRange:a,intersectsTriangle:c}=t;if(a&&c){const f=a;a=(d,p,_,x,g)=>f(d,p,_,x,g)?!0:i(d,p,this,c,_,x,n)}else a||(c?a=(f,d,p,_)=>i(f,d,this,c,p,_,n):a=(f,d,p)=>p);let l=!1,u=0;const h=this._roots;for(let f=0,d=h.length;f<d;f++){const p=h[f];if(l=ov(this,f,o,a,r,u),l)break;u+=p.byteLength}return cn.releasePrimitive(n),l}bvhcast(t,n,i){let{intersectsRanges:r,intersectsTriangles:o}=i;const a=cn.getPrimitive(),c=this.geometry.index,l=this.geometry.attributes.position,u=this.indirect?_=>{const x=this.resolveTriangleIndex(_);ve(a,x*3,c,l)}:_=>{ve(a,_*3,c,l)},h=cn.getPrimitive(),f=t.geometry.index,d=t.geometry.attributes.position,p=t.indirect?_=>{const x=t.resolveTriangleIndex(_);ve(h,x*3,f,d)}:_=>{ve(h,_*3,f,d)};if(o){const _=(x,g,m,v,M,y,A,w)=>{for(let R=m,L=m+v;R<L;R++){p(R),h.a.applyMatrix4(n),h.b.applyMatrix4(n),h.c.applyMatrix4(n),h.needsUpdate=!0;for(let T=x,S=x+g;T<S;T++)if(u(T),a.needsUpdate=!0,o(a,h,T,R,M,y,A,w))return!0}return!1};if(r){const x=r;r=function(g,m,v,M,y,A,w,R){return x(g,m,v,M,y,A,w,R)?!0:_(g,m,v,M,y,A,w,R)}}else r=_}return Bv(this,t,n,r)}intersectsBox(t,n){return so.set(t.min,t.max,n),so.needsUpdate=!0,this.shapecast({intersectsBounds:i=>so.intersectsBox(i),intersectsTriangle:i=>so.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:n=>t.intersectsBox(n),intersectsTriangle:n=>n.intersectsSphere(t)})}closestPointToGeometry(t,n,i={},r={},o=0,a=1/0){return(this.indirect?Fv:Av)(this,t,n,i,r,o,a)}closestPointToPoint(t,n={},i=0,r=1/0){return av(this,t,n,i,r)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(i=>{fe(0,new Float32Array(i),th),t.union(th)}),t}}const Ti=new P,Ei=new P,bi=new P,eh=new Wt,ro=new P,Aa=new P,nh=new Wt,ih=new Wt,oo=new St,sh=new St;function Ks(s,t){if(!s&&!t)return;const n=s.count===t.count,i=s.normalized===t.normalized,r=s.array.constructor===t.array.constructor,o=s.itemSize===t.itemSize;if(!n||!i||!r||!o)throw new Error}function tr(s,t=null){const n=s.array.constructor,i=s.normalized,r=s.itemSize,o=t===null?s.count:t;return new de(new n(r*o),r,i)}function ff(s,t,n=0){if(s.isInterleavedBufferAttribute){const i=s.itemSize;for(let r=0,o=s.count;r<o;r++){const a=r+n;t.setX(a,s.getX(r)),i>=2&&t.setY(a,s.getY(r)),i>=3&&t.setZ(a,s.getZ(r)),i>=4&&t.setW(a,s.getW(r))}}else{const i=t.array,r=i.constructor,o=i.BYTES_PER_ELEMENT*s.itemSize*n;new r(i.buffer,o,s.array.length).set(s.array)}}function kv(s,t,n){const i=s.elements,r=t.elements;for(let o=0,a=r.length;o<a;o++)i[o]+=r[o]*n}function rh(s,t,n){const i=s.skeleton,r=s.geometry,o=i.bones,a=i.boneInverses;nh.fromBufferAttribute(r.attributes.skinIndex,t),ih.fromBufferAttribute(r.attributes.skinWeight,t),oo.elements.fill(0);for(let c=0;c<4;c++){const l=ih.getComponent(c);if(l!==0){const u=nh.getComponent(c);sh.multiplyMatrices(o[u].matrixWorld,a[u]),kv(oo,sh,l)}}return oo.multiply(s.bindMatrix).premultiply(s.bindMatrixInverse),n.transformDirection(oo),n}function wa(s,t,n,i,r){ro.set(0,0,0);for(let o=0,a=s.length;o<a;o++){const c=t[o],l=s[o];c!==0&&(Aa.fromBufferAttribute(l,i),n?ro.addScaledVector(Aa,c):ro.addScaledVector(Aa.sub(r),c))}r.add(ro)}function Hv(s,t={useGroups:!1,updateIndex:!1,skipAttributes:[]},n=new ke){const i=s[0].index!==null,{useGroups:r=!1,updateIndex:o=!1,skipAttributes:a=[]}=t,c=new Set(Object.keys(s[0].attributes)),l={};let u=0;n.clearGroups();for(let h=0;h<s.length;++h){const f=s[h];let d=0;if(i!==(f.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const p in f.attributes){if(!c.has(p))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.');l[p]===void 0&&(l[p]=[]),l[p].push(f.attributes[p]),d++}if(d!==c.size)throw new Error("StaticGeometryGenerator: Make sure all geometries have the same number of attributes.");if(r){let p;if(i)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else throw new Error("StaticGeometryGenerator: The geometry must have either an index or a position attribute");n.addGroup(u,p,h),u+=p}}if(i){let h=!1;if(!n.index){let f=0;for(let d=0;d<s.length;++d)f+=s[d].index.count;n.setIndex(new de(new Uint32Array(f),1,!1)),h=!0}if(o||h){const f=n.index;let d=0,p=0;for(let _=0;_<s.length;++_){const x=s[_],g=x.index;if(a[_]!==!0)for(let m=0;m<g.count;++m)f.setX(d,g.getX(m)+p),d++;p+=x.attributes.position.count}}}for(const h in l){const f=l[h];if(!(h in n.attributes)){let _=0;for(const x in f)_+=f[x].count;n.setAttribute(h,tr(l[h][0],_))}const d=n.attributes[h];let p=0;for(let _=0,x=f.length;_<x;_++){const g=f[_];a[_]!==!0&&ff(g,d,p),p+=g.count}}return n}function Vv(s,t){if(s===null||t===null)return s===t;if(s.length!==t.length)return!1;for(let n=0,i=s.length;n<i;n++)if(s[n]!==t[n])return!1;return!0}function Gv(s){const{index:t,attributes:n}=s;if(t)for(let i=0,r=t.count;i<r;i+=3){const o=t.getX(i),a=t.getX(i+2);t.setX(i,a),t.setX(i+2,o)}else for(const i in n){const r=n[i],o=r.itemSize;for(let a=0,c=r.count;a<c;a+=3)for(let l=0;l<o;l++){const u=r.getComponent(a,l),h=r.getComponent(a+2,l);r.setComponent(a,l,h),r.setComponent(a+2,l,u)}}return s}class Wv{constructor(t){this.matrixWorld=new St,this.geometryHash=null,this.boneMatrices=null,this.primitiveCount=-1,this.mesh=t,this.update()}update(){const t=this.mesh,n=t.geometry,i=t.skeleton,r=(n.index?n.index.count:n.attributes.position.count)/3;if(this.matrixWorld.copy(t.matrixWorld),this.geometryHash=n.attributes.position.version,this.primitiveCount=r,i){i.boneTexture||i.computeBoneTexture(),i.update();const o=i.boneMatrices;!this.boneMatrices||this.boneMatrices.length!==o.length?this.boneMatrices=o.slice():this.boneMatrices.set(o)}else this.boneMatrices=null}didChange(){const t=this.mesh,n=t.geometry,i=(n.index?n.index.count:n.attributes.position.count)/3;return!(this.matrixWorld.equals(t.matrixWorld)&&this.geometryHash===n.attributes.position.version&&Vv(t.skeleton&&t.skeleton.boneMatrices||null,this.boneMatrices)&&this.primitiveCount===i)}}class Xv{constructor(t){Array.isArray(t)||(t=[t]);const n=[];t.forEach(i=>{i.traverseVisible(r=>{r.isMesh&&n.push(r)})}),this.meshes=n,this.useGroups=!0,this.applyWorldTransforms=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Array(n.length).fill().map(()=>new ke),this._diffMap=new WeakMap}getMaterials(){const t=[];return this.meshes.forEach(n=>{Array.isArray(n.material)?t.push(...n.material):t.push(n.material)}),t}generate(t=new ke){let n=[];const{meshes:i,useGroups:r,_intermediateGeometry:o,_diffMap:a}=this;for(let c=0,l=i.length;c<l;c++){const u=i[c],h=o[c],f=a.get(u);!f||f.didChange(u)?(this._convertToStaticGeometry(u,h),n.push(!1),f?f.update():a.set(u,new Wv(u))):n.push(!0)}if(o.length===0){t.setIndex(null);const c=t.attributes;for(const l in c)t.deleteAttribute(l);for(const l in this.attributes)t.setAttribute(this.attributes[l],new de(new Float32Array(0),4,!1))}else Hv(o,{useGroups:r,skipAttributes:n},t);for(const c in t.attributes)t.attributes[c].needsUpdate=!0;return t}_convertToStaticGeometry(t,n=new ke){const i=t.geometry,r=this.applyWorldTransforms,o=this.attributes.includes("normal"),a=this.attributes.includes("tangent"),c=i.attributes,l=n.attributes;!n.index&&i.index&&(n.index=i.index.clone()),l.position||n.setAttribute("position",tr(c.position)),o&&!l.normal&&c.normal&&n.setAttribute("normal",tr(c.normal)),a&&!l.tangent&&c.tangent&&n.setAttribute("tangent",tr(c.tangent)),Ks(i.index,n.index),Ks(c.position,l.position),o&&Ks(c.normal,l.normal),a&&Ks(c.tangent,l.tangent);const u=c.position,h=o?c.normal:null,f=a?c.tangent:null,d=i.morphAttributes.position,p=i.morphAttributes.normal,_=i.morphAttributes.tangent,x=i.morphTargetsRelative,g=t.morphTargetInfluences,m=new Dt;m.getNormalMatrix(t.matrixWorld),i.index&&n.index.array.set(i.index.array);for(let v=0,M=c.position.count;v<M;v++)Ti.fromBufferAttribute(u,v),h&&Ei.fromBufferAttribute(h,v),f&&(eh.fromBufferAttribute(f,v),bi.fromBufferAttribute(f,v)),g&&(d&&wa(d,g,x,v,Ti),p&&wa(p,g,x,v,Ei),_&&wa(_,g,x,v,bi)),t.isSkinnedMesh&&(t.applyBoneTransform(v,Ti),h&&rh(t,v,Ei),f&&rh(t,v,bi)),r&&Ti.applyMatrix4(t.matrixWorld),l.position.setXYZ(v,Ti.x,Ti.y,Ti.z),h&&(r&&Ei.applyNormalMatrix(m),l.normal.setXYZ(v,Ei.x,Ei.y,Ei.z)),f&&(r&&bi.transformDirection(t.matrixWorld),l.tangent.setXYZW(v,bi.x,bi.y,bi.z,eh.w));for(const v in this.attributes){const M=this.attributes[v];M==="position"||M==="tangent"||M==="normal"||!(M in c)||(l[M]||n.setAttribute(M,tr(c[M])),Ks(c[M],l[M]),ff(c[M],l[M]))}return t.matrixWorld.determinant()<0&&Gv(n),n}}class qv{constructor(){le(this,"isLoadFinished",!1);le(this,"textureBoards",{});le(this,"textureScene",{});le(this,"galleryBoards",{});le(this,"raycastObjects",[]);this.core=new Ui,this.loader=this.core.loader,this._loadScenes()}async _loadScenes(){try{await this._loadSceneTexture(),await this._loadBoardsTexture(),await this._loadSceneAndCollisionDetection(),this._configureGallery(),this.isLoadFinished=!0,this.core.$emit(ef)}catch{console.log(e)}}_loadSceneAndCollisionDetection(){return new Promise(t=>{this.loader.gltfLoader.load(Ey,n=>{this.collisionScene=n.scene,this.collisionScene.updateMatrixWorld(!0);const i=new bn({map:this.textureScene});this.collisionScene.traverse(a=>{/gallery.*_board/.test(a.name)&&Fy(a)?(this.galleryBoards[a.name]=a,this.raycastObjects.push(a)):a.material=i});const r=new Xv(this.collisionScene);r.attributes=["position"];const o=r.generate();o.boundsTree=new sl(o,{lazyGeneration:!1}),this.collider=new Oe(o),this.core.scene.add(this.collisionScene),t()},n=>{})})}async _loadBoardsTexture(){for(let t=0;t<Gu.length;t++)this.textureBoards[t+1]=await this.loader.textureLoader.loadAsync(Gu[t]);for(const t in this.textureBoards){const n=this.textureBoards[t];n.colorSpace=ye;const i=n.image.width/n.image.height;let r=1,o=1;i>1?r=1/i:o=i,n.offset.set(.5-r/2,.5-o/2),n.repeat.set(r,o),n.needsUpdate=!0}return Promise.resolve()}async _loadSceneTexture(){return this.textureScene=await this.loader.textureLoader.load(by),this.textureScene.flipY=!1,this.textureScene.colorSpace=ye,Promise.resolve()}_configureGallery(){for(const t in this.textureBoards){const n=this.galleryBoards[`gallery${t}_board`],i=new bn({map:this.textureBoards[t]});n.material=i,n.userData={title:Cy[t].title}}}}class Yv{constructor(){this.core=new Ui,this.clickRaycaster=new au,this.clickRaycaster.far=18,this.tooltipRaycaster=new au,this.tooltipRaycaster.far=15,this.hoverPoint=new Mt(0,0),this.mousePoint=new Mt}updateTooltipRayCast(t){if(t.length){this.tooltipRaycaster.setFromCamera(this.hoverPoint,this.core.camera);const n=this.tooltipRaycaster.intersectObjects(t);n.length?this.core.$emit(sf,{msg:n[0].object.userData.title}):this.core.$emit(rf)}}bindClickRayCastObj(t){let n=0,i=0;document.body.addEventListener("pointerdown",r=>{n=r.screenX,i=r.screenY}),document.body.addEventListener("pointerup",r=>{const o=Math.abs(r.screenX-n),a=Math.abs(r.screenY-i);if(o<=1&&a<=1&&r.target instanceof HTMLCanvasElement){this.mousePoint.x=r.clientX/window.innerWidth*2-1,this.mousePoint.y=-(r.clientY/window.innerHeight)*2+1,this.clickRaycaster.setFromCamera(this.mousePoint,this.core.camera);const c=this.clickRaycaster.intersectObjects(t);c.length&&this.core.$emit(Ry,c[0].object)}})}}class jv{constructor(){this.core=new Ui,this.core.$on(ef,this._onLoadModelFinish.bind(this)),this.core.$on(sf,this._onShowTooltip.bind(this)),this.core.$on(rf,this._onHideTooltip.bind(this)),this.environment=new qv,this.rayCasterControls=new Yv,this.character=new Ny,this.boxHelperWrap=new Iy(this.core)}update(t){this.environment.collider&&this.environment.isLoadFinished&&(this.character.update(t,this.environment.collider),this.rayCasterControls.updateTooltipRayCast(this.environment.raycastObjects))}_onClickRayCast(t){console.log(t)}_onShowTooltip([{msg:t}]){document.querySelector(".preview-tooltip").classList.remove("hide"),document.querySelector(".preview-tooltip").innerText=t}_onHideTooltip(){document.querySelector(".preview-tooltip").classList.add("hide")}async _onLoadModelFinish(){document.querySelector(".loading").remove()}_onLoadProgress([{url:t,loaded:n,total:i}]){const r=(n/i*100).toFixed(2);let o;/.*\.(blob|glb)$/i.test(t)&&(o=`"加载场景模型"：${r}%`),/.*\.(jpg|png|jpeg)$/i.test(t)&&(o="加载图片素材中..."),document.querySelector(".loading").querySelector(".progress").textContent=o}}const go=(s,t)=>{const n=t.x-s.x,i=t.y-s.y;return Math.sqrt(n*n+i*i)},Kv=(s,t)=>{const n=t.x-s.x,i=t.y-s.y;return $v(Math.atan2(i,n))},Zv=(s,t,n)=>{const i={x:0,y:0};return n=Lc(n),i.x=s.x-t*Math.cos(n),i.y=s.y-t*Math.sin(n),i},Lc=s=>s*(Math.PI/180),$v=s=>s*(180/Math.PI),Jv=s=>isNaN(s.buttons)?s.pressure!==0:s.buttons!==0,Ra=new Map,oh=s=>{Ra.has(s)&&clearTimeout(Ra.get(s)),Ra.set(s,setTimeout(s,100))},To=(s,t,n)=>{const i=t.split(/[ ,]+/g);let r;for(let o=0;o<i.length;o+=1)r=i[o],s.addEventListener?s.addEventListener(r,n,!1):s.attachEvent&&s.attachEvent(r,n)},ah=(s,t,n)=>{const i=t.split(/[ ,]+/g);let r;for(let o=0;o<i.length;o+=1)r=i[o],s.removeEventListener?s.removeEventListener(r,n):s.detachEvent&&s.detachEvent(r,n)},df=s=>(s.preventDefault(),s.type.match(/^touch/)?s.changedTouches:s),ch=()=>{const s=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:s,y:t}},lh=(s,t)=>{t.top||t.right||t.bottom||t.left?(s.style.top=t.top,s.style.right=t.right,s.style.bottom=t.bottom,s.style.left=t.left):(s.style.left=t.x+"px",s.style.top=t.y+"px")},rl=(s,t,n)=>{const i=pf(s);for(let r in i)if(i.hasOwnProperty(r))if(typeof t=="string")i[r]=t+" "+n;else{let o="";for(let a=0,c=t.length;a<c;a+=1)o+=t[a]+" "+n+", ";i[r]=o.slice(0,-2)}return i},Qv=(s,t)=>{const n=pf(s);for(let i in n)n.hasOwnProperty(i)&&(n[i]=t);return n},pf=s=>{const t={};return t[s]="",["webkit","Moz","o"].forEach(function(i){t[i+s.charAt(0).toUpperCase()+s.slice(1)]=""}),t},Ca=(s,t)=>{for(let n in t)t.hasOwnProperty(n)&&(s[n]=t[n]);return s},tM=(s,t)=>{const n={};for(let i in s)s.hasOwnProperty(i)&&t.hasOwnProperty(i)?n[i]=t[i]:s.hasOwnProperty(i)&&(n[i]=s[i]);return n},Dc=(s,t)=>{if(s.length)for(let n=0,i=s.length;n<i;n+=1)t(s[n]);else t(s)},eM=(s,t,n)=>({x:Math.min(Math.max(s.x,t.x-n),t.x+n),y:Math.min(Math.max(s.y,t.y-n),t.y+n)});var nM="ontouchstart"in window,iM=!!window.PointerEvent,sM=!!window.MSPointerEvent,Zs={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},cs,ur={};iM?cs=Zs.pointer:sM?cs=Zs.MSPointer:nM?(cs=Zs.touch,ur=Zs.mouse):cs=Zs.mouse;function Yn(){}Yn.prototype.on=function(s,t){var n=this,i=s.split(/[ ,]+/g),r;n._handlers_=n._handlers_||{};for(var o=0;o<i.length;o+=1)r=i[o],n._handlers_[r]=n._handlers_[r]||[],n._handlers_[r].push(t);return n};Yn.prototype.off=function(s,t){var n=this;return n._handlers_=n._handlers_||{},s===void 0?n._handlers_={}:t===void 0?n._handlers_[s]=null:n._handlers_[s]&&n._handlers_[s].indexOf(t)>=0&&n._handlers_[s].splice(n._handlers_[s].indexOf(t),1),n};Yn.prototype.trigger=function(s,t){var n=this,i=s.split(/[ ,]+/g),r;n._handlers_=n._handlers_||{};for(var o=0;o<i.length;o+=1)r=i[o],n._handlers_[r]&&n._handlers_[r].length&&n._handlers_[r].forEach(function(a){a.call(n,{type:r,target:n},t)})};Yn.prototype.config=function(s){var t=this;t.options=t.defaults||{},s&&(t.options=tM(t.options,s))};Yn.prototype.bindEvt=function(s,t){var n=this;return n._domHandlers_=n._domHandlers_||{},n._domHandlers_[t]=function(){typeof n["on"+t]=="function"?n["on"+t].apply(n,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},To(s,cs[t],n._domHandlers_[t]),ur[t]&&To(s,ur[t],n._domHandlers_[t]),n};Yn.prototype.unbindEvt=function(s,t){var n=this;return n._domHandlers_=n._domHandlers_||{},ah(s,cs[t],n._domHandlers_[t]),ur[t]&&ah(s,ur[t],n._domHandlers_[t]),delete n._domHandlers_[t],this};function Ee(s,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=s,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Ee.id,Ee.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Ee.prototype=new Yn;Ee.constructor=Ee;Ee.id=0;Ee.prototype.buildEl=function(s){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Ee.prototype.stylize=function(){if(this.options.dataOnly)return this;var s=this.options.fadeTime+"ms",t=Qv("borderRadius","50%"),n=rl("transition","opacity",s),i={};return i.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},i.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},i.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},Ca(i.el,n),this.options.shape==="circle"&&Ca(i.back,t),Ca(i.front,t),this.applyStyles(i),this};Ee.prototype.applyStyles=function(s){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var n in s[t])this.ui[t].style[n]=s[t][n];return this};Ee.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Ee.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Ee.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Ee.prototype.show=function(s){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof s=="function"&&s.call(this)},t.options.fadeTime)),t};Ee.prototype.hide=function(s){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var n=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=n,typeof s=="function"&&s.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const n=t.options.restJoystick,i={};i.x=n===!0||n.x!==!1?0:t.instance.frontPosition.x,i.y=n===!0||n.y!==!1?0:t.instance.frontPosition.y,t.setPosition(s,i)}return t};Ee.prototype.setPosition=function(s,t){var n=this;n.frontPosition={x:t.x,y:t.y};var i=n.options.fadeTime+"ms",r={};r.front=rl("transition",["transform"],i);var o={front:{}};o.front={transform:"translate("+n.frontPosition.x+"px,"+n.frontPosition.y+"px)"},n.applyStyles(r),n.applyStyles(o),n.restTimeout=setTimeout(function(){typeof s=="function"&&s.call(n),n.restCallback()},n.options.fadeTime)};Ee.prototype.restCallback=function(){var s=this,t={};t.front=rl("transition","none",""),s.applyStyles(t),s.trigger("rested",s.instance)};Ee.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Ee.prototype.computeDirection=function(s){var t=s.angle.radian,n=Math.PI/4,i=Math.PI/2,r,o,a;if(t>n&&t<n*3&&!s.lockX?r="up":t>-n&&t<=n&&!s.lockY?r="left":t>-n*3&&t<=-n&&!s.lockX?r="down":s.lockY||(r="right"),s.lockY||(t>-i&&t<i?o="left":o="right"),s.lockX||(t>0?a="up":a="down"),s.force>this.options.threshold){var c={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(c[l]=this.direction[l]);var u={};this.direction={x:o,y:a,angle:r},s.direction=this.direction;for(l in c)c[l]===this.direction[l]&&(u[l]=!0);if(u.x&&u.y&&u.angle)return s;(!u.x||!u.y)&&this.trigger("plain",s),u.x||this.trigger("plain:"+o,s),u.y||this.trigger("plain:"+a,s),u.angle||this.trigger("dir dir:"+r,s)}else this.resetDirection();return s};function me(s,t){var n=this;n.nipples=[],n.idles=[],n.actives=[],n.ids=[],n.pressureIntervals={},n.manager=s,n.id=me.id,me.id+=1,n.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},n.config(t),(n.options.mode==="static"||n.options.mode==="semi")&&(n.options.multitouch=!1),n.options.multitouch||(n.options.maxNumberOfNipples=1);const i=getComputedStyle(n.options.zone.parentElement);return i&&i.display==="flex"&&(n.parentIsFlex=!0),n.updateBox(),n.prepareNipples(),n.bindings(),n.begin(),n.nipples}me.prototype=new Yn;me.constructor=me;me.id=0;me.prototype.prepareNipples=function(){var s=this,t=s.nipples;t.on=s.on.bind(s),t.off=s.off.bind(s),t.options=s.options,t.destroy=s.destroy.bind(s),t.ids=s.ids,t.id=s.id,t.processOnMove=s.processOnMove.bind(s),t.processOnEnd=s.processOnEnd.bind(s),t.get=function(n){if(n===void 0)return t[0];for(var i=0,r=t.length;i<r;i+=1)if(t[i].identifier===n)return t[i];return!1}};me.prototype.bindings=function(){var s=this;s.bindEvt(s.options.zone,"start"),s.options.zone.style.touchAction="none",s.options.zone.style.msTouchAction="none"};me.prototype.begin=function(){var s=this,t=s.options;if(t.mode==="static"){var n=s.createNipple(t.position,s.manager.getIdentifier());n.add(),s.idles.push(n)}};me.prototype.createNipple=function(s,t){var n=this,i=n.manager.scroll,r={},o=n.options,a={x:n.parentIsFlex?i.x:i.x+n.box.left,y:n.parentIsFlex?i.y:i.y+n.box.top};if(s.x&&s.y)r={x:s.x-a.x,y:s.y-a.y};else if(s.top||s.right||s.bottom||s.left){var c=document.createElement("DIV");c.style.display="hidden",c.style.top=s.top,c.style.right=s.right,c.style.bottom=s.bottom,c.style.left=s.left,c.style.position="absolute",o.zone.appendChild(c);var l=c.getBoundingClientRect();o.zone.removeChild(c),r=s,s={x:l.left+i.x,y:l.top+i.y}}var u=new Ee(n,{color:o.color,size:o.size,threshold:o.threshold,fadeTime:o.fadeTime,dataOnly:o.dataOnly,restJoystick:o.restJoystick,restOpacity:o.restOpacity,mode:o.mode,identifier:t,position:s,zone:o.zone,frontPosition:{x:0,y:0},shape:o.shape});return o.dataOnly||(lh(u.ui.el,r),lh(u.ui.front,u.frontPosition)),n.nipples.push(u),n.trigger("added "+u.identifier+":added",u),n.manager.trigger("added "+u.identifier+":added",u),n.bindNipple(u),u};me.prototype.updateBox=function(){var s=this;s.box=s.options.zone.getBoundingClientRect()};me.prototype.bindNipple=function(s){var t=this,n,i=function(r,o){n=r.type+" "+o.id+":"+r.type,t.trigger(n,o)};s.on("destroyed",t.onDestroyed.bind(t)),s.on("shown hidden rested dir plain",i),s.on("dir:up dir:right dir:down dir:left",i),s.on("plain:up plain:right plain:down plain:left",i)};me.prototype.pressureFn=function(s,t,n){var i=this,r=0;clearInterval(i.pressureIntervals[n]),i.pressureIntervals[n]=setInterval((function(){var o=s.force||s.pressure||s.webkitForce||0;o!==r&&(t.trigger("pressure",o),i.trigger("pressure "+t.identifier+":pressure",o),r=o)}).bind(i),100)};me.prototype.onstart=function(s){var t=this,n=t.options,i=s;s=df(s),t.updateBox();var r=function(o){t.actives.length<n.maxNumberOfNipples?t.processOnStart(o):i.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(a){if(Object.values(i.touches).findIndex(function(l){return l.identifier===a})<0){var c=[s[0]];c.identifier=a,t.processOnEnd(c)}}),t.actives.length<n.maxNumberOfNipples&&t.processOnStart(o))};return Dc(s,r),t.manager.bindDocument(),!1};me.prototype.processOnStart=function(s){var t=this,n=t.options,i,r=t.manager.getIdentifier(s),o=s.force||s.pressure||s.webkitForce||0,a={x:s.pageX,y:s.pageY},c=t.getOrCreate(r,a);c.identifier!==r&&t.manager.removeIdentifier(c.identifier),c.identifier=r;var l=function(h){h.trigger("start",h),t.trigger("start "+h.id+":start",h),h.show(),o>0&&t.pressureFn(s,h,h.identifier),t.processOnMove(s)};if((i=t.idles.indexOf(c))>=0&&t.idles.splice(i,1),t.actives.push(c),t.ids.push(c.identifier),n.mode!=="semi")l(c);else{var u=go(a,c.position);if(u<=n.catchDistance)l(c);else{c.destroy(),t.processOnStart(s);return}}return c};me.prototype.getOrCreate=function(s,t){var n=this,i=n.options,r;return/(semi|static)/.test(i.mode)?(r=n.idles[0],r?(n.idles.splice(0,1),r):i.mode==="semi"?n.createNipple(t,s):(console.warn("Coudln't find the needed nipple."),!1)):(r=n.createNipple(t,s),r)};me.prototype.processOnMove=function(s){var t=this,n=t.options,i=t.manager.getIdentifier(s),r=t.nipples.get(i),o=t.manager.scroll;if(!Jv(s)){this.processOnEnd(s);return}if(!r){console.error("Found zombie joystick with ID "+i),t.manager.removeIdentifier(i);return}if(n.dynamicPage){var a=r.el.getBoundingClientRect();r.position={x:o.x+a.left,y:o.y+a.top}}r.identifier=i;var c=r.options.size/2,l={x:s.pageX,y:s.pageY};n.lockX&&(l.y=r.position.y),n.lockY&&(l.x=r.position.x);var u=go(l,r.position),h=Kv(l,r.position),f=Lc(h),d=u/c,p={distance:u,position:l},_,x;if(r.options.shape==="circle"?(_=Math.min(u,c),x=Zv(r.position,_,h)):(x=eM(l,r.position,c),_=go(x,r.position)),n.follow){if(u>c){let M=l.x-x.x,y=l.y-x.y;r.position.x+=M,r.position.y+=y,r.el.style.top=r.position.y-(t.box.top+o.y)+"px",r.el.style.left=r.position.x-(t.box.left+o.x)+"px",u=go(l,r.position)}}else l=x,u=_;var g=l.x-r.position.x,m=l.y-r.position.y;r.frontPosition={x:g,y:m},n.dataOnly||(r.ui.front.style.transform="translate("+g+"px,"+m+"px)");var v={identifier:r.identifier,position:l,force:d,pressure:s.force||s.pressure||s.webkitForce||0,distance:u,angle:{radian:f,degree:h},vector:{x:g/c,y:-m/c},raw:p,instance:r,lockX:n.lockX,lockY:n.lockY};v=r.computeDirection(v),v.angle={radian:Lc(180-h),degree:180-h},r.trigger("move",v),t.trigger("move "+r.id+":move",v)};me.prototype.processOnEnd=function(s){var t=this,n=t.options,i=t.manager.getIdentifier(s),r=t.nipples.get(i),o=t.manager.removeIdentifier(r.identifier);r&&(n.dataOnly||r.hide(function(){n.mode==="dynamic"&&(r.trigger("removed",r),t.trigger("removed "+r.id+":removed",r),t.manager.trigger("removed "+r.id+":removed",r),r.destroy())}),clearInterval(t.pressureIntervals[r.identifier]),r.resetDirection(),r.trigger("end",r),t.trigger("end "+r.id+":end",r),t.ids.indexOf(r.identifier)>=0&&t.ids.splice(t.ids.indexOf(r.identifier),1),t.actives.indexOf(r)>=0&&t.actives.splice(t.actives.indexOf(r),1),/(semi|static)/.test(n.mode)?t.idles.push(r):t.nipples.indexOf(r)>=0&&t.nipples.splice(t.nipples.indexOf(r),1),t.manager.unbindDocument(),/(semi|static)/.test(n.mode)&&(t.manager.ids[o.id]=o.identifier))};me.prototype.onDestroyed=function(s,t){var n=this;n.nipples.indexOf(t)>=0&&n.nipples.splice(n.nipples.indexOf(t),1),n.actives.indexOf(t)>=0&&n.actives.splice(n.actives.indexOf(t),1),n.idles.indexOf(t)>=0&&n.idles.splice(n.idles.indexOf(t),1),n.ids.indexOf(t.identifier)>=0&&n.ids.splice(n.ids.indexOf(t.identifier),1),n.manager.removeIdentifier(t.identifier),n.manager.unbindDocument()};me.prototype.destroy=function(){var s=this;s.unbindEvt(s.options.zone,"start"),s.nipples.forEach(function(n){n.destroy()});for(var t in s.pressureIntervals)s.pressureIntervals.hasOwnProperty(t)&&clearInterval(s.pressureIntervals[t]);s.trigger("destroyed",s.nipples),s.manager.unbindDocument(),s.off()};function we(s){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=ch(),t.config(s),t.prepareCollections();var n=function(){var r;t.collections.forEach(function(o){o.forEach(function(a){r=a.el.getBoundingClientRect(),a.position={x:t.scroll.x+r.left,y:t.scroll.y+r.top}})})};To(window,"resize",function(){oh(n)});var i=function(){t.scroll=ch()};return To(window,"scroll",function(){oh(i)}),t.collections}we.prototype=new Yn;we.constructor=we;we.prototype.prepareCollections=function(){var s=this;s.collections.create=s.create.bind(s),s.collections.on=s.on.bind(s),s.collections.off=s.off.bind(s),s.collections.destroy=s.destroy.bind(s),s.collections.get=function(t){var n;return s.collections.every(function(i){return n=i.get(t),!n}),n}};we.prototype.create=function(s){return this.createCollection(s)};we.prototype.createCollection=function(s){var t=this,n=new me(t,s);return t.bindCollection(n),t.collections.push(n),n};we.prototype.bindCollection=function(s){var t=this,n,i=function(r,o){n=r.type+" "+o.id+":"+r.type,t.trigger(n,o)};s.on("destroyed",t.onDestroyed.bind(t)),s.on("shown hidden rested dir plain",i),s.on("dir:up dir:right dir:down dir:left",i),s.on("plain:up plain:right plain:down plain:left",i)};we.prototype.bindDocument=function(){var s=this;s.binded||(s.bindEvt(document,"move").bindEvt(document,"end"),s.binded=!0)};we.prototype.unbindDocument=function(s){var t=this;(!Object.keys(t.ids).length||s===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)};we.prototype.getIdentifier=function(s){var t;return s?(t=s.identifier===void 0?s.pointerId:s.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]};we.prototype.removeIdentifier=function(s){var t={};for(var n in this.ids)if(this.ids[n]===s){t.id=n,t.identifier=this.ids[n],delete this.ids[n];break}return t};we.prototype.onmove=function(s){var t=this;return t.onAny("move",s),!1};we.prototype.onend=function(s){var t=this;return t.onAny("end",s),!1};we.prototype.oncancel=function(s){var t=this;return t.onAny("end",s),!1};we.prototype.onAny=function(s,t){var n=this,i,r="processOn"+s.charAt(0).toUpperCase()+s.slice(1);t=df(t);var o=function(c,l,u){u.ids.indexOf(l)>=0&&(u[r](c),c._found_=!0)},a=function(c){i=n.getIdentifier(c),Dc(n.collections,o.bind(null,c,i)),c._found_||n.removeIdentifier(i)};return Dc(t,a),!1};we.prototype.destroy=function(){var s=this;s.unbindDocument(!0),s.ids={},s.index=0,s.collections.forEach(function(t){t.destroy()}),s.off()};we.prototype.onDestroyed=function(s,t){var n=this;if(n.collections.indexOf(t)<0)return!1;n.collections.splice(n.collections.indexOf(t),1)};const uh=new we,rM={create:function(s){return uh.create(s)},factory:uh};class oM{constructor(){le(this,"keyStatus",{KeyW:!1,KeyS:!1,KeyA:!1,KeyD:!1,Space:!1});le(this,"keySets",["KeyW","KeyS","KeyA","KeyD","Space"]);le(this,"mode","pc");le(this,"joystickElement",document.getElementById("joystick"));this.core=new Ui,this._bindEvent()}_bindEvent(){var t,n;"ontouchstart"in window?(this.mode="mobile",this._createJoystick(),window.addEventListener("dblclick",()=>{document.documentElement.requestFullscreen()}),(t=this.joystickManager)==null||t.on("move",(i,r)=>{this.moveDegree=r.angle.degree}),(n=this.joystickManager)==null||n.on("end",()=>{this.moveDegree=void 0})):(document.addEventListener("keydown",this._onKeyDown.bind(this)),document.addEventListener("keyup",this._onKeyUp.bind(this)))}_createJoystick(){this.joystickElement.style.display="block",this.joystickManager=rM.create({zone:this.joystickElement,color:"black",mode:"static",position:{left:"50%",top:"50%"}})}_onKeyDown(t){this.keySets.includes(t.code)&&(this.keyStatus[t.code]=!0,this.core.$emit(nf,t.code))}_onKeyUp(t){this.keySets.includes(t.code)&&(this.keyStatus[t.code]=!1),this.core.$emit(wy,t.code)}}let Pa=null;class Ui extends Dy{constructor(t){if(super(),Pa)return Pa;Pa=this,this.canvas=t,this._initScene(),this._initCamera(),this._initControls(),this._initRenderer(),this._initResponsiveResize(),this.clock=new Up,this.loader=new Py,this.world=new jv,this.controlManager=new oM}render(){this.renderer.setAnimationLoop(()=>{const t=this.clock.getDelta();this.world.update(t),this.renderer.render(this.scene,this.camera),this.controls.update()})}_initScene(){this.scene=new Qd,this.scene.background=new Ct(0)}_initCamera(){this.camera=new Fe(55,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,0,3)}_initControls(){this.controls=new P0(this.camera,this.canvas),this.controls.enableDamping=!0}_initRenderer(){this.renderer=new R0({canvas:this.canvas,antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.outputColorSpace=ye,this.renderer.toneMapping=dh,this.renderer.setSize(window.innerWidth,window.innerHeight)}_initResponsiveResize(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))})}}const aM=new Ui(document.querySelector("canvas.webgl"));aM.render();
