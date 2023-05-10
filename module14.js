Part 1 and 2

<script src="https://d3js.org/d3.v7.min.js"></script>
<div id="chart"></div>
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
.then(data => {
  //Chart creation code
})
.catch(error => {
  console.log("Error loading the JSON file:", error);
});
const sampleValues = data.sample_values;
const otuIds = data.otu_ids;
const otuLabels = data.otu_labels;
const top10SampleValues = sampleValues.slice(0, 10);
const top10OtuIds = otuIds.slice(0, 10);
const top10OtuLabels = otuLabels.slice(0, 10);
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", 600) // Set width
  .attr("height", 400); // Set height
const xScale = d3.scaleLinear()
  .domain([0, d3.max(top10SampleValues)])
  .range([0, 500]); // Set the range of the x-axis values

const yScale = d3.scaleBand()
  .domain(top10OtuIds)
  .range([0, 300]) // Set the range of the y-axis values
  .padding(0.1); // Set padding between bars
svg.selectAll("rect")
  .data(top10SampleValues)
  .join("rect")
  .attr("x", 0)
  .attr("y", (_, i) => yScale(top10OtuIds[i]))
  .attr("width", d => xScale(d))
  .attr("height", yScale.bandwidth())
  .attr("fill", "steelblue");
svg.selectAll("text")
  .data(top10SampleValues)
  .join("text")
  .text(d => d)
  .attr("x", d => xScale(d) + 5) // Adjust the position of the labels
  .attr("y", (_, i) => yScale(top10OtuIds[i]) + yScale.bandwidth() / 2)
  .attr("dy", "0.35em") // Vertical alignment
  .attr("font-size", "12px") // Set the font size of the labels
  .attr("fill", "white"); // Set

Part 3

<script src="https://d3js.org/d3.v7.min.js"></script>
<div id="chart"></div>
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
.then(data => {
  //Chart creation code 
})
.catch(error => {
  console.log("Error loading the JSON file:", error);
});
const otu_ids = data.otu_ids;
const sample_values = data.sample_values;
const otu_labels = data.otu_labels;
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", 600) // Set width
  .attr("height", 400); // Set height

  const xScale = d3.scaleLinear()
  .domain([0, d3.max(otuIds)])
  .range([0, 500]); // Set the range of the x-axis values

const yScale = d3.scaleLinear()
  .domain([0, d3.max(sampleValues)])
  .range([300, 0]); // Set the range of the y-axis values

const sizeScale = d3.scaleLinear()
  .domain([0, d3.max(sampleValues)])
  .range([5, 30]); // Set the range of marker sizes
svg.selectAll("circle")
  .data(otuIds)
  .join("circle")
  .attr("cx", d => xScale(d))
  .attr("cy", (_, i) => yScale(sampleValues[i]))
  .attr("r", (_, i) => sizeScale(sampleValues[i]))
  .attr("fill", d => `rgb(${d % 255}, ${d % 100}, ${d % 50})`); // Set the color based on otu_ids
svg.selectAll("text")
  .data(otuIds)
  .join("text")
  .text((_, i) => otuLabels[i])
  .attr("x", d => xScale(d))
  .attr("y", (_, i) => yScale(sampleValues[i]))
  .attr("dy", "0.35em") // Vertical alignment
  .attr("text-anchor", "middle") // Horizontal alignment
  .attr("font-size", "12px") // Set the font size of the labels
  .attr("fill", "white"); // Set the color of the labels

Part 4 and 5 

<div id="metadata"></div>
d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
.then(data => {
  const metadata = data.metadata;
  displayMetadata(metadata);
})
.catch(error => {
  console.log("Error loading the JSON file:", error);
});
function displayMetadata(metadata) {
    const metadataContainer = d3.select("#metadata");
  
    // Clear previous contents
    metadataContainer.html("");
  
    // Iterate through each key-value pair
    Object.entries(metadata).forEach(([key, value]) => {
      // Create a new paragraph element for each key-value pair
      const paragraph = metadataContainer.append("p");
  
      // Display the key-value pair as text
      paragraph.text(`${key}: ${value}`);
    });
  }
  function displayMetadata(metadata) {
    // Code from step 3...
  
    // Iterate through each key-value pair
    Object.entries(metadata).forEach(([key, value]) => {
      // Code from step 4...
    });
  }
  
  d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
  .then(data => {
    const metadata = data.metadata;
    displayMetadata(metadata);
  })
  .catch(error => {
    console.log("Error loading the JSON file:", error);
  });

 Part 6 
 
 <div id="dashboard">
  <div id="sample-selection">
    <label for="sample-dropdown">Select Sample:</label>
    <select id="sample-dropdown"></select>
  </div>
  <div id="charts">
    <div id="bar-chart"></div>
    <div id="bubble-chart"></div>
  </div>
  <div id="metadata"></div>
</div>

d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json")
  .then(data => {
    const samples = data.names;
    const metadata = data.metadata;
    const otuData = data.samples;

    // Populate the sample dropdown
    const sampleDropdown = d3.select("#sample-dropdown");
    sampleDropdown
      .selectAll("option")
      .data(samples)
      .join("option")
      .attr("value", d => d)
      .text(d => d);

    // Call the update functions to initialize the charts and metadata
    updateCharts(samples[0], otuData);
    updateMetadata(metadata[0]);

    // Event listener for sample dropdown change
    sampleDropdown.on("change", function () {
      const selectedSample = this.value;
      updateCharts(selectedSample, otuData);
      updateMetadata(metadata.find(item => item.id === parseInt(selectedSample)));
    });
  })
  .catch(error => {
    console.log("Error loading the JSON file:", error);
  });

  function updateCharts(selectedSample, otuData) {
    const selectedSampleData = otuData.find(item => item.id === selectedSample);
  
    // Code to update the bar chart using selectedSampleData
    // ...
  
    // Code to update the bubble chart using selectedSampleData
    // ...
  }
  
  function updateMetadata(selectedMetadata) {
    const metadataContainer = d3.select("#metadata");
  
    // Clear previous contents
    metadataContainer.html("");
  
    // Iterate through each key-value pair
    Object.entries(selectedMetadata).forEach(([key, value]) => {
      // Create a new paragraph element for each key-value pair
      const paragraph = metadataContainer.append("p");
  
      // Display the key-value pair as text
      paragraph.text(`${key}: ${value}`);
    });
  }
  
  


