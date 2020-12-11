const path = require('path');

module.exports = class Server {
  constructor(express, PORT = 8909, NODE_ENV = 'local', HOST = 'http://localhost:3000') {
    this.express = express;
    this.app = express();
    this.PORT = PORT;
    this.NODE_ENV = NODE_ENV;
    this.setProductionFiles();
  }

  setProductionFiles() {
    if (['production', 'development'].some((env) => env !== this.NODE_ENV)) {
      this.app.use(this.express.static('../client/build'));

      this.app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '..', 'client', 'build', 'index.html'));
      });
    }
  }

  start() {
    this.app.listen(this.PORT, () => console.log(`🚀 Running on PORT ${this.PORT} in ${this.NODE_ENV} environment`));
  }
};
