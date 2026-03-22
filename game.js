const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  // Assets will go here
}

function create() {
  // Create platforms
  const platforms = this.physics.add.staticGroup();

  const groundPlatform = this.add.rectangle(400, 568, 800, 32, 0x00d084);
  this.physics.add.existing(groundPlatform, true);
  platforms.add(groundPlatform);

  const platform1 = this.add.rectangle(600, 400, 150, 20, 0x00d084);
  this.physics.add.existing(platform1, true);
  platforms.add(platform1);

  const platform2 = this.add.rectangle(50, 250, 150, 20, 0x00d084);
  this.physics.add.existing(platform2, true);
  platforms.add(platform2);

  const platform3 = this.add.rectangle(750, 220, 150, 20, 0x00d084);
  this.physics.add.existing(platform3, true);
  platforms.add(platform3);

  // Create player
  const player = this.add.rectangle(100, 450, 32, 48, 0x00d084);
  this.physics.add.existing(player);
  player.body.setBounce(0.2);
  player.body.setCollideWorldBounds(true);

  // Collisions
  this.physics.add.collider(player, platforms);

  // Store for update
  this.player = player;
  this.platforms = platforms;

  // Controls
  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  const { player, cursors } = this;

  if (cursors.left.isDown) {
    player.body.setVelocityX(-160);
  } else if (cursors.right.isDown) {
    player.body.setVelocityX(160);
  } else {
    player.body.setVelocityX(0);
  }

  if (cursors.up.isDown && player.body.touching.down) {
    player.body.setVelocityY(-330);
  }
}
