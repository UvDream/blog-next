import request from "../request";
const Others = {
    // 列表
    list: params => {
        return request({
            url: "/other/githubList",
            method: "GET",
            params
        });
    }
}
export default Others;