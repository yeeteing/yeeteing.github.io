# Personal Portfolio Website

This repository contains multiple versions of my personal portfolio website.

## 🌐 Old Version
- The **oldVersion** branch contains a static website built and hosted with **GitHub Pages**.
- I configured GitHub Actions so that the site only updates when I deploy to the `oldVersion` branch.
- This version is what powers: [https://yeeteing.github.io/](https://yeeteing.github.io/).
![old version portfolio](gitAssets/oldVersion-page.png)


## 🚀 Recent Version
- The **aws-master** branch hosts my **current portfolio** website using **AWS Amplify**.
- Amplify is set up for automated deployments whenever I push changes to `aws-master`.
![awsAmplify version](gitAssets/awsAmplify-version.gif)

### 🛠️ Tech & Tools
- **Frontend:** Built with **React.js**.  
- **Design Workflow:** Drafted the initial page with **Figma** and **Builder.io AI**, then customized it further based on my own vision.  
- **Media Hosting:** Images, videos and other files are stored in an **AWS S3 bucket**.  
- **Contact Form:**  
  - Visitors can fill out a form to get in touch.  
  - The form triggers an **AWS Lambda function**, which uses **SNS (Simple Notification Service)** to send me an email notification.  

---

![contact form email](gitAssets/contactFormEmail.png)
