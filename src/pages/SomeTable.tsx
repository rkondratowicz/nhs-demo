import { Button, Table, Tag } from "nhsuk-react-components";

type TableRow = {
  id: string;
  batchId: string;
  pensionerName: string;
  status: string;
  lastUpdated: string;
};

const tableData: TableRow[] = [
  { id: "A1B2C3D4", batchId: "B001", pensionerName: "John Doe", status: "approved", lastUpdated: "2025-01-01" },
  { id: "E5F6G7H8", batchId: "B001", pensionerName: "Jane Smith", status: "rejected", lastUpdated: "2025-01-15" },
  { id: "I9J0K1L2", batchId: "B001", pensionerName: "Alice Johnson", status: "awaiting approval", lastUpdated: "2025-01-05" },
  { id: "M3N4O5P6", batchId: "B002", pensionerName: "Bob Brown", status: "approved", lastUpdated: "2025-01-20" },
  { id: "Q7R8S9T0", batchId: "B002", pensionerName: "Charlie Davis", status: "rejected", lastUpdated: "2025-01-02" },
  { id: "U1V2W3X4", batchId: "B003", pensionerName: "David Evans", status: "approved", lastUpdated: "2025-01-10" },
  { id: "Y5Z6A7B8", batchId: "B003", pensionerName: "Emma Wilson", status: "awaiting approval", lastUpdated: "2025-01-12" },
  { id: "C9D0E1F2", batchId: "B003", pensionerName: "Frank Harris", status: "rejected", lastUpdated: "2025-01-18" },
  { id: "G3H4I5J6", batchId: "B003", pensionerName: "Grace Martin", status: "approved", lastUpdated: "2025-01-22" },
  { id: "K7L8M9N0", batchId: "B013", pensionerName: "Henry Clark", status: "awaiting approval", lastUpdated: "2025-01-25" },
  { id: "O1P2Q3R4", batchId: "B015", pensionerName: "Ivy Lewis", status: "rejected", lastUpdated: "2025-01-30" },
  { id: "S5T6U7V8", batchId: "B015", pensionerName: "Jack Walker", status: "approved", lastUpdated: "2025-02-01" },
  { id: "W9X0Y1Z2", batchId: "B015", pensionerName: "Karen Hall", status: "awaiting approval", lastUpdated: "2025-02-05" },
  { id: "A3B4C5D6", batchId: "B015", pensionerName: "Leo Allen", status: "rejected", lastUpdated: "2025-02-10" },
  { id: "E7F8G9H0", batchId: "B015", pensionerName: "Mia Young", status: "approved", lastUpdated: "2025-02-15" },
  { id: "F1G2H3I4", batchId: "B016", pensionerName: "Nancy White", status: "in print", lastUpdated: "2025-02-20" },
  { id: "J5K6L7M8", batchId: "B017", pensionerName: "Oscar King", status: "sent", lastUpdated: "2025-02-25" },
  { id: "N9O0P1Q2", batchId: "B018", pensionerName: "Paul Green", status: "awaiting approval", lastUpdated: "2025-03-01" },
  { id: "R3S4T5U6", batchId: "B019", pensionerName: "Quincy Adams", status: "approved", lastUpdated: "2025-03-05" },
  { id: "V7W8X9Y0", batchId: "B020", pensionerName: "Rachel Brown", status: "in print", lastUpdated: "2025-03-10" },
  { id: "Z1A2B3C4", batchId: "B021", pensionerName: "Samuel Clark", status: "sent", lastUpdated: "2025-03-15" },
  { id: "D5E6F7G8", batchId: "B022", pensionerName: "Tina Davis", status: "awaiting approval", lastUpdated: "2025-03-20" },
  { id: "H9I0J1K2", batchId: "B023", pensionerName: "Uma Edwards", status: "approved", lastUpdated: "2025-03-25" },
  { id: "L3M4N5O6", batchId: "B024", pensionerName: "Victor Foster", status: "in print", lastUpdated: "2025-03-30" }
];

function SomeTable() {
  return (
    <>
      <h1>Letters</h1>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>ID</Table.Cell>
            <Table.Cell>Batch ID</Table.Cell>
            <Table.Cell>Pensioner Name</Table.Cell>
            <Table.Cell>Status</Table.Cell>
            <Table.Cell>Last Updated</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {tableData.map((row, index) => (
            <Table.Row key={index}>
              <Table.Cell><a href="/review-entry">{row.id}</a></Table.Cell>
              <Table.Cell>{row.batchId}</Table.Cell>
              <Table.Cell>{row.pensionerName}</Table.Cell>
              <Table.Cell>
                <Tag color={
                  row.status === "rejected" ? "red" :
                  row.status === "awaiting approval" ? "yellow" :
                  row.status === "approved" ? "green" :
                  row.status === "in print" ? "aqua-green" :
                  row.status === "sent" ? "blue" :
                  "grey"
                }>
                  {row.status}
                </Tag>
              </Table.Cell>
              <Table.Cell>{row.lastUpdated}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button>Test NHSUK Button</Button>
    </>
  );
}

export default SomeTable;
