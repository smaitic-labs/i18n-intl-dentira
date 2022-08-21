import Translate, { TranslateCore }  from "../lib/Translate";
import { FormattedMessage, FormattedNumber } from "react-intl"; 
const Content = () => {
  const t = TranslateCore({ id:"start_msg", defaultMessage:"tst" } )
   const name="Tenish"
    return (
    <div className="container hero">
      <h1>
        <Translate id="learn_to" />
      </h1>
      <p>
        <Translate id="price_display" values={{ n: 59.99, c: "$" }} />
        { TranslateCore({ id:"price_display_2", defaultMessage:`How ${name}`, values:{name:name} }) }
      </p>
      <p>
        <Translate id="number_display" values={{ n: 2000 }} />
      </p>
      <p>
        <Translate id="start_today" values={{ d: new Date() }} />
      </p>
      <p>
        { t }
      </p>
      <div>
          <input type="text" placeholder={ TranslateCore({ id:"start_msg", defaultMessage:"tst" } ) } id="fname" name="fname" />
      </div>
       <Translate id="test" default="<span>red</span><h1>green</h1>"
                            values={{
                                span: chunks => (
                                  <span style={{color:"red"}}>
                                    {chunks}
                                  </span>
                                ),
                                h1: chunks => (
                                  <h1 style={{color:"green"}}>
                                    {chunks}
                                  </h1>
                                )

                            }} />
    </div>
  );
};

export default Content;
