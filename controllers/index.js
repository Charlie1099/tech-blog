const router = require("express").Router()
// for handelbars
 const homeRoutes = require("./home-routes.js")
 
const apiRoutes = require("./api");

const dashbordRoutes = require("./dashboard-routes");

router.use("/dashboard", dashbordRoutes);
router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});


 


module.exports = router;