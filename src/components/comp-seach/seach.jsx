import { useState } from "react";
import Form from "./form";
import Button from "./buttonSeach";
import ContainerUnits from "./containerUnits";
import Units from "../../database/units";

const Seach = () => {

    const [val01, setVal01] = useState('');
    const [view, setView] = useState('');



    const textOutput = (event) => {
        return setVal01(event.target.value);
    };
    const handleSubmit = (eventClick) => {
        eventClick.preventDefault();
    }
    return (
        <article>
            <Form
                submit={handleSubmit}
                type="text"
                name="seach"
                value={val01}
                changeName={textOutput}
                placeholder="Digite uma unidade"
            >
                <Button
                    title="Seach"
                    click={() => { setView(val01) }}
                />
            </Form>
            <ContainerUnits>
                {view}
            </ContainerUnits>
        </article>
    );
}
export default Seach;