webpackJsonp([4],{"4Zld":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("4YfN"),n=i.n(s),o=i("fUgm"),a=i("D/cR"),r=i("BGi1"),l={props:["info"],computed:n()({},Object(o.c)({menuList:"menu/list",cateList:"cate/list",goodsList:"goods/list"})),components:{},data:function(){return{time:[],form:{first_cateid:"",second_cateid:"",title:"",begintime:"",endtime:"",goodsid:"",status:1},secondCateArr:[]}},methods:n()({},Object(o.b)({requestCateList:"cate/requestList",requestGoodsList:"goods/requestList",requestSeckillList:"seckill/requestList"}),{changeFirst:function(t){var e=this,i=this.cateList.findIndex(function(t){return t.id==e.form.first_cateid});this.secondCateArr=this.cateList[i].children,t||(this.form.second_cateid="")},changeSecondId:function(){this.form.goodsid="",this.requestGoodsList({fid:this.form.first_cateid,sid:this.form.second_cateid})},empty:function(){this.form={first_cateid:"",second_cateid:"",title:"",begintime:"",endtime:"",goodsid:"",status:1},this.time=[]},cancel:function(){this.info.show=!1,this.info.isEdit&&this.empty()},add:function(){var t=this;this.form.begintime=new Date(this.time[0]).getTime(),this.form.endtime=new Date(this.time[1]).getTime(),Object(a.J)(this.form).then(function(e){200==e.data.code?(t.empty(),t.cancel(),Object(r.a)("添加成功"),t.requestSeckillList()):Object(r.b)(e.data.msg)})},getDetail:function(t){var e=this;Object(a.L)({id:t}).then(function(i){e.form=i.data.list,e.form.id=t,e.time=[new Date(parseFloat(e.form.begintime)),new Date(parseFloat(e.form.endtime))],Object(a.h)({istree:!0,pid:e.form.first_cateid}).then(function(t){e.secondCateArr=t.data.list}),e.requestGoodsList({fid:e.form.first_cateid,sid:e.form.second_cateid})})},update:function(){var t=this;this.form.begintime=new Date(this.time[0]).getTime(),this.form.endtime=new Date(this.time[1]).getTime(),Object(a.N)(this.form).then(function(e){200==e.data.code?(t.empty(),t.cancel(),Object(r.a)("更新成功"),t.requestSeckillList()):Object(r.b)(e.data.msg)})}}),mounted:function(){0==this.cateList.length&&this.requestCateList({istree:!0})}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:t.info.title,visible:t.info.show},on:{"update:visible":function(e){return t.$set(t.info,"show",e)}}},[i("el-form",{attrs:{model:t.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"活动名称"}},[i("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"活动期限"}},[i("el-date-picker",{attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"一级分类"}},[i("el-select",{on:{change:function(e){return t.changeFirst()}},model:{value:t.form.first_cateid,callback:function(e){t.$set(t.form,"first_cateid",e)},expression:"form.first_cateid"}},[i("el-option",{attrs:{label:"请选择",value:"",disabled:""}}),t._v(" "),t._l(t.cateList,function(t){return i("el-option",{key:t.id,attrs:{label:t.catename,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"二级分类"}},[i("el-select",{on:{change:t.changeSecondId},model:{value:t.form.second_cateid,callback:function(e){t.$set(t.form,"second_cateid",e)},expression:"form.second_cateid"}},[i("el-option",{attrs:{label:"请选择",value:"",disabled:""}}),t._v(" "),t._l(t.secondCateArr,function(t){return i("el-option",{key:t.id,attrs:{label:t.catename,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"商品"}},[i("el-select",{model:{value:t.form.goodsid,callback:function(e){t.$set(t.form,"goodsid",e)},expression:"form.goodsid"}},[i("el-option",{attrs:{label:"请选择",value:"",disabled:""}}),t._v(" "),t._l(t.goodsList,function(t){return i("el-option",{key:t.id,attrs:{label:t.goodsname,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"状态"}},[i("el-switch",{attrs:{"active-color":"#13ce66","active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isEdit?i("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")]):i("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添 加")])],1)],1)],1)},staticRenderFns:[]};var d=i("C7Lr")(l,c,!1,function(t){i("xt9D")},"data-v-71ab7322",null).exports,f={components:{},data:function(){return{}},methods:n()({},Object(o.b)({requestList:"seckill/requestList"}),{del:function(t){var e=this;Object(a.K)({id:t}).then(function(t){200==t.data.code?(Object(r.a)(t.data.msg),e.requestList()):Object(r.b)(t.data.msg)})},edit:function(t){this.$emit("edit",t)}}),mounted:function(){this.requestList()},computed:n()({},Object(o.c)({list:"seckill/list"}))},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,stripe:""}},[i("el-table-column",{attrs:{prop:"title",label:"活动名称",width:"180"}}),t._v(" "),i("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return["1"==e.row.status?i("el-button",{attrs:{type:"primary"}},[t._v("启用")]):i("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),i("del-btn",{on:{confirm:function(i){return t.del(e.row.id)}}})]}}])})],1)],1)},staticRenderFns:[]};var m={components:{vAdd:d,vList:i("C7Lr")(f,u,!1,function(t){i("sIq1")},"data-v-3115fdee",null).exports},data:function(){return{info:{show:!1,isEdit:!1,title:"添加秒杀"}}},methods:{add:function(){this.info.show=!0,this.info.title="添加秒杀",this.info.isEdit=!1},edit:function(t){this.info.show=!0,this.info.title="编辑秒杀",this.info.isEdit=!0,this.$refs.add.getDetail(t)}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")]),t._v(" "),i("v-add",{ref:"add",attrs:{info:t.info}}),t._v(" "),i("v-list",{on:{edit:function(e){return t.edit(e)}}})],1)},staticRenderFns:[]};var b=i("C7Lr")(m,h,!1,function(t){i("bXkm")},"data-v-40e22570",null);e.default=b.exports},bXkm:function(t,e){},sIq1:function(t,e){},xt9D:function(t,e){}});
//# sourceMappingURL=4.95ecbdee580141e001d4.js.map