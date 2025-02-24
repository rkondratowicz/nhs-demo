import { BodyText, SummaryList, Button } from "nhsuk-react-components";
import React from "react";

const ReviewEntry: React.FC = () => {
  return (
    <>
      <SummaryList>
        <SummaryList.Row>
          <SummaryList.Key>Name</SummaryList.Key>
          <SummaryList.Value>Sarah Philips</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Date of birth</SummaryList.Key>
          <SummaryList.Value>5 January 1978</SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Contact information</SummaryList.Key>
          <SummaryList.Value>
            72 Guild Street
            <br />
            London
            <br />
            SE23 6FH
          </SummaryList.Value>
        </SummaryList.Row>
        <SummaryList.Row>
          <SummaryList.Key>Contact details</SummaryList.Key>
          <SummaryList.Value>
            <BodyText>07700 900457</BodyText>
            <BodyText>sarah.phillips@example.com</BodyText>
          </SummaryList.Value>
        </SummaryList.Row>
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
