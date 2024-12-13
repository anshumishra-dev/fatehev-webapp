import { webInfo } from '@/utils';
import nodemailer from 'nodemailer';

export async function GET(request) {
  return new Response('hi');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, data, title } = body; // Destructure data and title from body

    const formatName = (name) => {
      return name
        .replace(/([A-Z])/g, ' $1') // Insert a space before each uppercase letter
        .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter
    };

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL, // Replace this with your Gmail email address
        pass: process.env.MAIL_PASSWORD, // Replace this with your Gmail password
      },
    });

    await transporter.sendMail({
      from: `"${webInfo?.name || 'Fateh EV'}" <info@the7owners.com>`,
      to: 'the7owners.company@gmail.com',
      subject: `${title || 'Contact'} form submission | ${
        name || 'Home Page Form'
      }`,
      html: `
   <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email</title>
    <style>
        * {
            padding: 0;
            margin: 0;
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    </style>
</head>

<body>
    <div style="background-color:#eee">
        <div style="background-color:#ffffff; width: 100%; max-width: 700px; margin: auto;">
            <div style="padding: 1rem;">
                <!-- header -->
                <table style="width: 100%; ">
                    <thead>
                        <tr>
                            <th style="text-align: left; border-bottom: 2px solid #eee;">
                                <h1 style="color:#0A3560">
                                    Fateh EV
                                </h1>
                            </th>
                            <th style="text-align: right; border-bottom: 2px solid #eee;" align="center">
                                <h3 style="text-transform: uppercase; color: #EE3239;"> Contact Us</h3>
                            </th>
                        </tr>
                    </thead>
                </table>

                <!-- body -->

                <div style="padding: 2rem 1rem; ">
                    <table style="width: 100%;border: 1px solid #eee; border-collapse: collapse;">
                        <tbody>
                            ${Object.entries(body || {})
                              .map(([key, value], index) =>
                                key === 'title'
                                  ? ''
                                  : `<tr key=${index}>
                                <td style="padding: 0.5rem; border-bottom: 1px solid #eee;">
                                    ${formatName(key)}
                                </td>
                                <td
                                    style="padding: 0.5rem; border-left:  1px solid #eee; border-bottom: 1px solid #eee;">
                                    ${value || 'N/A'}
                                </td>
                            </tr>`
                              )
                              .join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- footer -->
        <div style="background-color:#ffffff; width: 100%; max-width: 700px; margin: auto;">
            <div style="background-color: #eee;height: 2px;"></div>
            <div style="padding: 1rem; text-align: center;background-color: #EE3239;">
                <p style="color: #eee;">powered by <a href="https://www.onlineindias.com/" target="_blank"
                        style="color: #fea900;font-weight: 700;text-decoration: none;text-transform: uppercase;"
                        rel="noopener noreferrer">Online<span style="color: #222;">Indias</span></a> </p>
            </div>
        </div>
    </div>
</body>
</html>
      `,
    });

    return new Response(JSON.stringify({ message: 'Sent Successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response('404 Bad Request', { status: 404 });
  }
}
