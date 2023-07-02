import {axisBottom, axisLeft, scaleLinear} from "d3";
import {initialiseSvg} from "./calcs";

export function d3ScatterPlot(svgRef: any, width:number, height: number, dataset: number[][]){
    let svg = initialiseSvg('#scatterPlotSvgContainer', 'scatterPlotSvg', svgRef, width, height)
    svg.attr('style', 'background: aliceblue; margin-bottom: 20px')

// Add X axis
    const x = scaleLinear().domain([0, 6]).range([0, width]);
    const xAxis = svg
        .append("g")
        .attr("transform", `translate(0, ${height-100})`)
        .call(axisBottom(x));

    // Add Y axis
    const y = scaleLinear().domain([0, 100]).range([height, 0]);
    svg.append("g").attr("transform", `translate(${height-100},0)`).call(axisLeft(y));

    // Add dots
    svg.append("g")
        .selectAll("circle")
        .data(dataset)
        .join("circle")
        .attr("cx", d => {
            return x(d[0]);
        })
        .attr("cy", d => {
            return y(d[1]/2);
        })
        .attr("r", 15)
        .attr('fill', 'black');
}