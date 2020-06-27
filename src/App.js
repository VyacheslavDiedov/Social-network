import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {withRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

//import ProfileContainer from "./components/Profile/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if(!this.props.initialize){
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" render={withSuspense(DialogsContainer)
                    }/>
                    <Route path="/profile/:userId?" render={() => {
                        return <React.Suspense fallback={<div>Завантаження...</div>}>
                                <ProfileContainer/>
                        </React.Suspense>
                    }}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/setting" render={() => <Setting/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialize: state.app.initialize
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
