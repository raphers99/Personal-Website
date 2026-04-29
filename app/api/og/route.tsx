import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Joseph Raphael';
  const description = searchParams.get('description') || 'Finance focused. UK & US citizen.';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0D3B2E 0%, #1a4d3e 100%)',
          padding: '40px',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '20px',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#ffffff',
              margin: '0',
              maxWidth: '800px',
              lineHeight: '1.2',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: '#D4AF37',
              margin: '0',
              maxWidth: '700px',
            }}
          >
            {description}
          </p>
          <div
            style={{
              marginTop: '20px',
              fontSize: '18px',
              color: '#ffffff',
              opacity: 0.6,
            }}
          >
            josephajax.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
