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

export function fullAxisDomain(dataSet, datasetSubset, subsetValue){
    let fullDomain = []
    for (let i=0; i < dataSet.length; i++) {
        let item = dataSet[i][datasetSubset]
        for (let j=0; j<item.length; j++) {
            fullDomain.push(item[j][subsetValue])
        }
    }
    return fullDomain
}

export function domainMinAndMax(fullDomain){
    let min = Infinity;
    let max = -Infinity;
    for (let i=0; i < fullDomain.length; i++) {
            if (fullDomain[i] < min) {
                min = fullDomain[i]
            }
            if (fullDomain[i] > max) {
                max = fullDomain[i]
            }
    }
    return [min, max]
}

export function initialiseSvg(anchorElementName, svgId, svgRef, width, height, margin) {
    return select(anchorElementName)
        .append('svg')
        .attr('id', svgId)
        .attr('width', width)
        .attr('height', height)
        .attr('ref', svgRef)
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")
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