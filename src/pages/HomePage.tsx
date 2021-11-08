import fs from 'fs';
import path from 'path';
import { useEffect, useState } from 'react';
import '../renderer/App.css';
import icon from '../icons/house-solid.svg';
import briefcase from '../icons/briefcase-solid.svg';
import download from '../icons/download-solid.svg';
import film from '../icons/film-solid.svg';
import image from '../icons/image-solid.svg';
import music from '../icons/music-solid.svg';
import trash from '../icons/trash-solid.svg';

export default function HomePage() {
  const [filesInfo, setFileInfo] = useState<string[]>([]);
  const directoryPath: string = path.join(__dirname, 'Documents');

  useEffect(
    function () {
      console.log('ddfdf');
      fs.readdir(directoryPath, function (err, files) {
        if (err) {
          console.log(err);
        }
        setFileInfo(files);
        files.forEach(function (file) {
          console.log(file);
        });
      });
    },
    [directoryPath]
  );

  useEffect(
    function () {
      console.log(filesInfo);
    },
    [filesInfo]
  );

  return (
    <div className="HomePage">
      <header> Header </header>
      <aside className="left-side-bar">
        <ol>
          <li>
            <img style={{ width: 24, height: 24 }} src={icon} alt="icon" />
            <a href="/Home"> Home </a>
          </li>

          <li>
            <img style={{ width: 24, height: 24 }} src={briefcase} alt="icon" />
            <a href="/Documents"> Documents </a>
          </li>

          <li>
            <img style={{ width: 24, height: 24 }} src={download} alt="icon" />
            <a href="/Downloads"> Downloads </a>
          </li>
          <li>
            <img style={{ width: 24, height: 24 }} src={film} alt="icon" />
            <a href="/Videos"> Videos </a>
          </li>
          <li>
            <img style={{ width: 24, height: 24 }} src={image} alt="icon" />
            <a href="/Pictures"> Pictures </a>
          </li>
          <li>
            <img style={{ width: 24, height: 24 }} src={music} alt="icon" />
            <a href="/Music"> Music </a>
          </li>
          <li>
            <img style={{ width: 24, height: 24 }} src={trash} alt="icon" />
            <a href="/Trash"> Trash </a>
          </li>
        </ol>
      </aside>
      <main>
        {' '}
        <h3> Main content </h3>
      </main>

      <aside className="right-side-bar">
        <h3> right side bar </h3>
      </aside>
      <footer> Footer content </footer>
    </div>
  );
}
