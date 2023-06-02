import React, {useEffect, useRef} from "react";
import {line, select, Selection, svg} from "d3";
// import initialiseSvg from "../utils/d3code.tsx";
import {hardcodedData} from "../mockData/hardcodedData.tsx";

const width = window.innerWidth
const height = window.innerHeight

const populationBarData: Array<number> = []
for (let i in hardcodedData) {
    populationBarData.push(hardcodedData[i].gdp * 10)
}

function buildGraph(myRef, data: number[]) {
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

// export default function D3code({}: IProps){
export default function D3BarChart() {
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        buildGraph(svgRef.current, populationBarData)
    })

    return (
        <div className='testDiv'>
            <svg ref={svgRef}></svg>
        </div>
    )
}