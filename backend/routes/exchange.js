let express = require("express");
let request = require("node-fetch");
let router = express.Router();

router.get("/rates", async(req, res, next)=>
{
    try 
    {
        let base = req.query.base;
        let currency = req.query.currency;
    
        if (!base || !currency) 
        {
            return res.status(400).json({ error: 'Usage : /api/rates?base=CZK&currency=EUR,GBP,USD'});
        }
    
      return request(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${currency}`)
        .then((response) => response.json())
        .then((data) => {
          if (data["error"]) 
          {
            return res.status(400).json(data);
          }
          return res.json({results : data});
        }).catch(err => res.status(400).json({ error: "Something went wrong. Try again" }));
  
    } catch (error) 
    {
      return res.status(500).json({ error: "Service Unavailable" });
    }
})

module.exports = router;