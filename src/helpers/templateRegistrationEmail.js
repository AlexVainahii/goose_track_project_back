const today = new Date();
const formattedDate = today.toISOString().split("T")[0];
const templateRegistrationEmail = (userName) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
  >
    <head>
      <!--[if gte mso 9]>
        <xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml>
      <![endif]-->
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="x-apple-disable-message-reformatting" />
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!--<![endif]-->
      <title></title>
  
      <style type="text/css">
        @media only screen and (min-width: 620px) {
          .u-row {
            width: 600px !important;
          }
          .u-row .u-col {
            vertical-align: top;
          }
  
          .u-row .u-col-100 {
            width: 600px !important;
          }
        }
  
        @media (max-width: 620px) {
          .u-row-container {
            max-width: 100% !important;
            padding-left: 0px !important;
            padding-right: 0px !important;
          }
          .u-row .u-col {
            min-width: 320px !important;
            max-width: 100% !important;
            display: block !important;
          }
          .u-row {
            width: 100% !important;
          }
          .u-col {
            width: 100% !important;
          }
          .u-col > div {
            margin: 0 auto;
          }
        }
        body {
          margin: 0;
          padding: 0;
        }
  
        table,
        tr,
        td {
          vertical-align: top;
          border-collapse: collapse;
        }
  
        p {
          margin: 0;
        }
  
        .ie-container table,
        .mso-container table {
          table-layout: fixed;
        }
  
        * {
          line-height: inherit;
        }
  
        a[x-apple-data-detectors="true"] {
          color: inherit !important;
          text-decoration: none !important;
        }
  
        @media (min-width: 0px) {
          .hide-default__display-table {
            display: table !important;
            mso-hide: unset !important;
          }
        }
  
        @media (min-width: 481px) {
          .hide-desktop {
            max-height: 0px;
            overflow: hidden;
            display: none !important;
          }
        }
        table,
        td {
          color: #000000;
        }
        #u_body a {
          color: #e67e23;
          text-decoration: underline;
        }
        @media (max-width: 480px) {
          #u_content_button_1 .v-size-width {
            width: 93% !important;
          }
        }
      </style>
  
      <!--[if !mso]><!-->
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
        rel="stylesheet"
        type="text/css"
      />
      <!--<![endif]-->
    </head>
  
    <body
      class="clean-body u_body"
      style="
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: 100%;
        background-color: #081933;
        color: #000000;
      "
    >
      <!--[if IE]><div class="ie-container"><![endif]-->
      <!--[if mso]><div class="mso-container"><![endif]-->
      <table
        id="u_body"
        style="
          border-collapse: collapse;
          table-layout: fixed;
          border-spacing: 0;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          vertical-align: top;
          min-width: 320px;
          margin: 0 auto;
          background-color: #081933;
          width: 100%;
        "
        cellpadding="0"
        cellspacing="0"
      >
        <tbody>
          <tr style="vertical-align: top">
            <td
              style="
                word-break: break-word;
                border-collapse: collapse !important;
                vertical-align: top;
              "
            >
              <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #081933;"><![endif]-->
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    height="0px"
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      border-top: 0px solid #bbbbbb;
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                            font-size: 0px;
                                            line-height: 0px;
                                            mso-line-height-rule: exactly;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                        >
                                          <span>&#160;</span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <!--[if !mso]><!-->
                          <table
                            class="hide-default__display-table hide-desktop"
                            style="
                              display: none;
                              mso-hide: all;
                              font-family: 'Lato', sans-serif;
                            "
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 0px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                        align="center"
                                      >
                                        <img
                                          align="center"
                                          border="0"
                                          src="https://res.cloudinary.com/dnhobiphs/image/upload/v1693180413/stat/image-4_vllpnm.png"
                                          alt="border"
                                          title="border"
                                          style="
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                            clear: both;
                                            display: inline-block !important;
                                            border: none;
                                            height: auto;
                                            float: none;
                                            width: 100%;
                                            max-width: 600px;
                                          "
                                          width="600"
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <!--<![endif]-->
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #ffffff;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div style="height: 100%; width: 100% !important">
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 5px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                        align="center"
                                      >
                                        <a
                                          href="https://userandrii.github.io/goose_track_project_front"
                                          target="_blank"
                                        >
                                          <img
                                            align="center"
                                            border="0"
                                            src="https://res.cloudinary.com/dnhobiphs/image/upload/v1693180404/stat/image-1_k4vxlg.png"
                                            alt="Logo"
                                            title="Logo"
                                            style="
                                              outline: none;
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              clear: both;
                                              display: inline-block !important;
                                              border: none;
                                              height: auto;
                                              float: none;
                                              width: 24%;
                                              max-width: 141.6px;
                                            "
                                            width="141.6"
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 0px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                        align="center"
                                      >
                                        <img
                                          align="center"
                                          border="0"
                                          src="https://res.cloudinary.com/dnhobiphs/image/upload/v1693180414/stat/image-5_avhlwt.png"
                                          alt="Hero Image"
                                          title="Hero Image"
                                          style="
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                            clear: both;
                                            display: inline-block !important;
                                            border: none;
                                            height: auto;
                                            float: none;
                                            width: 100%;
                                            max-width: 391px;
                                          "
                                          width="391"
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #ffffff;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="background-color: #f7f7f7;width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          background-color: #f7f7f7;
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 15px 10px 40px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <h1
                                    style="
                                      margin: 0px;
                                      line-height: 140%;
                                      text-align: center;
                                      word-wrap: break-word;
                                      font-family: 'Open Sans', sans-serif;
                                      font-size: 30px;
                                      font-weight: 400;
                                    "
                                  >
                                    <strong
                                      >SLAVA UKRAINI!!!<br />Email Registration Confirmation</strong
                                    >
                                  </h1>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #f7f7f7;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #f7f7f7;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 0px 44px 8px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    style="
                                      font-size: 14px;
                                      color: #333333;
                                      line-height: 190%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p
                                      style="
                                        font-size: 14px;
                                        line-height: 190%;
                                        text-align: left;
                                      "
                                    >
                                      <strong
                                        ><span
                                          style="
                                            font-size: 18px;
                                            line-height: 34.2px;
                                          "
                                          >Date:${formattedDate}</span
                                        ></strong
                                      >
                                    </p>
                                    <p style="font-size: 14px; line-height: 190%">
                                      [Goose Track] [Ukraine]
                                    </p>
                                    <p style="font-size: 14px; line-height: 190%">
                                      
                                    </p>
                                    <p
                                      style="
                                        font-size: 14px;
                                        line-height: 190%;
                                        text-align: center;
                                      "
                                    >
                                      <span
                                        style="
                                          font-size: 22px;
                                          line-height: 41.8px;
                                        "
                                        ><strong>${userName}</strong></span
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px 44px 30px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    style="
                                      font-size: 14px;
                                      color: #333333;
                                      line-height: 200%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="font-size: 14px; line-height: 200%">
                                      Dear,
                                    </p>
                                    <p style="font-size: 14px; line-height: 200%">
                                    We are pleased to inform you that your registration on our website has been successfully completed. Welcome to the Goose Track community!

                                    To start using our services and explore all the possibilities that Goose Track offers, you can log in to your account using your registered email address and password.
                                    
                                    If you have any questions or need assistance, please don't hesitate to contact our support team. We're here to help you!
                                    
                                    Thank you for choosing Goose Track. We look forward to providing you with an excellent experience.
                                    
                                    Best regards,
                                    The Goose Track Team
                                    </p>
                                    <p style="font-size: 14px; line-height: 200%">
                                    To access the main website, please click the button below:
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            id="u_content_button_1"
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <!--[if mso
                                    ]><style>
                                      .v-button {
                                        background: transparent !important;
                                      }
                                    </style><!
                                  [endif]-->
                                  <div align="center">
                                    <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://unlayer.com" style="height:60px; v-text-anchor:middle; width:360px;" arcsize="5%"  stroke="f" fillcolor="#2a66f1"><w:anchorlock/><center style="color:#d6c731;"><![endif]-->
                                    <a
                                      href="https://userandrii.github.io/goose_track_project_front"
                                      target="_blank"
                                      class="v-button v-size-width"
                                      style="
                                        box-sizing: border-box;
                                        display: inline-block;
                                        text-decoration: none;
                                        -webkit-text-size-adjust: none;
                                        text-align: center;
                                        color: #d6c731;
                                        background-color: #2a66f1;
                                        border-radius: 3px;
                                        -webkit-border-radius: 3px;
                                        -moz-border-radius: 3px;
                                        width: 62%;
                                        max-width: 100%;
                                        overflow-wrap: break-word;
                                        word-break: break-word;
                                        word-wrap: break-word;
                                        mso-border-alt: none;
                                        border-top-width: 0px;
                                        border-top-style: solid;
                                        border-top-color: #ccc;
                                        border-left-width: 0px;
                                        border-left-style: solid;
                                        border-left-color: #ccc;
                                        border-right-width: 0px;
                                        border-right-style: solid;
                                        border-right-color: #ccc;
                                        border-bottom-width: 0px;
                                        border-bottom-style: solid;
                                        border-bottom-color: #ccc;
                                        font-size: 14px;
                                      "
                                    >
                                      <span
                                        style="
                                          display: block;
                                          padding: 19px 30px;
                                          line-height: 120%;
                                        "
                                        ><span
                                          style="
                                            font-size: 18px;
                                            line-height: 21.6px;
                                          "
                                          ><strong
                                            ><span
                                              style="
                                                line-height: 21.6px;
                                                font-family: 'Open Sans',
                                                  sans-serif;
                                                font-size: 18px;
                                              "
                                              >C L I C K   H E R E</span
                                            ></strong
                                          ></span
                                        ></span
                                      >
                                    </a>
                                    <!--[if mso]></center></v:roundrect><![endif]-->
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 30px 30px 70px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    style="
                                      font-size: 14px;
                                      color: #333333;
                                      line-height: 190%;
                                      text-align: left;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="font-size: 14px; line-height: 190%">
                                      <span
                                        style="
                                          font-size: 16px;
                                          line-height: 30.4px;
                                        "
                                        >Sincerely,</span
                                      >
                                    </p>
                                    <p style="font-size: 14px; line-height: 190%">
                                      <span
                                        style="
                                          font-size: 16px;
                                          line-height: 30.4px;
                                        "
                                        ><strong>[Stepan, Bandera]</strong></span
                                      >
                                    </p>
                                    <p style="font-size: 14px; line-height: 190%">
                                      <span
                                        style="
                                          font-size: 16px;
                                          line-height: 30.4px;
                                        "
                                        ><strong>[Goose Track]</strong></span
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: #ffffff;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #ffffff;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 0px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                        align="center"
                                      >
                                        <img
                                          align="center"
                                          border="0"
                                          src="https://res.cloudinary.com/dnhobiphs/image/upload/v1693180413/stat/image-3_als9sj.jpg"
                                          alt="border"
                                          title="border"
                                          style="
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                            clear: both;
                                            display: inline-block !important;
                                            border: none;
                                            height: auto;
                                            float: none;
                                            width: 100%;
                                            max-width: 600px;
                                          "
                                          width="600"
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 15px 10px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    height="0px"
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="55%"
                                    style="
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      border-top: 1px solid #bbbbbb;
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                            font-size: 0px;
                                            line-height: 0px;
                                            mso-line-height-rule: exactly;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                        >
                                          <span>&#160;</span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px 10px 20px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <div
                                    style="
                                      font-size: 14px;
                                      color: #8d8c8c;
                                      line-height: 190%;
                                      text-align: center;
                                      word-wrap: break-word;
                                    "
                                  >
                                    <p style="font-size: 14px; line-height: 190%">
                                      <br />All right reserved.<br />Ukraine<br /><span
                                        style="
                                          text-decoration: underline;
                                          font-size: 14px;
                                          line-height: 26.6px;
                                        "
                                        >Terms of use</span
                                      >
                                      |
                                      <span
                                        style="
                                          text-decoration: underline;
                                          font-size: 14px;
                                          line-height: 26.6px;
                                        "
                                        >Privacy Policy</span
                                      >
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 0px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    width="100%"
                                    cellpadding="0"
                                    cellspacing="0"
                                    border="0"
                                  >
                                    <tr>
                                      <td
                                        style="
                                          padding-right: 0px;
                                          padding-left: 0px;
                                        "
                                        align="center"
                                      >
                                        <img
                                          align="center"
                                          border="0"
                                          src="https://res.cloudinary.com/dnhobiphs/image/upload/v1693180413/stat/image-2_ppwfrt.png"
                                          alt="border"
                                          title="border"
                                          style="
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                            clear: both;
                                            display: inline-block !important;
                                            border: none;
                                            height: auto;
                                            float: none;
                                            width: 100%;
                                            max-width: 600px;
                                          "
                                          width="600"
                                        />
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <div
                class="u-row-container"
                style="padding: 0px; background-color: transparent"
              >
                <div
                  class="u-row"
                  style="
                    margin: 0 auto;
                    min-width: 320px;
                    max-width: 600px;
                    overflow-wrap: break-word;
                    word-wrap: break-word;
                    word-break: break-word;
                    background-color: transparent;
                  "
                >
                  <div
                    style="
                      border-collapse: collapse;
                      display: table;
                      width: 100%;
                      height: 100%;
                      background-color: transparent;
                    "
                  >
                    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
  
                    <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                    <div
                      class="u-col u-col-100"
                      style="
                        max-width: 320px;
                        min-width: 600px;
                        display: table-cell;
                        vertical-align: top;
                      "
                    >
                      <div
                        style="
                          height: 100%;
                          width: 100% !important;
                          border-radius: 0px;
                          -webkit-border-radius: 0px;
                          -moz-border-radius: 0px;
                        "
                      >
                        <!--[if (!mso)&(!IE)]><!--><div
                          style="
                            box-sizing: border-box;
                            height: 100%;
                            padding: 0px;
                            border-top: 0px solid transparent;
                            border-left: 0px solid transparent;
                            border-right: 0px solid transparent;
                            border-bottom: 0px solid transparent;
                            border-radius: 0px;
                            -webkit-border-radius: 0px;
                            -moz-border-radius: 0px;
                          "
                        ><!--<![endif]-->
                          <table
                            style="font-family: 'Lato', sans-serif"
                            role="presentation"
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            border="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    overflow-wrap: break-word;
                                    word-break: break-word;
                                    padding: 10px;
                                    font-family: 'Lato', sans-serif;
                                  "
                                  align="left"
                                >
                                  <table
                                    height="0px"
                                    align="center"
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="
                                      border-collapse: collapse;
                                      table-layout: fixed;
                                      border-spacing: 0;
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      vertical-align: top;
                                      border-top: 0px solid #bbbbbb;
                                      -ms-text-size-adjust: 100%;
                                      -webkit-text-size-adjust: 100%;
                                    "
                                  >
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td
                                          style="
                                            word-break: break-word;
                                            border-collapse: collapse !important;
                                            vertical-align: top;
                                            font-size: 0px;
                                            line-height: 0px;
                                            mso-line-height-rule: exactly;
                                            -ms-text-size-adjust: 100%;
                                            -webkit-text-size-adjust: 100%;
                                          "
                                        >
                                          <span>&#160;</span>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
  
                          <!--[if (!mso)&(!IE)]><!-->
                        </div>
                        <!--<![endif]-->
                      </div>
                    </div>
                    <!--[if (mso)|(IE)]></td><![endif]-->
                    <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                  </div>
                </div>
              </div>
  
              <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
            </td>
          </tr>
        </tbody>
      </table>
      <!--[if mso]></div><![endif]-->
      <!--[if IE]></div><![endif]-->
    </body>
  </html>
`;
};
module.exports = { templateRegistrationEmail };
