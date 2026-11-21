(function(){
  var btn=document.querySelector('.menu-btn'),list=document.querySelector('nav ul');
  if(btn&&list){btn.addEventListener('click',function(){var o=list.classList.toggle('open');btn.setAttribute('aria-expanded',o)})}
  var root=document.documentElement,t=document.querySelector('.theme-btn');
  try{var s=localStorage.getItem('theme');if(s)root.setAttribute('data-theme',s)}catch(e){}
  if(t){t.addEventListener('click',function(){
    var dark=root.getAttribute('data-theme')?root.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
    var n=dark?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}})}
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
  var f=document.getElementById('contact-form');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();
    var d=new FormData(f);
    location.href='mailto:your.email@example.com?subject='+encodeURIComponent('Portfolio message from '+d.get('name'))+'&body='+encodeURIComponent(d.get('message')+'\n\n'+d.get('email'));
  })}
})();
