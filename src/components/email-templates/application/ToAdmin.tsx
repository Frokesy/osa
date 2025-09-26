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

interface ApplicationAdminTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  expertise: string;
  experience: string;
}

const ApplicationAdminTemplate: FC<ApplicationAdminTemplateProps> = ({
  firstName,
  lastName,
  email,
  phone,
  expertise,
  experience,
}) => {
  return (
    <Html>
      <Head />
      <Preview>📩 New Trainer Application Received</Preview>
      <Body style={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
        <Container
          style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
        >
          <Heading style={{ textAlign: "center", color: "#E30613" }}>
            New Trainer Application 🚀
          </Heading>

          <Section>
            <Text style={styles.text}>
              <b>Name:</b> {firstName} {lastName}
            </Text>
            <Text style={styles.text}>
              <b>Email:</b> {email}
            </Text>
            <Text style={styles.text}>
              <b>Phone:</b> {phone}
            </Text>
            <Text style={styles.text}>
              <b>Expertise:</b> {expertise}
            </Text>
            <Text style={styles.text}>
              <b>Years of Experience:</b> {experience}
            </Text>
          </Section>

          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} Onestepahead. Internal use only.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ApplicationAdminTemplate;

const styles = {
  text: {
    fontSize: "15px",
    color: "#555555",
    lineHeight: "1.5",
    marginBottom: "8px",
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
