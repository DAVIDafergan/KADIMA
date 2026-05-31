
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&family=Source+Sans+3:wght@300;400&family=Oswald:wght@400;600&display=swap');
  #hs-root { background:#05040a; border-radius:12px; overflow:hidden; font-family:'Source Sans 3',sans-serif; position:relative; min-height:520px; display:flex; flex-direction:column; }
  #hs-bg { position:absolute; inset:0; transition:background 1.4s ease; pointer-events:none; }
  #hs-grain { position:absolute; inset:0; opacity:.04; pointer-events:none; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); background-size:180px; mix-blend-mode:overlay; }
  #hs-eyebrow { text-align:center; padding:28px 0 0; font-family:'Oswald',sans-serif; font-size:10px; letter-spacing:.42em; color:rgba(229,178,93,.55); text-transform:uppercase; position:relative; z-index:2; }
  #hs-stage { display:flex; align-items:center; justify-content:center; flex:1; gap:0; padding:16px 32px 8px; position:relative; z-index:2; }
  #hs-text { width:48%; padding-right:32px; }
  #hs-helmet-area { width:52%; display:flex; align-items:center; justify-content:center; position:relative; min-height:300px; }
  #hs-num { font-family:'Playfair Display',serif; font-weight:900; font-size:80px; line-height:1; letter-spacing:-.03em; opacity:.14; transition:color .8s; margin-bottom:12px; }
  #hs-line { height:1px; margin-bottom:16px; transition:background .8s; }
  #hs-heb { font-size:15px; color:rgba(255,255,255,.22); margin-bottom:6px; letter-spacing:.06em; }
  #hs-title { font-family:'Playfair Display',serif; font-weight:900; font-size:clamp(22px,3.5vw,38px); color:#fff; line-height:1.05; letter-spacing:-.02em; margin-bottom:12px; }
  #hs-meta { display:flex; align-items:center; gap:10px; margin-bottom:18px; }
  #hs-meta-line { width:20px; height:1px; background:rgba(229,178,93,.4); }
  #hs-meta-txt { font-family:'Oswald',sans-serif; font-size:9px; letter-spacing:.28em; color:rgba(255,255,255,.38); text-transform:uppercase; }
  #hs-desc { font-size:13px; font-weight:300; color:rgba(255,255,255,.58); line-height:1.7; max-width:340px; margin-bottom:22px; }
  #hs-progress { display:flex; gap:6px; margin-bottom:20px; }
  .hs-bar { height:2px; flex:1; background:rgba(255,255,255,.1); border-radius:2px; overflow:hidden; cursor:pointer; }
  .hs-bar-fill { height:100%; width:0%; border-radius:2px; }
  #hs-cta { font-family:'Oswald',sans-serif; font-size:10px; letter-spacing:.24em; text-transform:uppercase; color:rgba(255,255,255,.38); background:none; border:none; cursor:pointer; display:flex; align-items:center; gap:8px; padding:0; transition:color .3s; }
  #hs-cta:hover { color:rgba(229,178,93,.9); }
  #hs-img-wrap { position:relative; max-width:300px; width:100%; }
  #hs-helmet-img { width:100%; height:auto; object-fit:contain; position:relative; z-index:2; transition:opacity .3s; filter:drop-shadow(0 30px 60px rgba(0,0,0,.75)); }
  #hs-shadow { position:absolute; bottom:-4%; left:15%; right:15%; height:10%; border-radius:50%; filter:blur(18px); z-index:1; transition:background .8s; }
  #hs-spotlight { position:absolute; inset:0; pointer-events:none; border-radius:50%; transition:background 1.4s; }
  #hs-caption { text-align:center; padding:0 0 20px; font-family:'Oswald',sans-serif; font-size:9px; letter-spacing:.38em; color:rgba(255,255,255,.18); text-transform:uppercase; position:relative; z-index:2; }
  #hs-arrows { position:absolute; inset:0; display:flex; align-items:center; justify-content:space-between; padding:0 4px; pointer-events:none; z-index:5; }
  .hs-arrow { width:32px; height:32px; border-radius:50%; border:.5px solid rgba(255,255,255,.15); background:rgba(0,0,0,.3); display:flex; align-items:center; justify-content:center; cursor:pointer; pointer-events:all; transition:border-color .3s,background .3s; }
  .hs-arrow:hover { border-color:rgba(255,255,255,.35); background:rgba(255,255,255,.08); }
  .hs-fade { transition:opacity .7s, transform .7s; }
  .hs-out-left { opacity:0; transform:translateX(-40px) rotate(-8deg); }
  .hs-out-right { opacity:0; transform:translateX(40px) rotate(8deg); }
  .hs-in { opacity:1; transform:translateX(0) rotate(0deg); }
</style>
<div id="hs-root">
  <div id="hs-bg"></div>
  <div id="hs-grain"></div>
  <div id="hs-eyebrow">Helmets 4 Chayalim — The Collection</div>
  <div id="hs-stage">
    <div id="hs-text">
      <div id="hs-num">01</div>
      <div id="hs-line"></div>
      <div id="hs-heb"></div>
      <div id="hs-title"></div>
      <div id="hs-meta"><div id="hs-meta-line"></div><div id="hs-meta-txt"></div></div>
      <div id="hs-desc"></div>
      <div id="hs-progress">
        <div class="hs-bar" data-i="0"><div class="hs-bar-fill" id="bar0"></div></div>
        <div class="hs-bar" data-i="1"><div class="hs-bar-fill" id="bar1"></div></div>
        <div class="hs-bar" data-i="2"><div class="hs-bar-fill" id="bar2"></div></div>
      </div>
      <button id="hs-cta">Read the Full Story <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
    </div>
    <div id="hs-helmet-area">
      <div id="hs-spotlight"></div>
      <div id="hs-img-wrap">
        <div id="hs-shadow"></div>
        <img id="hs-helmet-img" class="hs-fade hs-in" src="" alt="" draggable="false" />
      </div>
      <div id="hs-arrows">
        <div class="hs-arrow" id="hs-prev"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <div class="hs-arrow" id="hs-next"><svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      </div>
    </div>
  </div>
  <div id="hs-caption"></div>
</div>
<script>
const H = [
  { name:'Rimon', heb:'רימון', artist:'Michal Ben David', medium:'Oil on Military Helmet', year:'2024', desc:'The pomegranate — ancient symbol of abundance and the 613 commandments — painted across a retired combat helmet. Where destruction once lived, life now blooms.', accent:'#C0392B', light:'rgba(192,57,43,0.13)', src:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Pomegranate_fruit_-_whole_and_piece_with_arils.jpg/320px-Pomegranate_fruit_-_whole_and_piece_with_arils.jpg' },
  { name:'Where Have All\nthe Flowers Gone', heb:'אן פרחו כל הפרחים', artist:'Naomi Shemer', medium:'Acrylic on Military Helmet', year:'2024', desc:'Poppies and daisies cascade across steel — a question, a lament, a prayer. Named after the timeless song, this helmet speaks for those who cannot.', accent:'#E67E22', light:'rgba(230,126,34,0.13)', src:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Papaver_rhoeas_close.jpg/320px-Papaver_rhoeas_close.jpg' },
  { name:'The Creation', heb:'בראשית', artist:'Yael Katz', medium:'Mixed Media on Military Helmet', year:'2023', desc:"Michelangelo's divine touch reimagined on a soldier's helmet. Between God's hand and Adam's — a soldier's outstretched arm, reaching toward something greater than war.", accent:'#BDC3C7', light:'rgba(189,195,199,0.1)', src:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/320px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg' }
];
let cur = 0, timer = null, animating = false;
const DUR = 4000;

function setSlide(idx, dir) {
  if (animating) return;
  animating = true;
  const h = H[idx];
  const img = document.getElementById('hs-helmet-img');
  const outClass = dir >= 0 ? 'hs-out-left' : 'hs-out-right';
  img.classList.remove('hs-in');
  img.classList.add(outClass);
  setTimeout(() => {
    img.src = h.src;
    img.classList.remove(outClass);
    img.classList.add(dir >= 0 ? 'hs-out-right' : 'hs-out-left');
    requestAnimationFrame(() => requestAnimationFrame(() => {
      img.classList.remove('hs-out-right','hs-out-left');
      img.classList.add('hs-in');
      animating = false;
    }));
  }, 380);
  document.getElementById('hs-bg').style.background = `radial-gradient(ellipse 65% 65% at 32% 50%, ${h.light} 0%, transparent 68%), radial-gradient(ellipse 40% 40% at 78% 22%, rgba(229,178,93,0.05) 0%, transparent 60%), linear-gradient(160deg,#0a0810 0%,#05040a 100%)`;
  document.getElementById('hs-spotlight').style.background = `radial-gradient(ellipse 55% 55% at 50% 55%, ${h.light} 0%, transparent 70%)`;
  document.getElementById('hs-shadow').style.background = `radial-gradient(ellipse at center, ${h.accent}55 0%, transparent 70%)`;
  document.getElementById('hs-num').textContent = String(idx+1).padStart(2,'0');
  document.getElementById('hs-num').style.color = h.accent;
  document.getElementById('hs-line').style.background = `linear-gradient(to right, ${h.accent}55, transparent)`;
  document.getElementById('hs-heb').textContent = h.heb;
  document.getElementById('hs-title').textContent = h.name;
  document.getElementById('hs-meta-txt').textContent = `${h.artist} · ${h.medium} · ${h.year}`;
  document.getElementById('hs-desc').textContent = h.desc;
  document.getElementById('hs-caption').textContent = `${idx+1} of ${H.length} · Helmets 4 Chayalim Collection`;
  H.forEach((_,i) => {
    const fill = document.getElementById('bar'+i);
    fill.style.transition = 'none';
    fill.style.width = i < idx ? '100%' : '0%';
    fill.style.background = h.accent;
  });
  if (timer) clearInterval(timer);
  const fill = document.getElementById('bar'+idx);
  fill.style.transition = `width ${DUR/1000}s linear`;
  requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = '100%'; }));
  timer = setInterval(() => { cur = (cur+1)%H.length; setSlide(cur, 1); }, DUR);
}

document.getElementById('hs-next').onclick = () => { if(timer)clearInterval(timer); cur=(cur+1)%H.length; setSlide(cur,1); };
document.getElementById('hs-prev').onclick = () => { if(timer)clearInterval(timer); cur=(cur-1+H.length)%H.length; setSlide(cur,-1); };
document.querySelectorAll('.hs-bar').forEach(b => b.onclick = () => { const i=+b.dataset.i; if(timer)clearInterval(timer); setSlide(i, i>cur?1:-1); cur=i; });
document.getElementById('hs-helmet-img').onerror = function(){this.src='https://arifuld.org/wp-content/uploads/2025/01/Kadima-Concierge.jpg';};
setSlide(0, 1);
</script>
