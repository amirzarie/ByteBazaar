require("dotenv").config();
require("./config/database");

const Item = require("./models/item");

(async function () {
  await Item.deleteMany({});
  const items = await Item.create([
    {
      name: "gramophone",
      email: "az-gramophone@gmail.com",
      path: "/3ditems/gramophone.glb",
      price: 1001,
      position: [-5.7, 8, 1.8],
      scale: [4, 4, 4],
      description:
        "Once upon a time, there was a gramophone named Sir Percival. He used to be a terrible magician, turning himself into a music player by accident. Now, whenever he played a record, the music came out all jumbled and distorted, making everyone burst into uncontrollable laughter. Sir Percival became a sensation, known as the king of musical comedy. His quirky spins and offbeat tunes brought joy to all who heard him, proving that even a failed magician can find success in the most unexpected ways.",
    },
    {
      name: "helmet",
      email: "az-helmet@gmail.com",
      path: "/3ditems/helmet.glb",
      price: 1010,
      position: [5.7, 8, 1.8],
      scale: [0.005, 0.005, 0.005],
      description:
        "In the midst of a fierce battle, there was a war helmet named Sir Clank-a-Lot. He had a peculiar quirk - every time he got struck by an enemy's weapon, he would emit a comical honking sound instead of the usual clang. Even the enemy couldn't help but crack a smile. Sir Clank-a-Lot became the mascot of the battlefield, spreading lightheartedness in the most intense moments. Who knew a war helmet could bring joy amidst chaos?",
    },
    {
      name: "microscope",
      email: "az-microscope@gmail.com",
      path: "/3ditems/microscope.glb",
      price: 111,
      position: [-3.5, 9, -4.8],
      scale: [1, 1, 1],
      description:
        'Once upon a time, there was a vintage microscope named Professor Zoom. He had an unusual knack for getting overly excited about everything he saw through his lenses. Whether it was a tiny amoeba or a minuscule dust particle, Professor Zoom would exclaim, "Eureka!" in the tiniest voice imaginable. His enthusiasm was infectious, and scientists and researchers would gather around just to witness his adorable reactions. With Professor Zoom around, even the most mundane specimens became a source of entertainment and laughter. Who knew a microscope could bring so much joy and wonder to the scientific world?',
    },
    {
      name: "pocket_watch",
      email: "az-pocket_watch@gmail.com",
      path: "/3ditems/pocket_watch.glb",
      price: 1111,
      position: [3.5, 8, -4.8],
      scale: [0.2, 0.2, 0.2],
      description:
        "Once upon a time, there was a vintage pocket watch named Tickles. Unlike regular pocket watches that took their time ticking away, Tickles had a mischievous streak. Every time someone checked the time, Tickles would play a little prank. Sometimes he would speed up and make time fly, leaving people wondering how they were suddenly late. Other times, he would slow down and make minutes feel like hours, causing frustration and impatience. Tickles loved the laughter and confusion his pranks created. He believed life was too serious, so he dedicated himself to adding a touch of whimsy to people's days. With Tickles in your pocket, you never knew if time was on your side or conspiring against you. It was all part of his hilarious game.",
    },
    {
      name: "tv",
      email: "az-tv@gmail.com",
      path: "/3ditems/tv.glb",
      price: 11010,
      position: [0, 8.5, 6],
      scale: [0.005, 0.005, 0.005],
      description:
        "Once upon a time, there was a vintage TV named Fizzles. Fizzles had a peculiar talent that made it the life of the party. Whenever it tuned into a channel, it had the power to transport people back in time to relive iconic moments from the past. One moment you could be dancing to disco tunes with bell-bottom pants, and the next moment you could find yourself grooving to the electric beats of the '80s. Fizzles loved to surprise its viewers, whisking them away to nostalgic eras and making them feel like time travelers. But there was a twist – sometimes Fizzles would glitch, causing people to get stuck in a particular era, much to their amusement and mild frustration. Whether it was witnessing the fashion faux pas of the '70s or rocking out to the hair metal bands of the '90s, Fizzles turned ordinary TV watching into a time-traveling adventure filled with laughter and fond memories.",
    },
  ]);

  console.log(items);

  process.exit();
})();
