import Counter from './components/Counter';
import {Fragment} from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import {useSelector, useDispatch} from 'react-redux';
import UserProfile from "./components/UserProfile";

function App() {
    const isLogged = useSelector(state => state.auth.isAuthenticated)
    return (
        <Fragment>
            <Header/>
            {isLogged && <UserProfile/>}
            {!isLogged && <Auth/>}
            {isLogged && <Counter/>}
        </Fragment>
    );
}

export default App;
