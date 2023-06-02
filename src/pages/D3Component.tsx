import React, {useEffect, useRef} from "react";
import {line, select, Selection, svg} from "d3";
// import initialiseSvg from "../utils/d3code.tsx";
import {hardcodedData} from "../mockData/hardcodedData.tsx";

interface IProps {
    data: number[]
}

interface IState {

}

const width = window.innerWidth
const height = window.innerHeight

const populationData: Array<number> = []
for (let i in hardcodedData) {
    populationData.push(hardcodedData[i].gdp * 10)
}
console.log(populationData)

const populationDataCoords: number[][] = [] //this is a multidim array
for (let i in hardcodedData) {
    populationDataCoords.push([hardcodedData[i].population, i * 10])
}
console.log(populationDataCoords)


function buildGraph(myRef, data: number[]) {
    const scaleFactor = 10, barHeight = 200;

    const graph = select(myRef)
        .attr("width", width)
        .attr("height", barHeight * data.length);

    const bar = graph.selectAll("g")
        .data(data)
        .join('g')
        .attr("transform", function (d, i) {
            return "translate(" + i * barHeight + ",0)";
        });

    bar.append("rect")
        .attr('x', (d: number) => {
            return d * 10
        })
        .attr('y', (d: number) => {
            return height/4 - d * 10 //SVG coords have +ve Y downwards - this way, we reverse the graph to start at 1/4 of the svg height
        })
        .attr("height", function (d) {
            return d * scaleFactor;
        })
        .attr("width", barHeight - 1)
        .attr('fill', 'blue');

    bar.append("text")
        .attr("y", function (d) {
            return (d * 3);
        })
        .attr("x", barHeight)
        .attr("dy", ".25em")
        .text(function (d) {
            return d;
        });

    console.log('end')

}

// export default function D3code({}: IProps){
export default function D3Component() {
    // const svgRef = useRef<SVGSVGElement | null>(null)
    const svgRef1 = useRef<SVGSVGElement | null>(null)
    const svgRef2 = useRef<SVGSVGElement | null>(null)

    useEffect(() => {
        // const svg = initialiseSvg('div.testDiv', 'mySvg', width, height)
        // select(svgRef.current).append('rect')
        //     .attr('x', 0)
        //     .attr('y', 100)
        //     .attr('width', 100)
        //     .attr('height', 100)
        //     .attr('fill', 'white')

        buildGraph(svgRef2.current, populationData)

        // const path: Selection<SVGPathElement, unknown, null, undefined> = select(svgRef2.current)
        //     .attr('width', width/2)
        //     .attr('height', height/2)
        //     .attr('border', '2px solid red')
        //     .append('path')
        // const lineGen = line()
        // const pathData = lineGen(populationDataCoords)
        //
        // path.attr('d', pathData)
        //     .attr('stroke', 'white')
        //     .attr('stroke-width', 5)
    })

    return (
        <div className='testDiv'>
            {/*<svg ref={svgRef}></svg>*/}
            {/*<svg ref={svgRef1}></svg>*/}
            <svg ref={svgRef2}></svg>
        </div>
    )
}