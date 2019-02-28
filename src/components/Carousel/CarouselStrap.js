import React, { Component } from "react";
import { getAlbums, playTrack, pauseTrack, changeIndex } from "../../actions";
import { connect } from "react-redux";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import TrackList from "./TrackList";
import Cover from "./Cover";
import PlayerControl from "../Player/PlayerControl";

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
    this.props.changeIndex(this.state.activeIndex);
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.albums.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
    this.props.changeIndex(this.state.activeIndex);
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
          <div className="row justify-content-center">
            <div className="col-md-4 .offset-md-4">
              <div className="card bg-dark shadow-lg rounded">
                <Cover
                  className="card-img-top"
                  coverSource={album.src}
                  coverAltText={album.altText}
                />
                <div className="card-body text-light">
                  <h5 className="card-title"> {album.info.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {album.info.artists[0].name}
                  </h6>
                  <p className="card-text" />
                  <div className="row justify-content-center">
                    <PlayerControl />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card bg-dark shadow-lg rounded">
                <div
                  className="card-body"
                  style={{ height: 500, overflowY: "scroll" }}
                >
                  <TrackList tracks={album.tracks} />
                </div>
              </div>
            </div>
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
        interval={false}
      >
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
      tracks: album.album.tracks.items,
      info: album.album
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
  {
    getAlbums,
    playTrack,
    pauseTrack,
    changeIndex
  }
)(CarouselStrap);
