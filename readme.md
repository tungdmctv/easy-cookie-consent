## Easy Cookie Consent

This is an easy Javascript for cookie acceptance popup on your website. You can modify text, text-color, urls, popup position and more. After clicking the "Got It" button, the acceptance will be remembered in the browser cookie.

![Screen Shot 2565-05-31 at 00.13.58](https://s2.loli.net/2022/05/31/ZSdLq8lQz2mbKi5.png)

### Example

https://tungdmctv.github.io/easy-cookie-consent/

### Setup

```js
<script src="https://unpkg.com/easycookieconsent@1.0.4/cookieAccept.min.js"> </script>

<script>
   const cookieConsent = new CookieAccept({
     domain: "https://yourdomain.com",
     dayExpire: 60,
     url: {
       privacyPolicy: "https://yourdomain.com/privacy",
       cookiePolicy: "https://yourdomain.comv/cookie",
       target: "_blank",
     },
     align: "right",
   });
	cookieConsent.init();
</script>
```

### Configuration

```js
// ALL Config value
const config = {
  domain: "https://yourdomain.com",
  dayExpire: 60,
  text: {
    header: "This website uses cookies",
    body: "We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.",
    privacyPolicy: "PrivacyPolicy",
    learnMore: "Learn More",
    accept: "Got it!",
  },
  bgColor: "#F3F4F6",
  textColor: "#1F2937",
  buttonColor: "#6366F1",
  buttonTextColor: "#FFFFFF",
  buttonBorderColor: "#FFFFFF",
  linkColor: "#2563EB",
  url: {
    privacyPolicy: "https://yourdomain.com/privacy",
    cookiePolicy: "https://yourdomain.comv/cookie",
    target: "_blank",
  },
  align: "right", // left center right
};

const cookieConsent = new CookieAccept(config);
cookieConsent.init();
```

### การตั้งค่าสำหรับภาษาไทย

```js
// ค่า Default ทั้งหมด

const cookieConsent = new CookieAccept({
  domain: "localhost",
  dayExpire: 60,
  text: {
    header: "เว็บไซต์นี้ใช้คุกกี้",
    body: "เราใช้คุกกี้เพื่อวิเคราะห์การเข้าใช้งาน และทำความเข้าใจว่าผู้ใช้งานมาจากที่ใด สามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดย “ตั้งค่าคุกกี้ใน Browser ของคุณ”",
    privacyPolicy: "นโยบายความเป็นส่วนตัว",
    learnMore: "เรียนรู้เพิ่มเติม",
    accept: "ยอมรับ",
  },
  bgColor: "#F3F4F6",
  textColor: "#1F2937",
  buttonColor: "#6366F1",
  buttonTextColor: "#FFFFFF",
  buttonBorderColor: "#FFFFFF",
  linkColor: "#2563EB",
  url: {
    privacyPolicy: "https://video.dmc.tv/privacy",
    cookiePolicy: "https://video.dmc.tv/cookie",
    target: "_blank",
  },
  align: "right",
});
cookieConsent.init();
```

![Screen Shot 2565-05-31 at 00.04.27](https://s2.loli.net/2022/05/31/awuAoeG3iPI1XYK.png)
