// import { uploadData } from 'aws-amplify/storage';
import { getUrl } from 'aws-amplify/storage';

// export async function uploadImage(file: File) {
//   try {
//     const result = await uploadData({
//       path: `public/${file.name}`,
//       data: file,
//     }).result;

//     console.log('Upload successful:', result);
//     return result.path;
//   } catch (error) {
//     console.error('Error uploading file:', error);
//     throw error;
//   }
// }

export async function getFileUrl(path: string): Promise<string> {
  try {
    const { url } = await getUrl({ path });
    return url.toString();
  } catch (error) {
    console.error('Error getting file URL:', error);
    return '';
  }
}
