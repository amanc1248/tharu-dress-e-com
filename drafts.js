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

// admin 👇👇👇
function TopProductsAdmin() {
  const topProductsList = [
    {
      image: "topproduct.png",
      title: "Anchara with red boutique",
      price: 15000,
      totalSold: 4,
    },
    {
      image: "topproduct.png",
      title: "Men Dhoti",
      price: 5000,
      totalSold: 4,
    },
    {
      image: "topproduct.png",
      title: "Kids Size Anchara",
      price: 9000,
      totalSold: 1,
    },
    {
      image: "topproduct.png",
      title: "Flower Design Anchara",
      price: 5000,
      totalSold: 10,
    },
    {
      image: "topproduct.png",
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

function OrderStatisticsAdmin() {
  return (
    <div className="order__statistics">
      <Doughnut
        data={{
          labels: ["Processing", "Cancelled", "Completed"],
          datasets: [
            {
              data: [38, 9, 239],
              backgroundColor: ["#00C0EB", "#FF5CA0", "#6347FF"],
            },
          ],
        }}
        options={{
          legend: {
            display: true,
            position: "bottom",
            fontFamily: "Arial",
            postion: "right",
          },
        }}
      />
    </div>
  );
}

function ProductRequests() {
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
      <div className="products__requests__element">
        <div className="product__request__first__part">
          <div className="product__request__image__container">
            <img src={image} alt="topProduct" className="top__product__image" />
          </div>
          <div className="title__price">
            <div className="product__request__title">{title}</div>
            <div className="product__request__price">Rs. {price}</div>
          </div>
        </div>
        <div className="product__request__second__part">
          <div className="see__request__detail">
            <Link>See Details</Link>
          </div>
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
