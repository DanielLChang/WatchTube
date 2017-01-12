import React from 'react';
import Carousel from 'nuka-carousel';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { videos, numToSlide } = this.props;

    return (
      <Carousel
        slidesToShow={numToSlide}
        slidesToScroll={numToSlide}
        dragging={true}
        height={"200px"}
        decorators={[{
          component: React.createClass({
            render() {
              return (
                <button
                  onClick={this.props.previousSlide}>
                  {"<"}
                </button>
              );
            }
          }),
          position: 'CenterLeft'
        },{
          component: React.createClass({
            render() {
              return (
                <button
                  onClick={this.props.nextSlide}>
                  {">"}
                </button>
              );
            },
          }),
          position: 'CenterRight'
        }]}>

        { videos }

      </Carousel>
    );
  }
}

export default App;
