
       function startTimer(duration, display) {
            var start = Date.now(),
                diff,
                minutes,
                seconds,minutes_limit=1, seconds_limit=0,zero=0,stopme;
            function timer() {
                // get the number of seconds that have elapsed since 
                // startTimer() was called
                diff = duration - (((Date.now() - start) / 1000) | 0);

                // does the same job as parseInt truncates the float
                minutes = (diff / 60) | 0;
                seconds = (diff % 60) | 0;

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds; 

                if(minutes == minutes_limit && seconds == seconds_limit){
                    $('#time').addClass('heart  pulse1');
                    $('#time').addClass('heart  pulse2');
                }

                if(minutes == zero && seconds == zero){
                    $('#gameovertag').html("Game Over");
                    $('#gameovertag').addClass('gameover');
                }

                if (diff <= 0) {
                    // add one second so that the count down starts at the full duration
                    // example 05:00 not 04:59
                    start = Date.now() + 1000;
                    clearInterval(stopme);
                }
            };
            // we don't want to wait a full second before the timer starts
            timer();
            stopme = setInterval(timer, 1000);
        }

        window.onload = function () {
            var time = 5;
            var minutes = 60 * time,
                display = document.querySelector('#time');
            startTimer(minutes, display);
        }

      