import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resources from './Components/Resources';
import Tools from './Components/Tools';
import Progress from './Components/Progress';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      Data: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getData(){
    $.ajax({
      url:'./Data.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({Data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.Data.main}/>
        <About data={this.state.Data.main}/>
        <Resources data={this.state.Data.resources}/>
        <Progress data={this.state.Data.progress}/>
        <Tools data={this.state.Data.tools}/>
        <Footer data={this.state.Data.main}/>
      </div>
    );
  }
}

export default App;
