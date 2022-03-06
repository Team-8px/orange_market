import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, listProducts } from "../../../actions/productActions";
import {
  getWhichUserStatus,
  getWhichUserAccountName,
} from "../../../util/getWhichUser";
import { Modal, AlertBtn, ListBtn } from "../../module/modal/Modal";
import { Alert, AlertBox } from "../../module/alert/Alert";
import { Link } from "react-router-dom";
import {
  ProductSection,
  ProductWrapper,
  ProductCardList,
  ProductTitle,
} from "./index.style";
import ProductCard from "../ProductCard";
function ProductContainer() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.productList);
  const [productDialog, setProductDialog] = useState(false);
  const [productAlert, setProductAlert] = useState(false);
  const [productId, setProductId] = useState("");

  const isProductDialog = productId => {
    console.log(productId, "productId 들어와라!");
    setProductDialog(!productDialog);
    setProductId(productId);
  };
  const isProductAlert = productId => {
    setProductAlert(!productAlert);
    if (typeof productId === "string") {
      dispatch(deleteProduct(productId));
    }
  };
  useEffect(() => {
    const account = getWhichUserAccountName();
    dispatch(listProducts(account));
  }, [dispatch]);
  return (
    <>
      <ProductSection>
        <ProductWrapper>
          <ProductTitle>판매 중인 상품</ProductTitle>
          <ProductCardList>
            {products &&
              products.map(product => {
                return (
                  <ProductCard
                    key={product.id}
                    productText={product.itemName}
                    productPrice={product.price}
                    img={product.itemImage}
                    onClick={() => isProductDialog(product.id)}
                  />
                );
              })}
          </ProductCardList>
        </ProductWrapper>
      </ProductSection>
      <Modal visible={productDialog}>
        <AlertBtn isAlert={isProductAlert}>삭제</AlertBtn>
        <ListBtn isDialog={isProductDialog}>
          <Link to={`/product/${productId}/update`}>수정 </Link>
        </ListBtn>
        <ListBtn isDialog={isProductDialog}>웹사이트에서 상품 보기</ListBtn>
        <ListBtn isDialog={isProductDialog}>닫기</ListBtn>
      </Modal>
      <Alert visible={productAlert} messageText="상품을 삭제할까요?">
        <AlertBox isAlert={isProductAlert}>취소</AlertBox>
        <AlertBox isAlert={() => isProductAlert(productId && productId)}>
          삭제
        </AlertBox>
      </Alert>
    </>
  );
}

export default ProductContainer;
