
import React from 'react';
import '../App.css';


class VideoContent extends React.Component {

    

    renderContent() {
        const video = this.props.vid;
        if (video === null) {
            return (
                <div className="VideoContent">

                    <div style={{ height: '800px', width: '1500px' }}> 
                        <h1>Search for a video to show up here!</h1>
                    </div>
                    <div className="VideoContent-details ui segment">
                        <h1>Title waiting to be rendered...</h1>
                        <p>Description waiting to be rendered...</p>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="VideoContent">
                    <div className="ui embed">
                        <iframe height="800" width="1500" src={'https://www.youtube.com/embed/' + video.id.videoId} title="uwu" />
                    </div>
                    
                    <div className="VideoContent-details ui segment">
                        <h1>{video.snippet.title}</h1>
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            )
        }
    }

    render() {
        return this.renderContent();
    }


}







export default VideoContent;