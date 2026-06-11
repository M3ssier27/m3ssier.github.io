
        const carStates={ };
        function slide(id,dir){
      if(!carStates[id])carStates[id]={idx:0};
        const car=document.getElementById(id);
        const n=car.querySelectorAll('.carousel-slide').length;
        carStates[id].idx=(carStates[id].idx+dir+n)%n;
        const i=carStates[id].idx;
        car.querySelector('.carousel-track').style.transform=`translateX(-${i * 100}%)`;
      car.querySelectorAll('.dot').forEach((d,j)=>d.classList.toggle('active',j===i));
    }
        function goTo(id,el){
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.p-nav a').forEach(a=>a.classList.remove('active'));
        if(el)el.classList.add('active');
    }
    document.querySelectorAll('.car-dots').forEach(dotsEl=>{
            dotsEl.querySelectorAll('.dot').forEach((dot, i) => {
                dot.addEventListener('click', function () {
                    const car = this.closest('.carousel');
                    const id = car.id;
                    if (!carStates[id]) carStates[id] = { idx: 0 };
                    const diff = i - carStates[id].idx;
                    if (diff !== 0) slide(id, diff);
                });
            });
    });