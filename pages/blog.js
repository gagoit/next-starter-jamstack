import Link from 'next/link'
import style from'../css/blog.css'

// TODO: Need to fetch `posts` (by calling some API endpoint)
//       before this page can be pre-rendered.
function Blog({ posts }) {
  return (
    <div>
      <header className={style.header}>
        <h2>Blog</h2>
        <h3 className={style.header_h3}>The latest news</h3>
      </header>
      <ul className={style.posts}>
        {posts.map((post) => (
          <li key={post.id} className={style.post}>
            <Link href={`/posts/${post.id}`}>
              <a className={style.post_link}>{post.title}</a>
            </Link>
            <p className={style.post_created_at}>{post.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://5f60d84490cf8d00165586ea.mockapi.io/posts')
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog
