const { model, Schema } = require("mongoose");

const foodSchema = new Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
      default: 0,
    },
    images: [{ type: String }],
    stock: {
      type: Boolean,
      default: true,
    },
    review: [{ type: Schema.Types.ObjectId, ref: "Review" }],
  },
  { timestamps: true }
);

module.exports = model("Food", foodSchema);
