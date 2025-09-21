import type { DataToSend } from "./Contact";

const LAMBDA_URL = "https://bg5qjcuva6277ujn4lrvvluyoi0iizic.lambda-url.us-east-2.on.aws/"; 

export async function sendContactEmail(data: DataToSend): Promise<Response> {
  return await fetch(LAMBDA_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
}
