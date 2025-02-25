import { Table, Tag, Select, Button } from "nhsuk-react-components";
import { useState } from "react";

type BatchRow = {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  size: number; // New column
};

const batchData: BatchRow[] = [
  {
    id: "B001",
    status: "draft",
    createdAt: "2025-01-01",
    updatedAt: "2025-01-02",
    size: 100,
  },
  {
    id: "B002",
    status: "draft",
    createdAt: "2025-01-05",
    updatedAt: "2025-01-06",
    size: 100,
  },
  {
    id: "B003",
    status: "sent to print",
    createdAt: "2025-01-10",
    updatedAt: "2025-01-11",
    size: 100,
  },
  {
    id: "B004",
    status: "sent to print",
    createdAt: "2025-01-15",
    updatedAt: "2025-01-16",
    size: 100,
  },
  {
    id: "B005",
    status: "sent to print",
    createdAt: "2025-01-20",
    updatedAt: "2025-01-21",
    size: 100,
  },
  {
    id: "B006",
    status: "sent to print",
    createdAt: "2025-01-25",
    updatedAt: "2025-01-26",
    size: 100,
  },
  {
    id: "B007",
    status: "sent to print",
    createdAt: "2025-01-30",
    updatedAt: "2025-01-31",
    size: 100,
  },
  {
    id: "B008",
    status: "sent to print",
    createdAt: "2025-02-01",
    updatedAt: "2025-02-02",
    size: 100,
  },
  {
    id: "B009",
    status: "sent to print",
    createdAt: "2025-02-05",
    updatedAt: "2025-02-06",
    size: 100,
  },
  {
    id: "B010",
    status: "sent to print",
    createdAt: "2025-02-10",
    updatedAt: "2025-02-11",
    size: 100,
  },
];

function Batches() {
  const [statusFilter, setStatusFilter] = useState<string>("");

  const filteredData = statusFilter
    ? batchData.filter((row) => row.status === statusFilter)
    : batchData;

  return (
    <>
      <h1>Batches</h1>
      <Button type="button">Create New Batch</Button>
      <Select
        label="Filter by Status"
        onChange={(e) => setStatusFilter(e.target.value)}
        value={statusFilter}
      >
        <option value="">All</option>
        <option value="draft">Draft</option>
        <option value="sent to print">Sent</option>
      </Select>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>ID</Table.Cell>
            <Table.Cell>Size</Table.Cell>
            <Table.Cell>Status</Table.Cell>
            <Table.Cell>Created At</Table.Cell>
            <Table.Cell>Updated At</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {filteredData.map((row, index) => (
            <Table.Row key={index}>
              <Table.Cell>
                <a href="/batches/1">{row.id}</a>
              </Table.Cell>
              <Table.Cell>{row.size}</Table.Cell>
              <Table.Cell>
                <Tag color={row.status === "sent to print" ? "green" : "grey"}>
                  {row.status}
                </Tag>
              </Table.Cell>
              <Table.Cell>{row.createdAt}</Table.Cell>
              <Table.Cell>{row.updatedAt}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default Batches;
