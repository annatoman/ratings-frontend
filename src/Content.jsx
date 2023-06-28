import axios from "axios"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom";
// import { Login } from "./Login";
import { LandlordsIndex } from "./LandlordsIndex";
// import { LandlordsNew } from "./LandlordsNew";
// import { Modal } from "./Modal";
// import { LandlordsShow } from "./LandlordsShow";
// import city from "./assets/city.png";

export function Content() {

    const [landlords, setLandlords] = useState([]);
    // const [isLoginVisible, setIsLoginVisible] = useState(false);
    // const [currentLogin, setCurrentLogin] = useState({});

    const handleIndexLandlords = () => {
        console.log("handleIndexLandlords");
        axios.get("http://localhost:3000/landlords.json").then((response) => {
            console.log(response.data);
            setLandlords(response.data);
        });
    };

    // const handleCreateLandlord = (params, successCallback) => {
    //     console.log("handleCreateLandlord", params);
    //     axios.post("http://localhost:3000/landlords.json", params).then((response) => {
    //         setLandlords([...landlords, response.data]);
    //         successCallback();
    //     });
    // };

    // const handleLogin = (login) => {
    //     console.log("handleLogin", login);
    //     setIsLoginVisible(true);
    //     setCurrentLogin(login);
    // };

    // const handleClose = () => {
    //     console.log("handleClose");
    //     setIsLoginVisible(false);
    // };

    useEffect(handleIndexLandlords, []);

    return (
        <div className="container bg-image">
        <Routes>
            <Route path="/landlords" element={<LandlordsIndex landlords={landlords}/> }/>
        </Routes>
            Search: <input type="text"/>
            <button className="btn btn-secondary" type="button" style={{borderRadius: '16px'}}> Submit </button>
        </div>
        )
    }


    // 1. Create Search Bar / Write HTML 
    // 2. Make it a form that when submitted, sends axios request to the backend for the Show
    // 3. Make landlord/:id page (frontend)
    // 4. Push the end-user to /landlord/:id route on frontend