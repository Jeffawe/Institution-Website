import { useState } from 'react';
import './contact.scss'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const [, setMap] = useState<google.maps.Map | null>(null);
  const mapContainerStyle = {
    height: '400px',
    width: '100%',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };


  const CreateMap = () => {
    return (
      <div>
        <LoadScript
          googleMapsApiKey="AIzaSyCCJRhW44W3V59FMjCEd7759J4h1CNsuY8"
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
          >
            {/* You can add markers or other components here */}
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    )
  }

  return (
    <div className="image-wrapper">
      <div className="map-section">
        <Fade>
          {CreateMap()}
        </Fade>
      </div>
      <div className="info-section">
        <Fade>
          <div className="address">
            <h4>Address:</h4>
            <p>Some Street, Some Town, Some State, Some Country</p>
          </div>
          <hr />
          <div className="email">
            <h4>E-mail:</h4>
            <p>awagujeffery@gmail.com</p>
          </div>
          <hr />
          <div className="phone">
            <h4>Phone:</h4>
            <p>+234 821 144 9985, +234 531 5235362</p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Contact
