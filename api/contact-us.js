import mailGun from "mailgun.js";
import formData from "form-data";

const contactUs = async (req, res) => {
  if (req.method !== "POST") {
    return res.json(
      {
        message: "Method not allowed",
      },
      {
        status: 405,
      }
    );
  }

  const data = req.body;

  if (!data?.email || !data?.message || !data?.name) {
    return res.json(
      {
        message: "Please fill all the fields",
      },
      {
        status: 400,
      }
    );
  }
  const { name, email, message } = data;
  try {
    const MailGun = new mailGun(formData);

    const mg = MailGun.client({
      username: "api",
      key: import.meta.env.MAILGUN_API_KEY,
    });

    const DOMAIN = "mailgun.kiitians.com";

    const data = {
      from: `TNLC 2024 <tmlc2024@kiitians.com>`,
      to: "krishnakumarlal8421@gmail.com",
      subject: "TNLC 2024 Contact Form Response",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <p color: #1a1a1a;">Name: ${name}</p>
        <p color: #1a1a1a;">Email: ${email}</p>
        <p color: #1a1a1a;">Message: ${message}</p>
      </div>
        `,
    };

    await mg.messages.create(`${DOMAIN}`, data);

    return res.json(
      {
        message: "Thanks for contacting us! We will get back to you soon.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return res.json(
      {
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
};

export default contactUs;
