 var fz;
 (function(doc, win) {
     var docEl = doc.documentElement,
         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
         recalc = function() {
             var clientWidth = docEl.clientWidth;
             if (!clientWidth) return;
            docEl.style.fontSize = 50 * (clientWidth / 320) + 'px';
            fz = parseInt(docEl.style.fontSize);
             return fz;
         };

     if (!doc.addEventListener) return;
     win.addEventListener(resizeEvt, recalc, false);
     doc.addEventListener('DOMContentLoaded', recalc, false);

     recalc();
 })(document, window);
