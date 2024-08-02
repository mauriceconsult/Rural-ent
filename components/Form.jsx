import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Record</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and provide brief details of your daily transactions.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex-col gap-7 orange_gradient"
      >
        <label for="receipt">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Receipt
          </span>
          <input
            type="number"
            id="receipt"
            name="receipt"
            min="0"
            max="1000000"
            value={post.receipt}
            onChange={(e) =>
              setPost({
                ...post,
                receipt: e.target.value,
              })
            }
            placeholder="From 0 to 1000000, e.g., 15000"
            required
            className="form_input"
          />
        </label>

        <label for="receiptDetails">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Receipt Details
          </span>
          <input
            type="text"
            id="receiptDetails"
            name="receiptDetails"
            minLength="0"
            maxLength="20"
            size="20"
            value={post.receiptDetails}
            onChange={(e) =>
              setPost({
                ...post,
                receiptDetails: e.target.value,
              })
            }
            placeholder="#Indicate the source, e.g., sales, loan, donation, etc."
            required
            className="form_input"
          />
        </label>

        <label for="expense">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Expense
          </span>
          <input
            type="number"
            id="expense"
            name="expense"
            min="0"
            max="1000000"
            value={post.expense}
            onChange={(e) =>
              setPost({
                ...post,
                expense: e.target.value,
              })
            }
            placeholder="From 0 to 1000000, e.g., 12000"
            required
            className="form_input"
          />
        </label>

        <label for="expenseDetails">
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Expense Details
          </span>
          <input
            type="text"
            id="expenseDetails"
            name="expenseDetails"
            minLength="0"
            maxLength="20"
            size="20"
            value={post.expenseDetails}
            onChange={(e) =>
              setPost({
                ...post,
                expenseDetails: e.target.value,
              })
            }
            placeholder="#Indicate the expenditure, e.g., raw material, rent, utility, labor, etc."
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
