setTimeout(function(){
    var encountered = false;
    var checkPageload = setInterval(function(){
        if(document.querySelector('.SCxLW') && !encountered) {
            encountered = true;
            let div = document.createElement("div")
            div.id = "disclaimer";
            div.classList.add('popupB');
            $('.SCxLW').append(div); 
            div.innerHTML = '<div class="heading"> Relating to each other\'s identities through impersonation </div>' +
            '<div style="margin-top:30px"><p id="lala">You have been randomly assigned Rajshree\'s personality for the day. </p>' +
            '<p style="margin-top:10px">Your actions and reactions will be controlled by the voices in her head </p></div>' +
            '<p style="margin-top:20px">Let\'s see how it feels to experience daily activies as someone else so we can relate better with each other  🤗 </p>' +
            '<div style="margin-top:20px" class="buttonMain" id="O1">   🧙🏽‍♀️ Transform me into her</div>'
            $('.buttonMain').on('click',function() {
            $('.popupB').remove(); 
                
                setTimeout(function() {
                    var div1 = document.createElement("div")
                    div1.id = "addStoryPrompt";
                    div1.classList.add('popupB');
                    $('.SCxLW').append(div1); 
                    div1.innerHTML = '<div class="heading"> Let\'s get to know her </div>' +
                    '<ul>' +
                    '<li style="margin-top:30px"> 1.A girl in her early 20s </li> ' +
                    '<li style="margin-top:30px"> 2.Gets anxious everytime someone approaches to talk to her </li>' +
                    '<li style="margin-top:30px"> 3.Adds an extra "HA" to her Hahaha\'s to not sound rude </lli>' +
                    '<li style="margin-top:30px"> 4.Plans her reply to people a night in advance </li>' +
                    '<li style="margin-top:30px"> 5.Will speak nothing in a conversation she is interested in because of her social anxiety. </li>' +
                    '</ul>' +
                    '<div style="margin-top:20px" class="buttonMain" id="dive">   Starting now you will be reading her head chatter!</div>'

                    $('#dive').on('click',function() {
                        $('#addStoryPrompt').remove(); 
                        setTimeout(function() {
                            var div1 = document.createElement("div")
                            div1.id = "addStoryPrompt";
                            div1.classList.add('popupA');
                            $('.SCxLW').append(div1); 
                            div1.innerText = ' 🖖🏼 Let me add the funny photos I took last week to my story' 
        
                            setTimeout(function() {
                                $('#addStoryPrompt').remove(); 
                                clearInterval(checkPageload);
                            },4000)
        
                        },1500)
                    })

                },2000)

                
                
            })
        }
    },100)
},2000)

var messageWindow = false
var loadMessage = setInterval(function() {
    if(!messageWindow && document.querySelector(".t30g8")) {
        console.log('LOADED')
        messageWindow = true;
        setTimeout(function() {
            var div1 = document.createElement("div")
            div1.id = "sendMessagePrompt";
            div1.classList.add('popupA');
            $('.t30g8').append(div1); 
            div1.innerHTML = '<div>   🥴 I still need to reply to Unnati\'s message <div>' + 
                            '<div>  🐥 -------------------- I think I should it now. </div>' 

            setTimeout(function() {
                $('#sendMessagePrompt').remove(); 
            },4000)

        },6000)
        setTimeout(function(){ 
            console.log('WORKKKK !!')
            var el = document.querySelector(".-qQT3");
            console.log('el',el);
            $('.-qQT3').on( "click", function() {
                setTimeout(function() {
                    var el1 = document.querySelector(".ItkAi");
                    console.log('PLZ COOPERATE');
                    var optionPicked = false
                    console.log('el1',el1)
                    $('.ItkAi').on("click",function() {
                        var div1 = document.createElement("div");
                        div1.id = "sendMessage";
                        div1.classList.add('popup');
                        $('.ItkAi').append(div1); 
                        div1.innerHTML = '<div class="container"><p id="lala">Well I did overthink the message last night! But want to overthink this once more?</p>' +
                                        '<div class="button" id="getOut">  😭 Get out of my head</div>'+
                                        '<div class="button" id="overThink"> 😰 Make me overthink</div></div>'
                        
                        $('#getOut').on('click',function() {
                            setTimeout(function() {
                                optionPicked = true;
                                $('.popup').remove(); 
                            },100)
                        })
                        $('#overThink').on('click',function() {
                            setTimeout(function() {
                                optionPicked = true;
                                $('.popup').remove(); 
                            },100)
                        })
        
                        var pushAgain = setInterval(function() {
                            if(optionPicked) {
                                clearInterval(pushAgain);
                                setTimeout(function(){
                                    let div = document.createElement("div");
                                    div.id = "text1";
                                    div.classList.add('popupA');
                                    $('.ItkAi').append(div); 
                                    div.innerText="Ok! So consider this...";
                                    
                                    let div1 = document.createElement("div");
                                    div1.classList.add('popupA');
                                    div1.id = "text2";
                                    $('.ItkAi').append(div1); 
                                    div1.innerText=" 😳 What if she thinks I am too desperate?";
                                    
        
                                    setTimeout(function() {
                                        $('.popupA').remove(); 
                                        $('.popupA').remove(); 
                                        let div1 = document.createElement("div");
                                        div1.classList.add('popupA');
                                        div1.id = "text2";
                                        $('.ItkAi').append(div1); 
                                        div1.innerText="😓 Do I type a lot !?";
                                        
                                    },4000)

                                    setTimeout(function() {
                                        console.log('REMOVE2')
                                        $('.popupA').remove(); 
                                        let div1 = document.createElement("div");
                                        div1.classList.add('popupA');
                                        div1.id = "text1";
                                        $('.ItkAi').append(div1); 
                                        div1.innerText="😓 What if she finds my reply too stupid !?";
                                        
                                    },6000)

                                    setTimeout(function() {
                                        console.log('REMOVE2')
                                        $('.popupA').remove(); 
                                        let div1 = document.createElement("div");
                                        div1.classList.add('popupA');
                                        div1.id = "text3";
                                        $('.ItkAi').append(div1); 
                                        div1.innerText="😓 Do I type a lot !?";
                                        
                                    },8000)

                                    setTimeout(function() {
                                        console.log('REMOVE2')
                                        $('.popupA').remove(); 
                                        let div1 = document.createElement("div");
                                        div1.classList.add('popupA');
                                        div1.id = "text1";
                                        $('.ItkAi').append(div1); 
                                        div1.innerText="😓 ###!!!@@@@@!!";
                                        
                                    },8000)

                                    setTimeout(function() {

                                        let div1 = document.createElement("div");
                                        div1.classList.add('popupA');
                                        div1.id = "text1";
                                        $('.ItkAi').append(div1); 
                                        div1.innerText="🤕 Ugh! I am better off not messaging anyone at all!";
                                        
                                    },10000)
                                    
                                    setTimeout(function() {

                                        let div1 = document.createElement("div");
                                        div1.classList.add('popupA');
                                        div1.id = "text1";
                                        $('.ItkAi').append(div1); 
                                        div1.innerText="🤷 I think I should just like her message! Low effort";
                                        
                                    },12000)
                                    setTimeout(function() {
                                        
                                        console.log('REMOVE3')
                                        $('.popupA').remove(); 
                                        $('.popupA').remove(); 
                                        $('.popupA').remove(); 
                                        clearInterval(pushAgain);
                                        
                                    },14000)

                                },1000)
                            }
                        },100)
        
                    })
                    
        
                    var el2 = document.querySelector(".frMpI");
                    $('.frMpI').on("click",function() {
                        setTimeout(function() {
                            var div = document.createElement("div");
                            div.id = "likeMessage1";
                            div.classList.add('popup');
                            $('.ItkAi').append(div); 
                            div.innerText="😰 Just like....? Should I reply too?";
                        },4000)
                        setTimeout(function() {
                            var div = document.createElement("div");
                            div.id = "likeMessage2";
                            div.classList.add('popup');
                            $('.ItkAi').append(div); 
                            div.innerText="😨 Was it rude?";
                        },5000)
                        setTimeout(function() {
                            var div = document.createElement("div");
                            div.id = "likeMessage3";
                            div.classList.add('popup');
                            $('.ItkAi').append(div); 
                            div.innerText="🥴 Should I add more?";
                        },6000)
                        setTimeout(function() {
                            $('#likeMessage1').remove();
                        },10000)
                        setTimeout(function() {
                            $('#likeMessage2').remove();
                        },12000)
                        setTimeout(function() {
                            $('#likeMessage3').remove();
                            clearInterval(loadMessage);
                        },13000)
                    })
                },300)
        
            } )
        }, 4000);
    }
},100)

setTimeout(function(){ 
    var el = document.querySelector(".JdY43");
    console.log('postStory',el);
    $('.JdY43').on('click',function() {
        let exists = false
        var checkExist = setInterval(function() {
            if ($('._Z29A').length && !exists) {
                console.log("Exists!");
                exists = true;
                let optionPicked = false
                setTimeout(function() {
                    let div = document.createElement("div")
                    div.id = "postStory0";
                    div.classList.add('popupA');
                    $('._9eogI').append(div); 
                    div.innerHTML = '<div class="container"><p id="lala">Hmmm.. What if people do not find this interesting? </p>' +
                    '<div class="button" id="O1">  😭 Get out of my head</div>'+
                    '<div class="button" id="O2"> 🤥 Does not bother me </div></div>'
                    $('.button').on('click',function() {
                        console.log('CLICKK')
                        setTimeout(function() {
                            optionPicked = true;
                            $('.popupA').remove(); 
                        },100)
                    })
                },3000);
               
                
                var trigger = setInterval(function() {
                    if(optionPicked) {
                        optionPicked = false;
                    setTimeout(function() {
                        let div = document.createElement("div")
                        div.id = "postStory1";
                        $('#postStory0').remove();
                        div.classList.add('popup');
                        $('._9eogI').append(div); 
                        div.innerText=" 🙃 Should I just not post ?";
                    },2000)

                    setTimeout(function() {
                        let div = document.createElement("div")
                        div.id = "postStory2";
                        div.classList.add('popup');
                        $('._9eogI').append(div); 
                        div.innerText=" 🤔 Is the grammer correct ?"; 
                    },3500)

                    setTimeout(function() {
                        let review = false;
                        let div = document.createElement("div")
                        div.id = "postStory3";
                        div.classList.add('popup');
                        $('._9eogI').append(div); 
                        div.innerHTML = '<div class="container"><p>😏 Should I get it reviewed ? </p>' +
                        '<div class="button" id="review">  😭 Get out </div>'
                        $('#review').on('click',function() {
                            console.log('CLICKK')
                            review = true;
                            $('#review').remove(); 
                            var postreview = setInterval(function() {
                                if(review) {
                                    review = false;
                                    setTimeout(function() {
                                        let div = document.createElement("div")
                                        div.id = "postStory8";
                                        div.classList.add('popup');
                                        $('._9eogI').append(div); 
                                        div.innerText="🙄 Is it too generic ?";
                                    },1000);
                
                                    setTimeout(function() {
                                        let div = document.createElement("div")
                                        div.id = "postStory4";
                                        div.classList.add('popup');
                                        $('._9eogI').append(div); 
                                        div.innerText="🥺 ###@@@@!!!!#####";
                                    },2500);
                
                                    setTimeout(function() {
                                        let judge = false;
                                        let div = document.createElement("div")
                                        div.id = "postStory5";
                                        div.classList.add('popup');
                                        $('._9eogI').append(div); 
                                        div.innerHTML = '<div class="container"><p>🥴 Will anyone judge me for this? </p>' +
                                        '<div class="button" id="judge">  🥺 !!!! </div>'
                                         $('#judge').on('click',function(){
                                            judge = true;
                                            $('#judge').remove(); 
                                            var willJudge = setInterval(function() {
                                                if(judge) {
                                                    judge = false;
                                                    setTimeout(function() {
                                                        let div = document.createElement("div")
                                                        div.id = "postStory6";
                                                        div.classList.add('popup');
                                                        $('._9eogI').append(div); 
                                                        div.innerText="🤕 OMG";
                                                    },1000);
                                
                                                    setTimeout(function() {
                                                        let div = document.createElement("div")
                                                        div.id = "postStory7";
                                                        div.classList.add('popup');
                                                        $('._9eogI').append(div); 
                                                        div.innerText="🥺 Why am I like this?";
                                                    },2500);

                                                    setTimeout(function() {
                                                        $('#postStory1').remove();
                                                        $('#postStory2').remove();
                                                        $('#postStory3').remove();
                                                        $('#postStory4').remove();
                                                        $('#postStory5').remove();
                                                        $('#postStory6').remove();
                                                        $('#postStory7').remove();
                                                        $('#postStory8').remove();
                                                        setTimeout(function() {
                                                            let div = document.createElement("div")
                                                            div.id = "firstOk";
                                                            div.classList.add('popup');
                                                            $('._9eogI').append(div); 
                                                            div.innerText="OK";
                                                        },1000)
                                                        setTimeout(function() {
                                                            let div = document.createElement("div")
                                                            div.id = "secondOk";
                                                            div.classList.add('popup');
                                                            $('._9eogI').append(div); 
                                                            div.innerText="OK";
                                                        },2000)
                                                        setTimeout(function() {
                                                            let div = document.createElement("div")
                                                            div.id = "thirdOk";
                                                            div.classList.add('popup');
                                                            $('._9eogI').append(div); 
                                                            div.innerText="OK";
                                                            clearInterval(checkExist);
                                                        },3000)
                                                        
                                                        setTimeout(function() {
                                                            $('#firstOk').remove();
                                                            $('#secondOk').remove();
                                                            $('#thirdOk').remove();
                                                            let div = document.createElement("div")
                                                            div.id = "doIt";
                                                            div.classList.add('popup');
                                                            $('._9eogI').append(div); 
                                                            div.innerText="Just post!";
                                                        },5000)
                                
                                                        setTimeout(function() {
                                                            $('#doIt').remove();
                                                            clearInterval(willJudge);
                                                            clearInterval(postreview);
                                                            clearInterval(trigger);
                                                        },6000)
                                                        
                                                    },3500)

                                                }
                                            },100)
                                         })
                                    },4900);
                
                                }
                            },100)
                        })
                        
                    },6000);

                }
                },100) 
            }
        }, 100);
    })
}, 2000);

