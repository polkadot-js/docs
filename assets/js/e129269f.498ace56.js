"use strict";(self.webpackChunkpolkadot_js=self.webpackChunkpolkadot_js||[]).push([[9763],{4137:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(4137)),o=["components"],s={title:"Multi queries"},l=void 0,u={unversionedId:"api/start/api.query.multi",id:"api/start/api.query.multi",title:"Multi queries",description:"In a number of applications, it is useful to monitor a number of like-queries at the same time. For instance, we may want to track the balances for a list of accounts we have. The api.query interfaces allows this via the .multi subscription call.",source:"@site/docs/api/start/api.query.multi.md",sourceDirName:"api/start",slug:"/api/start/api.query.multi",permalink:"/docs/api/start/api.query.multi",draft:!1,editUrl:"https://github.com/polkadot-js/docs/edit/master/docs/api/start/api.query.multi.md",tags:[],version:"current",frontMatter:{title:"Multi queries"},sidebar:"reference",previous:{title:"Query subscriptions",permalink:"/docs/api/start/api.query.subs"},next:{title:"Query extras",permalink:"/docs/api/start/api.query.other"}},c={},p=[{value:"Multi queries, same type",id:"multi-queries-same-type",level:2},{value:"Multi queries, distinct types",id:"multi-queries-distinct-types",level:2},{value:"Rounding out queries",id:"rounding-out-queries",level:2}],d={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In a number of applications, it is useful to monitor a number of like-queries at the same time. For instance, we may want to track the balances for a list of accounts we have. The ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query")," interfaces allows this via the ",(0,i.kt)("inlineCode",{parentName:"p"},".multi")," subscription call."),(0,i.kt)("h2",{id:"multi-queries-same-type"},"Multi queries, same type"),(0,i.kt)("p",null,"Where possible, the use of multi queries are encouraged since it tracks a number of state entries over a single RPC call, instead of making a call for each single item. In addition it allows you to have a single callback to track changes. For queries of the same type we can use ",(0,i.kt)("inlineCode",{parentName:"p"},".multi"),", for example to retrieve the balances of a number of accounts at once -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Subscribe to balance changes for 2 accounts, ADDR1 & ADDR2 (already defined)\nconst unsub = await api.query.system.account.multi([ADDR1, ADDR2], (balances) => {\n  const [{ data: balance1 }, { data: balance2 }] = balances;\n\n  console.log(`The balances are ${balance1.free} and ${balance2.free}`);\n});\n")),(0,i.kt)("p",null,"A couple of items to note in the example above: we don't call ",(0,i.kt)("inlineCode",{parentName:"p"},"account")," directly, but rather ",(0,i.kt)("inlineCode",{parentName:"p"},"account.multi"),". We pass the addresses we want to query as an array, and the length thereof would depend on the number of addresses we want to query. As an extended example, we can track the balances of a list of validators,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Retrieve a snapshot of the validators\n// (all active & waiting based on ValidatorPrefs storage)\nconst validatorKeys = await api.query.staking.validators.keys();\n\n// Subscribe to the balances for these accounts\nconst unsub = await api.query.balances.account.multi(validatorKeys, (balances) => {\n  console.log(`The nonce and free balances are: ${balances.map(([nonce, { free }]) => [nonce, free])}`);\n});\n")),(0,i.kt)("p",null,"The above example does not subscribe to the validators explicitly, but only gets a snapshot and uses this into the future. It should be trivially extendable to subscribe to the validators, track which one have entered or left and then subscribe to balances as they change through the next blocks."),(0,i.kt)("h2",{id:"multi-queries-distinct-types"},"Multi queries, distinct types"),(0,i.kt)("p",null,"The previous ",(0,i.kt)("inlineCode",{parentName:"p"},".multi")," examples assumes that we do queries for the same types, i.e. we retrieve the balances for a number of accounts. However, there is also a need to retrieve various distinct types, as an example we would like to track the block timestamp in addition to the nonce and balance of a specific account. To cater for this, the api has a specific ",(0,i.kt)("inlineCode",{parentName:"p"},"api.queryMulti")," interface that can be used to perform this query -"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"...\n\n// Subscribe to the timestamp, our index and balance\nconst unsub = await api.queryMulti([\n  api.query.timestamp.now,\n  [api.query.system.account, ADDR]\n], ([now, { nonce, data: balance }]) => {\n  console.log(`${now}: balance of ${balance.free} and a nonce of ${nonce}`);\n});\n")),(0,i.kt)("p",null,"The above example certainly does not quite look as ergonomic and clean, but the API needs to understand (a) which are all the calls we need to make and (b) the calls and their params (if required). So breaking it down -"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api.query.timestamp.now")," - the timestamp is passed naked without any params. Also note that we do not call it while passing, but rather only provides a reference to the function, i.e. we do not have the expected ",(0,i.kt)("inlineCode",{parentName:"li"},"()")," at the end. (This could also be of the form ",(0,i.kt)("inlineCode",{parentName:"li"},"[api.query.timestamp.now]"),", aligning with subsequent entries)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"[api.query.system.account, ADDR]")," - the nonce & balance query is passed as an array containing the function (once again naked), followed by the parameters that apply.")),(0,i.kt)("h2",{id:"rounding-out-queries"},"Rounding out queries"),(0,i.kt)("p",null,"To round out our query introduction, there are a ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/start/api.query.other"},"number of other utilities and calls available")," that allows the ",(0,i.kt)("inlineCode",{parentName:"p"},"api.query")," user to perform certain tasks, such as querying state at a specific block. These are covered in the next section."))}m.isMDXComponent=!0}}]);