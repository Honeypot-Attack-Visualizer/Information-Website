import React, { Component } from 'react';

class Resources extends Component {

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    if(this.props.data){


      var book = this.props.data.book.map(function(book){
        return <div key={book.title}><h3>{book.title}</h3>
        <p className="info">{book.author} <span>&bull;</span><em className="date">{book.published}</em></p>
        <a href={book.link} target={"_blank"} color={"#808080"}>{book.link}</a>
        <p>{book.description}</p></div>
      })

      var website = this.props.data.website.map(function(website){
        return <div key={website.title}><h3>{website.title}</h3>
        <a href={website.link} target={"_blank"} color={"#808080"}>{website.link}</a></div>
      })
      var paper = this.props.data.paper.map(function(paper){
        return <div key={paper.title}><h3>{paper.title}</h3>
          <p>{paper.citation}</p>
        </div>
      })

      var news = this.props.data.news.map(function(news){
        return <div key={news.title}><h3>{news.title}</h3>
          <a href={news.link} target={"_blank"} color={"#808080"}>{news.link}</a>
        </div>
      })

    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Domain Book</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {book}
               </div>
            </div>
         </div>
      </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Websites</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {website}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Papers</span></h1>
         </div>

         <div className="nine columns main-col">
          {paper}
        </div>
    </div>



      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>News</span></h1>
         </div>

         <div className="nine columns main-col">
            {news}
			   </div>
      </div>
   </section>
    );
  }
}

export default Resources;
