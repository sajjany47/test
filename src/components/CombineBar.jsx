import { useEffect, useMemo, useRef } from "react";
import * as d3 from "d3";

const MARGIN = { top: 30, right: 30, bottom: 50, left: 50 };

const width = 700;
const height = 400;

const data = [
  {
    x: "Jan",
    groupA: 12,
    groupB: 19,
    groupC: 9,
    groupD: 2,
  },
  {
    x: "Feb",
    groupA: 16,
    groupB: 21,
    groupC: 13,
    groupD: 8,
  },
  {
    x: "Mar",
    groupA: 23,
    groupB: 21,
    groupC: 24,
    groupD: 9,
  },
  {
    x: "Apr",
    groupA: 38,
    groupB: 34,
    groupC: 25,
    groupD: 23,
  },
  {
    x: "May",
    groupA: 42,
    groupB: 46,
    groupC: 34,
    groupD: 26,
  },
  {
    x: "Jun",
    groupA: 34,
    groupB: 42,
    groupC: 32,
    groupD: 26,
  },
  {
    x: "Jul",
    groupA: 2,
    groupB: 34,
    groupC: 21,
    groupD: 27,
  },
  {
    x: "Aug",
    groupA: 21,
    groupB: 32,
    groupC: 16,
    groupD: 18,
  },
  {
    x: "Sept",
    groupA: 18,
    groupB: 31,
    groupC: 18,
    groupD: 12,
  },
  {
    x: "Oct",
    groupA: 12,
    groupB: 21,
    groupC: 14,
    groupD: 10,
  },
  {
    x: "Nov",
    groupA: 12,
    groupB: 18,
    groupC: 14,
    groupD: 10,
  },
  {
    x: "Dec",
    groupA: 2,
    groupB: 8,
    groupC: 4,
    groupD: 10,
  },
];

export const CombineBar = () => {
  // bounds = area inside the graph axis = calculated by substracting the margins

  const axesRef = useRef(null);
  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const allGroups = data.map((d) => String(d.x));
  const allSubgroups = ["groupA", "groupB", "groupC", "groupD"]; // todo

  // Data Wrangling: stack the data
  const stackSeries = d3.stack().keys(allSubgroups).order(d3.stackOrderNone);
  //.offset(d3.stackOffsetNone);
  const series = stackSeries(data);

  // Y axis
  const max = 200; // todo
  const yScale = useMemo(() => {
    return d3
      .scaleLinear()
      .domain([0, max || 0])
      .range([boundsHeight, 0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // X axis
  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(allGroups)
      .range([0, boundsWidth])
      .padding(0.05);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, width]);

  // Color Scale
  var colorScale = d3
    .scaleOrdinal()
    .domain(allGroups)
    .range(["#e0ac2b", "#e85252", "#6689c6", "#9a6fb0", "#a53253"]);

  // Render the X and Y axis using d3.js, not react
  useEffect(() => {
    const svgElement = d3.select(axesRef.current);
    svgElement.selectAll("*").remove();
    const xAxisGenerator = d3.axisBottom(xScale);
    svgElement
      .append("g")
      .attr("transform", "translate(0," + boundsHeight + ")")
      .call(xAxisGenerator);

    const yAxisGenerator = d3.axisLeft(yScale);
    svgElement.append("g").call(yAxisGenerator);
  }, [xScale, yScale, boundsHeight]);

  const rectangles = series.map((subgroup, i) => {
    return (
      <g key={i}>
        {subgroup.map((group, j) => {
          return (
            <rect
              key={j}
              x={xScale(group.data.x)}
              y={yScale(group[1])}
              height={yScale(group[0]) - yScale(group[1])}
              width={xScale.bandwidth()}
              fill={colorScale(subgroup.key)}
              opacity={0.9}
            ></rect>
          );
        })}
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        >
          {rectangles}
        </g>
        <g
          width={boundsWidth}
          height={boundsHeight}
          ref={axesRef}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(",")})`}
        />
      </svg>
    </div>
  );
};
