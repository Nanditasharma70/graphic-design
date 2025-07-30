import type { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID!;
const authToken = process.env.TWILIO_AUTH_TOKEN!;
const serviceSid = process.env.TWILIO_VERIFY_SERVICE_SID!;

const client = twilio(accountSid, authToken);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const { mobile } = JSON.parse(req.body);
    const verification = await client.verify.v2.services(serviceSid).verifications.create({
      to: `+91${mobile}`,
      channel: 'sms',
    });
    res.status(200).json({ success: true, status: verification.status });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Failed to send OTP' });
  }
}