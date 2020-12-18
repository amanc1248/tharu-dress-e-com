import React from "react";
import AccountInformation from "./Account Information/AccountInformation";
import AccountDetailsTabs from "./AccountDetailsTabs/AccountDetailsTabs";
import AddressBook from "./Address Book/AddressBook";
import PaymentOptions from "./Payment Options/PaymentOptions";
function AccountDetails() {
  return (
    <div className="account__details">
      <AccountDetailsTabs>
        <div label="Account Information">
          <AccountInformation></AccountInformation>
        </div>
        <div label="Address Book">
          <AddressBook></AddressBook>
        </div>
        <div label="Payment Options">
          <PaymentOptions></PaymentOptions>
        </div>
      </AccountDetailsTabs>
    </div>
  );
}

export default AccountDetails;
