import React, { useState } from "react";

import Test from "./Test";
import Test2 from "./Test2";
import { DataProvider }  from "./TestContext.js";
import CambiarData from "./CambiarData";

const TestMain = () => {    
    return (
        <DataProvider>
            <Test/>
            <Test2/>
            <CambiarData/>
        </DataProvider>
    )
}

export default TestMain;