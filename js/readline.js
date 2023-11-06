function readline() {
    let switchStatus = document.getElementById("mySwitch").checked;
    const date = new Date();
    // 读取表单文字
    var biaodan = document.getElementById("biaodan");
    var biaodanY = document.getElementById("yeban");
    console.log(biaodan);
    var biaoValue = biaodan.value;
    var YeValue = biaodanY.value;
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
    // 判断是否开启智能排序功能
    if (switchStatus) {
        console.log("已开启");
        // 处理前数据
        var valueArray2 = biaoValue.split("\n");
        var YeArray2 = YeValue.split("\n");
        console.log(valueArray2);
        // 处理后数据
        var titleMonth2 = date.getMonth() + 1;
        console.log(titleMonth);
        var titleDate2 = date.getDate();
        console.log(titleDate);
        var DateMonth2 = titleMonth2 + '.' + titleDate2;
        var titleText2 = '通信综合一工班工作汇报：'
        var finalArray2 = [DateMonth2, titleText2];
        for (i = 0; i < 3; i++) {
            everyValue2 = (i + 1) + '、' + valueArray2[i];
            finalArray2.push(everyValue2)
        }
        console.log(finalArray2);
        // 数据分类
        var zhanArray = [];
        var houArray = [];
        var sheArray = [];
        var qitArray = [];
        for (i = 3; i < valueArray2.length; i++) {
            var tValue = valueArray2[i];
            if (tValue.indexOf("站") > 0) {
                // console.log(tValue.indexOf("站"));
                zhanArray.push(tValue);
            } else if ((tValue.indexOf("车辆段") < 0 && tValue.indexOf("车站") < 0) && (tValue.indexOf("车") > 0 || tValue.indexOf("后海停车场") > 0)) {
                houArray.push(tValue);
            } else if (tValue.indexOf("蛇口") > 0) {
                sheArray.push(tValue);
            } else {
                qitArray.push(tValue);
            }
        }
        console.log(zhanArray);
        console.log(houArray);
        console.log(sheArray);
        console.log(qitArray);
        var zData = {};
        var hData = {};
        var sData = {};
        for (i = 0; i < zhanArray.length; i++) {
            var zValue = zhanArray[i];
            if (zValue.indexOf("年检") > 0 && zValue.indexOf("半年检") < 0) {
                zData[zValue] = "14";
            } else if (zValue.indexOf("半年检") > 0) {
                zData[zValue] = "13";
            } else if (zValue.indexOf("季检") > 0) {
                zData[zValue] = "12";
            } else if (zValue.indexOf("月检") > 0) {
                zData[zValue] = "11";
            } else if (zValue.indexOf("故障") > 0) {
                zData[zValue] = "8";
            } else if (zValue.indexOf("调试") > 0) {
                zData[zValue] = "7";
            } else if (zValue.indexOf("整改") > 0) {
                zData[zValue] = "6";
            } else if (zValue.indexOf("巡视") > 0) {
                zData[zValue] = "5";
            } else if (zValue.indexOf("90天") > 0) {
                zData[zValue] = "4";
            } else {
                zData[zValue] = "3";
            }
        }
        // 工作优先顺序排序
        for (i = 0; i < houArray.length; i++) {
            var hValue = houArray[i];
            if (hValue.indexOf("年检") > 0 && hValue.indexOf("半年检") < 0) {
                hData[hValue] = "14";
            } else if (hValue.indexOf("半年检") > 0) {
                hData[hValue] = "13";
            } else if (hValue.indexOf("季检") > 0) {
                hData[hValue] = "12";
            } else if (hValue.indexOf("月检") > 0) {
                hData[hValue] = "11";
            } else if (hValue.indexOf("故障") > 0) {
                hData[hValue] = "8";
            } else if (hValue.indexOf("调试") > 0) {
                hData[hValue] = "7";
            } else if (hValue.indexOf("整改") > 0) {
                hData[hValue] = "6";
            } else if (hValue.indexOf("巡视") > 0) {
                hData[hValue] = "5";
            } else if (hValue.indexOf("90天") > 0) {
                hData[hValue] = "4";
            } else {
                hData[hValue] = "3";
            }
        }
        for (i = 0; i < sheArray.length; i++) {
            var sValue = sheArray[i];
            if (sValue.indexOf("年检") > 0 && sValue.indexOf("半年检") < 0) {
                sData[sValue] = "14";
            } else if (sValue.indexOf("半年检") > 0) {
                sData[sValue] = "13";
            } else if (sValue.indexOf("季检") > 0) {
                sData[sValue] = "12";
            } else if (sValue.indexOf("月检") > 0) {
                sData[sValue] = "11";
            } else if (sValue.indexOf("故障") > 0) {
                sData[sValue] = "8";
            } else if (sValue.indexOf("调试") > 0) {
                sData[sValue] = "7";
            } else if (sValue.indexOf("整改") > 0) {
                sData[sValue] = "6";
            } else if (sValue.indexOf("巡视") > 0) {
                sData[sValue] = "5";
            } else if (sValue.indexOf("90天") > 0) {
                sData[sValue] = "4";
            } else {
                sData[sValue] = "3";
            }
        }
        let zKeysSorted = Object.keys(zData).sort(function (a, b) {
            return zData[b] - zData[a]
        })
        let hKeysSorted = Object.keys(hData).sort(function (a, b) {
            return hData[b] - hData[a]
        })
        let sKeysSorted = Object.keys(sData).sort(function (a, b) {
            return sData[b] - sData[a]
        })
        // console.log(zData);
        // console.log(zKeysSorted);
        // console.log(hKeysSorted);
        // console.log(hData);
        // console.log(sKeysSorted);
        // 数据合并
        for (i = 0; i < zKeysSorted.length; i++) {
            var num = finalArray2.length - 1;
            everyValue2 = num + '、' + zKeysSorted[i];
            finalArray2.push(everyValue2);
        }
        for (i = 0; i < hKeysSorted.length; i++) {
            var num = finalArray2.length - 1;
            everyValue2 = num + '、' + hKeysSorted[i];
            finalArray2.push(everyValue2)
        }
        for (i = 0; i < sKeysSorted.length; i++) {
            var num = finalArray2.length - 1;
            everyValue2 = num + '、' + sKeysSorted[i];
            finalArray2.push(everyValue2)
        }
        for (i = 0; i < qitArray.length; i++) {
            var num = finalArray2.length - 1;
            everyValue2 = num + '、' + qitArray[i];
            finalArray2.push(everyValue2)
        }
        console.log(finalArray2);
        // 添加夜班安排数据
        var titleYe2 = '\n检修夜班安排：'
        finalArray2.push(titleYe2);
        for (i = 0; i < YeArray2.length; i++) {
            everyYalue2 = (i + 1) + '、' + YeArray2[i];
            finalArray2.push(everyYalue2);
        }
        console.log(finalArray2.join("\n"));
        jieguo = finalArray2.join("\n");
        var jieguoEle = document.getElementById("jieguo")
        jieguoEle.style.whiteSpace = "pre";
        jieguoEle.innerHTML = jieguo;
        return;
    } else {
        console.log("已关闭");
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

}

function updateStatus() {
    // let switchStatus = document.getElementById("mySwitch").checked;
    // if (switchStatus) {
    //     console.log("已开启");
    // } else {
    //     console.log("已关闭");
    // }
}

// function bubbleSort(arr) {
//     var len = arr.length;
//     for (var i = 0; i < len - 1; i++) {
//         for (var j = 0; j < len - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) { // 相邻元素两两对比
//                 var temp = arr[j + 1]; // 元素交换
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }