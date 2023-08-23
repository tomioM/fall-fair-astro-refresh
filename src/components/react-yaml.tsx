import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export const MyComponent = (props) => {
  const { data } = useTina(props);

  return ( <>
      {console.log(data)}

    <h1>{data?.page?.heading}</h1>
    <TinaMarkdown content={data?.page?.description}></TinaMarkdown>
    </>
  );
};