import {axisBottom, axisLeft, curveMonotoneX, line, scaleLinear, select} from "d3";

export function d3lineChart(myRef:SVGSVGElement | null,width: number, height: number, data: number[][]) {
    const svg = select(myRef)
        .attr("width", width)
        .attr("height", 10 * data.length)

    const x = scaleLinear().domain([0, 10]).range([0, 100]),
        y = scaleLinear().domain([0, 10]).range([100, 0])

    svg.append("g")
        .attr("transform", "translate(0," + 100 + ")")
        .call(axisBottom(x));

    svg.append("g")
        .call(axisLeft(y));

    svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d[0]); } )
        .attr("cy", function (d) { return y(d[1]); } )
        .attr("r", 2)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#CC0000");

    const myline = line()
        .x(function(d) { return x(d[0]); })
        .y(function(d) { return y(d[1]); })
        .curve(curveMonotoneX)

    // svg.append("path")
    //     .datum(data)
    //     .attr("class", "line")
    //     .attr("transform", "translate(" + 100 + "," + 100 + ")")
    //     .attr("d", myline)
    //     .style("fill", "none")
    //     .style("stroke", "#CC0000")
    //     .style("stroke-width", "2");

}