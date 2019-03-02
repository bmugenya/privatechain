/* ==============  BLOCK CLASS ============
|   Class with a constructor for block     |
|  =======================================*/

class Block{
    constructor(data){     
        this.hash = "",
        this.height = 0,  
        this.body = data,
        this.time = 0,
        this.previousblockhash = ""
    }
}

/* ==============  BLOCKCHAIN CLASS ============
|   Class with a constructor for new block      |
|  ============================================*/

class Blockchain{
    constructor(){
        this.chain = [];
    }

    addblock(newBlock){
        this.chain.push(newBlock)
    }
}