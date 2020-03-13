import React from 'react';

export const defaultLanguage = 'english';

const Context = React.createContext();

export class LanguageStore extends React.Component {
	state = {language: defaultLanguage};

	onLanguageChange = language => this.setState({language});

	render() {
		return (
			<Context.Provider value={{onLanguageChange: this.onLanguageChange, ...this.state}}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export default Context;
