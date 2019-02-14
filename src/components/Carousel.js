import React from "react";
import { getAlbums } from "../actions";
import { connect } from "react-redux";

class Carousel extends React.Component {
  componentDidMount() {
    if (this.props.isSignedIn) {
      this.props.getAlbums(this.props.token);
    }
  }
  renderSlides() {
    return this.props.albums.map((album, idx) => {
      return (
        <div key={album.id} className="carousel-inner">
          <div className={idx === 0 ? "carousel-item active" : "carousel-item"}>
            <img
              src={album.images[0].url}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          {this.renderSlides()}
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const albums = state.albums.map(album => {
    return album.album;
  });
  return {
    token: state.auth.token,
    isSignedIn: state.auth.signedIn,
    albums: albums
  };
};

export default connect(
  mapStateToProps,
  { getAlbums }
)(Carousel);
