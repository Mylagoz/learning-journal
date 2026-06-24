(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{title:`Blog one`,blogDate:`JUNE 18, 2026`,blogContent:`I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                     After several months of learning in the Frontend Developer Career Path.`,blogSrc:`blog-1.png`,alt:`A laptop on top of a desk`,id:1},{title:`Blog two`,blogDate:`JUNE 18, 2026`,blogContent:`I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                     After several months of learning in the Frontend Developer Career Path.`,blogSrc:`blog-2.png`,alt:`A hand holding a light bulb`,id:2},{title:`Blog three`,blogDate:`JUNE 18, 2026`,blogContent:`I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                     After several months of learning in the Frontend Developer Career Path.`,blogSrc:`blog-3.png`,alt:`Some random violet shapes`,id:3},{title:`Blog four`,blogDate:`JUNE 18, 2026`,blogContent:`I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                     After several months of learning in the Frontend Developer Career Path.`,blogSrc:`blog-4.png`,alt:`A laptop with a text on its screen saying 'A desing and develop experience that make people's lives simpler`,id:4},{title:`Blog five`,blogDate:`JUNE 18, 2026`,blogContent:`I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                     After several months of learning in the Frontend Developer Career Path.`,blogSrc:`blog-5.png`,alt:`A developer enviroment with some React-code on it`,id:5},{title:`Blog six`,blogDate:`JUNE 18, 2026`,blogContent:`I'm excited to start a new learning journey as a Scrimba Bootcamp student!
                     After several months of learning in the Frontend Developer Career Path.`,blogSrc:`blog-6.png`,alt:`A woman standing on the sand `,id:6}];function t(e){return e.map(e=>{let{title:t,blogDate:n,blogContent:r,blogSrc:i,alt:a,id:o}=e;return`
           <article class="blog-card">
              <img src="/images/${i}"  alt="${a}" class="card-img"/>
              <p class="card-info">${n}</p>
              <h3 class="card-title">${t}</h3>
              <p class="card-preview">${r}</p>
              <a href="./blog.html"  
                 class="card-link"
                 data-uuid=${o}
                 aria-label = "Read more about this"></a>
           </article>
           
           `}).join(``)}export{e as n,t};