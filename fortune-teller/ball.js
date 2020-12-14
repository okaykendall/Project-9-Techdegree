
    const responses = [
      "Could be",
      "It is undeniable",
      "It is certain",
      "Absolutely Not",
      "Ew no",
      "You must be kidding",
      "Check back later",
      "Oh heck yeah",
      "Ummm",
      "10,000 times yes",
      "Why would you ask that?",
      "Perhaps",
      "100% Yes",
      "Not exactly",
      "Signs point to no",
      "Something about church?",
      "It is certain",
      "Frankly, no",
      "I have a confession to make...this is my first day"
      ];

    const random = Math.floor(Math.random() * responses.length);

    $("#fortuneBTN").click(function () {
      $("#entry").fadeOut("slow", function () {
        $("#fortune").css("display", "flex").fadeIn("slow,", function () {
          $(".answer").append(responses[random])
        })
      });
    })

    $("input").keydown(function (event) {
      if (event.which == 13) {
        event.preventDefault();
        $('#entry').fadeOut("slow", function () {
          $('#fortune').fadeIn("slow", function () {
            $(".answer").append(responses[random])
          })
        })
      }
    });

    $("#refresh").click(function () {
      $("#fortune").fadeOut("slow", function () {
        $("#entry").fadeIn("slow", function () {
          window.location.reload();
        })
      })
    });

    // advice part

    const adviceUrl = 'https://api.adviceslip.com/advice';
    const adviceDiv = document.getElementById('adviceDiv');
    const adviceBTN = document.getElementById('adviceBTN');

    function generateHTML(slip) {
      const section = document.createElement('section');
      adviceDiv.appendChild(section);
      section.innerHTML = `
        <h3>${slip.advice}</h3>
      `;
    }

    adviceBTN.addEventListener('click', (event) => {
      event.target.textContent = "coming!";
      fetch(adviceUrl)
      .then(response => (response.json())
      .then(response => response.slip)
      .then(generateHTML)
      .catch( (e) => {
      adviceBTN.innerHTML = '<h3>Whoops, sorry - astral blocking!</h3>';
    })
    .finally( () => 
    event.target.textContent = 'more advice?'
      )
      )});

      // moon phase part

      function load_moon_phases(obj,callback){
        var gets=[]
        for (var i in obj){
            gets.push(i + "=" +encodeURIComponent(obj[i]))
        }
        gets.push("LDZ=" + new Date(obj.year,obj.month-1,1) / 1000)
        var xmlhttp = new XMLHttpRequest()
        var url = "https://www.icalendar37.net/lunar/api/?" + gets.join("&")
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                callback(JSON.parse(xmlhttp.responseText))
            }
        }
        xmlhttp.open("GET", url, true)
        xmlhttp.send()
    }

      function moonGuy (moon) {    
        const day = new Date().getDate()
        const dayWeek=moon.phase[day].dayWeek
        const genHtml = "<div>" +
        "<b>" + moon.nameDay[dayWeek]+ "</b>" +
        "<div>" + day + " <b>" + moon.monthName + "</b> " +
        moon.year + "</div>" +
        "<div shadow>" + moon.phase[day].svg + "</div>" +
        "<div>" + moon.phase[day].phaseName + " " +
        "" + ((moon.phase[day].isPhaseLimit )? ""  :   Math.round(moon.phase[day].lighting) + "%") +
        "</div>" +
        "</div>"
        document.getElementById("moonPhase").innerHTML = genHtml;
    }   
    const configMoon = {
        lang  		:'en', 
        month 		:new Date().getMonth() + 1,
        year  		:new Date().getFullYear(),
        size		:150, 
        lightColor	:"rgb(255,255,210)", 
        shadeColor	:"black", 
        texturize	:false, 
    }

    const moonBtn = document.getElementById('moonBtn');


    moonBtn.addEventListener('click', (event) => {
      event.target.textContent = 'could be';
      document.getElementById("moon").classList.remove("hidden");
      document.getElementById("moonPhase").classList.remove("hidden");
      load_moon_phases(configMoon, moonGuy);
    });
