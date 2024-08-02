import { Schema, model, models } from "mongoose";

const RecordSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  receipt: {
    type: Number,
    required: [true, "Enter the amount received."],
  },
  receiptDetails: {
    type: String,
    required: [true, "Enter receipt details."],
  },
  expense: {
    type: Number,
    required: [true, "Enter the amount spent."],
  },
  expenseDetails: {
    type: String,
    required: [true, "Enter the amount spent."],
  },
  time: { type: Date, default: Date.now },
});

const Record = models.Record || model("Record", RecordSchema);

export default Record;
