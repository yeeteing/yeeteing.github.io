    // amplify/storage/resource.ts
    import { defineStorage } from '@aws-amplify/backend';

    export const storage = defineStorage({
      name: 'myImageStorage', // A friendly name for your bucket
    });