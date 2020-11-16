import Link from 'next/link'

function Post({ post }) {
  return (
    <div>
      <div className="post">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>

      <div>
        <Link href="/blog">
          <a>Back to Blog</a>
        </Link>
      </div>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://5f60d84490cf8d00165586ea.mockapi.io/posts')
  const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => `/posts/${post.id}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://5f60d84490cf8d00165586ea.mockapi.io/posts/${params.id}`)
  const post = await res.json()

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post
