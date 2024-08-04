"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";

const UpdateRecord = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const recordId = searchParams.get("id");

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({
    receipt: Number,
    receiptDetails: "",
    expense: Number,
    expenseDetails: "",
  });

  useEffect(() => {
    const getRecordDetails = async () => {
      const response = await fetch(`/api/record/${recordId}`);
      const data = await response.json();
      setPost({
        receipt: data.receipt,
        receiptDetails: data.receiptDetails,
        expense: data.expense,
        expenseDetails: data.expenseDetails,
      });
    };
    if (recordId) getRecordDetails();
  }, [recordId]);

    const updateRecord = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      if(!recordId) return alert("Missing RecordId!")

      try {
        const response = await fetch(`/api/record/${recordId}`, {
          method: "PATCH",
          body: JSON.stringify({
            receipt: post.receipt,
            receiptDetails: post.receiptDetails,
            expense: post.expense,
            expenseDetails: post.expenseDetails,
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
      type="Edit"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updateRecord}
    />
  );
};

export default UpdateRecord;
