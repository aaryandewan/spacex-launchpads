import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState(null);
  const [launches, setLaunches] = useState([]);

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
          {data.map((item) => (
            <div>
              <h1>{item.name}</h1>
              {/* {console.log(item.images.large[0])} */}
              <img
                src={item.images.large[0]}
                alt="img"
                height={400}
                width={300}
              ></img>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
