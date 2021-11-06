import {create} from 'apisauce';

const api=create({
    baseURL:'http://192.168.1.20:9000/api',
})


// api.get('/listings').then(response=>{
//     if(!response.ok){
//         response.problem;
//     }
//     //console.log(response);
// })

export default api;