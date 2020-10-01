import React from "react";
import "./App.css";
import VideoCard from "./VideoCard";

function App() {
  return (
    <div className="App">
      <div className="app__top">
        {/* image at top - logo */}
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt=""
        />
        {/* Reels text */}
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        {/* Container of app__cideos scrollable container */}

        <VideoCard
          channel="juliusdein"
          avatarSrc="https://instagram.fkhi17-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72253822_2628018250596596_5530180438422716416_n.jpg?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_ohc=RtvfQg8yCHgAX_MKQkk&oh=9129b044d57c418100bacedc01612b51&oe=5F8D0D7B"
          song="Test Song - Sssss0nGs"
          url="https://instagram.fkhi17-1.fna.fbcdn.net/v/t50.2886-16/119742939_325218142121985_5635861293566568505_n.mp4?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=bcvi1ZAYjF0AX9PzRJ0&oe=5F78242C&oh=5ba5a47dbf7ab22e017e8b97fbf12fec"
          likes="950"
          shares="125"
        />
        <VideoCard
          channel="juliusdein"
          avatarSrc="https://instagram.fkhi17-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72253822_2628018250596596_5530180438422716416_n.jpg?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_ohc=RtvfQg8yCHgAX_MKQkk&oh=9129b044d57c418100bacedc01612b51&oe=5F8D0D7B"
          song="Test Song - Sssss0nGs"
          url="https://instagram.fkhi17-1.fna.fbcdn.net/v/t50.2886-16/119208030_336884411081075_349752167635843176_n.mp4?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=mH_HxqzzpyMAX99a12i&oe=5F787440&oh=1c3c34d03453b356b9bd6263ef76d7f2"
          likes="456"
          shares="326"
        />
        <VideoCard
          channel="juliusdein"
          avatarSrc="https://instagram.fkhi17-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72253822_2628018250596596_5530180438422716416_n.jpg?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_ohc=RtvfQg8yCHgAX_MKQkk&oh=9129b044d57c418100bacedc01612b51&oe=5F8D0D7B"
          song="Test Song - Sssss0nGs"
          url="https://instagram.fkhi17-1.fna.fbcdn.net/v/t50.2886-16/119782423_346361693390359_3649022414732019596_n.mp4?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=dQ09_fwJKjIAX--Yxd2&oe=5F78786B&oh=a0c88015d9c0d87fa54bbbe3a8358f05"
          likes="768"
          shares="159"
        />
        <VideoCard
          channel="juliusdein"
          avatarSrc="https://instagram.fkhi17-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72253822_2628018250596596_5530180438422716416_n.jpg?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_ohc=RtvfQg8yCHgAX_MKQkk&oh=9129b044d57c418100bacedc01612b51&oe=5F8D0D7B"
          song="Test Song - Sssss0nGs"
          url="https://instagram.fkhi17-1.fna.fbcdn.net/v/t50.2886-16/118772917_929697777511509_1686670071129428170_n.mp4?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=WB9uLBxNkxMAX-HPkur&oe=5F78A3F2&oh=f6220a625a5ad5e061a890e0c0bc588e"
          likes="980"
          shares="525"
        />
        <VideoCard
          channel="juliusdein"
          avatarSrc="https://instagram.fkhi17-1.fna.fbcdn.net/v/t51.2885-19/s150x150/72253822_2628018250596596_5530180438422716416_n.jpg?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_ohc=RtvfQg8yCHgAX_MKQkk&oh=9129b044d57c418100bacedc01612b51&oe=5F8D0D7B"
          song="Test Song - Sssss0nGs"
          url="https://instagram.fkhi17-1.fna.fbcdn.net/v/t50.2886-16/119077311_825156344889901_48600446038887434_n.mp4?_nc_ht=instagram.fkhi17-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=iuT7Q35b_-cAX9Z8Bcv&oe=5F7897DB&oh=99d1d4f74b09bcf965273a7061df1256"
          likes="550"
          shares="195"
        />
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
        {/* <Video /> */}
      </div>
    </div>
  );
}

export default App;
