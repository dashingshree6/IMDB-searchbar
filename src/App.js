import React, { Component } from 'react';
//import React, { useState. useHooks} from 'react';
import './App.css';
import CardList from "./components/Card/CardList";
import {series} from "./lib/Series";
import 'tachyons';
import Searchbox from './components/Searchbox/Searchbox';
import Scroll from './components/Scroll/Scroll'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
 constructor() {
   super()
   this.state = {
    //series : [], 
     series : series,
     setInput : ''
   }
 }
 
 const App = () => {
   
 }

 /* Fetching Dynamic data through APIs
  componentDidMount() {
   fetch('./lib/Series.js')
   .then(response => response.json())
   .then(series => this.setState({series : series}))
 }
 */

  onSearch = (event) => {
    this.setState({setInput: event.target.value})
  }
  render() {
    const {series, setInput} = this.state ;
    const displaySeries = series.filter(series => {
      return series.name.toLowerCase().includes(setInput.toLowerCase())
    })
    if(series.length === 0){
   //if(!series.length)   
      return <h1>Loading</h1>
    } else {
      return (
        <div className="App">
          <h1>IMDB</h1>
          <Searchbox searchChange={this.onSearch}/>  
          <Scroll>
            <ErrorBoundary>
               <CardList series={displaySeries}/> 
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  
    }
      }
}

export default App;

