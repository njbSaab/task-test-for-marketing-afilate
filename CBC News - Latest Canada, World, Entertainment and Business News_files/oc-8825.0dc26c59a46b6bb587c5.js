!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f19c811-0646-4f0c-80a9-317cfdfd0905",e._sentryDebugIdIdentifier="sentry-dbid-5f19c811-0646-4f0c-80a9-317cfdfd0905")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"ocelot@5e9f0f8ee877f9ab428c46049079b7a92f53ba6c"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8825],{69636:function(e,t,n){n.d(t,{qO:function(){return U},a8:function(){return R},OM:function(){return E},Ng:function(){return k},_K:function(){return F}});var r=n(4942),o=n(15861),i=n(43144),u=n(15671),a=n(82963),s=n(61120),c=n(60136),l=n(72407),d=n(64687),f=n.n(d),g=(n(83464),n(95566),n(19496),n(58109),n(68438),n(68619)),v=n(68699),h=n(81572),p=n(43386),m=n(21188),S=(n(9867),n(7231),n(71733)),y=n(41718);var w=function(e){var t="";for(var n in e)t+="&boost-".concat(n,"=").concat(e[n]);return t};function b(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=h.D4,n="?q=".concat(encodeURIComponent(e.searchTerm)),r=e.pageSize?"&pageSize=".concat(e.pageSize):"",o=e.pageNum?"&page=".concat(e.pageNum):"",i=e.sortOrder?"&sortOrder=".concat(e.sortOrder):"",u=e.section?"&section=".concat(e.section):"",a=e.media?"&media=".concat(e.media):"",s=e.boosts?w(e.boosts):"",c="".concat(n).concat(r).concat(i).concat(u).concat(a).concat(s);return{url:"".concat(t).concat(c).concat(o,"&fields=feed"),params:c}}var j=function(e){try{var t,n;if(null!==(t=window.CBC)&&void 0!==t&&null!==(t=t.APP)&&void 0!==t&&null!==(t=t.ANA)&&void 0!==t&&null!==(t=t.ABTESTSCONFIG)&&void 0!==t&&t.tests)return null===(n=window.CBC.APP.ANA.ABTESTSCONFIG.tests[e])||void 0===n?void 0:n.id}catch(r){y.default.warn("getABTestID",r)}};function O(e,t,n){return t=(0,s.Z)(t),(0,a.Z)(e,C()?Reflect.construct(t,n||[],(0,s.Z)(e).constructor):t.apply(e,n))}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}var A=function(e){function t(e,n,r){var o;return(0,u.Z)(this,t),(o=O(this,t,[e])).name="DecisionError",n&&(o.response=n),r&&(o.catch_message=r),o}return(0,c.Z)(t,e),(0,i.Z)(t)}((0,l.Z)(Error)),T=function(){function e(t,n,r){(0,u.Z)(this,e),t||r(new A("Invalid argument for agent")),this.agent=t,this.resolve=n,this.reject=r,this.timeoutID=0,this.onResult=this.onResult.bind(this),this.onTimeout=this.onTimeout.bind(this)}return(0,i.Z)(e,[{key:"onResult",value:function(e){clearTimeout(this.timeoutID);try{var t=e.data.sels[this.agent];return""===t?(y.default.info("Conductrics: No selection made - ",e.data),this.resolve(t)):t?this.resolve(t):this.reject(new A("CBC.APP.AB.Testing.getDecision selection is undefined for agent: "+this.agent,e))}catch(n){this.reject(new A("The response for CBC.APP.AB.Testing.getDecision caused an error",e,n.message))}}},{key:"onTimeout",value:function(){this.reject(new A("Conductrics Timeout"))}},{key:"request",value:function(){try{"undefined"===typeof window.CBC.APP.AB.conductrics_api&&this.reject(new A("CBC.APP.AB.conductrics_api is undefined")),window.CBC.APP.AB.Testing.getDecision(this.agent,!1,!1,this.onResult),this.timeoutID=setTimeout(this.onTimeout,e.TIMEOUT)}catch(t){this.reject(new A("CBC.APP.AB.Testing.getDecision caused an error",null,t.message))}}}],[{key:"TIMEOUT",get:function(){return 3e3}}]),e}();function B(e){return new Promise((function(t,n){new T(e,t,n).request()}))}var x=n(71836);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t=(0,s.Z)(t),(0,a.Z)(e,I()?Reflect.construct(t,n||[],(0,s.Z)(e).constructor):t.apply(e,n))}function I(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(I=function(){return!!e})()}var N=function(e){function t(){return(0,u.Z)(this,t),P(this,t,arguments)}return(0,c.Z)(t,e),(0,i.Z)(t)}((0,l.Z)(Error));function E(e){var t=e.searchTerm,n=e.section||"all",r=e.sortOrder||x.s8,i=e.nextPage||!1,u=e.media||x.mk,a=j(h.LH);return function(){var e=(0,o.Z)(f().mark((function e(o,s){var c,l,d,S;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s(),l=i?c.search.pageNum+1:1,d="all"===n?"":n,S=void 0,e.abrupt("return",Z(a).then((function(e){var t,n,r;null!==(t=window.CBC)&&void 0!==t&&null!==(t=t.APP)&&void 0!==t&&null!==(t=t.ANA)&&void 0!==t&&null!==(t=t.ABTESTSCONFIG)&&void 0!==t&&t.tests&&null!==(n=window.CBC)&&void 0!==n&&null!==(n=n.APP)&&void 0!==n&&null!==(n=n.ANA)&&void 0!==n&&null!==(n=n.ABTESTSCONFIG)&&void 0!==n&&null!==(n=n.tests[h.LH])&&void 0!==n&&n.variants&&(S=null===(r=window.CBC)||void 0===r||null===(r=r.APP)||void 0===r||null===(r=r.ANA)||void 0===r||null===(r=r.ABTESTSCONFIG)||void 0===r||null===(r=r.tests[h.LH])||void 0===r?void 0:r.variants[e])})).finally((function(){var e,a=null!==(e=window.CBC)&&void 0!==e&&null!==(e=e.APP)&&void 0!==e&&null!==(e=e.ANA)&&void 0!==e&&e.SEARCHDEFAULT?window.CBC.APP.ANA.SEARCHDEFAULT:{},s=void 0!==S?S.content:a,c=b({searchTerm:t,section:d,sortOrder:r,pageNum:l,media:u,boosts:s}),f=0,w={athleteId:"",backgroundImage:"",flag:!1,countryFlagImage:"",countryId:"",profileImage:"",section:"",sportId:"",title:"",url:""};try{var j=window.sessionStorage.getItem(JSON.stringify(c.params)),O=JSON.parse(j)||null;if(!(Boolean(O)&&!i&&(new Date).getTime()-O.time<h.oF))return(0,p.request)(c.url).then((function(e){if((0,m.fQ)(e))return f=parseInt(e.headers.get("x-total-search-result-count"),10),e.json()})).then((function(e){var a=e[0];a&&a.info_card_flag&&(w={backgroundImage:a.info_card_background_image,flag:!0,countryFlagImage:a.info_card_country_image,profileImage:a.info_card_profile_image,section:a.info_card_section,title:a.title,url:a.url,countryId:a.info_card_country_id,athleteId:a.info_card_athlete_id,sportId:a.info_card_sport_id},e.shift()),w=Object.assign(w,{captureGoals:!(!a||!a.info_card_flag)}),e.forEach((function(e){e.id.includes("keymatch_result")&&(e.publishtime=new Date)}));var s=e;i?(a.focus=!0,o((0,g.rU)({json:(0,v.Cj)(e),params:{pageNum:l}})),O&&(s=O.json.concat(e))):o((0,g.BE)({json:(0,v.Cj)(e),params:{section:n,searchTerm:t,sortOrder:r,resultCount:f,pageNum:l,infoCard:w,media:u}})),window.sessionStorage.setItem(JSON.stringify(c.params),JSON.stringify({json:s,resultCount:f,time:(new Date).getTime(),infoCard:w}))})).catch((function(e){y.default.error("fetch_search_results - getABTestVariant",e)}));o((0,g.BE)({json:(0,v.Cj)(O.json),params:{section:n,searchTerm:t,sortOrder:r,resultCount:O.resultCount,pageNum:l,media:u,infoCard:O.infoCard}}))}catch(C){y.default.error("fetch_search_results",C)}})));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}function k(e){var t=D(D({},e),{},{nextPage:!0});return function(e){return E(D(D({},t),e))}}function F(e){var t=e.searchTerm,n=e.section||"all",r=e.sortOrder||"relevance",o=j(h.IU);return function(e){var i="all"===n?"":n,u=void 0;Z(o).then((function(e){var t,n,r;null!==(t=window.CBC)&&void 0!==t&&null!==(t=t.APP)&&void 0!==t&&null!==(t=t.ANA)&&void 0!==t&&null!==(t=t.ABTESTSCONFIG)&&void 0!==t&&t.tests&&null!==(n=window.CBC)&&void 0!==n&&null!==(n=n.APP)&&void 0!==n&&null!==(n=n.ANA)&&void 0!==n&&null!==(n=n.ABTESTSCONFIG)&&void 0!==n&&null!==(n=n.tests[h.LH])&&void 0!==n&&n.variants&&(u=null===(r=window.CBC)||void 0===r||null===(r=r.APP)||void 0===r||null===(r=r.ANA)||void 0===r||null===(r=r.ABTESTSCONFIG)||void 0===r||null===(r=r.tests[h.LH])||void 0===r?void 0:r.variants[e])})).finally((function(){var n=void 0!==u?u.content:{},o=b({searchTerm:t,section:i,sortOrder:r,media:x.Zv,boosts:n}),a=0,s=JSON.stringify(o.params+"&videoSwimlane");try{var c=window.sessionStorage.getItem(s),l=JSON.parse(c)||null;Boolean(l)&&(new Date).getTime()-l.time<h.oF?e((0,g.W0)({json:l.json.slice(0,h.sK)})):(0,p.request)(o.url).then((function(e){if("application/json;charset=UTF-8"===e.headers.get("content-type"))return a=parseInt(e.headers.get("x-total-search-result-count"),10),e.json()})).then((function(t){(function(e,t){return t<h.VP?Promise.resolve([]):(0,S.S3)(e.map((function(e){return e["cbc-mediaid"]})).filter((function(e){return void 0!==e})))})(t,a).then((function(t){var n,r=(null===t||void 0===t||null===(n=t.data)||void 0===n?void 0:n.media)||[];e((0,g.W0)({json:null===r||void 0===r?void 0:r.slice(0,h.sK)})),window.sessionStorage.setItem(s,JSON.stringify({json:r,resultCount:a,time:(new Date).getTime()}))}))})).catch((function(e){y.default.error("fetch_top_video_results - getABTestVariant",e)}))}catch(d){y.default.error("fetch_top_videos_results",d)}}))}}function Z(e){return q.apply(this,arguments)}function q(){return(q=(0,o.Z)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===t){e.next=10;break}return e.prev=1,e.next=4,B(t);case 4:return e.abrupt("return",e.sent);case 7:e.prev=7,e.t0=e.catch(1),y.default.error("Error in decision making process: ".concat(e.t0),e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function R(e){return function(t){if((null===e||void 0===e?void 0:e.length)>2){var n="".concat(h.ss,"?q=").concat(e);(0,p.request)(n).then((function(e){if(e.ok)return e.json();throw new N(e)})).then((function(e){var n=e.matches;t((0,g.ow)({json:(0,v.VV)(n)}))})).catch((function(e){t((0,g.ow)({json:(0,v.VV)([])})),y.default.error("fetch_autocomplete_options",e)}))}else t((0,g.ow)({json:(0,v.VV)([])}))}}function U(){return(0,g.ow)({json:[]})}},81572:function(e,t,n){n.d(t,{D4:function(){return o},IU:function(){return l},LH:function(){return c},VP:function(){return a},oF:function(){return u},sK:function(){return s},ss:function(){return i}});var r=n(93849),o=r.KF("Client.searchApi.baseURL"),i=r.KF("Client.searchApi.autocompleteURL"),u=6e4,a=10,s=3,c="main-search",l="video-swim-lane"},3623:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(92972),o=n.n(r);function i(e){var t=e.children;return e.value?t:null}i.propTypes={value:o().bool.isRequired}},68825:function(e,t,n){n.d(t,{Z:function(){return T}});var r=n(29439),o=n(32747),i=n(92972),u=n.n(i),a=n(14507),s=n.n(a),c=n(7636),l=(n(9867),n(7231),n(86535)),d=n(56552);function f(e){var t=(0,o.useState)("all"),n=(0,r.Z)(t,2),i=n[0],u=n[1];return(0,o.useEffect)((function(){void 0!==e.selectedFilter&&null!==e.selectedFilter&&u(e.selectedFilter)}),[e.selectedFilter]),(0,d.jsxs)("div",{className:"searchFilterContainer",children:[(0,d.jsx)("label",{htmlFor:"searchFilterSelect",children:"Filter by"}),(0,d.jsx)("select",{id:"searchFilterSelect",name:"Search Filters",value:i,onChange:function(t){return function(e,t){t&&t(e);var n=e.target.value;u(n)}(t,e.clickHandler)},children:e.filters.map((function(e){return(0,d.jsx)("option",{"data-filtertype":e.value,value:e.value,children:e.label},e.value)}))}),(0,l.Z)()]})}f.propTypes={filters:u().array,clickHandler:u().func},f.defaultProps={filters:[],clickHandler:function(){}};var g=f,v=(n(83464),n(19496),n(4942)),h=(n(58109),n(95566),n(68438),n(69636)),p=n(3623);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,v.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=[],w=function(e){var t=e.isCompact,n=e.inputFocus,i=e.searchTerm,u=e.updateSearchTerm,a=e.handleSearchAutocompleteSelect,l=(0,o.useState)({justSelectedSuggestion:!1,highlightedSuggestionIndex:null,highlightedSuggestion:null,queryBeforeUpDown:null,shouldSuggestionsBeVisible:!1,hasSuggestions:!1,ariaStatusMessage:"",queryValue:""}),f=(0,r.Z)(l,2),g=f[0],v=f[1],m=(0,c.useSelector)((function(e){var t,n;return null!==(t=null===(n=e.search)||void 0===n?void 0:n.autocompleteResults)&&void 0!==t?t:y})),w=(0,o.useRef)(null),b=(0,o.useRef)(null),j=function(e){w.current&&w.current.value!==e&&(w.current.value=null!==e&&void 0!==e?e:"")},O=(0,c.useDispatch)(),C=function(e){O((0,h.a8)(e))},A=function(){O((0,h.qO)())};(0,o.useEffect)((function(){j(i)}),[i]),(0,o.useEffect)((function(){var e,t,n=null!==(e=null===(t=w.current)||void 0===t?void 0:t.value)&&void 0!==e?e:"",r="";n.length>2&&g.shouldSuggestionsBeVisible&&(r=m.length>0?"".concat(m.length," suggestions available. Use up and down arrows to review and enter to select"):"No suggestions available"),v((function(e){return S(S({},e),{},{hasSuggestions:m.length>0,queryValue:n,ariaStatusMessage:r})}))}),[m]),(0,o.useEffect)((function(){var e;n&&(null===(e=w.current)||void 0===e||e.focus())}),[n]);var T=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().length>0},B=function(e,t){var n=g.queryBeforeUpDown;null===e?n=null:null===n&&void 0!==t&&(n=t),v((function(t){var r;return S(S({},t),{},{highlightedSuggestionIndex:e,highlightedSuggestion:null!==(r=m[e])&&void 0!==r?r:null,queryBeforeUpDown:n})}))},x=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];v((function(t){return S(S({},t),{},{highlightedSuggestionIndex:null,highlightedSuggestion:null,queryBeforeUpDown:e?null:t.queryBeforeUpDown})}))},_=function(){j(""),v((function(e){return S(S({},e),{},{queryValue:""})}))},D=function(){v((function(e){return S(S({},e),{},{shouldSuggestionsBeVisible:!1,highlightedSuggestionIndex:null,highlightedSuggestion:null,queryBeforeUpDown:null})}))},P=function(e){a(e),A(),x()},I=function(e){x(!1),g.justSelectedSuggestion&&e.target===b.current&&v((function(e){return S(S({},e),{},{justSelectedSuggestion:!1})}))},N=function(e){g.justSelectedSuggestion||(v((function(e){return S(S({},e),{},{justSelectedSuggestion:!0})})),b.current=e.target)},E=function(){v((function(e){return S(S({},e),{},{justSelectedSuggestion:!0})}))},k=function(){var e;v((function(e){return S(S({},e),{},{justSelectedSuggestion:!1})})),b.current=null,null===(e=w.current)||void 0===e||e.focus()},F=function(e){return function(){var n=m[e];n&&(u(n.value),P(n.value),D(),t&&_()),v((function(e){return S(S({},e),{},{justSelectedSuggestion:!1})}))}},Z=function(e,t){var n=function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},r=n(e.value),o=n(t),i=new RegExp("\\b(".concat(o,")"),"i"),u=r.split(i).filter((function(e){return e}));return(0,d.jsx)("span",{children:u.map((function(e,t){var n=i.test(e)?"autocomplete-suggestions-item-match":null;return(0,d.jsx)("span",{className:n,children:e},"".concat(e,"-").concat(t))}))})},q=function(e,t,n,r){var o=t===g.highlightedSuggestionIndex,i=s()("autocomplete-suggestions-item",o&&"autocomplete-suggestions-item-highlighted"),u=function(e){return"autocomplete-suggestions-item-".concat(e)}(t);return(0,d.jsx)("li",S(S({id:u,role:"option","aria-posinset":t+1,"aria-setsize":r,"aria-selected":o,tabIndex:"-1",className:i,"data-suggestion-index":t},function(e){return{onMouseEnter:(t=e,function(e){B(t),e.target===b.current&&v((function(e){return S(S({},e),{},{justSelectedSuggestion:!0})}))}),onMouseLeave:I,onMouseDown:N,onTouchStart:E,onTouchMove:k,onClick:F(e)};var t}(t)),{},{children:Z(e,n)}),u)},R={onFocus:function(e){var t=e.target.value;if(!g.justSelectedSuggestion){var n=T(t);v((function(e){return S(S({},e),{},{shouldSuggestionsBeVisible:n})})),n&&C(t)}},onBlur:function(){g.justSelectedSuggestion||(D(),A())},onChange:function(e){var t=e.target.value,n=T(t);T(t)?C(t):A(),u(t),v((function(e){return S(S({},e),{},{shouldSuggestionsBeVisible:n,highlightedSuggestionIndex:null,highlightedSuggestion:null,queryBeforeUpDown:null})}))},onKeyDown:function(e){var n=e.key,r=g.hasSuggestions,o=g.highlightedSuggestionIndex,i=g.queryValue,a=g.shouldSuggestionsBeVisible,s=g.queryBeforeUpDown;switch(n){case"ArrowDown":case"ArrowUp":var c;if(a){if(m.length>0){var l,d,f=m.length-1,h=null;if("ArrowUp"===n?null===o?h=f:o>0&&(h=o-1):"ArrowDown"===n&&(null===o?h=0:o<f&&(h=o+1)),null===h)l=null!==s&&void 0!==s?s:i;else l=null===(d=m[h])||void 0===d?void 0:d.value;B(h,i),j(l),u(l),e.preventDefault()}}else T(null===(c=w.current)||void 0===c?void 0:c.value)&&(C(g.queryValue),v((function(e){return S(S({},e),{},{shouldSuggestionsBeVisible:!0})})),e.preventDefault());break;case"Enter":var p,y=null!==(p=m[o])&&void 0!==p?p:null;a&&r&&D(),t&&_(),null!==y&&(e.preventDefault(),u(y.value),P(y.value),v((function(e){return S(S({},e),{},{justSelectedSuggestion:!1})})));break;case"Escape":var b=null,O=e.target.value,I=void 0===O?"":O;a&&r?(e.preventDefault(),A(),D(),b=null!==s&&void 0!==s?s:I):(x(),b=null===s?"":s),"string"===typeof b&&u(b),j(b)}}},U=(null===g.queryBeforeUpDown?g.queryValue:g.queryBeforeUpDown).trim(),V=g.shouldSuggestionsBeVisible&&g.hasSuggestions,L=V?m:[],M=t?"gn-compact-search":"gn-search",H="".concat(M,"-autocomplete"),G=V?null:"".concat(M,"-autocomplete-assistiveHint"),K=L.length,W=s()("autocomplete-suggestions-list",V?"autocomplete-suggestions-container":"");return(0,d.jsxs)("div",{className:"search-autocomplete",children:[(0,d.jsx)("div",{id:"".concat(M,"-suggestions-status"),className:"a11y",role:"status","aria-atomic":"true","aria-live":"polite",children:g.ariaStatusMessage}),(0,d.jsx)("input",S(S({id:M,className:"searchInput","data-cy":"search-bar-input",name:"query",placeholder:"Search CBC.ca",type:"search",role:V?"combobox":null,"aria-haspopup":"listbox",autoComplete:"off",autoCorrect:"off","aria-autocomplete":"both","aria-expanded":V||null,"aria-controls":H,"aria-describedby":G,"aria-label":"Search CBC.ca"},R),{},{ref:w})),(0,d.jsx)(p.Z,{value:V,children:(0,d.jsx)("ul",{id:H,className:W,role:"listbox","aria-label":"Choose a suggestion",children:L.map((function(e,t){return q(e,t,U,K)}))})}),(0,d.jsx)(p.Z,{value:!V,children:(0,d.jsx)("span",{className:"a11y",id:G,children:"When search suggestions are available use up and down arrows to review and enter to select."})})]})};w.propTypes={isCompact:u().bool.isRequired,inputFocus:u().bool,searchTerm:u().string,updateSearchTerm:u().func.isRequired,handleSearchAutocompleteSelect:u().func.isRequired};var b=w,j=n(17192),O=n(71836),C=n(30663),A=function(e){var t=e.type,n=void 0===t?"expanded":t,i=e.qsTerm,u=e.active,a=e.addFilter,l=e.addSort,f=e.addMedia,v=e.mediaFilterValue,h=e.sortOrderValue,p=(0,c.useSelector)((function(e){var t;return null===e||void 0===e||null===(t=e.featureflags)||void 0===t?void 0:t["search.types"]})),m=(0,c.useSelector)((function(e){return e.app.baseSection})),S=(0,C.useHistory)(),y=(0,C.useLocation)(),w=(0,c.useSelector)((function(e){return e.search})),A=(null===i||void 0===i?void 0:i.trim())||"",T=(0,o.useState)(A),B=(0,r.Z)(T,2),x=B[0],_=B[1],D=(0,o.useState)(""),P=(0,r.Z)(D,2),I=P[0],N=P[1],E=(0,o.useState)(A),k=(0,r.Z)(E,2),F=k[0],Z=k[1];function q(e){var t=e.section,n=e.sortOrder,r=e.media,o=e.nextSearchTerm,i=encodeURIComponent(o||x.trim()),u="?q=".concat(i,"&section=").concat(t,"&sortOrder=").concat(n,"&media=").concat(r);""!==i&&S.push("/search".concat(u))}var R=!1;(0,o.useEffect)((function(){"expanded"===n&&((0,j.UL)(a,p,l,f,q),R=!0)}),[]),(0,o.useEffect)((function(){"expanded"!==n||R||(_(A),Z(A),q({section:(0,j.GM)(a,p),sortOrder:(0,j.xR)(h),media:(0,j.m0)(v),nextSearchTerm:A}))}),[i,v,h,p]),(0,o.useEffect)((function(){I&&U(x)}),[I]);var U=function(e,t){t&&t.preventDefault();var r=y.pathname,o=w.media||O.mk,i=w.section||"all";"compact"===n&&(_(""),Z(null),o=O.mk,"player"===m?(o=O.Zv,i=r.startsWith("/player/play/")?void 0:r.split("/")[2]):i=m,r.startsWith("/sports/olympics")||r.startsWith("/player/sports/olympics")?i="olympics":(r.startsWith("/sports/paralympics")||r.startsWith("/player/sports/paralympics"))&&(i="paralympics")),q({section:(0,j.GM)(i,p),sortOrder:(0,j.xR)(w.sortOrder),media:(0,j.m0)(o),nextSearchTerm:e})},V=(0,o.useCallback)((function(e){_(e),N(e)}),[]),L=function(e){e.preventDefault();var t=O.mk,n=O.s8;null!=v&&(t=v),null!=h&&(n=h),q({section:e.target.value?(0,j.GM)(e.target.value,p):(0,j.GM)(w.section,p),sortOrder:(0,j.xR)(n),media:(0,j.m0)(t)})},M=s()("searchBar",{compact:"compact"===n,active:u});return(0,d.jsxs)("div",{className:M,children:[(0,d.jsxs)("form",{className:"searchForm",onSubmit:function(e){return U(x,e)},children:[(0,d.jsx)(b,{isCompact:"compact"===n,searchTerm:F,inputFocus:u,updateSearchTerm:_,handleSearchAutocompleteSelect:V}),(0,d.jsx)("button",{className:"searchButton","data-cy":"search-bar-button",children:"Search"})]}),"compact"!==n?(0,d.jsx)("div",{children:(0,d.jsx)(g,{filters:p,selectedFilter:w.section,clickHandler:L})}):a?(0,d.jsx)("div",{children:(0,d.jsx)(g,{filters:p,selectedFilter:a})}):void 0]})};A.propTypes={type:u().string,qsTerm:u().string,active:u().bool,addFilter:u().string,addSort:u().string,addMedia:u().oneOfType([u().string,u().bool]),mediaFilterValue:u().oneOfType([u().string,u().bool]),searchFilters:u().array,sortOrderValue:u().oneOfType([u().string,u().bool])};var T=A},17192:function(e,t,n){n.d(t,{UL:function(){return c},GM:function(){return u},m0:function(){return s},xR:function(){return a}});n(53145),n(95566),n(62153);var r=n(71836),o=[{label:r.Q2,value:r.s8},{label:r.Og,value:r.ey}],i=[{label:"All",value:"all"},{label:"Video",value:"video"}],u=function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).some((function(t){return t.value===e}))?e:"all"},a=function(e){return"boolean"===typeof e?e?r.s8:r.ey:o.some((function(t){return t.value===e}))?e:r.s8},s=function(e){return"boolean"===typeof e?e?r.Zv:r.mk:i.some((function(t){return t.value===e}))?e:r.mk},c=function(e,t,n,r,o){var i=u(e,t),c=a(n),l=s(r);i===e&&c===n&&l===r||o({section:i,sortOrder:c,media:l})}},86535:function(e,t,n){var r=n(56552);t.Z=function(){return(0,r.jsxs)("svg",{width:"12px",height:"7px",viewBox:"0 0 12 7",role:"img",focusable:"false",children:[(0,r.jsx)("title",{children:"Stroke 5"}),(0,r.jsx)("desc",{children:"Created with Sketch."}),(0,r.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round",children:(0,r.jsx)("g",{id:"RelevanceDesktop",transform:"translate(-969.000000, -384.000000)",stroke:"#0550C8",strokeWidth:"1.95349219",children:(0,r.jsx)("polyline",{id:"Stroke-5",transform:"translate(974.626651, 387.117645) rotate(-360.000000) translate(-974.626651, -387.117645) ",points:"979.253302 385 974.626807 389.235291 970 385"})})})]})}},71836:function(e,t,n){n.d(t,{I9:function(){return f},K6:function(){return v},KR:function(){return g},Og:function(){return a},Q2:function(){return s},Zv:function(){return o},ey:function(){return u},mk:function(){return r},nY:function(){return l},s8:function(){return i},w$:function(){return d},wC:function(){return c}});var r="all",o="video",i="relevance",u="date",a="Most recent",s="Relevance",c=".card",l=".video-card-container",d=".searchInfoCard",f="api-loaded-article",g="api-video-swimlane",v="api-serp-info-card"}}]);
//# sourceMappingURL=../../sourcemaps/oc-8825.0dc26c59a46b6bb587c5.js.map