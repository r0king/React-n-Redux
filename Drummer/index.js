import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as reactRedux from "https://cdn.skypack.dev/react-redux@7.2.6";
import * as redux from "https://cdn.skypack.dev/redux@4.1.2";
// const Provider = reactRedux.Provider
// const connect = reactRedux.connect

// const createStore = redux.createStore;
// const combineReducers = redux.combineReducers;
// const applyMiddleware = redux.applyMiddleware;

const drumPads = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];
class Drums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      audiokey: 'audioQ'
    };
  }
  play = (keyTrigger,name='') => {
      const audioElem = document.getElementById(keyTrigger)

      audioElem.play() 
      if(name==null)
        name = drumPads.filter(i=>("audio"+i.keyTrigger)==keyTrigger) 
      this.setState({
        audiokey:keyTrigger,
        name:name[0].id
      });
      
  }
   
  handleClick = (action) => {
    const elemId = "audio"+action.keyTrigger

    this.play(elemId,action.id);
  };
  DrumPress = event =>{
    this.play("audio"+event.key.toUpperCase(),null)
 
  }
 componentDidMount(){
   document.addEventListener('keydown', this.DrumPress);
   console.log('event listener')

 }
  render() {
    
    return (
      <div className="text-center row align-items-center justify-content-center j" id="drum-machine">
        <div id="display" className="col-4">
          {this.state.name}
        </div>
        <div id="drumPads" className="row justify-content-center col-6 mx-md-n5 ">
          {drumPads.map((i) => {
            return (
              <div className="col-3 m-3">
                <button
                  id={i.keyTrigger}
                  className="btn drum-pad btn-secondary"
                  onClick={()=>
                  this.handleClick(i)}
                >   
                  {i.keyTrigger}  
                  <audio
                  id={"audio"+i.keyTrigger}
                  src={i.url}
                       className='clip'
                >               
                </audio>
                </button>
            
              </div>
            );
          })}
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
        <Drums />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("drums"));
