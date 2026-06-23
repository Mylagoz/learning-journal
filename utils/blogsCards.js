export default function getBlogsCards (blogs){
      
    const cardsHtml =  blogs.map(blog=>{
        const {title ,blogDate , blogContent , blogSrc , alt , id } = blog
           return `
           <article class="blog-card">
              <img src="../images/${blogSrc}"  alt="${alt}" class="card-img"/>
              <p class="card-info">${blogDate}</p>
              <h3 class="card-title">${title}</h3>
              <p class="card-preview">${blogContent}</p>
              <a href="./blog.html"  
                 class="card-link"
                 data-uuid=${id}
                 aria-label = "Read more about this"></a>
           </article>
           
           `
    })

    return cardsHtml.join('')

}