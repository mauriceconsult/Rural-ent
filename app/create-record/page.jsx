"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreateRecord = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    receipt: Number,
    receiptDetails: "",
    expense: Number,
    expenseDetails: "",
  });

  const createRecord = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/record/new',
        {
          method: "POST",
          body: JSON.stringify({
            receipt: post.receipt,
            receiptDetails: post.receiptDetails,
            expense: post.expense,
            expenseDetails: post.expenseDetails,
            userId: session?.user.id,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createRecord}
    />
  );
};

export default CreateRecord;
