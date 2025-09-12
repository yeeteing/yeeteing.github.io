    // amplify/storage/resource.ts
    import { defineStorage } from '@aws-amplify/backend';

    export const storage = defineStorage({
      name: "portfolioStorage", 
       access: (allow) => ({
      // Only authenticated users can read/write inside private/
      "private/*": [allow.authenticated.to(["read", "write"])],
    }),
    });