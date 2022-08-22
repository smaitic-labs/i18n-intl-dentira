import React from 'react';
import { TranslateCore } from "../lib/Translate";

const ContentNewFunction = () => {
    let a = TranslateCore({id: "learning"});
    return (
        <>
            {a}
        </>
    );
}

export default ContentNewFunction;
