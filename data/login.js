const dataManager = require('../util/dataManager');
/**
 * Operations on /login
 */
module.exports = {
    /**
     * summary: This endpoint registers the user with the application
     * description: This endpoint takes the aadhar number, shopkeeper Id , auth data, user_type and start registration and get all relavent data to verify before registration is complete 

     * parameters: username, password
     * produces: 
     * responses: 200
     * operationId: 
     */
    post: {
        200: function (req, res, callback) {
            const username = req.body.username;
            const password = req.body.password;

            const data = dataManager.get(username);
            if(data.password == password) {
                res.send(true);
            } else {
                res.send(false);
            }
        }
    },
    /**
     * summary: login page
     * description: login page
     * parameters: 
     * produces: 
     * responses: 200
     * operationId: 
     */
    get: {
        200: function (req, res, callback) {

        }
    }
};
