import {axisBottom, axisLeft, scaleLinear, select} from "d3";
import {initialiseSvg} from "./calcs";

export function d3barChart(myRef:SVGSVGElement | null,width: number, height: number, data: number[]) {
    const margin = { top: 0, right: 0, bottom: 20, left: 0 };
    width = width - margin.left - margin.right;
    height = height - margin.top - margin.bottom;

    const scaleFactor = 100, barHeight = height/5, barWidth=barHeight/2

    let svg = initialiseSvg('#barChartSvgContainer', 'barChartSvg', myRef, width, height)
    svg.attr('style', 'background: aliceblue; margin-bottom: 20px; border: 2px solid red;')

    // Add X axis
    const x = scaleLinear().domain([0, 5]).range([0, width/2]);
    const xAxis = svg
        .append("g")
        .attr("transform", `translate(${width/4}, ${3*height/4})`)
        .call(axisBottom(x));

    // Add Y axis
    const y = scaleLinear().domain([0, 5]).range([3*height/4, 0]);
    svg.append("g")
        .attr("transform", `translate(${width/4}, 0)`)
        .call(axisLeft(y));

    // const graph = select(myRef)
    //     .attr("width", width)
    //     .attr("height", barHeight * data.length);
    //
    const bar = svg.append("g")
        .selectAll("rect")
        .data(data)
        .join('rect')
        .attr('x', (d: number, i:number) => {
            return width/8+ i*barHeight
        })
        .attr("transform", `translate(${width/4}, 0)`)
        .attr('y', (d: number) => {
            return height/8 - d * 10 //SVG coords have +ve Y downwards - this way, we reverse the graph to start at 1/4 of the svg height
        })
        .attr("transform", `translate(0, ${height*5/8})`)
        .attr("height", function (d) {
            return d * scaleFactor;
        })
        .attr("width", barWidth)
        .attr('fill', 'blue');

    bar.append("text")
        .attr("x", function(d,i) { return (width/8+barWidth/4+ i*barHeight); })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function (d) {
            return d;
        });
}