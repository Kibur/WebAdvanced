/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['geo, sans-serif']='<script src=\"http://use.edgefonts.net/geo:i4,n4:all.js\"></script>';


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
            id:'straat',
            type:'image',
            rect:['0px','0px','480px','800px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"straat.jpg",'0px','0px']
         },
         {
            id:'Symb_Player',
            type:'rect',
            rect:['228px','705px','auto','auto','auto','auto']
         },
         {
            id:'Symb_Blood',
            type:'rect',
            rect:['2px','823px','auto','auto','auto','auto']
         },
         {
            id:'Symb_Car4',
            type:'rect',
            rect:['497px','261px','auto','auto','auto','auto']
         },
         {
            id:'Symb_Car3',
            type:'rect',
            rect:['492px','185px','auto','auto','auto','auto']
         },
         {
            id:'Symb_Car2',
            type:'rect',
            rect:['480px','105px','auto','auto','auto','auto']
         },
         {
            id:'Symb_Car1',
            type:'rect',
            rect:['480px','29px','auto','auto','auto','auto']
         },
         {
            id:'Symb_Car8',
            type:'rect',
            rect:['-149px','563px','auto','auto','auto','auto']
         },
         {
            id:'Symb_Car7',
            type:'rect',
            rect:['-149px','492px','auto','auto','auto','auto']
         },
         {
            id:'Symb_Car6',
            type:'rect',
            rect:['-149px','420px','auto','auto','auto','auto']
         },
         {
            id:'Symb_Car5',
            type:'rect',
            rect:['-149px','343px','auto','auto','auto','auto']
         },
         {
            id:'lblScore',
            display:'none',
            type:'text',
            rect:['317px','0px','163px','58px','auto','auto'],
            cursor:['default'],
            text:"0",
            align:"right",
            font:['geo, sans-serif',50,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'frame',
            type:'rect',
            rect:['94px','268px','307px','350px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            opacity:1,
            fill:["rgba(192,192,192,0.94)"],
            stroke:[0,"rgba(0,231,255,1.00)","none"]
         },
         {
            id:'lblName',
            type:'text',
            rect:['58px','394px','149px','39px','auto','auto'],
            text:"Name:",
            align:"center",
            font:['geo, sans-serif',25,"rgba(38,38,38,1)","normal","none","normal"]
         },
         {
            id:'txtInput',
            type:'rect',
            rect:['172px','397px','155px','20px','auto','auto'],
            fill:["rgba(192,192,192,1.00)"],
            stroke:[0,"rgb(0, 231, 255)","none"]
         },
         {
            id:'lblTapToStart',
            type:'text',
            rect:['155px','452px','186px','50px','auto','auto'],
            text:"Tap to start",
            align:"left",
            font:['geo, sans-serif',36,"rgba(255,255,255,1.00)","normal","none","normal"],
            transform:[]
         },
         {
            id:'lblTitle',
            type:'text',
            rect:['107px','278px','266px','93px','auto','auto'],
            text:"The mad pedestrian",
            align:"left",
            font:['geo, sans-serif',36,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Symb_StartButton',
            type:'rect',
            rect:['182','485px','auto','auto','auto','auto']
         },
         {
            id:'lblScoreboard',
            display:'none',
            type:'text',
            rect:['175px','369px','176px','41px','auto','auto'],
            text:"Scoreboard",
            font:['geo, sans-serif',30,"rgba(255,111,0,1.00)","normal","none",""]
         },
         {
            id:'Symb_SaveButton',
            display:'none',
            type:'rect',
            rect:['30px','547px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.55714','0.55714']]
         },
         {
            id:'Symb_AgainButton',
            display:'none',
            type:'rect',
            rect:['181px','547px','auto','auto','auto','auto'],
            transform:[[],[],[],['0.55714','0.55714']]
         },
         {
            id:'txtBoard',
            display:'none',
            type:'text',
            rect:['155px','400px','186px','152px','auto','auto'],
            text:" ",
            userClass:"Scoreboard",
            font:['geo, sans-serif',24,"rgba(0,0,0,1)","normal","none",""]
         }],
         symbolInstances: [
         {
            id:'Symb_AgainButton',
            symbolName:'Symb_AgainButton'
         },
         {
            id:'Symb_SaveButton',
            symbolName:'Symb_SaveButton'
         },
         {
            id:'Symb_Player',
            symbolName:'Symb_Player'
         },
         {
            id:'Symb_Blood',
            symbolName:'Symb_Blood'
         },
         {
            id:'Symb_Car4',
            symbolName:'Symb_Car4'
         },
         {
            id:'Symb_Car1',
            symbolName:'Symb_Car1'
         },
         {
            id:'Symb_Car7',
            symbolName:'Symb_Car7'
         },
         {
            id:'Symb_Car5',
            symbolName:'Symb_Car5'
         },
         {
            id:'Symb_StartButton',
            symbolName:'Symb_StartButton'
         },
         {
            id:'Symb_Car6',
            symbolName:'Symb_Car6'
         },
         {
            id:'Symb_Car2',
            symbolName:'Symb_Car2'
         },
         {
            id:'Symb_Car8',
            symbolName:'Symb_Car8'
         },
         {
            id:'Symb_Car3',
            symbolName:'Symb_Car3'
         }
         ]
      },
   states: {
      "Base State": {
         "${_straat}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_Symb_Car5}": [
            ["style", "left", '-149px'],
            ["style", "top", '343px']
         ],
         "${_txtBoard}": [
            ["style", "top", '400px'],
            ["style", "height", '152px'],
            ["style", "font-family", 'geo, sans-serif'],
            ["style", "display", 'none'],
            ["style", "font-size", '24px']
         ],
         "${_lblScore}": [
            ["style", "left", '317px'],
            ["style", "font-size", '50px'],
            ["style", "top", '0px'],
            ["style", "text-align", 'right'],
            ["style", "overflow", 'hidden'],
            ["style", "display", 'none'],
            ["style", "width", '163px'],
            ["style", "cursor", 'default'],
            ["style", "height", '58px']
         ],
         "${_Symb_Car4}": [
            ["style", "left", '497px'],
            ["style", "top", '261px']
         ],
         "${_lblTitle}": [
            ["style", "top", '278px'],
            ["style", "text-align", 'left'],
            ["style", "width", '266px'],
            ["style", "left", '107px'],
            ["style", "font-size", '36px']
         ],
         "${_Symb_AgainButton}": [
            ["style", "top", '547px'],
            ["transform", "scaleY", '0.55714'],
            ["transform", "scaleX", '0.55714'],
            ["style", "left", '181px'],
            ["style", "display", 'none']
         ],
         "${_Symb_StartButton}": [
            ["style", "top", '485px']
         ],
         "${_Symb_Car8}": [
            ["style", "left", '-149px'],
            ["style", "top", '563px']
         ],
         "${_Symb_Car2}": [
            ["style", "left", '480px'],
            ["style", "top", '105px']
         ],
         "${_txtInput}": [
            ["color", "background-color", 'rgba(192,192,192,1.00)'],
            ["style", "height", '20px'],
            ["style", "top", '397px'],
            ["style", "left", '172px'],
            ["style", "width", '155px']
         ],
         "${_Symb_Car7}": [
            ["style", "left", '-149px'],
            ["style", "top", '492px']
         ],
         "${_Symb_Blood}": [
            ["style", "top", '823px'],
            ["style", "left", '2px']
         ],
         "${_lblScoreboard}": [
            ["style", "top", '369px'],
            ["style", "font-size", '30px'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(255,111,0,1.00)'],
            ["style", "height", '41px'],
            ["style", "font-family", 'geo, sans-serif'],
            ["style", "left", '175px'],
            ["style", "width", '176px']
         ],
         "${_frame}": [
            ["style", "top", '268px'],
            ["style", "height", '350px'],
            ["color", "border-color", 'rgba(0,231,255,1.00)'],
            ["color", "background-color", 'rgba(192,192,192,0.94)'],
            ["style", "opacity", '1']
         ],
         "${_Symb_Car1}": [
            ["style", "left", '480px'],
            ["style", "top", '29px']
         ],
         "${_lblTapToStart}": [
            ["style", "top", '452px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "text-decoration", 'none'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '50px'],
            ["transform", "skewX", '0deg'],
            ["style", "left", '155px'],
            ["style", "width", '186px']
         ],
         "${_Symb_SaveButton}": [
            ["style", "top", '547px'],
            ["transform", "scaleY", '0.55714'],
            ["transform", "scaleX", '0.55714'],
            ["style", "left", '30px'],
            ["style", "display", 'none']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '800px'],
            ["style", "width", '480px']
         ],
         "${_lblName}": [
            ["style", "top", '394px'],
            ["style", "left", '58px'],
            ["style", "font-size", '25px']
         ],
         "${_Symb_Car3}": [
            ["style", "left", '492px'],
            ["style", "top", '185px']
         ],
         "${_Symb_Car6}": [
            ["style", "left", '-149px'],
            ["style", "top", '420px']
         ],
         "${_Symb_Player}": [
            ["style", "left", '228px'],
            ["style", "top", '705px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
            { id: "eid190", tween: [ "style", "${_Symb_SaveButton}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid195", tween: [ "style", "${_Symb_AgainButton}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid177", tween: [ "style", "${_lblScoreboard}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid192", tween: [ "style", "${_txtBoard}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid174", tween: [ "style", "${_lblScore}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 }         ]
      }
   }
},
"Symb_Player": {
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
      id: 'player',
      rect: ['0px','0px','35px','24px','auto','auto'],
      transform: [],
      fill: ['rgba(0,0,0,0)','images/player.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_player}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '24px'],
            ["style", "width", '35px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3750,
         autoPlay: false,
         labels: {
            "stand_up": 0,
            "stand_left": 1000,
            "stand_right": 2000,
            "stand_down": 3000
         },
         timeline: [
            { id: "eid136", tween: [ "transform", "${_player}", "rotateZ", '-10deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid138", tween: [ "transform", "${_player}", "rotateZ", '10deg', { fromValue: '-10deg'}], position: 250, duration: 250 },
            { id: "eid140", tween: [ "transform", "${_player}", "rotateZ", '0deg', { fromValue: '10deg'}], position: 500, duration: 250 },
            { id: "eid147", tween: [ "transform", "${_player}", "rotateZ", '-100deg', { fromValue: '-90deg'}], position: 1000, duration: 250 },
            { id: "eid149", tween: [ "transform", "${_player}", "rotateZ", '-80deg', { fromValue: '-100deg'}], position: 1250, duration: 250 },
            { id: "eid151", tween: [ "transform", "${_player}", "rotateZ", '-90deg', { fromValue: '-80deg'}], position: 1500, duration: 250 },
            { id: "eid154", tween: [ "transform", "${_player}", "rotateZ", '80deg', { fromValue: '90deg'}], position: 2000, duration: 250 },
            { id: "eid156", tween: [ "transform", "${_player}", "rotateZ", '100deg', { fromValue: '80deg'}], position: 2250, duration: 250 },
            { id: "eid158", tween: [ "transform", "${_player}", "rotateZ", '90deg', { fromValue: '100deg'}], position: 2500, duration: 250 },
            { id: "eid161", tween: [ "transform", "${_player}", "rotateZ", '170deg', { fromValue: '180deg'}], position: 3000, duration: 250 },
            { id: "eid163", tween: [ "transform", "${_player}", "rotateZ", '190deg', { fromValue: '170deg'}], position: 3250, duration: 250 },
            { id: "eid165", tween: [ "transform", "${_player}", "rotateZ", '180deg', { fromValue: '190deg'}], position: 3500, duration: 250 }         ]
      }
   }
},
"Symb_Car1": {
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
      id: 'Mazda_RX8',
      rect: ['-76px','-14px','300px','225px','auto','auto'],
      transform: [[0,0],['-90'],[],['0.66','0.66']],
      fill: ['rgba(0,0,0,0)','images/cars/Mazda%20RX8.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '198px'],
            ["style", "width", '149px']
         ],
         "${_Mazda_RX8}": [
            ["style", "top", '-14px'],
            ["transform", "scaleY", '0.66'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.66'],
            ["style", "left", '-76px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid133", tween: [ "style", "${_Mazda_RX8}", "left", '-712px', { fromValue: '-76px'}], position: 0, duration: 3000 }         ]
      }
   }
},
"Symb_Car2": {
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
      rect: ['-75px','-13px','300px','225px','auto','auto'],
      id: 'Dodge_Charger',
      transform: [[0,0],['-90'],[],['0.66','0.66']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cars/Dodge%20Charger.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Dodge_Charger}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.66'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.66'],
            ["style", "left", '-75px']
         ],
         "${symbolSelector}": [
            ["style", "height", '198px'],
            ["style", "width", '149px']
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
            { id: "eid130", tween: [ "style", "${_Dodge_Charger}", "left", '-709px', { fromValue: '-75px'}], position: 0, duration: 2500 }         ]
      }
   }
},
"Symb_Car3": {
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
      id: 'Citroen_C4',
      rect: ['-88px','-30px','300px','225px','auto','auto'],
      transform: [[0,0],['-90'],[],['0.55','0.55']],
      fill: ['rgba(0,0,0,0)','images/cars/Citroen%20C4.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '165px'],
            ["style", "width", '124px']
         ],
         "${_Citroen_C4}": [
            ["style", "top", '-30px'],
            ["transform", "scaleY", '0.55'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.55'],
            ["style", "left", '-88px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3500,
         autoPlay: true,
         timeline: [
            { id: "eid127", tween: [ "style", "${_Citroen_C4}", "left", '-711px', { fromValue: '-88px'}], position: 0, duration: 3500 }         ]
      }
   }
},
"Symb_Car4": {
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
      rect: ['-92px','-36px','300px','225px','auto','auto'],
      id: 'Chevrolet_Crossfire',
      transform: [[0,0],['-90'],[],['0.51','0.51']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cars/Chevrolet%20Crossfire.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Chevrolet_Crossfire}": [
            ["style", "top", '-36px'],
            ["transform", "scaleY", '0.51'],
            ["transform", "rotateZ", '-90deg'],
            ["transform", "scaleX", '0.51'],
            ["style", "left", '-92px']
         ],
         "${symbolSelector}": [
            ["style", "height", '153px'],
            ["style", "width", '115px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid124", tween: [ "style", "${_Chevrolet_Crossfire}", "left", '-710px', { fromValue: '-92px'}], position: 0, duration: 2250 }         ]
      }
   }
},
"Symb_Car5": {
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
      rect: ['-75px','-13px','300px','225px','auto','auto'],
      id: 'Chevrolet_Camaro',
      transform: [[0,0],['90'],[],['0.66','0.66']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cars/Chevrolet%20Camaro.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Chevrolet_Camaro}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.66'],
            ["transform", "rotateZ", '90deg'],
            ["transform", "scaleX", '0.66'],
            ["style", "left", '-75px']
         ],
         "${symbolSelector}": [
            ["style", "height", '198px'],
            ["style", "width", '149px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid121", tween: [ "style", "${_Chevrolet_Camaro}", "left", '558px', { fromValue: '-75px'}], position: 0, duration: 2000 }         ]
      }
   }
},
"Symb_Car6": {
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
      rect: ['-75px','-13px','300px','225px','auto','auto'],
      id: 'Audi_S5',
      transform: [[0,0],['90'],[],['0.66','0.66']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cars/Audi%20S5.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Audi_S5}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.66'],
            ["transform", "rotateZ", '90deg'],
            ["transform", "scaleX", '0.66'],
            ["style", "left", '-75px']
         ],
         "${symbolSelector}": [
            ["style", "height", '198px'],
            ["style", "width", '149px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3250,
         autoPlay: true,
         timeline: [
            { id: "eid118", tween: [ "style", "${_Audi_S5}", "left", '561px', { fromValue: '-75px'}], position: 0, duration: 3250 }         ]
      }
   }
},
"Symb_Car7": {
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
      rect: ['-75px','-13px','300px','225px','auto','auto'],
      id: 'Audi_R8',
      transform: [[0,0],['90'],[],['0.66','0.66']],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cars/Audi%20R8.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Audi_R8}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.66'],
            ["transform", "rotateZ", '90deg'],
            ["transform", "scaleX", '0.66'],
            ["style", "left", '-75px']
         ],
         "${symbolSelector}": [
            ["style", "height", '198px'],
            ["style", "width", '149px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2250,
         autoPlay: true,
         timeline: [
            { id: "eid115", tween: [ "style", "${_Audi_R8}", "left", '562px', { fromValue: '-75px'}], position: 0, duration: 2250 }         ]
      }
   }
},
"Symb_Car8": {
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
      transform: [[0,0],['90'],[],['0.66','0.66']],
      id: 'Audi_A2',
      type: 'image',
      rect: ['-75px','-13px','300px','225px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/cars/Audi%20A2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Audi_A2}": [
            ["style", "top", '-13px'],
            ["transform", "scaleY", '0.66'],
            ["transform", "rotateZ", '90deg'],
            ["transform", "scaleX", '0.66'],
            ["style", "left", '-75px']
         ],
         "${symbolSelector}": [
            ["style", "height", '198px'],
            ["style", "width", '149px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid112", tween: [ "style", "${_Audi_A2}", "left", '556px', { fromValue: '-75px'}], position: 0, duration: 3000 }         ]
      }
   }
},
"Symb_Blood": {
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
      id: 'bloed_spritesheet',
      rect: ['0px','0px','522px','84px','auto','auto'],
      clip: ['rect(0px 88px 84px 0px)'],
      fill: ['rgba(0,0,0,0)','images/bloed_spritesheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_bloed_spritesheet}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,88,84,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84px'],
            ["style", "width", '522px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 529,
         autoPlay: false,
         timeline: [
            { id: "eid168", tween: [ "style", "${_bloed_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid169", tween: [ "style", "${_bloed_spritesheet}", "background-position", [-86,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 104, duration: 0 },
            { id: "eid170", tween: [ "style", "${_bloed_spritesheet}", "background-position", [-174,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-86,0]}], position: 208, duration: 0 },
            { id: "eid171", tween: [ "style", "${_bloed_spritesheet}", "background-position", [-261,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-174,0]}], position: 315, duration: 0 },
            { id: "eid172", tween: [ "style", "${_bloed_spritesheet}", "background-position", [-345,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-261,0]}], position: 425, duration: 0 },
            { id: "eid173", tween: [ "style", "${_bloed_spritesheet}", "background-position", [-434,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-345,0]}], position: 529, duration: 0 }         ]
      }
   }
},
"Symb_StartButton": {
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
      id: 'pushbutton_spritesheet',
      rect: ['0px','0px','266px','133px','auto','auto'],
      clip: ['rect(0px 128px 133px 0px)'],
      fill: ['rgba(0,0,0,0)','images/pushbutton_spritesheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_pushbutton_spritesheet}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '133px'],
            ["style", "clip", [0,128,133,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${symbolSelector}": [
            ["style", "height", '133px'],
            ["style", "width", '266px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "pressed": 500
         },
         timeline: [
            { id: "eid175", tween: [ "style", "${_pushbutton_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid176", tween: [ "style", "${_pushbutton_spritesheet}", "background-position", [-133,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 }         ]
      }
   }
},
"Symb_Button": {
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
      id: 'button_spritesheet',
      rect: ['0px','0px','266px','46px','auto','auto'],
      clip: ['rect(0px 133px 46px 0px)'],
      fill: ['rgba(0,0,0,0)','images/button_spritesheet.png','0px','0px']
   },
   {
      font: ['geo, sans-serif',30,'rgba(225,225,225,1.00)','normal','none','normal'],
      type: 'text',
      id: 'Text',
      text: 'Save',
      align: 'center',
      rect: ['1px','5px','131px','44px','auto','auto']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button_spritesheet}": [
            ["style", "top", '0px'],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '46px'],
            ["style", "clip", [0,133,46,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "left", '0px'],
            ["style", "width", '266px']
         ],
         "${_Text}": [
            ["style", "top", '5px'],
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(225,225,225,1.00)'],
            ["style", "height", '44px'],
            ["style", "left", '1px'],
            ["style", "width", '131px']
         ],
         "${symbolSelector}": [
            ["style", "height", '49px'],
            ["style", "width", '266px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "pressed": 500
         },
         timeline: [
            { id: "eid185", tween: [ "style", "${_button_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid186", tween: [ "style", "${_button_spritesheet}", "background-position", [-134,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 }         ]
      }
   }
},
"Symb_SaveButton": {
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
      rect: ['0px','0px','400px','70px','auto','auto'],
      id: 'button_spritesheet',
      type: 'image',
      clip: ['rect(0px 201px 70px 0px)'],
      fill: ['rgba(0,0,0,0)','images/button_spritesheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button_spritesheet}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,201,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '70px'],
            ["style", "width", '400px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "pressed": 500
         },
         timeline: [
            { id: "eid188", tween: [ "style", "${_button_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid189", tween: [ "style", "${_button_spritesheet}", "background-position", [-200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 }         ]
      }
   }
},
"Symb_AgainButton": {
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
      id: 'button_again_spritesheet',
      rect: ['0px','0px','400px','70px','auto','auto'],
      clip: ['rect(0px 199px 70px 0px)'],
      fill: ['rgba(0,0,0,0)','images/button_again_spritesheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_button_again_spritesheet}": [
            ["style", "top", '0px'],
            ["style", "clip", [0,199,70,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "left", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '70px'],
            ["style", "width", '400px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "pressed": 500
         },
         timeline: [
            { id: "eid193", tween: [ "style", "${_button_again_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 0 },
            { id: "eid194", tween: [ "style", "${_button_again_spritesheet}", "background-position", [-200,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 500, duration: 0 }         ]
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
})(jQuery, AdobeEdge, "EDGE-93573414");
