class CookieAccept {
  constructor({
    domain = ".google.com",
    dayExpire = 60,
    text = {
      header: "เว็บไซต์นี้ใช้คุกกี้",
      body: "เราใช้คุกกี้เพื่อวิเคราะห์การเข้าใช้งาน และทำความเข้าใจว่าผู้ใช้งานมาจากที่ใด สามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดย “ตั้งค่าคุกกี้ใน Browser ของคุณ”",
      privacyPolicy: "นโยบายความเป็นส่วนตัว",
      learnMore: "เรียนรู้เพิ่มเติม",
      accept: "ยอมรับ",
    },
    bgColor = "#F3F4F6",
    textColor = "#1F2937",
    buttonColor = "#6366F1",
    buttonTextColor = "#FFFFFF",
    buttonBorderColor = "#FFFFFF",
    linkColor = "#2563EB",
    url = {
      privacyPolicy: "https://video.dmc.tv/privacy",
      cookiePolicy: "https://video.dmc.tv/cookie",
      target: "_blank",
    },
    align = "center",
  }) {
    this.domain = domain.replace(/^https?:\/\//, "");
    this.dayExpire = dayExpire;
    this.text = text;
    this.align = align;
    this.bgColor = bgColor;
    this.textColor = textColor;
    this.buttonColor = buttonColor;
    this.buttonTextColor = buttonTextColor;
    this.buttonBorderColor = buttonBorderColor;
    this.linkColor = linkColor;
    this.cookiePolicy = url.cookiePolicy;
    this.privacyPolicy = url.privacyPolicy;
    this.target = url.target;
    this.cookieName = domain.replaceAll(".", "_") + "_CookieAccept";
  }

  init() {
    const cookie = JSON.parse(this.getCookie()) || {};
    if (!cookie.acceptCookie) {
      this.addCSS();
      setTimeout(() => {
        this.displayModal();
      }, 100);
    }
  }

  addCSS() {
    let css = `#ModalAcceptCookie{
            width: 33.333333%;
        }
        @media (max-width: 800px) {
          #ModalAcceptCookie {
            width: 100%;
          }
        }`,
      head = document.head || document.getElementsByTagName("head")[0],
      style = document.getElementsByTagName("style");

    if (this.align == "left") {
      css += `#ModalAcceptCookie{
              left: 0;
          }`;
    }
    if (this.align == "right") {
      css += `#ModalAcceptCookie{
              right: 0;
          }`;
    }
    if (this.align == "center") {
      css += `#ModalAcceptCookie{
        left: 33.33333%;
      }
      @media (max-width: 800px) {
        #ModalAcceptCookie {
          left: 0;
        }
      }
      
      `;
    }

    if (!style) {
      style = document.createElement("style");
    }
    setTimeout(() => {
      if (style.styleSheet) {
        style[0].styleSheet.cssText = css;
      } else {
        style[0].append(document.createTextNode(css));
        console.log("C", css);
      }
      head.appendChild(style);
    }, 100);
  }

  displayModal() {
    const body = document.getElementsByTagName("body")[0];
    const div = document.createElement("div");

    div.innerHTML = `<div id="ModalAcceptCookie" class="ModalAcceptCookie" 
    style="margin: 0;
    padding:0rem; padding-top: 0.25rem; 
    color: ${this.textColor};
    border-radius: 0.75rem; background-color: ${this.bgColor};  position: fixed; 
    bottom: 0;
    ">
    <div id="header"  style="text-align: center; font-weight: 700;padding:0.25rem;     ">
    ${this.text.header}
    </div>
    <div id="body" style="margin: 0; padding: 0.75rem; text-align: justify;">
    ${this.text.body}
    <a href="${this.privacyPolicy}" target="${this.target}" style="color: ${this.linkColor};">${this.text.privacyPolicy}</a>
    </div>
    <div  style="text-align: center; ">
    <a href="${this.cookiePolicy}" target="${this.target}" style="color: ${this.linkColor};" >${this.text.learnMore}</a>
    <button
    id="acceptCookieButton"
    type="button"
    style="padding-top: 0.5rem;cursor: pointer; 
    padding-bottom: 0.5rem; 
    padding-left: 1rem;
    padding-right: 1rem; 
    margin: 0.5rem; 
    background-color:  ${this.buttonColor}; 
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform; 
    transition-duration: 500ms; 
    color:  ${this.buttonTextColor}; 
    border-radius: 0.375rem; 
    border-width: 1px; 
    border-color:  ${this.buttonBorderColor}; 
    user-select: none; 
   ">
   ${this.text.accept}
     </button>
    </div>
    </div>`;
    body.append(div);
    const data = { acceptCookie: true };
    let button = document.getElementById("acceptCookieButton");
    button.addEventListener("click", () => {
      this.acceptCookie();
      this.hideModal();
    });
  }

  acceptCookie() {
    console.log("COOKIE ACCEPTED");
    const data = { acceptCookie: true };
    this.setCookie(JSON.stringify(data));
  }

  hideModal() {
    const modal = document.getElementById("ModalAcceptCookie");
    modal.remove();
  }

  getCookie() {
    var nameEQ = this.cookieName + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  setCookie(value) {
    let name = this.cookieName;
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + this.dayExpire * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
    document.cookie =
      name + "=" + (value || "") + expires + `; path=/;domain=${this.domain};`;
  }
}
