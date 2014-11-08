var bridgeAddr = "192.168.1.113:3000";

var request = require('request');

var power = function (houseCode, deviceID, value) {
  request.post('http://' + bridgeAddr + '/device', {form:{deviceID: deviceID, houseCode: houseCode, value: value}});
}

var dim = function (houseCode, deviceID, value) {
  request.post('http://' + bridgeAddr + '/device', {form:{deviceID: deviceID, houseCode: houseCode, value: value}});
}

exports.power = power;
exports.dim = dim;