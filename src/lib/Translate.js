import React from 'react';
import { FormattedMessage } from "react-intl"; 
import { useIntl } from 'react-intl';

class Translate extends React.Component {
    
    render() {                                                                                                                                                                                                     
        return (
            <FormattedMessage id={this.props.id} description={this.props.desc} defaultMessage={this.props.default} values={this.props.values}>
                {this.props.children}
            </FormattedMessage>
        )   
    }   
}

export const TranslateCore = (t ) => {
        return useIntl().formatMessage(t);   
}

export default Translate;
