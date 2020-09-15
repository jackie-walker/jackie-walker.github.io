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
    hidden_column_indexes,
    delimiter,
    csv_validation_value
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

        // Override reader onload functionality
        reader.onload = function () {

            console.log("Spreadsheet generation started")

            // Read file data to text format using Papa CSV lib
            let data = Papa.parse(reader.result, {delimiter: delimiter}).data;

            // First row is taken as the validation row
            let validationRow = data[0].toString();

            // Progress only if CSV is validated
            if (validationRow.indexOf(csv_validation_value) !== -1) {

                console.log("Spreadsheet validated")

                // Remove animated area
                $("#svg-animation").remove();

                // Remove spreadsheet area if available
                $("#spreadsheet-area").remove();

                // Append new spreadsheet area
                $("#spreadsheet-div").append("<table id=\"spreadsheet-area\" style='padding: 10px'></table>");

                // Restaurant name will be available in the validation row
                let restaurantName = validationRow.replaceAll(',', ' ').trim();

                // Create HandsOnTable spreadsheet area in the newly added spreadsheet area
                let container = document.getElementById('spreadsheet-area');
                let hot = new Handsontable(container, {
                    data: data.slice(1),
                    delimiter: delimiter,
                    rowHeaders: true,
                    licenseKey: hands_on_table_license,
                    colHeaders: username === admin[0] ? column_headers_admin : column_headers_user,
                    columns: username === admin[0] ? columns_admin : columns_user,
                    hiddenColumns: {
                        columns: hidden_column_indexes
                    }
                });

                // Set restaurant name in the UI
                $("#restaurant-name-area").text(restaurantName);

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

                    console.log("Download button clicked")

                    // Create an empty row with restaurant name on top
                    // This is done to include the name in the exported CSV
                    hot.alter('insert_row', 0);
                    hot.setDataAtCell(0, 0, restaurantName);

                    exportPlugin1.downloadFile('csv', {
                        bom: false,
                        columnDelimiter: delimiter,
                        columnHeaders: false,
                        exportHiddenColumns: true,
                        fileExtension: 'csv',
                        filename: fileName,
                        mimeType: 'text/csv',
                        rowDelimiter: '\n'
                    });

                    // Remove the added row for restaurant name
                    hot.alter('remove_row', 0);
                });
            } else {
                // Show CSV not validated error
                $("#modalCSVInvalid").modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }
        };

    });
}