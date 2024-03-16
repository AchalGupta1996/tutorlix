class myBot{
    constructor(textbox)
    {
            this.textbox=textbox;
    }

    // showAnswer(){
    //     let textbox1=document.getElementById("textbox").value;
    //     if(textbox1=this.text){
    //         console.log("Hello,there")
    //     }
    // }
}

    function showAnswer(){
        let text= document.getElementById("textbox").value;

        // console.log(keyword)

        // let keywords=["Hello","Hi","Games","Instagram","Tutorlix","Form"];
        

        if (text.match(/hello/gi)){
                // console.log("Hello,there")
                document.getElementById("answer").innerHTML="Hello,There"
        }
        else if(text.match(/hi/gi)){
            console.log("Hi,there")
            document.getElementById("answer").innerHTML="Hi,There"
        }

        else if(text.match(/games/gi)){
            document.getElementById("answer").innerHTML=`Yes I do like Playing Games <a href="https://poki.com/" target="_blank">link</a>`
        }
       else if(text.match(/instagram/gi)){
            document.getElementById("answer").innerHTML=`<img src="https://thumbs.dreamstime.com/b/instagram-new-logo-chisinau-moldova-september-instagram-new-logo-printed-white-paper-instagram-online-mobile-photo-128373447.jpg"/>`
        }

        else if(text.match(/tutorlix/gi)){
            document.getElementById("answer").innerHTML=`<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="180" height="110" x="10" y="10"  fill="yellow" />
            <circle r="40" cx="100" cy="67" fill="white" />
            <text x="70" y="75" fill="black" font-size="20">Tutorlix</text>
          </svg>`
        }

        else if(text.match(/form/gi)){
            document.getElementById("answer").innerHTML=`
            <form>

            <select>
                <option>Yes</option>
                <option>No</option>
                <option>Maybe</option>
            </select>          
            </form>`
        }
        

        else{
            document.getElementById("answer").innerHTML="Sorry i dont know that"
        }


    }

    // const hello= new myBot("hello");
    // hello.showAnswer();