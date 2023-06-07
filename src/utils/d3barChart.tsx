import {select} from "d3";

export function buildBarChart(myRef:SVGSVGElement | null,width: number, height: number, data: number[]) {
    const scaleFactor = 10, barHeight = 200, barWidth=barHeight/2

    const graph = select(myRef)
        .attr("width", width)
        .attr("height", barHeight * data.length);

    const bar = graph.selectAll("g")
        .data(data)
        .join('g')

    bar.append("rect")
        .attr('x', (d: number, i:number) => {
            return width/4+ i*barHeight
        })
        .attr('y', (d: number) => {
            return height/4 - d * 10 //SVG coords have +ve Y downwards - this way, we reverse the graph to start at 1/4 of the svg height
        })
        .attr("height", function (d) {
            return d * scaleFactor;
        })
        .attr("width", barWidth)
        .attr('fill', 'blue');

    bar.append("text")
        .attr("x", function(d,i) { return (width/4+barWidth/2+ i*barHeight); })
        .attr("y", barHeight / 2)
        .attr("dy", ".35em")
        .text(function (d) {
            return d;
        });
}