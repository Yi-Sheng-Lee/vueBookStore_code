(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e835253"],{1799:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pages.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.updatePage(e)}}},[t._v(t._s(e))])])}),a("li",{staticClass:"page-item",class:{disabled:!t.pages.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.updatePage(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],i={props:["pages"],methods:{updatePage:function(t){this.$emit("emitPages",t)}}},r=i,n=a("2877"),c=Object(n["a"])(r,o,s,!1,null,null,null);e["a"]=c.exports},e6dc:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-4"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.openModal(!0)}}},[t._v("建立新商品")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.language))]),a("td",[t._v(t._s(e.title))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.origin_price)))]),a("td",{staticClass:"text-right"},[t._v(t._s(t._f("currency")(e.price)))]),e.is_enable?a("td",{staticClass:"text-success"},[t._v("啟用")]):a("td",[t._v("未啟用")]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openModal(!1,e)}}},[t._v("編輯")])]),a("td",[a("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(a){return t.openDeleteModal(e)}}},[t._v("刪除")])])])}),0)]),a("Pagination",{attrs:{pages:t.pagination},on:{emitPages:t.getProducts}}),a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenter","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalCenter"}},[t.isNew?a("span",[t._v("新增產品")]):a("span",[t._v("編輯 "+t._s(t.tempProduct.title))])]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"image"}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imgURL,expression:"tempProduct.imgURL"}],staticClass:"form-control",attrs:{type:"text",id:"image",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imgURL},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"imgURL",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v("\n                  或 上傳圖片\n                  "),t.status.fileupLoading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"files",staticClass:"form-control",attrs:{type:"file",id:"customFile"},on:{change:t.uploadFile}})]),a("img",{staticClass:"img-fluid",attrs:{img:"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80",src:t.tempProduct.imgURL,alt:""}})]),a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("語系")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.language,expression:"tempProduct.language"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入語系"},domProps:{value:t.tempProduct.language},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"language",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("新書 (1: 新書; 0: 舊書)")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.new,expression:"tempProduct.new"}],staticClass:"form-control",attrs:{type:"number",id:"new",placeholder:"請輸入0或1"},domProps:{value:t.tempProduct.new},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"new",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"category"}},[t._v("分類")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入分類"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"description"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{type:"text",id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("說明內容")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{type:"text",id:"content",placeholder:"請輸入產品說明內容"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.is_enable,expression:"tempProduct.is_enable"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"is_enabled","true-value":1,"false-value":0},domProps:{checked:Array.isArray(t.tempProduct.is_enable)?t._i(t.tempProduct.is_enable,null)>-1:t._q(t.tempProduct.is_enable,1)},on:{change:function(e){var a=t.tempProduct.is_enable,o=e.target,s=o.checked?1:0;if(Array.isArray(a)){var i=null,r=t._i(a,i);o.checked?r<0&&t.$set(t.tempProduct,"is_enable",a.concat([i])):r>-1&&t.$set(t.tempProduct,"is_enable",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"is_enable",s)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateProduct}},[t._v("確認")])])])])]),a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[t._m(2),a("div",{staticClass:"modal-body"},[t._v("\n          是否刪除\n          "),a("strong",{staticClass:"text-danger"},[t._v(t._s(t.tempProduct.title))]),t._v(" 商品(刪除後將無法恢復)。\n        ")]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deletItem}},[t._v("確認刪除")])])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"120"}},[t._v("分類")]),a("th",{attrs:{width:"80"}},[t._v("語系")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"80"}},[t._v("原價")]),a("th",{attrs:{width:"80"}},[t._v("售價")]),a("th",{attrs:{width:"120"}},[t._v("啟用狀態")]),a("th",{attrs:{width:"80"}},[t._v("編輯")]),a("th",{attrs:{width:"80"}},[t._v("刪除")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header bg-danger text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[a("span",[t._v("刪除產品")])]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=a("1157"),r=a.n(i),n=a("1799"),c={data:function(){return{products:[],tempProduct:{},pagination:{},isNew:"false",isLoading:!1,status:{fileupLoading:!1}}},components:{Pagination:n["a"]},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("tantanbookstore","/admin/products?page=").concat(t);e.isLoading=!0,this.$http.get(a).then(function(t){console.log(t.data),e.isLoading=!1,e.products=t.data.products,e.pagination=t.data.pagination})},openModal:function(t,e){t?(this.tempProduct={},this.isNew=!0):(this.tempProduct=Object.assign({},e),this.isNew=!1),r()("#productModal").modal("show")},updateProduct:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tantanbookstore","/admin/product"),a="post";t.isNew||(e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tantanbookstore","/admin/product/").concat(t.tempProduct.id),a="put"),this.$http[a](e,{data:t.tempProduct}).then(function(e){console.log(e.data),e.data.success?(r()("#productModal").modal("hide"),console.log("success"),t.getProducts(t.pagination.current_page)):(r()("#productModal").modal("hide"),t.getProducts(t.pagination.current_page),console.log("新增失敗"))})},openDeleteModal:function(t){this.tempProduct=Object.assign({},t),r()("#delProductModal").modal("show")},deletItem:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("tantanbookstore","/admin/product/").concat(t.tempProduct.id);console.log(t.tempProduct.id),this.$http.delete(e,{data:t.tempProduct}).then(function(e){console.log(e.data),r()("#delProductModal").modal("hide"),t.getProducts()})},uploadFile:function(){console.log(this);var t=this,e=this.$refs.files.files[0],a=new FormData;a.append("file-to-upload",e),t.status.fileupLoading=!0;var o="".concat("https://vue-course-api.hexschool.io","/api/").concat("tantanbookstore","/admin/upload");this.$http.post(o,a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){t.status.fileupLoading=!1,e.data.success?t.$set(t.tempProduct,"imgURL",e.data.imageUrl):t.$bus.$emit("messsage:push",e.data.message,"danger")})}},created:function(){this.getProducts()}},l=c,d=a("2877"),u=Object(d["a"])(l,o,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-7e835253.6da7bf77.js.map