# belly-button-challenge

# Interactive Web Visualizations

This project demonstrates interactive web visualizations using the D3 library. It includes several parts that create different types of charts and display sample metadata. The data used for the visualizations is fetched from a JSON file.

## Part 1

The code in Part 1 fetches the JSON file and creates a horizontal bar chart. It uses the `sample_values` as the values for the bar chart, `otu_ids` as the labels, and `otu_labels` as the hovertext.

## Part 2

The code in Part 2 fetches the same JSON file and creates a bubble chart. It uses `otu_ids` for the x values, `sample_values` for the y values and marker size, and `otu_labels` for the text values. The color of the markers is based on `otu_ids`.

## Part 3

In Part 3, the code fetches the JSON file and displays the sample metadata, which includes an individual's demographic information. It iterates through each key-value pair in the metadata JSON object and displays them on the page.

## Part 4 and 5

The code in Part 4 and 5 continues the sample metadata display. It fetches the JSON file, retrieves the metadata, and uses a function to display each key-value pair in the `metadata` div.

## Part 6

Part 6 combines all the previous parts to create an interactive dashboard. It fetches the JSON file and populates a sample dropdown. The charts and metadata are updated based on the selected sample from the dropdown.

## Usage

1. Open the HTML file in a web browser.
2. The charts and metadata will be displayed based on the initial sample.
3. Use the sample dropdown to select a different sample.
4. The charts and metadata will update accordingly.

## Dependencies

- D3.js library (version 7)
