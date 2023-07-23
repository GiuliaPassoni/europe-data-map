import * as d3 from "d3"
import {
    axisBottom,
    axisLeft,
    curveLinear,
    line,
    scaleLinear,
    select,
    group,
    extent,
    timeParse,
    scaleTime,
    scaleOrdinal,
    schemeCategory10,
    max
} from "d3";
import {domainMinAndMax, domainWithMinAndMax, fullAxisDomain} from "./calcs";

export function d3MultiLineChart(myRef, width, height, margin, data, variableName) {

    // create basic svg
    const svg = select(myRef)
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")

    // Axis logic
    const fullXDomain = fullAxisDomain(data, 'gdp5yearsData', 'year')
    const [minX, maxX] = domainMinAndMax(fullXDomain)
    const xScale = scaleLinear()
        .domain(extent(data[0].gdp5yearsData, d => d.year)) //this here works, because the X values are the same for all entries. But that may not always be the case...
        .range([0, width - margin.right])

    const xAxis = axisBottom(xScale).ticks(5);

    const fullYDomain = fullAxisDomain(data, 'gdp5yearsData', 'gdpValue')
    const [minY, maxY] = domainMinAndMax(fullYDomain)

    const yScale  = scaleLinear()
        .domain([minY, maxY])
        .range([height - margin.bottom, margin.top]) // it's inverted bc we always start from top left, then going downwards

    const yAxis = axisLeft(yScale).ticks(5);

    let color = scaleOrdinal(schemeCategory10);

    let myline = line()
        .x((d) => {return xScale(d.year)})
        .y((d) => {return yScale(d.gdpValue)});

    let lines = svg.append('g')
        .attr('class', 'lines');

    lines.selectAll('.line-group')
        .data(data).enter()
        .append('g')
        .attr('class', 'line-group')
        .append('path')
        .attr('class', 'line')
        .attr('d', d => myline(d.gdp5yearsData))
        .style('stroke', (d, i) => color(i))
        .attr('fill', 'none')

    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${height-margin.bottom})`)
        .call(xAxis);

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);
}