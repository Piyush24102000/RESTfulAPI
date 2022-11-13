const express = require('express');
const app = express();
const Student = require('./models/student');
require('./conn');
app.use(express.json()) //For viewing json object

    // //Add into database/////////////
    // app.post('/students',async(req,res)=>{
    //     try {
    //         const user = new Student(req.body); //Server requesting the body
    //         const createUser = await user.save(); //Save method is used
    //         res.send(createUser);
    //     } catch (error) {
    //         res.send(error)
    //     }
    // })
    
    // // Retrieve from database//////////
    // app.get('/students',async(req,res)=>{
    //     try {
    //         const user = await Student.find(); //use find to get data
    //         res.send(user)
    //     } catch (error) {
    //         res.send(error)
    //     }
    // })

    //  //Get data by Id/////////////
    //     app.get('/students/:id',async(req,res)=>{
    //         try {
    //             const _id = req.params.id;
    //             const user = await Student.findById(_id);
    //             res.send(user);
    //         } catch (error) {
    //             res.send(error)
    //         }
    //     })  
    
     //Get data by Name,Address,Email/////////////
        app.get('/students/:address',async(req,res)=>{
            try {
                const _id = req.params.address;
                const user = await Student.findOne({address:_id});
                res.send(user);
            } catch (error) {
                res.send(error)
            }
        })  
    
    // // Update data by Id/////////////
    //     app.patch('/students/:id',async(req,res)=>{
    //         try {
    //             const _id = req.params.id;
    //             const user = await Student.findByIdAndUpdate(_id,req.body);
    //             res.send(user);
    //         } catch (error) {
    //             res.send(error)
    //         }
    //     })

    // //Delete data by Id/////////////
    // app.delete('/students:id',async(req,res)=>{
    //     try {
    //         const _id = req.params.id;
    //         const user = await Student.findByIdAndDelete(_id);
    //         res.send(user);
    //     } catch (err) {
    //         res.send(err);
    //     }
    // })
app.listen(9000, () => {
    console.log("Connected")
})