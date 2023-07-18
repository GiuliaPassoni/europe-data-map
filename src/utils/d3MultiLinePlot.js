import * as d3 from "d3"
import {axisBottom, axisLeft, curveLinear, line, scaleLinear, select, group, extent, timeParse, scaleTime, scaleOrdinal, schemeCategory10} from "d3";

export function d3MultiLineChart(myRef, width, height, margin, data, variableName) {

    // TODO: adjust for multiline data
    const svg = select(myRef)
        .attr("width", width)
        .attr("height", height)
        .attr("background", '#d3d3d3')
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")

    console.log(data)
    const xScale = scaleTime()
        .domain(extent(data[0].gdp5yearsData, function(d) { return d.year}))
        .range([0, width - margin.right])

    const xAxis = axisBottom(xScale).ticks(5);

    const yScale  = scaleLinear()
        .domain(extent(data[0].gdp5yearsData, function(d) { return d.gdpValue}))
        .range([height - margin.bottom, margin.top]) // it's inverted bc we always start from top left, then going downwards

    const yAxis = axisLeft(yScale).ticks(5);

    let color = scaleOrdinal(schemeCategory10);

    let myline = line()
        .x((d)=> { xScale(d.year); })
        .y((d)=> { yScale(d.gdpValue); });

    let lines = svg.append('g')
        .attr('class', 'lines');

    lines.selectAll('.line-group')
        .data([data]).enter()
        .append('g')
        .attr('class', 'line-group')
        .append('path')
        .attr('class', 'line')
        // TODO: fix line below to render graph correctly
        .attr('d', d => myline(d.values))
        .style('stroke', (d, i) => color(i))

    // svg.append("path")
    //     .data([data])
    //     .attr("class", "line")
    //     .attr("d", valueline)
    //     .attr('fill', 'none')
    //     .attr('stroke', 'black')


    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${height-margin.bottom})`)
        .call(xAxis);

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);
}