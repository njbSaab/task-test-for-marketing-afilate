!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="3f063759-3ca1-481e-bdb1-61e9d0e51f7d",t._sentryDebugIdIdentifier="sentry-dbid-3f063759-3ca1-481e-bdb1-61e9d0e51f7d")}catch(t){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"ocelot@5e9f0f8ee877f9ab428c46049079b7a92f53ba6c"},(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9947],{31494:function(t,e,a){a.r(e),a.d(e,{default:function(){return jt}});a(58109),a(95566),a(68438),a(83464),a(19496);var o=a(84506),r=a(93433),c=a(4942),n=a(29439),i=a(32747),s=a(7636),l=a(92972),u=a.n(l),p=a(33568),w=a(60612),d=a(97240),h=a(15671),m=a(43144),f=a(82963),b=a(61120),k=a(60136),g=(a(53182),a(79321),a(95763),a(26817),a(50155),a(51335),a(83234),a(92435),a(87201),a(23503),a(72891),a(21934),a(81466),a(40703),a(40627)),y=a(34325),v=a(19227);function N(t,e,a){return e=(0,b.Z)(e),(0,f.Z)(t,C()?Reflect.construct(e,a||[],(0,b.Z)(t).constructor):e.apply(t,a))}function C(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(C=function(){return!!t})()}var S=function(t){function e(t){var a;return(0,h.Z)(this,e),(a=N(this,e)).policyName="FeaturedPolicy",a.viewport=t.viewport,a.hasTopStories=t.hasTopStories,a.richPolicy=!!t.richPolicy&&t.richPolicy,a.contentPackage=t.contentPackage?t.contentPackage:null,a}return(0,k.Z)(e,t),(0,m.Z)(e,[{key:"buildCardTypesMap",value:function(t){this.cardTypesMap=new Map;var e=3,a=this.richPolicy?1:4,o=this.hasTopStories?a:0;"viewportSmall"===this.viewport&&(e=1,o=0);for(var r=0;r<t;r++){var c=g.QU.TYPE_DEFAULT;c=this.hasTopStories&&0===r?c=this.richPolicy&&!this.contentPackage?g.QU.TYPE_FEATURED:g.QU.TYPE_FEATURED_AUTHOR:r>=o&&r<o+e?g.QU.TYPE_LISTING_AUTHOR:this.richPolicy?g.QU.TYPE_REGULAR:g.QU.TYPE_DEFAULT,this.cardTypesMap.set(r,c)}this.cardTypesMap.set(v.Zm,g.QU.TYPE_DEFAULT)}}]),e}(y.Z),P=a(51111),T=a(73906),x=a(29274),Z=a(57241),j=a(97767),O=a(56552);function B(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function E(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?B(Object(a),!0).forEach((function(e){(0,c.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function A(t){var e="viewportSmall"===t.viewport,a=!0===e&&"homepage"!==t.baseSection?(0,O.jsx)(w.Z,{type:"bigbox",targeting:{plc:"feed"}}):null;if(t.isDenseFeatured)return(0,O.jsx)("section",{className:"featuredArea sclt-featuredarea",children:(0,O.jsx)(P.Z,E({title:"Featured Content",mobileAd:a},t))});var o={viewport:t.viewport,hasTopStories:t.hasTopStories,contentPackage:t.contentPackage},r=void 0!==t.displayPolicy?t.displayPolicy:new S(o);r.richPolicy&&e&&(r=new T.Z({contentPackage:t.contentPackage}));var c={baseSection:t.baseSection,subSection:t.subSection,trackingSection:"featured"},n=r.format(t.items,c,t.cardClickHandler),i=t.hasTopStories?(0,Z.dx)(t.baseSection):0;if(j.HK[t.path]){var s=j.HK[t.path].customNumTopStories;i=s||i}var l=function(t,e,a){if(t&&t.length&&t.length<=e)return null;if(a)return e;return 0}(n,i,t.hasHighlightedStories),u=function(t,e,a,o){if(null===a)return null;if(!o)return e;if(t&&t.length&&t.length<=a+x.nJ)return null;return a+x.nJ}(n,i,l,t.hasHighlightedStories);return(0,O.jsx)("div",{children:(0,O.jsxs)("section",{className:"featuredArea sclt-featuredarea","data-cy":"topStoriesFeatured",children:[(0,O.jsx)(d.Z,{level:"h2",hidden:!0,children:"Featured Content"}),t.contentPackage,_(n,t.hasTopStories,i),U(n,l,t.hasHighlightedStories),a,F(n,u,n.length)]})})}function F(t,e,a){return t&&t.length&&null!==e&&t.length>e?t.slice(e,a):null}function U(t,e,a){return t&&a?(0,O.jsx)("div",{className:"featuredHighlights sclt-featuredHighlights",children:F(t,e,e+x.nJ)}):null}function _(t,e,a){if(!t||!e)return null;var o=F(t,0,a);if(!o)return null;var r=o.shift(),c=o.length?(0,O.jsx)("div",{className:"secondaryTopStories",children:o}):null;return(0,O.jsxs)("div",{className:"featuredTopStories sclt-featuredTopStories",children:[(0,O.jsx)("div",{className:"primaryTopStories",children:r}),c]})}A.propTypes={items:u().array.isRequired,baseSection:u().string.isRequired,subSection:u().string.isRequired,viewport:u().string,path:u().string,hasTopStories:u().bool,hasHighlightedStories:u().bool,cardClickHandler:u().func,contentPackage:u().object},A.defaultProps={items:null,baseSection:"news",subSection:"",viewport:"viewportLarge",path:"",hasTopStories:!1,hasHighlightedStories:!0,cardClickHandler:function(){},contentPackage:null};var I=A,M=a(49291),H=a(80361);function D(t,e,a){return e=(0,b.Z)(e),(0,f.Z)(t,L()?Reflect.construct(e,a||[],(0,b.Z)(t).constructor):e.apply(t,a))}function L(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(L=function(){return!!t})()}var R=function(t){function e(){var t;return(0,h.Z)(this,e),(t=D(this,e)).policyName="DebugPolicy",t}return(0,k.Z)(e,t),(0,m.Z)(e,[{key:"buildCardTypesMap",value:function(){this.cardTypesMap=new Map,this.cardTypesMap.set(1,g.QU.TYPE_DEFAULT),this.cardTypesMap.set(2,g.QU.TYPE_TEXT),this.cardTypesMap.set(v.Zm,g.QU.TYPE_DEFAULT)}}]),e}(y.Z),Q=a(88277);function Y(t,e,a){return e=(0,b.Z)(e),(0,f.Z)(t,G()?Reflect.construct(e,a||[],(0,b.Z)(t).constructor):e.apply(t,a))}function G(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(G=function(){return!!t})()}var W=function(t){function e(){var t;return(0,h.Z)(this,e),(t=Y(this,e)).policyName="MediumDensityPolicy",t}return(0,k.Z)(e,t),(0,m.Z)(e,[{key:"buildCardTypesMap",value:function(){this.cardTypesMap=new Map,this.cardTypesMap.set(v.Zm,g.QU.TYPE_DEFAULT)}}]),e}(y.Z),J=a(56476);function K(t,e,a){return e=(0,b.Z)(e),(0,f.Z)(t,V()?Reflect.construct(e,a||[],(0,b.Z)(t).constructor):e.apply(t,a))}function V(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(V=function(){return!!t})()}var q=function(t){function e(){var t;return(0,h.Z)(this,e),(t=K(this,e)).policyName="ListingPolicy",t}return(0,k.Z)(e,t),(0,m.Z)(e,[{key:"buildCardTypesMap",value:function(){this.cardTypesMap=new Map,this.cardTypesMap.set(0,g.QU.TYPE_LISTING),this.cardTypesMap.set(1,g.QU.TYPE_LISTING),this.cardTypesMap.set(2,g.QU.TYPE_LISTING),this.cardTypesMap.set(v.Zm,g.QU.TYPE_LISTING_HORIZONTAL)}}]),e}(y.Z);function z(t,e,a){return e=(0,b.Z)(e),(0,f.Z)(t,X()?Reflect.construct(e,a||[],(0,b.Z)(t).constructor):e.apply(t,a))}function X(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(X=function(){return!!t})()}var $=function(t){function e(t){var a;return(0,h.Z)(this,e),(a=z(this,e)).policyName="HomepagePolicy",a.contentPackage=t.contentPackage?t.contentPackage:null,a}return(0,k.Z)(e,t),(0,m.Z)(e,[{key:"buildCardTypesMap",value:function(){var t=this.contentPackage?g.QU.TYPE_FEATURED_AUTHOR:g.QU.TYPE_FEATURED;this.cardTypesMap=new Map,this.cardTypesMap.set(0,t),this.cardTypesMap.set(v.Zm,g.QU.TYPE_REGULAR)}}]),e}(y.Z);function tt(t,e,a){return e=(0,b.Z)(e),(0,f.Z)(t,et()?Reflect.construct(e,a||[],(0,b.Z)(t).constructor):e.apply(t,a))}function et(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(et=function(){return!!t})()}var at=function(t){function e(){var t;return(0,h.Z)(this,e),(t=tt(this,e)).policyName="SearchPolicy",t}return(0,k.Z)(e,t),(0,m.Z)(e,[{key:"buildCardTypesMap",value:function(){this.cardTypesMap=new Map,this.cardTypesMap.set(v.Zm,g.QU.TYPE_LISTING_HORIZONTAL)}}]),e}(y.Z),ot=a(79532),rt=a(14507),ct=a.n(rt),nt=a(70847),it=a(53333),st=a(7863),lt=a(58670),ut=(a(9867),a(7231),a(2902)),pt=a(26574),wt={title:"Follow CBC Life",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbclife"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbclife"},{socialNetwork:"pinterest",url:"https://www.pinterest.com/cbclife"},{socialNetwork:"youtube",url:"https://www.youtube.com/cbclife"},{socialNetwork:"x",url:"https://www.x.com/CBC_life"},{socialNetwork:"snapchat",url:"https://www.snapchat.com/add/cbclife"}]},dt={2017:{title:"Follow Canada 2017",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbccanada2017"},{socialNetwork:"x",url:"https://x.com/cbc2017"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbc2017"}]},"2017/wearecanada":{title:"Follow Canada 2017",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbccanada2017"},{socialNetwork:"x",url:"https://x.com/cbc2017"}]},"books/canadareads":{title:"Follow CBC Books",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbcbooks"},{socialNetwork:"x",url:"https://x.com/cbcbooks"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcbooks/"}]},"life/jamieoliver":wt,"life/jamieoliver/recipes":wt,"life/jamieoliver/watch":wt,"news/canada/british-columbia":{title:"Follow CBC British Columbia",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/CBCVancouver"},{socialNetwork:"x",url:"https://x.com/cbcnewsbc"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcvancouver"}]},"news/canada/british-columbia/community":{title:"Follow CBC British Columbia",links:[{socialNetwork:"x",url:"https://x.com/cbcvancouver"},{socialNetwork:"facebook",url:"https://www.facebook.com/CBCVancouver"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcvancouver"},{socialNetwork:"snapchat",url:"https://www.snapchat.com/add/cbcvancouver"},{socialNetwork:"youtube",url:"https://www.youtube.com/channel/UCiKE6mqbKmGGlNAtccn04MA"}]},"news/canada/calgary":{title:"Follow CBC Calgary",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbccalgary"},{socialNetwork:"x",url:"https://x.com/CBCCalgary"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbccalgary"}]},"news/canada/calgary/community":{title:"Follow CBC Calgary",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbccalgary"},{socialNetwork:"x",url:"https://x.com/CBCCalgary"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbccalgary"}]},"news/canada/calgary/the-road-ahead":{title:"Follow CBC Calgary",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbccalgary"},{socialNetwork:"x",url:"https://x.com/CBCCalgary"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbccalgary"}]},"news/canada/edmonton":{title:"Follow CBC Edmonton",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbcedmonton/"},{socialNetwork:"x",url:"https://x.com/CBCEdmonton"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcedmonton"}]},"news/canada/hamilton":{title:"Follow CBC Hamilton",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbchamilton"},{socialNetwork:"x",url:"https://x.com/CBCHamilton"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbchamilton"}]},"news/canada/manitoba":{title:"Follow CBC Manitoba",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbcmanitoba"},{socialNetwork:"x",url:"https://x.com/CBCManitoba"},{socialNetwork:"youtube",url:"https://www.youtube.com/user/CBCManitoba"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcmanitoba"}]},"news/canada/manitoba/community":{title:"Follow CBC Manitoba",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbcmanitoba"},{socialNetwork:"x",url:"https://www.x.com/CBCManitoba"},{socialNetwork:"youtube",url:"https://www.youtube.com/CBCManitoba"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcmanitoba"}]},"news/canada/montreal":{title:"Follow CBC Montreal",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/CBCMontreal"},{socialNetwork:"x",url:"https://x.com/CBCMontreal"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcmontreal"}]},"news/canada/new-brunswick":{title:"Follow CBC New Brunswick",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/CBCNB"},{socialNetwork:"x",url:"https://x.com/CBCNB"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcnewbrunswick"}]},"news/canada/newfoundland-labrador":{title:"Follow CBC Newfoundland and Labrador",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbcnl"},{socialNetwork:"x",url:"https://x.com/cbcnl"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcnl"},{socialNetwork:"youtube",url:"https://www.youtube.com/c/cbcnl"}]},"news/canada/north":{title:"Follow CBC North",links:[{socialNetwork:"x",url:"https://x.com/CBCNorth"},{socialNetwork:"facebook",url:"https://www.facebook.com/CBCNorth/?ref=aymt_homepage_panel"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcnorth/"}]},"news/canada/nova-scotia":{title:"Follow CBC Nova Scotia",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/CBCNovaScotia"},{socialNetwork:"x",url:"https://x.com/CBCNS"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcns"}]},"news/canada/ottawa":{title:"Follow CBC Ottawa",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/CBCOttawa"},{socialNetwork:"x",url:"https://x.com/CBCOttawa"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcottawa"}]},"news/canada/prince-edward-island":{title:"Follow CBC PEI",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/CBCPEI"},{socialNetwork:"x",url:"https://x.com/CBCPEI"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcpei"}]},"news/canada/saskatchewan":{title:"Follow CBC Saskatchewan",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbcsask"},{socialNetwork:"tiktok",url:"https://www.tiktok.com/discover/CBC-News-Saskatchewan"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcsask"},{socialNetwork:"youtube",url:"https://www.youtube.com/channel/UCvdbpUpDg1cA4f_Jfg_-_TQ"}]},"news/canada/saskatchewan/community":{title:"Follow CBC Saskatchewan",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbcsask"},{socialNetwork:"tiktok",url:"https://www.tiktok.com/discover/CBC-News-Saskatchewan"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcsask"},{socialNetwork:"youtube",url:"https://www.youtube.com/channel/UCvdbpUpDg1cA4f_Jfg_-_TQ"}]},"news/canada/saskatoon":{title:"Follow CBC Saskatoon",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/CBCSaskatoon/"},{socialNetwork:"tiktok",url:"https://www.tiktok.com/discover/CBC-News-Saskatchewan"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcsask"},{socialNetwork:"youtube",url:"https://www.youtube.com/channel/UCvdbpUpDg1cA4f_Jfg_-_TQ"}]},"news/canada/toronto":{title:"Follow CBC Toronto",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/CBCToronto"},{socialNetwork:"x",url:"https://x.com/CBCToronto"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbctoronto"}]},"news/canada/windsor":{title:"Follow CBC Windsor",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/CBCWindsor"},{socialNetwork:"x",url:"https://x.com/CBCWindsor"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcwindsor/"}]},"news/marketplace":{title:"Follow Marketplace",links:[{socialNetwork:"facebook",url:"https://www.facebook.com/cbcmarketplace"},{socialNetwork:"x",url:"https://www.x.com/cbcmarketplace"},{socialNetwork:"instagram",url:"https://www.instagram.com/cbcmarketplace"},{socialNetwork:"youtube",url:"https://www.youtube.com/playlist?list=PLeyJPHbRnGaZmzkCwy3-8ykUZm_8B9kKM"}]},"news/politics/powerandpolitics":{title:"Follow Power & Politics",links:[{socialNetwork:"youtube",url:"https://www.youtube.com/playlist?list=PLeyJPHbRnGaZ1LGEJXLVGF87go3CuPlWo"},{socialNetwork:"x",url:"https://x.com/PnPCBC"},{socialNetwork:"facebook",url:"https://www.facebook.com/CBCPolitics/"},{socialNetwork:"instagram",url:"https://www.instagram.com/pnpcbc/"}]}},ht={facebook:{displayName:"Facebook",imageUrl:"https://i.cbc.ca/1.4586793.1521664140!/fileImage/httpImage/facebook.png",userAction:"Like"},gplus:{displayName:"Google+",imageUrl:"https://i.cbc.ca/1.4586806.1521664341!/fileImage/httpImage/reddit.png",userAction:"Join"},instagram:{displayName:"Instagram",imageUrl:"https://i.cbc.ca/1.4586808.1521664476!/fileImage/httpImage/instagram.png",userAction:"Follow"},linkedin:{displayName:"LinkedIn",imageUrl:"https://i.cbc.ca/1.4586847.1521665060!/fileImage/httpImage/linkedin.png",userAction:"Follow"},newsletter:{displayName:"the CBC Newsletter",imageUrl:"https://i.cbc.ca/1.4586850.1531937054!/fileImage/httpImage/newsletter.png",userAction:"Sign up for the best of"},pinterest:{displayName:"Pinterest",imageUrl:"https://i.cbc.ca/1.4586853.1521665185!/fileImage/httpImage/pinterest.png",userAction:"Follow"},reddit:{displayName:"reddit",imageUrl:"https://i.cbc.ca/1.4586856.1521665243!/fileImage/httpImage/reddit.png",userAction:"Subscribe to"},snapchat:{displayName:"Snapchat",imageUrl:"https://i.cbc.ca/1.4586861.1521665368!/fileImage/httpImage/snapchat.png",userAction:"Add"},x:{displayName:"X",imageUrl:"https://i.cbc.ca/1.4586863.1701965776!/fileImage/httpImage/x.png",userAction:"Follow"},youtube:{displayName:"YouTube",imageUrl:"https://i.cbc.ca/1.4586869.1521665472!/fileImage/httpImage/youtube.png",userAction:"Subscribe to"},tiktok:{displayName:"TikTok",imageUrl:"https://i.cbc.ca/1.6802267.1680707048!/fileImage/httpImage/tik-tok-icon.png",userAction:"Subscribe to"},podcast:{displayName:"Podcast",imageUrl:"https://i.cbc.ca/1.4586880.1521665636!/fileImage/httpImage/podcast.png",userAction:"Listen to"}};var mt=function(t){var e=void 0!==dt[t.path]?dt[t.path]:null,a="",o=[],r="";return e&&(a=e.title,r=a.replace("Follow ",""),o=e.links.map((function(t,e){var a=ht[t.socialNetwork],o=a.userAction,c=a.displayName,n="".concat(o," ").concat(r," on ").concat(c);return(0,O.jsx)("li",{children:(0,O.jsxs)(pt.default,{url:t.url,external:!0,children:[(0,O.jsx)(ut.Z,{url:"".concat(ht[t.socialNetwork].imageUrl),type:"followUs-image"}),(0,O.jsx)("span",{className:"a11y",children:n},"".concat(e,"-followUs-action"))]})},"".concat(e,"-followUs"))}))),function(t,e){if(!e||!e.length)return null;return(0,O.jsxs)("div",{className:"followUs",children:[(0,O.jsx)(M.X6,{className:"followUsHeadline",text:t,level:"h2",levelClassName:"h3"}),(0,O.jsx)("ul",{children:e})]})}(a,o)},ft=a(63751),bt=a(15664),kt=a(96486),gt=a(94481),yt=a(60121),vt=a(30663),Nt=a(60908);function Ct(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function St(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Ct(Object(a),!0).forEach((function(e){(0,c.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ct(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Pt=(0,i.memo)((function(t){var e=t.viewport,a=t.sidebarWidgets,o=(0,s.useSelector)((function(t){return t.app.baseSection})),r=(0,s.useSelector)((function(t){return t.app.path})),c=(0,s.useSelector)((function(t){return t.rightRail})),n=(0,s.useSelector)((function(t){return t.sectionalContent})),i=(0,vt.useParams)().contentId;a=a||(0,yt.hs)({path:r,rightrail:c,viewport:e,baseSection:o,sectionalContent:n,contentId:i});var l=(0,vt.useLocation)(),u=(0,Nt.S)(l).testAdHierarchy;var p=function(){if(n&&"sports/olympics"===r){var t=n["sports/olympics/promo"];if(t&&t.sectionList)return t.sectionList}return null}();function d(){return a.length?(0,O.jsx)("div",{className:"widgets",children:a}):null}function h(){var t="".concat(j.zV.hasOwnProperty(r)?j.zV[r].province:""," Votes Features"),e=(0,O.jsx)(M.X6,{text:t,level:"h2",levelClassName:"h3"}),a={section:"".concat(r,"/swimlane"),className:"electionSideBarSwimlane",headline:"",customTitleBar:e,itemCount:4,fetchSection:!0};return j.zV.hasOwnProperty(r)&&j.zV[r].swimlane?(0,O.jsx)(bt.Z,St({},a)):null}function m(){var t="viewportSmall"===e&&"homepage"===r,a="viewportLarge"===e?"right":"feed";return(0,O.jsx)(w.Z,{type:"bigbox",responsive:!0,test:u,targeting:{plc:a},lazy:t})}function f(){return p?(0,O.jsx)(gt.Z,{items:p,title:"FEATURED CONTENT",displayPolicy:new q,maxItems:3}):null}return"homepage"===r?(0,O.jsxs)("div",{className:"sidebar",children:[(0,O.jsx)(ft.Z,St({className:"rciWidget"},lt.Wn.radioCanadaInternational)),m(),f(),d(),h()]}):"news"===r?(0,O.jsxs)("div",{className:"sidebar",children:[(0,O.jsx)(ft.Z,St({className:"rciWidget"},lt.Wn.radioCanadaInternational)),m(),(0,O.jsx)(kt.Cs,{}),d()]}):(0,O.jsxs)("div",{className:"sidebar",children:[(0,O.jsx)(mt,{path:r}),m(),f(),d(),h()]})}));function Tt(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function xt(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?Tt(Object(a),!0).forEach((function(e){(0,c.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Tt(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var Zt=function(t){var e=(0,i.useState)(!1),a=(0,n.Z)(e,2),c=a[0],l=a[1],u=(0,i.useRef)(null),w=(0,s.useSelector)((function(t){return t.app.baseSection})),d=(0,s.useSelector)((function(t){return t.app.subSection})),h=(0,s.useSelector)((function(t){return t.app.path}));(0,i.useEffect)((function(){var t={domNode:u,callback:m};ot.ZP.registerWallpaper(t)}),[]);var m=function(t){c!==t&&l(t)},f=ct()("pageContentWrap",t.viewport,{wallpaperArea:c},t.className),b=ct()("contentAreaWrap",t.className,t.hasSidebar?"withSidebar":""),k=Array.isArray(t.content)?(0,r.Z)(t.content):null,y=null,N=null,C=function(){if(!t.contentPackage)return null;var e=t.contentPackage;return(0,i.createElement)(st.ZP,xt(xt({type:g.QU.TYPE_CONTENT_PACKAGE},e),{},{key:e.contentId}))}(),P=C&&function(){if(!t.contentPackage)return null;var e=t.contentPackage,a=e.packageComponents&&e.packageComponents.tertiary&&e.packageComponents.tertiary.length;return a}()?C:null,T=t.hasFeature&&!P?C:null;if(C){var x=k;k=(0,o.Z)(x).slice(1)}if(t.hasFeature){var B=t.hasTopStories&&!t.contentPackage?(0,Z.dx)(w):0,E=t.isDenseFeatured?t.cutoffIndex:0;if(t.hasNativeAd&&0!==t.content.length&&!t.nativeAdFailed){var A=t.contentPackage?4:5;k.splice(A,0,{key:"key-native-ad-".concat(A),type:it.B,responsive:!0,targeting:{plc:"feed"},callback:t.nativeAdCallback})}var F=(0,Z.rq)(k,B,t.hasHighlightedStories,E),U=(0,n.Z)(F,2);N=U[0],y=U[1]}else y=k;var _=function(){var e={viewport:t.viewport,hasTopStories:!t.contentPackage&&t.hasTopStories,contentPackage:t.contentPackage},a=null,o=null;switch(t.density){case v.S8.debug:a=new R,o=new S(e);break;case v.S8.high:o=a=new Q.Z;break;case v.S8.medium:o=a=new W;break;case v.S8.listing:o=a=new q;break;case v.S8.homepage:a=new H.Z,o=new $(e);break;case v.S8.rich:a=new J.Z,e.richPolicy=!0,o=new S(e);break;case v.S8.search:o=a=new at;break;default:a=new H.Z,o=new S(e)}return[a,o]}(),D=(0,n.Z)(_,2),L=D[0],Y=D[1],G=null,K=j.ku[h];return K&&(G=(0,O.jsx)(nt.Z,{header:K.header,viewport:t.viewport,section:K.section,itemCount:K.itemCount})),(0,O.jsxs)("div",{className:f,ref:u,id:t.id,children:[G,P,(0,O.jsxs)("section",{className:b,children:[(0,O.jsx)("div",{className:"withFlex",children:(0,O.jsxs)("div",{className:"contentArea",children:[t.beforeContent,function(e,a,o){if(t.hasFeature&&e){var r={baseSection:w,subSection:d,items:e,displayPolicy:a,path:h,viewport:t.viewport,hasTopStories:!t.contentPackage&&t.hasTopStories,hasHighlightedStories:t.hasHighlightedStories,cardClickHandler:t.cardClickHandler,isDenseFeatured:t.isDenseFeatured,cutoffIndex:t.cutoffIndex,contentPackage:o};return(0,O.jsx)(I,xt({},r))}}(N,Y,T),function(e,a){if(e&&e.length){var o={baseSection:w,subSection:d,items:e,displayPolicy:a,testAdHierarchy:t.testAdHierarchy,loadMore:t.loadMore,trackingSection:"contentlist",cardClickHandler:t.cardClickHandler,loadMoreFetch:t.loadMoreFetch},r=t.hiddenA11yHeader?"a11y":"",c=t.listHeading?t.hiddenA11yHeader?(0,O.jsx)("h2",{className:"listHeading ".concat(r),children:t.listHeading}):(0,O.jsx)(M.OT,{text:t.listHeading}):null;return(0,O.jsxs)("div",{className:"contentListWrapper",children:[c,(0,O.jsx)(p.Z,xt({},o))]})}}(y,L)]})}),t.hasSidebar&&(0,O.jsx)("div",{className:"withFlex",children:(0,O.jsx)(Pt,{viewport:t.viewport,sidebarWidgets:t.sidebarWidgets})})]})]})};Zt.propTypes={content:u().array,density:u().string,hasFeature:u().bool,hasSidebar:u().bool,testAdHierarchy:u().oneOfType([u().string,u().bool]),hasTopStories:u().bool,hasHighlightedStories:u().bool,listHeading:u().string,hiddenA11yHeading:u().bool,className:u().string,sidebarWidgets:u().array,hasNativeAd:u().bool,nativeAdCallback:u().func,nativeAdFailed:u().bool,cardClickHandler:u().func,isDenseFeatured:u().bool,cutoffIndex:u().number,beforeContent:u().element,contentPackage:u().object,loadMoreFetch:u().func},Zt.defaultProps={content:null,density:v.S8.default,hasFeature:!0,hasSidebar:!0,hasTopStories:!1,hasHighlightedStories:!0,listHeading:null,hiddenA11yHeading:!1,className:"",hasNativeAd:!1,nativeAdCallback:null,nativeAdFailed:null,cardClickHandler:function(){},isDenseFeatured:!1,cutoffIndex:v.yo,beforeContent:null,contentPackage:null,loadMoreFetch:function(){}};var jt=(0,i.memo)(Zt)},88277:function(t,e,a){a.d(e,{Z:function(){return d}});var o=a(15671),r=a(43144),c=a(82963),n=a(61120),i=a(60136),s=(a(53182),a(79321),a(95763),a(26817),a(50155),a(51335),a(83234),a(92435),a(87201),a(23503),a(72891),a(21934),a(81466),a(40703),a(40627)),l=a(34325),u=a(19227);function p(t,e,a){return e=(0,n.Z)(e),(0,c.Z)(t,w()?Reflect.construct(e,a||[],(0,n.Z)(t).constructor):e.apply(t,a))}function w(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(w=function(){return!!t})()}var d=function(t){function e(){var t;return(0,o.Z)(this,e),(t=p(this,e)).policyName="HighDensityPolicy",t}return(0,i.Z)(e,t),(0,r.Z)(e,[{key:"buildCardTypesMap",value:function(){this.cardTypesMap=new Map,this.cardTypesMap.set(u.Zm,s.QU.TYPE_TEXT)}}]),e}(l.Z)},51111:function(t,e,a){a.d(e,{Z:function(){return P}});a(58109),a(95566),a(68438),a(83464),a(19496);var o=a(4942),r=a(92972),c=a.n(r),n=a(33568),i=a(97240),s=a(15671),l=a(43144),u=a(82963),p=a(61120),w=a(60136),d=(a(53182),a(79321),a(95763),a(26817),a(50155),a(51335),a(83234),a(92435),a(87201),a(23503),a(72891),a(21934),a(81466),a(40703),a(40627)),h=a(34325),m=a(19227);function f(t,e,a){return e=(0,p.Z)(e),(0,u.Z)(t,b()?Reflect.construct(e,a||[],(0,p.Z)(t).constructor):e.apply(t,a))}function b(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(b=function(){return!!t})()}var k=function(t){function e(t){var a,o;return(0,s.Z)(this,e),(o=f(this,e)).policyName="TopStoriesPolicy",o.contentPackage=t.contentPackage||(null===(a=t.displayPolicy)||void 0===a?void 0:a.contentPackage),o.viewportSmall="viewportSmall"===t.viewport,o}return(0,w.Z)(e,t),(0,l.Z)(e,[{key:"buildCardTypesMap",value:function(){var t=this.viewportSmall?d.QU.TYPE_DEFAULT:d.QU.TYPE_LISTING_HORIZONTAL,e=this.contentPackage?t:d.QU.TYPE_FEATURED_REVERSED;this.cardTypesMap=new Map,this.cardTypesMap.set(0,e),this.cardTypesMap.set(m.Zm,t)}}]),e}(h.Z),g=a(88277),y=a(80361),v=5,N=a(56552);function C(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function S(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?C(Object(a),!0).forEach((function(e){(0,o.Z)(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):C(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function P(t){if(!t.items)return null;var e="viewportSmall"===t.viewport,a=t.items.slice(0,v),o=t.items.slice(v,m.yo),r=e?new y.Z:new g.Z,c={baseSection:t.baseSection,subSection:t.subSection,viewport:t.viewport,loadMore:!1,cardClickHandler:t.cardClickHandler};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(i.Z,{level:"h2",hidden:!0,children:t.title}),(0,N.jsxs)("div",{className:"featuredNews sclt-featuredTopStoriesDense",children:[(0,N.jsx)("div",{className:"featuredNewsContentPackage",children:t.contentPackage}),(0,N.jsxs)("div",{className:"featuredTopStories",children:[(0,N.jsx)("div",{className:"primaryTopStories","data-cy":"topStoriesFeaturedNews",children:(0,N.jsx)(n.Z,S({items:a,displayPolicy:new k(t),trackingSection:"featuredNewsPrimaryTopStoriesContentList"},c))}),t.mobileAd,(0,N.jsx)("div",{className:"secondaryTopStories",children:(0,N.jsx)(n.Z,S({items:o,displayPolicy:r,trackingSection:"featuredNewsSecondaryTopStoriesContentList"},c))})]})]})]})}P.propTypes={items:c().array.isRequired,baseSection:c().string,subSection:c().string,viewport:c().string,path:c().string,hasNativeAd:c().bool,cardClickHandler:c().func,mobileAd:c().object,contentPackage:c().object,title:c().string},P.defaultProps={items:null,baseSection:"news",subSection:"",viewport:"viewportLarge",path:"",hasNativeAd:!1,cardClickHandler:function(){},mobileAd:null,contentPackage:null,title:"Featured Content"}},70847:function(t,e,a){var o=a(32747),r=a(92972),c=a.n(r),n=a(14507),i=a.n(n),s=a(25641),l=a(7636),u=a(10078),p=a(88101),w=a(32532),d=a(8375),h=a(56552);function m(t){var e=t.header,a=t.itemCount,r=t.section,c=t.viewport,n=(0,l.useSelector)((function(t){return t.sectionalContent})),m=(0,l.useSelector)((function(t){return t.app.path})),f=(0,l.useDispatch)();(0,o.useEffect)((function(){f((0,u.md)(r,a))}),[m]);var b=n[r],k=i()(w.Z.slider,d.Z.slider,(0,p.C_)("section",r));return(0,h.jsx)("div",{className:k,children:(0,h.jsx)("div",{className:w.Z.carouselContainer,children:(0,h.jsx)(s.Z,{header:e,list:b&&b.sectionList,viewport:c})})})}m.propTypes={header:c().string,viewport:c().string},m.defaultProps={header:"",viewport:"viewportLarge"},e.Z=m},32532:function(t,e){e.Z={slider:"slider-b0Oy0",carouselContainer:"carouselContainer-vZDfK",landingSports:"landingSports-SxWyy","section-sports-calgarystampede":"section-sports-calgarystampede-P_Hm7"}}}]);
//# sourceMappingURL=../../sourcemaps/oc-AsyncContentArea.b36da3a23794baaefb77.js.map