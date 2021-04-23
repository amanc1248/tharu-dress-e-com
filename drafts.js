function TopProducts() {
  const topProductsList = [
    {
      image: "productImage.png",
      title: "Anchara with red boutique",
      price: 15000,
      totalSold: 4,
    },
    {
      image: "productImage.png",
      title: "Men Dhoti",
      price: 5000,
      totalSold: 4,
    },
    {
      image: "productImage.png",
      title: "Kids Size Anchara",
      price: 9000,
      totalSold: 1,
    },
    {
      image: "productImage.png",
      title: "Flower Design Anchara",
      price: 5000,
      totalSold: 10,
    },
    {
      image: "productImage.png",
      title: "Anchara with red boutique",
      price: 15000,
      totalSold: 14,
    },
  ];
  function TopProductsElement({ image, title, price, totalSold }) {
    return (
      <div className="top__products__element">
        <div className="first__part">
          <div className="top__product__image__container">
            <img src={image} alt="topProduct" className="top__product__image" />
          </div>
          <div className="title__price">
            <div className="top__product__title">{title}</div>
            <div className="top__product__price">Rs. {price}</div>
          </div>
        </div>
        <div className="second__part">
          <div className="total__price">Rs. {price * totalSold}</div>
          <div className="total__sold">{totalSold} Sold</div>
        </div>
      </div>
    );
  }
  return (
    <div className="top__products">
      {topProductsList.map((obj) => {
        return (
          <TopProductsElement
            title={obj.title}
            price={obj.price}
            totalSold={obj.totalSold}
            image={obj.image}
          ></TopProductsElement>
        );
      })}
    </div>
  );
}
