import {axisBottom, axisLeft, curveCardinal, curveMonotoneX, line, ScaleLinear, scaleLinear, select} from "d3";

// @ts-ignore
export function d3lineChart(myRef,width, height, data) {
    width = width/4
    height = height/4
    const svg = select(myRef)
        .attr("width", width)
        .attr("height", height)
        .attr("background", '#d3d3d3')

    // setting the plot scale
    const xScale = scaleLinear()
        .domain([0, data.length-1])
        .range([0, width/4])
    const yScale  = scaleLinear()
        .domain([0, height])
        .range([height, 0]) // it's inverted bc we always start from top left, then going downwards

    const generateScaledLine= line()
        .x((d,i)=> xScale(i))
        // .y((d, i) => yScale(i))
        // .y(yScale)
        .curve(curveCardinal)


    svg.selectAll('.line')
        .data([data])
        .join('path')
        .attr('d', d => generateScaledLine(d))
        .attr('fill', 'none')
        .attr('stroke', 'black')



    // svg.append("g")
    //     .attr("transform", "translate(0," + 100 + ")")
    //     .call(axisBottom(x));
    //
    // svg.append("g")
    //     .call(axisLeft(y));
    //
    // svg.append('g')
    //     .selectAll("dot")
    //     .data(data)
    //     .enter()
    //     .append("circle")
    //     .attr("cx", function (d) { return x(d[0]); } )
    //     .attr("cy", function (d) { return y(d[1]); } )
    //     .attr("r", 2)
    //     .attr("transform", "translate(" + 100 + "," + 100 + ")")
    //     .style("fill", "#CC0000");
    //
    // const myline = line()
    //     .x(function(d) { return x(d[0]); })
    //     .y(function(d) { return y(d[1]); })
    //     .curve(curveMonotoneX)
//-----------------
    // svg.append("path")
    //     .datum(data)
    //     .attr("class", "line")
    //     .attr("transform", "translate(" + 100 + "," + 100 + ")")
    //     .attr("d", myline)
    //     .style("fill", "none")
    //     .style("stroke", "#CC0000")
    //     .style("stroke-width", "2");

}