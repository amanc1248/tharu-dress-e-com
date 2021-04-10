import React from "react";
import Category from "../Category";

function Men() {
  return (
    <div className="men__category">
      <Category
        category_image="images/Men/dhotigroup.jpg"
        category_title="Men"
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
        firstLink="/menCategory"
        secondLink="/menCategory"
        thirdLink="/menCategory"
      ></Category>
    </div>
  );
}

export default Men;
