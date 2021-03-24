import React, { Component } from 'react';

class Progress extends Component {
    render() {
        if(this.props.data){

            var document = this.props.data.document.map(function(document){
                return <div key={document.title}><h3>{document.title}</h3>
                <a href={document.link} target="_blank">Link</a> </div>
            })

        }
    
  
      return (
        <section id="progress">
  
          <div className="row">
  
            <div className="twelve columns collapsed">
  
              <h1>Here are our project progress documents.</h1>
  
            </div>
           </div>

          <div className="row papers">
                <div className="three columns header-col">
                    <h1><span>Documents</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                    <div className="twelve columns">
                        {document}
                    </div>
                    </div>
                </div>
            </div>
        </section>
      );
    }
  }
  
  export default Progress;
  