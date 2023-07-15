import {select} from "d3";
import React from "react";

export function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
export function initialiseSvg(anchorElementName, svgId, svgRef, width, height) {
    return select(anchorElementName)
        .append('svg')
        .attr('id', svgId)
        .attr('width', width)
        .attr('height', height)
        .attr('ref', svgRef)
}

//for now, ref will have to be assigned separately, upon initialisation
export function drawGraph(svgRef) {
    select(svgRef.current).append('rect')
        .attr('x', 0)
        .attr('y', 100)
        .attr('width', 100)
        .attr('height', 100)
        .attr('fill', 'white')
}