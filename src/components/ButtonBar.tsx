import _ from 'lodash'
import ButtonBarProps from "../def/ButtonBarProps.ts";
import './styles/ButtonBar.css'

const ButtonBar = ({buttons}:ButtonBarProps) => {
	return (
		<div className='button-bar'>
			{_.map(buttons, (button) => (
				<>
					{button}
				</>
			))}
		</div>
	);
};

export default ButtonBar;
