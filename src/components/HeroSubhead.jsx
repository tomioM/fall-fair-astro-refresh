import { useTina } from "tinacms/dist/react";

export const HeroSubhead = (props) => {
    const { data: { page } } = useTina(props);

    return (<p>{page.title}</p>);
}