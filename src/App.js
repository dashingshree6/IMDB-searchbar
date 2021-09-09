import React, { Component, useState } from 'react';
//import React, { useState. useHooks} from 'react';
import './App.css';
//import { Provider , connect } from "react-redux";
import CardList from "./components/Card/CardList";
import {series} from "./lib/Series";
import 'tachyons';
import Searchbox from './components/Searchbox/Searchbox';
import Scroll from './components/Scroll/Scroll'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
//import { createStore } from "react-redux";

/* 

const store = createStore(rootReducer);
const rootReducer = () => {
 
}
*/
class App extends Component {
 constructor() {
   super()
   this.state = {
    //series : [], 
     series : series,
     setInput : ''
   }
 }
 
/* WITH THE HELP OF HOOKS
  const [series, setSeries] = useState([]);
  const [setInput, setInputs] = useState('');


  const onSearch = (event) => {
  setInputs(event.target.value)
 }

 useEffeect(() => {
  fetch('./lib/Series.js')
  .then(response => response.json())
  .then(series => {setSeries(series)})
 },[])
  
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
      <Searchbox searchChange={onSearch}/>  
      <Scroll>
        <ErrorBoundary>
           <CardList series={displaySeries}/> 
        </ErrorBoundary>
      </Scroll>
    </div>
  );

}


 // Fetching Dynamic data through APIs
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

