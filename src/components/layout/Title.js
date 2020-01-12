import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Title = props => {
	return (
		<div className='inline-grid-9' style={{ marginTop: props.style.marginTop }}>
			{props.showBack && (
				<Link
					to={props.backLink}
					style={{
						color: 'white',
						gridColumnStart: 1,
						gridColumnEnd: 2,
						margin: '0rem 1rem'
					}}
				>
					<i
						className='fa fa-arrow-left'
						style={{
							float: 'left',
							fontSize: props.style.fontSize,
							padding: '0.8rem'
						}}
					></i>
				</Link>
			)}
			<h2
				style={{
					fontSize: props.style.fontSize,
					gridColumnStart: 3,
					gridColumnEnd: 8,
					width: '40vw',
					textTransform: 'uppercase'
				}}
			>
				{props.text}
			</h2>
		</div>
	);
};

Title.propsTypes = {
	style: PropTypes.object,
	text: PropTypes.string.isRequired
};

Title.defaultProps = {
	style: {
		marginTop: '5vh',
		fontSize: '2.5rem'
	}
};

export default Title;
