import { Card, CardContent, Typography } from "@mui/material";

const Main = ({ data }) => {
  if (!data[0]) {
    return "Loading...";
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
            <select>{getOption(data)}</select>
          </Typography>
          <br />
          <Typography variant="h4" component="div">
            {data[0].price}
          </Typography>
          <br />
          <Typography variant="h6">Rank={data[0].rank}</Typography>
          <br />
          <Typography variant="body3">Status={data[0].status}</Typography>
          <br />
          <Typography variant="h6">id="{data[0].id}"</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Main;
