/* eslint-disable no-unused-expressions */
const locale = require('.')

locale.all // [language: '...']
locale.getByTag('pt-br').name // 'Portuguese'
locale.where('tag', 'pt-br').name // 'Portuguese'
