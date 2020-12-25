import React from "react";
import AccountInformation from "./Account Information/AccountInformation";
import AccountDetailsTabs from "./AccountDetailsTabs/AccountDetailsTabs";
import AddressBook from "./Address Book/AddressBook";
import PaymentOptions from "./Payment Options/PaymentOptions";
import ChangePassword from "./Account Information/ChangePassword/ChangePassword";
import { useSelector } from "react-redux";
import AccountInformationEdit from "./Account Information/AccountInformationEdit/AccountInformationEdit";
import AddressBookEdit from "./Address Book/AddreBookEdit/AddressBookEdit";

// import {
//   goToAccountEdit,
//   goToChangePassword,
// } from "./Account Information/Redux/Actions";
function AccountDetails() {
  const editAccount = useSelector((state) => state.editAccount);
  const changePassword = useSelector((state) => state.changePassword);
  const addressBookEdit = useSelector((state) => state.addressBookEdit);
  // const changePassword = useDispatch();
  return (
    <div className="account__details">
      <AccountDetailsTabs>
        <div label="Account Information">
          {editAccount === false && changePassword === false ? (
            <AccountInformation></AccountInformation>
          ) : (
            <>
              {editAccount === true && changePassword === false ? (
                <AccountInformationEdit></AccountInformationEdit>
              ) : (
                <>
                  {editAccount === false && changePassword === true ? (
                    <ChangePassword></ChangePassword>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </div>
        <div label="Address Book">
          {addressBookEdit === false ? (
            <AddressBook></AddressBook>
          ) : (
            <AddressBookEdit></AddressBookEdit>
          )}
        </div>
        <div label="Payment Options">
          <PaymentOptions></PaymentOptions>
        </div>
      </AccountDetailsTabs>
    </div>
  );
}

export default AccountDetails;
