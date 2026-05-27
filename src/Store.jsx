import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import products from "./data/products";

export default function Store() {
  const navigate = useNavigate();

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Section>
      <Header>
        <div>
          <Label>OUR STORE</Label>

          <Title>
            Modern Furniture
            <br />
            Collection
          </Title>
        </div>

        <Text>
          Discover elegant furniture designed for modern living spaces with
          comfort and premium quality.
        </Text>
      </Header>

      <Grid>
        {products.map((product) => (
          <Card key={product.id} onClick={() => goToProduct(product.id)}>
            <Image>
              <img
                src={product.images?.[0] || product.image}
                alt={product.name}
              />
            </Image>

            <Content>
              <h3>{product.name}</h3>

              <Row>
                <span>{product.price}</span>

                <button
                  onClick={(e) => {
                    e.stopPropagation(); // مهم جداً
                    goToProduct(product.id);
                  }}
                >
                  View
                </button>
              </Row>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}
/* ================= styles ================= */

const Section = styled.section`
  padding: 6rem 5rem;
  background: #f8f8f8;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  margin-bottom: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const Label = styled.p`
  letter-spacing: 0.5rem;
  color: #888;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 4rem;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  max-width: 500px;
  line-height: 1.7;
  color: #666;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;

  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Image = styled.div`
  height: 320px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 1.5rem;

  h3 {
    margin-bottom: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    background: black;
    color: white;

    padding: 0.8rem 1.2rem;
    border-radius: 12px;

    cursor: pointer;
  }
`;
