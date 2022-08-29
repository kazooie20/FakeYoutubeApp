
import React from 'react';
import '../App.css';
import ListItem from './ListViewItem';

class ListViewVideo extends React.Component {
    render() {
        return (
            <div className="ListViewVideo ui relaxed divided list segment">
                {this.props.vidlist.map((viditem) => {
                    return <ListItem key={viditem.id.videoId} vid={viditem} renderVid={this.props.renderVid} />


                })}


            </div>
        )

    }
}

export default ListViewVideo;