import React from 'react';
import {
    Button,
    Footer,
    Text, 
    FooterTab,
    View
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../config.json';

const Myicon = createIconSetFromFontello(fontelloConfig);
const styles = {
  circle: {
      width: 10,
      height: 10,
      backgroundColor: '#fee7a6',
      borderRadius: 10 / 2,
      position: 'absolute',
      top: 8,
      right: 30
  }  
};
const { circle } = styles;

const BotFoot = () => (
    <Footer
        style={{
            backgroundColor: '#5db5e5',
            borderTopWidth: 1,
            borderTopColor: '#52b0e4'
        }}
    >
        <FooterTab style={{ backgroundColor: '#5db5e5' }}>
            <Button onPress={() => Actions.sMain()} >
                <Myicon name='adult' size={20} color='#ffffff' />
                <Text style={{ color: '#ffffff' }}>Adult</Text>
            </Button>
            <Button onPress={() => Actions.sChat()}>
                <Myicon name="chat" size={20} color='#d6e8f2' />
                <Text style={{ color: '#d6e8f2' }}>Chat</Text>
                <View style={circle} />
            </Button>
            <Button>
                <Myicon name="notif" size={20} color='#d6e8f2' />
                <Text style={{ color: '#d6e8f2' }}>Activity</Text>
            </Button>
            <Button onPress={() => Actions.sMenu()} >
                <Myicon name="menu" size={20} color='#d6e8f2' />
                <Text style={{ color: '#d6e8f2' }}>Menu</Text>
            </Button>
        </FooterTab>
    </Footer>
);

export { BotFoot };
