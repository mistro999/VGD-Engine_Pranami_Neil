/**
 * @file data/player.js
 * @description Player sprite sheet & animation data.
 */

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: PLAYER SPRITESHEET PATH
   - Put your PNG/JPG in /images and change the path below.
   - Each frame is currently 128x128 laid out horizontally.
   - Idle must be present and is required for the engine to work
   ===================================================================== */
var playerData = {
  info: {
    src: `images/player.png` // ← replace with your asset, e.g., 'images/hero.png'
  },
  states: {
    // idle
    idle: {
      fps: 15, cycle: true,
      frames: [
        { width: 80, height: 64, startX: 0,   startY: 0 },
        { width: 80, height: 64, startX: 80, startY: 0 },
        { width: 80, height: 64, startX: 160, startY: 0 },
        { width: 80, height: 64, startX: 240, startY: 0 },
        { width: 80, height: 64, startX: 320, startY: 0 },
        { width: 80, height: 64, startX: 400, startY: 0 },
      ]
    },
    // walk
    walk: {
      fps: 1, cycle: true,
      frames: [
        { width: 80, height: 64, startX: 0,   startY: 64 },
        { width: 80, height: 64, startX: 80, startY: 64 },
        { width: 80, height: 64, startX: 160, startY: 64 },
        { width: 80, height: 64, startX: 240, startY: 64 },
        { width: 80, height: 64, startX: 320, startY: 64 },
      ]
    },
    // jump
    jump: {
      fps: 15, cycle: false,
      frames: [ { width: 80, height: 64, startX: 0, startY: 194 }, 
        { width: 80, height: 64, startX: 80, startY: 194 }, 
        { width: 80, height: 64, startX: 160, startY: 194 }, 
        { width: 80, height: 64, startX: 240, startY: 194 }, ]
    },
    // crouch
    crouch: {
      fps: 5, cycle: false,
      frames: [
        { width: 80, height: 64, startX: 0, startY: 128 },
        { width: 80, height: 64, startX: 80, startY: 128 },
        { width: 80, height: 64, startX: 160, startY: 128 },
        { width: 80, height: 64, startX: 240, startY: 128 },    
      ]
    },
    // attack
    attack: {
      fps: 3, cycle: false,
      frames: [
        { width: 80, height: 64, startX: 0, startY: 256 },
        { width: 80, height: 64, startX: 80, startY: 256 },
        { width: 80, height: 64, startX: 160, startY: 256 },
        { width: 80, height: 64, startX: 240, startY: 256 },
      ]
    },
    // projectile
    projectile: { fps: 3, cycle: true,
      frames: [
        { width: 80, height: 64, startX: 0, startY: 320 },
        { width: 80, height: 64, startX: 80, startY: 320 },
        { width: 80, height: 64, startX: 160, startY: 320 },
        { width: 80, height: 64, startX: 240, startY: 320 },
      ]
      }
  }
}