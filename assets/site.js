(function(){
var d=document,h=d.querySelector('.hdr');
function onScroll(){if(!h)return;var t=(d.querySelector('[data-dark]')||{}).offsetHeight||0;h.classList.toggle('solid',scrollY>Math.max(40,t-80));}
addEventListener('scroll',onScroll,{passive:true});onScroll();
var mm=d.getElementById('mm');d.querySelectorAll('[data-menu]').forEach(function(b){b.addEventListener('click',function(){mm.classList.toggle('open');d.body.style.overflow=mm.classList.contains('open')?'hidden':''})});
// split statement into words
d.querySelectorAll('[data-words]').forEach(function(el){
  var walk=function(n){Array.from(n.childNodes).forEach(function(c){if(c.nodeType==3){var f=d.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(w){if(/^\s+$/.test(w)||!w){f.appendChild(d.createTextNode(w))}else{var s=d.createElement('span');s.className='w';s.textContent=w;f.appendChild(s)}});n.replaceChild(f,c)}else walk(c)})};walk(el);
  var ws=el.querySelectorAll('.w');
  var upd=function(){var r=el.getBoundingClientRect(),vh=innerHeight,p=(vh*.85-r.top)/(r.height+vh*.35);p=Math.max(0,Math.min(1,p));var n=Math.round(p*ws.length);ws.forEach(function(w,i){w.classList.toggle('lit',i<n)})};
  addEventListener('scroll',upd,{passive:true});upd();
});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});d.querySelectorAll('.rv,.split').forEach(function(el){io.observe(el)});}
else d.querySelectorAll('.rv,.split').forEach(function(el){el.classList.add('in')});
// gallery arrows
d.querySelectorAll('[data-track]').forEach(function(w){var t=w.querySelector('.track');w.querySelectorAll('[data-dir]').forEach(function(b){b.addEventListener('click',function(){t.scrollBy({left:+b.dataset.dir*t.clientWidth*.6,behavior:'smooth'})})});
  var down=false,sx,sl;t.addEventListener('mousedown',function(e){down=true;sx=e.pageX;sl=t.scrollLeft;t.style.scrollSnapType='none'});addEventListener('mouseup',function(){if(down){down=false;t.style.scrollSnapType=''}});t.addEventListener('mousemove',function(e){if(down){e.preventDefault();t.scrollLeft=sl-(e.pageX-sx)}});});
// book tilt
d.querySelectorAll('.bookstage').forEach(function(s){var b=s.querySelector('.book');if(matchMedia('(hover:hover)').matches){s.addEventListener('mousemove',function(e){var r=s.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.style.transform='rotateY('+(x*30-10)+'deg) rotateX('+(-y*16)+'deg) translateZ(20px)'});s.addEventListener('mouseleave',function(){b.style.transform=''})}});
})();
