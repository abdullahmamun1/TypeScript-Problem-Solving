# How the Four Pillars of OOP Reduce Complexity in Large TypeScript Projects

As applications grow, managing complexity becomes one of the biggest challenges for developers. OOP makes it easier to manage complexity. OOP is **Object-Oriented Programming**. OOP is built on four fundamental principles:

- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
  <br><br>These principles help developers to organize logic, reduce duplication and make large system easier to maintain.

## Abstraction

Abstraction is the process of hiding complex implementation details and showing only the essential features of an object to the user.
<br><br>

### For Example:

```Typescript
interface MediaPlayer {
    play():void
    pause(): void
    stop(): void
}
class VLCPlayer implements MediaPlayer {
    play(){
        console.log("Playing video");
    }
    pause(){
        console.log("Video paused");
    }
    stop(){
        console.log("Video stopped");
    }
}
class SpotifyPlayer implements MediaPlayer {
    play() {
        console.log("Playing music track");
    }
    pause() {
         console.log("Music paused");
    }
    stop() {
        console.log("Music stopped");
    }
}
```

When user calls:

```Typescript
const myPlayers: MediaPlayer[] = [
    new VLCPlayer(),
    new SpotifyPlayer()
];
myPlayers.forEach((player) => {
    player.play();
});

/*
Output:
"Playing video"
"Playing music track"
*/
```

It hides the implementation details from user, users don't need to understand the internal logic. It makes systems easier to use and extend.

## Encapsulation
