import * as d3 from "d3"
import {
    axisBottom,
    axisLeft,
    line,
    scaleLinear,
    select,
    extent,
    scaleOrdinal,
    schemeCategory10,
    max
} from "d3";
import {domainMinAndMax, fullAxisDomain} from "./calcs";

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
        .range([0, width - margin.right - margin.left])

    const xAxis = axisBottom(xScale).ticks(5);

    const fullYDomain = fullAxisDomain(data, 'gdp5yearsData', 'gdpValue')
    const [minY, maxY] = domainMinAndMax(fullYDomain)

    const yScale  = scaleLinear()
        .domain([minY, maxY+2])
        .range([height - margin.bottom, margin.top]) // it's inverted bc we always start from top left, then going downwards

    const yAxis = axisLeft(yScale).ticks(5);

    let myline = line()
        .x((d) => {return xScale(d.year)})
        .y((d) => {return yScale(d.gdpValue)});

    // attach axes
    svg.append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0, ${height-margin.bottom})`)
        .call(xAxis);

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);

    // line colours
    let color = scaleOrdinal(schemeCategory10);

    // draw lines
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

//     add legend
    const countryLabels = data.map(d => d.countryName)
    svg.selectAll("legend-dots")
        .data(countryLabels)
        .enter()
        .append("circle")
        .attr("cx", width-100) //was 100
        .attr("cy", function(d,i){ return i*25}) // 0 is where the first dot appears. 25 is the distance between dots
        .attr("r", 4)
        .style("fill", function(d,i){ return color(i)})

// Add one dot in the legend for each name.
    svg.selectAll("legend-labels")
        .data(countryLabels)
        .enter()
        .append("text")
        .attr("x", width-180) //was 120
        .attr("y", function(d,i){ return 5 + i*25}) // 105 is where the first dot appears. 25 is the distance between dots
        .style("fill", function(d, i){ return color(i)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .style("alignment-baseline", "middle")
}