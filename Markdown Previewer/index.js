import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as reactRedux from "https://cdn.skypack.dev/react-redux@7.2.6";
import * as redux from "https://cdn.skypack.dev/redux@4.1.2";
// const Provider = reactRedux.Provider
// const connect = reactRedux.connect

// const createStore = redux.createStore;
// const combineReducers = redux.combineReducers;
// const applyMiddleware = redux.applyMiddleware;
const markdown = '# Marked in Node.js</br>Rendered by **marked**.</br>I just love __bold text__.</br>A*cat*meow'
const html = marked.parse(markdown);

class MarkDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: markdown,
      markdown: marked.parse(markdown)
    };
  }
  clearPreview = () => {
  this.setState({
      input:''
    });
  };
  handleChange = (event) => {
    if(event.target.value == '\n'){
      event.target.value= '</br>'
    }
    this.setState({
      input:event.target.value
    });
  };
  render() {
    return (
      <div className="text-center">
        <div className='row justify-content-between'>
          <textarea onChange={this.handleChange}
            id="editor"
            className="card card-body col-5 col-xs-5  font-italic"
            value={this.state.input}
          >
            
          </textarea>
          <div
            id="preview"
            className="card card-body col-5 col-xs-5  font-italic"
          >
            <div dangerouslySetInnerHTML={{__html: marked.parse(this.state.input)}}></div>

            
          </div>
        </div>
        <div className="justify-content-center ">
          <button
            onClick={this.clearPreview}
            className="btn btn-secondary "
            id="clear"
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  render() {
    return (
      <div>
          <MarkDown />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("markdown"));
