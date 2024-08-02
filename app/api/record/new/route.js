import { connectToDB } from "@utils/database";
import Record from "@models/record";

export const POST = async (req) => {
  const { userId, receipt, receiptDetails, expense, expenseDetails } =
    await req.json();
  try {
    await connectToDB();
    const newRecord = new Record({
      creator: userId,
      receipt,
      receiptDetails,
      expense,
      expenseDetails,
    });
    await newRecord.save();
    return new Response(JSON.stringify(newRecord), { status: 201 });
  } catch (error) {
    new Response("Failed to create a new record", { status: 500 });
  }
};
