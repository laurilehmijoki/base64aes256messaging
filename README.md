# Base64 aes64 encoder/decoder

Encrypts a message with AES 256 and then encodes it with an URL-safe base64
algorithm.

Usage:

First, install Node.js. Then:

```
  npm install
  ./encrypt s3cr3t "hello world" # Prints ZmE4Zjc5ZjM5ZmMyZDBlNWIwOGRhMw
  ./decrypt s3cr3t ZmE4Zjc5ZjM5ZmMyZDBlNWIwOGRhMw # Prints hello world
```
