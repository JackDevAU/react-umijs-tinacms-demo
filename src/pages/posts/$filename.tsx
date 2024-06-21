import { PostQuery } from 'tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { useClientLoaderData } from 'umi';
import client from '../../../tina/__generated__/client';

const PostPage = () => {
  const { data: postData } = useClientLoaderData();

  const { data } = useTina<PostQuery>({ ...postData });
  const post = data?.post;

  return (
    <div>
      <h1 data-tina-field={tinaField(post, 'title')}>{post?.title}</h1>
      <TinaMarkdown
        data-tina-field={tinaField(post, 'body')}
        content={post?.body}
      />
    </div>
  );
};

export default PostPage;

export async function clientLoader() {
  //? Note - Not sure if this is the best way to get this data?
  //! This will need to be modified to work with nested routes
  const pathArray = window.location.pathname.split('/');
  const filename = pathArray[pathArray.length - 1];

  const data = await client.queries.post({
    relativePath: `${filename}.md`,
  });

  return { ...data };
}
