import axios from "axios"
import { useState, useEffect } from "react"
import { LandlordsIndex } from "./LandlordsIndex"

export function Content() {

    const [landlords, setLandlords] = useState([]);

    const handleIndexLandlords = () => {
        console.log("handleIndexLandlords");
        axios.get("http://localhost:3000/landlords.json").then((response) => {
            console.log(response.data);
            setLandlords(response.data);
        });
    };

    useEffect(handleIndexLandlords, []);

    return (
      <div>
        <LandlordsIndex landlords={landlords} />
      </div>
    )
  }