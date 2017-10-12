import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { BoxLikeTl } from '../common';

class TlLike extends Component {
    render() {
        return (
            <Container style={{ backgroundColor: '#ffffff' }}>
                <Content>
                    <BoxLikeTl userId='Budi Biji' />
                    <BoxLikeTl userId='Sang Pejantan' />
                </Content>
            </Container>
        );
    }
}

export default TlLike;
