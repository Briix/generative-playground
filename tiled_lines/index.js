import P5 from 'p5'

const s = (p) => {
  const step = 20

  p.setup = function () {
    p.createCanvas(500, 500)
    p.strokeCap(p.PROJECT)
    p.noLoop()
  }

  p.draw = function () {
    p.background('#FFFAE3')
    p.stroke('#F7567C')
    p.strokeWeight(3)
    for (let x = 0; x < p.width; x += step) {
      for (let y = 0; y < p.height; y += step) {
        drawLine(x, y, x+step, y+step)
      }
    }
  }

  const drawLine = (x, y, width, height) => {
    const leftToRight = p.floor(p.random(2))

    if (leftToRight) {
      p.line(x, y, width, height)
    } else {
      p.line(width, y, x, height)
    }
  }
}


new P5(s)
