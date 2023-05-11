export function LandlordsNew(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreateLandlord(params, () => event.target.reset());
    };

    return (
        <div>
            <h1>New Landlord</h1>
        <form onSubmit={handleSubmit}>
        <div>
            Name: <input name="name" type="text" />
        </div>
        <div>
            City: <input name="city" type="text" />
        </div>
        <button type="submit">Create Landlord</button>
        </form>
        </div>
    );
}