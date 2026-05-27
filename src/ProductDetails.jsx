import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import products from "./data/products";
import QASection from "./QASection";
import Footer from "./Footer";
import OrderModal from "./OrderModal";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useMemo(
    () => products.find((p) => p.id === Number(id)),
    [id],
  );

  const [mainImage, setMainImage] = useState(product?.images?.[0]);
  const [qty, setQty] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const totalPrice = (Number(product?.price.replace("$", "")) * qty).toFixed(0);

  if (!product) {
    return (
      <NotFound>
        <h2>Product not found</h2>
        <button onClick={() => navigate("/")}>Back to Store</button>
      </NotFound>
    );
  }

  return (
    <>
      <Container>
        <Back onClick={() => navigate("/")}> {"<"}</Back>

        {/* LEFT - GALLERY */}
        <Gallery>
          <MainImage>
            <img src={mainImage || product.images[0]} alt={product.name} />
          </MainImage>

          <Thumbnails>
            {product.images.map((img, i) => (
              <Thumb
                key={i}
                active={mainImage === img}
                onClick={() => setMainImage(img)}
              >
                <img src={img} alt="thumb" />
              </Thumb>
            ))}
          </Thumbnails>
        </Gallery>

        {/* RIGHT - INFO */}
        <Info>
          <h1>{product.name}</h1>

          <Price>{product.price}</Price>

          <Desc>{product.description}</Desc>

          <Quantity>
            <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)}>+</button>
          </Quantity>

          <OrderBtn onClick={() => setShowModal(true)}>
            Order Now •{" "}
            {(Number(product.price.replace("$", "")) * qty).toFixed(0)}$
          </OrderBtn>
        </Info>
      </Container>
      <OrderModal
        show={showModal}
        onClose={() => setShowModal(false)}
        product={product}
        qty={qty}
        totalPrice={totalPrice}
      />
      <QASection />
      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 3rem;
  padding: 4rem 5rem;
  background: #f8f8f8;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
  }
`;

/* BACK BUTTON */
const Back = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;

  padding: 0.6rem 1rem;
  border: 1px solid #ddd;
  background: white;
  /* border-radius: 10px; */

  cursor: pointer;
  transition: 0.3s;

  background: black;
  color: white;

  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
  }
`;

/* LEFT */
const Gallery = styled.div`
  flex: 1;
`;

const MainImage = styled.div`
  width: 100%;
  height: 450px;
  border-radius: 20px;
  overflow: hidden;
  background: #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

const Thumbnails = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;

const Thumb = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid ${({ active }) => (active ? "black" : "transparent")};
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

/* RIGHT */
const Info = styled.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const Price = styled.h2`
  color: #111;
  margin-bottom: 1rem;
`;

const Desc = styled.p`
  color: #666;
  line-height: 1.7;
  margin-bottom: 2rem;
`;

/* QUANTITY */
const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;

  button {
    width: 42px;
    height: 42px;
    border: none;
    background: black;
    color: white;
    /* border-radius: 10px; */
    cursor: pointer;
    font-size: 1.2rem;
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }

  span {
    font-size: 1.2rem;
    min-width: 30px;
    text-align: center;
  }
`;

/* ORDER BUTTON */
const OrderBtn = styled.button`
  padding: 1rem 2rem;
  background: black;
  color: white;
  border: none;
  /* border-radius: 14px; */
  cursor: pointer;
  font-size: 1rem;
  transition: 0.3s;

  &:hover {
    opacity: 0.85;
    transform: translateY(-2px);
  }
`;

/* NOT FOUND */
const NotFound = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 1rem;
    padding: 0.8rem 1.5rem;
    border: none;
    background: black;
    color: white;
    border-radius: 10px;
    cursor: pointer;
  }
`;
