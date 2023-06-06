import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";
import { FaMapMarkerAlt } from "react-icons/fa";

const WorldMap = ({ countriesData }) => {
  const customMarkerIcon = L.divIcon({
    html: renderToStaticMarkup(<FaMapMarkerAlt color="red" size={20} />),
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });

  return (
    <div>
      {countriesData?.map((country) => (
        <Marker
          icon={customMarkerIcon}
          key={country.countryInfo._id}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>
                Active Cases: {country.active} <br />
                Recovered Cases: {country.recovered} <br />
                Deaths: {country.deaths}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </div>
  );
};

export default WorldMap;
