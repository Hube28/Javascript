<script language="javascript">
function asyncAlert() {
    alert("node0")
}

function inner_function() {
    var node0 = document.getElementById("#inbound-modal")
    var node1 = node0.querySelector("div.ant-modal-wrap")
    var node2 = node1.querySelector("div")
    var node3 = node2.querySelector("div.ant-modal-content")
    var node4 = node3.querySelector("div.ant-modal-body")
    var node5 = node4.querySelector("form:nth-child(1)")
    var node6 = node5.querySelector("form:nth-child(1)")
    var node7 = node6.querySelector("div.ant-col.ant-form-item-control-wrapper")
    var node8 = node7.querySelector("div")
    var node9 = node8.querySelector("span")
    var node10 = node9.querySelector("input")
    node10.innerHTML = "Hello Nihao!"
}

var callShare = function() {
    var shareInfo = JSON.stringify({"title": "标题", "desc": "内容", "shareUrl": "http://www.jianshu.com/p/f896d73c670a",
    "shareIco":"http://upload-images.jianshu.io/upload_images/1192353-fd26211d54aea8a9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240"});
    Toyun.share(shareInfo);
}

var picCallback = function(photos) {
    alert(photos);
}

function shareCallback() {
    alert('success');
}
</script>
