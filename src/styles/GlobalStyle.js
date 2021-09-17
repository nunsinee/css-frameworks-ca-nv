import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{box-sizing:border-box;}

html, body{
	height:100%;
}

body{
	margin:0;
	padding:0;
	background:radial-gradient(#ffffff, #e5e5e5);
	font-family:"Lato", sans-serif;

}

#root{
	display:flex;
	flex-direction:column;
	height:100%;
}

p{
	margin:0;
	color:#767676;
}

.homeContent{
	margin-bottom:3rem;
}

footer{
	background-color: white;
	width: 100%;
	height:160px;
	flex-shrink:0;

}

	@media (min-width:768px){
		footer {height:60px;}

}

`;

export default GlobalStyle;
