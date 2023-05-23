import Phaser from '../lib/phaser.js'

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('Game')
    }
    preload() 
    {


       this.load.image('button', 'assets/blue_button00.png')
    
    }
    create()
  {

//Button 1

   const button = this.add.image(240, 480, 'button');
   
   button.setInteractive(); // Enable input events for the button

    // Add a pointerdown event listener to handle button click
    button.on('pointerdown', () => {
        this.scene.start('lose');
    });

     // Add text to the button
     const buttonText = this.add.text(0, 0, 'Yes', {
        fontSize: '24px',
        fill: '#000000'
    });

    // Center the text within the button
    Phaser.Display.Align.In.Center(buttonText, button);

    // Make the text clickable as well
    buttonText.setInteractive();
    buttonText.on('pointerdown', () => {
            this.scene.start('lose');
    });

//Button 2

const button2 = this.add.image(720, 480, 'button');
   
button2.setInteractive(); // Enable input events for the button

 // Add a pointerdown event listener to handle button click
 button2.on('pointerdown',() => {
    this.scene.start('win');
});

  // Add text to the button
  const buttonText2 = this.add.text(0, 0, 'NO', {
     fontSize: '24px',
     fill: '#000000'
 });

 // Center the text within the button
 Phaser.Display.Align.In.Center(buttonText2, button2);

 // Make the text clickable as well
 buttonText2.setInteractive();
 buttonText2.on('pointerdown', () => {
    this.scene.start('win');
});

   
    const width = this.scale.width
    const height = this.scale.height
    this.add.text(width * 0.5, height * 0.5, 'do you love web development :)?', {
        fontSize: 48
    })
    .setOrigin(0.5)

   // this.input.keyboard.once('keydown-SPACE', () => {
   //     this.scene.start('game')
   // })


    
  }
}

