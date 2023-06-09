import {select} from "d3";
import React from "react";

export function randomIntFromInterval(min: number, max: number) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export function initialiseSvg(anchorElementName: string, svgId: string, svgRef: any, width: number, height: number) {
    return select(anchorElementName)
        .append('svg')
        .attr('id', svgId)
        .attr('width', width)
        .attr('height', height)
        .attr('ref', svgRef)
}

//for now, ref will have to be assigned separately, upon initialisation
export function drawGraph(svgRef: React.MutableRefObject<SVGSVGElement | null>) {
    select(svgRef.current).append('rect')
        .attr('x', 0)
        .attr('y', 100)
        .attr('width', 100)
        .attr('height', 100)
        .attr('fill', 'white')
}