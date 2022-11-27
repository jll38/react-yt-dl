import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class RenderDownloads extends React.Component{
    render() {
        return (
            <>
                <div id="video-area">
                    <iframe width="400" height="300" src="https://www.youtube.com/embed/dQw4w9WgXcQ">
                    </iframe>
                </div>
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