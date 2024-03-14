import Link from 'next/link';
import styles from './homepage.module.css';

export default function Home() {
  return (
    <div>
      <Link href="/">
        <h1>This is header</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, fugit
        laudantium incidunt blanditiis cum sequi recusandae enim perspiciatis
        fugiat amet assumenda, deleniti nemo laborum magnam nisi omnis maxime
        saepe modi! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quo, fugit laudantium incidunt blanditiis cum sequi recusandae enim
        perspiciatis fugiat amet assumenda, deleniti nemo laborum magnam nisi
        omnis maxime saepe modi! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quo, fugit laudantium incidunt blanditiis cum sequi
        recusandae enim perspiciatis fugiat amet assumenda, deleniti nemo
        laborum magnam nisi omnis maxime saepe modi!
      </Link>
    </div>
  );
}
