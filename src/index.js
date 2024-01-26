const express = require("express");
const {PrismaClient} = require("@prisma/client");
const app = express();
const port = 3001;
const prisma = new PrismaClient();




app.get('/api/finduser',async (req,res) => {
        try {
            const data = await prisma.user.findMany();
            res.json(data)
        } catch (error) {
            console.log("error",error)
        }

    
});

app.listen(port,() => {
    console.log(`server connected on http://localhost:${port}`)
});