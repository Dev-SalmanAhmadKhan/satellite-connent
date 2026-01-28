import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type ContactRequestBody = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ResponseData = {
  message: string;
  success: boolean;
  error?: string;
  previewUrl?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
      success: false,
    });
  }

  try {
    const { name, email, phone, message } = req.body as ContactRequestBody;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Invalid email address",
        success: false,
      });
    }

    let transporter;
    let info;

    // DEVELOPMENT MODE - Use Ethereal (fake SMTP) or log to console
    if (process.env.NODE_ENV === "development") {
      console.log("\n🔧 DEVELOPMENT MODE - Email Testing");
      console.log("=====================================");

      // Option 1: Create test account on Ethereal
      try {
        const testAccount = await nodemailer.createTestAccount();

        transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });

        console.log("✅ Using Ethereal Email for testing");
      } catch (err) {
        // Fallback: Just log the email
        console.log("⚠️  Ethereal unavailable, logging email instead:");
        console.log("\n📧 EMAIL CONTENT:");
        console.log("------------------");
        console.log(`From: ${name} <${email}>`);
        console.log(`Phone: ${phone}`);
        console.log(`Message: ${message}`);
        console.log("------------------\n");

        return res.status(200).json({
          message:
            "✅ Development mode: Email logged to console (check terminal)",
          success: true,
        });
      }
    }
    // PRODUCTION MODE - Use GoDaddy SMTP
    else {
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        console.error("❌ Missing email credentials");
        return res.status(500).json({
          message: "Email service not configured",
          success: false,
        });
      }

      transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || "smtpout.secureserver.net",
        port: parseInt(process.env.EMAIL_PORT || "465"),
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      console.log("📤 Using GoDaddy SMTP for production");
    }

    // Send notification email to business
    info = await transporter.sendMail({
      from:
        process.env.NODE_ENV === "development"
          ? '"Test Satellite Connect" <test@example.com>'
          : `"Satellite Connect" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER || "test@example.com",
      replyTo: email,
      subject: `🔔 New Contact Form: ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #667eea; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #667eea; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">📡 New Contact Form Submission</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Message:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
              <p style="margin-top: 30px; color: #666; font-size: 12px;">
                Submitted: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `New Contact Form\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    });

    // Send confirmation to customer
    await transporter.sendMail({
      from:
        process.env.NODE_ENV === "development"
          ? '"Test Satellite Connect" <test@example.com>'
          : `"Satellite Connect" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Satellite Connect",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📡 Satellite Connect</h1>
            </div>
            <div class="content">
              <h2>Thank you, ${name}!</h2>
              <p>We've received your message and will get back to you within 24 hours.</p>
              <p><strong>Phone:</strong> <a href="tel:307-206-0647">307-206-0647</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@satelliteconnect.site">info@satelliteconnect.site</a></p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("✅ Emails sent successfully!");

    // For development, return preview URL
    if (process.env.NODE_ENV === "development" && info) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      if (previewUrl) {
        console.log("\n📧 Preview email here: " + previewUrl);
        return res.status(200).json({
          message: "Email sent! Check console for preview link.",
          success: true,
          previewUrl: previewUrl as string,
        });
      }
    }

    return res.status(200).json({
      message: "Message sent successfully! We'll get back to you soon.",
      success: true,
    });
  } catch (error: any) {
    console.error("❌ Email error:", error);
    return res.status(500).json({
      message: "Failed to send message. Please try again.",
      success: false,
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
