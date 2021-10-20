let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".sidebar");
        let searchBtn = document.querySelector(".bx-search-alt-2");


        btn.onclick = function() {
            sidebar.classList.toggle("active");     
        }
        searchBtn.onclick = function() {
            sidebar.classList.toggle("active");     
        }

        var counter = 1;
        setInterval(function(){
            document.getElementById('radio' + counter).checked = true;
            counter++;
            if(counter > 4){
                counter = 1;
            }
        }, 5000);