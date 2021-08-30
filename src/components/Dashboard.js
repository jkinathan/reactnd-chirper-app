import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweets from './Tweets'


export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h3 className="center">Your Timeline</h3>
                <ul className="dashboard-list">
                    {
                        this.props.tweetIds.map((tweetid)=>(
                            <li key={tweetid}>
                                <div>
                                    <Tweets id = {tweetid}/>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ tweets }){

    return{
        tweetIds: Object.keys(tweets).sort( (a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}

export default connect(mapStateToProps)(Dashboard)
