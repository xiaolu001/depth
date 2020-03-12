'use strict'
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lib/depth-chart.umd.min.js')
} else {
  module.exports = require('./lib/depth-chart.umd.js')
}
