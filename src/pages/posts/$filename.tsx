import React, { useEffect, useState } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { useParams } from 'umi';
import client from '../../../tina/__generated__/client';

const PostPage: React.FC = () => {
  const { filename } = useParams<{ filename: string }>();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await client.queries.post({
          relativePath: `${filename}.md`,
        });
        setPostData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filename]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{postData?.post.title}</h1>
      <TinaMarkdown content={postData?.post.body} />
    </div>
  );
};

export default PostPage;
