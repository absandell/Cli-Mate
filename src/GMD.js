
const getDistance = (origin, destination, key) => {
   let axios = require('axios');

   let config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=${origin}&origins=${destination}&key=${key}`,
      headers: { }
   };
   axios(config)
   .then(function (response) {
      return response.data["rows"]["elements"]["distance"]["text"];
   })
   .catch(function (error) {
   console.log(error);
   });
}
