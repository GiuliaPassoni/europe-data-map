import {axisBottom, axisLeft, max, scaleBand, scaleLinear, select} from "d3";
import {initialiseSvg} from "./calcs";

interface gdpByCountry {
    countryName: string;
    gdp: number;
}
export function d3barChart(myRef:SVGSVGElement | null,width: number, height: number, data: gdpByCountry[]) {
    const margin = { top: 0, right: 0, bottom: 20, left: 0 };
    // const values = data.map((country, gdp)=>{ return gdp})

    let svg = initialiseSvg('#barChartSvgContainer', 'barChartSvg', myRef, width, height)
    svg.attr('style', 'background: aliceblue; margin-bottom: 20px; border: 2px solid red;')

    // Add X axis
    const x = scaleBand()
        .domain(data.map(d => d.countryName))
        .range([margin.left, width - margin.right])
        .padding(0.1)
    const xAxis = ((g:any) => {
        g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(axisBottom(x).tickSizeOuter(0))
    })

    // Add Y axis
    const y = scaleLinear()
        .domain([0, Math.max(...data.map(({ gdp }) => gdp))])
        // .domain([0, max(data, d => d.gdp)]).nice()
        .range([height - margin.bottom, margin.top])

    const yAxis = ((g:any) => {
        g
        .attr("transform", `translate(${margin.left},0)`)
        .call(axisLeft(y))
        // to remove the vertical axis line:
        .call((g:any) => {
            g.select(".domain").remove()})})

    function parsedX(item: string) : number {
        const r = x(item)
        if (r === undefined)
            return 0
        else {
            return r
        }
    }
    svg.append("g")
        .attr("class", "bars")
        .attr("fill", "steelblue")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("x", d => parsedX(d.countryName))
        .attr("y", d => y(d.gdp))
        .attr("height", d => y(0) - y(d.gdp))
        .attr("width", x.bandwidth());

    svg.append("g")
        .attr("class", "x-axis")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);
    }