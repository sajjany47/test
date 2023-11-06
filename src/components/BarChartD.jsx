import { useEffect, useRef } from "react";
import * as d3 from "d3";
const BarChartD = () => {
  const svgRef = useRef(null);
  useEffect(() => {
    const data = [
      { letter: "A", frequency: 10 },
      { letter: "B", frequency: 20 },
      { letter: "C", frequency: 15 },
      { letter: "d", frequency: 30 },
      { letter: "e", frequency: 40 },
      { letter: "f", frequency: 50 },
      // Add more data points as needed
    ];
    // D3 code for creating the bar chart
    if (data && data.length) {
      const svg = d3.select(svgRef.current);

      // Set the chart dimensions
      const width = 928;
      const height = 500;
      const marginTop = 30;
      const marginRight = 0;
      const marginBottom = 30;
      const marginLeft = 40;

      // Create a scale for the x-axis (assuming data is an array of objects with 'name' and 'value' properties)
      const x = d3
        .scaleBand()
        .domain(
          d3.groupSort(
            data,
            ([d]) => -d.frequency,
            (d) => d.letter
          )
        ) // descending frequency
        .range([marginLeft, width - marginRight])
        .padding(0.1);

      // Declare the y (vertical position) scale.
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.frequency)])
        .range([height - marginBottom, marginTop]);

      // Create the bars
      svg
        .append("g")
        .attr("fill", "steelblue")
        .selectAll()
        .data(data)
        .join("rect")
        .attr("x", (d) => x(d.letter))
        .attr("y", (d) => y(d.frequency))
        .attr("height", (d) => y(0) - y(d.frequency))
        .attr("width", x.bandwidth());
      // Create the x-axis
      svg
        .append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

      // Add the y-axis and label, and remove the domain line.
      svg
        .append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
        .call((g) => g.select(".domain").remove())
        .call((g) =>
          g
            .append("text")
            .attr("x", -marginLeft)
            .attr("y", 10)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("↑ Frequency (%)")
        );
    }
  }, []);
  return (
    <svg ref={svgRef} width={400} height={200}>
      {/* Chart content will be drawn here */}
    </svg>
  );
};

export default BarChartD;
