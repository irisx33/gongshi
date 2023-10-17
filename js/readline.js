function readline() {
    const date = new Date();
    // 读取表单文字
    var biaodan = document.getElementById("biaodan");
    var biaodanY = document.getElementById("yeban");
    console.log(biaodan);
    var biaoValue = biaodan.value;
    var YeValue = biaodanY.value
    console.log(biaoValue);
    if (!biaoValue) {
        console.log("数据为空");
        biaoValue = '完成公务电话日巡检；\n完成车安防及PIS设备巡查；\n完成工班物资、安全、工单填写及检查，考勤表核对；'
        document.getElementById("biaodan").value = biaoValue;
    }
    if (!YeValue) {
        console.log("数据为空");
        YeValue = 'x、x负责x站视频监控系统90天项目升级改造。\nx负责x-x站通信系统轨行区设备年检。'
        document.getElementById("yeban").value = YeValue;
    }
    // 处理前数据
    var valueArray = biaoValue.split("\n");
    var YeArray = YeValue.split("\n");
    console.log(valueArray);
    // 处理后数据
    var titleMonth = date.getMonth() + 1;
    console.log(titleMonth);
    var titleDate = date.getDate();
    console.log(titleDate);
    var DateMonth = titleMonth + '.' + titleDate;
    var titleText = '通信综合一工班工作汇报：'
    var finalArray = [DateMonth, titleText];
    // console.log(finalArray);
    for (i = 0; i < valueArray.length; i++) {
        everyValue = (i + 1) + '、' + valueArray[i];
        finalArray.push(everyValue)
    }
    // 添加夜班安排数据
    var titleYe = '\n检修夜班安排：'
    finalArray.push(titleYe);
    for (i = 0; i < YeArray.length; i++) {
        everyYalue = (i + 1) + '、' + YeArray[i];
        finalArray.push(everyYalue);
    }

    console.log(finalArray.join("\n"));
    jieguo = finalArray.join("\n");
    var jieguoEle = document.getElementById("jieguo")
    jieguoEle.style.whiteSpace = "pre";
    jieguoEle.innerHTML = jieguo;
    // var jihuaHaomiao = new Date(jihua).getTime()
    // 计算批点时间毫秒数
    // var pidian = document.getElementById("pidian").value
    // var pidianHaomiao = new Date(pidian).getTime()
    // 计算销点时间毫秒数
    // var xiaodian = document.getElementById("xiaodian").value
    // var xiaodianHaomiao = new Date(xiaodian).getTime()
    // console.log(xiaodianHaomiao)
    // document.getElementById("result").innerHTML = jihuaHaomiao
    // document.getElementById("result1").innerHTML = pidianHaomiao
    // document.getElementById("result2").innerHTML = xiaodianHaomiao
    // var xpDifftime = xiaodianHaomiao - pidianHaomiao
    // var jpDifftime = jihuaHaomiao - pidianHaomiao
    // var liyonglv = parseFloat(xpDifftime / jpDifftime).toFixed(3)
    // var liyonglvB = liyonglv * 100

    // document.getElementById("result3").innerHTML = xpDifftime
    // document.getElementById("result4").innerHTML = jpDifftime
    // document.getElementById("result5").innerHTML = liyonglvB
}