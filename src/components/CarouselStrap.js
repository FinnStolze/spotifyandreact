import React, { Component } from "react";
import { getAlbums } from "../actions";
import { connect } from "react-redux";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

class CarouselStrap extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  componentDidMount() {
    if (this.props.isSignedIn) {
      this.props.getAlbums(this.props.token);
    }
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <div
            className="d-flex  flex-row justify-content-center"
            style={{ height: "300px" }}
          >
            <img className="h-100" src={item.src} alt={item.altText} />

            <div />
            <ul
              style={{ overflow: "scroll" }}
              className="list-group list-group-flush"
            >
              {item.tracks.map((track, idx) => (
                <li key={idx} className="list-group-item">
                  {track.name}
                </li>
              ))}
            </ul>

            <div />
          </div>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        className="container"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={this.props.items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const albums = state.albums.map(album => {
    return {
      src: album.album.images[1].url,
      altText: "AlbumCover",
      caption: album.album.artists[0].name,
      tracks: album.album.tracks.items
    };
  });
  return {
    token: state.auth.token,
    isSignedIn: state.auth.signedIn,
    items: albums
  };
};

export default connect(
  mapStateToProps,
  { getAlbums }
)(CarouselStrap);
