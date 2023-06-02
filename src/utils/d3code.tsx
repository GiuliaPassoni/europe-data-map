import {select} from "d3";

export function initialiseSvg(anchorElementName: string,
                                      svgId: string,
                                      // svgRef: React.MutableRefObject<SVGSVGElement | null>,
                                      width: number,
                                      height: number) {
    return select(anchorElementName)
        .append('svg')
        .attr('id', svgId)
        .attr('width', width)
        .attr('height', height)
        // .attr('ref', svgRef)
}

//for now, ref will have to be assigned separately, upon initalisation
export function drawGraph(svgRef: React.MutableRefObject<SVGSVGElement | null>) {
    select(svgRef.current).append('rect')
        .attr('x', 0)
        .attr('y', 100)
        .attr('width', 100)
        .attr('height', 100)
        .attr('fill', 'white')
}