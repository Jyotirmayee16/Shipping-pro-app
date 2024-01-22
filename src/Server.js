const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors')
const fs=require('fs')
const app=express();
const PORT=process.env.PORT ||5000;
const DATABASE="data.json";
app.use(cors());
app.use(bodyParser.json())
const readData=() =>{
    try{
    const data=fs.readFileSync(DATABASE);
    return JSON.parse(data);
    }catch(error){
  return{staff:[]}
    }

};
const writeData=(data)=>{
    fs.writeFileSync(DATABASE,JSON.stringify(data,null,2))
app.post('/staff',(req,res)=>{
    try{
        const staff=readData();
        const newstaff={id:data.staff.length+1,...req.body};
        data.staff.push(newstaff);


        writeData(data);
        res.status(201).json(newstaff);
        
    }catch(error){
        res.status(400).json({message:"error present"});

    }
})
app.get('./staff', (req,res)=>{
    try{
        const data=readData();
        res.status(200).json(data.staff);
    }catch(error){
        res.status(500).json({message :"error found"
    });
    app.put('/staff/:id', (req, res) => {
  try {
    const data = readData();
    const staffIndex = data.staff.findIndex((staff) => staff.id === parseInt(req.params.id));
    if (staffIndex !== -1) {
      data.staff[staffIndex] = { ...data.staff[staffIndex], ...req.body };
      writeData(data);
      res.json(data.staff[staffIndex]);
    } else {
      res.status(404).json({ message: 'Staff not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete('/staff/:id', (req, res) => {
  try {
    const data = readData();
    const staffIndex = data.staff.findIndex((staff) => staff.id === parseInt(req.params.id));
    if (staffIndex !== -1) {
      const deletedStaff = data.staff.splice(staffIndex, 1);
      writeData(data);
      res.json(deletedStaff[0]);
    } else {
      res.status(404).json({ message: 'Staff not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
})
}
app.listen(PORT,()=>{
    console.log("server is running");
})