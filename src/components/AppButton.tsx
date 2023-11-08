import AppButtonProps from "../def/appButtonProps.ts";
import './styles/AppButton.css'

const AppButton = ({value, onClick}:AppButtonProps) => {
	return (
		<div className='app-button' onClick={onClick}>
			{value}
		</div>
	);
};

export default AppButton;
