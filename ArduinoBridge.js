var bridgeAddr = "localhost:3000";

var request = require('request');

var power = function (value) {
  request.post('http://' + bridgeAddr + '/arduino/power', {form:{value: value}});
}

var brightness = function (value) {
  request.post('http://' + bridgeAddr + '/arduino/brightness', {form:{value: value}});
}

var hue = function (value) {
  request.post('http://' + bridgeAddr + '/arduino/hue', {form:{value: value}});
}

exports.power = power;
exports.brightness = brightness;
exports.hue = hue;