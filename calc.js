var global = 0;
        var global2 = 0;
        var flag = 0;
        var flag2 = 0;
        var result = 0;
        var m = 0;
        var d = 0;
        function principal(value){
            if (m > 0)
            {
                if (flag2 != 0)
                    global2 *= 10;
                flag2++;
                global2 += value;
                document.getElementById("principal").value = global2;
            }
            else
            {
                if (flag != 0)
                    global *= 10;
                global += value;
                document.getElementById("principal").value = global;
                flag++;
            }
            console.log(global);
        }
        function multi(value){
            m++;
            if (m == 2)
            {
                document.getElementById("principal").value = global2 * global;
                m = 1;
                global *= global2;
                global2 = 0;
            }
        }
        function del(){
            global = 0;
            document.getElementById("principal").value = global;
        }
        function equal(){
            if (m > 0)
            {
                result = global * global2;
                m = 0;
            }
            global = result;
            global2 = 0;
            document.getElementById("principal").value = result;
        }