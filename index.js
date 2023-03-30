var htmlContent;
var display = document.getElementById('dsp-e');
var code = document.getElementById("staticEmailCode");
var html = document.getElementById("staticEmail");

previewCode = () => {
  
  var codeClass = code.classList.contains("hide");
  
  if(codeClass) {
    html.classList.add("hide");
    code.classList.remove("hide");
  }
  else {
    code.classList.add("hide");
    html.classList.remove("hide");
  }

}

copyHTML = () => {
    // Get the text field
    var copyText = document.getElementById("staticEmail");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

updateTxt = (e) => {

  e == null ? e = document.getElementsByClassName('active')[0].id : e;

  switch(e) {
    case "email1":
    case "em1":
    case "em11":
      display.innerHTML = "email 1";
      e = 21;
      break;
    case "email2":
    case "em2":
    case "em22":
      display.innerHTML = "email 2";
      e = 22;
      break;
    case "email3":
    case "em3":
    case "em33":
      display.innerHTML = "email 3";
      e = 23;
      
      break;
  }

  convert(e);
  
}

convert = (e) => {

  buildEmail(e);

  html.value = htmlContent;
  code.innerHTML = htmlContent;

}

buildEmail = (e) => {
  let tel = document.getElementById('phone').value;
  let cons = document.getElementById('name').value;
  let fn = cons.split(' ')[0];
  let subject = document.getElementById('subject').value;
  let brand = document.getElementById('brand').value;
  let inclSal = document.getElementById('salu').value;
  let inclSO = document.getElementById('signOff').value;

  let subj = `<strong>Subject: </strong>${subject}<br /><br />`
  let fwdSubj = `<strong>Subject: </strong>FW: ${subject}<br /><br />`
  let fwd = `<div class="content" style="font-family: Calibri, serif; font-size: 16px; line-height: 26px; box-sizing: border-box; max-width: 600px; overflow: visible; display: block; margin: 0;">
                <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Calibri, serif; font-size: 16px; line-height: 26px; box-sizing: border-box; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                <tr style="font-family: Calibri, serif; font-size: 16px; line-height: 26px; box-sizing: border-box;">
                    <td class="footer-content" style="font-family: Calibri, serif; font-size: 13px; line-height: 22px; box-sizing: border-box; vertical-align: top; font-style: italic; width: 100%; clear: both; color: #2C343F; border-top-width: 1px; border-top-color: #d0d0d0; border-top-style: solid; padding: 15px 5px 5px;" valign="top">
                </td>
                </tr>
                </table>
                </div>
                <strong>From:</strong> ${cons}<br />
                <strong>To: </strong>{{CONTACT_FIRST_NAME}} {{CONTACT_LAST_NAME}} <span style="box-sizing: border-box; color: #0000FF; text-decoration: underline"><{{CONTACT_EMAIL}}></span><br />`
  let salu = `Hi {{CONTACT_FIRST_NAME}}<br/><br/>`
  let sOff = `<br/><br/>Best,<br/>${fn}<br/>`;

  let block1 = (inclSal == "Yes" ? salu : "") + document.getElementById('21').value.replace(/(?:\r\n|\r|\n)/g, '<br/>') + (inclSO == "Yes" ? sOff : "");
  let block2 = (inclSal == "Yes" ? salu : "") + document.getElementById('22').value.replace(/(?:\r\n|\r|\n)/g, '<br/>') + (inclSO == "Yes" ? sOff : '<br/>') + fwd + subj + (inclSal == "Yes" ? salu : "") + document.getElementById('21').value.replace(/(?:\r\n|\r|\n)/g, '<br/>') + (inclSO == "Yes" ? sOff : '<br/>'); // email 2
  let block3 = (inclSal == "Yes" ? salu : "") + document.getElementById('23').value.replace(/(?:\r\n|\r|\n)/g, '<br/>') + (inclSO == "Yes" ? sOff : '<br/>') + fwd + fwdSubj + block2; // email 3


  htmlContent = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="apple-touch-icon" href="/cfg-lib/images/plus-logo.png" />
<meta name="theme-color" content="#222c32" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="apple-touch-icon" href="/cfg-lib/images/plus-logo.png" />
<meta name="theme-color" content="#222c32" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body style="-ms-text-size-adjust: 100%; -webkit-text-size-adjust: none; background-color: #ffffff; box-sizing: border-box; font-family: Calibri, sans-serif; font-size: 16px; height: 100%; line-height: 26px; width: 100% !important" bgcolor="#ffffff">
<style type="text/css">
img {
max-width: 100%;
}
body {
background-color: #ffffff; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 26px;
}
.ExternalClass {
width: 100%;
}
.ExternalClass {
line-height: 100%;
}
img {
-ms-interpolation-mode: bicubic;
}
a:visited {
color: purple !important;
}
a:hover {
color: ${brand == 'IT' ? '#00ADEF' : '#A9B012'} !important;
}
a:active {
color: #0000FF !important;
}
.cta-button:hover {
color: #ffffff; background-color: #B67A0D; text-decoration: none; border-color: #B67A0D; border: 12px solid #B67A0D;
}
[owa] .cta-button:hover {
color: #ffffff; background-color: #B67A0D; text-decoration: none; border-color: #B67A0D; border: 12px solid #B67A0D;
}
[class="cta-button"]:hover {
color: #ffffff; background-color: #B67A0D; text-decoration: none; border-color: #B67A0D; border: 12px solid #B67A0D;
}
.cta-button:visited {
color: #ffffff; background-color: #B67A0D; text-decoration: none; border-color: #B67A0D; border: 12px solid #B67A0D;
}
[owa] .cta-button:visited {
color: #ffffff; background-color: #B67A0D; text-decoration: none; border-color: #B67A0D; border: 12px solid #B67A0D;
}
[class="cta-button"]:visited {
color: #ffffff; background-color: #B67A0D; text-decoration: none; border-color: #B67A0D; border: 12px solid #B67A0D;
}
.cta-button:active {
color: #ffffff; background-color: #B67A0D; text-decoration: none; border-color: #B67A0D; border: 12px solid #B67A0D;
}
[owa] .cta-button:active {
color: #ffffff; background-color: #B67A0D; text-decoration: none; border-color: #B67A0D; border: 12px solid #B67A0D;
}
[class="cta-button"]:active {
color: #ffffff; background-color: #B67A0D; text-decoration: none; border-color: #B67A0D; border: 12px solid #B67A0D;
}
</style>
<!--[if mso 16]>
    <style type="text/css">
        a{
            text-decoration:underline !important;
        }
    </style>
<![endif]-->

<table class="body-wrap" style="background-color: #ffffff; box-sizing: border-box; font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%" bgcolor="#ffffff">
  <tr>
    <td class="container" style="box-sizing: border-box; clear: both !important; display: block !important; font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; margin: 0; max-width: 600px !important; overflow: visible; vertical-align: top" valign="top">
    ${e == 21 ? block1 : e == 22 ? block2 + '<br/>' : e == 23 ? block3 + '<br/>' : ""}
    <br/>
    <a href="https://recruitment.coburgbanks.co.uk/book-a-call/"><span>Book a call in my diary </span></a> |  <a href="https://recruitment.coburgbanks.co.uk/${brand}-recruitment-agencies-a-5/"><span>coburgbanks.co.uk</span></a>
     <br/><br/>
    <strong><span style="color:${brand == 'IT' ? '#00ADEF' : '#A9B012'}; font-size:11.0pt">${cons}</span></strong><br/>
    <span style="color:gray; font-size:11.0pt">${brand} Recruitment Specialist and finder of Superstars</span><br/><br/>
    <span style="color:gray; font-size:11.0pt"><strong>Direct Dial: </strong>${tel}</span>
    <br /><br /></td>
              </tr>
            </table>
    
          <div class="content" style="box-sizing: border-box; display: block; font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; margin: 0; max-width: 600px; overflow: visible">
            <table width="100%" cellpadding="0" cellspacing="0" style="box-sizing: border-box; font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; mso-table-lspace: 0pt; mso-table-rspace: 0pt">
              <tr style="box-sizing: border-box; font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px"> 
              </tr>
            </table>
          </div>
              <div class="content" style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box; max-width: 600px; overflow: visible; display: block; margin: 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box; mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
              <tr style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box;">
              <td class="footer-content" style="font-family: Calibri, sans-serif; font-size: 13px; line-height: 22px; box-sizing: border-box; vertical-align: top; font-style: italic; width: 100%; clear: both; color: #2C343F; border-top-width: 1px; border-top-color: #d0d0d0; border-top-style: solid; padding: 15px 5px 5px;" valign="top">
                <a href="https://www.coburgbanks.co.uk?__s=xxxxxxx" target="_blank" style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box; color: #0000FF; text-decoration: underline;">
                    <span style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box;">
                        <img alt="Image" src=${brand == 'IT' ? 'https://www.coburgbanks.co.uk/wp-content/uploads/2022/01/CB-IT-Logo-x1.png' : "https://getdrip.s3.amazonaws.com/uploads/image_upload/image/225682/embeddable_8d5c1764-d7bd-4e27-894c-85a4eeaee1be.png"} style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box; max-width: 100%; -ms-interpolation-mode: bicubic;"/>
                        </span></a>
                        <br style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box;"/>
                    <br/>Company Reg No:  06659534
                    <br/>Registered Office:  15 Wrens Court, Lower Queen Street, Sutton Coldfield, B72 1RT
                    <br/>
                    <br/>If you would no longer like to receive emails us please <a href="{{LINK_UNSUBSCRIBE}}" style="box-sizing: border-box; color: #2C343F; text-decoration: underline">unsubscribe</a>
               <br/></td>
              </tr>
            </table>
          </div>
          
        </td>
      </tr>
    </table>    
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WS8R9KX" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript><script>(function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-WS8R9KX");
    </script><noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WS8R9KX"height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript></body>
    </html>`

}