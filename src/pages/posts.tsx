import { PostConnection } from 'tina/__generated__/types';
import { Link, useClientLoaderData } from 'umi';
import client from '../../tina/__generated__/client';

type PostsLoader = {
  data: PostConnection;
};

export default function Posts() {
  const { data }: PostsLoader = useClientLoaderData();

  return (
    <div>
      Posts
      <ul>
        {data?.edges?.map((post) => (
          <li key={post?.node?.id}>
            <Link to={`/posts/${post?.node?._sys.filename}`}>
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
