// OrderModal.jsx

import styled from "styled-components";

export default function OrderModal({
  show,
  onClose,
  product,
  qty,
  totalPrice,
}) {
  if (!show) return null;

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     alert("Order Sent Successfully ✅");

  //     onClose();
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const address = formData.get("address");

    const message = `
🛒 New Order

👤 Name: ${name}
📍 Address: ${address}

📦 Product: ${product.name}
🔢 Quantity: ${qty}
💰 Total Price: ${totalPrice}$
  `;

    // ضع رقم الواتساب هنا مع كود الدولة
    const phoneNumber = "201000000000";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");

    onClose();
  };

  return (
    <ModalOverlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseBtn onClick={onClose}>×</CloseBtn>

        <h2>Complete Your Order</h2>

        <form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Your Name" required />

          <Input
            type="text"
            name="address"
            placeholder="Your Address"
            required
          />

          <ReadOnlyField>
            <label>Product</label>
            <span>{product.name}</span>
          </ReadOnlyField>

          <ReadOnlyField>
            <label>Quantity</label>
            <span>{qty}</span>
          </ReadOnlyField>

          <ReadOnlyField>
            <label>Total Price</label>
            <span>{totalPrice}$</span>
          </ReadOnlyField>

          <SubmitBtn type="submit">Send Order</SubmitBtn>
        </form>
      </Modal>
    </ModalOverlay>
  );
}

/* ========================= */
/* STYLES */
/* ========================= */

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 999;
  padding: 1rem;
`;

const Modal = styled.div`
  width: 100%;
  max-width: 500px;

  background: white;
  padding: 2rem;
  position: relative;

  h2 {
    margin-bottom: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid #ddd;
  outline: none;
  font-size: 1rem;

  &:focus {
    border-color: black;
  }
`;

const ReadOnlyField = styled.div`
  padding: 1rem;
  background: #f5f5f5;

  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-weight: 600;
  }

  span {
    color: #444;
  }
`;

const SubmitBtn = styled.button`
  padding: 1rem;
  border: none;
  background: black;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.85;
  }
`;
