(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{17:function(e,t,a){a(2),e.exports=a(19)},19:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a(3),s=a(4),i=a(5),o=a(7),r=a(6),c=a(8),u=a(1),m=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(l)))).state={bg:"#000000",button:"#000000",clear:!1,filters:[],image:{name:"",ext:"",data:""},label:"Revert Filters",saved:!1,style:"text",text:"#000000"},a.labelChange=function(e){var t=e.target.value;a.setState({label:t});try{window.tableau.extensions.settings.set("label",t),window.tableau.extensions.settings.saveAsync()}catch(n){console.log(n)}},a.styleChange=function(e){var t=e.target.value;a.setState({style:t});try{window.tableau.extensions.settings.set("style",t),window.tableau.extensions.settings.saveAsync()}catch(n){console.log(n)}},a.setImage=function(e){var t;if(e.target.files&&(t=e.target.files[0]),t){var n=/(?:\.([^.]+))?$/.exec(t.name)[1],l=t.name.slice(0,-n.length);if(t&&["image/gif","image/jpeg","image/png"].includes(t.type)){var s=new FileReader;s.addEventListener("load",function(){if(s.result){var e=s.result.substring(s.result.search(",")+1),t={name:l,ext:n,data:e};a.setState({image:t}),window.tableau.extensions.settings.set("image",JSON.stringify(t)),window.tableau.extensions.settings.saveAsync()}},!1),t&&s.readAsDataURL(t)}else alert("The selected file is not a .gif, .jpg, .jpeg, or .png")}},a.bgChange=function(e){a.setState({bg:e.target.value}),window.tableau.extensions.settings.set("bg",e.target.value),window.tableau.extensions.settings.saveAsync()},a.buttonChange=function(e){a.setState({button:e.target.value}),window.tableau.extensions.settings.set("button",e.target.value),window.tableau.extensions.settings.saveAsync()},a.textChange=function(e){a.setState({text:e.target.value}),window.tableau.extensions.settings.set("text",e.target.value),window.tableau.extensions.settings.saveAsync()},a.clearChange=function(e){a.setState({clear:e.target.checked}),window.tableau.extensions.settings.set("clear",e.target.checked),window.tableau.extensions.settings.saveAsync()},a.getFilters=function(){console.log("getting filters");var e=[],t=[];window.tableau.extensions.dashboardContent.dashboard.worksheets.forEach(function(t){e.push(t.getFiltersAsync())}),Promise.all(e).then(function(e){e.forEach(function(e){e.forEach(function(e){t.push(e)})}),a.constructSettings(t)})},a.submit=function(){var e=a.state.label||"Revert Filters";window.tableau.extensions.settings.set("label",e),window.tableau.extensions.settings.set("style",a.state.style),window.tableau.extensions.settings.set("image",JSON.stringify(a.state.image)),window.tableau.extensions.settings.set("configured","true"),window.tableau.extensions.settings.saveAsync().then(function(){window.tableau.extensions.ui.closeDialog("closed")})},a}return Object(c.a)(t,e),Object(i.a)(t,[{key:"constructRangeSetting",value:function(e){var t,a=e.minValue.value,n=e.maxValue.value,l="object"===typeof e.maxValue.value||"object"===typeof e.minValue.value?"date":"number",s="Null"===e.maxValue.formattedValue&&"Null"===e.minValue.formattedValue?"all-values":"";return t=!(void 0!==e.minValue.value&&!e.fieldName.startsWith("Action (")),{dataType:l,fieldName:e.fieldName,filterType:e.filterType,max:0===n?1e-13:n,min:0===a?1e-13:a,nullOption:s,skip:t,worksheetName:e.worksheetName}}},{key:"constructCategoricalSetting",value:function(e){var t,a=[],n=!0,l=!1,s=void 0;try{for(var i,o=e.appliedValues[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var r=i.value;a.push(r.formattedValue)}}catch(u){l=!0,s=u}finally{try{n||null==o.return||o.return()}finally{if(l)throw s}}var c=0===a.length?"all":"replace";return t=!("Measure Names"!==e.fieldName&&!e.fieldName.startsWith("Action (")),{appliedValues:a,fieldName:e.fieldName,filterType:e.filterType,isExcludeMode:e.isExcludeMode,skip:t,updateType:c,worksheetName:e.worksheetName}}},{key:"constructSettings",value:function(e){var t=this,a=[],n=!0,l=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var r=i.value;switch(r.filterType){case"range":a.push(this.constructRangeSetting(r));break;case"categorical":a.push(this.constructCategoricalSetting(r));break;default:continue}}}catch(c){l=!0,s=c}finally{try{n||null==o.return||o.return()}finally{if(l)throw s}}window.tableau.extensions.settings.set("filters_set","true"),window.tableau.extensions.settings.set("filters",JSON.stringify(a)),window.tableau.extensions.settings.saveAsync().then(function(){t.setState({saved:!0}),setTimeout(function(){t.setState({saved:!1})},1e3)})}},{key:"componentWillMount",value:function(){var e=this;window.tableau.extensions.initializeDialogAsync().then(function(){var t=window.tableau.extensions.settings.getAll();e.setState({bg:t.bg,button:t.button,clear:"true"===t.clear,label:t.label,style:t.style||"text",image:JSON.parse(t.image||e.state.image),text:t.text}),"true"!==t.configured&&e.getFilters()})}},{key:"render",value:function(){return n.createElement(n.Fragment,null,n.createElement("div",{className:"container"},n.createElement("div",null,n.createElement("div",{className:"header"},"Filter Bookmarks Configuration",n.createElement("div",{className:"tooltip"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",id:"Dialogs_x5F_Info",width:"15",height:"15",viewBox:"0 0 15 15"},n.createElement("rect",{id:"Line",x:"7",y:"6",width:"1",height:"5",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"}),n.createElement("rect",{id:"Dot_2_",x:"7",y:"4",width:"1",height:"1",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"}),n.createElement("path",{id:"Circle",d:"M7.5,1C3.9,1,1,3.9,1,7.5S3.9,14,7.5,14 S14,11.1,14,7.5S11.1,1,7.5,1z M7.5,13C4.5,13,2,10.5,2,7.5C2,4.5,4.5,2,7.5,2S13,4.5,13,7.5C13,10.5,10.5,13,7.5,13z",fillRule:"evenodd",clipRule:"evenodd",fill:"#666766"})),n.createElement("span",{className:"tooltiptext"},n.createElement("b",null,"How to Use"),n.createElement("ol",null,n.createElement("li",null,"Set your dashboard filters they way you want to be able to revert to."),n.createElement("li",null,'Open the configuration window and click "Save Settings".')),n.createElement("p",null,"Optional: Customize your buttons label and colors."),n.createElement("p",null,'If you simply want to clear all filters with this button, turn on that setting under "Options".'),n.createElement("p",null,"Note: You can add as many instances of this extension as you like!")))),n.createElement("div",null,n.createElement("div",{className:"title",style:{marginTop:"18px"}},"Button Settings"),n.createElement("div",{className:"section"},n.createElement("label",{className:"label"},"Button Style"),n.createElement(u.DropdownSelect,{className:"dropdown-select",kind:"line",onChange:this.styleChange,onSelect:this.styleChange,value:this.state.style},n.createElement("option",{value:"image"},"Image button"),n.createElement("option",{value:"text"},"Text button")),n.createElement(u.TextField,{className:"label-text-field",style:{display:"text"===this.state.style?"inline-flex":"none"},kind:"line",label:"Label",onChange:this.labelChange,value:this.state.label}),n.createElement("div",{className:"inputBox",style:{display:"image"===this.state.style?"inline-flex":"none"}},n.createElement("span",{className:"imgName ellipsis"},""!==this.state.image.name?this.state.image.name:"Choose an image..."),n.createElement("span",{className:"imgExt"},""!==this.state.image.ext?this.state.image.ext:""),n.createElement("input",{className:"imgInput",type:"file",accept:".gif,.jpg,.jpeg,.png",id:"imgInput",onChange:this.setImage}),n.createElement("label",{className:"imgLabel",htmlFor:"imgInput"},"Choose")),this.state.clear?n.createElement("p",null,"Currently clearing all filters."):n.createElement("p",null,"Click ",n.createElement("b",null,"Save Settings")," to save current filters."),n.createElement("div",{className:"set"},n.createElement(u.Button,{onClick:this.getFilters,disabled:this.state.clear},"Save Settings"),n.createElement("span",{className:this.state.saved?"saved show":"saved"},"Settings saved!"))),n.createElement("div",{className:"title"},"Options"),n.createElement("div",{className:"section"},n.createElement(u.Checkbox,{checked:this.state.clear,onChange:this.clearChange,style:{flexGrow:1}},"Ignore settings and just clear all filters")),n.createElement("div",{className:"title"},"Formatting"),n.createElement("div",{className:"section"},n.createElement("div",{className:"format"},n.createElement("div",{className:"ftext"},"Background Color"),n.createElement("div",null,n.createElement("input",{type:"color",value:this.state.bg,onChange:this.bgChange,style:{backgroundColor:this.state.bg}}))),n.createElement("div",{className:"format"},n.createElement("div",{className:"ftext"},"Text Button Color"),n.createElement("div",null,n.createElement("input",{type:"color",value:this.state.button,onChange:this.buttonChange,style:{backgroundColor:this.state.button}}))),n.createElement("div",{className:"format"},n.createElement("div",{className:"ftext"},"Text Button Text Color"),n.createElement("div",null,n.createElement("input",{type:"color",value:this.state.text,onChange:this.textChange,style:{backgroundColor:this.state.text}})))))),n.createElement("div",{className:"footer"},n.createElement("div",{className:"btncluster"},n.createElement(u.Button,{kind:"filledGreen",onClick:this.submit,style:{marginLeft:"12px"}},"OK")))))}}]),t}(n.Component);a(9);l.render(n.createElement(m,null),document.getElementById("container"))},2:function(e,t,a){"use strict";a.r(t)},9:function(e,t,a){}},[[17,4,0,7]]]);
//# sourceMappingURL=entry_config.85eff2a4.6221251e.chunk.js.map