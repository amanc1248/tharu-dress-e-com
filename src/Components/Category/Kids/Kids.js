import React from "react";
import Category from "../Category";

function Kids() {
  return (
    <div className="kids__category">
      <Category
        category_image="images/Men/Edited/rabin.jpg"
        category_title="Kids"
        sub_category_image_1="images/Men/Edited/rabin.jpg"
        sub_category_title_1="Old Age Dhoti"
        sub_category_image_2="images/Men/Edited/rabin.jpg"
        sub_category_title_2="Old Age Dhoti"
        sub_category_image_3="images/Men/Edited/rabin.jpg"
        sub_category_title_3="Old Age Dhoti"
        sub_category_image_4="images/Men/Edited/rabin.jpg"
        sub_category_title_4="Old Age Dhoti"
        sub_category_image_5="images/Men/Edited/rabin.jpg"
        sub_category_title_5="Old Age Dhoti"
        firstLink="/kidCategory"
        secondLink="/kidCategory"
        thirdLink="/kidCategory"
      ></Category>
    </div>
  );
}

export default Kids;
