import React from "react";
import { ErrorModal } from "../ErrorModal/ErrorModal";

class ErrorBoundary extends React.Component {
	state = {
		error: false
	}

	componentDidCatch(error, errorInfo) {
		console.log(error, errorInfo);
		this.setState({
			error: true
		})
	}

	render() {
		if (this.state.error) {
			return <ErrorModal/>
		}
		
		return this.props.children;
	}
}

export { ErrorBoundary };