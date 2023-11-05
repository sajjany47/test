import { useEffect, useRef } from "react";
import * as d3 from "d3";

function BarChart() {
  const svgRef = useRef(null);

  useEffect(() => {
    const data = [
      { name: "A", value: 10 },
      { name: "B", value: 20 },
      { name: "C", value: 15 },
      { name: "d", value: 30 },
      { name: "e", value: 40 },
      { name: "f", value: 50 },
      // Add more data points as needed
    ];
    // D3 code for creating the bar chart
    if (data && data.length) {
      const svg = d3.select(svgRef.current);

      // Set the chart dimensions
      const width = 300;
      const height = 200;

      // Create a scale for the x-axis (assuming data is an array of objects with 'name' and 'value' properties)
      const xScale = d3
        .scaleBand()
        .domain(data.map((d) => d.name))
        .range([0, width])
        .padding(0.8);

      // Create a scale for the y-axis
      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .nice()
        .range([height, 0]);

      // Create the bars
      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d) => xScale(d.name))
        .attr("y", (d) => yScale(d.value))
        .attr("width", xScale.bandwidth())
        .attr("height", (d) => height - yScale(d.value))
        .attr("fill", "steelblue");

      // Create the x-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height})`)
        .call(d3.axisBottom(xScale));

      // Create the y-axis
      svg.append("g").call(d3.axisLeft(yScale));
    }
  }, []);

  return (
    <svg ref={svgRef} width={400} height={200}>
      {/* Chart content will be drawn here */}
    </svg>
  );
}

export default BarChart;
