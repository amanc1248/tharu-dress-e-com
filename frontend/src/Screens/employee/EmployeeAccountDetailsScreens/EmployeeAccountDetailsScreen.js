import React, { useState } from "react";
import AnotherTabs from "../../../Components/AnotherTabs/AnotherTabs";
import EmployeeAccountInformationScreen, {
  EmployeeAccountInformationChangePassword,
  EmployeeAccountInformationEdit,
} from "./EmployeeAccountInformationScreen";
import EmployeeStoreInformationScreen, {
  EmployeeStoreInformationEdit,
} from "./EmployeeAddressBookScreen";

function EmployeeAccountDetailsScreen() {
  // for ACCOUNT INFO👇
  const [employeeAccountEdit, setemployeeAccountEdit] = useState(false);
  const [employeeChangePassword, setemployeeChangePassword] = useState(false);
  const changeEmployeeAccountEdit = () => {
    setemployeeAccountEdit(!employeeAccountEdit);
  };
  const changeEmployeeChangePassword = () => {
    setemployeeChangePassword(!employeeChangePassword);
  };

  //for STORE INFO👇
  const [storeInfoEdit, setstoreInfoEdit] = useState(false);
  const changeStoreInfoEdit = () => {
    setstoreInfoEdit(!storeInfoEdit);
  };
  return (
    <div className="tailor__account__details">
      <AnotherTabs>
        <div label="Account Information">
          {employeeAccountEdit === false && employeeChangePassword === false ? (
            <EmployeeAccountInformationScreen
              editPage={changeEmployeeAccountEdit}
              changePasswordPage={changeEmployeeChangePassword}
            ></EmployeeAccountInformationScreen>
          ) : (
            <>
              {employeeAccountEdit === true &&
              employeeChangePassword === false ? (
                <EmployeeAccountInformationEdit
                  editPage={changeEmployeeAccountEdit}
                ></EmployeeAccountInformationEdit>
              ) : (
                <>
                  {employeeAccountEdit === false &&
                  employeeChangePassword === true ? (
                    <EmployeeAccountInformationChangePassword
                      changePasswordPage={changeEmployeeChangePassword}
                    ></EmployeeAccountInformationChangePassword>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </div>
        <div label="Store Information">
          {storeInfoEdit === false ? (
            <EmployeeStoreInformationScreen
              changeStoreInfoPage={changeStoreInfoEdit}
            ></EmployeeStoreInformationScreen>
          ) : (
            <EmployeeStoreInformationEdit
              changeStoreInfoPage={changeStoreInfoEdit}
            ></EmployeeStoreInformationEdit>
          )}
        </div>
        <div label="Payment Options">
          <h1>THis is the PAYMENT INFO</h1>
        </div>
      </AnotherTabs>
    </div>
  );
}

export default EmployeeAccountDetailsScreen;
