const Orders= require('../models/orders')

exports.addOrders= async(req, res, next)=>{
    try{

        // if(!req.body.number)
        // {
        //     throw new Error('Phone num is mandatory')
        // }
    const price= req.body.price;
    const dish= req.body.dish;
    const table= req.body.table;


    const data= await Orders.create({price:price, dish:dish, table:table})
    // console.log('Expense created:', data);
    res.status(201).json(data);  //{expenseDetails: data}
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.getOrders= async (req, res, next)=>{
    try{
    const orders= await Orders.findAll();
    res.status(200).json(orders);
    }catch(error){
        console.log('Error in get orders',JSON.stringify(error))
        res.status(500).json({error:error})
    }
}

exports.deleteOrders= async(req,res,next)=>{
    try{
        const Uid= req.params.id;
        await Orders.destroy({where: {id:Uid}})
        res.sendStatus(200);
       // res.status(200).json({allUsers: users});
        }catch(error){
            console.log('Error in deleting orders')
            res.status(500).json(error)
        }
}