import React from 'react';
import '../App.css';

class ListViewItem extends React.Component {
    
    
    
    render () {
        return (
            <div className="ListViewItem">
                
                 <img src={this.props.vid.snippet.thumbnails.default.url} alt='1' onClick={() => this.props.renderVid(this.props.vid)  }/>  
                <p>{this.props.vid.snippet.description}</p>
                
                <hr></hr>
            </div>
            
        )
    }
    
    

}

export default ListViewItem;