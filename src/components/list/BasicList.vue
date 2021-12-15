<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Num</th>
                    <th>Title</th>
                    <th>Date</th>
                </tr>   
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
 
</template>

<script>
import apiCore from "@/core/ApiCore";
export default {
    mounted(){
        apiCore.get(function(data){
            alert(data);
            console.log(data);
        });
    }
}
</script>

<style>
    table{
        width: 100%;
    }
    table > tr {
        width : auto;
    }
</style>