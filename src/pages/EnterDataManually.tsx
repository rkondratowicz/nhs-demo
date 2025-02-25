import React from "react";
import { TextInput, Button, Fieldset } from "nhsuk-react-components";

const EnterDataManually: React.FC = () => {
  return (
    <div>
      <h1>Enter Data Manually</h1>
      <form>
        <Fieldset>
          <Fieldset.Legend size="m">Personal Details</Fieldset.Legend>
          <TextInput id="name" label="Name" name="name" type="text" required />
          <TextInput id="dob" label="Date of Birth" name="dob" type="date" required />
          <TextInput id="pension" label="Pension" name="pension" type="number" prefix="£" />
          <TextInput id="membershipNumber" label="Membership Number" name="membershipNumber" type="text" required />
          <TextInput id="addressLine1" label="Address Line 1" name="addressLine1" type="text" required />
          <TextInput id="addressLine2" label="Address Line 2" name="addressLine2" type="text" />
          <TextInput id="postcode" label="Postcode" name="postcode" type="text" required />
          <TextInput id="legacyScheme" label="Legacy Scheme" name="legacyScheme" type="text" required />
          <TextInput id="retirementType" label="Retirement Type" name="retirementType" type="text" required />
        </Fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default EnterDataManually;
