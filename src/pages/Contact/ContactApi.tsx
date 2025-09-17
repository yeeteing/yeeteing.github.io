import type { DataToSend } from "./Contact";

const LAMBDA_URL = "https://b2gxtsa4wiimbfsoeuiuwvgcu40yukin.lambda-url.us-east-2.on.aws/"; 

export async function sendContactEmail(data: DataToSend): Promise<Response> {
  return await fetch(LAMBDA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
}
