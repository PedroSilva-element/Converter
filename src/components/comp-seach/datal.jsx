import Units from "../../database/units";

const Datal = (props) => {
const magnitudes = Object.keys(Units)
const itensSelect = magnitudes.map((name)=>{
    return <option value={name} key={name.toString()}></option>
})
    
    return(
        <datalist id={props.id}>
            {itensSelect}
        </datalist>
    );
};
export default Datal;