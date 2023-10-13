/*!
* OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*/
sap.ui.define(["sap/base/assert","sap/base/config","sap/base/Log","sap/base/Eventing","sap/base/i18n/Localization","sap/base/i18n/LanguageTag","sap/base/i18n/date/CalendarType","sap/base/i18n/date/CalendarWeekNumbering","sap/base/util/deepEqual","sap/base/util/extend","sap/base/util/isEmptyObject"],function(e,t,a,r,n,i,s,u,o,m,g){"use strict";var l,d={};var c={"":{pattern:null},1:{pattern:"dd.MM.yyyy"},2:{pattern:"MM/dd/yyyy"},3:{pattern:"MM-dd-yyyy"},4:{pattern:"yyyy.MM.dd"},5:{pattern:"yyyy/MM/dd"},6:{pattern:"yyyy-MM-dd"},7:{pattern:"Gyy.MM.dd"},8:{pattern:"Gyy/MM/dd"},9:{pattern:"Gyy-MM-dd"},A:{pattern:"yyyy/MM/dd"},B:{pattern:"yyyy/MM/dd"},C:{pattern:"yyyy/MM/dd"}};var y={"":{short:null,medium:null,dayPeriods:null},0:{short:"HH:mm",medium:"HH:mm:ss",dayPeriods:null},1:{short:"hh:mm a",medium:"hh:mm:ss a",dayPeriods:["AM","PM"]},2:{short:"hh:mm a",medium:"hh:mm:ss a",dayPeriods:["am","pm"]},3:{short:"KK:mm a",medium:"KK:mm:ss a",dayPeriods:["AM","PM"]},4:{short:"KK:mm a",medium:"KK:mm:ss a",dayPeriods:["am","pm"]}};var p={"":{groupingSeparator:null,decimalSeparator:null}," ":{groupingSeparator:".",decimalSeparator:","},X:{groupingSeparator:",",decimalSeparator:"."},Y:{groupingSeparator:" ",decimalSeparator:","}};function f(e,t){if(!e){throw new Error(t)}}function h(e){var t;if(e&&typeof e==="string"){try{t=new i(e)}catch(e){}}return t}var b=t.getWritableInstance();var C={attachChange:function(e){C.attachEvent("change",e)},detachChange:function(e){C.detachEvent("change",e)},getLanguageTag:function(){function e(e){var t=new i(n.getLanguage());if(!g(d)||e.getCalendarWeekNumbering()!==u.Default){var a=t.toString();if(a.indexOf("-x-")<0){a=a+"-x-sapufmt"}else if(a.indexOf("-sapufmt")<=a.indexOf("-x-")){a=a+"-sapufmt"}t=new i(a)}return t}return b.get({name:"sapUiFormatLocale",type:function(e){return new i(e)},defaultValue:e.bind(C,this),external:true})},setLanguageTag:function(e){var t=h(e);f(e==null||typeof e==="string"&&t,"sLanguageTag must be a BCP47 language tag or Java Locale id or null");e=e===null?undefined:e;var a=C.getLanguageTag();b.set("sapUiFormatLocale",e);var r=C.getLanguageTag();if(a.toString()!==r.toString()){var n=!l;l=l||{};l.languageTag=r.toString();if(n){v()}}return this},_set:function(e,a){t._.invalidate();var r=d[e];if(a!=null){d[e]=a}else{delete d[e]}if((r!=null||a!=null)&&!o(r,a)){var n=!l;l=l||{};l[e]=a;if(n){v()}}},getCustomUnits:function(){return d["units"]?d["units"]["short"]:undefined},setCustomUnits:function(e){var t=null;if(e){t={short:e}}C._set("units",t);return this},addCustomUnits:function(e){var t=C.getCustomUnits();if(t){e=m({},t,e)}C.setCustomUnits(e);return this},setUnitMappings:function(e){C._set("unitMappings",e);return this},addUnitMappings:function(e){var t=C.getUnitMappings();if(t){e=m({},t,e)}C.setUnitMappings(e);return this},getUnitMappings:function(){return d["unitMappings"]},getDatePattern:function(t){e(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full");return d["dateFormats-"+t]},setDatePattern:function(e,t){f(e=="short"||e=="medium"||e=="long"||e=="full","sStyle must be short, medium, long or full");C._set("dateFormats-"+e,t);return this},getTimePattern:function(t){e(t=="short"||t=="medium"||t=="long"||t=="full","sStyle must be short, medium, long or full");return d["timeFormats-"+t]},setTimePattern:function(e,t){f(e=="short"||e=="medium"||e=="long"||e=="full","sStyle must be short, medium, long or full");C._set("timeFormats-"+e,t);return this},getNumberSymbol:function(t){e(["group","decimal","plusSign","minusSign"].includes(t),"sType must be decimal, group, plusSign or minusSign");return d["symbols-latn-"+t]},setNumberSymbol:function(e,t){f(["group","decimal","plusSign","minusSign"].includes(e),"sType must be decimal, group, plusSign or minusSign");C._set("symbols-latn-"+e,t);return this},getCustomCurrencies:function(){return d["currency"]},setCustomCurrencies:function(e){f(typeof e==="object"||e==null,"mCurrencyDigits must be an object");Object.keys(e||{}).forEach(function(t){f(typeof t==="string");f(typeof e[t]==="object")});C._set("currency",e);return this},addCustomCurrencies:function(e){var t=C.getCustomCurrencies();if(t){e=m({},t,e)}C.setCustomCurrencies(e);return this},_setDayPeriods:function(t,a){e(t=="narrow"||t=="abbreviated"||t=="wide","sWidth must be narrow, abbreviated or wide");C._set("dayPeriods-format-"+t,a);return this},getLegacyDateFormat:function(){var e=b.get({name:"sapUiLegacyDateFormat",type:t.Type.String,external:true});return e?e.toUpperCase():undefined},setLegacyDateFormat:function(e){e=e?String(e).toUpperCase():"";f(c.hasOwnProperty(e),"sFormatId must be one of ['1','2','3','4','5','6','7','8','9','A','B','C'] or empty");var t=!l;var a=C.getLegacyDateFormat();if(a!==e){l=l||{};b.set("sapUiLegacyDateFormat",e);l.legacyDateFormat=e;C.setDatePattern("short",c[e].pattern);C.setDatePattern("medium",c[e].pattern);if(t){v()}}return this},getLegacyTimeFormat:function(){var e=b.get({name:"sapUiLegacyTimeFormat",type:t.Type.String,external:true});return e?e.toUpperCase():undefined},setLegacyTimeFormat:function(e){e=e||"";f(y.hasOwnProperty(e),"sFormatId must be one of ['0','1','2','3','4'] or empty");var t=!l;var a=C.getLegacyTimeFormat();if(a!==e){l=l||{};b.set("sapUiLegacyTimeFormat",e);l.legacyTimeFormat=e;C.setTimePattern("short",y[e]["short"]);C.setTimePattern("medium",y[e]["medium"]);C._setDayPeriods("abbreviated",y[e].dayPeriods);if(t){v()}}return this},getLegacyNumberFormat:function(){var e=b.get({name:"sapUiLegacyNumberFormat",type:t.Type.String,external:true});return e?e.toUpperCase():undefined},setLegacyNumberFormat:function(e){e=e?e.toUpperCase():"";f(p.hasOwnProperty(e),"sFormatId must be one of [' ','X','Y'] or empty");var t=!l;var a=C.getLegacyNumberFormat();if(a!==e){l=l||{};b.set("sapUiLegacyNumberFormat",e);l.legacyNumberFormat=e;C.setNumberSymbol("group",p[e].groupingSeparator);C.setNumberSymbol("decimal",p[e].decimalSeparator);if(t){v()}}return this},setLegacyDateCalendarCustomizing:function(e){f(Array.isArray(e),"aMappings must be an Array");var t=!l;l=l||{};C.aLegacyDateCalendarCustomizing=l.legacyDateCalendarCustomizing=e.slice();if(t){v()}return this},getLegacyDateCalendarCustomizing:function(){var e=C.aLegacyDateCalendarCustomizing;if(e){e=e.slice()}return e},setTrailingCurrencyCode:function(e){f(typeof e==="boolean","bTrailingCurrencyCode must be a boolean");b.set("sapUiTrailingCurrencyCode",e);return this},getTrailingCurrencyCode:function(){return b.get({name:"sapUiTrailingCurrencyCode",type:t.Type.Boolean,defaultValue:true,external:true})},getCustomLocaleData:function(){return d},getCalendarWeekNumbering:function(){var e=u.Default;try{e=b.get({name:"sapUiCalendarWeekNumbering",type:u,defaultValue:u.Default,external:true})}catch(e){}return e},setCalendarWeekNumbering:function(e){t._.checkEnum(u,e,"calendarWeekNumbering");var a=b.get({name:"sapUiCalendarWeekNumbering",type:u,defaultValue:u.Default,external:true});if(a!==e){var r=!l;l=l||{};b.set("sapUiCalendarWeekNumbering",e);l.calendarWeekNumbering=e;if(r){v()}}return this},getCalendarType:function(){var e,r=b.get({name:"sapUiCalendarType",type:t.Type.String,external:true});r=r||null;if(r){for(e in s){if(e.toLowerCase()===r.toLowerCase()){return e}}a.warning("Parameter 'calendarType' is set to "+r+" which isn't a valid value and therefore ignored. The calendar type is determined from format setting and current locale")}var i=C.getLegacyDateFormat();switch(i){case"1":case"2":case"3":case"4":case"5":case"6":return s.Gregorian;case"7":case"8":case"9":return s.Japanese;case"A":case"B":return s.Islamic;case"C":return s.Persian;default:return n.getPreferredCalendarType()}},setCalendarType:function(e){var t=C.getCalendarType();b.set("sapUiCalendarType",e);var a=C.getCalendarType();if(t!==a){var r=!l;l=l||{};l.calendarType=a;if(r){v()}}return this}};function v(){C.fireEvent("change",l);l=undefined}function T(){var e=C.getLegacyDateFormat();if(e!==undefined){C.setLegacyDateFormat(e)}var t=C.getLegacyNumberFormat();if(t!==undefined){C.setLegacyNumberFormat(t)}var a=C.getLegacyTimeFormat();if(a!==undefined){C.setLegacyTimeFormat(a)}}r.apply(C);T();return C});
//# sourceMappingURL=Formatting.js.map