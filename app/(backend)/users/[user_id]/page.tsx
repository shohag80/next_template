"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import GoBack from "@/components/pages/go-back";
import api from "@/config/service/api";

interface DataType {
  id: string;
  name: string;
  email: string;
  active_status: string;
  created_at: string;
}

export default function UserInfoPage() {
  const route = useParams();
  const [data, setData] = useState<DataType>();

  useEffect(() => {
    async function fetchUserInfo() {
      const response = await api.get("/user/" + route.user_id);
      if (response.data.meta.http_status === 200) {
        setData(response.data.data);
      }
    }
    fetchUserInfo();
  }, []);

  let formattedDate = "";
  if (data?.created_at) {
    const joiningDate = new Date(data.created_at);
    formattedDate = joiningDate.toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "full",
    });
  }

  return (
    <>
      <header className="relative shadow-sm">
        <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            User Info
          </h1>
          <GoBack name="Back" />
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-gray-900">
          <div className="border border-gray-300 p-10 rounded-2xl">
            <h1 className="text-2xl font-bold">{data?.name}</h1><hr className="border-gray-300 mt-8" />
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-bold"
                >
                  User Id
                </label>
                <div className="mt-2">{data?.id}</div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-bold"
                >
                  Email
                </label>
                <div className="mt-2">{data?.email}</div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-bold"
                >
                  Online Activity
                </label>
                <div className="mt-2">
                  {data?.active_status == "1" ? "Active User" : "Inactive User"}
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-bold"
                >
                  Joining Date
                </label>
                <div className="mt-2">{formattedDate}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
