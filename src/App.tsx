import { Button } from "@mantine/core";

import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { latLng } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Title, Center, Grid } from "@mantine/core";

const onButtonErrorClick = () => {
  throw new Error("This is a test error for Sentry!");
};

function App() {
  const position = latLng(-36.8536, 174.7665);

  return (
    <>
      <Center>
        <Title order={2}>Sentry Leaflet example</Title>
      </Center>
      <Grid>
        <Grid.Col span={9}>
          <MapContainer center={position} zoom={18} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </Grid.Col>
        <Grid.Col span={1}></Grid.Col>
        <Button onClick={onButtonErrorClick}>Create Error</Button>
      </Grid>
    </>
  );
}

export default App;
