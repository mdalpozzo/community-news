const { MongoClient } = require('mongodb');

const findByZip = (zipcode, collection, callback) => {
  collection.find({ zipcode }).toArray((err, items) => {
    if (err) {
      console.log(err);
    } else {
      callback(items);
    }
  });
};

exports.findByZip = findByZip;
