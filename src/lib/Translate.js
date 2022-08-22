import React from 'react';
import { FormattedMessage } from "react-intl"; 
import { injectIntl, defineMessages } from "react-intl";
import {createIntl, createIntlCache } from 'react-intl'

// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache()

const intl = createIntl({
  locale: navigator.language,
  messages: {}
}, cache)

// Call imperatively
console.log(intl.formatMessage({id:"language"}))

class Translate extends React.Component {
    render() {                                                                                                                                                                                                     
        return (
            <FormattedMessage id={this.props.id} description={this.props.desc} defaultMessage={this.props.default} values={this.props.values}>
                {this.props.children}
            </FormattedMessage>
        )   
    }   
}
//export const TranslateCore = injectIntl((props) => {
//    const { intl, 
//            id, 
//            defaultMessage, 
//            description, 
//            values } = props;
//    const message = defineMessages({
//        id: id,
//        defaultMessage: defaultMessage,
//        description: description
//    });
//    let t  = intl.formatMessage(message, values)
//    console.log(t);
//    return t
//})

export const TranslateCore = (pro) => {
    const { 
            id, 
            defaultMessage, 
            description, 
            values } = pro;
    const message = defineMessages({
        id: id,
        defaultMessage: defaultMessage,
        description: description
    });
    let t  = intl.formatMessage(message, values)
    console.log(t);
    return t
}
export default Translate;
