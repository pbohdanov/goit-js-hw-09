const t=document.querySelector("body"),e=t.querySelector("button[data-start]"),o=t.querySelector("button[data-stop]");o.hasAttribute("disabled");let r,n=!1;function a(){return new Promise(((e,o)=>{n?o("error, the color changes"):(console.log("статус кнопки Start",n),r=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,e()}),1e3))}))}e.addEventListener("click",(function(){n=!1,a().then((()=>{e.setAttribute("disabled",!0)})).catch((t=>{console.error(t)}))})),o.addEventListener("click",(()=>{n=!0,clearInterval(r),e.removeAttribute("disabled"),t.style.backgroundColor="",console.log("статус кнопки Stop",n)}));
//# sourceMappingURL=01-color-switcher.9317b6cd.js.map