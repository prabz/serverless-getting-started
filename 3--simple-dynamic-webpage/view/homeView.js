'use strict';

module.exports.view = ` 
<html>
    <head>
        <title>Serverless Webpage Example</title>
        <style>
            body {
                text-align: center;
                margin: 0;
            }
            ul {
                display: flex;
                flex-direction: row;
                list-style: none;
                padding: 0;
                justify-content: center;
                margin: 0 auto;
            }
            ul li {
                margin-left: 50px;
                margin-right: 50px;
                margin-top: 15px;
                margin-bottom: 15px;
            }
            .tema1 {
                background: lightgreen;
            }
            .tema2 {
                background: lightblue;
            }
            .tema3 {
                background: lightslategrey;
            }
            .tema4 {
                background: white;
            }
            #section{
                padding: 2em;
                margin-top: 1.0em;
                margin-right: 1.0em;
                margin-bottom: 1.0em;
                overflow: hidden;
            }
            #tabellaOrari {
                width: 100%;
                table-layout: fixed; 
                padding: 0.5em;
                text-align: center;
            }
            #tabellaOrari th{
                background-color: #FF6633;
                padding: 1em;
                border: 1px solid black;
            }
            #tabellaOrari th, td {
                border: 1px solid black;
                word-wrap: break-word;
            }
            #tabellaOrari caption{
                font-size:1.5em;
            }
            #tabellaOrari tr:nth-child(odd) {
                background-color: #FFFF99
            }
        </style>
    </head>
    <body class={{bodyClass}}>
        <h1>Serverless rocks!</h1>
        {{#if featureflags.title}}
            <h1>{{title}}</h1>
        {{/if}}

        {{#if featureflags.navbar}}
            <div class={{containerClass}}>
                <ul>
                    {{#each navBarElements}}
                        <li>{{this}}</li>
                    {{/each}} 
                </ul>
            </div>
        {{/if}}

        <ul>
            {{#each matches}}
                <li> 
                </li>
            {{/each}} 
        </ul>


        <div id = "section">
		<table id="tabellaOrari"  summary="Descrive gli orari delle partite">
			<thead>
			<tr class="tabHeaders">
                <th class="tabHeaders" scope="col">Giocatore 1</th>
                <th class="tabHeaders" scope="col">Giocatore 2</th>
                <th class="tabHeaders" scope="col">Giocatore 3</th>
                <th class="tabHeaders" scope="col">Giocatore 4</th>
                <th class="tabHeaders" scope="col">Orario della partita</th>
			</tr>
			</thead>
            <tbody>
                {{#each matches}}
                    <tr>
                        {{#each this.players}}
                            <td>{{this}}</td>
                        {{/each}}
                            <td>{{this.timestamp}}</td>
                    </tr>
                {{/each}} 
            
			</tbody>
		</table>
	</div>

    </body>
</html>
`;


