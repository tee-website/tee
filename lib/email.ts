export const toFormData = (data: { [key: string]: any }) => {
  const result = new FormData();
  console.log(data);
  for (const key in data) {
    result.append(key, data[key]);
  }
  console.log(result);
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
      service_id: options?.service_id ?? "service_m6i7wb7",
      template_id: options?.template_id ?? "template_riqxquw",
      user_id: options?.user_id ?? "XBIEAtF0gSvlAoh5j",
      ...params,
    }),
  });
};
