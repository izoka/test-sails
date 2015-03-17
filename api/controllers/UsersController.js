/**
 * UsersController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    findAll: function (req, res) {
        Users.find( function (err, users) {
            if (err) {
                res.send(400);
            } else {
                res.view({
                    users: users
                });
            }
        });
    },


    subscribe : function (req, res){

        Users.find( function (err, users) {
            if (err) {
                res.send(400);
            } else {

                console.log(Users.subscribe(req.socket,users));

            }
        });

    }
};

