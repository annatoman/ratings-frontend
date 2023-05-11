import axios from "axios"
import { useState, useEffect } from "react"
import { LandlordsIndex } from "./LandlordsIndex"
import { LandlordsNew } from "./LandlordsNew";

export function Content() {

    const [landlords, setLandlords] = useState([]);

    const handleIndexLandlords = () => {
        console.log("handleIndexLandlords");
        axios.get("http://localhost:3000/landlords.json").then((response) => {
            console.log(response.data);
            setLandlords(response.data);
        });
    };

    const handleCreateLandlord = (params, successCallback) => {
        console.log("handleCreateLandlord", params);
        axios.post("http://localhost:3000/landlords.json", params).then((response) => {
            setLandlords([...landlords, response.data]);
            successCallback();
        });
    };

    useEffect(handleIndexLandlords, []);

    return (
      <div>
        <LandlordsIndex landlords={landlords} />
        <LandlordsNew onCreateLandlord={handleCreateLandlord} />
      </div>
    )
  }