import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const MyComponent = (props) => {
  const { data } = useTina(props);

  return ( <>
    <h1>{data?.post?.title}</h1>
    <h2>{data?.post?.subtitle}</h2>
    <TinaMarkdown content={data?.post?.body}></TinaMarkdown>
    </>
  );
};
