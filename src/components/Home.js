import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardActionArea } from "@mui/material";

import Typography from "@mui/material/Typography";

function Home() {
  const [data, setData] = useState(null);
  const [launches, setLaunches] = useState([]);
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  // USE V3 NOT v4!!!!!!!!!!!!!!!!!!
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launchpads")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log("DATA =", data);
        for (let i = 0; i < 3; i++) {
          if (data.launches[i])
            setLaunches((prevVals) => [...prevVals, data.launches[i]]);
          console.log("LAUNCHESZ:", launches);
        }
      })
      .catch((error) => console.log("ERROR!", error));
  }, []);

  //name = item.name
  //status = item.status
  //image =item.images.large[0]
  //details...
  //item.launch_attempts
  //item.launch_successes
  //item.region

  //...top 3 launches

  return (
    <div>
      {data && (
        <div>
          {/* <Typography
            variant="h1"
            textAlign="center"
            // style={{ marginBottom: "30px" }}
          >
            Launchpads
          </Typography> */}
          {/* <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            style={{ height: "100vh", backgroundColor: "red" }}
            // sx={{ flexGrow: 1 }}
          > */}
          <div
            style={{
              // display: "flex",
              // justifyContent: "center",
              backgroundColor: "",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography textAlign="center" variant="h2">
                  Launchpads
                </Typography>
              </Grid>

              {data.map((item) => (
                <Grid item md={4} xs={12}>
                  <Card sx={{}}>
                    <CardActionArea
                      component={RouterLink}
                      to={"/launchpads/" + item.id.toString()}
                    >
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="280"
                        image={item.images.large[0]}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {item.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                          Status: {item.status}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Launch Attempts:{item.launch_attempts}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Launch Successes:{item.launch_successes}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
          {/* </Box> */}
        </div>
      )}
    </div>
  );
}

export default Home;
