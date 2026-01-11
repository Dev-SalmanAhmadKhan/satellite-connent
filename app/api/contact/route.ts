import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactRequestBody = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(request: NextRequest) {
  console.log("\n🚀 Contact form submission received");

  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, phone, message } = body;

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { message: "All fields are required", success: false },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Invalid email address", success: false },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error(
        "❌ Missing EMAIL_USER or EMAIL_PASS in environment variables"
      );
      return NextResponse.json(
        {
          message:
            "Email service not configured. Please contact administrator.",
          success: false,
        },
        { status: 500 }
      );
    }

    console.log("📧 Email credentials found");
    console.log("📤 Sending from:", process.env.EMAIL_USER);

    // Create GoDaddy SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtpout.secureserver.net",
      port: parseInt(process.env.EMAIL_PORT || "465"),
      secure: true, // Use SSL
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2",
      },
    });

    // Verify SMTP connection
    console.log("🔌 Verifying SMTP connection...");
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified!");
    } catch (verifyError: any) {
      console.error("❌ SMTP verification failed:", verifyError.message);
      return NextResponse.json(
        {
          message: "Email server connection failed. Please try again later.",
          success: false,
          error:
            process.env.NODE_ENV === "development"
              ? verifyError.message
              : undefined,
        },
        { status: 500 }
      );
    }

    // Email to business owner
    console.log("📨 Sending notification email to business...");
    const businessEmail = await transporter.sendMail({
      from: `"Satellite Connect Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `🔔 New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6; 
              color: #333; 
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container { 
              max-width: 600px; 
              margin: 40px auto; 
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 40px 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 700;
            }
            .content { 
              padding: 40px 30px;
            }
            .field { 
              margin-bottom: 24px;
              border-bottom: 1px solid #eee;
              padding-bottom: 16px;
            }
            .field:last-of-type {
              border-bottom: none;
            }
            .label { 
              font-weight: 700;
              color: #667eea;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 8px;
            }
            .value { 
              font-size: 16px;
              color: #333;
              padding: 12px;
              background: #f9f9f9;
              border-radius: 8px;
              border-left: 4px solid #667eea;
            }
            .value a {
              color: #667eea;
              text-decoration: none;
            }
            .footer {
              padding: 20px 30px;
              background: #f9f9f9;
              text-align: center;
              font-size: 12px;
              color: #666;
            }
            .cta-button {
              display: inline-block;
              margin-top: 20px;
              padding: 12px 24px;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              text-decoration: none;
              border-radius: 8px;
              font-weight: 600;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📡 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone wants to connect with you!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
              <div style="text-align: center;">
                <a href="mailto:${email}" class="cta-button">Reply to ${name}</a>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">Submitted on ${new Date().toLocaleString(
                "en-US",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  timeZone: "America/Chicago",
                }
              )}</p>
              <p style="margin: 8px 0 0 0; color: #999;">Satellite Connect - Houston, TX</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

From: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

---
Submitted: ${new Date().toLocaleString()}
Satellite Connect - Houston, TX
      `.trim(),
    });

    console.log(
      "✅ Business notification sent! Message ID:",
      businessEmail.messageId
    );

    // Confirmation email to customer
    console.log("📨 Sending confirmation email to customer...");
    const customerEmail = await transporter.sendMail({
      from: `"Satellite Connect" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting Satellite Connect! 📡",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6; 
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container { 
              max-width: 600px; 
              margin: 40px auto;
              background: white;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            }
            .header { 
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
              color: white; 
              padding: 50px 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 32px;
              font-weight: 700;
            }
            .content { 
              padding: 40px 30px;
            }
            .content h2 {
              color: #333;
              margin-top: 0;
            }
            .content p {
              color: #666;
              line-height: 1.8;
            }
            .contact-box {
              background: #f9f9f9;
              padding: 24px;
              border-radius: 12px;
              margin: 24px 0;
              border-left: 4px solid #667eea;
            }
            .contact-box strong {
              color: #667eea;
            }
            .contact-box a {
              color: #667eea;
              text-decoration: none;
              font-weight: 600;
            }
            .footer {
              padding: 30px;
              background: #f9f9f9;
              text-align: center;
              font-size: 12px;
              color: #666;
            }
            .social-links {
              margin: 20px 0;
            }
            .social-links a {
              display: inline-block;
              margin: 0 8px;
              color: #667eea;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📡 Satellite Connect</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 18px;">Houston's Premier Satellite Solutions</p>
            </div>
            <div class="content">
              <h2>Thank you, ${name}! 🎉</h2>
              <p>We've received your message and appreciate you reaching out to us.</p>
              <p><strong>Our team will review your request and get back to you within 24 hours.</strong></p>
              
              <div class="contact-box">
                <p style="margin: 0 0 12px 0;"><strong>📞 Need immediate assistance?</strong></p>
                <p style="margin: 0 0 8px 0;">
                  <strong>Phone:</strong> <a href="tel:307-206-0647">307-206-0647</a>
                </p>
                <p style="margin: 0 0 8px 0;">
                  <strong>Email:</strong> <a href="mailto:info@satelliteconnect.site">info@satelliteconnect.site</a>
                </p>
                <p style="margin: 0;">
                  <strong>Address:</strong> 16711 Cold Harbour LN, Houston, TX
                </p>
              </div>

              <p>We're committed to providing you with the best satellite installation and support services in Houston.</p>
              
              <p style="margin-top: 30px; color: #888; font-style: italic;">
                Best regards,<br>
                <strong style="color: #667eea;">The Satellite Connect Team</strong>
              </p>
            </div>
            <div class="footer">
              <p style="margin: 0 0 10px 0; font-weight: 600; color: #333;">Follow Us</p>
              <div class="social-links">
                <a href="#">Facebook</a> • 
                <a href="#">Twitter</a> • 
                <a href="#">Instagram</a>
              </div>
              <p style="margin: 20px 0 0 0; color: #999;">
                © ${new Date().getFullYear()} Satellite Connect. All rights reserved.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Thank you for contacting Satellite Connect!

Hi ${name},

We've received your message and our team will get back to you within 24 hours.

Need immediate assistance?
Phone: 307-206-0647
Email: info@satelliteconnect.site
Address: 16711 Cold Harbour LN, Houston, TX

Best regards,
The Satellite Connect Team

---
© ${new Date().getFullYear()} Satellite Connect. All rights reserved.
      `.trim(),
    });

    console.log(
      "✅ Customer confirmation sent! Message ID:",
      customerEmail.messageId
    );
    console.log("🎉 All emails sent successfully!\n");

    return NextResponse.json({
      message:
        "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      success: true,
    });
  } catch (error: any) {
    console.error("❌ Error in contact API:", error);
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      command: error.command,
    });

    return NextResponse.json(
      {
        message:
          "We couldn't send your message at this time. Please try again or contact us directly at 307-206-0647.",
        success: false,
        error:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}

// Handle GET requests
export async function GET() {
  return NextResponse.json(
    {
      message: "Contact API is working! Use POST to submit contact form.",
      success: false,
    },
    { status: 405 }
  );
}
