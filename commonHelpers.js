import"./assets/modulepreload-polyfill-3cfb730f.js";function t(e){return e<10?"0"+e:e}function f(e){const r=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),l=Math.floor(e%864e5%36e5/6e4),m=Math.floor(e%864e5%36e5%6e4/1e3);return{days:r,hours:s,minutes:l,seconds:m}}const n=document.querySelector("[data-start]"),i=document.getElementById("datetime-picker");let a;const h={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){a=e[0],a<new Date?(iziToast.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):n.disabled=!1}};flatpickr("#datetime-picker",h);n.addEventListener("click",function(){this.disabled=!0,i.disabled=!0;const e=setInterval(function(){const o=a-new Date;if(o<=0){clearInterval(e),iziToast.success({title:"Success",message:"Countdown finished!"}),n.disabled=!1,i.disabled=!1;return}const{days:c,hours:d,minutes:r,seconds:s}=f(o);document.querySelector("[data-days]").innerText=t(c),document.querySelector("[data-hours]").innerText=t(d),document.querySelector("[data-minutes]").innerText=t(r),document.querySelector("[data-seconds]").innerText=t(s)},1e3)});
//# sourceMappingURL=commonHelpers.js.map
