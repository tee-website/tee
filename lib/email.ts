export const toFormData = (data: { [key: string]: any }) => {
  const result = new FormData();
  for (const key in data) {
    result.append(key, data[key]);
  }
  return result;
};

export const emailSender = (
  params: { [key: string]: any },
  type: "send" | "send-form" = "send-form",
  options: {
    service_id?: string;
    template_id?: string;
    user_id?: string;
    accessToken?: string;
  } = {}
): Promise<Response> => {
  return fetch(`https://api.emailjs.com/api/v1.0/email/${type}`, {
    method: "POST",
    body: toFormData({
      service_id:
        options?.service_id ?? process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
      template_id:
        options?.template_id ??
        process.env.NEXT_PUBLIC_EMAIL_JS_CONTACT_TEMPLATE_ID,
      user_id: options?.user_id ?? process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID,
      ...params,
    }),
  });
};
