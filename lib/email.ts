declare const window: any;

import {
  IContactEmail,
  emailHtml,
} from "../components/mail-component/mail.component";

export const toFormData = (data: { [key: string]: any }) => {
  const result = new FormData();
  for (const key in data) {
    result.append(key, data[key]);
  }
  return result;
};

export interface ITemplateData {
  client_name: string;
  name: string;
  message: string;
  mobile: string;
  to_email: string;
  email: string;
}

export const emailSender = async (params: IContactEmail): Promise<any> => {
  const config = {
    SecureToken: process.env.NEXT_PUBLIC_MAILER_SECURE_TOKEN,
    To: params.email,
    From: "support@2t2e.life",
    Subject: params.title,
    Body: emailHtml(params),
  };

  console.log(config.Body);

  console.log(params);

  const emailHandler = async () => {
    if (window?.Email) {
      const response = await window?.Email.send(config);
      return response;
    }
    throw new Error("No Email found in Window");
  };

  return await emailHandler();
};
