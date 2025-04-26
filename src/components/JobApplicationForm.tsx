import React, { useState } from "react";

const JobApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: null as File | null,
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can later connect to backend here
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-slate-600">
            Submit your application below. We look forward to hearing from you!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-md"
        >
          <div className="space-y-6">
            <div>
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring focus:ring-primary"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring focus:ring-primary"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring focus:ring-primary"
              />
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="position"
              >
                Position Applying For
              </label>
              <select
                id="position"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring focus:ring-primary"
              >
                <option value="">Select Position</option>
                <option value="Caregiver">Caregiver</option>
                <option value="Nurse">Nurse</option>
                <option value="Home Health Aide">Home Health Aide</option>
                <option value="Office Administrator">
                  Office Administrator
                </option>
              </select>
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="resume"
              >
                Upload Resume (Optional)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex-grow">
              <label
                className="block mb-2 text-sm font-semibold"
                htmlFor="message"
              >
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={10}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring focus:ring-primary"
              />
            </div>

            <div className="mt-6">
              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default JobApplicationForm;
