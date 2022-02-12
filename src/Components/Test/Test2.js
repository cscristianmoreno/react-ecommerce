import { useContext } from "react";
import TestContext from "./TestContext.js";

const Test2 = () => {
    const { state } = useContext(TestContext);

    return(
        <>
            <h1>{JSON.stringify(state)}</h1>
        </>
    );
}

export default Test2;