import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import * as reactRedux from "https://cdn.skypack.dev/react-redux@7.2.6";
import * as redux from "https://cdn.skypack.dev/redux@4.1.2";
// const Provider = reactRedux.Provider
// const connect = reactRedux.connect

// const createStore = redux.createStore;
// const combineReducers = redux.combineReducers;
// const applyMiddleware = redux.applyMiddleware;
const NEW ="NEW"
const randomQuoter = () => {
    const allQuotes = [
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Inspirational",
            "Advice",
            "Humor"
        ]
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "True friends stab you in the front.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "People"
        ]
    },
    {
        "quote": "Women are made to be Loved, not understood.",
        "author": "Oscar Wilde",
        "profession": "Irish poet",
        "topics": [
            "Philosophy",
            "Humor"
        ]
    },
    {
        "quote": "Be the change that you wish to see in the world.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Philosophy",
            "Advice"
        ]
    },
    {
        "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "author": "Mahatma Gandhi",
        "profession": "Indian leader",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "No one can make you feel inferior without your consent.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "People"
        ]
    },
    {
        "quote": "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Advice"
        ]
    },
    {
        "quote": "Do one thing every day that scares you.",
        "author": "Eleanor Roosevelt",
        "profession": "Former First Lady of the United States",
        "topics": [
            "Wisdom",
            "Life"
        ]
    },
    {
        "quote": "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom",
            "Love"
        ]
    },
    {
        "quote": "Our lives begin to end the day we become silent about things that matter.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "People",
            "Life"
        ]
    },
    {
        "quote": "Injustice anywhere is a threat to justice everywhere.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Wisdom"
        ]
    },
    {
        "quote": "The time is always right to do what is right.",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Life's most persistent and urgent question is, 'What are you doing for others?",
        "author": "Martin Luther King",
        "profession": "American minister",
        "topics": [
            "Inspirational",
            "Life",
            "People"
        ]
    },
    {
        "quote": "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Life"
        ]
    },
    {
        "quote": "I have not failed. I've just found 10,000 ways that won't work.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "If we did all the things we are capable of, we would literally astound ourselves.",
        "author": "Thomas A. Edison",
        "profession": "American inventor",
        "topics": [
            "Inspirational"
        ]
    },
    {
        "quote": "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        "author": "Albert Einstein",
        "profession": "Theoretical physicist",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Life isn't about finding yourself. Life is about creating yourself.",
        "author": "George Bernard Shaw",
        "profession": "Irish playwright",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
            "Inspirational",
            "Life",
            "Advice"
        ]
    },
    {
        "quote": "If you're going through hell, keep going.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
            "Inspirational",
            "Advice"
        ]
    },
    {
        "quote": "We make a living by what we get, but we make a life by what we give.",
        "author": "Winston Churchill",
        "profession": "Former British Prime Minister",
        "topics": [
            "People",
            "Life"
        ]
    },
    {
        "quote": "Peace begins with a smile.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
            "Inspirational",
            "Wisdom"
        ]
    },
    {
        "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
            "Inspirational",
            "Love",
            "Advice"
        ]
    },
    {
        "quote": "If you can't feed a hundred people, then feed just one.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
            "Inspirational",
            "Advice",
            "People"
        ]
    },
    {
        "quote": "Kind words can be short and easy to speak, but their echoes are truly endless.",
        "author": "Mother Teresa",
        "profession": "Roman Catholic Saint",
        "topics": [
            "Inspirational",
            "People"
        ]
    }
  ];
  const quote = allQuotes[Math.floor(Math.random()*allQuotes.length)];
  return quote;
}
const newQuote = (theQuote) =>{
  return{
   type:NEW,
    theQuote
  }
}
const quoteReducer = (prevState = [
  randomQuoter()
]
              ,action) =>{
  switch(action.type){
    case NEW:
      return [
        action.theQuote
      ]
    default:
      return prevState;
  }
}

const store = redux.createStore(quoteReducer);
const Provider = reactRedux.Provider;
const connect = reactRedux.connect;

class Quotes extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input:''
    }
    this.createNewQuote = this.createNewQuote.bind(this);
  }
   createNewQuote =()=>{
      this.props.findNewQuote(randomQuoter())
    }
  render(){
    return(
    <div className="text-center card mr-auto" >
        <div className="row card-body">
        <div id="text" className="col-10 col-xs-10 justify-content-center font-italic" > 
            "{this.props.propQuote.quote}
          "
          </div>  
        <div id="author" className="font-italic text-capitalize well col-4 col-xs-2 justify-content-end">
            {this.props.propQuote.author}
            </div>
          </div>
        
        <div className=" card-body justify-content-center ">
        <button onClick={this.createNewQuote} className="  btn btn-secondary " id="new-quote">
          New Quote
        </button>
       
        </div> 
        
     </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {propQuote: state[0]}
};
const mapDispatchToProps = (dispatch) => {
  return {
    findNewQuote: (quote) => {
      dispatch(newQuote(quote))
    }
  }
};
const Container = connect(mapStateToProps, mapDispatchToProps)(Quotes);


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input:''
    }
    
  }
  render(){
    return(
    <div>
    <div> 
      <Container store={store}>
     <Quotes/>
      </Container>
        </div>
       <a className="col-2 card-link align-items-end" href={"https://twitter.com/intent/tweet?text='"+store.getState()[0].quote+"'"+store.getState()[0].author} id="tweet-quote" target="_top">
          tweet this</a>
    </div>
    )
  }
  
}


ReactDOM.render(
    <App/>,
  document.getElementById('quote-box')
);