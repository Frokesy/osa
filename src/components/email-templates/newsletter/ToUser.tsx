import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Section,
  Text,
  Link,
} from "@react-email/components";
import type { FC } from "react";

interface NewsletterUserTemplateProps {
  firstname?: string;
}

export const NewsletterUserTemplate: FC<NewsletterUserTemplateProps> = ({
  firstname,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Onestepahead Newsletter 🎉</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
        <Container
          style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
        >
          <Heading style={{ textAlign: "center", color: "#7d6c3a" }}>
            Hi {firstname || "there"}, thanks for signing up!
          </Heading>
          <Section>
            <Text style={styles.text}>
              You’re now subscribed to the Onestepahead newsletter. 🎉 Expect
              updates on <b>training, hiring, funding</b>, and so much more.
            </Text>

            <Text style={styles.text}>
              While you wait, you can explore more about us{" "}
              <Link
                href="https://1stepahead-five.vercel.app/"
                style={{ color: "#7d6c3a" }}
              >
                on our website
              </Link>
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
