
        
        function openNavigation() {
            
            var nav= document.getElementById('mobile_navigation_menu');
            nav.style.display = "inline-block";
            var opener=document.getElementById('opener');
            opener.style.display = "none";
            var closer=document.getElementById('closer');
            closer.style.display = "inline-block";
        }
        function closeNavigation() {
            
            var nav= document.getElementById('mobile_navigation_menu');
            nav.style.display = "none";
            var opener=document.getElementById('closer');
            opener.style.display = "none";
            var closer=document.getElementById('opener');
            closer.style.display = "inline-block";
        }
        function showImportantDates() {
            var dates = document.getElementById('importantDates');
            dates.style.display="block";
            var openerHider = document.getElementById('opener');
            openerHider.style.display = "none";
            var closer = document.getElementById('importantDatesCloser');
            closer.style.display = "block"; 

        }
        function closeImportantDates() {
            var dates = document.getElementById('importantDates');
            dates.style.display="none";
            var closer = document.getElementById('importantDatesCloser');
            closer.style.display = "none";
            var openerHider = document.getElementById('opener');
            openerHider.style.display = "block";
        }
        function showContactUs() {

            var dates = document.getElementById('contactUs');
            dates.style.display="block";
            var openerHider = document.getElementById('opener');
            openerHider.style.display = "none";
            var closer = document.getElementById('contactUsCloser');
            closer.style.display = "block"; 

        }
        function closeContactUs() {
            var dates = document.getElementById('contactUs');
            dates.style.display="none";
            var closer = document.getElementById('contactUsCloser');
            closer.style.display = "none";
            var openerHider = document.getElementById('opener');
            openerHider.style.display = "block";
        }
        function settaRules() {
            var accomodation_block = document.getElementById('accomodation_rules');
            accomodation_block.style.display = "none";
            var tablock = document.getElementById('ta_rules');
            tablock.style.display = "block";
            
            var el = documen.getElmentById('extra_rules_buttons_ta');
            var rel = document.getElementById('extra_rules_buttons_ac');

            removeClass(rel,"traveling_allowance-active")
            removeClass(rel,"hvr-bubble-bottom");
            removeClass(rel,"hvr-bubble-bottom");
            
            
            addClass(el,"traveling_allowance-active");
            addClass(el,"hvr-bubble-bottom");
            addClass(el,"hvr-bubble-bottom-active");



        }
        function setaccomodationRules() {
            var tablock = document.getElementById('ta_rules');
            tablock.style.display = "none";
            var accomodation_block = document.getElementById('accomodation_rules');
            accomodation_block.style.display = "block";
            
            var rel = documen.getElmentById('extra_rules_buttons_ta');
            var el = document.getElementById('extra_rules_buttons_ac');

            removeClass(rel,"traveling_allowance-active")
            removeClass(rel,"hvr-bubble-bottom");
            removeClass(rel,"hvr-bubble-bottom");
            
            
            addClass(el,"traveling_allowance-active");
            addClass(el,"hvr-bubble-bottom");
            addClass(el,"hvr-bubble-bottom-active");

        
        
        
        
        }

        function hasClass(el, className) {
            if (el.classList)
              return el.classList.contains(className)
            else
              return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
          }
          
          function addClass(el, className) {
              alert("hello");
            if (el.classList)
              el.classList.add(className)
            else if (!hasClass(el, className)) el.className += " " + className
          }
          
          function removeClass(el, className) {
            if (el.classList)
              el.classList.remove(className)
            else if (hasClass(el, className)) {
              var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
              el.className=el.className.replace(reg, ' ')
            }
          }


