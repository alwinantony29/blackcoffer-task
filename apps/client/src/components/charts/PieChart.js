import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

const PieChart = ({data = []}) => {
  console.log(data);
  const countries = data?.reduce((acc, curr) => {
    if (!curr.country) return acc;
    if (!acc[curr.country]) acc[curr.country] = 1;
    acc[curr.country]++;
    return acc;
  }, {});
  console.log(countries);
  const svgRef = useRef();

  useEffect(() => {
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;
    const svg = d3
      .select(svgRef.current)
      .attr('width', width + 100)
      .attr('height', height + 50);

    const color = d3
      .scaleOrdinal()
      .domain(data.map(d => d))
      .range(d3.schemeCategory10);

    const arc = d3
      .arc()
      .outerRadius(radius - 10)
      .innerRadius(radius - 140);

    const pie = d3
      .pie()
      .sort(null)
      .value(d => countries[d]);

    const g = svg
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const arcs = g
      .selectAll('.arc')
      .data(pie(Object.keys(countries)))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', d => color(d));

    arcs
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('dy', '.35em')
      .text(d => d.data);
  }, [data]);

  return (
    <div className="p-4 w-[100%] h-[440px] ">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default PieChart;
