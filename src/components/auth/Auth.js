import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Linking } from 'react-native';
import { Container, Button, Icon, H1, Text, Spinner, Toast } from 'native-base';
import { loginFB } from '../../actions';

class Auth extends Component {
    onButtonLogin() {
        this.props.loginFB();
    }
    renderError() {
        if (this.props.error) {
            return (
            Toast.show({
                text: `  ${this.props.error}`,
                position: 'bottom',
                buttonText: 'Okay'
              })
            );
        }

        return null;
    }
    renderButton() {
        if (this.props.loading) {
            return (
                <Button
                    style={{ 
                        borderRadius: 5,
                        backgroundColor: '#58b1e0' 
                    }}
                    block iconLeft
                >
                    <Spinner color='#ffffff' />
                </Button>
            );
        }

        return (
            <Button
            style={{ 
                borderRadius: 5,
                backgroundColor: '#58b1e0' 
            }}
            onPress={this.onButtonLogin.bind(this)}
            block iconLeft buttonLogin
            >
                <Icon name='logo-facebook' />
                <Text>Login with Facebook</Text>
            </Button>
        );
    }
    render() {
        return (
            <Container style={contentBody}>
                <View style={boxContent}>
                    <H1 style={title}>Find Something{'\n'}Different</H1>
                    <Image
                        style={logo} 
                        source={require('./logo.png')}
                    />
                    {this.renderButton()}
                    <Text style={termPolicy}>By signing up, you agree to the <Text onPress={() => Linking.openURL('https://www.facebook.com/legal/terms')} style={textLink}>Term of Use</Text> and{'\n'}
                    acknowledge that you have read the <Text onPress={() => Linking.openURL('https://www.facebook.com/policies')} style={textLink}>Privacy Policy</Text>.</Text>
                    {this.renderError()}
                </View>
            </Container>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const { error, loading } = auth;
    return { error, loading };
};

// styling tampilan di login 
const styles = {
    contentBody: {
        flex: 1,
        backgroundColor: '#fbfbfb',
        paddingLeft: 35,
        paddingRight: 35,
        paddingTop: 50,
        paddingBottom: 50,
    },
    boxContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 170,
        height: 142,
        marginBottom: 35,
        marginTop: 35
    },
    title: {
        textAlign: 'center',
        color: '#a0a0a0'
    },
    termPolicy: {
        color: '#434343',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 10
    },
    textLink: {
        color: '#58b1e0',
        fontSize: 12
    }
};

const { boxContent, contentBody, logo, title, termPolicy, textLink } = styles;

export default connect(mapStateToProps, {
    loginFB
})(Auth);
