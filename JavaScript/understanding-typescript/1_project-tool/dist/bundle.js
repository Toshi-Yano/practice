(()=>{"use strict";class e{constructor(e,t,n,r){this.templateElement=document.getElementById(e),this.hostElement=document.getElementById(t);const s=document.importNode(this.templateElement.content,!0);this.element=s.firstElementChild,r&&(this.element.id=r),this.attach(n)}attach(e){this.hostElement.insertAdjacentElement(e?"afterbegin":"beforeend",this.element)}}function t(e){let t=!0;return e.required&&(t=t&&0!==e.value.toString().trim().length),null!=e.minLength&&"string"==typeof e.value&&(t=t&&e.value.length>=e.minLength),null!=e.maxLength&&"string"==typeof e.value&&(t=t&&e.value.length<=e.maxLength),null!=e.min&&"number"==typeof e.value&&(t=t&&e.value>=e.min),null!=e.max&&"number"==typeof e.value&&(t=t&&e.value<=e.max),t}function n(e,t,n){const r=n.value;return{configurable:!0,get(){return r.bind(this)}}}var r;!function(e){e[e.Active=0]="Active",e[e.Finished=1]="Finished"}(r||(r={}));class s{constructor(e,t,n,r,s){this.id=e,this.title=t,this.description=n,this.manday=r,this.status=s}}class i{constructor(){this.listeners=[]}addListener(e){this.listeners.push(e)}}class a extends i{constructor(){super(),this.projects=[]}static getInstance(){return this.instance||(this.instance=new a),this.instance}addProject(e,t,n){const i=new s(Math.random().toString(),e,t,n,r.Active);this.projects.push(i),this.updateListeners()}moveProject(e,t){const n=this.projects.find((t=>t.id===e));n&&n.status!==t&&(n.status=t,this.updateListeners())}updateListeners(){for(const e of this.listeners)e(this.projects.slice())}}const l=a.getInstance();class o extends e{constructor(){super("project-input","app",!0,"user-input"),this.titleInputElement=this.element.querySelector("#title"),this.descriptionInputElement=this.element.querySelector("#description"),this.mandayInputElement=this.element.querySelector("#manday"),this.configure()}configure(){this.element.addEventListener("submit",this.submitHandler)}renderContent(){}gatherUserInput(){const e=this.titleInputElement.value,n=this.descriptionInputElement.value,r=this.mandayInputElement.value,s={value:n,required:!0,minLength:5},i={value:+r,required:!0,min:1,max:1e3};return t({value:e,required:!0})&&t(s)&&t(i)?[e,n,+r]:void alert("入力値が正しくありません。再度お試しください。")}clearInputs(){this.titleInputElement.value="",this.descriptionInputElement.value="",this.mandayInputElement.value=""}submitHandler(e){e.preventDefault();const t=this.gatherUserInput();if(Array.isArray(t)){const[e,n,r]=t;l.addProject(e,n,r),this.clearInputs()}}}!function(e,t,n,r){var s,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(i<3?s(a):i>3?s(t,n,a):s(t,n))||a);i>3&&a&&Object.defineProperty(t,n,a)}([n],o.prototype,"submitHandler",null);class c extends e{constructor(e,t){super("single-project",e,!1,t.id),this.project=t,this.configure(),this.renderContent()}get manday(){return this.project.manday<20?this.project.manday.toString()+"人日":(this.project.manday/20).toString()+"人月"}dragStartHandler(e){e.dataTransfer.setData("text/plain",this.project.id),e.dataTransfer.effectAllowed="move"}dragEndHandler(e){console.log("Drag終了")}configure(){this.element.addEventListener("dragstart",this.dragStartHandler),this.element.addEventListener("dragend",this.dragEndHandler)}renderContent(){this.element.querySelector("h2").textContent=this.project.title,this.element.querySelector("h3").textContent=this.manday,this.element.querySelector("p").textContent=this.project.description}}!function(e,t,n,r){var s,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(i<3?s(a):i>3?s(t,n,a):s(t,n))||a);i>3&&a&&Object.defineProperty(t,n,a)}([n],c.prototype,"dragStartHandler",null);var d=function(e,t,n,r){var s,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(a=(i<3?s(a):i>3?s(t,n,a):s(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};class u extends e{constructor(e){super("project-list","app",!1,`${e}-projects`),this.type=e,this.assignedProjects=[],this.configure(),this.renderContent()}dragOverHandler(e){e.dataTransfer&&"text/plain"===e.dataTransfer.types[0]&&(e.preventDefault(),this.element.querySelector("ul").classList.add("droppable"))}dropHandler(e){const t=e.dataTransfer.getData("text/plain");l.moveProject(t,"active"===this.type?r.Active:r.Finished)}dragLeaveHandler(e){this.element.querySelector("ul").classList.remove("droppable")}configure(){this.element.addEventListener("dragover",this.dragOverHandler),this.element.addEventListener("drop",this.dropHandler),this.element.addEventListener("dragleave",this.dragLeaveHandler),l.addListener((e=>{const t=e.filter((e=>"active"===this.type?e.status===r.Active:e.status===r.Finished));this.assignedProjects=t,this.renderProjects()}))}renderContent(){const e=`${this.type}-projects-list`;this.element.querySelector("ul").id=e,this.element.querySelector("h2").textContent="active"===this.type?"実行中プロジェクト":"完了プロジェクト"}renderProjects(){const e=document.getElementById(`${this.type}-projects-list`);e.innerHTML="";for(const t of this.assignedProjects)new c(e.id,t)}}d([n],u.prototype,"dragOverHandler",null),d([n],u.prototype,"dropHandler",null),d([n],u.prototype,"dragLeaveHandler",null),new o,new u("active"),new u("finished")})();