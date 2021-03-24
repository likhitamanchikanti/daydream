import React from 'react';

function formatLines(str){
  var parts = str.split(' ')
  var outStr = '';

for (var i = 0; i < parts.length; i++) {
  outStr += ' ' + parts[i];
  
  if ((i + 1) % 10 === 0) {
    outStr += "\n";
  }
}
return outStr;
}

const ContributorList = (contributor) => (
    <div className = "ContributorList">
        
        <div>
            <br></br>
            <div className="Contributor-Name">
                {contributor.name}
            </div>
        </div>
        <div className = "SplitScreen">
        <div className = "Contributor-Photo">
            <br></br>
            <img src={contributor.image} width={150} height={150}/>
        </div>
        <div>
            <div className  ="Text">
                <p style ={{width:"500px"}}>
                {contributor.description}
                </p>
            </div>
        </div>
        </div>
        <br></br>
        <hr size="20px" width="900x" color="grey"></hr>
    </div>
);

export default ContributorList