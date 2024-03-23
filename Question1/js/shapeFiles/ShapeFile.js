/**
 * ShapeFile.js
 * This file contains ShapeInfo Object
 */

let ShapeInfo = {
  Rectangle: {
    children: [
      {
        rect: {
          x: '10',
          y: '10',
          width: '80',
          height: '50'
        }
      }
    ]
  },
  // Text: {
  //   children: [
  //     {
  //       rect: {
  //         x: '10',
  //         y: '10',
  //         width: '80',
  //         height: '50'
  //       }
  //     }
  //   ],
  //   stroke: 'none',
  //   fill: 'none'
  // },
  // RoundRectangle: {
  //   children: [
  //     {
  //       rect: {
  //         x: '10',
  //         y: '10',
  //         width: '80',
  //         height: '50',
  //         rx: '3',
  //         ry: '3'
  //       }
  //     }
  //   ]
  // },
  // Ellipse: {
  //   children: [
  //     {
  //       ellipse: {
  //         cx: '50',
  //         cy: '50',
  //         rx: '30',
  //         ry: '20'
  //       }
  //     }
  //   ]
  // },
  Circle: {
    children: [
      {
        ellipse: {
          cx: '50',
          cy: '50',
          rx: '30',
          ry: '30'
        }
      }
    ]
  },
  Diamond: {
    children: [
      {
        path: {
          d: 'M 15.98 1.36 L 29.58 14.96 L 15.98 28.56 L 2.38 14.96 Z'
        }
      }
    ],
    scale: '2 2'
  },
  Octagon: {
    children: [
      {
        path: {
          d:'M 12.72 1.36 L 27.36 1.36 L 34.56 9.68 L 34.56 22.88 L 27.36 31.2 L 12.72 31.2 L 5.52 22.88 L 5.52 9.68 Z'
        }
      }
    ],
    scale: '2 2'
  }
};

//
