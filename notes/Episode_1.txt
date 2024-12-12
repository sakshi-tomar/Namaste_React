*********Episode--01 "INCEPTION"**********

BRING REACT INTO OUR PROJECT----------------->

    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <!-- this is core of react framework algorithm -->
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <!-- usefull for dom operations,-->

Q - WHY DO WE HAVE TWO DIFFERENT FILES CAN'T WE JUST CLUB BOTH THE FILES TOGETHER?
A- NO, beacuse react doesn't work only on browsers , it also works on fone (react native),react 3D.
1st file is the core file, whereas DOM is the bridge b/w brosers and react.

      HELLO WORLD USING JAVASCRIPT------------>
   <!-- <script>
        const heading = document.createElement("h1");
        // an h1 element is created
        const root = document.getElementById("root");
        heading.innerHTML = "Hello World,from JavaScript";
        root.appendChild(heading); // this heading will go inside root as a child element
    </script> -->
 
 
const heading = React.createElement(
    "h1", 
    {id:"heading",xyz:"abc"},   //attributes passed into h1 
    "Hello World from REACT"     //children
);


2.React is a library not a framework beacuse it can applied to a small portion of the page also. it is not a full flegded framework.
3.Order of files matter where we place our script in html.  