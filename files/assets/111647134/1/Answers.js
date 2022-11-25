var Answers = pc.createScript('answers');

// initialize code called once per entity.
Answers.attributes.add('firstNumber', { type : 'entity'});
Answers.attributes.add('secondNumber', { type : 'entity'});
Answers.attributes.add('countText', { type : 'entity'});
Answers.prototype.initialize = function() {
    this.entity.collision.on('triggerenter',this.onCollision,this);
};

// update after collision.
Answers.prototype.onCollision = function(event) {
    // check if colliding with the solution. If not set count = 0.
    if(this.firstNumber.element.text*this.secondNumber.element.text != this.entity.element.text){
        this.countText.element.text = 0;
        this.app.fire('Screen:countTextNull');
    }
    // increase count if colliding with the solution
    else {
        this.app.fire('Screen:countText');
    }

    // generate new numbers.
    // alternate between upside and downside of the board.
    if(this.countText.element.text % 2 == 1){
        this.app.fire('NumberManager:generateNewNumbersOdd');
    }
    else {
        this.app.fire('NumberManager:generateNewNumbersEven');
    }
};