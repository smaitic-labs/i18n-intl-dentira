import { useState } from "react";
import { FormattedMessage } from "react-intl";
import Translate from "../lib/Translate"

const Footer = () => {
  const [count, setCount] = useState(0);
  const onChange = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="container mt">
      {/* Footer content here */}
      <div>
        <Translate id="placeholder_test"/>
        <FormattedMessage id="search">
        {   placeholder =>
            <input placeholder={placeholder}/>
        }
        </FormattedMessage>
      </div>
      <p>
        <FormattedMessage id="click_button" />
      </p>
      <button onClick={onChange}>
        <FormattedMessage id="click_here" />
      </button>
      <p>
        <FormattedMessage id="click_count" values={{ count: count }} />
      </p>
    </div>
  );
};

export default Footer;