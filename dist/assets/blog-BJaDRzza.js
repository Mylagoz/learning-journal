import{n as e,t}from"./blogsCards-i25BFudZ.js";/* empty css              */var n=document.querySelector(`.blog`),r=JSON.parse(localStorage.getItem(`renderId`));function i(t,n){let i=t.findIndex(e=>Number(e.id)===Number(r)),a=[];for(let n=1;n<=3;n++){let r=(i+n)%t.length;a.push(e[r])}return a}var a=t(i(e,r));document.body.addEventListener(`click`,function(e){e.target.dataset.uuid&&localStorage.setItem(`renderId`,JSON.stringify(e.target.dataset.uuid))});function o(t){let i=e.find(e=>Number(e.id)===Number(r));n.innerHTML=`
   <section class="blog-info text-container">
     <span>JULY 23, 2022</span>
     <h1>My new journey as a bootcamp student.</h1>
     <p>After several months of learning in the Frontend Developer Career Path,
      I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
  </section>
  <section class="blog-img">
    <img src="/images/${i.blogSrc}" alt="${i.alt}" />
  </section>
  <section class=blog-main-content text-container>
   <article>
     <h3>How I stay committed to learning</h3>
     <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning,
      then try to create simple projects using what I learned or work new techniques into existing projects.</p>
     <p>While that was fun, I felt like it would be helpful to share what
       I was learning and most things about my journey with the world. </p>
   </article>
   <article>
    <h3>How I got started</h3>
    <p>I started simple and gradually grew my learning journal site. I would take notes about what I was learning. After each learning session,
     I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.</p>
    <p>That helped me grok what I was learning, and I realized that posting my learning summaries was also helping others learn and stay motivated.</p>
   </article>
  </section>
  <section class="main-content">
   ${a}
  </section>
 
 `}o();