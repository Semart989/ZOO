const express = require('express');
const logger = require('morgan');
const path = require('path');

// сессии
const session = require('express-session');
const FileStore = require('session-file-store')(session);

// руты
const indexRouter = require('./routes/index.routes');
const animalsRouter = require('./routes/animals.routes');
const ratesRouter = require('./routes/rates.routes');
const loginRouter = require('./routes/login.routes');
const logoutRouter = require('./routes/logout.routes');
const editRouter = require('./routes/edit.routes');
const contactsRouter = require('./routes/contacts.routes');

// мидлварка
const userMiddlware = require('./middleware/user');

const app = express();
const port = process.env.PORT || 3000;

// сессии
const sessionConfig = {
  name: 'user_sid',
  secret: 'secret',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
  store: new FileStore(),
};

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(userMiddlware);

// роуты
app.use('/', indexRouter);
app.use('/animals', animalsRouter);
app.use('/rates', ratesRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/animaledit', editRouter);
app.use('/contacts', contactsRouter);

// запуск
app.listen(port, () => {
  console.log(`server started PORT: ${port}`);
});
