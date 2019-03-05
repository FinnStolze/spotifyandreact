import React from "react";
import CarouselStrap from "../Carousel/CarouselStrap";
import { connect } from "react-redux";
import SdkPlayer from "../SdkPlayer";
import { receiveToken } from "../../actions";
import Footer from "../Footer";
import Navbar from "../Navbar";

class Home extends React.Component {
  componentDidMount() {
    const url = window.location.href;
    if (url.includes("#")) {
      const access_token = url.match(/#(?:access_token)=([\S\s]*?)&/)[1];
      this.props.receiveToken(access_token);
    }
  }

  renderContent = () => {
    if (this.props.isSignedIn) {
      return (
        <div>
          <CarouselStrap /> <br />
          <SdkPlayer />
          <Footer />
        </div>
      );
    } else {
      return <div />;
    }
  };

  render() {
    return (
      <div className="bg-light text-dark">
        <Navbar />
        {this.renderContent()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.signedIn };
};
export default connect(
  mapStateToProps,
  { receiveToken }
)(Home);
