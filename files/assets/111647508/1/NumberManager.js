var NumberManager = pc.createScript('numberManager');

// initialize code called once per entity.
NumberManager.attributes.add('firstNumber', { type : 'entity'});
NumberManager.attributes.add('secondNumber', { type : 'entity'});
NumberManager.attributes.add('numberEntity', { type : 'entity'});

NumberManager.prototype.initialize = function() {
    // initialize the numbers first time.
    this.generateNumbersEven();

    // initialize the numbers after collision.
    // above the middle if count == even. Under the middle if count == odd.
    this.app.on('NumberManager:generateNewNumbersEven',this.generateNumbersEven,this);
    this.app.on('NumberManager:generateNewNumbersOdd',this.generateNumbersOdd,this);
};

// downside the middle of the board if count == odd.
NumberManager.prototype.generateNumbersOdd = function() {
    // unenabale all children from earlier multiplication.
    this.entity.children.forEach(elem => (elem.enabled = false));
    this.numberEntity.enabled = false;

    // generate number used under multiplication.
    this.firstNumber.element.text = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    this.secondNumber.element.text = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

    // intialize numbers before each round. First number initializer is the solution.
    for(var i = 0; i < 3; i++){
        var posX = Math.random()*9-Math.random()*9;
        var posY = 1.5;
        var posZ = Math.random()*9;
        
        var number = this.numberEntity.clone();
            number.enabled = true;
            number.setPosition(posX,posY,posZ);
            if(i == 0){
                number.element.text = this.firstNumber.element.text * this.secondNumber.element.text;
            }
            else{
                number.element.text = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            }

        this.entity.addChild(number);
    }
};

// above the middle of the board if count == even.
NumberManager.prototype.generateNumbersEven = function() {
    // unenabale all children from earlier multiplication.
    this.entity.children.forEach(elem => (elem.enabled = false));
    this.numberEntity.enabled = false;
    
    // generate number used under multiplication.
    this.firstNumber.element.text = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
    this.secondNumber.element.text =  Math.floor(Math.random() * (10 - 0 + 1)) + 0;

    // intialize numbers before each round. First number initializer is the solution.
    for(var i = 0; i < 3; i++){
        var posX = Math.random()*9-Math.random()*9;
        var posY = 1.5;
        var posZ = -Math.random()*9;
        
        var number = this.numberEntity.clone();
            number.enabled = true;
            number.setPosition(posX,posY,posZ);
            if(i == 0){
                number.element.text = this.firstNumber.element.text * this.secondNumber.element.text;
            }
            else{
                number.element.text = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            }
        this.entity.addChild(number);
    }
};
