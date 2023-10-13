/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./Binding","./Filter","./Sorter"],function(t,e,i){"use strict";var n=t.extend("sap.ui.model.TreeBinding",{constructor:function(n,o,s,l,u,a){t.call(this,n,o,s,u);this.aFilters=[];this.aSorters=r(a,i);this.aApplicationFilters=r(l,e);this.oCombinedFilter=null;this.bDisplayRootNode=u&&u.displayRootNode===true},metadata:{abstract:true,publicMethods:["getRootContexts","getNodeContexts","hasChildren","filter"]}});function r(t,e){if(Array.isArray(t)){return t}return t instanceof e?[t]:[]}n.prototype.getChildCount=function(t){if(!t){return this.getRootContexts().length}return this.getNodeContexts(t).length};n.prototype.getCount=function(){return undefined};n.prototype.attachFilter=function(t,e){this.attachEvent("_filter",t,e)};n.prototype.detachFilter=function(t,e){this.detachEvent("_filter",t,e)};n.prototype._fireFilter=function(t){this.fireEvent("_filter",t)};n.prototype.getFilterInfo=function(t){if(this.oCombinedFilter){return this.oCombinedFilter.getAST(t)}return null};return n});
//# sourceMappingURL=TreeBinding.js.map