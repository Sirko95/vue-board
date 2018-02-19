import data from './data.json'

console.log(typeof data)

let lanes = Object.keys(data.lanes).map(item => data.lanes[item])

function getLanes () {
  return lanes
}

export default {
  getLanes
}
