import { Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";

const Main = ({ data }) => {
  const [selected, setSelected] = useState();

  if (!data[0]) {
    return "Loading...";
  }

  function handleChange(data) {
    let pric = parseFloat(data).toFixed(2);
    setSelected(pric);
  }

  const getOption = (data) => {
    let content = [];
    for (let i = 0; i < 100; i++) {
      const dat = data[i];
      content.push(
        <option value={dat.price} key={i}>
          {dat.name}
        </option>
      );
    }
    return content;
  };

  // data.map((dat) => {
  //   <option value={dat.price}>{dat.name}</option>
  // })

  return (
    <div className="main">
      <Card sx={{ minWidth: 275 }} className="card">
        <CardContent className="content">
          <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom>
            <select
              className="select"
              onChange={(e) => handleChange(e.target.value)}
            >
              <option>Select Coin</option>
              {getOption(data)}
            </select>
          </Typography>
          <br />
          <Typography variant="h4" component="div">
            price = ${selected}
          </Typography>
          <br />
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
