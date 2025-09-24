"use client";
import UsersTable from "@/components/pages/backend/users/users-table";
import Link from "next/link";
import api from "@/config/service/api";
import React, { useEffect, useState } from "react";

export default function UsersPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await api.get("/users");
        setData(res.data.data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <header className="relative shadow-sm">
        <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            All Users
          </h1>
          <Link
            href={`/users/new-user`}
            className="bg-[#0d2250] p-2 rounded-md font-bold"
          >
            Add New
          </Link>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-gray-900">
          <UsersTable users={data} />
        </div>
      </main>
    </div>
  );
}
