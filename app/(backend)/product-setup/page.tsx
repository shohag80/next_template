"use client"
import Link from "next/link";
import type { TableColumnsType } from "antd";
import { Table } from "antd";
import url from "@/app/_route/route";
interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [];
export default function DashboardPage() {
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
  ];
  return (
    <div>
      <header className="relative shadow-sm">
        <div className="flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Products List
          </h1>
          <Link href={url.b_addNewProdut} className="bg-[#0d2250] p-2 rounded-md font-bold">
            Add New
          </Link>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 text-gray-900">
          <Table<DataType> bordered loading={false} columns={columns} dataSource={data} />
        </div>
      </main>
    </div>
  );
}
