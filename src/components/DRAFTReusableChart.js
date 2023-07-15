import React, {useEffect, useRef} from "react";
import {BasicSvg} from "./BasicSvg";
import {AxisBottom} from "./AxisBottom";

const svgParams = {
    svgId: 'barChartSvg'
}

const xAxisDimensions = {
    domain: [0,100],
    range: [10,290]
}
export function DRAFTReusableChart(){
    const svgRef = useRef(null)
    let initialised = false

    useEffect(() => {
        if(!initialised) {
            initialised = true

        }
    },[initialised])
    return(
        <>
            <h1>Bar Chart</h1>
            {/*TODO: basic svg is not reusable yet*/}
            <BasicSvg svgId={svgParams.svgId}/>
            {/* TODO: link these two*/}
            <AxisBottom domain={xAxisDimensions.domain} range={xAxisDimensions.range}/>
        </>
    )
}