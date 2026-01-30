import React, { useActionState, useState } from "react";
import Product from "./Product";

const ProductContainer = () => {
  // 사용자가 구매할 상품을 입력한다.
  // 입력한 상품이 스토어에 있다면, 상품이 판매 된다.
  // 모든 상품을 판매 후 사용자가 "종료"라고 입력하면
  // 판매된 총 가격을 출력한다.
  // ex) 닌텐도
  // ex) 키보드
  // ex) 종료
  // 판매 목록
  // - 닌텐도: 700,000원
  // - 키보드: 50,000원
  // 결과: 750,000원

  const store = {
    income: 0,
    productList: [
      {
        name: "닌텐도",
        price: 700000,
      },
      {
        name: "키보드",
        price: 50000,
      },
      {
        name: "마우스",
        price: 30000,
      },
      {
        name: "스피커",
        price: 75000,
      },
      {
        name: "마이크",
        price: 150000,
      },
    ],
  };

  const [value, setValue] = useState("");
  const [currentProduct, setCurrentProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [isEnd, setIsEnd] = useState(false);

  const handleValueOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleValueOnkeyDown = (e) => {
    if (e.key === "Enter") {
      const product = store.productList.find(
        (product) => product.name === value
      );
      setCurrentProduct(product);
      if (product) {
        setProducts([...products, product]);
      }
    }

    if (value === "종료") {
      setIsEnd(true);
    }
  };

  const productList = products.map(({ name, price }, i) => (
    <Product key={i} name={name} price={price} />
  ));

  const totalPrice = products
    .map(({ price }) => price)
    .reduce((acc, curr) => (acc += curr), 0);

  return (
    <div>
      <h1>결과 출력:</h1>
      <input
        type="text"
        placeholder="구매할 상품을 입력하세요"
        onChange={handleValueOnChange}
        onKeyDown={handleValueOnkeyDown}
      />
      <p>
        상품 가격: {currentProduct && currentProduct.price?.toLocaleString()}원
      </p>
      <div>
        <h2>총 판매 목록</h2>
        <ul>{isEnd && productList}</ul>
      </div>
      <h3>총 판매 가격: {totalPrice && totalPrice.toLocaleString()}원</h3>
    </div>
  );
};

export default ProductContainer;
