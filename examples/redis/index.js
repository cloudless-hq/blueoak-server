/*
 * Copyright (c) 2015-2016 PointSource, LLC.
 * MIT Licensed
 */
var server = require('../../');

server.init(function(err) {
    if (err) {
        console.warn('Startup failed', err);
    } else {
        console.log('started');

        //At this point we could safely control the server through the server object
    }

});
