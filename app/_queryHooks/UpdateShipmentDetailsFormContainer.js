"use client";

import UpdateShipmentDetailsForm from "../_components/UpdateShipmentDetailsForm";

function UpdateShipmentDetailsFormContainer({ trackingNumber }) {
  return (
    <div>
      <UpdateShipmentDetailsForm trackingNumber={trackingNumber} />
    </div>
  );
}

export default UpdateShipmentDetailsFormContainer;
