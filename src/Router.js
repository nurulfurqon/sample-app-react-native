import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import Auth from './components/auth/Auth';
import Timeline from './components/timeline/Timeline';
import DetailTl from './components/timeline/TlDetail';
import LikeTl from './components/timeline/TlLike';
import AddPLTP from './components/timeline/AddTLPT';
import Chat from './components/chat/Chat';
import ChatDetail from './components/chat/ChatDetail';
import Menu from './components/menu/Menu';
import Profile from './components/profile/Profile';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="sAuth" hideNavBar >
                    <Scene key="auth" initial component={Auth} title="Auth" />
                </Scene>
                <Scene key="sMain" >
                    <Scene
                        key="timeline"
                        component={Timeline}
                        title="Public Teen"
                        initial hideNavBar
                    />
                    <Scene
                        key="detailtl" component={DetailTl}
                        title="Detail Timeline"
                        headerTitleStyle={{ color: '#ffffff' }}
                        headerTintColor='#ffffff'
                        headerStyle={{ backgroundColor: '#5db5e5' }}
                    />
                    <Scene
                        key="liketl" component={LikeTl}
                        title="Like"
                        headerTitleStyle={{ color: '#ffffff' }}
                        headerTintColor='#ffffff'
                        headerStyle={{ backgroundColor: '#5db5e5' }}
                    />
                    <Scene
                        key="addplpt" component={AddPLTP}
                        title="Add Timeline"
                        headerTitleStyle={{ color: '#ffffff' }}
                        headerTintColor='#ffffff'
                        headerStyle={{ backgroundColor: '#5db5e5' }}
                    />
                </Scene>
                <Scene key="sChat">
                    <Scene
                        key="chat" component={Chat}
                        title="Chat Message"
                        headerTitleStyle={{ color: '#ffffff' }}
                        headerTintColor='#ffffff'
                        headerStyle={{ backgroundColor: '#5db5e5' }}
                    />
                    <Scene
                        key="chatdetail" component={ChatDetail}
                        headerTintColor='#5db5e5'
                        headerStyle={{ backgroundColor: '#ffffff' }}
                    />
                </Scene>
                <Scene key="sMenu">
                    <Scene
                        key="menu" component={Menu}
                        title="Menu"
                        headerTitleStyle={{ color: '#ffffff' }}
                        headerTintColor='#ffffff'
                        headerStyle={{ backgroundColor: '#5db5e5' }}
                    />
                    <Scene
                        key="profile" component={Profile}
                        title="Profile"
                        headerTitleStyle={{ color: '#ffffff' }}
                        headerTintColor='#ffffff'
                        headerStyle={{ backgroundColor: '#ff4948' }}
                    />
                </Scene>
            </Stack>
        </Router>
    );
};

export default RouterComponent;
