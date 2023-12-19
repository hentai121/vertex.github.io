const aplayer_path = "/aplayer/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
    return new Promise((resolve, reject) => {
        let tag;

        if (type === "css") {
            tag = document.createElement("link");
            tag.rel = "stylesheet";
            tag.href = url;
        }
        else if (type === "js") {
            tag = document.createElement("script");
            tag.src = url;
        }
        if (tag) {
            tag.onload = () => resolve(url);
            tag.onerror = () => reject(url);
            document.head.appendChild(tag);
        }
    });
}


Promise.all([
    loadExternalResource(aplayer_path + "APlayer.min.css", "css"),
    loadExternalResource(aplayer_path + "APlayer.min.js", "js"),
    loadExternalResource(aplayer_path + "list.js", "js")
])