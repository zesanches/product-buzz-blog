import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  userName: string;
  userEmail: string;
  contentMessage: string;
}

export const EmailTemplate = ({
  userName,
  userEmail,
  contentMessage,
}: EmailTemplateProps) => {
  const previewText = `${userName} has send you a contact`;

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Preview>{previewText}</Preview>
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-[#eaeaea] border-solid p-[20px]">
            <Text className="text-[14px] text-black leading-[24px]">
              You have received a new Contact by {userName} ({userEmail}),
            </Text>
            <Text className="text-[14px] text-black leading-[24px]">
              {contentMessage}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

EmailTemplate.PreviewProps = {
  userName: "User Name",
  userEmail: "",
  contentMessage: "This is a sample message content.",
} as EmailTemplateProps;

export default EmailTemplate;
