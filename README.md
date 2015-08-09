# sfx.js
A little JS module to play sounds with the Web Audio API, because it's harder than it should be.

##Usage

Include sfx.js on your page, then:

```
sfx.add('some sound effect name', { path: 'path/to/sound.mp3' });
sfx.play('some sound effect name');
```

You can adjust the gain as well:

```
sfx.add('some sound effect name', { path: 'path/to/sound.mp3', gain: 0.5 });
sfx.play('some sound effect name'); //now it plays at half gain
```

