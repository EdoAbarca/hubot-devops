module.exports = function(robot) {
    robot.respond(/estado del servicio/i, function(res)
    {
        res.send("El backend está corriendo y saludable ✅");
    });
};