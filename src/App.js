import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import handleSubmit from './yt-download.js'

function App() {
  return (
    <div className="App">
      <ThemeProvider
        breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        minBreakpoint="xxs"
      ></ThemeProvider>
      <div className="App-Container">
        <header><div>Youtube Downloader By Julian Lechner</div><div id="portfolio"><a href="https://julianlechner.herokuapp.com/" target="_blank">My Portfolio</a></div></header>
        <main>
          <section id="input-area">
            <Form>
              <Form.Group id="input-form">
                <Form.Label>Youtube URL</Form.Label>
                <Form.Control id="input-text" type="text" placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"></Form.Control>
                <Button>Submit</Button>
              </Form.Group>
            </Form>
          </section>
        </main>
        <footer>This project is intended for EDUCATIONAL USE only. <br/>Contact jll38@njit.edu for more information</footer>
      </div>
    </div>
  );
}

export default App;
