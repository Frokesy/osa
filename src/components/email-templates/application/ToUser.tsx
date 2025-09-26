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

interface ApplicationUserTemplateProps {
  firstName: string;
  expertise: string;
}

const ApplicationUserTemplate: FC<ApplicationUserTemplateProps> = ({
  firstName,
  expertise,
}) => {
  return (
    <Html>
      <Head />
      <Preview>✅ Your Application Was Successfully Submitted</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
        <Container
          style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
        >
          <Heading style={{ textAlign: "center", color: "#E30613" }}>
            Application Received 🎉
          </Heading>

          <Section>
            <Text style={styles.text}>Hello {firstName},</Text>
            <Text style={styles.text}>
              Thank you for applying to become a vocational trainer with{" "}
              <b>Onestepahead</b>. We’ve successfully received your application
              under the field of <b>{expertise}</b>.
            </Text>
            <Text style={styles.text}>
              Our team will carefully review your submission and get back to you
              if your profile matches our requirements.
            </Text>
            <Text style={styles.text}>We appreciate your interest 🚀</Text>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} Onestepahead. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ApplicationUserTemplate;

const styles = {
  text: {
    fontSize: "15px",
    color: "#555555",
    lineHeight: "1.5",
    marginBottom: "12px",
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
