import { sigmoid } from './MathUtils'

// todo WIP
export class Visualiser {
  private context2D: CanvasRenderingContext2D
  width: number
  height: number
  constructor(public canvas: HTMLCanvasElement) {
    this.context2D = this.canvas.getContext('2d')
    this.updateDimensions()
  }

  updateDimensions() {
    this.width = this.canvas.getBoundingClientRect().width
    this.height = this.canvas.getBoundingClientRect().height
  }

  visualiseSigmoid() {
    this.drawBackground()
    this.context2D.fillStyle = 'yellow'
    let { canvas, context2D } = this
    type Range = [number, number]
    let xRange: Range = [-10, 10]
    let yRange: Range = [-10, 10]
    let numOfPoints = 20
    let xRangeAbs = xRange[1] - xRange[0]
    let yRangeAbs = yRange[1] - yRange[0]
    let xInc = xRangeAbs / numOfPoints
    let yInc = yRangeAbs / numOfPoints
    let data = []
    for (let i = xRange[0]; i < xRange[1]; i += xInc) {
      // context2D.ellipse(i, sigmoid(i) - 10, 1, 1, 0, 0, 2 * Math.PI, false)
      //this.context2D.fillRect(i, sigmoid(i) - 10, 2, 2)
      data.push({ x: i, y: sigmoid(i) })
    }
    data.forEach(data => this.context2D.fillRect(data.i, data.y - 10, 2, 2))
  }
  drawBackground() {
    this.context2D.fillStyle = 'black'
    this.context2D.fillRect(0, 0, this.width, this.height)
  }
}
