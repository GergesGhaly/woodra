import styled from "styled-components";

export default function QASection() {
  return (
    <Section>
      <ImageLeft
        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
        alt="furniture dark"
      />

      <Content>
        <h4>Q & A</h4>

        <h2>Frequently Asked Questions</h2>

        <QAList>
          <QAItem>
            <h5>What makes your furniture special?</h5>
            <p>
              Our furniture is designed with modern aesthetics, durability, and
              comfort in mind using high-quality materials.
            </p>
          </QAItem>

          <QAItem>
            <h5>Do you offer delivery?</h5>
            <p>
              Yes, we provide fast and safe delivery to most locations with
              secure packaging.
            </p>
          </QAItem>

          <QAItem>
            <h5>Can I return a product?</h5>
            <p>
              We offer a 14-day return policy for unused items in original
              condition.
            </p>
          </QAItem>
        </QAList>
      </Content>

      <ImageRight
        src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4"
        alt="white chair"
      />
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  min-height: 100vh;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const ImageLeft = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 1100px) {
    height: 250px;
  }
`;

const ImageRight = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 1100px) {
    height: 250px;
  }
`;

const Content = styled.article`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;

  h4 {
    text-transform: uppercase;
    letter-spacing: 6px;
    color: #111;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 1100px) {
    padding: 2rem;
    text-align: left;
  }
`;

const QAList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const QAItem = styled.div`
  h5 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
    color: #111;
  }

  p {
    font-size: 0.85rem;
    color: #666;
    line-height: 1.6;
  }
`;
