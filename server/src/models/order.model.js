const { model, Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    order: [
      {
        foodId: {
          type: Schema.Types.ObjectId,
          ref: "Food",
        },
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = model("Order", orderSchema);
