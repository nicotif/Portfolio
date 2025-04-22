import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Required";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Valid email required";
    if (!form.message) errs.message = "Required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      // handle submission (e.g., send to API)
      alert("Message sent!");
    } else setErrors(errs);
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-8">
      <h2 className="text-3xl font-semibold mb-6">Contact Me!</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md">
        {["name", "email", "message"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-sm font-medium capitalize">
              {field}
            </label>
            {field !== "message" ? (
              <input
                type={field}
                name={field}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="mt-1 block w-full border p-2 rounded"
              />
            ) : (
              <textarea
                name={field}
                rows="4"
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                className="mt-1 block w-full border p-2 rounded"
              />
            )}
            {errors[field] && (
              <p className="text-red-500 text-sm">{errors[field]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded w-full"
        >
          Send
        </button>
      </form>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-2">Find me on</h3>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="https://github.com/nicotif" className="underline">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/nicole-tiffany"
              className="underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
