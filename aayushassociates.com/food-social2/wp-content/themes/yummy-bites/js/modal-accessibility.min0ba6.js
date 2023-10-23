/*! yummy-bites 2023-07-05 */
var yummybites=yummybites||{};function yummybitesDomReady(e){if("function"==typeof e)return"interactive"===document.readyState||"complete"===document.readyState?e():void document.addEventListener("DOMContentLoaded",e,!1)}function yummybitesToggleAttribute(e,t,o,n){void 0===o&&(o=!0),void 0===n&&(n=!1),e.getAttribute(t)!==o?e.setAttribute(t,o):e.setAttribute(t,n)}function yummybitesFindParents(e,o){var n=[];return function e(t){t=t.parentNode;t instanceof HTMLElement&&(t.matches(o)&&n.push(t),e(t))}(e),n}function yummybitesFocusElements(){var n='button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',e=document.querySelectorAll(".header-search-wrap");null!==e&&e.forEach(e=>{var t=e.querySelectorAll(n)[0],e=e.querySelectorAll(n),o=e[e.length-1];document.addEventListener("keydown",function(e){"Tab"!==e.key&&9!==e.keyCode||(e.shiftKey?document.activeElement===t&&(o.focus(),e.preventDefault()):document.activeElement===o&&(t.focus(),e.preventDefault()))}),t.focus()})}yummybites.createEvent=function(e){var t;return"function"==typeof window.Event?t=new Event(e):(t=document.createEvent("Event")).initEvent(e,!0,!1),t},yummybites.coverModals={init:function(){document.querySelector(".cover-modal")&&(this.onToggle(),this.closeOnEscape(),this.hideAndShowModals(),this.keepFocusInModal())},onToggle:function(){document.querySelectorAll(".cover-modal").forEach(function(e){e.addEventListener("toggled",function(e){var e=e.target,t=document.body;e.classList.contains("active")?t.classList.add("showing-modal"):(t.classList.remove("showing-modal"),t.classList.add("hiding-modal"),setTimeout(function(){t.classList.remove("hiding-modal")},500))})})},closeOnEscape:function(){document.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),document.querySelectorAll(".cover-modal.active").forEach(function(e){this.untoggleModal(e)}.bind(this)))}.bind(this))},hideAndShowModals:function(){var t=document,a=window,e=t.querySelectorAll(".cover-modal"),i=(t.documentElement.style,t.querySelector("#wpadminbar"));function s(e){var t,o=a.pageYOffset;return i?(t=o+i.getBoundingClientRect().height,e?-t:t):0===o?0:-o}e.forEach(function(n){n.addEventListener("toggle-target-before-inactive",function(e){var t=a.pageYOffset,o=(Math.abs(s()),a.matchMedia("(max-width: 600px)"));e.target===n&&(i&&o.matches&&(t>=s()?n.style.setProperty("top",0):n.style.setProperty("top",s()-t+"px")),n.classList.add("show-modal"))}),n.addEventListener("toggle-target-after-inactive",function(e){e.target===n&&setTimeout(function(){var e=yummybites.toggles.clickedEl;n.classList.remove("show-modal"),i&&(t.body.style.removeProperty("padding-top"),n.style.removeProperty("top")),!1!==e&&(e.focus(),e=!1),a.scrollTo(0,Math.abs(a.yummybites.scrolled+s())),a.yummybites.scrolled=0},500)})})},untoggleModal:function(e){var t,o=!1;e.dataset.modalTargetString&&(t=e.dataset.modalTargetString,o=document.querySelector('*[data-toggle-target="'+t+'"]')),o?o.click():e.classList.remove("active")},keepFocusInModal:function(){var c=document;c.addEventListener("keydown",function(e){var t,o,n,a,i,s,l=yummybites.toggles.clickedEl;l&&c.body.classList.contains("showing-modal")&&(l=l.dataset.toggleTarget,i="input, a, button",a=c.querySelector(l),t=a.querySelectorAll(i),t=Array.prototype.slice.call(t),".menu-modal"===l&&(o=(o=window.matchMedia("(min-width: 99999px)").matches)?".expanded-menu":".mobile-menu",(t=t.filter(function(e){return null!==e.closest(o)&&null!==e.offsetParent})).unshift(c.querySelector(".close-nav-toggle")),n=c.querySelector(".menu-bottom > nav"))&&n.querySelectorAll(i).forEach(function(e){t.push(e)}),".main-menu-modal"===l&&(o=(o=window.matchMedia("(min-width: 1025px)").matches)?".expanded-menu":".mobile-menu",(t=t.filter(function(e){return null!==e.closest(o)&&null!==e.offsetParent})).unshift(c.querySelector(".close-main-nav-toggle")),n=c.querySelector(".menu-bottom > nav"))&&n.querySelectorAll(i).forEach(function(e){t.push(e)}),a=t[t.length-1],l=t[0],n=c.activeElement,i=9===e.keyCode,!(s=e.shiftKey)&&i&&a===n&&(e.preventDefault(),l.focus()),s)&&i&&l===n&&(e.preventDefault(),a.focus())})}},yummybites.modalMenu={init:function(){this.expandLevel()},expandLevel:function(){document.querySelectorAll(".modal-menu").forEach(function(e){e=e.querySelector(".current-menu-item");e&&yummybitesFindParents(e,"li").forEach(function(e){e=e.querySelector(".submenu-toggle-btn");e&&yummybites.toggles.performToggle(e,!0)})})}},yummybites.toggles={clickedEl:!1,init:function(){this.toggle()},performToggle:function(e,o){var n,a,i=this,s=document,l=e,c=l.dataset.toggleTarget,r="active";s.querySelectorAll(".show-modal").length||(i.clickedEl=s.activeElement),(n="next"===c?l.nextSibling:s.querySelector(c)).classList.contains(r)?n.dispatchEvent(yummybites.createEvent("toggle-target-before-active")):n.dispatchEvent(yummybites.createEvent("toggle-target-before-inactive")),a=l.dataset.classToToggle||r,e=0,n.classList.contains("cover-modal")&&(e=10),setTimeout(function(){var e=n.classList.contains("sub-menu")?l.closest(".menu-item").querySelector(".sub-menu"):n,t=l.dataset.toggleDuration;"slidetoggle"!==l.dataset.toggleType||o||"0"===t?e.classList.toggle(a):yummybitesMenuToggle(e,t),("next"===c||n.classList.contains("sub-menu")?l:s.querySelector('*[data-toggle-target="'+c+'"]')).classList.toggle(r),yummybitesToggleAttribute(l,"aria-expanded","true","false"),i.clickedEl&&-1!==l.getAttribute("class").indexOf("close-")&&yummybitesToggleAttribute(i.clickedEl,"aria-expanded","true","false"),l.dataset.toggleBodyClass&&s.body.classList.toggle(l.dataset.toggleBodyClass),l.dataset.setFocus&&(e=s.querySelector(l.dataset.setFocus))&&(n.classList.contains(r)?e.focus():e.blur()),n.dispatchEvent(yummybites.createEvent("toggled")),n.classList.contains(r)?n.dispatchEvent(yummybites.createEvent("toggle-target-after-active")):n.dispatchEvent(yummybites.createEvent("toggle-target-after-inactive"))},e)},toggle:function(){var o=this;document.querySelectorAll("*[data-toggle-target]").forEach(function(t){t.addEventListener("click",function(e){e.preventDefault(),o.performToggle(t)})})}},yummybitesDomReady(function(){yummybites.toggles.init(),yummybites.coverModals.init()}),yummybitesFocusElements();