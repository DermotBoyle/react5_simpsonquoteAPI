import React, {Component} from 'react';
import GenerateSimpson from './components/generatesimpson';
import DisplaySimpson from './components/displaysimpson'
import './App.css';


const sampleSimpson = {
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
   character: "Nelson Muntz",
  characterDirection : "Left"

}; 

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      simpson: sampleSimpson,
    }
  }



getSimpson(){
  fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
  .then(response => response.json())
  .then(data =>{
    this.setState({
      simpson: data[0],
    });
  });
}


render () {
  return (
    <div>
      <DisplaySimpson simpson={this.state.simpson} />
      <GenerateSimpson selectSimpson= {() => this.getSimpson()} />
    </div>
  )
}
}
export default App;
