import {Navigate} from 'react-router-dom';



export default function Lorgout() {

	localStorage.clear();

	return(


		<Navigate to="/" />
		)
}