import {ascending, select} from "d3";
import React from "react";

export function randomIntFromInterval(min, max) { // min and max included
    return Number ((Math.random() * (max - min + 1) + min).toFixed(2))
}

export function randomArray(min, max, arraySize){
    let values = []
    for(let i=0; i<arraySize; i++){
        values.push(randomIntFromInterval(min, max))
    }
    return values
}

export function createPointsAndSortByX(rawData, propertyName){
    let resultArray = rawData.map( i => [randomIntFromInterval(1,10), i[propertyName]] )
    return sortDataPointsByX(resultArray)
}

export function sortDataPointsByX(unsortedData){
    return unsortedData.sort(function(a, b){ return ascending(a[0], b[0]); })
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