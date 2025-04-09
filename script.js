let box=document.getElementById('shadowbox');

            //This section for inputvalue
            let offsetinput=document.getElementById('offset');
            let blurinput=document.getElementById('blurset');
            let backGroundColorInput=document.getElementById('backgroundcolorset');
            let lightoffsetcolorInput=document.getElementById('lightoffsetcolorset');
            let drarkoffsetcolorInput=document.getElementById('darktoffsetcolorset');
            let heightInput=document.getElementById('heightset');
            let widthInput=document.getElementById('widthset');
            let radiusInput=document.getElementById('radiusset');
            let textInput=document.getElementById('textset');
            let fontcolorInput=document.getElementById('fontcolorset');
            let fontSizeInput=document.getElementById('fontsizeset');

            //This section for valuebox
            let bodyvaluebox=document.getElementById('maincontainer');
            let contorlsvaluebox=document.getElementById('contorls');
            let cssshadowbox=document.getElementById('cssshadow');
            

            let offsetvaluebox=document.getElementById('offsetvalue');
            let blurvaluebox=document.getElementById('blurvalue');
            let backGroundColorBox=document.getElementById('backgroundcolorvalue');
            let cssvalubox=document.getElementById('cssboxvalue');
            let lightoffsetcolorbox=document.getElementById('lightoffsetcolorvalue');
            let Darktoffsetcolorbox=document.getElementById('Darktoffsetcolorvalue');
            let heightbox=document.getElementById('heightvalue');
            let widthbox=document.getElementById('widthvalue');
            let radiusbox=document.getElementById('radiusvalue');
            let textbox=document.getElementById('radiusvalue');
            let fontcolorbox=document.getElementById('fontcolorvalue');
            let fontSizebox=document.getElementById('fontsizevalue');
            let cssbackgroundbox=document.getElementById('css-backgroundcolor-value');
            let cssheightbox=document.getElementById('css-height-value');
            let csswidthbox=document.getElementById('css-width-value');
            let cssradiusbox=document.getElementById('css-radius-value');
            let csscolorbox=document.getElementById('css-color-value');
            let cssfontsizebox=document.getElementById('css-fontsize-value');
            
            let hidebackgroundcolor=document.getElementById('backgroundcolor-attribute');
            let hideheight=document.getElementById('height-attribute');
            let hidewidth=document.getElementById('width-attribute');
            let hideradius=document.getElementById('radius-attribute');
            let hidecolor=document.getElementById('color-attribute');
            let hidefontsize=document.getElementById('fontsize-attribute');
            
            function addvalue(){  
            let offset=offsetinput.value;
            let blur=blurinput.value;
            let backGroundColor=backGroundColorInput.value;
            let lightOffsetColor=lightoffsetcolorInput.value;
            let darkOffsetColor=drarkoffsetcolorInput.value;
            let heights=heightInput.value;
            let width=widthInput.value;
            let radius=radiusInput.value;
            let text=textInput.value;
            let fontColor=fontcolorInput.value;
            let fontSize=fontSizeInput.value;
            
            let shadowvalue=offset+"px "+offset+"px "+blur+"px "+darkOffsetColor+", " +(-offset)+"px "+(-offset)+"px "+blur+"px "+lightOffsetColor;                               
            box.style.boxShadow=offset+"px "+offset+"px "+blur+"px "+darkOffsetColor+", " +(-offset)+"px "+(-offset)+"px "+blur+"px "+lightOffsetColor;
            contorlsvaluebox.style.boxShadow=shadowvalue;
            cssshadowbox.style.boxShadow=shadowvalue;
                  
            box.style.backgroundColor=backGroundColor; 
            box.style.height=heights+"px";
            box.style.width=width+"px";
            box.style.borderRadius=radius+"px";
            box.style.color=fontColor;
            box.style.fontSize=fontSize+"px";

            bodyvaluebox.style.backgroundColor=backGroundColor;

            //this is for add text
            offsetvaluebox.innerText=offset +"px";
            blurvaluebox.innerText=blur +"px";
            backGroundColorBox.innerText= backGroundColor;
            lightoffsetcolorbox.innerText=lightOffsetColor;
            Darktoffsetcolorbox.innerText=darkOffsetColor;
            heightbox.innerText=heights+"px";
            widthbox.innerText=width+"px";
            radiusbox.innerText=radius+"px";
            fontSizebox.innerText=fontSize+"px";
            box.innerText=text;
            fontcolorbox.innerText=fontColor;

            cssheightbox.innerText=heights+"px;";
            cssfontsizebox.innerText=fontSize+"px;";
            csscolorbox.innerText=fontColor+";";
            cssradiusbox.innerText=radius+"px;";
            csswidthbox.innerText=width+"px;";
            cssbackgroundbox.innerText = backGroundColor+";";
            cssvalubox.innerHTML=offset+"px "+offset+"px "+blur+"px "+darkOffsetColor+", "  +(-offset)+"px "+(-offset)+"px "+blur+"px "+lightOffsetColor+";";
            
            // cssvalubox.innerHTML=offset+"px "+offset+"px "+blur+"px "+darkOffsetColor+", "  +(-offset)+"px "+(-offset)+"px "+blur+"px "+lightOffsetColor+";<br>"+
            // "background-color:"+backGroundColor+";<br>"+
            // "height:"+heights+"px"+";<br>"+
            // "width:"+width+"px"+";<br>"+
            // "border-radius:"+radius+"px"+";<br>"+
            // "font-size:"+fontSize+"px"+";<br>"+
            // "color:"+fontColor+"px"+";<br>";
                //for color value
            
                if(backGroundColor=="#000000"){
                    hidebackgroundcolor.style.display="none";

                }
                else{
                    hidebackgroundcolor.style.display="block";
                }

                if(heights==="0"){
                    hideheight.style.display="none";

                }
                else{
                    hideheight.style.display="block";
                }

                if(width==="0"){
                    hidewidth.style.display="none";

                }
                else{
                    hidewidth.style.display="block";
                }

                if(radius==="0"){
                    hideradius.style.display="none";

                }
                else{
                    hideradius.style.display="block";
                }
                if(fontColor==="#000000"){
                    hidecolor.style.display="none";

                }
                else{
                    hidecolor.style.display="block";
                }

                if(fontSize==="0"){
                    hidefontsize.style.display="none";

                }
                else{
                    hidefontsize.style.display="block";
                }

            }

            // offsetinput.addEventListener("input" ,addvalue);
            // blurinput.addEventListener("input" ,addvalue);
            // backGroundColorInput.addEventListener("input" ,addvalue);
            // lightoffsetcolorInput.addEventListener("input" ,addvalue);
            // drarkoffsetcolorInput.addEventListener("input" ,addvalue);
            // heightInput.addEventListener("input" ,addvalue);
            // widthInput.addEventListener("input" ,addvalue);
            // radiusInput.addEventListener("input" ,addvalue);
            // textInput.addEventListener("input" ,addvalue);
            // fontcolorInput.addEventListener("input" ,addvalue);
            // fontSizeInput.addEventListener("input" ,addvalue);


            const inputs = [
                offsetinput,
                blurinput,
                backGroundColorInput,
                lightoffsetcolorInput,
                drarkoffsetcolorInput,
                heightInput,
                widthInput,
                radiusInput,
                textInput,
                fontcolorInput,
                fontSizeInput
            ];
            inputs.forEach(input => {
                input.addEventListener("input", addvalue);
            });


            let button=document.getElementById('btn');
            let hiddenbox=document.getElementById('sizecontroler');
            x=1;
            function actionbtn(){  
                if(x==1){
                    hiddenbox.style.transform = "translatex(-400px)";
                    hiddenbox.style.transition = "transform 1s ease";
                    button.innerText="Show Controler";
                    box.style.transform = "translateY(-150px)";
                    box.style.transition = "transform 1s ease";

                    x=2
                }
                else{
                    hiddenbox.style.display='block';
                    button.innerText="Hide Controler";
                    box.style.transform = "translateY(0px)";

                    hiddenbox.style.transform = "translatex(0px)";
                    
                    x=1
                }
            }


            

            
