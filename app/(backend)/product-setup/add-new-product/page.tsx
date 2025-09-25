"use client";

import GoBack from "@/components/pages/go-back";

export default function DashboardPage() {
  return (
    <div>
      <header className="relative shadow-sm">
        <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            New Product
          </h1>
          <GoBack />
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-gray-900">
          {/* body */}
        </div>
      </main>
    </div>
  );
}
