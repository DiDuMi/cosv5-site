/**
 * COSV5 Telegraph API Proxy (Cloudflare Pages Function)
 * 前端通过 /api/tg 调用此函数，由它转发到 Telegraph API
 * 避免浏览器 CORS 限制
 */
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // 从 URL 参数获取 action 和其他参数
  const action = url.searchParams.get('action') || '';
  const path = url.searchParams.get('path') || '';
  
  // Access Token - 硬编码以确保可用
  // 后续可改为 Cloudflare 环境变量
  const ACCESS_TOKEN = 'e35750a0982dbc0ff242b7c49921ce82f2f262ba795613f13b40c68867ae';
  
  const tgApi = 'https://api.telegra.ph';
  
  try {
    let apiUrl = '';
    
    switch (action) {
      case 'list':
        apiUrl = `${tgApi}/getPageList?access_token=${ACCESS_TOKEN}&limit=50&offset=0`;
        break;
      case 'views':
        apiUrl = `${tgApi}/getViews?path=${encodeURIComponent(path)}`;
        break;
      case 'page':
        apiUrl = `${tgApi}/getPage?path=${encodeURIComponent(path)}&return_content=true`;
        break;
      case 'edit':
        // POST method - handle differently
        if (request.method === 'POST') {
          const body = await request.json();
          const params = new URLSearchParams({
            access_token: ACCESS_TOKEN,
            path: body.path,
            content: JSON.stringify(body.content),
          });
          if (body.title) params.set('title', body.title);
          
          const tgRes = await fetch(`${tgApi}/editPage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString(),
          });
          const tgData = await tgRes.json();
          return new Response(JSON.stringify(tgData), {
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
          });
        }
        break;
      default:
        return new Response(JSON.stringify({ error: 'Unknown action' }), { status: 400 });
    }
    
    if (!apiUrl) {
      return new Response(JSON.stringify({ error: 'Invalid request' }), { status: 400 });
    }
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
    
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
