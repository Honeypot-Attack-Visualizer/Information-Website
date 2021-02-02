import React, { Component } from 'react';

class Tools extends Component {
  render() {

    if (this.props.data) {
      var tool = this.props.data.tool.map(function (tool) {
        var toolImage = 'images/portfolio/' + tool.image;
        
        return (
          <div key={tool.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={tool.url} title={tool.title} target={"_blank"}>
                <img alt={tool.title} src={toolImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{tool.title}</h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Here are the tools we utilized.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {tool}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tools;
