'use strict';

var redis = require('redis-url');
var cache = redis.connect(process.env.REDISTOGO_URL);
var request = require('request');
var xml2js = require('xml2js').parseString;

var Project = {

  base_endpoint: 'http://updates.drupal.org/release-history',

  get: function(project, version, callback) {
    var self = this;
    var cache_key = project + '-' + version;

    cache.get(cache_key, function (err, result) {
        if (err || !result) {
          var url = self.base_endpoint + '/' + project + '/' + version;

          console
          request(url, function (err, res, xml) {
            if (err) {
              callback(err);
            }
            else if (res.statusCode != 200 ) {
              callback(new Error(res.statusCode));
            }
            else {
              xml2js(xml, function (err, data) {
                if (err) {
                  callback(err);
                }
                else {
                  cache.setex(cache_key, 21600, JSON.stringify(data));
                  callback(err, data);
                }
              });
            }
          });
        }
        else {
          callback(err, JSON.parse(result));
        }
    });

  }
}

module.exports = Project;
