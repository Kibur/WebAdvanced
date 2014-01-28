/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['allerta, sans-serif']='<script src=\"http://use.edgefonts.net/allerta:n4:all.js\"></script>';


var resources = [
];
var symbols = {
"stage": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'Symb_header',
            type:'rect',
            rect:['423px','-59px','auto','auto','auto','auto'],
            clip:['rect(63.401329040527344px 316px 234.4648895263672px 0px)'],
            transform:[[],[],[],['0.99367','0.99367']]
         },
         {
            id:'Nest_Logo',
            type:'image',
            rect:['15px','-140px','480px','480px','auto','auto'],
            clip:['rect(116.06136322021484px 480px 336.9957580566406px 0px)'],
            fill:["rgba(0,0,0,0)",im+"Nest_Logo.jpg",'0px','0px'],
            transform:[[],[],[],['0.77823','0.77823']]
         },
         {
            id:'Text',
            type:'text',
            rect:['68px','202px','393px','31px','auto','auto'],
            text:"Fill your nest with Nest.",
            font:['allerta, sans-serif',30,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'txtColor',
            type:'text',
            rect:['312px','607px','324px','124px','auto','auto'],
            text:" <br>",
            align:"left",
            font:['allerta, sans-serif',13,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'txtModels',
            type:'text',
            rect:['68px','1129px','670px','1011px','auto','auto'],
            text:" <br>",
            align:"left",
            font:['allerta, sans-serif',13,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text10',
            type:'text',
            rect:['345px','926px','145px','58px','auto','auto'],
            text:"$129 only",
            align:"left",
            font:['allerta, sans-serif',30,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text4',
            type:'text',
            rect:['68px','1077px','670px','68px','auto','auto'],
            text:"Specifications:",
            align:"left",
            font:['allerta, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'txtWired',
            type:'text',
            rect:['68px','884px','247px','124px','auto','auto'],
            text:" ",
            align:"left",
            font:['allerta, sans-serif',13,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'txtBattery',
            type:'text',
            rect:['491px','884px','247px','124px','auto','auto'],
            text:" ",
            align:"left",
            font:['allerta, sans-serif',13,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text2',
            type:'text',
            rect:['68px','834px','324px','50px','auto','auto'],
            text:"Choose a model:",
            font:['allerta, sans-serif',18,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Text3',
            type:'text',
            rect:['68px','607px','305px','50px','auto','auto'],
            text:"Available in black or white.",
            font:['allerta, sans-serif',18,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Text5',
            type:'text',
            rect:['68px','290px','253px','31px','auto','auto'],
            text:"A friendly warning",
            align:"left",
            font:['allerta, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text7',
            type:'text',
            rect:['574px','429px','164px','38px','auto','auto'],
            text:"Wave to hush it",
            align:"left",
            font:['allerta, sans-serif',20,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text8',
            type:'text',
            rect:['503px','473px','235px','68px','auto','auto'],
            text:"No need to swing towels or get up on chairs. Silence nuisance alarms, like burning toast, with a wave of your hand.",
            align:"left",
            font:['allerta, sans-serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text6',
            type:'text',
            rect:['68px','326px','235px','50px','auto','auto'],
            text:"Before an emergency, Nest Protect gives you an early Heads-Up telling you what the danger is and where it is.",
            align:"left",
            font:['allerta, sans-serif',12,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Symb_Warning',
            type:'rect',
            rect:['294','269','auto','auto','auto','auto']
         },
         {
            id:'Symb_Wave',
            type:'rect',
            rect:['249px','232px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.45423','0.45423']]
         }],
         symbolInstances: [
         {
            id:'Symb_header',
            symbolName:'Symb_header'
         },
         {
            id:'Symb_Warning',
            symbolName:'Symb_Warning'
         },
         {
            id:'Symb_Wave',
            symbolName:'Symb_Wave'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Text7}": [
            ["style", "height", '38px'],
            ["style", "top", '429px'],
            ["style", "left", '574px'],
            ["style", "width", '164px']
         ],
         "${_Text3}": [
            ["style", "top", '607px'],
            ["style", "font-family", 'allerta, sans-serif'],
            ["style", "left", '68px'],
            ["style", "font-size", '18px']
         ],
         "${_Text5}": [
            ["style", "top", '290px'],
            ["style", "height", '31px'],
            ["style", "font-size", '20px']
         ],
         "${_Text4}": [
            ["style", "top", '1077px'],
            ["style", "height", '68px'],
            ["style", "font-size", '16px'],
            ["style", "left", '68px'],
            ["style", "width", '670px']
         ],
         "${_txtModels}": [
            ["style", "top", '1129px'],
            ["style", "height", '1011px'],
            ["style", "left", '68px'],
            ["style", "width", '670px']
         ],
         "${_Symb_header}": [
            ["style", "top", '-59px'],
            ["transform", "scaleY", '0.99367'],
            ["transform", "scaleX", '0.99367'],
            ["style", "left", '423px'],
            ["style", "clip", [63.401329040527344,316,234.4648895263672,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_Text6}": [
            ["style", "top", '326px'],
            ["style", "font-size", '12px'],
            ["style", "height", '50px'],
            ["style", "width", '235px']
         ],
         "${_txtWired}": [
            ["style", "height", '124px'],
            ["style", "top", '884px']
         ],
         "${_Symb_Wave}": [
            ["style", "top", '232px'],
            ["style", "left", '249px'],
            ["transform", "scaleY", '0.45423'],
            ["transform", "scaleX", '0.45423']
         ],
         "${_Nest_Logo}": [
            ["style", "top", '-140px'],
            ["transform", "scaleY", '0.77823'],
            ["transform", "scaleX", '0.77823'],
            ["style", "left", '15px'],
            ["style", "clip", [116.06136322021484,480,336.9957580566406,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_txtColor}": [
            ["style", "top", '607px'],
            ["style", "left", '312px'],
            ["style", "width", '324px']
         ],
         "${_Text}": [
            ["style", "top", '202px'],
            ["style", "width", '393px'],
            ["style", "height", '31px'],
            ["style", "font-family", 'allerta, sans-serif'],
            ["style", "left", '68px'],
            ["style", "font-size", '30px']
         ],
         "${_txtBattery}": [
            ["style", "top", '884px'],
            ["style", "left", '491px'],
            ["style", "height", '124px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "min-width", '0px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '2198px'],
            ["style", "width", '800px']
         ],
         "${_Text2}": [
            ["style", "top", '834px'],
            ["style", "font-family", 'allerta, sans-serif'],
            ["style", "left", '68px'],
            ["style", "font-size", '18px']
         ],
         "${_Text10}": [
            ["style", "height", '58px'],
            ["style", "top", '926px'],
            ["style", "font-size", '30px']
         ],
         "${_Text8}": [
            ["style", "top", '473px'],
            ["style", "height", '68px'],
            ["style", "font-size", '12px'],
            ["style", "left", '503px'],
            ["style", "width", '235px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"Symb_header": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      rect: ['0px','0px','316px','319px','auto','auto'],
      id: 'smoke_alarm',
      transform: [],
      clip: ['rect(64px 279px 233px 22px)'],
      fill: ['rgba(0,0,0,0)','images/smoke_alarm.png','0px','0px']
   },
   {
      rect: ['76px','75px','126px','126px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [11,'rgba(0,0,0,1)','solid'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "top", '75px'],
            ["style", "border-width", '13px'],
            ["color", "border-color", 'rgba(255,255,255,1.00)'],
            ["style", "height", '124px'],
            ["style", "border-style", 'solid'],
            ["style", "left", '75px'],
            ["style", "width", '124px']
         ],
         "${_smoke_alarm}": [
            ["style", "top", '0px'],
            ["style", "clip", [64,279,233,22], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '319px'],
            ["style", "width", '316px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 6000,
         autoPlay: true,
         timeline: [
            { id: "eid41", tween: [ "color", "${_Ellipse}", "border-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 2000 },
            { id: "eid43", tween: [ "color", "${_Ellipse}", "border-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 2000, duration: 2000 },
            { id: "eid45", tween: [ "color", "${_Ellipse}", "border-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 4000, duration: 2000 }         ]
      }
   }
},
"Symb_Warning": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      transform: [[0,0],[],[],['0.79677','0.79677']],
      type: 'image',
      id: 'nest-protect-lead',
      rect: ['-31px','-18px','310px','170px','auto','auto'],
      clip: ['rect(15.78955078125px 249.473876953125px 170px 65.78955078125px)'],
      fill: ['rgba(0,0,0,0)','images/nest-protect-lead.jpg','0px','0px']
   },
   {
      rect: ['98px','48px','42px','42px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [5,'rgba(49,49,49,1.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_nest-protect-lead}": [
            ["style", "top", '-18px'],
            ["transform", "scaleY", '0.79677'],
            ["transform", "scaleX", '0.79677'],
            ["style", "clip", [15.78955078125,249.473876953125,170,65.78955078125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '-31px']
         ],
         "${_Ellipse}": [
            ["color", "background-color", 'rgba(192,192,192,0.00)'],
            ["style", "top", '48px'],
            ["style", "left", '98px'],
            ["style", "border-style", 'solid'],
            ["style", "height", '42px'],
            ["color", "border-color", 'rgba(49,49,49,0.00)'],
            ["style", "border-width", '5px'],
            ["style", "width", '42px']
         ],
         "${symbolSelector}": [
            ["style", "height", '135px'],
            ["style", "width", '247px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2500,
         autoPlay: true,
         timeline: [
            { id: "eid49", tween: [ "color", "${_Ellipse}", "border-color", 'rgba(49,49,49,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(49,49,49,0)'}], position: 0, duration: 1250 },
            { id: "eid52", tween: [ "color", "${_Ellipse}", "border-color", 'rgba(49,49,49,0)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(49,49,49,1.00)'}], position: 1250, duration: 1250 }         ]
      }
   }
},
"Symb_Wave": {
   version: "2.0.1",
   minimumCompatibleVersion: "2.0.0",
   build: "2.0.1.268",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'image',
      id: 'smoke_alarm_slide_sprite-10932b4f',
      rect: ['0px','0px','242px','723px','auto','auto'],
      clip: ['rect(0px 242px 239.0712890625px 0px)'],
      fill: ['rgba(0,0,0,0)','images/smoke_alarm_slide_sprite-10932b4f.jpg','0px','0px']
   },
   {
      rect: ['57px','56px','91px','91px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse2',
      stroke: [10,'rgba(255,255,255,0.00)','solid'],
      type: 'ellipse',
      fill: ['rgba(192,192,192,0)']
   },
   {
      transform: [[0,0],['39']],
      id: 'hand-paper',
      type: 'image',
      rect: ['-17px','77px','280px','280px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/hand-paper.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_hand-paper}": [
            ["style", "-webkit-transform-origin", [50,200], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50,200],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,200],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,200],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,200],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '39deg'],
            ["style", "opacity", '0'],
            ["style", "left", '-17px'],
            ["style", "top", '77px']
         ],
         "${_Ellipse2}": [
            ["style", "top", '56px'],
            ["style", "left", '57px'],
            ["style", "height", '91px'],
            ["color", "border-color", 'rgba(255,255,255,0.00)'],
            ["style", "border-width", '10px'],
            ["style", "width", '91px']
         ],
         "${_smoke_alarm_slide_sprite-10932b4f}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,242,239.0712890625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '723px'],
            ["style", "width", '242px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         timeline: [
            { id: "eid66", tween: [ "style", "${_hand-paper}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid71", tween: [ "style", "${_hand-paper}", "opacity", '1', { fromValue: '0'}], position: 6250, duration: 105 },
            { id: "eid73", tween: [ "style", "${_hand-paper}", "opacity", '0', { fromValue: '1'}], position: 6355, duration: 645 },
            { id: "eid53", tween: [ "style", "${_smoke_alarm_slide_sprite-10932b4f}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid75", tween: [ "style", "${_smoke_alarm_slide_sprite-10932b4f}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 0 },
            { id: "eid54", tween: [ "style", "${_smoke_alarm_slide_sprite-10932b4f}", "background-position", [0,-241], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2000, duration: 0 },
            { id: "eid55", tween: [ "style", "${_smoke_alarm_slide_sprite-10932b4f}", "background-position", [0,-482], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-238]}], position: 4000, duration: 0 },
            { id: "eid65", tween: [ "transform", "${_hand-paper}", "rotateZ", '-40deg', { fromValue: '39deg'}], position: 6250, duration: 750 },
            { id: "eid59", tween: [ "color", "${_Ellipse2}", "border-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 5000, duration: 500 },
            { id: "eid60", tween: [ "color", "${_Ellipse2}", "border-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 5500, duration: 500 },
            { id: "eid61", tween: [ "color", "${_Ellipse2}", "border-color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,0.00)'}], position: 6000, duration: 500 },
            { id: "eid62", tween: [ "color", "${_Ellipse2}", "border-color", 'rgba(255,255,255,0.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 6500, duration: 500 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-1666722");
