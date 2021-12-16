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
                <tr v-for="(tempData,i) in tempDataList" v-bind:key="tempData.Num">
                    <td>{{tempData.Num}}({{i}})</td>
                    <td>{{tempData.Title}}({{i}})</td>
                    <td>{{tempData.Date}}({{i}})</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import apiCore from "@/core/ApiCore";
import tempDataList from "@/components/list/TempDataList";
export default {
    data(){
        return {
            tempDataList
        }
    },
    mounted(){
        apiCore.get(function(data){
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