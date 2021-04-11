import React from "react";
import { useSelector } from "react-redux";
import AnotherTabs from "../../Components/AnotherTabs/AnotherTabs";
import {
  AccountInformationEdit,
  ChangePassword,
} from "../customer/CustomerCartScreens/AccountDetails/CustomerAccountInformationScreen";
import CustomerAddressBookScreen, {
  AddressBookEdit,
} from "../customer/CustomerCartScreens/AccountDetails/CustomerAddressBookScreen";
function EmployeeAccountDetailsScreen() {
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
            <CustomerAddressBookScreen></CustomerAddressBookScreen>
          ) : (
            <AddressBookEdit></AddressBookEdit>
          )}
        </div>
        <div label="Payment Options">THis is payemnt options</div>
      </AnotherTabs>
    </div>
  );
}

export default EmployeeAccountDetailsScreen;
