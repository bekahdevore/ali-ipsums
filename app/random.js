var random = require('mongoose-simple-random');

var s = new Schema({
  message: String
});
s.plugin(random);

Test = mongoose.model('Test', s);

//simple
var Test = require('./sentences');

Test.findRandom({}, {}, {count: 5}, function(err, results) {
  if (err) console.log(err);
  else console.log(results);
});


//with options
var Test = require('./sentences');

var filter = { type: { $in: ['education', 'engineering'] } };
var fields = { name: 1, description: 0 };
var options = { skip: 10, limit: 10, count: 5 };
Test.findRandom(filter, fields, options, function(err, results) {
  if (err) console.log(err);
  else console.log(results);
});