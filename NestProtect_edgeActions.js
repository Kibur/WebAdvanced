/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
var stageRef;
var product;

(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   function loadJSON() {
      $.getJSON("product.json", function parse(data) {
         product = data;

         console.log("<product.json> loaded");
      });
   }

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         $("body").css('background', '#3d4247');
         $("#Stage").css('margin', 'auto');
         
         stageRef = sym;
         loadJSON();
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         var txtColor = stageRef.$("txtColor");
         txtColor.html(
            "<img src='images/nest_black-white.jpg' alt='Nest white and black' style='float:right;'/>"
            );

         var txtWired = stageRef.$("txtWired");
         txtWired.html(
            "<figure><img src='images/nest_wired_120V.jpg' alt='Nest wired 120V'/><figcaption>Wired 120V</figcaption></figure>"
            );

         var txtBattery = stageRef.$("txtBattery");
         txtBattery.html(
            "<figure><img src='images/nest_battery.jpg' alt='Nest battery' style='float:left;'/><figcaption>Battery</figcaption></figure>"
            );

         var txtModels = stageRef.$("txtModels");
         var value = "<div style='position:absolute;left:100px;'><img src='images/spec_protect.png' alt='Nest protect specs' style='float:left;'/><img src='images/spec_protect_side.png' alt='Nest protect specs side'/></div>";

         txtModels.html(value);
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_txtBattery}", "click", function(sym, e) {
         // insert code for mouse click here
         var specs = "<div>Height: 5.28 inches (13.4 cm)<br/>";
         specs += "Width: 5.28 inches (13.4 cm)<br/>";
         specs += "Depth: 1.63 inches (4.1 cm)<br/>";
         specs += "Weight: 12.4 ounces (352 grams)"
         specs += "</div>";

         specs += "<p>Included in the box</p>";
         specs += "<ol>";
         specs += "<li>Six long-life batteries</li>";
         specs += "<li>Backplate</li>";
         specs += "<li>Four screws</li>";
         specs += "<li>User's Guide and Welcome Guide</li>";
         specs += "<li>2-year limited hardware warranty</li>";
         specs += "</ol><br/>";

         specs += "<p>Sensors</p>";
         specs += "<ul>";
         specs += "<li>Photoelectric smoke</li>";
         specs += "<li>Carbon monoxide</li>";
         specs += "<li>Heat</li>";
         specs += "<li>Three activity</li>";
         specs += "<li>Ambient light</li>";
         specs += "<li>Humidity</li>";
         specs += "</ul><br/>";

         specs += "Speaker: 80dB @ 3ft (1 meter) @ 1kHz<br/>";
         specs += "Horn: 85 dB SPL at 10ft (3 meters)";

         specs += "<p>Wireless</p>";
         specs += "<ul>";
         specs += "<li>Working Wi-Fi connection (range: 802.11 - 2.4 GHz)</li>";
         specs += "<li>Wireless Interconnection (range: 802.15.4 - 2.4 GHz)</li>";
         specs += "</ul><br/>";

         specs += "<p>System Requirements</p>";
         specs += "<ul>";
         specs += "<li>Wi-Fi connection</li>";
         specs += "<li>Smartphone or tablet with iOS 5 or later, or Android 2.2+ or later</li>";
         specs += "<li>Free Nest Account</li>";
         specs += "</ul><br/>";

         specs += "<p>Environmental Information</p>";
         specs += "Green";
         specs += "<ul>";
         specs += "<li>Mercury-free</li>";
         specs += "<li>PVC free</li>";
         specs += "<li>Recyclable packaging</li>";
         specs += "</ul>";
         specs += "Operating";
         specs += "<ul>";
         specs += "<li>This alarm should not be installed in locations where the normal ambient temperature is below 4°C (40°F) or exceeds 38°C (100°F).</li>";
         specs += "<li>Humidity: 20%RH to 80%RH (non condensing).</li>"
         specs += "</ul><br/>";

         specs += "<p>Languages</p>";
         specs += "<ul>";
         specs += "<li>English</li>";
         specs += "<li>Spanish</li>";
         specs += "</ul>";

         stageRef.$("txtModels").html(specs);
         stageRef.$("txtModels").css({
            'background':'#322828',
            'border-radius':'3px',
            'color':'#CFC2C2',
            'padding':'10px'
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_txtWired}", "click", function(sym, e) {
         // insert code for mouse click here
         var specs = "<div>Height: 5.28 inches (13.4 cm)<br/>";
         specs += "Width: 5.28 inches (13.4 cm)<br/>";
         specs += "Depth: 1.63 inches (4.1 cm)<br/>";
         specs += "Weight: 12.4 ounces (352 grams)"
         specs += "</div>";

         specs += "<p>Included in the box</p>";
         specs += "<ol>";
         specs += "<li>Three long-life backup batteries</li>";
         specs += "<li>Backplate</li>";
         specs += "<li>Four screws</li>";
         specs += "<li>User's Guide and Welcome Guide</li>";
         specs += "<li>2-year limited hardware warranty</li>";
         specs += "<li>AC 120V connector</li>";
         specs += "<li>Three wire nuts</li>";
         specs += "</ol><br/>";

         specs += "<p>Sensors</p>";
         specs += "<ul>";
         specs += "<li>Photoelectric smoke</li>";
         specs += "<li>Carbon monoxide</li>";
         specs += "<li>Heat</li>";
         specs += "<li>Three activity</li>";
         specs += "<li>Ambient light</li>";
         specs += "<li>Humidity</li>";
         specs += "</ul><br/>";

         specs += "Speaker: 80dB @ 3ft (1 meter) @ 1kHz<br/>";
         specs += "Horn: 85 dB SPL at 10ft (3 meters)";

         specs += "<p>Wireless</p>";
         specs += "<ul>";
         specs += "<li>Working Wi-Fi connection (range: 802.11 - 2.4 GHz)</li>";
         specs += "<li>Wireless Interconnection (range: 802.15.4 - 2.4 GHz)</li>";
         specs += "</ul><br/>";

         specs += "<p>System Requirements</p>";
         specs += "<ul>";
         specs += "<li>Wi-Fi connection</li>";
         specs += "<li>Smartphone or tablet with iOS 5 or later, or Android 2.2+ or later</li>";
         specs += "<li>Free Nest Account</li>";
         specs += "</ul><br/>";

         specs += "<p>Environmental Information</p>";
         specs += "Green";
         specs += "<ul>";
         specs += "<li>Mercury-free</li>";
         specs += "<li>PVC free</li>";
         specs += "<li>Recyclable packaging</li>";
         specs += "</ul>";
         specs += "Operating";
         specs += "<ul>";
         specs += "<li>This alarm should not be installed in locations where the normal ambient temperature is below 4°C (40°F) or exceeds 38°C (100°F).</li>";
         specs += "<li>Humidity: 20%RH to 80%RH (non condensing).</li>"
         specs += "</ul><br/>";

         specs += "<p>Languages</p>";
         specs += "<ul>";
         specs += "<li>English</li>";
         specs += "<li>Spanish</li>";
         specs += "</ul>";

         stageRef.$("txtModels").html(specs);
         stageRef.$("txtModels").css({
            'background':'#322828',
            'border-radius':'3px',
            'color':'#CFC2C2',
            'padding':'10px'
         });
      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_txtWired}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         stageRef.$("txtWired").css('cursor', 'pointer');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_txtBattery}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         stageRef.$("txtBattery").css('cursor', 'pointer');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_txtBattery}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         stageRef.$("txtBattery").css('cursor', 'default');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_txtWired}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         stageRef.$("txtWired").css('cursor', 'default');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Nest_Logo}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("https://nest.com/smoke-co-alarm/life-with-nest-protect/", "_blank");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Nest_Logo}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         stageRef.$("Nest_Logo").css('cursor', 'pointer');

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Nest_Logo}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         stageRef.$("Nest_Logo").css('cursor', 'default');

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Symb_header'
   (function(symbolName) {   
   
   })("Symb_header");
   //Edge symbol end:'Symb_header'

   //=========================================================
   
   //Edge symbol: 'Symb_Warning'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Symb_Warning");
   //Edge symbol end:'Symb_Warning'

   //=========================================================
   
   //Edge symbol: 'Symb_Wave'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         // insert code here
         // play the timeline from the given position (ms or label)
         sym.play(0);

      });
      //Edge binding end

   })("Symb_Wave");
   //Edge symbol end:'Symb_Wave'

})(jQuery, AdobeEdge, "EDGE-1666722");