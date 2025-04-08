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
            let cssbackgroundbox=document.getElementById('cssbackgroundvalue');
            let cssheightbox=document.getElementById('cssheightvalue');
            let csswidthbox=document.getElementById('csswidthvalue');

            
            
            


            



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
            
            



                                  
            box.style.boxShadow=offset+"px "+offset+"px "+blur+"px "+darkOffsetColor+", " +(-offset)+"px "+(-offset)+"px "+blur+"px "+lightOffsetColor;
            
            
            box.style.backgroundColor=backGroundColor; 
            box.style.height=heights+"px";
            box.style.width=width+"px";
            box.style.borderRadius=radius+"px";
            box.style.color=fontColor;
            box.style.fontSize=fontSize+"px";

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
            
            cssvalubox.innerHTML=offset+"px "+offset+"px "+blur+"px "+darkOffsetColor+", "  +(-offset)+"px "+(-offset)+"px "+blur+"px "+lightOffsetColor+";<br>"+
            "background-color:"+backGroundColor+";<br>"+
            "height:"+heights+"px"+";<br>"+
            "width:"+width+"px"+";<br>"+
            "border-radius:"+radius+"px"+";<br>"+
            "font-size:"+fontSize+"px"+";<br>"+
            "color:"+fontColor+"px"+";<br>";
            




            



                //for color value
            
       


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

            
