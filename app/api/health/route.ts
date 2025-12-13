import { NextResponse } from 'next/server';

export async function GET() {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    commit: process.env.NEXT_PUBLIC_COMMIT_HASH || 'unknown',
    version: '1.0.0',
    service: "Miru Way Landing Page",
    memory: {
      used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
      total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024),
      unit: 'MB'
    },
    env_check: {
      API_URL_AUTH: process.env.API_URL_AUTH ? '✓ Set' : '✗ Missing',
      FRONTEND_URL: process.env.FRONTEND_URL ? '✓ Set' : '✗ Missing',
      API_URL_AUTH_value: process.env.API_URL_AUTH || 'NOT_SET',
      FRONTEND_URL_value: process.env.FRONTEND_URL || 'NOT_SET'
    }
  };

  return NextResponse.json(health, {
    status: 200,
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate'
    }
  });
}
