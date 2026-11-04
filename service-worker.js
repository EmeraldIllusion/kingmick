const CACHE='kingmick-v4-3';
const ASSETS=['./','./index.html','./styles.css?v=4.3','./kingmick-v4-3.js','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS.map(path=>new Request(new URL(path,self.registration.scope),{cache:'reload'})))).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('kingmick-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=='GET'||url.origin!==self.location.origin)return;
  if(url.pathname.endsWith('/kingmick-v4-3.js')){
    event.respondWith(caches.match(request).then(cached=>cached||fetch(request)));
    return;
  }
  event.respondWith(fetch(new Request(request,{cache:'no-cache'})).then(response=>{
    if(response.ok){const copy=response.clone();event.waitUntil(caches.open(CACHE).then(cache=>cache.put(request,copy)));}
    return response;
  }).catch(async()=>{
    const exact=await caches.match(request);
    if(exact)return exact;
    if(request.mode==='navigate')return caches.match(new URL('./index.html',self.registration.scope));
    return Response.error();
  }));
});
