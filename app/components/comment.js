import {unixTimeToString} from '../util.js'
//function unixTimeToString(time) {return new Date(time).toLocaleString();}
import React from 'react';
export default class Comment extends React.Component{
	render(){
		return(
			<div><div className="media-left media-top">PIC</div><div className="media-body">
			<a href="#">{this.props.author.FullName}</a>{
				this.props.children
			}<br /><a href="#">Like</a> · <a href="#">Reply</a>·{unixTimeToString(this.props.postDate)}</div></div>
			)
	}
}
