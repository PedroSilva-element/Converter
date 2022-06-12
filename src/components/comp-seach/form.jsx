import Datal from "./datal";

const Form = (props) => {
    return (
        <>
            <form onSubmit={props.submit}>
                <label htmlFor={props.id}></label>
                <input
                    type={props.type}
                    name={props.name}
                    list="itens"
                    value={props.value}
                    onChange={props.changeName}
                    placeholder={props.placeholder}
                />
                {props.children}
            </form>
            <Datal id="itens" />
        </>
    );
}
export default Form;