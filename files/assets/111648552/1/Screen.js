var Screen = pc.createScript('screen');

// initialize code called once per entity.
Screen.attributes.add('countText', { type : 'entity' });
Screen.prototype.initialize = function() {
    this.counter = 0;

    // set count after collision.
    this.app.on('Screen:countText',this.setCountText,this);
    this.app.on('Screen:countTextNull',this.setCountTextNull,this);
};

// increace if colliding with correct solution.
Screen.prototype.setCountText = function() {
    this.counter++;
    this.countText.element.text = this.counter;
    this.entity.sound.play('Correct');
};

// set count = 0 if colliding with wrong solition.
Screen.prototype.setCountTextNull = function() {
    this.counter = 0;
    this.entity.sound.play('Wrong');
};
