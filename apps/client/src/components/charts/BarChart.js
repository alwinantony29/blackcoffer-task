import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

const BarChart = ({data}) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;
    console.log(data.length);

    const margin = {top: 20, right: 30, bottom: 40, left: 50};
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map(d => d.title)) // Use 'title' for x-axis labels
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.intensity)]) // Use 'intensity' for y-axis values
      .nice()
      .range([height, 0]);

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.title))
      .attr('width', 5)
      .attr('y', d => y(d.intensity))
      .attr('height', d => height - y(d.intensity))
      .attr('fill', 'steelblue');

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    svg.append('g').call(d3.axisLeft(y));
  }, [data]);

  return (
    <div className="p-5 w-[750px] h-[500px]">
      <text>Bar Chart 2024</text>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
