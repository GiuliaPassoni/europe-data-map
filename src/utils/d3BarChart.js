import {axisBottom, axisLeft, extent, max, scaleBand, scaleLinear} from "d3";
import {initialiseSvg} from "./calcs";
export function d3barChart(myRef,width, height, data, margin) {
    let svg = initialiseSvg('#barChartSvgContainer', 'barChartSvg', myRef, width, height, margin)

    // Add X axis
    const x = scaleBand()
        .domain(data.map(d => d.countryName))
        .range([margin.left, width - margin.right])
        .padding(0.1)
    const xAxis = ((g) => {
        g
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(axisBottom(x).tickSizeOuter(0))
    })

    // Add Y axis
    const y = scaleLinear()
        .domain([Math.min(...data.map(({ gdp }) => gdp)), Math.max(...data.map(({ gdp }) => gdp))])
        // .domain([0, max(data, d => d.gdp)]).nice()
        .range([height - margin.bottom, margin.top])

    const yAxis = ((g) => {
        g
        .attr("transform", `translate(${margin.left},0)`)
        .call(axisLeft(y))
        // to remove the vertical axis line:
        // .call((g) => {
        //     g.select(".domain").remove()
        // })
    })

    function parsedX(item) {
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
        .attr("y", d => d.gdp > 0 ?
            y(Math.abs(d.gdp))
            : y(0)
        )
        .attr("height",
                d => d.gdp > 0 ?
                    y(0) - y(d.gdp)
                    : y(0) - y(-d.gdp)
        )
        .attr("width", x.bandwidth());

    svg.append("g")
        .attr("class", "x-axis")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y-axis")
        .call(yAxis);
    }