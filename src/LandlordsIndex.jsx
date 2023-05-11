export function LandlordsIndex(props) {
    return (
      <div>
        <h1>All Landlords</h1>
        {props.landlords.map((landlord) => (
            <div key ={landlord.id}>
                <h2>{landlord.name}</h2>
                <p>{landlord.city}</p>
            </div>
        ))}
      </div>
    );
  }