import { useState } from "react";

export function LandlordsShow(props) {

    const [searchFilter, setSearchFilter] = useState("");

    console.log(props);

    return (
        <div id="landlords-show">
        Search:<input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} list="names"/>

        <datalist id="names">
            {props.landlords.map(post => <option key={landlord.id}>{landlord.name}</option>)}
        </datalist>
        </div>
    );
}
