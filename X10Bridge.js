var bridgeAddr = "localhost:3000";

var request = require('request');

var power = function (houseCode, deviceID, value) {
  console.log("Sending power value to " + value + " for device " + deviceID + " house " + houseCode);
  request.post('http://' + bridgeAddr + '/x10/power', {form:{deviceID: deviceID, houseCode: houseCode, value: value}});
}

var brightness = function (houseCode, deviceID, value) {
  console.log("Sending brightness value to " + value + " for device " + deviceID + " house " + houseCode);
  request.post('http://' + bridgeAddr + '/x10/brightness', {form:{deviceID: deviceID, houseCode: houseCode, value: value}});
}

exports.power = power;
exports.brightness = brightness;