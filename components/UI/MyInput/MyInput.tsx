import React from 'react';
import s from './MyInput.module.scss'

type InputProps = {
	placeholder? : string
}

const MyInput : React.FC<InputProps> = ({...props}) => {
	return (
		<input className={s.myInput} type="text" {...props} />
	);
};

export default MyInput;