import React , { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



export default class RenderDownloads extends React.Component{
    render() {
        return (
            <>
                {setVid('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley')}
                <aside id="download-prompts">
                    <h3>Download Links</h3>
                    <p>1080p</p>
                    <p>720p</p>
                    <p>480p</p>
                </aside>
            </>
        );
    };
}

function setVid(props){
    // var urlInput = document.getElementById('input-text').value;
    var url = props.substring(props.indexOf('?v=') + 3, props.indexOf('&')); //Grabs video ID from link
    console.log(url);
    return(
        <div id="video-area">
                    <div className="wrapper">
                    <iframe width="400" height="100" src={`https://www.youtube.com/embed/${url}`}>
                    </iframe>
                    </div>
        </div>
    );
}