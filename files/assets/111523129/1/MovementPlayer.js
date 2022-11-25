var MovementPlayer = pc.createScript('movementPlayer');

MovementPlayer.prototype.initialize = function() {
    
};

// Update code called every frame.
MovementPlayer.prototype.update = function(dt) {
    this.setMovement();
};

// Move the player.
MovementPlayer.prototype.setMovement = function(dt) {
    //Press pc.KEY_UP => UP.
    if(this.app.keyboard.isPressed(pc.KEY_UP)) {
        this.entity.rigidbody.applyForce(0,0,-10);
    }
    //Press pc.KEY_DOWN => DOWN.
    if(this.app.keyboard.isPressed(pc.KEY_DOWN)) {
        this.entity.rigidbody.applyForce(0,0,10);
    }

    //Press pc.KEY_RIGHT => RIGHT.
    if(this.app.keyboard.isPressed(pc.KEY_RIGHT)) {
        this.entity.rigidbody.applyForce(10,0,0);
    }
    //Press pc.KEY_LEFT => LEFT.
    if(this.app.keyboard.isPressed(pc.KEY_LEFT)) {
        this.entity.rigidbody.applyForce(-10,0,0);
    }
};