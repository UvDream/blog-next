import request from "../request";
const Article = {
    list: data => {
        return request({
            url: "/article/list",
            method: "POST",
            data
        });
    },
    detail:params=>{
        return request({
            url: "/article/detail",
            method: "GET",
            params
        });
    },
    // 标签云
    words:params=>{
        return request({
            url: "/article/words",
            method: "GET",
            params
        });
    }
}
export default Article;