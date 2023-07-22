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
    const xScale = scaleLinear()
        .domain(extent(data[0].gdp5yearsData, d => d.year))
        .range([0, width - margin.right])

    const xAxis = axisBottom(xScale).ticks(5);

    let fullYDomain = []
    let minY = Infinity;
    let maxY = -Infinity;
    for (let i=0; i < data.length; i++) {
        let item = data[i].gdp5yearsData
        for (let j=0; j<item.length; j++) {
            fullYDomain.push(item[j].gdpValue)

            if (item[j].gdpValue < minY) {
                minY = item[j].gdpValue
            }

            if (item[j].gdpValue > maxY) {
                maxY = item[j].gdpValue
            }
        }
    }

    const yScale  = scaleLinear()
        .domain([minY, maxY])
        .range([height - margin.bottom, margin.top]) // it's inverted bc we always start from top left, then going downwards

    const yAxis = axisLeft(yScale).ticks(5);

    let color = scaleOrdinal(schemeCategory10);

    let myline = line()
        // TODO: Note the syntax change. The code below wouldn't work, if we only sued the {} without the return keyword!
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