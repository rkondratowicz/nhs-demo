import { Button, Table } from "nhsuk-react-components";

type TableRow = {
  symptom: string;
  cause: string;
};

const tableData: TableRow[] = [
  { symptom: "Blisters on lips or around the mouth", cause: "cold sores" },
  { symptom: "Itchy, dry, cracked, sore", cause: "eczema" },
  { symptom: "Itchy blisters", cause: "shingles, chickenpox" },
  { symptom: "Red, inflamed skin", cause: "psoriasis" },
  { symptom: "Red, itchy rash", cause: "allergic reaction" },
  { symptom: "Painful, red lumps", cause: "boils" },
  { symptom: "Scaly, itchy patches", cause: "ringworm" },
  { symptom: "Small, red spots", cause: "measles" },
  { symptom: "Yellowish skin", cause: "jaundice" },
  { symptom: "Dark patches", cause: "melasma" },
  { symptom: "Red, swollen skin", cause: "cellulitis" },
  { symptom: "White patches", cause: "vitiligo" },
  { symptom: "Thickened, discolored nails", cause: "fungal infection" }
];

function SomeTable() {
  return (
    <>
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.Cell>Skin Symptoms</Table.Cell>
            <Table.Cell>Possible cause</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {tableData.map((row, index) => (
            <Table.Row key={index}>
              <Table.Cell>{row.symptom}</Table.Cell>
              <Table.Cell>{row.cause}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Button>Test NHSUK Button</Button>
    </>
  );
}

export default SomeTable;
