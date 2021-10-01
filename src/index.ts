import Engine from './engine'

const canvas = document.getElementById('game') as HTMLCanvasElement
const engine = new Engine(canvas, {})

export { engine }