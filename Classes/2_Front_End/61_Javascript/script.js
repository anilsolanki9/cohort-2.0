fetch('https://randomuser.me/api/')
  .then(rawData => rawData.json())
  .then(realData => {
    console.log(realData.results[0].name.first);
  })
  .catch(err => {
    console.log(err);
  });
