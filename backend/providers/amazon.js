const AWS = require('aws-sdk');
const fs = require('fs');
const config = require('../config/config').amazon;
const BUCKET = config.bucket;

module.exports.uploadFile = async (file) => {
  const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
  const body = await getBody(file);
  const objectParams = {Bucket: BUCKET, Key: file.name, Body: body};
  return s3.putObject(objectParams).promise().then(returl => 'www.google.es');
}

function getBody(file) {
  return new Promise((resolve, reject) =>
    fs.readFile(file.path, function (err, data) {
      if (err) {
        reject(err);
        return
      }
      resolve(data);
    })
  );
}

module.exports.getUrl = (fileName) => {
  return `https://${BUCKET}.s3.eu-west-3.amazonaws.com/${fileName}`
}