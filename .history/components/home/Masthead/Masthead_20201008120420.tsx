import React from 'react';
import styled from 'styled-components';
import vid from '../../../public/vid.mp4';

const Masthead = () => {
    return (
        <>
            <Wrapper>
                <VideoContainer>
                    <Video src="vid" autoplay muted loop />
                </VideoContainer>
                <Content>
                    <h1>The Shopify &mdash; Future Succeso</h1>
                </Content>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`

`;

const VideoContainer = styled.div``;

const Video = styled.video``;

const Content = styled.div``;

export default Masthead
