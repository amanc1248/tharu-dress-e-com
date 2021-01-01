import React from "react";
import TailorAccountInformation, { TailorAccountInformationChangePassword, TailorAccountInformationEdit } from "./AccountInformation/TailorAccountInformation";
import StoreInformation from "./StoreInformation/StoreInformation";
import TailorAccountDetailsTabs from "./Tabs/TailorAccountDetailsTabs";

function TailorAccountDetails() {
  return (
    <div className="tailor__account__details">
      <TailorAccountDetailsTabs>
        <div label="Account Information">
          {" "}
          <TailorAccountInformationChangePassword></TailorAccountInformationChangePassword>{" "}
        </div>
        <div label="Store Information"><StoreInformation></StoreInformation></div>
        <div label="Payment Options">
          <h1>THis is the PAYMENT INFO</h1>
        </div>
      </TailorAccountDetailsTabs>
    </div>
  );
}

export default TailorAccountDetails;
