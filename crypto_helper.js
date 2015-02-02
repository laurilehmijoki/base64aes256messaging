var URLSafeBase64 = require('urlsafe-base64');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr';

function encrypt(password, text) {
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return URLSafeBase64.encode(new Buffer(crypted));
}

function decrypt(password, text) {
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(URLSafeBase64.decode(text).toString(),'hex','utf8')
  dec += decipher.final('utf8');
  return dec
}


module.exports = {
  decrypt: decrypt,
  encrypt: encrypt
}
