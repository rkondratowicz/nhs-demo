import React from "react";
import { TextInput, Button } from "nhsuk-react-components";

const EnterDataManually: React.FC = () => {
  return (
    <div>
      <h1>Enter Data Manually</h1>
      <form>
        <TextInput id="name" label="Name" name="name" type="text" required />

        <TextInput
          id="dob"
          label="Date of Birth"
          name="dob"
          type="date"
          required
        />

        <TextInput
          id="pension"
          label="Pension"
          name="pension"
          type="number"
          prefix="£"
        />

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default EnterDataManually;
