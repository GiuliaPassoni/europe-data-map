import * as d3 from "d3"
import {axisBottom, axisLeft, curveLinear, line, scaleLinear, select, group, extent} from "d3";

export function d3MultiLineChart(myRef, width, height, margin, data, variableName) {

    // TODO: adjust for multiline data
    const svg = select(myRef)
        .attr("width", width)
        .attr("height", height)
        .attr("background", '#d3d3d3')
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")

    // const x = scaleLinear()
    //     .domain(extent(data, function(d) { return d[0]}))
    //     .range([0, width - margin.right])
    //
    // function xAxis(g){
    //     g
    //         .attr("transform", `translate(0,${height-margin.bottom})`)
    //         .call(axisBottom(x));
    // }
    //
    // const y  = scaleLinear()
    //     .domain(extent(data, function(d) { return d[1]}))
    //     .range([height - margin.bottom, margin.top]) // it's inverted bc we always start from top left, then going downwards
    //
    // function yAxis(g){
    //     g
    //         // .attr("transform", `translate(${margin.left},0)`) //this line somehow changes the domain of the axis
    //         .call(axisLeft(y))
    // }

    // const valueline = line()
    //     .curve(curveLinear)
    //     .x(function(d) { return x(d[0]); })
    //     .y(function(d) { return y(d[1]); });
    //
    // svg.append("path")
    //     .data([data])
    //     .attr("class", "line")
    //     .attr("d", valueline)
    //     .attr('fill', 'none')
    //     .attr('stroke', 'black')
    //     .attr("stroke-linecap", 'round')
    //     .attr("stroke-linejoin", 'round')

    // svg.append("g")
    //     .attr("class", "x-axis")
    //     .call(xAxis);
    //
    // svg.append("g")
    //     .attr("class", "y-axis")
    //     .call(yAxis);
}