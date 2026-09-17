/**
 * @file data/cave.js
 * @description Tile layout + sprite states for the cave layers.
 *
 * Layout uses numbers to pick sprite "states", and "x" or false to skip.
 */

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: TILESET IMAGE
   Replace src with your tileset; tiles are 64x64 in the current data.
   Add more states or remove states as each state represents a tile.
   ===================================================================== */
var x = false;
var caveData = {
  info: {
    layout: [
      [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
      [0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0],
      [0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0],
      [0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
      [x,x,x,x,x,x,x,6,6,x,x,x,6,6,x,x,x,6,6,x,x,6,6,x,x,6,6,x,x,x,6,6,x,x,x],
      [x,x,x,x,x,x,x,0,0,x,x,x,0,0,x,x,x,0,0,x,x,0,0,x,x,0,0,x,x,x,0,0,x,x],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
    ],
    src: `images/cityscape(cave).png`
  },
  states: [
    { fps: 5, cycle: false, frames: [ { width: 64, height: 64, startX: 0,   startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 64,  startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 128, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 192, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 256, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 320, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 384, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 448, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 512, startY: 0 } ] },
     { fps: 5, cycle: false, frames: [ { width: 64, height: 64, startX: 576,   startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 640,  startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 704, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 764, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 832, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 893, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 960, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 1024, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 1088, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 1152, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 1216, startY: 0 } ] }
  ]
};

var caveBackData = {
  info: {
    layout: [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [x,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    src: `images/officeinside.png`
  },
  states: caveData.states
};

var caveHitData = {
  info: {
    layout: [
      [0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],
      [0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0],
      [0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0],
      [0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,0],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x],
      [x,x,x,x,x,x,x,6,6,x,x,x,6,6,x,x,x,6,6,x,x,6,6,x,x,6,6,x,x,x,6,6,x,x,x],
      [x,x,x,x,x,x,x,0,0,x,x,x,0,0,x,x,x,0,0,x,x,0,0,x,x,0,0,x,x,x,0,0,x,x],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x]
    ],
    src: `images/officeinside.png`
  },
  states: caveData.states
};