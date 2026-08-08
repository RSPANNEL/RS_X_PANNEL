// api/cron.js - Vercel Serverless Function
// Deploy as: vercel deploy --prod

export default async function handler(req, res) {
  // Vercel cron job or manual trigger
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Your harvest logic
    const harvestData = {
      timestamp: Date.now(),
      source: 'cron_job',
      status: 'active'
    };

    // Send to admin Firebase
    // This runs in background

    res.status(200).json({
      success: true,
      data: harvestData,
      message: 'Harvest cron executed'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
