import axios from "axios";

const url =
  "https://api.nomics.com/v1/currencies/ticker?key=6cd6498602ca8bb3cf58167025e047a172034622&interval=1d&convert=EUR&per-page=100&page=1";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    let updatedData = {};
    for (let i = 0; i < 100; i++) {
      updatedData[i] = {
        name: data[i].name,
        price: data[i].price,
      };
    }
    return updatedData;
  } catch (error) {
    console.log(error);
  }
};
