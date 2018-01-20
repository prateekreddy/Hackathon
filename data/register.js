'use strict';
var Mockgen = require('./mockgen.js');
/**
 * Operations on /register
 */
module.exports = {
    /**
     * summary: This endpoint registers
     * description: This endpoint registers

     * parameters: username, password, name, email, phone
     * produces: 
     * responses: 200
     * operationId: 
     */
    post: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/register',
                operation: 'post',
                response: '200'
            }, callback);
        }
    },
    /**
     * summary: register page
     * description: register page
     * parameters: 
     * produces: 
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/register',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
