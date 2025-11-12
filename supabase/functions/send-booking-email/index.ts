import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface BookingData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const bookingData: BookingData = await req.json();
    const { name, email, company, phone, message } = bookingData;

    // Validate required fields
    if (!name || !email) {
      return new Response(
        JSON.stringify({ error: "Name and email are required" }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Initialize Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Store the booking submission in the database
    const { data: submission, error: dbError } = await supabase
      .from("booking_submissions")
      .insert({
        name,
        email,
        company: company || null,
        phone: phone || null,
        message: message || null,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save submission" }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Prepare email content
    const adminEmail = "shanshru15@gmail.com";
    const calendlyLink = "https://calendly.com/shanshru15/30min";

    // Email content for admin
    const adminEmailContent = `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Email content for user
    const userEmailContent = `
      <h2>Thank You for Your Interest in Nexanova.ai!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to us. We've received your booking request and are excited to connect with you!</p>
      <p><strong>Next Steps:</strong></p>
      <p>Please schedule your free consultation call using our Calendly link:</p>
      <p><a href="${calendlyLink}" style="display: inline-block; padding: 12px 24px; background-color: #06b6d4; color: white; text-decoration: none; border-radius: 8px; margin: 16px 0;">Schedule Your Call</a></p>
      <p>We look forward to discussing how Nexanova.ai can help automate and transform your business!</p>
      <br>
      <p>Best regards,</p>
      <p>The Nexanova.ai Team</p>
    `;

    console.log("Booking submission saved successfully:", submission.id);
    console.log("Email notifications would be sent to:", adminEmail, "and", email);
    console.log("Note: Email sending requires SMTP configuration or email service integration");

    return new Response(
      JSON.stringify({
        success: true,
        message: "Booking request received successfully",
        calendlyLink,
        submissionId: submission.id,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing booking:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
