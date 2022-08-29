import React from "react";
import './SearchBar.css';
//Logos 
import Hamburger from './images/icons/hamburger-menu.svg';
import YoutubeLogo from './images/icons/youtube-logo.svg';
import SearchIcon from "./images/icons/search.svg";
import VoiceSearchIcon from "./images/icons/voice-search-icon.svg";
import Upload from "./images/icons/upload.svg";
import YoutubeApps from "./images/icons/youtube-apps.svg";
import Notifications from "./images/icons/notifications.svg";
import ChannelImg from "./images/icons/my-channel.jpeg";

class SearchBar extends React.Component {


    state = {
        inputtext: ''
    }

    //Arrow function binds the value of this to the instance of SearchBar class
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.inputtext);
        this.setState({inputtext : '' });
    }

    render() {
        return (

            <div className="header">
                <div className="left-section">
                    <img className="hamburger-menu" src={Hamburger} alt="Hamburger Menu" />
                    <img className="youtube-logo" src={YoutubeLogo} alt="Youtube logo" />
                </div>
                <form className="middle-section" onSubmit={this.onFormSubmit}>

                    <input className="search-bar" type="text" placeholder="Search" onChange={(e) => this.setState({ inputtext: e.target.value })} value={this.state.inputtext} />
                    <button className="search-button">
                        <img className="search-icon" src={SearchIcon} alt="search" />
                        <div className="tooltip">Search</div>
                    </button>
                    <button className="voice-search-button">
                        <img src={VoiceSearchIcon} alt="voiceSearch" />
                        <div className="tooltip">Search with your voice</div>
                    </button>

                </form>

                <div className="right-section">
                    <div className="upload-icon-container">
                        <img className="upload-icon" src={Upload} alt="upload" />
                        <div className="tooltip">Create</div>
                    </div>

                    <div className="app-icon-container">
                        <img className="youtube-apps-icon" src={YoutubeApps} alt="youtube apps" />
                        <div className="tooltip">YouTube apps</div>
                    </div>


                    <div className="notifications-icon-container">
                        <img className="notifications-icon" src={Notifications} alt="notif" />
                        <div className="notifications-count">3</div>
                        <div className="tooltip">Notifications</div>
                    </div>
                    <img className="current-user-picture" src={ChannelImg} alt="Channel" />
                </div>
            </div>
        )

    }
}

export default SearchBar;