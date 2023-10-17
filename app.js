const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');

const app = express();

app.use('/images', express.static(process.cwd() + '/images'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(
  sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: false,
    sourceMap: true,
  })
);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
