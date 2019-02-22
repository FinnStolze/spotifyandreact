import React, { Component } from "react";
import { getAlbums, playTrack } from "../../actions";
import { connect } from "react-redux";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from "reactstrap";
import TrackList from "./TrackList";
import Cover from "./Cover";

class CarouselStrap extends Component {
  state = {
    activeIndex: 0
  };

  componentDidMount() {
    if (this.props.isSignedIn) {
      this.props.getAlbums(this.props.token);
    }
  }

  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.albums.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.albums.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.albums.map(album => {
      return (
        <CarouselItem
          key={album.src}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <div className="d-flex  flex-row justify-content-center">
            <Cover coverSource={album.src} coverAltText={album.altText} />
            <TrackList tracks={album.tracks} />
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
          items={this.props.albums}
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
    albums: albums
  };
};

export default connect(
  mapStateToProps,
  { getAlbums, playTrack }
)(CarouselStrap);
