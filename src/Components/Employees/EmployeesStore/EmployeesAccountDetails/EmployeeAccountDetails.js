import React from "react";
import AddressBook from "../../../customer/Cart/Account Details/Address Book/AddressBook";
import AnotherTabs from "../../../customer/Cart/Account Details/AnotherTabs/AnotherTabs";
import { useSelector } from "react-redux";
import AddressBookEdit from "../../../customer/Cart/Account Details/Address Book/AddreBookEdit/AddressBookEdit";
import AccountInformationEdit from "../../../customer/Cart/Account Details/Account Information/AccountInformationEdit/AccountInformationEdit";
import ChangePassword from "../../../customer/Cart/Account Details/Account Information/ChangePassword/ChangePassword";
function EmployeeAccountDetails() {
  const editAccount = useSelector((state) => state.editAccount);
  const changePassword = useSelector((state) => state.changePassword);
  const addressBookEdit = useSelector((state) => state.addressBookEdit);
  return (
    <div className="employee__account__details">
      <AnotherTabs>
        <div label="Account Information">
          {editAccount === false && changePassword === false ? (
            <AccountInformationEdit></AccountInformationEdit>
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
        <div label="Payment Options">THis is payemnt options</div>
      </AnotherTabs>
    </div>
  );
}

export default EmployeeAccountDetails;
