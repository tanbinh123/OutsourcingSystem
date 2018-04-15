/**
 * Created by 杨玉卿 on 2018/4/14.
 */
$("#li_rw_item").click(function(){
//我的任务
    $("#li_rw_item").click(function(){
        $.ajax({
            type:"POST",
            url:"/",
            dataType:"json",
            async: false,
            data:{

            },
            success:function(data){
                //输出data
                var oDiv=$("#task");
                var clear='';
                oDiv.html(clear);
                for(var i=0;i<data.length;i++) {
                    var oFolder = $('<div class="my-inline-block text-center"></div>');
                    oFolder.append('<span class="glyphicon glyphicon-folder-close my-folder"></span>' +
                        '<span class="folder-name">' + data[i] + '</span>');
                    oDiv.append(oFolder);
                }
                $(".my-inline-block").click(function () {
                    var oDiv=$("#inform");
                    var clear = "";
                    oDiv.html(clear);
                    var project_name = $(this).find(".folder-name").text();
                    console.log(project_name);
                    $.ajax({
                        type: "POST",
                        url: "/",
                        async: false,
                        dataType: "json",
                        data: {
                            'project_name': project_name
                        },
                        success: function (data) {
                            $.each(data, function (index, obj) {
                                if (index != (data.length)) {
                                    var oDiv=$("#inform");
                                    var clear = "";
                                    oDiv.html(clear);
                                    var oP = $("<div class='op'></div>");

                                    //title
                                    var oTitle=$('<p class="oTitle"></p>');
                                    oTitle.append("任务名称："+obj['taskName']);
                                    oP.append(oTitle);
                                    //description
                                    var oMsg = $("<p class='description'></p>");
                                    oMsg.append("任务描述："+obj['taskContent']);
                                    oP.append(oMsg);
                                    oDiv.append(oP);


                                }
                            });

                        },
                        error: function () {
                            alert("请求任务信息失败!");
                        }
                    });
                });

            },
            error:function(){
                alert("请求项目名失败！");
            }
        })
    });
});