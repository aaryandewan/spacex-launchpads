import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Launchpad() {
  let { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("https://api.spacexdata.com/v4/launchpads/" + id.toString());
    fetch("https://api.spacexdata.com/v4/launchpads/" + id.toString())
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("DATA: ", data);
      });
  }, []);

  return (
    <div>
      {data && (
        <Grid
          container
          spacing={0}
          direction="row"
          justifyContent="center"
          // alignItems="center"
          alignItems="center"
          style={{ backgroundColor: "", height: "100vh" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={data.images.large[0]}
              alt="launchpad"
              width={600}
              height={400}
            ></img>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ backgroundColor: "", textAlign: "center" }}
          >
            <Typography sx={{ typography: { sm: "h4", xs: "h5" } }}>
              {data.full_name}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography sx={{ typography: { sm: "h5", xs: "h6" } }}>
              Launch location: {data.locality}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography sx={{ typography: { sm: "h5", xs: "h6" } }}>
              Launch successes: {data.launch_successes}
            </Typography>
          </Grid>
        </Grid>
        // </Box>
      )}
    </div>
  );
}

export default Launchpad;
