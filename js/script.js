
function cal() {
    // 计算计划完成时间毫秒数
    var jihua = document.getElementById("jihua").value
    var jihuaHaomiao = new Date(jihua).getTime()
    // 计算批点时间毫秒数
    var pidian = document.getElementById("pidian").value
    var pidianHaomiao = new Date(pidian).getTime()
    // 计算销点时间毫秒数
    var xiaodian = document.getElementById("xiaodian").value
    var xiaodianHaomiao = new Date(xiaodian).getTime()
    console.log(xiaodianHaomiao)
    document.getElementById("result").innerHTML = jihuaHaomiao
    document.getElementById("result1").innerHTML = pidianHaomiao
    document.getElementById("result2").innerHTML = xiaodianHaomiao
    var xpDifftime = xiaodianHaomiao - pidianHaomiao
    var jpDifftime = jihuaHaomiao - pidianHaomiao
    var liyonglv = parseFloat(xpDifftime / jpDifftime).toFixed(2)

    document.getElementById("result3").innerHTML = xpDifftime
    document.getElementById("result4").innerHTML = jpDifftime
    document.getElementById("result5").innerHTML = liyonglv
}