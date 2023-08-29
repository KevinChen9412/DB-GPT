(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[504],{72981:function(e,a,s){Promise.resolve().then(s.bind(s,25224))},25224:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return B},isFileDb:function(){return A}});var l,t=s(9268),r=s(86006),n=s(2637),i=s(30741),c=s(21628),d=s(87451),o=s(50946),b=s(29274),m=s(68224),u=s(25571),p=s(76447),h=s(50148),f=s(86401),x=s(56959),y=s(44244),g=s(24214);let j=(e,a)=>e.then(e=>{let{data:s}=e;if(!s)throw Error("Network Error!");if(!s.success&&a&&"*"!==a&&s.err_code&&a.includes(s.err_code)){var l;throw Error(null!==(l=s.err_msg)&&void 0!==l?l:"")}return[null,s.data,s,e]}).catch(e=>[e,null,null,null]),v=()=>P("/chat/db/list"),Z=()=>P("/chat/db/support/type"),N=e=>q("/chat/db/delete?db_name=".concat(e),void 0),_=e=>q("/chat/db/edit",e),w=e=>q("/chat/db/add",e);var k=s(52040);let C=g.Z.create({baseURL:"".concat(null!==(l=k.env.API_BASE_URL)&&void 0!==l?l:"","/api/v1"),timeout:1e4}),P=(e,a,s)=>C.get(e,{params:a,...s}),q=(e,a,s)=>C.post(e,a,s);var S=function(e){let{open:a,dbTypeList:s,editValue:l,dbNames:n,onClose:d,onSuccess:b}=e,[m,u]=(0,r.useState)(!1),[p]=h.Z.useForm(),g=h.Z.useWatch("db_type",p),v=(0,r.useMemo)(()=>A(s,g),[s,g]);(0,r.useEffect)(()=>{l&&p.setFieldsValue({...l})},[l]),(0,r.useEffect)(()=>{a||p.resetFields()},[a]);let Z=async e=>{let{db_host:a,db_path:s,db_port:t,...r}=e;if(!l&&n.some(e=>e===r.db_name)){c.ZP.error("The database already exists!");return}let i={db_host:v?void 0:a,db_port:v?void 0:t,file_path:v?s:void 0,...r};u(!0);try{let[e]=await j((l?_:w)(i));if(e){c.ZP.error(e.message);return}c.ZP.success("success"),null==b||b()}catch(e){c.ZP.error(e.message)}finally{u(!1)}};return(0,t.jsx)(i.Z,{open:a,width:400,title:l?"Edit DB Connect":"Create DB Connenct",maskClosable:!1,footer:null,onCancel:d,children:(0,t.jsxs)(h.Z,{form:p,className:"pt-2",labelCol:{span:6},labelAlign:"left",onFinish:Z,children:[(0,t.jsx)(h.Z.Item,{name:"db_type",label:"DB Type",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(f.Z,{"aria-readonly":!!l,disabled:!!l,options:s})}),(0,t.jsx)(h.Z.Item,{name:"db_name",label:"DB Name",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(x.default,{readOnly:!!l,disabled:!!l})}),(0,t.jsx)(h.Z.Item,{name:"db_user",label:"Username",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(x.default,{})}),(0,t.jsx)(h.Z.Item,{name:"db_pwd",label:"Password",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(x.default,{type:"password"})}),v?(0,t.jsx)(h.Z.Item,{name:"db_path",label:"Path",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(x.default,{})}):(0,t.jsx)(h.Z.Item,{name:"db_host",label:"Host",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(x.default,{})}),!v&&(0,t.jsx)(h.Z.Item,{name:"db_port",label:"Port",className:"mb-3",rules:[{required:!0}],children:(0,t.jsx)(y.Z,{min:1,step:1,max:65535})}),(0,t.jsx)(h.Z.Item,{name:"comment",label:"Remark",className:"mb-3",children:(0,t.jsx)(x.default,{})}),(0,t.jsxs)(h.Z.Item,{className:"flex flex-row-reverse pt-1 mb-0",children:[(0,t.jsx)(o.ZP,{htmlType:"submit",type:"primary",size:"middle",className:"mr-1",loading:m,children:"Save"}),(0,t.jsx)(o.ZP,{size:"middle",onClick:d,children:"Cancel"})]})]})})},E=s(71563),F=function(e){let{info:a,onClick:s}=e,l=(0,r.useCallback)(()=>{a.disabled||null==s||s()},[a.disabled,a.value,s]);return(0,t.jsxs)("div",{className:"relative flex flex-col py-4 px-4 w-72 h-32 cursor-pointer rounded-lg justify-between text-black bg-white border-gray-200 border hover:shadow-md dark:border-gray-600 dark:bg-black dark:text-white dark:hover:border-white transition-all ".concat(a.disabled?"grayscale":""),onClick:l,children:[(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("img",{className:"w-11 h-11 rounded-full mr-4 border border-gray-200",src:a.icon,alt:a.label}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("h2",{className:"text-sm font-semibold",children:a.label}),a.disabled&&(0,t.jsx)("div",{className:"mt-[2px] rounded-full font-normal bg-gray-100 text-xs h-5 flex items-center px-2 dark:bg-gray-800",children:"Comming soon"})]})]}),(0,t.jsx)(E.Z,{title:a.desc,children:(0,t.jsx)("p",{className:"text-sm text-gray-500 font-normal line-clamp-2",children:a.desc})})]})},D=s(42781),I=s(8835),L=s(64185);let M={mysql:{label:"Mysql",icon:"/icons/mysql.png",desc:"Fast, reliable, scalable open-source relational database management system."},mssql:{label:"Mssql",icon:"/icons/mssql.png",desc:"Powerful, scalable, secure relational database system by Microsoft."},duckdb:{label:"Duckdb",icon:"/icons/duckdb.png",desc:"In-memory analytical database with efficient query processing."},sqlite:{label:"Sqlite",icon:"/icons/db.png",desc:"Lightweight embedded relational database with simplicity and portability."},clickhouse:{label:"Clickhouse",icon:"/icons/clickhouse.png",desc:"Columnar database for high-performance analytics and real-time queries."},oracle:{label:"Oracle",icon:"/icons/oracle.png",desc:"Robust, scalable, secure relational database widely used in enterprises."},access:{label:"Access",icon:"/icons/db.png",desc:"Easy-to-use relational database for small-scale applications by Microsoft."},mongodb:{label:"Mongodb",icon:"/icons/mongodb.png",desc:"Flexible, scalable NoSQL document database for web and mobile apps."},db2:{label:"DB2",icon:"/icons/db.png",desc:"Scalable, secure relational database system developed by IBM."},hbase:{label:"HBase",icon:"/icons/db.png",desc:"Distributed, scalable NoSQL database for large structured/semi-structured data."},redis:{label:"Redis",icon:"/icons/db.png",desc:"Fast, versatile in-memory data structure store as cache, DB, or broker."},cassandra:{label:"Cassandra",icon:"/icons/db.png",desc:"Scalable, fault-tolerant distributed NoSQL database for large data."},couchbase:{label:"Couchbase",icon:"/icons/db.png",desc:"High-performance NoSQL document database with distributed architecture."},postgresql:{label:"Postgresql",icon:"/icons/db.png",desc:"Powerful open-source relational database with extensibility and SQL standards."}};function A(e,a){var s;return null===(s=e.find(e=>e.value===a))||void 0===s?void 0:s.isFileDb}var B=function(){let[e,a]=(0,r.useState)([]),[s,l]=(0,r.useState)([]),[h,f]=(0,r.useState)(!1),[x,y]=(0,r.useState)({open:!1}),[g,_]=(0,r.useState)({open:!1}),w=async()=>{let[e,a]=await j(Z());l(null!=a?a:[])},k=async()=>{f(!0);let[e,s]=await j(v());a(null!=s?s:[]),f(!1)},C=(0,r.useMemo)(()=>{let e=s.map(e=>{let{db_type:a,is_file_db:s}=e;return{...M[a],value:a,isFileDb:s}}),a=Object.keys(M).filter(a=>!e.some(e=>e.value===a)).map(e=>({...M[e],value:M[e].label,disabled:!0}));return[...e,...a]},[s]),P=e=>{y({open:!0,info:e})},q=e=>{i.Z.confirm({title:"Tips",content:"Do you Want to delete the ".concat(e.db_name,"?"),onOk:()=>new Promise(async(a,s)=>{try{let[l]=await j(N(e.db_name));if(l){c.ZP.error(l.message),s();return}c.ZP.success("success"),k(),a()}catch(e){c.ZP.error(e.message),s()}})})},E=(0,r.useMemo)(()=>{let a=C.reduce((a,s)=>(a[s.value]=e.filter(e=>e.db_type===s.value),a),{});return a},[e,C]);(0,n.Z)(async()=>{await k(),await w()},[]);let A=a=>{let s=e.filter(e=>e.db_type===a.value);_({open:!0,dbList:s,name:a.label,type:a.value})};return(0,t.jsxs)("div",{className:"relative p-6 bg-[#FAFAFA] dark:bg-transparent min-h-full overflow-y-auto",children:[(0,t.jsxs)(d.Z,{spinning:h,className:"dark:bg-black dark:bg-opacity-5",children:[(0,t.jsx)("div",{className:"px-1 mb-4",children:(0,t.jsx)(o.ZP,{type:"primary",className:"flex items-center",icon:(0,t.jsx)(D.Z,{}),onClick:()=>{y({open:!0})},children:"Create"})}),(0,t.jsx)("div",{className:"flex flex-wrap",children:C.map(e=>(0,t.jsx)(b.Z,{className:"mr-4 mb-4",count:E[e.value].length,children:(0,t.jsx)(F,{info:e,onClick:()=>{A(e)}})},e.value))})]}),(0,t.jsx)(S,{open:x.open,dbTypeList:C,editValue:x.info,dbNames:e.map(e=>e.db_name),onSuccess:()=>{y({open:!1,info:void 0}),k()},onClose:()=>{y({open:!1,info:void 0})}}),(0,t.jsx)(m.Z,{title:g.name,placement:"right",onClose:()=>{_({open:!1})},open:g.open,children:g.type&&E[g.type]&&E[g.type].length?(0,t.jsx)(t.Fragment,{children:E[g.type].map(e=>(0,t.jsxs)(u.Z,{title:e.db_name,extra:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.Z,{className:"mr-2",style:{color:"#1b7eff"},onClick:()=>{P(e)}}),(0,t.jsx)(L.Z,{style:{color:"#ff1b2e"},onClick:()=>{q(e)}})]}),className:"mb-4",children:[(0,t.jsxs)("p",{children:["host: ",e.db_host]}),(0,t.jsxs)("p",{children:["username: ",e.db_user]}),(0,t.jsxs)("p",{children:["port: ",e.db_port]}),!!e.db_path&&(0,t.jsxs)("p",{children:["path: ",e.db_path]})]},e.db_name))}):(0,t.jsx)(p.Z,{image:p.Z.PRESENTED_IMAGE_DEFAULT,children:(0,t.jsx)(o.ZP,{type:"primary",className:"flex items-center mx-auto",icon:(0,t.jsx)(D.Z,{}),onClick:()=>{y({open:!0})},children:"Create Now"})})})]})}}},function(e){e.O(0,[355,358,649,191,715,569,579,743,959,741,375,253,769,744],function(){return e(e.s=72981)}),_N_E=e.O()}]);