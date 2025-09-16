import { a, defineData, type ClientSchema } from "@aws-amplify/backend";
import { contact } from '../functions/contact/resource'; // <-- so the function can write

const schema = a.schema({
  ContactMessage: a
    .model({
      name: a.string()
        .validate(v => v.maxLength(100))
        .required(),

      email: a.email()
        .required(),

      message: a.string()
        .validate(v => v.maxLength(4000))
        .required(),
      
        createdAt: a.datetime()

    })
    .authorization((allow) => [allow.resource(contact).to(['create'])]),

});


export type Schema = ClientSchema<typeof schema>;
export const data = defineData({ schema });
