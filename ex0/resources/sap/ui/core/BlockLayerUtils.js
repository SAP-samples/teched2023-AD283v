/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/events/jquery/EventTriggerHook","sap/base/Log","sap/ui/core/Lib","sap/ui/thirdparty/jquery"],function(e,t,i,jQuery){"use strict";var a={},r=["focusin","focusout","keydown","keypress","keyup","mousedown","touchstart","touchmove","mouseup","touchend","click"],n=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr|tr)$/i;a.block=function(e,i,a){var r,l,u,c;if(e){r=e.getDomRef(a);if(!r){r=e.getDomRef()}if(!r){t.warning("BlockLayer could not be rendered. The outer Control instance is not valid anymore or was not rendered yet.");return}l=r.tagName;if(n.test(l)){t.warning("BusyIndicator cannot be placed in elements with tag '"+l+"'.");return}c=o(r,i);u={$parent:jQuery(r),$blockLayer:jQuery(c),control:e};if(u.$parent.css("position")=="static"){if(r.style&&r.style.position==="static"){u.originalPosition="static"}u.$parent.css("position","relative");u.positionChanged=true}s.call(u,true)}else{t.warning("BlockLayer couldn't be created. No Control instance given.")}return u};a.unblock=function(e){if(e){if(e.originalPosition){e.$parent.css("position",e.originalPosition)}else if(e.positionChanged){e.$parent.css("position","")}s.call(e,false);if(e.control&&e.$blockLayer[0]&&e.$blockLayer[0].contains(document.activeElement)){e.control.focus()}e.$blockLayer.remove()}};a.addAriaAttributes=function(e){var t=i.getResourceBundleFor("sap.ui.core");e.setAttribute("role","progressbar");e.setAttribute("aria-valuemin","0");e.setAttribute("aria-valuemax","100");e.setAttribute("aria-valuetext",t.getText("BUSY_VALUE_TEXT"));e.setAttribute("alt","");e.setAttribute("tabindex","0");e.setAttribute("title",t.getText("BUSY_TEXT"))};a.toggleAnimationStyle=function(e,t){var i=jQuery(e.$blockLayer.get(0));if(t){i.removeClass("sapUiHiddenBusyIndicatorAnimation");i.removeClass("sapUiBlockLayerOnly")}else{i.addClass("sapUiBlockLayerOnly");i.addClass("sapUiHiddenBusyIndicatorAnimation")}};function o(e,t){var i=document.createElement("div");i.id=t;i.className="sapUiBlockLayer ";a.addAriaAttributes(i);e.appendChild(i);return i}function s(i){if(i){var a=this.$parent.get(0);if(a){this.fnRedirectFocus=o.bind(this);this.oTabbableBefore=s(this.fnRedirectFocus);this.oTabbableAfter=s(this.fnRedirectFocus);a.parentNode.insertBefore(this.oTabbableBefore,a);a.parentNode.insertBefore(this.oTabbableAfter,a.nextSibling);this._fnSuppressDefaultAndStopPropagationHandler=n.bind(this);this._aSuppressHandler=u.call(this,this._fnSuppressDefaultAndStopPropagationHandler)}else{t.warning("fnHandleInteraction called with bEnabled true, but no DOMRef exists!")}}else{if(this.oTabbableBefore){l(this.oTabbableBefore,this.fnRedirectFocus);delete this.oTabbableBefore}if(this.oTabbableAfter){l(this.oTabbableAfter,this.fnRedirectFocus);delete this.oTabbableAfter}delete this.fnRedirectFocus;c.call(this,this._fnSuppressDefaultAndStopPropagationHandler)}function n(e){var i=e.target===this.$blockLayer.get(0),a;if(i&&e.type==="keydown"&&e.keyCode===9){t.debug("Local Busy Indicator Event keydown handled: "+e.type);a=e.shiftKey?this.oTabbableBefore:this.oTabbableAfter;a.setAttribute("tabindex",-1);this.bIgnoreFocus=true;a.focus();this.bIgnoreFocus=false;a.setAttribute("tabindex",0);e.stopImmediatePropagation()}else if(i&&(e.type==="mousedown"||e.type==="touchstart")){t.debug("Local Busy Indicator click handled on busy area: "+e.target.id);e.stopImmediatePropagation()}else{t.debug("Local Busy Indicator Event Suppressed: "+e.type);e.preventDefault();e.stopImmediatePropagation()}}function o(){if(!this.bIgnoreFocus){this.$blockLayer.get(0).focus()}}function s(e){var t=document.createElement("span");t.setAttribute("tabindex",0);t.classList.add("sapUiBlockLayerTabbable");t.addEventListener("focusin",e);return t}function l(e,t){if(e.parentNode){e.parentNode.removeChild(e)}e.removeEventListener("focusin",t)}function u(t){var i=[],a=this.$parent.get(0),n=this.$blockLayer.get(0);for(var o=0;o<r.length;o++){a.addEventListener(r[o],t,{capture:true,passive:false});i.push(e.suppress(r[o],a,n))}this.$blockLayer.on("keydown",t);return i}function c(t){var i,a=this.$parent.get(0),n=this.$blockLayer.get(0);if(a){for(i=0;i<r.length;i++){a.removeEventListener(r[i],t,{capture:true,passive:false})}}if(this._aSuppressHandler){for(i=0;i<this._aSuppressHandler.length;i++){e.release(this._aSuppressHandler[i])}}if(n){this.$blockLayer.off("keydown",t)}}}return a});
//# sourceMappingURL=BlockLayerUtils.js.map