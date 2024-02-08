// components/BarChart.js

import React, {useEffect, useRef, useState} from 'react';
import * as d3 from 'd3';
import axios from 'axios';

const BarChart = () => {
  const svgRef = useRef();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://redesigned-space-pancake-765966gr74qcw6j4-4000.app.github.dev/energy-insights',
      )
      .then(({data}) => {
        console.log(data);
        setData(data);
      })
      .catch(error => console.log(error));
  });

  useEffect(() => {
    if (!data) return;

    const margin = {top: 20, right: 30, bottom: 40, left: 50};
    const width = 600 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(data.map(d => d.variable))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .nice()
      .range([height, 0]);

    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.variable))
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.value))
      .attr('height', d => height - y(d.value))
      .attr('fill', 'steelblue');

    svg
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    svg.append('g').call(d3.axisLeft(y));
  }, [data]);

  return (
    <div className="p-4 w-[750px] h-[500px] bg-slate-500">
      <text>Bar Chart 2024</text>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
