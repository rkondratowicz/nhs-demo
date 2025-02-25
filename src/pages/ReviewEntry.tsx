import { BodyText, SummaryList, Button } from "nhsuk-react-components";
import React from "react";

const ReviewEntry: React.FC = () => {
  return (
    <>
      <h3>Personal details</h3>
      <SummaryList>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Alice Johnson</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Date of Birth</SummaryList.Key>
          <SummaryList.Value>5 January 1978</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Pension</SummaryList.Key>
          <SummaryList.Value>£5000</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Membership Number</SummaryList.Key>
          <SummaryList.Value>12345678</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Address Line 1</SummaryList.Key>
          <SummaryList.Value>72 Guild Street</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Address Line 2</SummaryList.Key>
          <SummaryList.Value>London</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Postcode</SummaryList.Key>
          <SummaryList.Value>SE23 6FH</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Legacy Scheme</SummaryList.Key>
          <SummaryList.Value>Scheme A</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Retirement Type</SummaryList.Key>
          <SummaryList.Value>Early Retirement</SummaryList.Value>
        </SummaryList.Row>
      </SummaryList>
      <h3>Calculations</h3>
      <SummaryList>
        {Array.from({ length: 20 }).map((_, index) => (
          <SummaryList.Row key={index}>
            <SummaryList.Key>calculations</SummaryList.Key>
            <SummaryList.Value>calculations</SummaryList.Value>
          </SummaryList.Row>
        ))}
      </SummaryList>

      <div className="mt-5">
        <Button type="button">Approve</Button>
        <Button type="button" warning className="ml-1">
          Reject
        </Button>
      </div>
    </>
  );
};

export default ReviewEntry;
