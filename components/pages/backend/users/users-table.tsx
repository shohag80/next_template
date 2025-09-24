"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { Button, Input, Space, Table } from "antd";
import type { FilterDropdownProps } from "antd/es/table/interface";

interface DataType {
  id: string;
  name: string;
  email: string;
  email_verified_at: number;
  active_status: number;
}

type UsersTableProps = {
  users: DataType[];
};

type DataIndex = keyof DataType;

export default function UsersTable({ users }: UsersTableProps) {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef<InputRef>(null);

  useEffect(() => {
    setData(users);
    setLoading(false);
  });

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<DataType> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    render: (text) => text,
  });

  const columns: TableColumnsType<DataType> = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "15%",
      ...getColumnSearchProps("id"),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "20%",
      ...getColumnSearchProps("name"),
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "20%",
      ...getColumnSearchProps("email"),
    },
    {
      title: "Verified Time",
      dataIndex: "email_verified_at",
      key: "email_verified_at",
      width: "15%",
    },
    {
      title: "Active Status",
      dataIndex: "active_status",
      key: "active_status",
      width: "15%",
      render: (active_status: number) =>
        active_status === 1 ? (
          <span className="text-green-700 font-bold">Active</span>
        ) : (
          <span className="text-gray-500 font-bold">Inactive</span>
        ),
      sorter: (a, b) => a.active_status - b.active_status,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "action",
      width: "15%",
      render: (id: string) => (
        <>
          <div className="flex justify-between">
            <Link href={`/users/${id}`}>
              <span className="bg-[#4a5246] text-white p-2 rounded-md">
                View
              </span>
            </Link>
            <Link href={`/users/edit/${id}`}>
              <span className="bg-[#046e00] text-white p-2 rounded-md">
                Edit
              </span>
            </Link>
            <Link href={`/users/delete/${id}`}>
              <span className="bg-[#db2d02] text-white p-2 rounded-md">
                Delete
              </span>
            </Link>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <Table<DataType>
        bordered
        size={`small`}
        loading={loading}
        columns={columns}
        dataSource={data}
        rowKey="id"
        scroll={{ x: "max-content" }}
      />
    </>
  );
}
