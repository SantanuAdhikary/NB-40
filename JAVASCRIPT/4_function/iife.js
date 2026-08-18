

(function()
{
    console.log("I am iife")
})();



(
    function(port)
    {
        console.log("server is running on port number ",port)
    }
)(3000);