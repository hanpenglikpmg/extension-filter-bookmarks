(this["webpackJsonpfilter-bookmarks"]=this["webpackJsonpfilter-bookmarks"]||[]).push([[1],{17:function(e,t,a){e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(3),l=a(2),i=a(4),o=a(5),r=a(7),c=a(6),u=a(1),d=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(e=t.call.apply(t,[this].concat(s))).state={bg:"#000000",button:"#000000",clear:!1,filters:[],image:{name:"",ext:"",data:""},label:"Revert Filters",saved:!1,style:"text",text:"#000000",useSelectedWS:!1,selectWSList:[],worksheets:[]},e.labelChange=function(t){var a=t.target.value;e.setState({label:a});try{window.tableau.extensions.settings.set("label",a),window.tableau.extensions.settings.saveAsync()}catch(n){console.log(n)}},e.styleChange=function(t){var a=t.target.value;e.setState({style:a});try{window.tableau.extensions.settings.set("style",a),window.tableau.extensions.settings.saveAsync()}catch(n){console.log(n)}},e.setImage=function(t){var a;if(t.target.files&&(a=t.target.files[0]),a){var n=/(?:\.([^.]+))?$/.exec(a.name)[1],s=a.name.slice(0,-n.length);if(a&&["image/gif","image/jpeg","image/png"].includes(a.type)){var l=new FileReader;l.addEventListener("load",(function(){if(l.result){var t=l.result.substring(l.result.search(",")+1),a={name:s,ext:n,data:t};e.setState({image:a}),window.tableau.extensions.settings.set("image",JSON.stringify(a)),window.tableau.extensions.settings.saveAsync()}}),!1),a&&l.readAsDataURL(a)}else alert("The selected file is not a .gif, .jpg, .jpeg, or .png")}},e.bgChange=function(t){e.setState({bg:t.target.value}),window.tableau.extensions.settings.set("bg",t.target.value),window.tableau.extensions.settings.saveAsync()},e.buttonChange=function(t){e.setState({button:t.target.value}),window.tableau.extensions.settings.set("button",t.target.value),window.tableau.extensions.settings.saveAsync()},e.textChange=function(t){e.setState({text:t.target.value}),window.tableau.extensions.settings.set("text",t.target.value),window.tableau.extensions.settings.saveAsync()},e.clearChange=function(t){e.setState({clear:t.target.checked}),window.tableau.extensions.settings.set("clear",t.target.checked),window.tableau.extensions.settings.saveAsync()},e.useSelectedWSChange=function(t){e.setState({useSelectedWS:t.target.checked}),window.tableau.extensions.settings.set("useSelectedWS",t.target.checked),window.tableau.extensions.settings.saveAsync()},e.updateWSSelection=function(t){var a=t.target.innerText,n=e.state.selectWSList.includes(a),s=e.state.selectWSList;n?s=s.filter((function(e){return e!==a})):s.push(a),e.setState({selectWSList:s}),window.tableau.extensions.settings.set("selectWSList",JSON.stringify(s)),window.tableau.extensions.settings.saveAsync()},e.getFilters=function(){console.log("getting filters");var t=[],a=[];window.tableau.extensions.dashboardContent.dashboard.worksheets.forEach((function(e){t.push(e.getFiltersAsync())})),Promise.all(t).then((function(t){t.forEach((function(e){e.forEach((function(e){a.push(e)}))})),e.constructSettings(a)}))},e.submit=function(){var t=window.tableau.extensions.dashboardContent.dashboard.worksheets,a=e.state.selectWSList.filter((function(e){return void 0!==t.find((function(t){return t.name===e}))})),n=e.state.label||"Revert Filters";window.tableau.extensions.settings.set("label",n),window.tableau.extensions.settings.set("style",e.state.style),window.tableau.extensions.settings.set("image",JSON.stringify(e.state.image)),window.tableau.extensions.settings.set("configured","true"),window.tableau.extensions.settings.set("selectWSList",JSON.stringify(a)),window.tableau.extensions.settings.saveAsync().then((function(){window.tableau.extensions.ui.closeDialog("closed")}))},e}return Object(o.a)(a,[{key:"constructRangeSetting",value:function(e){var t,a=e.minValue.value,n=e.maxValue.value,s="object"===typeof e.maxValue.value||"object"===typeof e.minValue.value?"date":"number",l="Null"===e.maxValue.formattedValue&&"Null"===e.minValue.formattedValue?"all-values":"";return t=!(void 0!==e.minValue.value&&!e.fieldName.startsWith("Action (")),{dataType:s,fieldName:e.fieldName,filterType:e.filterType,max:0===n?1e-13:n,min:0===a?1e-13:a,nullOption:l,skip:t,worksheetName:e.worksheetName}}},{key:"constructCategoricalSetting",value:function(e){var t,a,n=[],s=Object(l.a)(e.appliedValues);try{for(s.s();!(a=s.n()).done;){var i=a.value;n.push(i.formattedValue)}}catch(r){s.e(r)}finally{s.f()}var o=0===n.length?"all":"replace";return t=!("Measure Names"!==e.fieldName&&!e.fieldName.startsWith("Action (")),{appliedValues:n,fieldName:e.fieldName,filterType:e.filterType,isExcludeMode:e.isExcludeMode,skip:t,updateType:o,worksheetName:e.worksheetName}}},{key:"constructSettings",value:function(e){var t,a=this,n=[],s=Object(l.a)(e);try{for(s.s();!(t=s.n()).done;){var i=t.value;switch(i.filterType){case"range":n.push(this.constructRangeSetting(i));break;case"categorical":n.push(this.constructCategoricalSetting(i));break;default:continue}}}catch(o){s.e(o)}finally{s.f()}window.tableau.extensions.settings.set("filters_set","true"),window.tableau.extensions.settings.set("filters",JSON.stringify(n)),window.tableau.extensions.settings.saveAsync().then((function(){a.setState({saved:!0}),setTimeout((function(){a.setState({saved:!1})}),1e3)}))}},{key:"componentWillMount",value:function(){var e=this;window.tableau.extensions.initializeDialogAsync().then((function(){var t=window.tableau.extensions.settings.getAll(),a=t.image?JSON.parse(t.image):e.state.image;e.setState({bg:t.bg,button:t.button,clear:"true"===t.clear,label:t.label,style:t.style||"text",image:a,text:t.text,useSelectedWS:"true"===t.useSelectedWS,selectWSList:t.selectWSList&&JSON.parse(t.selectWSList)||[],worksheets:window.tableau.extensions.dashboardContent.dashboard.worksheets}),"true"!==t.configured&&e.getFilters()}))}},{key:"render",value:function(){var e=this;return n.createElement(n.Fragment,null,n.createElement("div",{className:"container"},n.createElement("div",null,n.createElement("div",{className:"header"},"Filter Bookmarks Configuration",n.createElement("div",{className:"tooltip"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Dialogs_x5F_Info",width:"15",height:"15",viewBox:"0 0 15 15"},n.createElement("rect",{id:"Line",x:"7",y:"6",width:"1",height:"5",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"}),n.createElement("rect",{id:"Dot_2_",x:"7",y:"4",width:"1",height:"1",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"}),n.createElement("path",{id:"Circle",d:"M7.5,1C3.9,1,1,3.9,1,7.5S3.9,14,7.5,14 S14,11.1,14,7.5S11.1,1,7.5,1z M7.5,13C4.5,13,2,10.5,2,7.5C2,4.5,4.5,2,7.5,2S13,4.5,13,7.5C13,10.5,10.5,13,7.5,13z",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"})),n.createElement("span",{className:"tooltiptext"},n.createElement("b",null,"How to Use"),n.createElement("ol",null,n.createElement("li",null,"Set your dashboard filters they way you want to be able to revert to."),n.createElement("li",null,'Open the configuration window and click "Save Settings".')),n.createElement("p",null,"Optional: Customize your buttons label and colors."),n.createElement("p",null,'If you simply want to clear all filters with this button, turn on that setting under "Options".'),n.createElement("p",null,"Note: You can add as many instances of this extension as you like!")))),n.createElement("div",null,n.createElement("div",{className:"title",style:{marginTop:"18px"}},"Button Settings"),n.createElement("div",{className:"section"},n.createElement("label",{className:"label"},"Button Style"),n.createElement(u.DropdownSelect,{className:"dropdown-select",kind:"line",onChange:this.styleChange,onSelect:this.styleChange,value:this.state.style},n.createElement("option",{value:"image"},"Image button"),n.createElement("option",{value:"text"},"Text button")),n.createElement(u.TextField,{className:"label-text-field",style:{display:"text"===this.state.style?"inline-flex":"none"},kind:"line",label:"Label",onChange:this.labelChange,value:this.state.label}),n.createElement("div",{className:"inputBox",style:{display:"image"===this.state.style?"inline-flex":"none"}},n.createElement("span",{className:"imgName ellipsis"},""!==this.state.image.name?this.state.image.name:"Choose an image..."),n.createElement("span",{className:"imgExt"},""!==this.state.image.ext?this.state.image.ext:""),n.createElement("input",{className:"imgInput",type:"file",accept:".gif,.jpg,.jpeg,.png",id:"imgInput",onChange:this.setImage}),n.createElement("label",{className:"imgLabel",htmlFor:"imgInput"},"Choose")),this.state.clear?n.createElement("p",null,"Currently clearing all filters."):n.createElement("p",null,"Click ",n.createElement("b",null,"Save Settings")," to save current filters."),n.createElement("div",{className:"set"},n.createElement(u.Button,{onClick:this.getFilters,disabled:this.state.clear},"Save Settings"),n.createElement("span",{className:this.state.saved?"saved show":"saved"},"Settings saved!"))),n.createElement("div",{className:"title"},"Options"),n.createElement("div",{className:"section"},n.createElement(u.Checkbox,{checked:this.state.clear,onChange:this.clearChange,style:{flexGrow:1}},"Ignore settings and just clear all filters"),n.createElement(u.Checkbox,{checked:this.state.useSelectedWS,onChange:this.useSelectedWSChange,style:{flexGrow:1}},"Only reset filters on selected worksheets."),n.createElement("div",{className:"listBox",style:{display:this.state.useSelectedWS?"flex":"none"}},n.createElement("div",{className:"list scrolly"},this.state.worksheets.map((function(t){return n.createElement(u.Pill,{kind:"discrete",schema:!0,selected:e.state.selectWSList.includes(t.name),onMouseDown:e.updateWSSelection,children:t.name,key:t.name,title:t.name,style:{marginBottom:"4px",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",display:"block",lineHeight:"18px"},"data-type":"worksheet"})}))))),n.createElement("div",{className:"title"},"Formatting"),n.createElement("div",{className:"section"},n.createElement("div",{className:"format"},n.createElement("div",{className:"ftext"},"Background Color"),n.createElement("div",null,n.createElement("input",{type:"color",value:this.state.bg,onChange:this.bgChange,style:{backgroundColor:this.state.bg}}))),n.createElement("div",{className:"format"},n.createElement("div",{className:"ftext"},"Text Button Color"),n.createElement("div",null,n.createElement("input",{type:"color",value:this.state.button,onChange:this.buttonChange,style:{backgroundColor:this.state.button}}))),n.createElement("div",{className:"format"},n.createElement("div",{className:"ftext"},"Text Button Text Color"),n.createElement("div",null,n.createElement("input",{type:"color",value:this.state.text,onChange:this.textChange,style:{backgroundColor:this.state.text}})))))),n.createElement("div",{className:"footer"},n.createElement("div",{className:"btncluster"},n.createElement(u.Button,{kind:"filledGreen",onClick:this.submit,style:{marginLeft:"12px"}},"OK")))))}}]),a}(n.Component);a(8);s.render(n.createElement(d,null),document.getElementById("container"))},8:function(e,t,a){}},[[17,4,0,7]]]);
//# sourceMappingURL=entry_config.85eff2a4.add70a87.chunk.js.map