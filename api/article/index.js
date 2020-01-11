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
    }
}
export default Article;