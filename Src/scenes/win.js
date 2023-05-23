import Phaser from '../lib/phaser.js'

export default class win extends Phaser.Scene
{
    constructor()
    {
        super('win')
    }
    preload() 
    {


       this.load.image('button', 'assets/blue_button00.png')
    
    }
    create()
  {

//Button 

   const button = this.add.image(480, 480, 'button');
   
   button.setInteractive(); // Enable input events for the button

    // Add a pointerdown event listener to handle button click
    button.on('pointerdown',  () => {
        this.scene.start('Game');
    });

     // Add text to the button
     const buttonText = this.add.text(0, 0, 'Restart', {
        fontSize: '24px',
        fill: '#000000'
    });

    // Center the text within the button
    Phaser.Display.Align.In.Center(buttonText, button);

    // Make the text clickable as well
    buttonText.setInteractive();
    buttonText.on('pointerdown',  () => {
        this.scene.start('Game');
    });


   
    const width = this.scale.width
    const height = this.scale.height
    this.add.text(width * 0.5, height * 0.5, 'you are right \n web development is bad :)', {
        fontSize: 48
    })
    .setOrigin(0.5)

    
  }
}

