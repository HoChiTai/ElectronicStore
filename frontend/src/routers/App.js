import User from './User';
import Admin from './Admin';
import { useContext } from 'react';
import { Store } from '../Store';

function App() {

	const { state, dispatch: ctxDispatch } = useContext(Store);
	const { cart, userInfo } = state;
	// return <>{true ? <User /> : <Admin />}</>;
	return <>{userInfo.user.role_id !== 2 ? <User></User> : <Admin></Admin>}</>;

}

export default App;
