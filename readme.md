# Block-Tree

```
creating wallet...
wallet= {
  publicKey: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/...",
  privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCXrKTzFSbORVmb\n602NIkX..."
}
Creating genesis block...
Block {
  previousHash: "Hello World!",
  n: 3,
  hash: "b8edd2a81b395207c44809e97dc0352eb27933f40ccf5e5b3cb56ca6fd84bb13",
  difficulty: "Austin",
  nonce: 0,
  timestamp: 1641894711997,
  transactions: [],
  miner: 10,
  minerRewards: undefined
}
Hash found: 00061b570d54415c256e22fd0e87e91edba32301203d296203d2f500784f7663 @ difficulty 3, time cost: 8
Remaining Txs:  0
Block {
  previousHash: "b8edd2a81b395207c44809e97dc0352eb27933f40ccf5e5b3cb56ca6fd84bb13",
  n: 0,
  hash: "00061b570d54415c256e22fd0e87e91edba32301203d296203d2f500784f7663",
  difficulty: 3,
  nonce: 471,
  timestamp: 1641894711997,
  transactions: [],
  miner: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
  minerRewards: 10
}
Hash found: 000c54a17a991b39c7e14522780e9334ecf775a996f3c112262bd4a93f16188b @ difficulty 3, time cost: 10
Hash correct!
userBalance:  20
Authorized successfully!
Authorized successfully!
Authorized successfully!
Remaining Txs:  3
Block {
  previousHash: "00061b570d54415c256e22fd0e87e91edba32301203d296203d2f500784f7663",
  n: 0,
  hash: "000c54a17a991b39c7e14522780e9334ecf775a996f3c112262bd4a93f16188b",
  difficulty: 3,
  nonce: 1008,
  timestamp: 1641894712005,
  transactions: [],
  miner: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
  minerRewards: 10
}
Hash found: 000c3f000d5da6612948cb887c63f57b3e22835e75ad8e3bb28bcd4b511f620d @ difficulty 3, time cost: 40
Hash found: 000de6748a1c7e21209902720e1dc6c604b98f64ac04691dd47d1256e4cb2f62 @ difficulty 3, time cost: 45
Hash correct!
userBalance:  40
Authorized successfully!
Authorized successfully!
Authorized successfully!
Authorized successfully!
Authorized successfully!
Authorized successfully!
Remaining Txs:  6
Block {
  previousHash: "000c54a17a991b39c7e14522780e9334ecf775a996f3c112262bd4a93f16188b",
  n: 2,
  hash: "000de6748a1c7e21209902720e1dc6c604b98f64ac04691dd47d1256e4cb2f62",
  difficulty: 3,
  nonce: 579,
  timestamp: 1641894712212,
  transactions: [],
  miner: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
  minerRewards: 10
}
Hash found: 000d46e6b931f0097e8b1bc6c9cd654846663d11f95d0119c48ea1236098004e @ difficulty 3, time cost: 7
Hash found: 000b07d223d992d49d11cf5df611be60c1a67bc25bc257e2a79b4a4f58bb3383 @ difficulty 3, time cost: 26
Hash correct!
userBalance:  60
Authorized successfully!
Authorized successfully!
Remaining Txs:  2
Block {
  previousHash: "000de6748a1c7e21209902720e1dc6c604b98f64ac04691dd47d1256e4cb2f62",
  n: 2,
  hash: "000b07d223d992d49d11cf5df611be60c1a67bc25bc257e2a79b4a4f58bb3383",
  difficulty: 3,
  nonce: 1484,
  timestamp: 1641894712630,
  transactions: [
    Transaction {
      sender: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
      receiver: "test123",
      amounts: 0,
      fee: 1,
      message: "Test"
    },
    Transaction {
      sender: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
      receiver: "test123",
      amounts: 0,
      fee: 1,
      message: "Test"
    }
  ],
  miner: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
  minerRewards: 10
}
Hash found: 00069534ca320c000a4f8942721aa68b886bbd78537ce237290245069e083db5 @ difficulty 3, time cost: 15
Hash correct!
userBalance:  70
Authorized successfully!
Authorized successfully!
Authorized successfully!
Authorized successfully!
Remaining Txs:  4
Block {
  previousHash: "000b07d223d992d49d11cf5df611be60c1a67bc25bc257e2a79b4a4f58bb3383",
  n: 0,
  hash: "00069534ca320c000a4f8942721aa68b886bbd78537ce237290245069e083db5",
  difficulty: 3,
  nonce: 1254,
  timestamp: 1641894712780,
  transactions: [
    Transaction {
      sender: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
      receiver: "test123",
      amounts: 0,
      fee: 1,
      message: "Test"
    },
    Transaction {
      sender: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
      receiver: "test123",
      amounts: 0,
      fee: 1,
      message: "Test"
    }
  ],
  miner: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
  minerRewards: 10
}
Hash found: 00078495b7f2dcc17f80515d2a44452f0bd34e3f9e8b6d9aa941bbc79b16ab1c @ difficulty 3, time cost: 25
Hash found: 000e9b693b3df8b76a06e443c5b83dab3ddd1ca2323557f2aabd6e27e73aac6d @ difficulty 3, time cost: 69
Hash correct!
userBalance:  90
Authorized successfully!
Authorized successfully!
Authorized successfully!
Authorized successfully!
Authorized successfully!
Remaining Txs:  5
Block {
  previousHash: "00069534ca320c000a4f8942721aa68b886bbd78537ce237290245069e083db5",
  n: 2,
  hash: "000e9b693b3df8b76a06e443c5b83dab3ddd1ca2323557f2aabd6e27e73aac6d",
  difficulty: 3,
  nonce: 7526,
  timestamp: 1641894713043,
  transactions: [],
  miner: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
  minerRewards: 10
}
Hash found: 00063dde312fde26b573a1a9cf57ba1039baf74bcbc5fb27b433089aaa7a84f5 @ difficulty 3, time cost: 107
Hash found: 00020cbadfda105ec113c6138887b90130fb7142730311c66f892b0ae3f2bdef @ difficulty 3, time cost: 159
Hash correct!
userBalance:  110
Authorized successfully!
Authorized successfully!
Authorized successfully!
Remaining Txs:  3
Block {
  previousHash: "000e9b693b3df8b76a06e443c5b83dab3ddd1ca2323557f2aabd6e27e73aac6d",
  n: 2,
  hash: "00020cbadfda105ec113c6138887b90130fb7142730311c66f892b0ae3f2bdef",
  difficulty: 3,
  nonce: 6094,
  timestamp: 1641894713421,
  transactions: [
    Transaction {
      sender: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
      receiver: "test123",
      amounts: 0,
      fee: 1,
      message: "Test"
    }
  ],
  miner: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
  minerRewards: 10
}
Hash found: 000e0144947ee620a6857b665aa9673309f9e764475447560c16b3d7bad1deee @ difficulty 3, time cost: 2
Hash found: 0001257ecf658a8c41b9fdde910d2f4fc5e0b46200f2530796401efe2029f23c @ difficulty 3, time cost: 4
Hash correct!
userBalance:  130
Authorized successfully!
Authorized successfully!
Authorized successfully!
Authorized successfully!
Remaining Txs:  4
Block {
  previousHash: "00020cbadfda105ec113c6138887b90130fb7142730311c66f892b0ae3f2bdef",
  n: 2,
  hash: "0001257ecf658a8c41b9fdde910d2f4fc5e0b46200f2530796401efe2029f23c",
  difficulty: 3,
  nonce: 424,
  timestamp: 1641894713764,
  transactions: [],
  miner: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
  minerRewards: 10
}
Hash found: 0008c23c10216a0022d0bfe665f3962baf296f0c415f3b7332c2e80122b3c910 @ difficulty 3, time cost: 50
Hash found: 000d43987b1741544550b9a68e198cef0022516f39f765a47613bda2db646bd3 @ difficulty 3, time cost: 53
Hash correct!
userBalance:  150
Authorized successfully!
Remaining Txs:  1
Block {
  previousHash: "0001257ecf658a8c41b9fdde910d2f4fc5e0b46200f2530796401efe2029f23c",
  n: 2,
  hash: "000d43987b1741544550b9a68e198cef0022516f39f765a47613bda2db646bd3",
  difficulty: 3,
  nonce: 590,
  timestamp: 1641894714015,
  transactions: [],
  miner: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
  minerRewards: 10
}
Hash found: 000af579c07eff8438a248ee089158a7cc56c0c70dbd01365e8458df981596b7 @ difficulty 3, time cost: 1
Hash correct!
userBalance:  160
Authorized successfully!
Authorized successfully!
Authorized successfully!
Authorized successfully!
Remaining Txs:  4
Block {
  previousHash: "000d43987b1741544550b9a68e198cef0022516f39f765a47613bda2db646bd3",
  n: 0,
  hash: "000af579c07eff8438a248ee089158a7cc56c0c70dbd01365e8458df981596b7",
  difficulty: 3,
  nonce: 60,
  timestamp: 1641894714130,
  transactions: [
    Transaction {
      sender: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
      receiver: "test123",
      amounts: 0,
      fee: 1,
      message: "Test"
    }
  ],
  miner: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6yk8xUmzkVZm+tNjSJF\n7/efoEp/ThBJmIcC5PWosqtBY0whzPXEdOc...",
  minerRewards: 10
}
Hash found: 0000eee5a2d9c631e570a384bfc3cf419feefc24e6ce60bfa5161a64d8fbc8c7 @ difficulty 3, time cost: 22
Hash found: 000deb862afa54a11d40cf1282ce11ce1575f8c15250931da66c6baa5bff8635 @ difficulty 3, time cost: 22
Hash correct!
userBalance:  180
```