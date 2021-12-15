import axios from "axios";

export default new class{
    get(callback){
        console.log("API GET RUN");
        axios.get(
            "https://raw.githubusercontent.com/joshua1988/doit-vuejs/master/data/demo.json"
        )
        .then(function(res){
            callback(res.data)
        });
        console.log("API GET END");
    }
}