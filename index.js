// Best APIs

// 1. Elephants API
const listElephants = "https://elephant-api.herokuapp.com/elephants";
const randomElephant = "https://elephant-api.herokuapp.com/elephants/random";
const bySex = "https://elephant-api.herokuapp.com/elephants/sex/male";

// 2. SpaceX - API
const listLaunches = "https://api.spacexdata.com/v3/launches";
const latestLaunch = "https://api.spacexdata.com/v3/launches/latest";

const AllAPIs = [
  {
    folderName: "Elephants",
    data: [
      { fileName: "listOfElephants.json", url: listElephants },
      { fileName: "randomElephant.json", url: randomElephant },
      { fileName: "bySexElephant.json", url: bySex }
    ]
  },
  {
    folderName: "Launches",
    data: [
      { fileName: "listOfLaunches.json", url: listLaunches },
      { fileName: "latestLaunch.json", url: latestLaunch }
    ]
  }
];

const fs = require("fs");
const axios = require("axios");

AllAPIs.map(api => {
  api.data.map(d => {
    axios.get(d.url).then(response => {
      const data = JSON.stringify(response.data);
      const filePath = `./${api.folderName}/${d.fileName}`;
      fs.writeFile(filePath, data, err => {
        if (err) throw err;
        console.log(`${api.folderName} saved`);
      });
    });
  });
});
