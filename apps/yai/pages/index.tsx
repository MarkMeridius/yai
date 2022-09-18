import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';

const images = ['barry.png', 'kangaroo.jpg'];

function TheImage() {
  const [imageIndex, setImageIndex] = useState(0);

  console.log('rerender TheImage');
  return (
    <>
      <button
        onClick={() =>
          setImageIndex((x) => (x === images.length - 1 ? 0 : x + 1))
        }
      >
        updated image {imageIndex}
      </button>
      <div className="flex justify-center m-8 w-full h-auto">
        <picture className="w-1/2">
          <img src={images[imageIndex]} alt="KANGAROO" className="w-full" />
        </picture>
      </div>
    </>
  );
}

const Input = () => {
  const [text, setText] = useState('');
  console.log('rerender Input');

  return (
    <div className="m-8">
      <div>{text}</div>
      <input
        onChange={(e) => setText(() => e.target.value)}
        type="text"
        className="h-8 w-72 bg-sky-100"
        placeholder={text}
      />
    </div>
  );
};

export function Index() {
  console.log('rerender index');
  return (
    <div className="flex items-center h-full flex-col text-sky-100">
      <Link href="/homepage">hello</Link>
      <div className=" m-8">YAImage Generation</div>
      <Input />
      <TheImage />
    </div>
  );
}

export default Index;
