const express = require('express');
const path = require('path');

const app = express();

app.set('port', (process.env.PORT) || 5000);

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'index.jquery.html'));
});

app.get('/contacts', (req, res) => {
  res.json([
    {
      "id": "1", "firstName": "Doowon", "lastName": "Lee", "telNo": "416-828-3050"
    }
  ]);
});

app.listen(app.get('port'), (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Node app is running at localhost:" + app.get('port'));
  }
});
