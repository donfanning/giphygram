(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a(71)},48:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),c=a.n(i),o=a(2),s=a(3),l=a(5),u=a(4),p=a(6),h=a(74),d=a(13),m=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},e)))}}]),t}(r.a.Component),f=a(75),b=a(72),g=a(76),E=a(1),O=a.n(E),_=O.a.shape({url:O.a.string,width:O.a.string,height:O.a.string,size:O.a.string,mp4:O.a.string,mp4_size:O.a.string,webp:O.a.string,webp_size:O.a.string}),v=O.a.shape({fixed_height_still:_,original_still:_,fixed_width:_,fixed_height_small_still:_,fixed_height_downsampled:_,preview:_,fixed_height_small:_,downsized_still:_,downsized:_,downsized_large:_,fixed_width_small_still:_,preview_webp:_,fixed_width_still:_,fixed_width_small:_,downsized_small:_,fixed_width_downsampled:_,downsized_medium:_,original:_,fixed_height:_,looping:_,original_mp4:_,preview_gif:_}),j=(O.a.shape({title:O.a.string,_score:O.a.number,type:O.a.string,id:O.a.string,slug:O.a.string,url:O.a.string,bitly_gif_url:O.a.string,bitly_url:O.a.string,embed_url:O.a.string,username:O.a.string,source:O.a.string,rating:O.a.string,content_url:O.a.string,source_tld:O.a.string,source_post_url:O.a.string,is_sticker:O.a.number,import_datetime:O.a.string,trending_datetime:O.a.string,images:v}),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.gif;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("a",{href:e.url},r.a.createElement("img",{border:"0",className:"card-img-top",src:e.images.fixed_width.url,alt:e.title,title:e.title})))}}]),t}(r.a.Component)),y=(a(48),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"spinner-container mb-3 text-center"},r.a.createElement("div",{className:"spinner"}))}}]),t}(r.a.Component)),S=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.gifs;if(e.isLoading)return r.a.createElement(y,null);var a=t.map(function(e){return r.a.createElement(j,{gif:e,key:e.id})});return r.a.createElement("div",{className:"mb-3"},a)}}]),t}(r.a.Component);S.defaultProps={gifs:[],isLoading:!1};var R=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onScroll=function(){var e=a.props,t=e.activationDistance,n=e.onFetchMore,r=document.body.offsetHeight;window.innerHeight+window.scrollY+t>=r&&n()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll,!1)}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",null,e)}}]),t}(r.a.Component);R.defaultProps={onFetchMore:function(){},activationDistance:50};var C=a(9),A=a(34),P=a.n(A),w=Object(C.a)({},Object({NODE_ENV:"production",PUBLIC_URL:"/giphygram",REACT_APP_BASE_URL:"/giphygram",REACT_APP_GIPHY_API_KEY:"CdRKiCMbTnt9CkZTZ0lGukSczk6iT4Z6",REACT_APP_GIPHY_API_HOST:"https://api.giphy.com"})),T=w.REACT_APP_BASE_URL,H=w.REACT_APP_GIPHY_API_KEY,k=w.REACT_APP_GIPHY_API_HOST,M=w.HTTP_REQUEST_TIMEOUT,F=30,N=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return P.a.get(e,Object(C.a)({},this.getDefaultAxiosConfig(),{params:t}))}},{key:"getDefaultAxiosConfig",value:function(){return{timeout:M}}}]),e}(),U={UPDATE_SEARCH_QUERY:"UPDATE_SEARCH_QUERY",UPDATE_SEARCH_OFFSET:"UPDATE_SEARCH_OFFSET"};var L={query:"",limit:F,offset:0,rating:"G",lang:"en"},x=function(e){return e.searchParams},q=function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,null,[{key:"search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,a=void 0===t?L.query:t,n=e.limit,r=void 0===n?L.limit:n,i=e.offset,c=void 0===i?L.offset:i,o=e.rating,s=void 0===o?L.rating:o,l=e.lang,u={api_key:H,q:a,limit:r,offset:c,rating:s,lang:void 0===l?L.lang:l};return N.get("".concat(k,"/v1/gifs/search"),u)}}]),e}(),D={SEARCH:"SEARCH",SEARCH_MORE:"SEARCH_MORE",SEARCH_RESET:"SEARCH_RESET"};var I=a(38),Y=a(12),z={data:[],pagination:{},meta:{},isLoading:!1,isFetchingMore:!1,error:null},G=function(e){return e.searchResults},Q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onFetchMore=function(){var e=a.props,t=e.isFetchingMore,n=e.searchMore;t||n()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.searchResults,a=e.isLoading,n=e.isFetchingMore?r.a.createElement(y,null):null;return r.a.createElement(R,{onFetchMore:this.onFetchMore},r.a.createElement(S,{gifs:t,isLoading:a}),n)}}]),t}(r.a.Component);Q.defaultProps={searchResults:[],isLoading:!1,isFetchingMore:!1};var B={searchMore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F;return function(t,a){var n=a(),r=x(n),i=r.offset+e;r.offset=i,function(e){return{type:U.UPDATE_SEARCH_OFFSET,payload:e}}(i)(t),t({type:D.SEARCH_MORE,payload:q.search(r)})}}},K=Object(d.b)(function(e){var t=G(e);return{searchResults:t.data||[],isLoading:t.isLoading||!1,isFetchingMore:t.isFetchingMore||!1}},B)(Q),Z=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.total;return e?r.a.createElement("div",{className:"mb-3"},r.a.createElement("small",null,"Total results: \xa0",r.a.createElement("span",{className:"badge badge-dark"},e))):null}}]),t}(r.a.Component);Z.defaultProps={total:null};var J=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.total;return r.a.createElement(Z,{total:e})}}]),t}(r.a.Component);J.defaultProps={total:0};var V=Object(d.b)(function(e){var t=G(e),a=null;return!1===t.isLoading&&t.pagination&&Object.prototype.hasOwnProperty.call(t.pagination,"total_count")&&(a=t.pagination.total_count),{total:a}})(J),X=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(V,null),r.a.createElement(K,null))}}]),t}(r.a.Component),W=Object(g.a)(function(){return r.a.createElement(f.a,null,r.a.createElement(b.a,{path:"/",component:X}))}),$=a(73),ee=(a(68),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onQueryChange=function(e){(0,a.props.onSearchUpdate)(e.target.value)},a.onSearchSubmit=function(e){e.preventDefault();var t=a.props;(0,t.onSearchSubmit)(t.query)},a.onSearchReset=function(e){e.preventDefault(),(0,a.props.onSearchReset)()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.query,t=e&&e.length?r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-light search-reset",type:"button",onClick:this.onSearchReset,title:"Reset search"},r.a.createElement("span",{className:"oi oi-x"}))):null;return r.a.createElement("form",{className:"form",onSubmit:this.onSearchSubmit},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{className:"form-control search-input",type:"search",placeholder:"Search for GIFs",value:e,onChange:this.onQueryChange,spellCheck:!1,autoCapitalize:"off",autoComplete:"off",maxLength:512}),t,r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-dark search-submit",type:"submit",onClick:this.onSearchSubmit,title:"Search"},r.a.createElement("span",{className:"oi oi-magnifying-glass"})))))}}]),t}(r.a.Component));ee.defaultProps={query:"",onSearchSubmit:function(){},onSearchUpdate:function(){},onSearchReset:function(){}};var te=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onSearchSubmit=function(e){(0,a.props.search)({query:e})},a.onSearchUpdate=function(e){(0,a.props.updateSearchQuery)(e)},a.onSearchReset=function(){(0,a.props.searchReset)()},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.query;return r.a.createElement(ee,{query:e,onSearchSubmit:this.onSearchSubmit,onSearchUpdate:this.onSearchUpdate,onSearchReset:this.onSearchReset})}}]),t}(r.a.Component);te.defaultProps={query:""};var ae={search:function(e){return{type:D.SEARCH,payload:q.search(e)}},searchReset:function(){return{type:D.SEARCH_RESET,payload:null}},updateSearchQuery:function(e){return{type:U.UPDATE_SEARCH_QUERY,payload:e}}},ne=Object(d.b)(function(e){return{query:x(e).query}},ae)(te),re=(a(69),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"text-center italic mt-5 mb-5 logo"},r.a.createElement($.a,{to:"/",className:"text-dark"},"GiphyGram")),r.a.createElement("div",{className:"mb-3"},r.a.createElement(ne,null)))}}]),t}(r.a.Component)),ie=Object(g.a)(re),ce=(a(70),O.a.shape({dispatch:O.a.func.isRequired,getState:O.a.func.isRequired,subscribe:O.a.func.isRequired,replaceReducer:O.a.func.isRequired}),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.store;return r.a.createElement(d.a,{store:e},r.a.createElement(h.a,{basename:T},r.a.createElement(m,null,r.a.createElement(ie,null),r.a.createElement(W,null))))}}]),t}(r.a.Component)),oe=a(14),se=a(37),le=Object(oe.c)({searchResults:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,a=t.payload&&t.payload.data||null;switch(t.type){case D.SEARCH_RESET:return Object(C.a)({},z);case"".concat(D.SEARCH,"_").concat(Y.a.Pending):return Object(C.a)({},e,{isLoading:!0,isFetchingMore:!1,error:null});case"".concat(D.SEARCH_MORE,"_").concat(Y.a.Pending):return Object(C.a)({},e,{isLoading:!1,isFetchingMore:!0,error:null});case"".concat(D.SEARCH,"_").concat(Y.a.Fulfilled):return Object(C.a)({},e,{data:a.data,pagination:a.pagination,meta:a.meta,isLoading:!1,isFetchingMore:!1,error:null});case"".concat(D.SEARCH_MORE,"_").concat(Y.a.Fulfilled):return Object(C.a)({},e,{data:Object(I.a)(e.data).concat(a.data),pagination:a.pagination,meta:a.meta,isLoading:!1,isFetchingMore:!1,error:null});case"".concat(D.SEARCH,"_").concat(Y.a.Rejected):return Object(C.a)({},z,{error:!0});case"".concat(D.SEARCH_MORE,"_").concat(Y.a.Rejected):return Object(C.a)({},e,{isLoading:!1,isFetchingMore:!1,error:!0});default:return e}},searchParams:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D.SEARCH_RESET:return Object(C.a)({},L);case U.UPDATE_SEARCH_QUERY:return Object(C.a)({},e,{query:t.payload});case U.UPDATE_SEARCH_OFFSET:return Object(C.a)({},e,{offset:t.payload});default:return e}}}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||oe.d,pe=Object(oe.a)(Y.b,se.a),he=Object(oe.e)(le,ue(pe)),de=document.getElementById("root");c.a.render(r.a.createElement(ce,{store:he}),de)}},[[39,1,2]]]);
//# sourceMappingURL=main.1c4db4c3.chunk.js.map