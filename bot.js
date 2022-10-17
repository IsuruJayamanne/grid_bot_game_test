function processData(input) {
    var lines = input.split('\n');
    var dimension = parseInt(lines[0]);
    var grid = [];
    for(var i = 1; i <= dimension; ++i)
    {
        grid.push(lines[i]);
    }
    displayPathtoPrincess(dimension, grid);
}

function displayPathtoPrincess(dimension, grid)
{
    // Your Code here
    loop1:
    for(var i = 0; i < dimension; i++)
    {
        // process.stdout.write("\n")
        for(var j = 0; j < dimension; j++)
        {
            var gridItem = grid[i][j];
            // process.stdout.write(gridItem.toString())
            if(gridItem == "p"){
                
                let center = (dimension + 1)/2;
                let x = j + 1 - center;
                let y = i + 1 - center;
                
                // process.stdout.write(x.toString())
                // process.stdout.write(y.toString())
                
                let xMove = x > 0 ? "RIGHT\n":"LEFT\n";
                let yMove = y < 0 ? "UP\n":"DOWN\n";
                
                for(var a = 0; a<Math.abs(x); a++){
                    process.stdout.write(xMove)
                }
                for(var a = 0; a<Math.abs(y); a++){
                    process.stdout.write(yMove)
                }
                break loop1;
                
            }
        };
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";

process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

