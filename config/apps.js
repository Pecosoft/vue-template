'use strict'

const path = require('path')

module.exports = {
  customer: {
    entry: './src/main.js',
    index: path.resolve(__dirname, '../dist/customer/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/customer')
  },
  dsclerk: {
    entry: './src/main-dsclerk.js',
    index: path.resolve(__dirname, '../dist/dsclerk/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/dsclerk')
  },
  gpleader: {
    entry: './src/main-gpleader.js',
    index: path.resolve(__dirname, '../dist/gpleader/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/gpleader')
  },
  tcworker: {
    entry: './src/main-tcworker.js',
    index: path.resolve(__dirname, '../dist/tcworker/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/tcworker')
  },
  manager: {
    entry: './src/main-manager.js',
    index: path.resolve(__dirname, '../dist/manager/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/manager')
  }
}
