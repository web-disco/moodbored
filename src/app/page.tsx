import Header from "./components/header";
import Card from "./components/card";
import Modal from "./components/modal";
import Footer from "./components/footer";

import { getData } from "./lib/archillect";

export default async function Home() {
  const images = await getData();
  return (
    <main className="container mx-auto px-5 lg:px-10">
      <Header />
      <section
        id="discover"
        className="relative grid my-10 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {images.map((image, index) => (
          <Card src={image.src} id={image.id} index={index} key={index} />
        ))}
      </section>
      <Footer />
      <Modal />
    </main>
  );
}
