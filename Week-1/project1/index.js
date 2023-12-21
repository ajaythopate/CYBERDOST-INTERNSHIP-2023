//Fetch blogs from the API

function fetchBlogs() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const blogesContainer = document.getElementById('blogsContainer');
            blogsContainer.innerHTML = '';

            data.forEach(blog => {
                const blogCard = document.createElement('div');
                blogCard.classList.add('blogCard');

                const blogTitle = document.createElement('h2');
                blogTitle.textContent = blog.title;

                const blogContent = document.createElement('p');
                blogContent.textContent = blog.body;


                const deletButton = document.createElement('button');
                deletButton.textContent = 'Delete';
                deletButton.classList.add('deleteButton');

                blogCard.appendChild(blogTitle);
                blogCard.appendChild(blogContent);
                blogCard.appendChild(deletButton);

                blogesContainer.appendChild(blogCard);
            });
        });
}

fetchBlogs();