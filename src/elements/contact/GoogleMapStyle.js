import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { BiMap } from "react-icons/bi";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
class GoogleMapStyle extends Component {
  static defaultProps = {
    center: {
      lat: 31.448735,
      lng: 74.287171,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="google-map-style-1">
        <GoogleMapReact
          // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={31.448735}
            lng={74.287171}
            text={<BiMap style={{ height: "30px", width: "40px" }} />}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMapStyle;
