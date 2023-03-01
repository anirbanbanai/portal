const billiniarData = ()=>{
  fetch(`https://forbes400.onrender.com/api/forbes400?limit=10`)
  .then(res=>res.json())
  .then(data => console.log(data))
}
billiniarData()