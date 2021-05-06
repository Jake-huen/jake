var loop = new Audio("audio/loop.mp3");
      function playMusic(){
        loop.play();
      }
      function stopMusic(){
        loop.pause();
        loop.currentTime=0;
      }
      $('#play-btn').on('click',playMusic);
      $('#stop-btn').on('click',stopMusic);

      $(document).on('keydown',function(event){
        if (Number(event.key)>=1 && Number(event.key)<=9){
          $('#cell'+event.key).addClass('playing');
          var cur = audioFiles[Number(event.key)-1];
          cur.currentTime=0;
          cur.play();
        }
      });
      $(document).on('keyup',function(){
        $('.cell').removeClass('playing');
        var cur = audioFiles[Number(event.key)-1];
      })
      var audioFiles=[];
      audioFiles.push(new Audio("audio/01_kick_drum.wav"));
      audioFiles.push(new Audio('audio/02_closed_hihat.wav'));
      audioFiles.push(new Audio('audio/03_open_hihat.wav'));
      audioFiles.push(new Audio('audio/04_clap.wav'));
      audioFiles.push(new Audio('audio/05_snap.wav'));
      audioFiles.push(new Audio('audio/06_crash.wav'));
      audioFiles.push(new Audio('audio/07_tom1.wav'));
      audioFiles.push(new Audio('audio/08_tom2.wav'));
      audioFiles.push(new Audio('audio/09_tambourine.wav'));