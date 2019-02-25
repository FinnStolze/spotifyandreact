import React, { Component } from "react";
import { getAlbums, playTrack } from "../../actions";
import { connect } from "react-redux";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
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

  onPlay = () => {
    this.props.playTrack(this.props.token, this.props.uri);
  };
  onPause = () => {
    this.props.pauseTrack(this.props.token, this.props.uri);
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
          <div className="row justify-content-center" style={{ height: 600 }}>
            <div className="col-md-4 .offset-md-4 w-100">
              {/* */}
              <div className="card bg-dark shadow-lg rounded">
                <Cover
                  className="card-img-top"
                  coverSource={album.src}
                  coverAltText={album.altText}
                />
                <div className="card-body h-100 text-light">
                  <h5 className="card-title"> {album.info.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {album.info.artists[0].name}
                  </h6>
                  <p className="card-text" />
                  <button onClick={this.onPlay} className="btn btn-success m-2">
                    Play
                  </button>
                  <button onClick={this.onPause} className="btn btn-danger m-2">
                    ||
                  </button>
                  <button onClick={this.onPause} className="btn btn-info m-2">
                    prev
                  </button>
                  <button onClick={this.onPause} className="btn btn-info m-2">
                    next
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4" style={{ overflowY: "scroll" }}>
              <div className="card bg-dark shadow-lg rounded">
                <div className="card-body">
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
    console.log(album);
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
  { getAlbums, playTrack }
)(CarouselStrap);
