import express from 'express'

const app = express()

const BIG_VAL = 1000000000

app.get("/", (req, res) => {
    let cnt = 0;

    for (let i = 0; i < BIG_VAL; i++) {
        cnt++
    }

    app.listen(8080)
})