import { Link, useClientLoaderData } from 'umi';
import client from '../../tina/__generated__/client';

export default function Posts() {
  const { data } = useClientLoaderData();

  return (
    <div>
      Posts
      <ul>
        {data?.edges?.map((post) => (
          <li key={post?.node.id}>
            <Link to={`/posts/${post?.node._sys.filename}`}>
              {post?.node?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function clientLoader() {
  const { data } = await client.queries.postConnection();

  const posts = data.postConnection;
  return posts;
}
