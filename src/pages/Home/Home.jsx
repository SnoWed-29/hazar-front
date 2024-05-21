import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import backgroundImage from '../../assets/images/hazar-Back.webp'; // Import your background image

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
     height: '100vh',
    width: '100%',
    position: 'absolute',
    top: 0,
    display: 'flex',
    flexDirection: 'column',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Ensures content takes up the remaining space
    textAlign: 'center',
    padding: '10px 16px',
  },
};

export default function Home() {
  useEffect(() => {
    document.title = 'Hazar | Home'; // Set the desired page title here
  }, []);
  return (
    <div style={styles.container}>
      <Navbar color="text-white" />
      <div style={styles.content}>
        <h1 className="block text-2xl font-bold text-white sm:text-4xl">Éléganza Italiana</h1>
        <p className="mt-3 text-lg text-gray-300">
          Chez Hazar, nous vous invitons à découvrir une sélection exquise de vêtements inspirés de l'art de vivre italien
        </p>
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <a
            type="button"
            className="rounded border-2 border-white px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-white transition duration-300 ease-in-out hover:bg-black hover:bg-opacity-75 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            href="/categories"
          >
            L'Élégance à portée de clic
          </a>
        </div>
      </div>
    </div>
  );
}
