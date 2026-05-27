import styled from "styled-components";

export default function Footer() {
  return (
    <Section>
      <Container>
        {/* LOGO */}
        <Column>
          <Logo>Furniture</Logo>
          <Text>Modern furniture for modern living spaces.</Text>
        </Column>

        {/* SOCIAL */}
        <Column>
          <Title>Follow Us</Title>

          <Social>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>

            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </Social>
        </Column>

        {/* CONTACT */}
        <Column>
          <Title>Contact Us</Title>

          {/* <ContactText>
            We are here to help you choose the perfect furniture for your home.
          </ContactText> */}

          <Phone href="tel:+201234567890"> +20 123 456 7890</Phone>
        </Column>
      </Container>

      {/* COPYRIGHT */}
      <Bottom>
        © {new Date().getFullYear()} Furniture Store. All rights reserved.
      </Bottom>
    </Section>
  );
}

const Section = styled.footer`
  /* background: #111; */
  color: #111;
  padding: 4rem 5rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    text-align: center;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Logo = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 2px;
`;

const Title = styled.h4`
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

const Text = styled.p`
  color: #111;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  a {
    color: #111;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

// const ContactText = styled.p`
//   color: #111;
//   font-size: 0.9rem;
//   line-height: 1.6;
// `;

const Phone = styled.a`
  color: #111;
  text-decoration: none;
  /* font-weight: bold; */
  /* margin-top: 0.5rem; */

  &:hover {
    opacity: 0.7;
  }
`;

const Bottom = styled.div`
  /* border-top: 1px solid #222; */
  padding-top: 1rem;
  text-align: center;
  font-size: 0.85rem;
  color: #888;
`;
