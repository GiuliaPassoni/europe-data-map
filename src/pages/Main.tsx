import {csv} from "d3"
import D3Component from "./D3Component.tsx";

export default function Main(){
    // let testCsvLoad = csv("/mockData/eu-gdp-19-05-23.csv", function(data) {
    //     for (let i = 0; i < data.length; i++) {
    //         console.log(data[i]);
    //     }
    // });
    return (

            <>
                {/*{{testCsvLoad}}*/}
                <p>hi</p>
                <D3Component/>
            </>
        )
}