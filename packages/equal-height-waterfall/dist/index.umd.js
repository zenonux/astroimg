(function(n,i){typeof exports=="object"&&typeof module<"u"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(n=typeof globalThis<"u"?globalThis:n||self,i(n.EqualHeightWaterfall={}))})(this,function(n){"use strict";var _=Object.defineProperty;var c=(n,i,d)=>i in n?_(n,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[i]=d;var h=(n,i,d)=>(c(n,typeof i!="symbol"?i+"":i,d),d);class i{constructor(t){h(this,"_items",[]);h(this,"_breakLineAspectRatioSum");h(this,"_containerWidth");h(this,"_itemFallbackAspectRatio");h(this,"_itemMaxWidthPercent");h(this,"_itemMinWidthPercent");h(this,"_itemMaxHeight");h(this,"_gutter");h(this,"_lastLine",[]);h(this,"_lastLineTop",0);this._breakLineAspectRatioSum=t.breakLineAspectRatioSum||2,this._containerWidth=t.containerWidth,this._gutter=t.gutter||4,this._itemFallbackAspectRatio=t.itemFallbackAspectRatio||1,this._itemMaxWidthPercent=t.itemMaxWidthPercent||2/3,this._itemMinWidthPercent=t.itemMinWidthPercent||1/4,this._itemMaxHeight=t.itemMaxHeight||300}_getLineRenderAspectRatioTotal(t){return t.length?t.map(e=>this._getRenderItemAspectRatio(e)).reduce(function(e,a){return e+a},0):0}_getItemAspectRatio(t){return t.height?t.width/t.height:this._itemFallbackAspectRatio}_getRenderItemAspectRatio(t){return t.renderWidth/t.renderHeight}_resizeItem(t,e){if(!e.length){const r=this._getRenderWidthContainGutter(t);let s=r/this._getItemAspectRatio(t)-this._gutter;s>this._itemMaxHeight&&(s=this._itemMaxHeight);const o=!this._lastLineTop;return this._lastLineTop=o?s:this._lastLineTop+s+this._gutter,{...t,renderLeft:0,renderTop:this._lastLineTop-s,renderWidth:r,renderHeight:s}}else{let r=this._getRenderWidthContainGutter(t);const s=this._getLineUsedWidth(e),o=this._containerWidth-s;return o<r&&(r=o),o-r<this._itemMinWidthPercent*this._containerWidth&&(r=o),{...t,renderHeight:e[0].renderHeight,renderWidth:r-this._gutter,renderLeft:s+this._gutter,renderTop:e[0].renderTop}}}_getRenderWidthContainGutter(t){const e=this._getItemAspectRatio(t)/this._breakLineAspectRatioSum,a=e<this._itemMinWidthPercent?this._itemMinWidthPercent:e>this._itemMaxWidthPercent?this._itemMaxWidthPercent:e;return this._containerWidth*a}_getLineUsedWidth(t){const e=t[t.length-1];return e?e.renderLeft+e.renderWidth:0}_getRandomBetween(t,e){const a=Math.random(),r=t+a*(e-t+1);return Math.floor(r)}add(t){for(let e=0;e<t.length;e++){const a=t[e];this._lastLine.length&&(this._getLineRenderAspectRatioTotal(this._lastLine)+this._getItemAspectRatio(a)>this._breakLineAspectRatioSum||this._getLineUsedWidth(this._lastLine)>=this._containerWidth)&&(this._lastLine=[]);const s=this._resizeItem(a,this._lastLine);this._lastLine.push(s),this._items.push(s)}return{items:this._items,renderTotalHeight:this._items[this._items.length-1].renderTop+this._items[this._items.length-1].renderHeight}}clear(){this._items=[],this._lastLine=[],this._lastLineTop=0}}n.EqualHeightWaterfall=i,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
