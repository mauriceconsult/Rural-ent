import { connectToDB } from "@utils/database";
import Record from "@models/record";

export const GET = async (request, {params}) => {
  try {
      await connectToDB();
      
      const records = await Record.find({creator: params.id}).populate("creator");

    return new Response(JSON.stringify(records), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to fetch all records", {
      status: 500,
    });
  }
};
