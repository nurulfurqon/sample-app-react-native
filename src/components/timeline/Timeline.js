import React, { Component } from 'react';
import {
    Container,
    Tab,
    Tabs,
    Content,
    Button,
    Title,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { BotFoot } from '../common';
import PublicTl from './PublicTl';

class Timeline extends Component {
    render() {
        return (
            <Container>
                <Tabs locked tabBarUnderlineStyle={{ backgroundColor: '#5db5e5' }} >
                    <Tab
                        heading="Public"
                        tabStyle={{ backgroundColor: '#ffffff' }}
                        textStyle={{ fontWeight: '500' }}
                        activeTabStyle={{ backgroundColor: '#ffffff' }}
                        activeTextStyle={{ color: '#5db5e5', fontWeight: '500' }}
                    >
                        <PublicTl />
                    </Tab>
                    <Tab
                        heading="Local"
                        tabStyle={{ backgroundColor: '#ffffff' }}
                        textStyle={{ fontWeight: '500' }}
                        activeTabStyle={{ backgroundColor: '#ffffff' }}
                        activeTextStyle={{ color: '#5db5e5', fontWeight: '500' }}
                    >
                        <Content>
                            <Button
                                full
                                primary
                                onPress={() => Actions.addplpt()}
                            >
                                <Title>Say something!!</Title>
                            </Button>
                        </Content>
                    </Tab>
                </Tabs>
                <BotFoot />
            </Container>
        );
    }
}

export default Timeline;
