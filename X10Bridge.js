var bridgeAddr = "192.168.1.110:3000";

var request = require('request');

var power = function (houseCode, deviceID, value) {
  request.post('http://' + bridgeAddr + '/x10/power', {form:{deviceID: deviceID, houseCode: houseCode, value: value}});
}

var brightness = function (houseCode, deviceID, value) {
  request.post('http://' + bridgeAddr + '/x10/brightness', {form:{deviceID: deviceID, houseCode: houseCode, value: value}});
}

exports.power = power;
exports.brightness = brightness;