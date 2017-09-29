
        
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
            var tablock = document.getElementById('ta_rules');
            tablock.style.display = "none";
            alert("in");
        }