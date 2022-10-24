import React from "react";
import * as ReactDOM from 'react-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

class ErrorModal extends React.PureComponent {
	style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	render() {
		return (
			<Portal>
				<Box sx={this.style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Oppps something goes wrong...
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Try refreshing the page
					</Typography>
				</Box>
			</Portal>
		);
	}

}

const Portal = (props) => {
	const node = document.createElement('div');

	node.classList.add('modal');	
	document.body.appendChild(node);
	
	return ReactDOM.createPortal(props.children, node);
}

export { ErrorModal };