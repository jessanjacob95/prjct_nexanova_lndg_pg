/*
  # Create booking submissions table

  1. New Tables
    - `booking_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person booking
      - `email` (text) - Email address of the person booking
      - `company` (text, nullable) - Company name if provided
      - `phone` (text, nullable) - Phone number if provided
      - `message` (text, nullable) - Additional message from the user
      - `created_at` (timestamptz) - Timestamp of submission
  
  2. Security
    - Enable RLS on `booking_submissions` table
    - Add policy for service role to insert data (used by edge function)
    - Add policy for authenticated admins to read data

  3. Important Notes
    - This table stores all booking form submissions
    - Data is protected by RLS policies
    - Only edge functions can insert data
*/

CREATE TABLE IF NOT EXISTS booking_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  message text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_submissions ENABLE ROW LEVEL SECURITY;

-- Policy to allow service role to insert (used by edge functions)
CREATE POLICY "Service role can insert booking submissions"
  ON booking_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);

-- Policy to allow service role to read (for admin purposes)
CREATE POLICY "Service role can read booking submissions"
  ON booking_submissions
  FOR SELECT
  TO service_role
  USING (true);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_booking_submissions_email ON booking_submissions(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_booking_submissions_created_at ON booking_submissions(created_at DESC);
