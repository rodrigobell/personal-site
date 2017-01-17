import express from 'express';
import path from 'path';
import compression from 'compression';
import chalk from 'chalk';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log(chalk.green('Prod app running on PORT: ' + port));
    }
});
