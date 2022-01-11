import NodeRSA from "https://dev.jspm.io/node-rsa";
import { createHash } from 'https://deno.land/std/hash/mod.ts';

const RSA = new NodeRSA()

function hash(text, alg='sha256') {
    const h = createHash(alg)
    h.update(text)
    return h.toString()
}

class Transaction {
  sender
  receiver
  amounts
  fee
  message

  constructor(sender, receiver, amounts, fee, message) {
    this.sender = sender
    this.receiver = receiver
    this.amounts = amounts
    this.fee = fee
    this.message = message
  }
}

class Block {
  previousHash
  n
  hash
  difficulty
  nonce
  timestamp
  transactions//:Array<Transaction>
  miner
  minerRewards

  constructor(previousHash, n, difficulty, miner, minerRewards) {
    this.previousHash = previousHash
    this.n = n
    this.hash = ''
    this.difficulty = difficulty
    this.nonce = 0
    this.timestamp = Date.now()
    this.transactions = []
    this.miner = miner
    this.minerRewards = minerRewards
  }
}


class BlockChain{
  adjustDifficultyBlocks
  difficulty
  blockTime
  minerRewards
  blockLimitation // Max pendingTransactions 
  chain//:Array<Block>
  pendingTransactions//:Array<Transaction>

  constructor(){
    this.adjustDifficultyBlocks = 5
    this.difficulty = 3
    this.blockTime = 30
    this.minerRewards = 10
    this.blockLimitation = 4
    this.chain = []
    this.pendingTransactions = []
  }

  async createGenesisBlock(){
    console.log("Creating genesis block...")
    const newBlock = new Block('Hello World!', this.difficulty, 'Austin', this.minerRewards)
    newBlock.hash = await this.getHash(newBlock, 0)
    this.chain.push(newBlock)
  }

  transactionToString(transaction){
    const transactionDict = {
        'sender': transaction.sender,
        'receiver': transaction.receiver,
        'amounts': transaction.amounts,
        'fee': transaction.fee,
        'message': transaction.message
    }
    return JSON.stringify(transactionDict)
  }

  getTransactionsString(block){
    let transaction_str = ''
    block.transactions.forEach(tx=>{
        transaction_str += this.transactionToString(tx)
    })
    return transaction_str
  }

  async getHash(block, nonce){
    const h = 
      await hash((
        block.previousHash
        + block.timestamp
        + this.getTransactionsString(block)
        + nonce.toString()
      ))
    return h
  }
  
  addTransactionToBlock(block){
    // Get the transaction with highest fee by block_limitation
    this.pendingTransactions.sort(function(a, b){
      return b.fee - a.fee;// in reverse order
    })
    let transcationAccepted//:Array<Transaction>
    if (this.pendingTransactions.length > this.blockLimitation){
      transcationAccepted = this.pendingTransactions.slice(0, this.blockLimitation)
      this.pendingTransactions = this.pendingTransactions.slice(this.blockLimitation, this.pendingTransactions.length)
      block.transactions = transcationAccepted
    } else {
      transcationAccepted = this.pendingTransactions
      this.pendingTransactions = []
      block.transactions = transcationAccepted
    }
  }

  async mineBlock(miner){
    const start = Date.now()
    const lastBlock = this.chain[this.chain.length-1]
    console.log(lastBlock)
    let timeConsumed = 0
    if (this.pendingTransactions.length > this.blockLimitation/2) {
      const newBlockLeft = new Block(lastBlock.hash, 1, this.difficulty, miner, this.minerRewards)
      const newBlockRight = new Block(lastBlock.hash, 2, this.difficulty, miner, this.minerRewards)
      
      // Left
      this.addTransactionToBlock(newBlockLeft)
      newBlockLeft.previousHash = lastBlock.hash
      newBlockLeft.difficulty = this.difficulty
      newBlockLeft.hash = await this.getHash(newBlockLeft, newBlockLeft.nonce)
  
      while (newBlockLeft.hash.slice(0, this.difficulty) !== '0'.repeat(this.difficulty)){
          newBlockLeft.nonce += 1
          newBlockLeft.hash = await this.getHash(newBlockLeft, newBlockLeft.nonce)
      }
  
      timeConsumed = Math.round((Date.now() - start))
      console.log(`Hash found: ${newBlockLeft.hash} @ difficulty ${this.difficulty}, time cost: ${timeConsumed}`)
      this.chain.push(newBlockLeft)

      // Right
      this.addTransactionToBlock(newBlockRight)
      newBlockRight.previousHash = lastBlock.hash
      newBlockRight.difficulty = this.difficulty
      newBlockRight.hash = await this.getHash(newBlockRight, newBlockRight.nonce)
  
      while (newBlockRight.hash.slice(0, this.difficulty) !== '0'.repeat(this.difficulty)){
          newBlockRight.nonce += 1
          newBlockRight.hash = await this.getHash(newBlockRight, newBlockRight.nonce)
      }
  
      timeConsumed = Math.round((Date.now() - start))
      console.log(`Hash found: ${newBlockRight.hash} @ difficulty ${this.difficulty}, time cost: ${timeConsumed}`)
      this.chain.push(newBlockRight)
    } else {
      const newBlock = new Block(lastBlock.hash, 0, this.difficulty, miner, this.minerRewards)

      this.addTransactionToBlock(newBlock)
      newBlock.previousHash = lastBlock.hash
      newBlock.difficulty = this.difficulty
      newBlock.hash = await this.getHash(newBlock, newBlock.nonce)
  
      while (newBlock.hash.slice(0, this.difficulty) !== '0'.repeat(this.difficulty)){
          newBlock.nonce += 1
          newBlock.hash = await this.getHash(newBlock, newBlock.nonce)
      }
  
      timeConsumed = Math.round((Date.now() - start))
      console.log(`Hash found: ${newBlock.hash} @ difficulty ${this.difficulty}, time cost: ${timeConsumed}`)
      this.chain.push(newBlock)
    }
  }

  adjustDifficulty(){
    // if (this.chain.length % this.adjustDifficultyBlocks != 1){
    //     return this.difficulty 
    // } else 
    if (this.chain.length <= this.adjustDifficultyBlocks){
        return this.difficulty
    } else{
        const start = this.chain[-1*this.adjustDifficultyBlocks].timestamp
        const finish = this.chain[-1].timestamp
        const averageTimeConsumed = Math.round((finish - start) / (this.adjustDifficultyBlocks))
        
        if (averageTimeConsumed > this.blockTime){
          console.log(`Average block time:${averageTimeConsumed}. Low down the difficulty`)
          this.difficulty -= 1
        } else{
          console.log(`Average block time:${averageTimeConsumed}. High up the difficulty`)
          this.difficulty += 1
        }
                
    }
  }

  getBalance(account){
    let balance = 0
    for(var i=0; i<this.chain.length; i++){
      const block = this.chain[i]
      // Check miner reward
      let miner = false
      if (block.miner == account){
        miner = true
        balance += block.minerRewards
      }
      block.transactions.forEach((tx=>{
        if (miner){
            balance += tx.fee
        }
        if (tx.sender == account){
          balance -= tx.amounts
          balance -= tx.fee
        }
        else if (tx.receiver == account){
            balance += tx.amounts
        }
          
      }))
      }
        
    return balance
  }
  
  async verifyBlockchain(){
    let previousHash = ''
    for (var i=0; i<this.chain.length; i++){
        const block = this.chain[i]
        if (await this.getHash(block, block.nonce) != block.hash){
            console.log("Error: Hash not matched!")
            return false
        }
        // else if (previousHash != block.previousHash){
        //     console.log("Error: Hash not matched to previous_hash")
        //     return false
        // }            
        previousHash = block.hash
    }
    console.log("Hash correct!")
    return true
  }

  async generateAddress(){

    console.log('creating wallet...')
    RSA.generateKeyPair(2048)
    let privateKey = RSA.exportKey('pkcs8-private-pem')
    let publicKey = RSA.exportKey('pkcs8-public-pem')
    let wallet = {
        publicKey,
        privateKey,
    }
    console.log('wallet=', wallet)
    // return wallet

    return  {address: await this.getAddressFromPublicKey(publicKey), privateKey:  privateKey}
  }

  async getAddressFromPublicKey(publicKey){
    let address = publicKey//new TextDecoder().decode(publicKey)
    address = address.replace('\n', '')
    address = address.replace("-----BEGIN PUBLIC KEY-----", '')
    address = address.replace("-----END PUBLIC KEY-----", '')
    address = address.replace(' ', '')
    return address
  }

  initializeTransaction(sender, receiver, amount, fee, message){
    if (this.getBalance(sender) < amount + fee){
      console.log("Balance is not enough!")
      return false
    }
    const newTransaction = new Transaction(sender, receiver, amount, fee, message)
    return newTransaction
  }

  async signTransaction(transaction, privateKey){

    const transactionStr = this.transactionToString(transaction)
    let signature = RSA.sign(transactionStr)
    return signature
  }

  async addTranscation(transaction, signature){
    const transactionStr = this.transactionToString(transaction)
    if (transaction.fee + transaction.amounts > this.getBalance(transaction.sender)){
      console.log("Balance is not enough!")
      return false
    }
    let chk = await RSA.verify(transactionStr, signature)
    if (chk) {
      console.log(("Authorized successfully!"))
      this.pendingTransactions.push(transaction)
    }else{
      console.log("RSA Verified wrong!")
    }
    return chk
  }
  
  async start(){
    const {account, privateKey} = await this.generateAddress()
    console.log("satrt, account: ", account)
    await this.createGenesisBlock()
    while(true){
      await this.mineBlock(account)
      this.adjustDifficulty()
    }
  }
}
const  main = async()=>{

const bc = new BlockChain()

// bc.start()
const {address, privateKey} = await bc.generateAddress()
let publicKey = '-----BEGIN PUBLIC KEY-----\n'
publicKey += address
publicKey += '\n-----END PUBLIC KEY-----\n'

await bc.createGenesisBlock()
await bc.mineBlock(address)

// Step1: initialize a transaction
while (true) {
    
  console.log("Remaining Txs: ", bc.pendingTransactions.length)
  await bc.mineBlock(address)
  await bc.verifyBlockchain()
  // check miner's(me) balance
  let userBalance = bc.getBalance(address)
  console.log("userBalance: ", userBalance)


  for (var i = 0; i<Math.round(Math.random()*10); i+=1){
    let transaction = bc.initializeTransaction(address, 'test123', 0, 1, 'Test')
    if (transaction){
    // Step2: Sign your transaction
    const signature = await bc.signTransaction(transaction, privateKey)
    // Step3: Send it to blockchain
    await bc.addTranscation(transaction, signature)
  }




  // console.log("Insert fake transaction.")
  // const fakeTransaction = new Transaction('test123', address, 100, 1, 'Test')
  // bc.chain[1].transactions.push(fakeTransaction)
  // await bc.mineBlock(address)

  // await bc.verifyBlockchain()
  }



  }
}

main();
