const express = request("express");
const app = express();

app.get('/', (req, res) =>{

return res.send('BoraLa');
});
app.listen(3000, ()=> {
    console.log ('Iniciando')
});