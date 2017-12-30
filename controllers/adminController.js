import Promise from 'bluebird';
// import Debug from 'debug';
// const debug = Debug('sunsetapi:db');

export default class AdminController {
  model;
  // adminController = (adminModel) => {
  //   this.model = Promise.promisifyAll(adminModel);
  // }
  constructor(userModel) {
    this.model = Promise.promisifyAll(userModel);
  }

  createAdmin(req, res, next) {
    const body = req.body;
    this.model.createAsync(body)
      .then((err, data) => {
        res.json(data);
      })
      .catch(next);
  }

  getAllAdmin(req, res, next) {
    this.model.findAsync({})
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }

  getAdminById(req, res, next) {
    const id = req.params.id;
    this.model.findOneAsync(id)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }

  updateAdminById(req, res, next) {
    const id = req.params.id;
    const body = req.body;
    this.model.updateAsync(id, body)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }

  deleteAdminById(req, res, next) {
    const id = req.params.id;
    this.model.removeAsync(id)
      .then((data) => {
        res.json(data);
      })
      .catch(next);
  }
}
