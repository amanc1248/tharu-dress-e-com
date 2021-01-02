import React, { useState } from "react";
import TailorAccountInformation, {
  TailorAccountInformationChangePassword,
  TailorAccountInformationEdit,
} from "./AccountInformation/TailorAccountInformation";
import StoreInformationAddressBook from "./StoreInformation/StoreInformation";
import StoreInformation, {
  StoreInformationEdit,
} from "./StoreInformation/StoreInformation";
import TailorAccountDetailsTabs from "./Tabs/TailorAccountDetailsTabs";

function TailorAccountDetails() {
  // for ACCOUNT INFO👇
  const [tailorAccountEdit, settailorAccountEdit] = useState(false);
  const [tailorChangePassword, settailorChangePassword] = useState(false);
  const changeTailorAccountEdit = () => {
    settailorAccountEdit(!tailorAccountEdit);
  };
  const changeTailorChangePassword = () => {
    settailorChangePassword(!tailorChangePassword);
  };

  //for STORE INFO👇
  const [storeInfoEdit, setstoreInfoEdit] = useState(false);
  const changeStoreInfoEdit = () => {
    setstoreInfoEdit(!storeInfoEdit);
  };
  return (
    <div className="tailor__account__details">
      <TailorAccountDetailsTabs>
        <div label="Account Information">
          {tailorAccountEdit === false && tailorChangePassword === false ? (
            <TailorAccountInformation
              editPage={changeTailorAccountEdit}
              changePasswordPage={changeTailorChangePassword}
            ></TailorAccountInformation>
          ) : (
            <>
              {tailorAccountEdit === true && tailorChangePassword === false ? (
                <TailorAccountInformationEdit
                  editPage={changeTailorAccountEdit}
                ></TailorAccountInformationEdit>
              ) : (
                <>
                  {tailorAccountEdit === false &&
                  tailorChangePassword === true ? (
                    <TailorAccountInformationChangePassword
                      changePasswordPage={changeTailorChangePassword}
                    ></TailorAccountInformationChangePassword>
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
            <StoreInformationAddressBook
              changeStoreInfoPage={changeStoreInfoEdit}
            ></StoreInformationAddressBook>
          ) : (
            <StoreInformationEdit
              changeStoreInfoPage={changeStoreInfoEdit}
            ></StoreInformationEdit>
          )}
        </div>
        <div label="Payment Options">
          <h1>THis is the PAYMENT INFO</h1>
        </div>
      </TailorAccountDetailsTabs>
    </div>
  );
}

export default TailorAccountDetails;
