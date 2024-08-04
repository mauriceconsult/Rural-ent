import { connectToDB } from "@utils/database";
import Record from "@models/record";

// GET read
export const GET = async (request, {params}) => {
  try {
    await connectToDB();

      const record = await Record.findById(params.id).populate("creator");
      if(!record) return new Response("Record not available", {status: 404})

    return new Response(JSON.stringify(record), { status: 200 });
  } catch (error) { return new Response("Failed to fetch all records", {
      status: 500 });
  }
};

// PATCH update
export const PATCH = async (request, { params }) => {
    const { receipt, receiptDetails, expense, expenseDetails } = await request.json();

    try {
        await connectToDB();

        const existingRecord = await Record.findById(params.id)
        if (!existingRecord) return new Response("Record not found", { status: 404 })
        
        existingRecord.receipt = receipt;
        existingRecord.receiptDetails = receiptDetails;
        existingRecord.expense = expense;
        existingRecord.expenseDetails = expenseDetails;

        await existingRecord.save();

      return new Response("Successfully updated the Prompts", { status: 200 });
      
    } catch (error) {
        return new Response("Failed to update record", { status: 500})
    }
}

// DELETE delete
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        await Record.findByIdAndRemove(params.id);

        return  new Response("Record deleted successfully", {status: 200})
    } catch (error) {
        return new Response("Failed to delete record", { status: 500 })
    }
}