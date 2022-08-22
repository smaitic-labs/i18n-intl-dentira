import React from 'react';
import { TranslateCore } from "../lib/Translate";

export default class ContentNew extends React.Component {
    
    render() {
        let a = TranslateCore({id: "learning"});
        return(
            <>
          <input type="text" placeholder={a} id="fname" name="fname" />
            {a}
            </>
        )
    }
}
