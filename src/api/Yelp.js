const yelp = require('yelp-fusion');

const clientId = "k-l3qpM_sAXkfZJXYxbLXg";
const clientSecret = "qSjKY5VQBe1oVMIXkxpw7Opy0wpAIarOlPIthyWDTEsBNEJmpFJs84udOeyr2FJb";

const token = "G5P6ZViRjS8FUCeVayr-LJJj_kii3F4M7Jjs3shnwBTW9Z3foYnCMyiIUW_Ad5J_rWPuK-YqSgJmsW7YKy3zGYtXvez0OBI2_70CbAEi1oyGSOiOF-TeKuMaWit-WXYx";

const client = yelp.client(token);


let businessSearch = (inputLocation) => {
  client.search({
    location: inputLocation
  }).then(response => {
    console.log(response.jsonBody.businesses[0]);
  }).catch(e => {
    console.log(e);
  });
}


module.exports = {
  businessSearch,
};
