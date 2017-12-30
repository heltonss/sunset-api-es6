export default class AdminModel {
  // model
  // adminmodelDAO = (model) => {
  //   this.model = model;
  // };

  constructor(model) {
    this.model = model;
  }

  createAdmin(data, callback) {
    const model = this.model(data);
    model.save((err, result) => {
      callback(callback, result);
    });
  }

  findAdmins(query, callback) {
    this.model.find(query).exec(callback);
  }

  findOneAdmin(id, callback) {
    const query = { _id: id };
    this.model.findOne(query).exec(callback);
  }

  updateAdmin(id, data, callback) {
    const query = { _id: id };
    this.model.update(query, data).exec(
      (err, result) => {
        callback(err, result);
      });
  }

  connectMongodb(mongoose) {
    const admin = mongoose.model('admin', {
      name: String,
      email: String
    });

    return new this.adminModelDAO(admin);
  }
}
