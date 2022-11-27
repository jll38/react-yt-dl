import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import handleSubmit from '../yt-download';


export default class DownloadForm extends React.Component() {
    render() {
        return (
            <Form>
                <Form.Group id="input-form">
                    <Form.Label>Youtube URL</Form.Label>
                    <Form.Control id="input-text" type="text" placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></Form.Control>
                    <Button onClick={handleSubmit(document.getElementById('input-text').value)}>Submit</Button>
                </Form.Group>
            </Form>
        );
    };
}