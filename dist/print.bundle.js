(()=>{const e=document.getElementById("task-list"),t=document.querySelector("#form");let n=[];function r(){e.innerHTML="",n.forEach(((t,n)=>{const r=document.createElement("li");r.innerHTML=`\n      <input type="checkbox" id="task${n}" ${t.completed?"checked":""}>\n      \n      <form id = 'worr'>\n        <input value="${t.description}" id='word' readonly>\n      </form>\n      \n      <button class="delete">\n        <i class="fa-solid fa-times" id='times'></i>\n        <i class="fa-solid fa-pen" id='pen'></i>\n      </button>\n    `,e.appendChild(r)}))}function o(){localStorage.setItem("tasks",JSON.stringify(n))}function a(){document.querySelectorAll("#times").forEach(((e,t)=>{e.addEventListener("click",(()=>{e.parentElement.parentElement.remove(),n.forEach(((e,r)=>{t===r&&(n=n.filter((t=>t.index!==e.index)),n.forEach(((e,t)=>{e.index=t+1,window.location.reload()})),o())}))}))}))}t.addEventListener("submit",(e=>{e.preventDefault();const t=document.querySelector("input");if(""===t.value)return;const c={description:t.value,completed:!1,index:n.length+1};n.push(c),r(),t.value="",o();const l=document.querySelectorAll("#pen");l.forEach((e=>{e.addEventListener("click",(()=>{}))})),a(),l.forEach(((e,t)=>{e.addEventListener("click",(()=>{e.parentElement.classList.add("change");const r=e.parentElement.parentElement,a=r.querySelector("#word");a.removeAttribute("readonly"),a.focus(),a.addEventListener("keyup",(()=>{n.forEach(((e,n)=>{t===n&&(e.description=a.value,o())}))})),r.querySelector("#worr").addEventListener("submit",(t=>{t.preventDefault(),e.parentElement.classList.remove("change"),a.setAttribute("readonly","readonly")}))}))}))})),window.addEventListener("load",(()=>{const e=JSON.parse(localStorage.getItem("tasks"));n.push(...n,...e),r();const t=document.querySelectorAll("#pen");t.forEach((e=>{e.addEventListener("click",(()=>{}))})),a(),t.forEach(((e,t)=>{e.addEventListener("click",(()=>{e.parentElement.classList.add("change");const r=e.parentElement.parentElement,a=r.querySelector("#word");a.removeAttribute("readonly"),a.focus(),a.addEventListener("keyup",(()=>{n.forEach(((e,n)=>{t===n&&(e.description=a.value,o())}))})),r.querySelector("#worr").addEventListener("submit",(t=>{t.preventDefault(),e.parentElement.classList.remove("change"),a.setAttribute("readonly","readonly")}))}))}))}))})();