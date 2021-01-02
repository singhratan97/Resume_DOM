//CLASS - TOP

var div1 = document.createElement('div')
div1.setAttribute('class','top')

var img = document.createElement('img')
img.src = "Ratan.png"

var div2 = document.createElement('div')
div2.setAttribute('class', 'in')
div2.appendChild(img)


var div3 = document.createElement('div')
div3.setAttribute('class', 'name')
div3.innerText = "Ratan Deep Singh"

var div4 = document.createElement('div')
div4.setAttribute('class', 'empty')

div1.append(div2,div3,div4)


var break1 = document.createElement('br')

var p1 = document.createElement('p')
p1.setAttribute('class', 'addr')
p1.innerText = "Chennai-600094 | 7092177850 | ratan.web.dev@gmail.com"

var hr1 = document.createElement('hr')

// CLASS - BOTTOM

var div_bottom = document.createElement('div')
div_bottom.setAttribute('class', 'bottom')

// class - inl-bord

var div5 = document.createElement('div')
div5.classList.add('inl','bord')

//3 DIV inside div5 with class inl bord

//1st div inside inl bord class
var div6 = document.createElement('div')
div6.setAttribute('class', 'inside')


var icon1 = document.createElement('span')
icon1.setAttribute('class', 'fa fa-address-book')

var div6_text1 = document.createElement('span')
div6_text1.innerText = " Profile"


var p_div6 = document.createElement('p')
p_div6.innerText = `Seeking a responsible job  with an opportunity for professional challenges .`
div6.append(icon1,div6_text1,p_div6)


//2nd div inside inl bord class
var div7 = document.createElement('div')
div7.setAttribute('class', 'inside')


var icon2 = document.createElement('span')
icon2.setAttribute('class', "fa fa-flask")

var div7_text1 = document.createElement('span')
div7_text1.innerText = " Skills"

var div7_p = document.createElement('p')


var div7_div1 = document.createElement('div')
div7_div1.setAttribute('class','bol diag')
div7_div1.innerText = "Technical Skills"

var div7_div2 = document.createElement('div')
div7_div2.setAttribute('class','make-inline')


var div_html = document.createElement('div')
div_html.setAttribute('class','diag')
div_html.innerText = "HTML"
var div_css = document.createElement('div')
div_css.setAttribute('class','diag')
div_css.innerText = "CSS"
var div_js = document.createElement('div')
div_js.setAttribute('class','diag')
div_js.innerText = "JavaScript"

div7_div2.append(div_html,div_css,div_js)


var div7_div3 = document.createElement('div')
div7_div3.setAttribute('class','make-inline')

//ICON1

var div7_div3_div1 = document.createElement('div')
div7_div3_div1.setAttribute('class','range diag')

var div7_icon1 = document.createElement('span')
div7_icon1.setAttribute('class','fa fa-circle-o i1')

div7_div3_div1.append(div7_icon1)

//ICON2

var div7_div3_div2 = document.createElement('div')
div7_div3_div2.setAttribute('class','range diag')

var div7_icon2 = document.createElement('span')
div7_icon2.setAttribute('class','fa fa-circle-o i2')

div7_div3_div2.append(div7_icon2)

//ICON3

var div7_div3_div3 = document.createElement('div')
div7_div3_div3.setAttribute('class','range diag')

var div7_icon3 = document.createElement('span')
div7_icon3.setAttribute('class','fa fa-circle-o i3')

div7_div3_div3.append(div7_icon3)


div7_div3.append(div7_div3_div1,div7_div3_div2,div7_div3_div3)
div7_p.append(div7_div1,div7_div2,div7_div3)
div7.append(icon2,div7_text1,div7_p)


//3rd div inside inl bord class
var div8 = document.createElement('div')
div8.setAttribute('class', 'inside')


var icon3 = document.createElement('span')
icon3.setAttribute('class', "fa fa-folder-open")

var div8_text1 = document.createElement('span')
div8_text1.innerText = " Work experience"

div8_div1 = document.createElement('div')
div8_div1.setAttribute('class','inner-content')

var in_div1 = document.createElement('div')
in_div1.setAttribute('class','inline1')
in_div1.innerText = "Console operator"

var in_div2 = document.createElement('div')
in_div2.classList.add('inline1' , 'marg')
in_div2.innerText = "10/2016 - 09/2018"

var break2 = document.createElement('br')

var div8_text2 = document.createElement('span')
div8_text2.innerText = "IBM India Private Limited, Chennai"

div8_div1.append(in_div1,in_div2,break2,div8_text2)

var div8_ul = document.createElement('ul')
div8_ul.classList.add('inner-content')

var div8_li1 = document.createElement('li')
div8_li1.innerText ="Monitored servers (windows, linux etc..) with Tivoli Netcool tool and necessary actions were taken in case of any event occurred."
var div8_li2 = document.createElement('li')
div8_li2.innerText = "First-level troubleshooting were done on the applications that went down due to some issue."
var div8_li3 = document.createElement('li')
div8_li3.innerText = "Apart from monitoring, troubleshooting of servers were done by taking remote using RDP, in case of windows server and through putty, in case of linux/AIX server."
var div8_li4 = document.createElement('li')
div8_li4.innerText = "Network devices were configured on MRTG website and monitoring of network traffic on different devices (Routers, Switches etc..) were done on by us and by agencies."

div8_ul.append(div8_li1,div8_li2,div8_li3,div8_li4)

div8.append(icon3,div8_text1,div8_div1,div8_ul)

// appending all first column elements to div5
div5.append(div6,div7,div8)

// 2nd column div


var div9 = document.createElement('div')
div9.setAttribute('class','inl alii')


//1st div in inl alii class

var div10 = document.createElement('div')
div10.setAttribute('class','inside')

var icon4 = document.createElement('span')
icon4.setAttribute('class', "fa fa-folder-open")

var div10_text1 = document.createElement('span')
div10_text1.innerText = " Work experience"

var div10_div1 = document.createElement('div')
div10_div1.setAttribute('class','inner-content')

var in_div3 = document.createElement('div')
in_div3.setAttribute('class','inline1')
in_div3.innerText = "Batch operator"

var in_div4 = document.createElement('div')
in_div4.classList.add('inline1' , 'marg')
in_div4.innerText = "09/2018 - present"

var break3 = document.createElement('br')

var div10_text2 = document.createElement('span')
div10_text2.innerText = "IBM India Private Limited, Chennai"

div10_div1.append(in_div3,in_div4,break3,div10_text2)

var div10_ul = document.createElement('ul')
div10_ul.classList.add('inner-content')

var div10_li1 = document.createElement('li')
div10_li1.innerText ="Using TWS tool, the batch jobs were monitored and necessary acions were taken for all kinds of issue on the job that is executing on servers."
var div10_li2 = document.createElement('li')
div10_li2.innerText = "Also batch jobs were monitored on Tivoli Netcool tool and troubleshootingwas done in case of any event occurred on console."
var div10_li3 = document.createElement('li')
div10_li3.innerText = "Troubleshooting were done on the TWS server (in our case, a linux server) using linux commands."

div10_ul.append(div10_li1,div10_li2,div10_li3)

div10.append(icon4,div10_text1,div10_div1,div10_ul)

//2nd div in inl alii class

var div11 = document.createElement('div')
div11.setAttribute('class','inside')

var icon5 = document.createElement('span')
icon5.setAttribute('class', "fa fa-book")

var div11_text1 = document.createElement('span')
div11_text1.innerText = " Education"

var break4 = document.createElement('br')
var break5 = document.createElement('br')

div11.append(icon5,div11_text1,break4,break5)

var div12 = document.createElement('div')
div12.setAttribute('class','inner-content')

var div12_div1 = document.createElement('div')
div12_div1.setAttribute('class','inline1')
div12_div1.innerText = "B.E EEE"

div12_div2 = document.createElement('div')
div12_div2.setAttribute('class','inline1 marg1')
div12_div2.innerText = `2012 - 2016`
div12_div2.style.marginLeft = "348px"

var break6 = document.createElement('br')

div12_div3 = document.createElement('span')
div12_div3.innerText = "Vel Tech Engg. College, Chennai"

hr2 = document.createElement('hr')
hr2.style.width = "550px"

div12.append(div12_div1,div12_div2,break6,div12_div3,hr2)

var div13 = document.createElement('div')
div13.setAttribute('class','inner-content')

var div13_div1 = document.createElement('div')
div13_div1.setAttribute('class','inline1')
div13_div1.innerText = "10th Standard"

div13_div2 = document.createElement('div')
div13_div2.setAttribute('class','inline1 marg1')
div13_div2.innerText = "2009 - 2010"

var break7 = document.createElement('br')

div13_div3 = document.createElement('span')
div13_div3.innerText = "Kendriya Vidyalaya, Gill Nagar"

hr3 = document.createElement('hr')
hr3.style.width = "550px"

div13.append(div13_div1,div13_div2,break7,div13_div3,hr3)


var div14 = document.createElement('div')
div14.setAttribute('class','inner-content')

var div14_div1 = document.createElement('div')
div14_div1.setAttribute('class','inline1')
div14_div1.innerText = "12th Standard"

div14_div2 = document.createElement('div')
div14_div2.setAttribute('class','inline1 marg1')
div14_div2.innerText = "2011 - 2012"

var break8 = document.createElement('br')

div14_div3 = document.createElement('span')
div14_div3.innerText = "Kendriya Vidyalaya, Gill Nagar"

hr4 = document.createElement('hr')
hr4.style.width = "550px"

div14.append(div14_div1,div14_div2,break8,div14_div3,hr4)


//appending all second column div
div9.append(div10,div11,div12,div13,div14)

//appending 2 columns  of class bottom
div_bottom.append(div5,div9)

//appending all the elemen and classes to body

document.body.append(div1,break1,p1,hr1,div_bottom)