window.addEventListener('load', function () {
    'use strict';
    var fullScreenEdit = false; // if enter full screen edit mode don't need update preview page
    var editarea = document.getElementById('edit-area');
    var view = document.getElementById('view-content');
    //handle input event
    ! function () {
        editarea.addEventListener('input', function () {
            if (fullScreenEdit == false) {
                // scroll view window to right position according to cursor position
                scrollWindowAndSetConvertResult();
            }
        }, false);
    }();

    // handle full screen edit button click event
    ! function () {
        var fullscreen = document.getElementById('edit-full-screen');
        fullscreen.addEventListener('click', function () {
            fullScreenEdit = true;
            document.body.classList.remove('preview-mode');
            document.body.classList.add('edit-full-screen-mode');
        }, false);
    }();

    // handle preview button click event
    ! function () {
        var preview = document.getElementById('preview');
        preview.addEventListener('click', function () {
            document.body.classList.remove('edit-full-screen-mode');
            document.body.classList.add('preview-mode');
        }, false);
    }();

    //handle night mode button click event
    ! function () {
        var nightmode = document.getElementById('edit-night');
        nightmode.addEventListener('click',function(){
        document.getElementById('edit-window').style.backgroundColor = '#36312C';
        editarea.style.backgroundColor = '#36312C';
        document.getElementById('edit-window').style.color = "white";
        editarea.style.color = '#EBD1B7';
        nightmode.style.display = 'none';
        document.getElementById('exit-edit-night').style.display = 'block';
        },false);
    }();

    //handle exit-mode button click event
    ! function () {
        var exitnightmode = document.getElementById('exit-edit-night');
        exitnightmode.addEventListener('click',function(){
            document.getElementById('edit-window').style.backgroundColor = 'white';
            editarea.style.backgroundColor = 'white';
            document.body.style.color = 'black';
            editarea.style.color = 'black';
            exitnightmode.style.display = 'none';
            document.getElementById('edit-night').style.display = 'block';
        },false);
    }();

    // handle exit full screen edit button click event
    ! function () {
        var preview = document.getElementById('exit-edit-full-screen');
        preview.addEventListener('click', function () {
            view.innerHTML = marked(editarea.value);
            fullScreenEdit = false;
            document.body.classList.remove('edit-full-screen-mode');
            document.body.classList.remove('preview-mode');
        }, false);
    }();

    // handle  exit full screen preview button click event
    ! function () {
        var preview = document.getElementById('view-exit-full-screen');
        preview.addEventListener('click', function () {
            document.body.classList.remove('edit-full-screen-mode');
            document.body.classList.remove('preview-mode');
            var viewToolBar = document.getElementById('view-tool-bar');
            viewToolBar.classList.remove('hover-view');
        }, false);
    }();

    // handle  print button click event
    ! function () {
        var preview = document.getElementById('print');
        preview.addEventListener('click', function () {
            document.body.classList.remove('edit-full-screen-mode');
            document.body.classList.add('preview-mode');

            window.print();
        }, false);
    }();

    ! function () {
        var saveashtml = document.getElementById('save-as-html');
        saveashtml.addEventListener('click',function () {
            document.body.classList.remove('edit-full-screen-mode');
            document.body.classList.add('preview-mode');
            var html = '<body><section id="view-content" class="content typo">'+document.getElementById("view-content").innerHTML+'</section></body></html>';
            var css = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>untitled</title></head><style>@charset "utf-8";html{color:#333;background:#fff;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;text-rendering:optimizelegibility}html.borderbox *,html.borderbox *:before,html.borderbox *:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}body,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,menu,nav,section{margin:0;padding:0}article,aside,details,figcaption,figure,footer,header,menu,nav,section{display:block}audio,canvas,video{display:inline-block}body,button,input,select,textarea{font:300 1em/1.8 PingFang SC,Lantinghei SC,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}blockquote{position:relative;color:#999;font-weight:400;border-left:1px solid #1abc9c;padding-left:1em;margin:1em 3em 1em 2em}@media only screen and (max-width:640px){blockquote{margin:1em 0}}acronym,abbr{border-bottom:1px dotted;font-variant:normal}abbr{cursor:help}del{text-decoration:line-through}address,caption,cite,code,dfn,th,var{font-style:normal;font-weight:400}ul,ol{list-style:none}caption,th{text-align:left}q:before,q:after{content:""}sub,sup{font-size:75%;line-height:0;position:relative}:root sub,:root sup{vertical-align:baseline}sup{top:-0.5em}sub{bottom:-0.25em}a{color:#000}a:hover{text-decoration:underline}.typo a{border-bottom:1px solid #333}.typo a:hover{border-bottom-color:#555;color:#555;text-decoration:none}ins,a{text-decoration:none}u,.typo-u{text-decoration:underline}mark{background:#fffdd1;border-bottom:1px solid #ffedce;padding:2px;margin:0 5px}pre,code,pre tt{font-family:Courier,"Courier New",monospace}pre{background:#f8f8f8;border:1px solid #ddd;padding:1em 1.5em;display:block;-webkit-overflow-scrolling:touch}hr{border:0;border-bottom:1px solid #cfcfcf;margin-bottom:.8em;height:10px}small,.typo-small,figcaption{font-size:.9em;color:#888}strong,b{font-weight:bold;color:#000}[draggable]{cursor:move}.clearfix:before,.clearfix:after{content:"";display:table}.clearfix:after{clear:both}.clearfix{zoom:1}.textwrap,.textwrap td,.textwrap th{word-wrap:break-word;word-break:break-all}.textwrap-table{table-layout:fixed}.serif{font-family:Palatino,Optima,Georgia,serif}.typo p,.typo pre,.typo ul,.typo ol,.typo dl,.typo form,.typo hr,.typo table,.typo-p,.typo-pre,.typo-ul,.typo-ol,.typo-dl,.typo-form,.typo-hr,.typo-table,blockquote{margin-bottom:1.2em}h1,h2,h3,h4,h5,h6{font-family:PingFang SC,Verdana,Helvetica Neue,Microsoft Yahei,Hiragino Sans GB,Microsoft Sans Serif,WenQuanYi Micro Hei,sans-serif;font-weight:100;color:#000;line-height:1.35}.typo h1,.typo h2,.typo h3,.typo h4,.typo h5,.typo h6,.typo-h1,.typo-h2,.typo-h3,.typo-h4,.typo-h5,.typo-h6{margin-top:1.2em;margin-bottom:.6em;line-height:1.35}.typo h1,.typo-h1{font-size:2em}.typo h2,.typo-h2{font-size:1.8em}.typo h3,.typo-h3{font-size:1.6em}.typo h4,.typo-h4{font-size:1.4em}.typo h5,.typo h6,.typo-h5,.typo-h6{font-size:1.2em}.typo ul,.typo-ul{margin-left:1.3em;list-style:disc}.typo ol,.typo-ol{list-style:decimal;margin-left:1.9em}.typo li ul,.typo li ol,.typo-ul ul,.typo-ul ol,.typo-ol ul,.typo-ol ol{margin-bottom:.8em;margin-left:2em}.typo li ul,.typo-ul ul,.typo-ol ul{list-style:circle}.typo table th,.typo table td,.typo-table th,.typo-table td,.typo table caption{border:1px solid #ddd;padding:.5em 1em;color:#666}.typo table th,.typo-table th{background:#fbfbfb}.typo table thead th,.typo-table thead th{background:#f1f1f1}.typo table caption{border-bottom:0}.typo-input,.typo-textarea{-webkit-appearance:none;border-radius:0}.typo-em,.typo em,legend,caption{color:#000;font-weight:inherit}.typo-em{position:relative}.typo-em:after{position:absolute;top:.65em;left:0;width:100%;overflow:hidden;white-space:nowrap;content:"・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・"}.typo img{max-width:100%}</style>';
            var mht = css + html;
            var mhtoutput = new Blob([mht],{type:"text/plain;charset=utf-8"});
            saveAs(mhtoutput,"untitled.html");

            //alert("请右键点击网页选择另存为HTML");

        },false);
    }();

    ! function () {
        var saveasmarkdown = document.getElementById('save-as-markdown');
        saveasmarkdown.addEventListener('click',function () {
            document.body.classList.remove('preview-mode');
            document.body.classList.add('edit-full-screen-mode');
            
            var md = window.localStorage.getItem('markdown-text');
            var mdoutput = new Blob([md],{type: "text/plain;charset=utf-8"});
            saveAs(mdoutput, "untitled.md");
        },false);
    }();

    //every 5 sec save the text into localStorage
    ! function () {
        setInterval(function () {
            save();
        }, 5000);
    }();


    /*
     *  init data,if the user has data svaed in localStorage ,read it out
     * if not , load example.md as default
     */
    (function () {
        var text = window.localStorage.getItem('markdown-text');
        if (text) {
            editarea.value = text;
            view.innerHTML = marked(text);
        } else {
            var xmlhttp;
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.open('GET', 'src/example.md');
            xmlhttp.send();
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    editarea.value = xmlhttp.responseText;
                    view.innerHTML = marked(xmlhttp.responseText);
                } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
                    console.log('err');
                }
            };
        }
    })();



    function scrollWindowAndSetConvertResult() {
        // we want view the converted content realtime
        // but how can we know the scrollTop value of view container
        // Here is my idea:
        // insert a spacial string at the position of cursor
        // find this spacial string in view container
        // find that node which contains this string
        // and scroll this node,after that result

        var text = editarea.value,
            index = editarea.selectionStart,
            spacialText = "@%^6$^A#$^",
            helpText = "",
            i,
            len;
        helpText = text.slice(0, index);
        helpText += spacialText;
        helpText += text.slice(index);

        view.innerHTML = marked(helpText);

        var children = view.childNodes;
        for (i = 0, len = children.length; i < len; i++) {
            var content = children[i].textContent;
            if (content.indexOf(spacialText) !== -1) {
                break;
            }
        }
        var currentEditNode = children[i];
        console.log(currentEditNode);
        var nodes = currentEditNode.getElementsByTagName("@");

        for (i = 0, len = nodes.length; i < len; i++) {
            var content = children[i].textContent;
            if (content.indexOf(spacialText) !== -1) {
                break;
            }
        }
        currentEditNode = nodes[i] || currentEditNode;
        if (currentEditNode.scrollIntoViewIfNeeded) {
            currentEditNode.scrollIntoViewIfNeeded()
        } else {
            currentEditNode.scrollIntoView();
        }
        view.innerHTML = marked(text);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }

    var save = (function () {
        var editarea = document.getElementById('edit-area');

        function _save() {
            var text = editarea.value;
            if (text) {
                window.localStorage.setItem('markdown-text', text);
            }
        }
        return _save;
    })();
 
    //handle close event
    window.addEventListener('unload', save, false);

    var editWindow = document.getElementById('edit-window');
    editWindow.addEventListener('dragover', function (event) {
        event.preventDefault();
        event.target.style.opacity = 0.5;
    });
    editWindow.addEventListener('dragenter', function (event) {
        event.preventDefault();
    });
    editWindow.addEventListener('dragleave', function (event) {
        event.preventDefault();
        event.target.style.opacity = 1;
    });

    editWindow.addEventListener('drop', function (event) {
        event.preventDefault();
        var files = event.dataTransfer.files;
        for (var i = 0, len = files.length; i < len; i++) {
            var reader = new FileReader();
            if (/text/.test(files[i].type)) {
                reader.readAsText(files[i]);
                reader.onload = function () {
                    editarea.value = reader.result;
                    try {
                        view.innerHTML = marked(reader.result);
                    } catch (e) {
                        $alert('解析文件失败！');
                    }
                }
            } else {
                alert('请拖放文本文件，谢谢！');
            }
        }
        event.target.style.opacity = 1;
    });
});
