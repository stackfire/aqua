'use strict';


exports.register = function (server, options, next) {

    server.route({
        method: 'GET',
        path: '/live',
        handler: function (request, reply) {

            reply.view('live/index');
        }
    });


    next();
};


exports.register.attributes = {
    name: 'web/live'
};
