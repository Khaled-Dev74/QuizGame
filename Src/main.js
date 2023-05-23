import Phaser from './lib/phaser.js'
import Game from './scenes/Game.js'
import lose from './scenes/lose.js'
import win from './scenes/win.js'

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1080,
    height: 720,
    scene: [Game,lose,win],

})