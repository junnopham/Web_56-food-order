module.exports = class BaseController {
  constructor(model) {
    this.model = model;
    this.getAll = this.getAll.bind(this);
    this.getOne = this.getOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(req, res) {
    try {
      const data = await this.model.find({}).lean();

      return res.json({
        code: 200,
        status: "success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: e.message || "Some error occurred while retrieving data",
      });
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      const data = await this.model.findById(id).lean();

      if (!data) throw new Error("Data not found with id " + id);

      return res.json({
        code: 200,
        status: "success",
        data,
      });
    } catch (e) {
      if (e.kind === "ObjectId") {
        return res.status(404).send({
          code: 404,
          status: "error",
          message: "Data not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        code: 500,
        status: "error",
        message: "Error retrieving data with id " + req.params.id,
      });
    }
  }

  async create(req, res) {
    try {
      const data = req.body;

      const newData = new this.model(data);
      await newData.save();

      return res.json({
        code: 200,
        status: "success",
        message: "Create data successfully!",
        data: newData,
      });
    } catch (e) {
      res.status(500).send({
        code: 500,
        status: "error",
        message: e.message || "Some error occurred while creating data.",
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { body } = req.body;
      const data = await this.model.findByIdAndUpdate(id, body, {
        new: true,
      });

      if (!data) throw new Error("Data not found with id " + id);

      return res.json({
        code: 200,
        status: "success",
        message: "Data updated successfully!",
        data,
      });
    } catch (e) {
      if (e.kind === "ObjectId") {
        return res.status(404).send({
          code: 404,
          status: "error",
          message: "Note not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        code: 500,
        status: "error",
        message: "Error updating note with id " + req.params.id,
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const data = await this.model.findByIdAndRemove(id);

      if (!data) throw new Error("Data not found with id " + id);

      return res.send({
        code: 200,
        status: "success",
        message: "Data deleted successfully!",
      });
    } catch (e) {
      if (e.kind === "ObjectId" || e.name === "NotFound") {
        return res.status(404).send({
          code: 404,
          status: "error",
          message: "Data not found with id " + req.params.id,
        });
      }
      return res.status(500).send({
        code: 500,
        status: "error",
        message: "Could not delete data with id " + req.params.id,
      });
    }
  }
};
