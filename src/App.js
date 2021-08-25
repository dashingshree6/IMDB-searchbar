import React, { Component } from 'react';
import './App.css';
import CardList from "./components/Card/CardList";
import 'tachyons';
import {series} from './lib/Series';
import Searchbox from './components/Searchbox/Searchbox';

class App extends Component {
 constructor() {
   super()
   this.state = {
     series : series, 
     setInput : ''
   }
 }
  
  onSearch = (event) => {
    this.setState({setInput: event.target.value})
  }
  render() {
    const displaySeries = this.state.series.filter(series => {
      return series.name.toLowerCase().includes(this.state.setInput.toLowerCase())
    })
    return (
      <div className="App">
        <h1>IMDB</h1>
        <Searchbox searchChange={this.onSearch}/>  
        <CardList series={displaySeries}/> 
      </div>
    );
  }
}

export default App;
