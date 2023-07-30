import {axisBottom, axisLeft, extent, scaleBand, scaleLinear} from "d3";
import {fullAxisDomain, initialiseSvg} from "./calcs";

export function d3ScatterPlot(svgRef, width, height, data, margin){
    let svg = initialiseSvg('#scatterPlotSvgContainer', 'scatterPlotSvg', svgRef, width, height, margin)
console.log(data)
// Add X axis
    const x = scaleBand()
        .domain(data.map(d => d.countryName))
        .range([margin.left, width - margin.right]);
    const xAxis = svg
        .append("g")
        .attr("transform", `translate(0, ${height-margin.bottom})`)
        .call(axisBottom(x).ticks(5));

    // Add Y axis
    const y = scaleLinear()
        .domain([0, Math.max(...data.map(({ averageLifespan }) => averageLifespan))])
        .range([height - margin.bottom, margin.top]);
    svg.append("g").attr("transform", `translate(${margin.left},0)`).call(axisLeft(y));

    // Add dots
    svg.append("g")
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("cx", d => {
            return x(d.countryName);
        })
        .attr("cy", d => {
            return y(d.averageLifespan);
        })
        .attr("r", 7)
        .attr('fill', 'black');
}