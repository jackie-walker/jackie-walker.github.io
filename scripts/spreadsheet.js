/**
 * Script to generate spreadsheet area functionality
 */

// Import configs
import {
    column_headers_user,
    column_headers_admin,
    columns_user,
    columns_admin,
    hands_on_table_license,
    hidden_column_indexes
} from './configs.js';

// Import users
import {
    admin
} from './users.js'

/**
 * Function to generate spreadsheet
 *
 * @param username name of user to switch functionalities
 */
export function generateSpreadsheet(username) {

    // Read file through input element
    const fileSelector = document.getElementById('file-selector');

    // Add event listener to value changed event of file selector
    fileSelector.addEventListener('change', (event) => {

        // Read input to file element and pass to file reader
        const fileList = event.target.files;
        const file = fileList[0];
        let reader = new FileReader();

        // Read file contents as text
        reader.readAsText(file);

        // Remove animated area
        $("#svg-animation").remove();

        // Remove spreadsheet area if available
        $("#spreadsheet-area").remove();

        // Append new spreadsheet area
        $("#spreadsheet-div").append("<table id=\"spreadsheet-area\" style='padding: 10px'></table>");

        // Override reader onload functionality
        reader.onload = function () {

            // Read file data to text format using Papa CSV lib
            let data = Papa.parse(reader.result).data;

            // Create HandsOnTable spreadsheet area in the newly added spreadsheet area
            let container = document.getElementById('spreadsheet-area');
            let hot = new Handsontable(container, {
                data: data.slice(1),
                rowHeaders: true,
                licenseKey: hands_on_table_license,
                colHeaders: username === admin[0] ? column_headers_admin : column_headers_user,
                columns: username === admin[0] ? columns_admin : columns_user,
                hiddenColumns: {
                    columns: hidden_column_indexes
                }
            });

            // Remove previously added button
            $("#btn-export").remove();

            // Create button to achieve export to CSV functionality
            $("#export-btn-area").append("<button id='btn-export' class='btn btn-sm btn-info'>Save CSV</button>")

            // Set up variables required for CSV export
            let button1 = document.getElementById('btn-export');
            let exportPlugin1 = hot.getPlugin('exportFile');
            let currentDate = new Date();
            let dateStr = currentDate.getFullYear() + "-"
                + (currentDate.getMonth() + 1) + "-"
                + currentDate.getDate() + " "
                + currentDate.getHours() + ":"
                + currentDate.getMinutes() + ":"
                + currentDate.getSeconds();

            // File name of file to be written
            let fileName = fileList[0].name.split('.')[0] + ' - Categorized ' + dateStr

            // Append special value if user is an admin
            if (username === admin[0]) {
                fileName = fileName + " - APPROVED"
            }

            // Add event listener to export button on click
            button1.addEventListener('click', function () {
                exportPlugin1.downloadFile('csv', {
                    bom: false,
                    columnDelimiter: ',',
                    columnHeaders: true,
                    exportHiddenColumns: true,
                    fileExtension: 'csv',
                    filename: fileName,
                    mimeType: 'text/csv',
                    rowDelimiter: '\n'
                });
            });

        };

    });
}