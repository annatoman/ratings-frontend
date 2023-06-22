/* eslint-disable react/prop-types */
export function LandlordsIndex(props) {
  console.log(props)
    return (
      <div id="landlordsindex">
        <h1>All Landlords</h1>
        {props.landlords.map((landlord) => (
            <div key ={landlord.id}>
                <h3>{landlord.name}</h3>
                    <p>{landlord.city}</p>
                    <p>{landlord.reviews.rating}</p>
            </div>       
            ))}
      </div>
    );
  }

