import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Section,
  Text,
} from "@react-email/components";
import type { FC } from "react";

interface ContactUserTemplateProps {
  firstname?: string;
}

export const ContactUserTemplate: FC<ContactUserTemplateProps> = ({
  firstname,
}) => {
  return (
    <Html>
      <Head />
      <Preview>We’ve received your message ✅</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
        <Container
          style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
        >
          <Heading style={{ textAlign: "center", color: "#223D94" }}>
            Hi {firstname || "there"}, thanks for reaching out!
          </Heading>
          <Section>
            <Text style={styles.text}>
              Your message has been successfully sent to the Onestepahead team.
              One of our representatives will review it and get back to you as
              soon as possible.
            </Text>

            <Text style={styles.text}>
              In the meantime, feel free to learn more about our services on{" "}
              <a
                href="https://1stepahead-five.vercel.app/"
                style={{ color: "#223D94" }}
              >
                our website
              </a>
              .
            </Text>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} Onestepahead. All rights reserved.
            </Text>
            <Text style={styles.footerText}>
              Onestepahead Inc., 123 Bakery Street, Sweet City, Yumland.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const styles = {
  text: {
    fontSize: "16px",
    color: "#555555",
    lineHeight: "1.5",
  },
  footer: {
    borderTop: "1px solid #eaeaea",
    paddingTop: "10px",
    textAlign: "center" as const,
    marginTop: "20px",
  },
  footerText: {
    fontSize: "12px",
    color: "#999999",
    marginBottom: "5px",
  },
};
