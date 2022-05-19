const { model, Schema } = require("mongoose");

const reviewSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    comment: {
      type: String,
      default: null,
    },
    rate: {
      type: Number,
      required: true,
      enum: [1, 2, 3, 4, 5],
    },
  },
  { timestamps: true }
);

module.exports = model("Review", reviewSchema);
