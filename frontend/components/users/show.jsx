import React from "react";
import Header from "../header/header_container";
import {MdGridOn} from 'react-icons/md';

class Show extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }

    render(){
        if (!this.props.user) return null;
        const {username} = this.props.user
        return (
            <div className="profile-page-show">
                <div className="header-holder">
                    <Header/>
                </div>
                <div className="header">
                    <div className="show-page">
                        <div className="show-header">
                            <img className="show-profile-pic" src={window.profileIcon}/>
                            <div className="show-info-container">
                                <ul className="show-name">
                                    <li>{username}</li>
                                    {/* <li key={2}><img className="following-icon" src={window.following}/></li> */}
                                </ul>
                                <ul className="show-following">
                                    <li key={1}><span>{(Object.values(this.props.posts)).length}</span> posts</li>
                                    <li key={2}><span>{Math.floor(Math.random()*200)}</span> followers</li>
                                    <li key={3}><span>{Math.floor(Math.random()*200)}</span> following</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid-container">
                            <MdGridOn className="grid-icon"/>
                            <ul className="show-photos">
                                {
                                    this.props.posts.map((post,i) =>(
                                        <li key={i} className="show-photo" onClick={()=>this.props.openModal('show-modal', post.id)}>
                                            <img src={post.photoUrl}/>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Show