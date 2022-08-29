
import './App.css';
import SearchBar from './SearchBar';
import youtubeapi from './api/youtube';
import React from 'react';
import VideoContent from './components/VideoContent';
import ListViewVideo from './components/ListViewVideo';



class App extends React.Component {
  state = {
    vids: [],
    vid: null
  }
  onSubmit = async (term) => {
    //Term refers to whatever the user has typed
    // Use youtube api to search the keyword term and get a list of results 
    const response = await youtubeapi.get('/search', {
      params: { q: term },
    });
    this.setState({ 
      vids: response.data.items,
      vid : response.data.items[0] 
    });
  }

  renderVideo = (vid) => {
    this.setState({ vid: vid })
  }

  //Take care of the situation when the user first loads up the program
  componentDidMount(){
    this.onSubmit('stocks');
  }

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={this.onSubmit} />
        <div className='maincontent'>
          <VideoContent vid={this.state.vid} />


          <ListViewVideo vidlist={this.state.vids} renderVid={this.renderVideo} />
        </div>
      </div>
    )
  }

}

export default App;
