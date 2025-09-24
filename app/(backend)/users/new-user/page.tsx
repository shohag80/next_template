"use client";

import api from "@/config/service/api";
import { useState } from "react";
import GoBack from "@/components/pages/go-back";
import { ToastContainer, toast } from "react-toastify";

export default function NewUserPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  // Handles form data changes
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  // Handles form submission
  async function submit() {
    const { name, email, password, password_confirmation } = formData;
    if (!name || !email || !password || !password_confirmation) {
      toast.warning("Please enter your form data!");
      return;
    } else if (password.length !== password_confirmation.length) {
      toast.warning("Mismatch! Please enter your password carefully!");
      return;
    } else if (password !== password_confirmation) {
      toast.warning("Mismatch! Not matched!");
      return;
    } else {
      const response = await api.post("user", formData);
      console.log(response.data);
      if (response.data.meta.http_status == 201) {
        const user_data = response.data.data;
        toast.success(user_data.name + " is added successfully.");
      } else {
        toast.error("User added fails!.");
      }
    }
    formDataReset();
  }

  // reset form data
  function formDataReset() {
    setFormData({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  }

  return (
    <>
      <ToastContainer />
      <header className="relative shadow-sm">
        <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            New User
          </h1>
          <GoBack name="Back" />
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-gray-900">
          <div className="border-b border-black/10 pb-12 bg-gray-800 p-18 rounded">
            <h2 className="text-base/7 font-semibold text-white">
              User Information
            </h2>
            <p className="mt-1 text-sm/6 text-gray-400">
              Use a real mail address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-medium text-white"
                >
                  Full name <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="first-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    maxLength={64}
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-white"
                >
                  Email address <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    maxLength={32}
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-white"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    maxLength={32}
                    autoComplete="password"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-white"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    maxLength={32}
                    autoComplete="password_confirmation"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                onClick={formDataReset}
                className="rounded-md text-sm/6 font-semibold text-white border px-2 py-1.5"
              >
                Reset
              </button>
              <button
                type="submit"
                onClick={submit}
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
