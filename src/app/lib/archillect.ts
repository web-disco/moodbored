import { parse } from "node-html-parser";
import { ImageProps } from "../interfaces/ImageProps";

export const getData = async () => {
  let images: ImageProps[] = [];

  const res = await fetch("https://archillect.com/archive");
  const text = await res.text();

  const doc = parse(text);
  const posts = doc.querySelectorAll(".post").slice(0, 53);

  posts.forEach((post: HTMLDivElement) => {
    const imageElement = post.querySelector("img") as HTMLImageElement;
    const id = post.querySelector(".postid")?.innerHTML as string;
    const src = imageElement.getAttribute("src") as string;

    if (!src.includes("_75sq")) return;

    images.push({
      src: src.replace("_75sq", "_500"),
      id,
    });
  });

  return images;
};
