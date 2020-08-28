/**
 * Script to control login and start JS lifecycle
 */

// Import spreadsheet generator
import {
    generateSpreadsheet
} from './spreadsheet.js';

// Import users
import {
    admin,
    user
} from './users.js'

/**
 * Function to run on document ready
 */
$(document).ready(function () {

    // Make modal persistent to outside clicks
    $("#modalLoginForm").modal({
        backdrop: 'static',
        keyboard: false
    });

    // Perform checks on login button press
    $("#btn-login").on('click', function () {

        if ($("#login-name").val() === admin[0] && $("#login-pass").val() === admin[1]) {
            // This is an admin user
            startLifecycle(admin[0]);
        } else if ($("#login-name").val() === user[0] && $("#login-pass").val() === user[1]) {
            // This is a normal user
            startLifecycle(user[0]);
        } else {
            // This is unrecognized
            $("#login-alert").remove();
            $("#alert-area").append("<div id=\"login-alert\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">" +
                "<strong>Invalid User!</strong> Please validate your login information!" +
                "<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">" +
                "<span aria-hidden=\"true\">&times;</span>" +
                "</button>" +
                "</div>");
        }
    });
});

/**
 * Function to switch functionality based on user
 *
 * @param username name of user logged in
 */
function startLifecycle(username) {
    $('#modalLoginForm').modal('hide');
    generateSpreadsheet(username);
}