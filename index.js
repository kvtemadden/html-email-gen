var htmlContent;
var code = document.getElementById("staticEmailCode");
var html = document.getElementById("staticEmail");
var em2 = document.getElementById("22");
var em3 = document.getElementById("23");
var dis = document.querySelector('.disabled')
var prevSec = document.querySelector('[data-step="prev-step"]')
var nextSec = document.querySelector('[data-step="next-step"]')
var modal = document.getElementById('myModal')

// last session check

if (window.localStorage.getItem("html-gen")) {
  modal.style.display = "block";
}

closeModal = () => {
  modal.style.display = "none";
  localStorage.clear();
}

modalData = () => {
  localStorage.getItem('name') == null ? document.querySelector('[data-field="name"]').value = "" : document.querySelector('[data-field="name"]').value = localStorage.getItem('name');
  localStorage.getItem('phone') == null ? document.querySelector('[data-field="phone"]').value = "" : document.querySelector('[data-field="phone"]').value = localStorage.getItem('phone');
  localStorage.getItem('subject') == null ? document.querySelector('[data-field="subject"]').value = "" : document.querySelector('[data-field="subject"]').value = localStorage.getItem('subject');
  localStorage.getItem('brand') == null ? document.querySelector('[data-field="brand"]').value = "" : document.querySelector('[data-field="brand"]').value = localStorage.getItem('brand');
  localStorage.getItem('salu') == null ? document.querySelector('[data-field="salu"]').value = "" : document.querySelector('[data-field="salu"]').value = localStorage.getItem('salu');
  localStorage.getItem('signOff') == null ? document.querySelector('[data-field="signOff"]').value = "" : document.querySelector('[data-field="signOff"]').value = localStorage.getItem('signOff');
  localStorage.getItem('em') == null ? document.querySelector('[data-field="em"]').value = "" : document.querySelector('[data-field="em"]').value = localStorage.getItem('em');
  localStorage.getItem('email-1') == null ? document.querySelector('[data-field="email-1"]').value = "" : document.querySelector('[data-field="email-1"]').value = localStorage.getItem('email-1');

  if(localStorage.getItem('em') == "Yes") {
    em2.innerHTML = `Did you get a chance to read the email below? Is it of interest?\n\nLet me know your thoughts.....`;

    em3.innerHTML = `Further to the emails below, are you the right person to be sending this to?\n\nI look forward to hearing from you.`;
  }

  modal.style.display = "none";
}

// on click of link without active class, add active class and remove from siblings

var links = document.querySelectorAll('.nav-link');
var sections = document.querySelectorAll('[data-section]');

document.addEventListener('click', function (event) { 
 
  if (event.target.matches('.nav-link')) {
    links.forEach(function (link) {
      link.classList.remove('active');
    });

    event.target.classList.add('active');
  }   

  if (event.target.matches('#next-step')) {
    nextSec.classList.add('active'); 
    convert(21);

    if (nextSec.classList.contains('disabled')) {
    nextSec.classList.remove('disabled');
    }

    prevSec.classList.remove('active');
    nextSec.parentNode.title = "";
  }

  if (event.target.matches('#prev-step')) {      
    nextSec.classList.remove('active');
    prevSec.classList.add('active');
  }

  if (event.target.matches('.nav-link') || event.target.matches('#next-step') || event.target.matches('#prev-step')) {
    // get the selector for current active section
    let activeSection = document.querySelector('[data-section]:not(.hide)');

    // set content to display the sibling section that doesn't have the hide class
    sections.forEach(function (section) {
      section.classList.remove('hide');
    });
  
    activeSection.classList.add('hide');
  }
}, false);

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

    var copyButton = document.querySelector('#copy');
    copyButton.innerHTML = "Copied successfully!";
    copyButton.classList.remove("btn-primary");
    copyButton.classList.add("btn-success");

    // Revert the text after 3 seconds
    setTimeout(function() {
      copyButton.innerHTML = "Copy HTML";
      copyButton.classList.add("btn-primary");
      copyButton.classList.remove("btn-success");
    }, 2000);
}

genericEmail = () => {
  let genericEmail = document.getElementById('em').value;

  if(genericEmail == "Yes") {
    em2.innerHTML = `Did you get a chance to read the email below? Is it of interest?\n\nLet me know your thoughts.....`;

    em3.innerHTML = `Further to the emails below, are you the right person to be sending this to?\n\nI look forward to hearing from you.`;
  }
  else {
    em2.innerHTML = "";
    em3.innerHTML = "";
  }
}

updateTxt = (e) => {

  e == null ? e = document.getElementsByClassName('active')[0].id : e;

  switch(e) {
    case "email1":
    case "em1":
    case "em11":
      e = 21;
      break;
    case "email2":
    case "em2":
    case "em22":
      e = 22;
      break;
    case "email3":
    case "em3":
    case "em33":
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
color: ${brand == 'IT' ? '#00ADEF' : brand == 'T4C' ? '#DD84B1' : brand == 'Response' ? '#970007' : '#A9B012'} !important;
}
a:active {
color: #0000FF !important;
}
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
    <td class="container" style="box-sizing: border-box; clear: both !important; display: block !important; font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; margin: 0; max-width: 600px !important; overflow: visible; vertical-align: top; padding-left: 0px;" valign="top">
    ${e == 21 ? block1 : e == 22 ? block2 + '<br/>' : e == 23 ? block3 + '<br/>' : ""}
    <br/>
    ${ brand == 'T4C' ? "" : brand == "Response" ? "" : `<a href="https://recruitment.coburgbanks.co.uk/book-a-call/"><span>Book a call in my diary </span></a> |  <a href="https://recruitment.coburgbanks.co.uk/${brand}-recruitment-agencies-a-5/"><span>coburgbanks.co.uk</span></a>`}
     <br/><br/>
    <strong><span style="color:${brand == 'IT' ? '#00ADEF' : brand == 'T4C' ? '#DD84B1' : brand == 'Response' ? '#970007' : '#A9B012'};font-size:11.0pt">${cons}</span></strong><br/>
    <span style="color:gray; font-size:11.0pt">${ brand == 'T4C' ? "Team Leader" : brand == "Response" ? "Commercial Manager" : brand + ` Recruitment Specialist and finder of Superstars`}</span><br/><br/>
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
              <td class="footer-content" style="font-family: Calibri, sans-serif; font-size: 13px; line-height: 22px; box-sizing: border-box; vertical-align: top; font-style: italic; width: 100%; clear: both; color: #2C343F; border-top-width: 1px; border-top-color: #d0d0d0; border-top-style: solid; padding: 15px 0px 5px;" valign="top">
                <a href=`${ brand == "Response" ? "'https://responsewebrecruitment.co.uk/'" : brand == "T4C" ? "'https://temps4care.co.uk'" : "'https://www.coburgbanks.co.uk?__s=xxxxxxx'"}` target="_blank" style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box; color: #0000FF; text-decoration: underline;">
                    <span style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box;">
                        <img alt="Image" src=${brand == 'IT' ? "'https://www.coburgbanks.co.uk/wp-content/uploads/2022/01/CB-IT-Logo-x1.png'" : brand == "T4C" ? "'https://temps4care.co.uk/wp-content/uploads/2022/08/Main-Logo-Editing-purposes.png width='200''" : brand == "Response" ? "'https://wiredplusimg.s3.amazonaws.com/FAR1efvX/editor_images/Response%20Email%20Logo.png'" : "'https://getdrip.s3.amazonaws.com/uploads/image_upload/image/225682/embeddable_8d5c1764-d7bd-4e27-894c-85a4eeaee1be.png'"} style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box; max-width: 100%; -ms-interpolation-mode: bicubic;"/>
                        </span></a>
                        <br style="font-family: Calibri, sans-serif; font-size: 16px; line-height: 26px; box-sizing: border-box;"/>
                    <br/>Company Reg No:  ${ brand == "Response" ? '04357675' : brand == "T4C" ? '13860981' : '06659534'}
                    <br/>Registered Office:  15 Wrens Court, Lower Queen Street, Sutton Coldfield, B72 1RT
                    <br/>
                    <br/>If you would no longer like to receive emails us please <a href="{{LINK_UNSUBSCRIBE}}" style="box-sizing: border-box; color: #2C343F; text-decoration: underline">unsubscribe</a>
               <br/></td>
              </tr>
            </table>
          </div>
    </body>
    </html>`

}

// Select all input fields and select elements with a data-field attribute
var fields = document.querySelectorAll('[data-field]');

// Add event listeners to detect changes in the fields
fields.forEach(function(field) {
  field.addEventListener('change', function() {
    // Get the value of the field
    var value = field.value;
    
    // Get the data-field attribute value
    var fieldName = field.getAttribute('data-field');
    
    // Save the value to local storage with the data-field attribute as the key
    localStorage.setItem(fieldName, value);
    localStorage.setItem('html-gen', "Yes");
  });
});

